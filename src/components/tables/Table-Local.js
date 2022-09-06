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
        // const getFiles = async () => {
        //     const res = await fetch(
        //         `https://jsonplaceholder.typicode.com/todos?_page=1&_limit=${limit}`
        //     );
        //     const data = await res.json();
        //     const total = res.headers.get("x-total-count");
        //     setPageCount(Math.ceil(total / limit));
        //     setShowResults(true);
        //     setDataTable(data);

        // }



        const getFiles2 = async () => {

            // axios.get('http://localhost:3000/users')
            //     .then(resp => {
            //         data = resp.data;
            //         data.forEach(e => {
            //             console.log(`${e.first_name}, ${e.last_name}, ${e.email}`);
            //         });
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });




            const res2 = await fetch(
                `http://localhost:3500/files?type=folder&_limit=${limit}`
            );
            const data2 = await res2.json();
            const total2 = res2.headers.get("x-total-count");
            setPageCount(Math.ceil(total2 / limit));

            setDataTable(data2);

            if (data2.length < 10) {
                console.log('Data Length is less than 0 - Hide Pagination');
                setShowResults(false);
            } else {
                setShowResults(true);
            }
            // console.log('local data', data2);
            // axios.get('')
            //     .then(resp => {
            //         data2 = resp.data;
            //         data2.forEach(e => {
            //             console.log(`${e}, ${e.last_name}, ${e.email}`);
            //         });
            //     })
            //     .catch(error => {
            //         console.log(error);
            //     });

        }
        getFiles2();


        // const getFiles = async () => {
        //     const res = await fetch(
        //         'https://jsonplaceholder.typicode.com/todos?_page=1&_limit=10'
        //     );
        //     const data = await res.json();
        //     setDataTable(data)
        // };
        // getFiles();
        // axios.get('https://jsonplaceholder.typicode.com/todos?_limit=20').then(res => setDataTable(res.data)).catch(err => console.log(err));

        // console.log('Table Data:', dataTable)
    }, [limit]);

    const fetchFiles = async (currentPage) => {
        // const res = await fetch(
        //     `https://jsonplaceholder.typicode.com/todos?_page=${currentPage}&_limit=${limit}`
        // );
        const res = await fetch(
            `http://localhost:3500/files?type=folder&_page=${currentPage}&_limit=${limit}`
        );
        const data2 = await res.json();
        if (data2.length < 10) {
            console.log('Data Length is less than 0 - Hide Pagination');
            setShowResults(false);
            var Pagination = document.getElementsByClassName('pagination');

        } else {
            setShowResults(true);
        }
        return data2;
    };

    const handlePageClick = async (data2) => {
        console.log(data2.selected);

        let currentPage = data2.selected + 1;

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
                            <tr key="1">
                                {headerNames?.map((name, index) => { return <th >{name}</th> })}
                            </tr>
                        </thead>
                        {/* <thead>
                            <tr>Icon</tr>	<tr>Name</tr>	<tr>Folder</tr>	<tr>Created</tr> <tr>Size</tr>	<tr>File Count</tr>	<tr>View File</tr>	<tr>Actions</tr>
                        </thead> */}
                        <tbody>

                            {
                                dataTable.map((item, index) => (
                                    <tr key={item.id}>

                                        <td >{item.id}</td>



                                        <td >{item.fileName}</td>
                                        <td >{item.ParentFolder}</td>
                                        <td >View Folder Comp</td>
                                        {/* need to pass in stuff here */}
                                        <td ></td>

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
