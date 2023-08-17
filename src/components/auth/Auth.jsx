import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import Cookie from "js-cookie";

const Auth = ({children}) => {
  const navigate = useNavigate();

  useEffect(() => {
    // check token in cookies
    const token = Cookie.get('token');
    console.log(token)
  }, [navigate]);

  return (
    <div>
      {children}
    </div>
  )
}

export default Auth