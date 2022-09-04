import React, { useEffect, useState } from 'react';
import '../../styles/Table.css'
import { ReactDOM } from 'react';
import { ReactComponent as FoldersIcon } from '../../images/icon-folder-blue.svg';
import axios from 'axios';
import ReactPaginate from 'react-paginate';


const Table = ({ headerNames }) => {


    const [dataTable, setDataTable] = useState();

    const [pageCount, setPageCount] = useState(0);

    const [showResults, setShowResults] = useState(false);

    let limit = 10;


    useEffect(() => {
        const getFiles = async () => {
            const res = await fetch(
                `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setPageCount(Math.ceil(total / limit));
            setShowResults(true);
            setDataTable(data);

        }


        // const getFiles = async () => {
        //     const res = await fetch(
        //         'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10'
        //     );
        //     const data = await res.json();
        //     setDataTable(data)
        // };
        getFiles();
        // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20').then(res => setDataTable(res.data)).catch(err => console.log(err));

        // console.log('Table Data:', dataTable)
    }, [limit]);

    const fetchFiles = async (currentPage) => {
        const res = await fetch(
            `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        if (data.length == 0) {
            console.log('Data Length is less than 0 - Hide Pagination');
            setShowResults(false);
            var Pagination = document.getElementsByClassName('pagination');

        } else {
            setShowResults(true);
        }
        return data;
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const filesFromServer = await fetchFiles(currentPage);

        setDataTable(filesFromServer);

        window.scrollTo(0, 0);
        // could be removed if not required 
        console.log('this is files from server afer being set', filesFromServer)
        // increment by one 

    }

    return <div>


        {
            !dataTable ? ("No Data Found") : (
                <>

                    <table className='blueTable table-curved'>
                        <thead>
                            <tr>
                                {headerNames?.map((name, index) => { return <th>{name}</th> })}
                            </tr>
                        </thead>
                        {/* <thead>
                            <tr>Icon</tr>	<tr>Name</tr>	<tr>Folder</tr>	<tr>Created</tr> <tr>Size</tr>	<tr>File Count</tr>	<tr>View File</tr>	<tr>Actions</tr>
                        </thead> */}
                        <tbody>

                            {
                                dataTable.map((item, index) => (
                                    <tr key={item.id}>

                                        <td>{item.id}</td>



                                        <td >{item.title}</td>




                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                    {showResults ? <ReactPaginate
                        previousLabel={'Previous'}
                        nextLabel={'next'}
                        // breakLabel={'...'}
                        pageCount={20}
                        marginPagesDisplayed={3}
                        pageRangeDisplayed={4}
                        onPageChange={handlePageClick}
                        containerClassName={'pagination links'}
                        pageClassName={'page-item'}
                        pageLinkClassName={'page-link'}
                        previousClassName={'page-item'}
                        previousLinkClassName={'page-link'}
                        nextClassName={'page-item'}
                        nextLinkClassName={'page-link'}
                        breakClassName={'page-item'}
                        breakLinkClassName={'page-link'}
                        activeClassName={'active'}

                    /> : null}

                </>
            )
        }


    </div>;
}

export default Table
