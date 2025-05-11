'use client'; // If using Next.js App Router

import React from 'react';

const FloatingButton = () => {
    return (
        <div className="fixed flex bottom-5 right-5 rounded-full bg-green-500 hover:bg-green-600 p-2 md:p-4 shadow-xl">
            <a
                href="https://wa.me/918601381096?text=Hello%2C%20this%20is%20a%20message%20from%20OptechAI.%20Thank%20you%20for%20contacting%20The%20Vardi%20Makers%20%E2%80%93%20a%20premium%20brand%20by%20Kriplani%20Textile%20Mills.%20We%20appreciate%20your%20interest%20in%20our%20uniform%20and%20textile%20solutions.%20Our%20team%20will%20get%20in%20touch%20with%20you%20shortly.%20For%20any%20immediate%20assistance%2C%20feel%20free%20to%20reach%20out%20directly.%20Warm%20regards%2C%20Team%20Kriplani%20%7C%20The%20Vardi%20Makers."
                target="_blank"
                rel="noopener noreferrer"
                className="h-7 md:h-11 w-7 md:w-11 text-white"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-whatsapp w-full h-full"
                >
                    <path d="M12 2a10 10 0 0 0-10 10 10 10 0 0 0 1.6 5.4L2 22l4.8-1.6A10 10 0 0 0 12 22a10 10 0 0 0 10-10 10 10 0 0 0-10-10z" />
                    <path d="M16.3 14.2c-.4.2-1.3.6-1.5.7-.3.1-.6.2-.9 0-1.8-.6-3.2-2-3.8-3.8-.1-.3-.1-.6 0-.9.1-.2.5-1.1.7-1.5.1-.2.1-.4 0-.6s-.4-.6-.5-.8c-.1-.2-.3-.4-.5-.5-.2-.1-.4-.1-.6 0-.3 0-.7 0-1 .3-.3.3-1.3 1.3-1.3 3.2s1.3 4.2 2.4 5.3c1.2 1.2 3.2 2.4 5.3 2.4s2.9-1 3.2-1.3c.3-.3.3-.7.3-1 0-.2 0-.4-.1-.6s-.3-.4-.5-.5c-.2-.1-.6-.4-.8-.5-.2-.1-.4-.1-.6 0z" />
                </svg>
            </a>
        </div>
    );
};

export default FloatingButton;
