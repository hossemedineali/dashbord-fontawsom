import { useSlideMenuToggle } from "@/store/useMenu";
import {useState} from "react"

const Header = () => {

  const {colapsedMenu,setColapsedMenu}=useSlideMenuToggle()
  return (
    <div className="flex flex-col md:flex-row items-center md:pr-4 justify-between ">
    
    <div className="flex md:justify-center justify-between w-full md:w-fit items-center gap-2 ">

      <div className="flex md:h-16 md:w-16 h-10 w-10 items-center justify-center bg-[#444444] md:p-4 p-2">
        <svg
        onClick={()=>{setColapsedMenu(colapsedMenu=='leftMenu'?'':'leftMenu')}}
          className="hover:cursor-pointer hover:scale-105 active:scale-95 "
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          {/* !--! Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}{" "}
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
            fill="white"
          />
        </svg>
      </div>

      <p className="h-fit lg:text-2xl text-xl mx-auto  mr-auto ">@ Your Company</p>

      <div className="md:hidden">
      <Notification/>
      </div>
      <div className="md:hidden">
      <UserInfoMobile/>

      </div>
    </div>

        <div className="mx-auto  flex-grow md:max-w-xl w-full  " >
            <Forum/>
        </div>

        <div className="hidden md:block  mx-auto">
            <Notification/>
        </div>


    <div className="hidden lg:block ">
      <UserInfo/>
    </div>

    <div className="lg:hidden hidden md:block ">

      <UserInfoMobile/>
    </div>
    
    </div>
  );
};

const UserInfoMobile=()=>{

  const [show,setShow]=useState(false)

  return <div className="relative">
  
<button onMouseEnter={()=>{setShow(true)}}  onMouseLeave={()=>{setShow(false)}} onClick={()=>{setShow(!show)}} id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center  bg-black rounded-full " type="button"> 
<svg xmlns="http://www.w3.org/2000/svg" className="lg:w-8 lg:h-8 w-6 h-6    m-auto"    fill="white" stroke="white" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>
</button>

{show&&    <div className="absolute  bg-[#d6d6d6]  z-10 font-semibold right-4 w-max  text-right  flex flex-col">
      <span className="lg:text-lg  text-sm">Renee McKelvey</span>
      <span className="font-extralight ">Premium user</span>
    </div>}


  </div>
}
const UserInfo=()=>{

  return <div className="flex w-max  justify-center items-center  gap-3">

    <div>
      <p className="lg:text-md text-sm">Renee McKelvey</p>
      <p className="text-[#d6d6d6] text-right">Premium user</p>
    </div>
    <div className="lg:w-10 lg:h-10 w-8 h-8 bg-black rounded-full flex">
    <svg xmlns="http://www.w3.org/2000/svg" className="lg:w-8 lg:h-8 w-6 h-6    m-auto"    fill="white" stroke="white" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"/></svg>

    </div>

  </div>
}

const Notification=()=>{

    return <button  type="button" className=" mx-4   relative inline-flex items-center p-3 text-sm font-medium text-center text-[#444444] ">
<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="h-6 w-6" viewBox="0 0 448 512">  {/* Font Awesome Pro 6.3.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. */}<path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"/></svg>    <span className="sr-only">Notifications</span>
    <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white  border-2 border-white rounded-full -top-0 -right-2 bg-[#d6d6d6]">2</div>
  </button>
  
}


const Forum=()=>{

    return   <form className="flex text-gray-500 h-8 items-center w-full  md:max-w-lg">
    <label htmlFor="simple-search" className="sr-only">
      Search
    </label>
    <div className="relative w-full  ">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
        <svg
          aria-hidden="true"
          className="h-5 w-5 "
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      <input
        type="text"
        id="simple-search"
        className="block w-full  border  h-8  px-2.5 pl-10 text-sm "
        placeholder="Search"
      />
    </div>
    <button
      type="submit"
        className="w-28 border  h-8"
>
     Go!
      <span className="sr-only">Search</span>
    </button>
  </form>
}
export default Header;
