import {useLocation, useNavigate} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Cookie from "js-cookie";

const NonAuth = ({children}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // check token in cookies
    const token = Cookie.get('token');
    const refreshToken = Cookie.get('refreshToken');

    if (token !== undefined && refreshToken !== undefined) {
      navigate('/');
    }

    document.title = 'Single sign-on | AdonisGM';
  }, [navigate, location]);

  return (
    <Fragment>
      {children}
    </Fragment>
  )
}

export default NonAuth