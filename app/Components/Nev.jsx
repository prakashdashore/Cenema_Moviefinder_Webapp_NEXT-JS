"use client";
import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Input,
  DropdownItem,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  Avatar,
} from "@nextui-org/react";
// import {AcmeLogo} from "./AcmeLogo.jsx";
import Link from "next/link";
import { SearchIcon } from "./SearchIcon";

import { Button } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { getMoviesSearch } from "@/store/Reducers/SearchMovieReducer";
import { GetSearchMovies } from "@/utils/fetch";

export default function App() {
  const [searchh, setsearchh] = useState("");
  const router = useRouter();
  const dispatch = useDispatch();

  const [input, setInput] = useState('')
  const searchHandler = async(e)=>{
    e.preventDefault()
    if(!input  || input.trim().length <=1 ){
       return alert("please enter valid input !!")
    }
    const d = await GetSearchMovies(input)
    dispatch(getMoviesSearch(d))
    router.push('/search')
    setInput('')
    
  
  }
  return (
    <Navbar className="bg-white overflow-hidden fixed shadow-lg" isBordered>
      <NavbarContent justify="start">
        <Link href="/">
        <NavbarBrand className="mr-4">
          <img
            className="w-[200px] object-cover mt-5"
            src="https://img.freepik.com/premium-vector/cinema-poster-design-template-3d-golden-text-cinema-decorated-with-filmstrip_368602-2105.jpg"
            alt=""
          />
        </NavbarBrand>
        </Link>
        <NavbarContent className=" sm:flex gap-3">
          <Dropdown>
            <DropdownTrigger>
              <Button
                className="text-black font font-semibold"
                variant="bordered"
              >
                Movies
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              onAction={(key) => router.push(key)}
            >
              <DropdownItem key="/trendings">Popular</DropdownItem>
              <DropdownItem key="/now">Now Playing</DropdownItem>
              <DropdownItem key="/upcommings">Upcoming</DropdownItem>
              <DropdownItem key="/top">Top Rated</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown>
            <DropdownTrigger>
              <Button className="text-black font-semibold" variant="bordered">
                TV Shows
              </Button>
            </DropdownTrigger>
            <DropdownMenu
              aria-label="Action event example"
              onAction={(key) => router.push(key)}
            >
              <DropdownItem key="/tvpopular">Popular</DropdownItem>
              <DropdownItem key="/tvarrivings">Airing Today</DropdownItem>
              <DropdownItem key="/ontv">On Tv</DropdownItem>
              <DropdownItem key="toptv ">Top Rated</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </NavbarContent>
      </NavbarContent>

      <NavbarContent as="div" className=" w-full items-center flex hidden md:flex
      " justify="end">
        <form className=" w-full items-center  flex gap-2"  onSubmit={searchHandler}>
          <SearchIcon />
          <Input className="" type="text" placeholder="Search"
          onChange={(e)=>setInput(e.target.value)}
          value={input}

           />
        </form>

        <Dropdown placement="bottom-end  ">
          <DropdownTrigger>
            <Avatar
              isBordered="false"
              as="button"
              className="transition-transform hidden md:inline-block lg:inline-block "
              color="secondary"
              name="Jason Hughes"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
