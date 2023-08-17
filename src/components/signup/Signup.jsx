import {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Link, Spacer} from "@nextui-org/react";
import {IconLock, IconUser, IconMail, IconSignature} from "@tabler/icons-react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();

  const handleSignup = () => {
    navigate('/login', {
      state: {
        email: 'example@nmtung.dev',
      }
    });
  }

  return (
    <motion.div
      className={'h-screen flex justify-center items-center flex-col gap-5'}
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.3}}
    >
      <Card className="w-[375px] max-w-[375px] max-h-[600px]">
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
              Hi my friend! Are you ready to join us? Please fill in the form below to continue.
            </p>
            <Spacer y={5} />
            <Input
              className={'w-full'}
              placeholder={'example@nmtung.dev'}
              label="Email"
              size={'md'}
              startContent={
                <IconMail
                  size={20}
                  stroke={2.5}
                  color={'#484848'}
                />
              }
            />
            <Spacer y={2} />
            <Input
              className={'w-full'}
              placeholder={'thefunniestguy'}
              label="Username"
              size={'md'}
              startContent={
                <IconSignature
                  size={20}
                  stroke={2.5}
                  color={'#484848'}
                />
              }
            />
            <Spacer y={2} />
            <Input
              className={'w-full'}
              placeholder={'The Funniest Guy'}
              label="Full name"
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
            <Input
              type={'password'}
              className={'w-full'}
              placeholder={'****5678'}
              label="Password"
              size={'md'}
              startContent={
                <IconLock
                  size={20}
                  stroke={2.5}
                  color={'#484848'}
                />
              }
            />
            <div className={'flex justify-center items-center mt-5'}>
              <Button
                size="sm"
                className={'bg-default-900 text-white'}
                onPress={() => {
                  handleSignup();
                }}
              >
                Sign up
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
      <div className={'flex justify-center items-center'}>
        <p className={'text-xs text-center text-default-500'}>
          Already have an account?&nbsp;
          <RouterLink
            color
            className={'text-xs text-default-500 font-bold'}
            to={'/login'}>
            Login
          </RouterLink>
        </p>
      </div>
    </motion.div>
  )
}

export default Signup