
import { ReactComponent as DownArrow } from '../images/down-arrow.svg';
import {Link} from 'react-router-dom'


const File = ({icon,folderName, dateCreated, size, fileCount, folder}) => {

    return (
        <tr>
        <td>{icon || ""}</td>
        <td className="variable-width name">{folderName || ""}</td>
        <td>{folder || ""}</td>
        <td>{dateCreated || ""}</td>
        <td>{size || ""}</td>
        <td>{fileCount || ""}</td>
        <td><Link className="view-files" to="#">View Files</Link></td>
        <td><Link className="actions" to="#">Actions <DownArrow /></Link></td>
    </tr>
    )
}

export default File