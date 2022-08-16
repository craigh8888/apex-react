import {useState, useEffect} from 'react';
import '../styles/SignUp.css';

export default function SignUp() {

    const [content, setContent] = useState("onboard")
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [mnemonic, setMnemonic] = useState("")
    



    return (
        
        <div className="sign-up"> <div className="overlay"></div>
            {content === "onboard" ? 
            <div className='onboard'>
                <h1 className="sign-up-header">Create or Import a wallet</h1>
                <div className='onboard-body'>
                <button className="btn" onClick={()=>{setContent("create");}}>Create Wallet</button>
                <button className="btn" onClick={()=>{setContent("import")}}>Import Wallet</button>
                </div>
            </div> 
            : <></>}

            {content === "create" ? 
            <div className='create-wallet'>

                <div className="create-wallet-header">
                <h1 className='sign-up-header'> Set a password, then click "Generate"</h1>
                <button className="back-btn" onClick={()=>{setContent("onboard");}}>back</button>
                </div>

                <div className="create-wallet-body">
                <input className="input"type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
                </div>
                
                <div className="create-wallet-footer">
                <button className="btn"onClick={()=>{setContent("create-backup")}}>Generate</button>
                </div>
            </div>
            :<></>}
            {content === "create-backup" ? 
            <div className='create-wallet'>
                <div className='create-wallet-header'>
                <h1 className="sign-up-header">Write down your seed phrase then click "next" to verify you have backed up.</h1>
                <button className="back-btn" onClick={()=>{setContent("create");}}>back</button>
                </div>
                <div className='create-wallet-body'>
                <span>some seed phrase</span>
                </div>
                <div className='create-wallet-footer'>
                <button className="btn" onClick={()=>{setContent("create-verify")}}>Next</button>
                </div>
                
               
               
            </div>
            :<></>}
            {content === "create-verify" ? 
            <div className='create-wallet'>
                <div className='create-wallet-header'>
                <h1 className="sign-up-header">Enter your seed phrase that you have written down to verify its correct</h1>
                <button className="back-btn"onClick={()=>{setContent("create-backup");}}>back</button>
                </div>
                <div className='create-wallet-body '>
                <div className='create-wallet-verify-grid'>
                <input className="input-verify"type="text" placeholder='seed word 1' />
               <input className="input-verify"type="text" placeholder='seed word 2' />
               <input className="input-verify"type="text" placeholder='seed word 3' />
               <input className="input-verify"type="text" placeholder='seed word 4' />
               <input className="input-verify"type="text" placeholder='seed word 5' />
               <input className="input-verify"type="text" placeholder='seed word 6' />
               <input className="input-verify"type="text" placeholder='seed word 7' />
               <input className="input-verify"type="text" placeholder='seed word 8' />
               <input className="input-verify"type="text" placeholder='seed word 9' />
               <input className="input-verify"type="text" placeholder='seed word 10' />
               <input className="input-verify"type="text" placeholder='seed word 11' />
               <input className="input-verify"type="text" placeholder='seed word 12' />
               </div>
                </div>
                <div className='create-wallet-footer'>
                <button className="btn"onClick={()=>{setContent("create-verify")}}>Finish</button>
                <button className="btn"onClick={()=>{alert("dont be a fool. Back up your seed phrase.")}}>skip</button>
            
                </div>
            </div>
            :<></>}
            

            {content === "import" ? 
            <div className='import-wallet'>
                <div className='import-wallet-header'>
                    <h1 className='sign-up-header'> Set a password, then click "next"</h1>
                 <button className="back-btn" onClick={()=>{setContent("onboard");}}>back</button>
                 </div>

                 <div className="import-wallet-body">
                  <input className="input"type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
                </div>
                <div className="import-wallet-footer">
                <button className="btn" onClick={()=>{setContent("import-mnemonic");}}>next</button>
                </div>
            </div>
            :<></>}
            {content === "import-mnemonic" ? 
            <div className='import-wallet'>
                <div className='import-wallet-header'>
                <h1 className="sign-up-header">Enter your mnemonic phrase, then click "import"</h1>
                <button className="back-btn" onClick={()=>{setContent("import");}}>back</button>
                </div>
                <div className='import-wallet-body'>
                <input className="input"type="text" value={mnemonic} onChange={(e)=>{setMnemonic(e.target.value)}} placeholder="mnemonic phrase"/>
                </div>
                <div className='import-wallet-footer'>
                <button className="btn"onClick={()=>{alert("importing...")}}>import</button>
                </div>
                
                
            </div>
            :<></>}
        </div>
        
    );
}