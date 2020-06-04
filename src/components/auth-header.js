import Link from 'next/link';
import { Icon } from '@/common';

function AuthHeader() {
  return (
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
  );
}

export default AuthHeader;
