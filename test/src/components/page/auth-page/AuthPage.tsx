import { FC } from 'react';
import AuthForm from './auth-form/AuthForm';
import LeftContent from './LeftContent';

const AuthPage: FC = () => (
  <div className="auth-page">
    <LeftContent />
    <AuthForm />
  </div>
);

export default AuthPage;
