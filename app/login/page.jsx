'use client'
import React, { useState } from 'react'
import Head from "next/head";
import Link from "next/link";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [keepSignedIn, setKeepSignedIn] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // submit login credentials to backend API
      if (keepSignedIn) {
        // set an appropriate expiry time for the user's session
        const expiry = new Date();
        expiry.setDate(expiry.getDate() + 30); // set to expire in 30 days
        // store a token or session ID in a persistent storage
        localStorage.setItem('session', 'some-token');
        localStorage.setItem('expiry', expiry);
      }
    };
  
    return (
      <div className="flex flex-col justify-center items-center my-8">
        <Head>
          <title>Login</title>
          <link rel="icon" href="/favicon.png" />
        </Head>
        <div className="w-96 bg-zinc-800 p-8 rounded-lg shadow-lg">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="block text-lg font-bold text-white mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-lg py-2 px-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4"
              required
            />
            <label htmlFor="password" className="block text-lg font-bold text-white mb-2">
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-lg py-2 px-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4"
              required
            />
            <div className="flex items-center mb-4">
              <input
                type="checkbox"
                id="keepSignedIn"
                name="keepSignedIn"
                checked={keepSignedIn}
                onChange={(e) => setKeepSignedIn(e.target.checked)}
                className="mr-2"
              />
              <label htmlFor="keepSignedIn" className="text-lg font-bold text-white">
                Keep me signed in
              </label>
            </div>
            <button
              type="submit"
              className="bg-red-600 hover:bg-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Sign in
            </button>
            <div className="text-gray-400 mt-4">
              <span>Don&apos;t have an account?</span>{" "}
              <Link href="/signup">
                <button className="text-red-600 hover:text-red-500 font-bold">Sign up here.</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
}

