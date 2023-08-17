import {Fragment} from "react";

const Information = () => {
  return (
    <Fragment>
      <div className={'p-2 sticky top-0 bg-default-100 border-b border-default-200'}>
        <p className={'text-default-900 text-xl font-bold'}>
          Profile
        </p>
        <p className={'text-default-400 text-sm'}>
          Manage your profile information and set your avatar. <span className={'text-pink-500 font-bold'}>(❁´◡`❁)</span>
        </p>
      </div>
      <div className={'p-2'}>
      </div>
    </Fragment>
  )
}

export default Information;