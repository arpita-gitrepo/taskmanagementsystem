import React from 'react'
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <>
            <main class="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
                <div class="text-center">
                    <h1 class="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl">Page not found</h1>
                    <p class="mt-6 text-base leading-7 text-gray-500">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <button onClick={() => navigate('/')} class="rounded-md bg-teal-600 px-3.5 py-2.5 text-base text-white">Go to home</button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default PageNotFound