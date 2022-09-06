import "../../styles/Login.css";
import {useState, useEffect} from 'react'
import {ethers} from 'ethers'
import LoadingSpinner from '../LoadingSpinner.js'

const Login = ({wallet, setWallet, loggedIn,setLoggedIn, setOnboarded}) => {

    const [password, setPassword] = useState("")
    const [loading,setLoading] = useState(false)

    async function decryptWallet(){
        await setLoading(true)
        const encrypted = window.localStorage.getItem("apex-cloud-wallet")
        const parsed = JSON.parse(encrypted)
        const decrypted = await ethers.Wallet.fromEncryptedJson(parsed, password)
        await setWallet(decrypted)
        console.log(decrypted)
        setLoading(false)
        setLoggedIn(true)
        
        


    }

    return(
        <div className="login"> <div className="overlay"></div>
        <div className="box">
            <div className="login-header">
            <h1 className="header">{!loading ? "Login with your password" : "Decrypting..."}</h1>
            </div>
            <div className="login-body">
            {loading ? <LoadingSpinner /> : 
                <input className="input" type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
                }
                </div>
            <div className="login-footer">
                {!loading ? <><button className="btn-black" onClick={()=>{setOnboarded(false)}}>Create Account</button>
                <button className="btn" onClick={()=>{decryptWallet()}}>Login</button> </>: <></>}
               
            </div>
            </div>
        </div>
    )
}

export default Login;