import AccountTypeCard from '@/components/auth/account-type';
import { AuthLayout } from '@/layout';

function AccountType() {
  return (
    <AuthLayout>
      <AccountTypeCard
        icon="Codesandbox"
        name="Entrepreneur"
        description="Founders and Co-Founders"
        extraClassName="mb-10"
      />
      <AccountTypeCard
        icon="Box"
        name="Worker"
        description="Developers, Designers, Team Leads, etc."
        extraClassName="mb-10"
      />
      <AccountTypeCard
        icon="User"
        name="Member"
        description="Website members, product users, etc."
      />
    </AuthLayout>
  );
}

export default AccountType;
