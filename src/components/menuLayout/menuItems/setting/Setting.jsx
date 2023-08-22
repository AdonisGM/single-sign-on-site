import {Fragment} from "react";
import {Button} from "@nextui-org/react";
import Cookies from "js-cookie";
import {useNavigate} from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className={'p-2 sticky top-0 bg-default-100 border-b border-default-200'}>
        <p className={'text-default-900 text-xl font-bold'}>
          Settings
        </p>
        <p className={'text-default-400 text-sm'}>
          Manage your account settings and set email preferences. <span className={'text-pink-500 font-bold'}>(๑•̀ㅂ•́)و✧</span>
        </p>
      </div>
      <div className={'p-2'}>
        <Button
          color={'danger'}
          size={'sm'}
          onPress={
            () => {
              Cookies.remove('access_token');
              Cookies.remove('refresh_token');
              navigate('/login');
            }
          }
        >
          Logout
        </Button>
      </div>
    </Fragment>
  )
}

export default Setting