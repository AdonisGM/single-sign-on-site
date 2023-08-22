import {Fragment, useEffect, useState} from "react";
import GatewayApi from "../../../../apis/GatewayApi.js";

const Information = () => {
  const [info, setInfo] = useState({});

  useEffect(() => {
    GatewayApi('pkg_user.get_info', {})
      .then(res => {
        setInfo(res.data[0]);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);

  return (
    <Fragment>
      <div className={'p-2 sticky top-0 bg-default-100 border-b border-default-200'}>
        <p className={'text-default-900 text-xl font-bold'}>
          Profile
        </p>
        <p className={'text-default-400 text-sm'}>
          Manage your profile information and set your avatar. <span
          className={'text-pink-500 font-bold'}>(❁´◡`❁)</span>
        </p>
      </div>
      <div className={'p-2'}>
        {/*  table */}
        <table className={'table-auto w-full'}>
          <tbody>
          <tr>
            <td className={'text-default-500 font-bold'}>
              Username
            </td>
            <td className={'text-default-400'}>
              {info.C_USERNAME}
            </td>
          </tr>
          <tr>
            <td className={'text-default-500 font-bold'}>
              Email
            </td>
            <td className={'text-default-400'}>
              {info.C_EMAIL}
            </td>
          </tr>
          <tr>
            <td className={'text-default-500 font-bold'}>
              Full name
            </td>
            <td className={'text-default-400'}>
              {info.C_FULLNAME}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </Fragment>
  )
}

export default Information;