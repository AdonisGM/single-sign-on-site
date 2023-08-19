import {useNavigate,useLocation} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Cookie from "js-cookie";

const Auth = ({children}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // check token in cookies
    const token = Cookie.get('token');
    const refreshToken = Cookie.get('refreshToken');

    if (token === undefined || refreshToken === undefined) {
      Cookie.remove('token');
      Cookie.remove('refreshToken');
      navigate('/login');
    }

    document.title = 'Account | AdonisGM';
  }, [navigate, location]);

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default Auth