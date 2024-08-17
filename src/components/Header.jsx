import React from 'react'
import { MdDarkMode } from "react-icons/md";


export default function Header() {
  return (
    <div className="flex h-24 w-ful px-4">
    {/* Left Div in Header containing Logo */}
    <button
      className="flex items-center gap-1 btn"
      onClick={() => location.reload()}
    >
      <h1 className="flex items-center justify-center h-8 w-8 sm:h-12 sm:w-12 p-4 rounded-full text-lightPurp border-lightPurp border-2 sm:text-2xl font-bold">
        To
      </h1>
      <h1 className="text-xl font-bold">Do</h1>
    </button>

    {/* Right Div in Header containing email and avatar */}
    <div className="flex ml-auto items-center justify-end px-4 gap-5 sm:gap-8">
      <h2 className="sm:text-xl text-black">huzaifa190@gmail.com</h2>
      <button className="btn">
        <MdDarkMode size={28} title="dark mode" />
      </button>
      {/* <MdOutlineLightMode size={28} title="light mode" /> */}
    </div>
  </div>
  )
}
