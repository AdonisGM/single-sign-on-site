import {Card, CardHeader, Divider, CardBody, CardFooter, Link, Input, Spacer, Button} from "@nextui-org/react";
import {IconUser, IconLock} from "@tabler/icons-react";
import {Link as RouterLink, useSearchParams, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion, useAnimate} from "framer-motion";
import toast from "react-hot-toast";
import {useForm} from 'react-hook-form'
import AuthApi from "../../apis/AuthApi";
import InputText from "../customInput/InputText.jsx";
import InputPassword from "../customInput/InputPassword.jsx";

const Login = () => {
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate();

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      username: '',
      password: '',
    }
  })

  const handleLogin = (data) => {
    if (data.password.trim() === '') {
      toast.error('Oh no! You forgot to enter your password.', {
        icon: '🤪?',
      });
      return;
    }

    setIsLoading(true)
    AuthApi('login', data, () => {
      const redirect_uri = searchParams.get('redirect_uri');

      if (redirect_uri) {
        window.location.href = redirect_uri;
      } else {
        navigate('/');
      }
    }, () => {
      toast.error('Login failed!');
      setIsLoading(false)
    });
  }

  const handleForgotPassword = (e) => {
    e.preventDefault();
    toast('This feature is not available yet. Contact the administrator for reset password.');
  }

  return (
    <motion.div
      className={'h-screen flex justify-center items-center flex-col gap-5'}
      initial={{opacity: 0, scale: 0.9}}
      animate={{opacity: 1, scale: 1}}
      transition={{duration: 0.3}}
    >
      <Card className="max-w-[375px] max-h-[600px]">
        <CardHeader className="flex gap-3">
          <p className={'text-xl font-bold text-default-900 text-center w-full'}>
            Single sign-on (SSO)
          </p>
        </CardHeader>
        <Divider />
        <CardBody
          className={'overflow-x-hidden overflow-y-hidden'}
        >
          <form
            onSubmit={handleSubmit(handleLogin)}
            className={'p-2 flex flex-col justify-center items-center'}
          >
            <p className={'text-default-400 text-sm italic'}>
              You only need to sign in once to access all of your applications. Once you sign in, you can easily switch between applications without being asked to sign in again.
            </p>
            <Spacer y={5} />
            <InputText
              name={'username'}
              label={'Username'}
              control={control}
            />
            <Spacer y={2} />
            <InputPassword
              name={'password'}
              label={'Password'}
              control={control}
            />
            <div
              className={'flex justify-end items-center w-full mt-2'}
            >
              <RouterLink
                color
                className={'text-default-500 text-sm'}
                onClick={handleForgotPassword}
                to={'/sign-in'}
              >
                Forgot password?
              </RouterLink>
            </div>
            <div className={'flex justify-center items-center mt-5'}>
              <Button
                size="sm"
                className={'bg-default-900 text-white'}
                type={'submit'}
                isLoading={isLoading}
              >
                Login with SSO
              </Button>
            </div>
          </form>
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
          Don&apos;t have an account?{' '}
          <RouterLink
            color
            className={'text-xs text-default-500 font-bold'}
            to={'/sign-up'}>
            Sign up
          </RouterLink>
        </p>
      </div>
    </motion.div>
  )
}

export default Login