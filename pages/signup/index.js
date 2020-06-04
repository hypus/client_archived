// import cls from 'classnames';

import Link from 'next/link';

import { Paragraph } from '@/common';

import { Input, Button } from '@/ui';

import { AuthLayout } from '@/layout';

function SignUp() {
  return (
    <AuthLayout
      hasIllustration
      title="Sign Up"
      description="Enter your information to sign up"
      onSubmit={() => console.log('SUBMIT')}
      onSuccess={() => console.log('SUCCESS')}
      onError={() => console.log('ERROR')}
    >
      <Input
        type="text"
        id="fullname"
        label="Full name"
        placeholder="Enter your full name"
        extraClassName="mb-6"
      />
      <Input
        type="text"
        id="email"
        label="E-mail address"
        placeholder="Enter your e-mail address"
        extraClassName="mb-6"
      />
      <Input
        type="password"
        id="password"
        label="Password"
        placeholder="Enter your e-mail address"
        showForgetPasswordLabel
        extraClassName="mb-6"
      />
      <Button icon={{ name: 'ArrowRight', position: 'right' }}>SIGN IN</Button>
      <Paragraph extraClassName="mt-15">
        Do you have an account?
        {' '}
        <Link href="/signin">
          <a className="text-primary-200">Enter your account</a>
        </Link>
      </Paragraph>
    </AuthLayout>
  );
}

export default SignUp;
