
import { Link } from 'react-router-dom'

function AccountDelete() {

    return (
        <>
            <div className='row account-delete'>
                <Link className="delete-account" to="#">Delete Account</Link>

            </div>
        </>
    )
}

export default AccountDelete
