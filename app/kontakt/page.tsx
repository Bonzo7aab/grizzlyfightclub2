"use client"

import emailjs from "emailjs-com";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { toast } from 'react-toastify';

export default function Contact () {

    const sendEmail = (e: any) => {
        e.preventDefault();

        const serviceId = String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
        const templateId = String(process.env.NEXT_PUBLIC_EMAILJS_CONTACT_ID);
        const userId = String(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

        emailjs.sendForm(serviceId, templateId, e.target, userId)
            .then(() => toast("Email wysłany", { type: "success" }))
            .catch(() => toast("Wystąpił problem z wysłaniem wiadomości", { type: "error" }));
    }

    return (
        <section className="bg-gbrown-500 dark:bg-gbrown-100">
            <div className="container px-6 py-12 mx-auto">
                <div className="lg:flex lg:items-center lg:-mx-6">


                    <div className="mt-8 lg:w-1/2 lg:mx-6">
                        <div
                            className="w-full px-8 py-10 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-gray-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50">
                            <h1 className="text-lg font-medium text-gray-700">O co chciałbyś spytać?</h1>

                            <form className="mt-6" onSubmit={sendEmail}>
                                <div className="flex-1">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Imię i nazwisko</label>
                                    <input type="text" name="name" required maxLength={50} placeholder="Jan Kowalski" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400" />
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email</label>
                                    <input type="email" name="email" required maxLength={50} placeholder="jan.kowalski@gmail.com" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400" />
                                </div>

                                <div className="flex-1 mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Temat</label>
                                    <input type="text" name="subject" required maxLength={50} placeholder="Wyjazd wakacyjny" className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400" />
                                </div>

                                <div className="w-full mt-6">
                                    <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Wiadomość</label>
                                    <textarea required name="message" className="block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400" placeholder="Mam pytanie odnośnie..."></textarea>
                                </div>

                                <button className="w-full px-6 py-3 mt-6 text-sm font-medium tracking-wide text-white transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                    Wyślij wiadomość
                                </button>
                            </form>
                        </div>
                    </div>

                    <div className="bg-white lg:w-1/2 lg:mx-6">
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize dark:text-white lg:text-3xl">
                            Kontakt
                        </h1>
                        <div className="mt-6 space-y-8 md:mt-8">
                            <p className="flex items-start -mx-2">
                                <BsTelephone size={20} color="#655A3E"/>
                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">606301856</span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <BsTelephone size={20} color="#655A3E"/>
                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">533020048</span>
                            </p>

                            <p className="flex items-start -mx-2">
                                <AiOutlineMail size={20} color="#655A3E"/>
                                <span className="mx-2 text-gray-700 truncate w-72 dark:text-gray-400">GRIZZLYKLUB@GMAIL.COM</span>
                            </p>
                        </div>
                    </div>

                    
                </div>
            </div>
        </section>
    )
}
