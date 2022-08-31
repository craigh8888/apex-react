import {Link} from 'react-router-dom'
import File from './File'
import Folder from './Folder'
import ViewerInner from './viewerinner/Viewer-Inner'


const Archive = () =>{
    const demoLinks = ["edwedwedwed","edwdewedwed","edwedwedwed","edwdewedwed"].map((link)=> <File folderName={link} />)
    const demoPages = [
        <Link className="active" to="#">1</Link> ,
        <Link to="#">2</Link> ,
        <Link to="#">...</Link> ,
        <Link to="#">8</Link> ]
  


    return (

        <>
        <ViewerInner 
        viewName={"Archive"}
        buttons={[<button>My button</button>, <button>My other button</button>]}
        headerNames={["Icon","Name","Folder","Created,Size","File Count", "View File", "Actions"]}
        rows={demoLinks}
        pagination={demoPages}
        
        />
        </>
    )
}


export default Archive