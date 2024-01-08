import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/authContext';

const login = () => {
  const [rememberLogin, setRememberLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { user, logIn } = UserAuth();
  const navigate = useNavigate();

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      await logIn(email,password);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <div className='w-full h-screen'>
        <img className='sm:block absolute w-full h-full object-cover'
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c38a2d52-138e-48a3-ab68-36787ece46b3/eeb03fc9-99c6-438e-824d-32917ce55783/IN-en-20240101-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="///" />
        <div className='bg-black/70 fixed top-0 left-0 w-full h-screen' />
        <div className='fixed w-full px-4 py-24 z-20'>
          <div className='max-w-[450px] h-[600px] mx-auto bg-black/80 rounded-lg'>
            <div className='max-w-[320px] mx-auto py-16'>
              <h1 className='text-3xl font-nsans-bold'>Login</h1>
              <form
                onSubmit={handleFormSubmit}
                className='w-full flex flex-col py-4'
              >
                <input
                  className='p-3 my-2 bg-gray-700 rounded'
                  type="email"
                  placeholder="email"
                  autocomplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className='p-3 my-2 bg-gray-700 rounded'
                  type="password"
                  placeholder="password"
                  autocomplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className='bg-red-600 py-3 my-6 rounded font-nsans-bold'>
                  Login
                </button>
                <div className='flex justify-between items-center text-gray-600'>
                  <p>
                    <input
                      type="checkbox"
                      className='mr-2'
                      checked={rememberLogin}
                      onChange={(e) => setRememberLogin(!rememberLogin)}
                    />
                    Remember Me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className='my-4'>
                  <span className='text-gray-600 mr-2'>
                    New to Netflix?
                  </span>
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default login
