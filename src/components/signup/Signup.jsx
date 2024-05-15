import {useEffect, useState} from "react";
import {Button, Card, CardBody, CardFooter, CardHeader, Divider, Input, Link, Spacer} from "@nextui-org/react";
import {IconLock, IconUser, IconMail, IconSignature} from "@tabler/icons-react";
import {Link as RouterLink, useNavigate} from "react-router-dom";
import {motion} from "framer-motion";
import {useForm} from "react-hook-form";
import InputText from "../customInput/InputText.jsx";
import InputPassword from "../customInput/InputPassword.jsx";
import AuthApi from "../../apis/AuthApi.js";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false)

  const { control, handleSubmit, reset, setValue } = useForm({
    defaultValues: {
      email: '',
      fullname: '',
      username: '',
      password: '',
    }
  })

  const handleSignup = (data) => {
    setIsLoading(true)

    AuthApi('signUp', data, () => {
      navigate('/login');
    }, () => {
      toast.error('Sign-up failed!');
      setIsLoading(false)
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
          <form
            onSubmit={handleSubmit(handleSignup)}
          >
            <div
              className={'p-2 flex flex-col justify-center items-center'}
            >
              <p className={'text-default-400 text-sm italic'}>
                Hi my friend! Are you ready to join us? Please fill in the form below to continue.
              </p>
              <Spacer y={5} />
              <InputText
                name={'email'}
                label={'Email'}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter your email',
                  },
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i,
                    message: 'Please enter a valid email address'
                  }
                }}
              />
              <Spacer y={2} />
              <InputText
                name={'username'}
                label={'Username'}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter your username',
                  },
                  pattern: {
                    value: /^([A-Za-z0-9])+$/,
                    message: 'Ony A-Z,a-z,0-9'
                  }
                }}
              />
              <Spacer y={2} />
              <InputText
                name={'fullname'}
                label={'Fullname'}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter your full name'
                  },
                }}
              />
              <Spacer y={2} />
              <InputPassword
                name={'password'}
                label={'Password'}
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: 'Please enter your password'
                  },
                }}
              />
              <div className={'flex justify-center items-center mt-5'}>
                <Button
                  size="sm"
                  type="submit"
                  className={'bg-default-900 text-white'}
                  isLoading={isLoading}
                >
                  Sign up
                </Button>
              </div>
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