import Link from 'next/link';

import { AuthLayout } from '@/layout';
import { Button, Input } from '@/ui';
import { Paragraph } from '@/common';

function SignIn() {
  return (
    <AuthLayout
      hasIllustration
      title="Sign In"
      description="Sign in to your account to continue"
    >
      <Input
        type="email"
        id="email"
        label="E-mail address"
        placeholder="Enter your e-mail address"
        extraClassName="mb-6"
      />

      <Input
        type="password"
        id="email"
        label="Password"
        placeholder="Enter your Password"
        extraClassName="mb-6"
      />

      <Button icon={{ name: 'ArrowRight', position: 'right' }}>
        SIGN IN
      </Button>

      <Paragraph extraClassName="mt-15">
        Not registered yet?
        {' '}
        <Link href="/signup">
          <a className="text-primary-200">Create an account</a>
        </Link>
      </Paragraph>
    </AuthLayout>
  );
}

export default SignIn;
