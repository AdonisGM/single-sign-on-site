import {motion} from "framer-motion";
import {Card} from "@nextui-org/react";
import {Outlet, NavLink} from "react-router-dom";
import {IconAppsFilled, IconSettings, IconUser} from "@tabler/icons-react";
import {forwardRef} from "react";

const listMenu = [
  {
    name: 'Profile',
    url: '/me',
    icon: <IconUser
      className={'text-white'}
      size={20}
      stroke={2.5}
    />,
  },
  {
    name: 'Apps',
    url: '/apps',
    icon: <IconAppsFilled
      className={'text-white'}
      size={20}
      stroke={2.5}
    />,
  },
  {
    name: 'Settings',
    url: '/settings',
    icon: <IconSettings
      className={'text-white'}
      size={20}
      stroke={2.5}
    />,
  }
];

// eslint-disable-next-line react/display-name
const ItemLink = forwardRef((props, ref) => (
    <NavLink
      style={({isActive}) => {
        return isActive ? {backgroundColor: '#545454'} : {};
      }}
      {...props} ref={ref}/>
))

const MotionComponentLink = motion(ItemLink)

const MenuLayout = () => {
  // const navigate = useNavigate();

  return (
    <motion.div
      className={'h-screen flex justify-center items-center flex-col gap-5 bg-default-200'}
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.3}}
    >
      <Card className="w-[800px] h-[500px] max-w-[800px] max-h-[500px]">
        <div className={'flex flex-row gap-1 h-full'}>
          <div className={'w-1/12'}>
            <div className={'h-full bg-default-700 flex flex-col items-center p-2 gap-2'}>
              {listMenu.map((item, index) => (
                <MotionComponentLink
                  key={index}
                  whileHover={{scale: 1.1}}
                  whileTap={{scale: 0.9}}
                  to={item.url}
                  className={({ isActive }) => {
                    const colorVariants = {
                      active: 'flex justify-center items-center w-fit p-3 rounded-lg bg-default-400 cursor-pointer',
                      notActive: 'flex justify-center items-center w-fit p-3 rounded-lg bg-default-800 cursor-pointer',
                    }
                    return colorVariants[isActive ? 'active' : 'notActive']
                  }}
                >
                  {item.icon}
                </MotionComponentLink>
              ))}
            </div>
          </div>
          <div className={'w-11/12'}>
            <div className={'h-full bg-default-100 overflow-y-auto overflow-x-hidden position-relative'}>
              <Outlet />
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export default MenuLayout