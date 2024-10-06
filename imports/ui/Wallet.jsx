import React, { useState } from 'react';
import { MoneyModal } from './components/Alerts'

export const Wallet = () => {

    const [modal, setModal] = useState("")
    const [open, setOpen] = useState(false)

    const wallet = {
        _id: '1234',
        balance: '5',
        currency: 'USD'
    }

    const handleCancel = () => {

        setOpen(false)
        setTimeout(() => {
            setModal("")
        }, 200)
    }

    const handleAddMoney = () => {

        setModal("add")
        setOpen(true)
    }

    const handleTransferMoney = () => {

        setModal("transfer")
        setOpen(true)
    }

    return (
        <div className="px-20 my-20">
            {
                <MoneyModal
                    open={open}
                    setOpen={setOpen}
                    modal={modal}
                    handleCancel={handleCancel}
                />
            }
            <div class="flex font-sans mt-6  mx-10 shadow-md">
                <form class="flex-auto p-6">
                    <div class="flex flex-wrap">
                        <div class="w-full flex-none text-sm font-medium text-gray-500">
                            Main Account
                        </div>
                        <div class="w-full flex-none text-sm font-medium text-gray-700 mt-2">
                            Wallet ID:
                        </div>
                        <h1 class="flex-auto text-lg font-semibold text-slate-900">
                            {wallet._id}
                        </h1>
                        <div class="text-2xl font-bold text-gray-700">
                            {`${wallet.balance} ${wallet.currency}`}
                        </div>
                    </div>
                    <div class="flex space-x-4 text-sm font-medium">
                        <div class="flex-auto flex space-x-4 mt-4">
                            <button
                            type="button"
                            onClick={handleAddMoney}
                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                            Add Money
                            </button>
                            <button
                            type="button"
                            onClick={handleTransferMoney}
                            className="bg-indigo-600 border border-transparent rounded-md shadow-sm py-2 px-4 inline-flex justify-center text-xl font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
                            >
                            Transfer Money
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}