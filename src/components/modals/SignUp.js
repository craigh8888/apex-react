import {useState, useEffect} from 'react';
import {ethers} from 'ethers'
import '../../styles/SignUp.css';

export default function SignUp({onboarded,setOnboarded,wallet,setWallet}) {

    const [content, setContent] = useState("onboard")
    const [loading, setLoading] = useState(false)
    const [password, setPassword] = useState("")
    const [mnemonic, setMnemonic] = useState("")

    const [verified, setVerified] = useState(false)
    const [word1, setWord1] = useState("")
    const [word2, setWord2] = useState("")
    const [word3, setWord3] = useState("")
    const [word4, setWord4] = useState("")
    const [word5, setWord5] = useState("")
    const [word6, setWord6] = useState("")
    const [word7, setWord7] = useState("")
    const [word8, setWord8] = useState("")
    const [word9, setWord9] = useState("")
    const [word10, setWord10] = useState("")
    const [word11, setWord11] = useState("")
    const [word12, setWord12] = useState("")

    useEffect(()=>{
    const words = [word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,word11,word12]
        async function verify(){
            const checked = words.map((word, index) => {if (word == mnemonic[index]) {return (true)} else{return false}})
            if (checked.includes(false)){setVerified(false)} else {setVerified(true)}
        }
        verify()
    },[word1,word2,word3,word4,word5,word6,word7,word8,word9,word10,word11,word12])
    


    async function walletGen() {
        const newWallet = await ethers.Wallet.createRandom(32)
        await setWallet(newWallet)
        const words = newWallet.mnemonic.phrase
        const wordarray = words.split(" ")
        let finalWords = {}
        const newMnemonic = wordarray.map((word, index) => finalWords[index] = word)
        setMnemonic(finalWords)
        console.log(console.log(finalWords))
        
    }
    async function importWallet(){
        console.log(mnemonic)
        const HDNode = await ethers.utils.HDNode.fromMnemonic(mnemonic)
        await setWallet(HDNode)
        console.log(HDNode)
        encryptWallet()
        setOnboarded(true)
        
    }
    async function encryptWallet(){
        alert("encrypting")
        const encrypted = await wallet.encrypt(password)
        const parsed = JSON.stringify(encrypted)
        window.localStorage.setItem("apex-cloud-wallet", parsed)

    }
   
 async function pasteHandler() {
        var test = document.getElementById("firstvalue");

        test.addEventListener("paste", function (e) {
            e.preventDefault();
            // prevents default paste into input ('stops it from being filled with all text')

            if (e.target.type === "text") {
                var data = e.clipboardData.getData("Text");
                // split clipboard text into single characters
                data = data.split(/[ ,]+/);
                // find all other text inputs
                [].forEach.call(
                    document.querySelectorAll(
                        ".create-wallet-verify-grid input[type=text]"
                    ),
                    (node, index) => {
                        // And set input value to the relative character

                        node.value = data[index];
                    }
                );
            }
        });
    }

    useEffect(() => {
        pasteHandler();
    }, []);

    return (
        
        <div className="sign-up"> <div className="overlay"></div>
            {content === "onboard" ? 
            <div className='onboard'>
                <h1 className="sign-up-header">Create or Import a wallet</h1>
                <div className='onboard-body'>
                <button className="btn-black" onClick={()=>{setContent("create");}}>Create Wallet</button>
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
                <button className="btn"onClick={()=>{walletGen();setContent("create-backup")}}>Generate</button>
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
                <span className="mnemonic">{Object.values(mnemonic).map((word) => word + " ")}</span>
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
                <input className="input-verify"type="text" placeholder='seed word 1' value={word1} onChange={(e)=>{setWord1(e.target.value)}} style={word1 === mnemonic[0] ? {border:"solid green 3px"} : {border: "solid red 3px"}} />
               <input className="input-verify"type="text" placeholder='seed word 2' value={word2} onChange={(e)=>{setWord2(e.target.value)}} style={word2 === mnemonic[1] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 3' value={word3} onChange={(e)=>{setWord3(e.target.value)}} style={word3 === mnemonic[2] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 4' value={word4} onChange={(e)=>{setWord4(e.target.value)}} style={word4 === mnemonic[3] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 5' value={word5} onChange={(e)=>{setWord5(e.target.value)}} style={word5 === mnemonic[4] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 6' value={word6} onChange={(e)=>{setWord6(e.target.value)}} style={word6 === mnemonic[5] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 7' value={word7} onChange={(e)=>{setWord7(e.target.value)}} style={word7 === mnemonic[6] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 8' value={word8} onChange={(e)=>{setWord8(e.target.value)}} style={word8 === mnemonic[7] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 9' value={word9} onChange={(e)=>{setWord9(e.target.value)}} style={word9 === mnemonic[8] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 10' value={word10} onChange={(e)=>{setWord10(e.target.value)}} style={word10 === mnemonic[9] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 11' value={word11} onChange={(e)=>{setWord11(e.target.value)}} style={word11 === mnemonic[10] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               <input className="input-verify"type="text" placeholder='seed word 12' value={word12} onChange={(e)=>{setWord12(e.target.value)}} style={word12 === mnemonic[11] ? {border:"solid green 3px"} : {border: "solid red 3px"}}/>
               </div>
                </div>
                <div className='create-wallet-footer'>
                <button className="btn" onClick={verified ? ()=>{encryptWallet();setOnboarded(true)} : ()=>{alert("menmonic not verified")}} style={!verified ? {backgroundColor:"grey"} : {backgroundColor:"green"}}>Finish</button>
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
                <button className="btn"onClick={()=>{importWallet()}}>import</button>
                </div>
                
                
            </div>
            :<></>}
        </div>
        
    );
}
