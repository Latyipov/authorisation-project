import React, { useState, FC } from 'react';
import { SignInForm } from '@/App/components/SignInForm/SignInForm';
import { SignUpForm } from '@/App/components/SignUpForm/SignUpForm';
import { Background } from '@components/Background/Background';
import { Header } from '@components/Header/Header';
import { ServiceButtons } from '@components/ServiceButtons/ServiceButtons';
import backgroundImageLink from '@/App/images/background-wallpaper.jpg';
import './EnterPage.scss';

export const EnterPage: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('signIn');
  return (
    <div>
      <Background backgroundImageLink={backgroundImageLink} />
      <Header />
      <div className='enter-page'>
        <h1 className='enter-page__headings'>Welcome</h1>
        <div className='enter-page__body'>
          <div className='enter-page__tabs'>
            <button
              className={`enter-page__tab-button ${
                activeTab === 'signIn' && 'enter-page__tab-button--active'
              }`}
              onClick={() => setActiveTab('signIn')}
            >
              Sign in
            </button>
            <button
              className={`enter-page__tab-button ${
                activeTab === 'signUp' && 'enter-page__tab-button--active'
              }`}
              onClick={() => setActiveTab('signUp')}
            >
              Sign up
            </button>
          </div>
          {activeTab === 'signIn' && <SignInForm />}
          {activeTab === 'signUp' && <SignUpForm />}
          <ServiceButtons />
        </div>
      </div>
    </div>
  );
};
