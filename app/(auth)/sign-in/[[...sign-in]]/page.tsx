import { SignIn } from '@clerk/nextjs';
import React from 'react';

const SignInPage = () => {
  return (
    <SignIn
      appearance={{
        elements: {
          formButtonPrimary: 'bg-slate-500 hover:bg-slate-400 text-sm',
        },
      }}
    />
  );
};

export default SignInPage;
