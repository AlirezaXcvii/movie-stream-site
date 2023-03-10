'use client'
import React, { useState } from 'react'
import Head from "next/head";
import Link from "next/link";
import { BiChevronDown } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';



export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [gender, setGender] = useState("");
  const [acceptPolicy, setAcceptPolicy] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // submit signup details to backend API
  };

  const handleAcceptPolicy = () => {
    setAcceptPolicy(!acceptPolicy);
  };

  return (
    <div className="flex flex-col justify-center items-center my-8">
      <Head>
        <title>Sign up</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="w-96 bg-zinc-800 p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name" className="block text-md font-semibold mb-2">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block w-full rounded-lg py-2 px-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4"
            required
          />
          <label htmlFor="email" className="block text-md font-semibold mb-2">
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
          <label htmlFor="password" className="block text-md font-semibold  mb-2">
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
          <label htmlFor="confirmPassword" className="block text-md font-semibold mb-2">
            Confirm password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="block w-full rounded-lg py-2 px-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4"
            required
          />
          <label htmlFor="birthdate" className="block text-md font-semibold mb-2">
            Birthdate:
          </label>
          <div className="relative">
          <input
            type="date"
            id="birthdate"
            name="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            className="block w-full rounded-lg py-2 px-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4 appearance-none"
            required
          />
          <span className="text-xl text-gray-500 absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <AiOutlineCalendar />
          </span>
        </div>
          <label htmlFor="gender" className="block text-md font-semibold mb-2">
            Gender:
          </label>
          <div className="relative">
            <select
              id="gender"
              name="gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="block w-full rounded-lg py-2 px-3 bg-zinc-800 border border-zinc-700 hover:border-zinc-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent mb-4 appearance-none select-none"
              required
            >
              <option value="">Select gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            <span className="text-xl text-gray-500 absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <BiChevronDown />
            </span>
          </div>
          
          <div className="flex items-center mb-4">
            <input type="checkbox" id="acceptPolicy" name="acceptPolicy" checked={acceptPolicy} onChange={handleAcceptPolicy} className="mr-2" required />
            <label htmlFor="acceptPolicy" className="text-md font-semibold">
              I accept the <Link href="/policies"><button className="underline">terms and conditions</button></Link>.
            </label>
          </div>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-500 font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={!acceptPolicy}
          >
            Create account
          </button>
          <div className="text-gray-200 mt-4">
            <span>Already have an account?</span>{" "}
            <Link href="/login">
              <button className="text-red-600 hover:text-red-500 font-semibold">Log in here.</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
