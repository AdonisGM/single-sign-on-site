import {Card, CardHeader, Divider, CardBody, CardFooter, Link, Input, Spacer, Button} from "@nextui-org/react";
import {IconUser, IconLock} from "@tabler/icons-react";
import {Link as RouterLink, useSearchParams, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {motion, useAnimate} from "framer-motion";
import toast from "react-hot-toast";
import {useForm} from 'react-hook-form'
import AuthApi from "../../apis/AuthApi";

const Login = () => {
  const [isShowPasswordInput, setIsShowPasswordInput] = useState(false);
  const [scope, animate] = useAnimate();
  const [searchParams] = useSearchParams();
  const [, setSourceReferrer] = useState({});
  const location = useLocation();
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();

  useEffect(() => {
    // get information param about source of the request
    const source = searchParams.get('source');
    setSourceReferrer(sourceReferrer => ({...sourceReferrer, source}));

    // get email from router dom
    const email = location.state?.email ? location.state.email : '';
    console.log(email)
  }, []);

  useEffect(() => {
    if (isShowPasswordInput) {
      animate(scope.current, {opacity: 1, scale: 1, height: 'auto'});
    } else {
      animate(scope.current, {opacity: 0, scale: 0, height: 0});
    }
  }, [animate, isShowPasswordInput, scope]);

  const handleLogin = (data) => {
    console.log(data)

    if (!isShowPasswordInput) {
      setIsShowPasswordInput(true);
      return;
    }

    if (data.password.trim() === '') {
      toast.error('Oh no! You forgot to enter your password.', {
        icon: '🤪?',
      });
      return;
    }

    AuthApi('login', data, (response) => {
      toast.success('Login successfully!');
      navigate('/');
    }, (error) => {
      toast.error('Login failed!');
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
            onSubmit={handleSubmit(handleLogin, (e) => {
              console.log(e)})}
            className={'p-2 flex flex-col justify-center items-center'}
            id={'login-form'}
          >
            <p className={'text-default-400 text-sm italic'}>
              You only need to sign in once to access all of your applications. Once you sign in, you can easily switch between applications without being asked to sign in again.
            </p>
            <Spacer y={5} />
            <Input
              type={'text'}
              name={'username'}
              {...register('username', {required: true})}
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
                name={'password'}
                {...register('password', {required: false})}
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
            {/*forgot password*/}
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
            {/*login button*/}
            <div className={'flex justify-center items-center mt-5'}>
              <Button
                size="sm"
                className={'bg-default-900 text-white'}
                form={'login-form'}
                type={'submit'}

              >
                {isShowPasswordInput ? 'Login with SSO' : 'Continue'}
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