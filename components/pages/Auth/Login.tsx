import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { LoginInput, LoginMutation, useLoginMutation } from '../../../generated/graphql';
import Input from '../../formInputs/Input';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

const Login = ({ logoNode }: { logoNode: React.ReactNode }) => {
  const methods = useForm<LoginInput>();
  const [loginMutation, { loading }] = useLoginMutation();
  const router = useRouter();

  const handleLoginComplete = (data: LoginMutation) => {
    const { access_token, refresh_token } = data.login;
    Cookies.set('access_token', access_token);
    Cookies.set('refresh_token', refresh_token);
    router.push('/');
  };

  const onSubmit: SubmitHandler<LoginInput> = (data) =>
    loginMutation({
      variables: {
        loginInput: data
      },
      onCompleted: handleLoginComplete
    });

  return (
    <FormProvider {...methods}>
      <div className="max-w-[400px] min-h-[480px] mx-auto w-full rounded-md flex flex-col shadow-xl">
        <div className="h-[240px] bg-blue-400 rounded-t-md grid place-items-center">{logoNode}</div>
        <form
          className="flex flex-col gap-y-12 px-5 py-7 w-full"
          onSubmit={methods.handleSubmit(onSubmit)}
        >
          <div>
            <div className="text-2xl font-bold">Welcome</div>
            <div className="text-gray-400">Please log in to proceed</div>
          </div>

          <Input loading={loading} label="Email" type="text" name="email" />
          <Input loading={loading} label="Password" type="password" name="password" />
          <button disabled={loading} className={`button-submit`} type="submit">
            Log In
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default Login;
