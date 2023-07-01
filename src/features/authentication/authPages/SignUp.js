import { useNavigate } from "react-router-dom"

export function SignUp()
{
    const navigate = useNavigate();
    return (<div>
        <form>
            <label htmlFor="firstName"></label>
            <input type="text" required className="fistName"/>

            <label htmlFor="lastName"></label>
            <input type="text"required className="lastName"/>

            <label htmlFor="userName"></label>
            <input required className="userName"/>

            <label type="email" htmlFor="email"></label>
            <input required className="email"/>

            <label type="password" htmlFor="pass"></label>
            <input required className="pass"/>

            <label htmlFor="confirmPass"></label>
            <input type="password" className="confirmPass"/>

            <input type="submit"/>
        </form>
       <div onClick={()=>navigate("/login")}>Login</div> 
    </div>)
}