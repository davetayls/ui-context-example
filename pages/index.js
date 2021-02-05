import { useState } from 'react'
import Head from 'next/head'
import { useUIContext } from "../src/UIContext";

export default function Home() {
  const { isMenuOpen, toggleMenu } = useUIContext()
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <aside className={`${isMenuOpen ? 'block' : 'hidden'} fixed top-4 right-2 w-1/3 border-2 border-gray-700 rounded-md p-2`}>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </aside>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold text-green-500">
          UI Context
        </h1>
        <button onClick={toggleMenu}>Toggle Menu</button>
      </main>


    </div>
  )
}
