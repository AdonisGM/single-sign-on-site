import {Fragment, useEffect, useState} from "react";
import {motion, useAnimate} from "framer-motion";
import {IconBrain, IconCoinBitcoin, IconNotebook} from "@tabler/icons-react";

const listApps = [
  {
    name: 'Memorito',
    description: 'Want to memorize something? Memorito is the answer!',
    icon: <IconBrain color={'white'}/>,
    link: 'memorito.nmtung.dev'
  },
  {
    name: 'Diary',
    description: 'Diary is a place where you can write your diary.',
    icon: <IconNotebook color={'white'}/>,
    link: 'diary.nmtung.dev'
  },
  {
    name: 'Budgoose',
    description: 'Manage your money with Budgoose, a simple money management app.',
    icon: <IconCoinBitcoin color={'white'}/>,
    link: 'budgoose.nmtung.dev'
  }
]

const Apps = () => {
  const [scope, animate] = useAnimate();
  const [selectedApp, setSelectedApp] = useState(undefined);

  useEffect(() => {
    if (selectedApp === undefined) {
      return;
    }

    animate(
      scope.current,
      {opacity: 1, scale: 1, backgroundColor: '#fff'},
      {duration: 0.5, onComplete: () => {
          window.location.href = `https://${selectedApp.link}`;
        }
      }
    );
  }, [selectedApp]);

  return (
    <Fragment>
      <div className={'p-2 sticky top-0 bg-default-100 border-b border-default-200'}>
        <p className={'text-default-900 text-xl font-bold'}>
          Apps
        </p>
        <p className={'text-default-400 text-sm'}>
          Choose the app you want to use, quickly and easily. <span className={'text-pink-500 font-bold'}>ʕ•́ᴥ•̀ʔっ</span>
        </p>
      </div>
      <div className={'p-5 grid grid-cols-2 gap-5'}>
        {listApps.map((item, index) => {
          return (
            <motion.div
              key={index}
              className={'flex flex-col gap-2 p-4 bg-default-100 rounded-md ring-2 ring-default-200 cursor-pointer select-none'}
              whileHover={{scale: 1.01}}
              whileTap={{scale: 0.99}}
              transition={{duration: 0.2}}
              onClick={() => setSelectedApp(item)}
            >
              <div className={'flex gap-3 items-center'}>
                <div
                  className={'w-12 h-12 rounded-2xl bg-emerald-600 flex justify-center items-center'}
                >
                  {item.icon}
                </div>
                <div>
                  <p className={'text-default-600 text-md font-bold'}>
                    {item.name}
                  </p>
                  <p className={'text-default-400 text-sm italic'}>
                    {item.link}
                  </p>
                </div>
              </div>
              <p className={'text-default-400 text-sm'}>
                {item.description}
              </p>
            </motion.div>
          )
        })}
      </div>
      <motion.div
        ref={scope}
        className={'bg-white fixed flex items-center justify-center top-0 left-0 w-screen h-screen z-auto'}
        initial={{opacity: 0, scale: 0}}
      >

      </motion.div>
    </Fragment>
  )
}

export default Apps