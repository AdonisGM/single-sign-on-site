import {Card, CardHeader, Divider, CardBody, CardFooter, Link, Input, Spacer, Button} from "@nextui-org/react";
import {IconUser, IconLock} from "@tabler/icons-react";
import {useEffect, useState} from "react";
import {motion, useAnimate} from "framer-motion";

const Login = () => {
  const [isShowPasswordInput, setIsShowPasswordInput] = useState(false);
  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (isShowPasswordInput) {
      animate(scope.current, {opacity: 1, scale: 1, height: 'auto'});
    } else {
      animate(scope.current, {opacity: 0, scale: 0, height: 0});
    }
  }, [animate, isShowPasswordInput, scope]);

  return (
    <div className={'h-screen flex justify-center items-center'}>
      <Card className="max-w-[350px] max-h-[600px]">
        <CardHeader className="flex gap-3">
          <p className={'text-xl font-bold text-default-900 text-center w-full'}>
            Single sign-on (SSO)
          </p>
        </CardHeader>
        <Divider />
        <CardBody
          className={'overflow-x-hidden overflow-y-hidden'}
        >
          <div
            className={'p-2 flex flex-col justify-center items-center'}
          >
            <p className={'text-default-400 text-sm italic'}>
              You only need to sign in once to access all of your applications. Once you sign in, you can easily switch between applications without being asked to sign in again.
            </p>
            <Spacer y={5} />
            <Input
              className={'w-full'}
              placeholder={'Enter your email or username'}
              size={'md'}
              startContent={
                <IconUser
                  size={20}
                  stroke={2.5}
                  color={'#484848'}
                />
              }
            />
            <Spacer y={2} />
            <motion.div
              ref={scope}
              initial={{opacity: 0, scale: 0, height: 0}}
              className={'w-full'}
            >
              <Input
                type={'password'}
                className={'w-full'}
                placeholder={'Enter your password'}
                size={'md'}
                startContent={
                  <IconLock
                    size={20}
                    stroke={2.5}
                    color={'#484848'}
                  />
                }
              />
            </motion.div>
            {/*login button*/}
            <div className={'flex justify-center items-center mt-5'}>
              <Button
                size="sm"
                className={'bg-default-900 text-white'}
                onPress={() => {
                  setIsShowPasswordInput(true);
                }}
              >
                {isShowPasswordInput ? 'Login with SSO' : 'Continue'}
              </Button>
            </div>
          </div>
        </CardBody>
        <Divider />
        <CardFooter>
          <p className={'text-xs text-center text-default-500 w-full'}>
            Made with ❤️ by <Link className={'text-xs text-default-500 font-bold'} color target="_blank" href="https://github.com/FPT-NMTung">AdonisGM</Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Login