import "../styles/Login.css";
import {useState, useEffect} from 'react'
import {ethers} from 'ethers'

const Login = ({wallet, setWallet, loggedIn,setLoggedIn, setOnboarded}) => {

    const [password, setPassword] = useState("")

    async function decryptWallet(){
        const encrypted = window.localStorage.getItem("apex-cloud-wallet")
        const parsed = JSON.parse(encrypted)
        const decrypted = await ethers.Wallet.fromEncryptedJson(parsed, password)
        await setWallet(decrypted)
        console.log(decrypted)
        setLoggedIn(true)
        


    }

    return(
        <div className="login"> <div className="overlay"></div>
        <div className="box">
            <div className="login-header">
            <h1 className="header">Login with your password</h1>
            </div>
            <div className="login-body">
                <input className="input" type="text" placeholder="password" onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <div className="login-footer">
                <button className="btn" onClick={()=>{setOnboarded(false)}}>Create Account</button>
                <button className="btn" onClick={()=>{decryptWallet()}}>Login</button>
               
            </div>
            </div>
        </div>
    )
}

export default Login;