
import { Link } from 'react-router-dom'

function Account({ bundlrAddress, bundlrBalance, fundBundlr, setOnramper }) {

    return (
        <>
            <h3 className='col-title'>Account</h3>

            <form>
                <div className='form-item-wrap'>
                    <label>
                        <span>Name</span>
                        <input type="text" name="name" placeholder='John Smith' />
                    </label>
                </div>
                <div className='form-item-wrap'>
                    <label>
                        <span>Email</span>
                        <input type="text" name="name" placeholder='john.s@gmail.com' />
                    </label>
                </div>
                <div className='form-item-wrap'>
                    <label>
                        <span>Alias</span>
                        <input type="text" name="name" placeholder='Mr Jay' />
                    </label>
                </div>
                <div className='form-item-wrap'>
                    <label>
                        <span>Billing</span>
                        <select>
                            <option value="Cryptocurrency-avax">Cryptocurrency (AVAX)</option>
                            <option value="Credit Card">Credit Card</option>
                        </select>
                    </label>
                </div>
                <div className='form-item-wrap'>
                    <label>
                        <span></span>
                        <input type="submit" value="Submit" />
                    </label>
                </div>
            </form>
        </>
    )
}

export default Account


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
