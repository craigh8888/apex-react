
import { ReactComponent as FolderIconBabyBlue } from '../images/folder-light-blue.svg';
import { ReactComponent as RightArrow } from '../images/right-arrow.svg';
import {Link} from 'react-router-dom'


const Folder = ({icon,folderName, dateCreated, size, fileCount}) => {

    return (
        <tr className="folder">
        <td>{icon}</td>
        <td className="variable-width name">{folderName}</td>
        <td>{/* folder*/}</td>
        <td>{dateCreated}</td>
        <td>{size}</td>
        <td>{fileCount}</td>
        <td></td>
        <td><RightArrow /></td>
    </tr>
    )
}

export default Folder


/**
 * 
 * <Folder 
 * folderName={}
 * dateCreated={}
 * size={}
 * fileCount={}
 * category={}
 * />
 */