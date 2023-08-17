import {Fragment} from "react";
import {Button} from "@nextui-org/react";

const Setting = () => {
  return (
    <Fragment>
      <div className={'p-2 sticky top-0 bg-default-100 border-b border-default-200'}>
        <p className={'text-default-900 text-xl font-bold'}>
          Settings
        </p>
        <p className={'text-default-400 text-sm'}>
          Manage your account settings and set email preferences. (๑•̀ㅂ•́)و✧
        </p>
      </div>
      <div className={'p-2'}>
        <Button
          color={'danger'}
          size={'sm'}
        >
          Logout
        </Button>
      </div>
    </Fragment>
  )
}

export default Setting