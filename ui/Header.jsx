import React from 'react';
import { useNavigate } from 'react-router-dom';
import { RoutePaths } from './RoutePaths'
import { useLoggedUser } from 'meteor/quave:logged-user-react'
import { Meteor } from 'meteor/meteor'

export const Header = () => {

  const navigate = useNavigate()
  const { loggedUser, isLoadingLoggedUser } = useLoggedUser();

  return (

    <header className="bg-indigo-700">
      <nav className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-indigo-100 lg:border-none">
          <div className="flex justify-between grow items-center">
            <div className="flex cursor-pointer rows items-center" onClick={() => navigate(RoutePaths.HOME)}>
              <span className="sr-only"></span>
              <img
                className="h-12 w-auto"
                src="/images/logo.png"
                alt=""
              />
              <p className="mx-2 text-2xl text-white">Wallet APP</p>
            </div>
            {
              !isLoadingLoggedUser && !loggedUser && (
                <div>
                <button className="text-xl text-gray-500 bg-white px-3 py-1.5 rounded-md hover:bg-gray-200" onClick={()=> navigate(RoutePaths.AUTH)}>Sign Up</button>
              </div>
              )
            }
            {
              !isLoadingLoggedUser && loggedUser && (
                <div>
                <button className="text-xl text-gray-500 bg-white px-3 py-1.5 rounded-md hover:bg-gray-200" onClick={()=> Meteor.logout()}>Log Out</button>
              </div>
              )
            }
            </div>
        </div>
      </nav>
    </header>
  )
}