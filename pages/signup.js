// import cls from 'classnames';

import Link from 'next/link';

import { Icon, Title, Paragraph } from '@/common';

import { Input, Button } from '@/ui';
import Illustration from '@/components/auth/illustration';

function SignUp() {
  return (
    <div className="container mx-auto">
      <div className="w-full flex justify-center items-center h-18">
        <Link href="/">
          <a className="text-primary-100">
            <Icon
              name="Droplet"
              className="w-10 h-10"
              strokeWidth={3}
              size={40}
            />
          </a>
        </Link>
      </div>
      <div className="flex px-row mt-25">
        <div className="w-5/12 mr-auto px-col">
          <Illustration />
        </div>
        <div className="w-5/12 px-col">
          <div className="border border-light-100 rounded-4 px-8 pt-6 pb-10">
            <Title size="sm" extraClassName="mb-4">
              Register
            </Title>
            <Paragraph extraClassName="mb-8">
              Enter your information to sign up
            </Paragraph>

            <Input
              type="fullname"
              id="fullname"
              label="Full name"
              placeholder="Enter your full name"
              extraClassName="mb-6"
            />

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
              Do you have an account?
              {' '}
              <Link href="/signin">
                <a className="text-primary-200">Enter your account</a>
              </Link>
            </Paragraph>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
