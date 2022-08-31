
import { Link } from 'react-router-dom'

function Billing({ fundBundlr }) {

    return (
        <>
            <h3 className='col-title'>Billing</h3>
            <div className='plan-wrap'>
                <div>
                    <p className='current-plan'>Current Plan</p>
                    <p className='plan-size'>285 MB of 500 MB used</p>
                    <p className='last-paid'>Paid: $450 on 08/08/2022</p>
                </div>
                <div>


                    <button className="view-files add-funds" onClick={() => { fundBundlr() }}>Add Funds</button>

                </div>
            </div>
        </>
    )
}

export default Billing
