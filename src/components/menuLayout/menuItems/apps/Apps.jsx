import {Fragment} from "react";

const listApps = [
  {
    name: '',
    description: '',
    icon: '',
    link: ''
  },
  {
    name: '',
    description: '',
    icon: '',
    link: ''
  }
]


const Apps = () => {
  return (
    <Fragment>
      <div className={'p-2 sticky top-0 bg-default-100 border-b border-default-200'}>
        <p className={'text-default-900 text-xl font-bold'}>
          Apps
        </p>
        <p className={'text-default-400 text-sm'}>
          Choose the app you want to use, quickly and easily. ʕ•́ᴥ•̀ʔっ
        </p>
      </div>
      <div className={'p-2'}>
        {listApps.map((item, index) => {
          return (
            <div key={index}>adsasda</div>
          )
        })}
      </div>
    </Fragment>
  )
}

export default Apps