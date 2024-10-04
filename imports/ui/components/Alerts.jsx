import React from "react";
import { XCircleIcon, CheckCircleIcon } from '@heroicons/react/solid'

export const ErrorAlert = ({ message }) => {
  return (
    <div className="fixed top-3 right-2 rounded-md bg-red-50 p-4 z-50 shadow-md">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <XCircleIcon className="h-8 w-8 text-red-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <h3 className="text-xl font-medium text-red-800">{message}</h3>
        </div>
      </div>
    </div>
  )
}

export const SuccessAlert = ({ message }) => {
  return (
    <div className="fixed top-3 right-2 rounded-md bg-green-50 p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon className="h-8 w-8 text-green-400" aria-hidden="true" />
        </div>
        <div className="ml-3">
          <p className="text-xl font-medium text-green-800">{message}</p>
        </div>
      </div>
    </div>
  )
}