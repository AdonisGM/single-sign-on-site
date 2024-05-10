import {useLocation, useNavigate} from "react-router-dom";
import {Fragment, useEffect} from "react";
import Cookie from "js-cookie";

const NonAuth = ({children}) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // check token in cookies
    const info = Cookie.get('info', {path: '/', domain: import.meta.env.VITE_DOMAIN_COOKIE});

    if (info !== undefined) {
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