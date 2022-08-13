import {useState, useEffect} from 'react';
import '../styles/SignUp.css';

export default function SignUp() {

    const [content, setContent] = useState("onboard")
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [mnemonic, setMnemonic] = useState("")
    



    return (
        <div className="sign-up">
            {content === "onboard" ? 
            <div className='onboard'>
                <h1>Create or Import a wallet</h1>
                <button onClick={()=>{setContent("create");}}>Create Wallet</button>
                <button onClick={()=>{setContent("import")}}>Import Wallet</button>
            </div> 
            : <></>}

            {content === "create" ? 
            <div className='create-wallet'>
                <h1><button onClick={()=>{setContent("onboard");}}>back</button> | First set a password, then click "Generate"</h1>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
                <button onClick={()=>{setContent("create-backup")}}>Generate</button>
            </div>
            :<></>}
            {content === "create-backup" ? 
            <div className='create-wallet'>
                <h1><button onClick={()=>{setContent("create");}}>back</button> | Write down your seed phrase then click "next" to verify you have backed up.</h1>
                <span>some seed phrase</span>
                <button onClick={()=>{setContent("create-verify")}}>Next</button>
            </div>
            :<></>}
            {content === "create-verify" ? 
            <div className='create-wallet'>
                <h1><button onClick={()=>{setContent("create-backup");}}>back</button> | Enter your seed phrase that you have written down to verify its correct</h1>
               <input type="text" placeholder='seed word 1' />
               <input type="text" placeholder='seed word 2' />
               <input type="text" placeholder='seed word 3' />
               <input type="text" placeholder='seed word 4' />
               <input type="text" placeholder='seed word 5' />
               <input type="text" placeholder='seed word 6' />
               <input type="text" placeholder='seed word 7' />
               <input type="text" placeholder='seed word 8' />
               <input type="text" placeholder='seed word 9' />
               <input type="text" placeholder='seed word 10' />
               <input type="text" placeholder='seed word 11' />
               <input type="text" placeholder='seed word 12' />
                <button onClick={()=>{setContent("create-verify")}}>Finish</button>
                <button onClick={()=>{alert("dont be a fool. Back up your seed phrase.")}}>skip</button>
            </div>
            :<></>}
            

            {content === "import" ? 
            <div className='import-wallet'>
                 <h1><button onClick={()=>{setContent("onboard");}}>back</button> | First set a password, then click "next"</h1>
                <input type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password"/>
                <button onClick={()=>{setContent("import-mnemonic");}}>next</button>
            </div>
            :<></>}
            {content === "import-mnemonic" ? 
            <div className='import-wallet'>
                 <h1><button onClick={()=>{setContent("import");}}>back</button> | Enter your mnemonic phrase, then click "import"</h1>
                <input type="text" value={mnemonic} onChange={(e)=>{setMnemonic(e.target.value)}} placehold="mnemonic"/>
                <button onClick={()=>{alert("importing...")}}>import</button>
            </div>
            :<></>}
        </div>
    );
}