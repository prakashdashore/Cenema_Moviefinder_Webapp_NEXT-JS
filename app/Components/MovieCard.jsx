"use client";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

import { CircularProgress } from "@nextui-org/react";
import Link from "next/link";


export default function App({items}) {


  return (
    <div className="w-[200px]">
      <Link href={`details/${items.id}`} >
      <Card
        isFooterBlurred
        shadow='sm'
        className="w-auto h-[300px] col-span-12 sm:col-span-5"
      >
        <CardHeader className="absolute z-10 top-1 flex-col items-start">
          {/* <p className="text-tiny text-white/60 uppercase font-bold">New</p>
          <h4 className="text-white font-semibold text-2xl">{items?.original_title}</h4> */}
        </CardHeader>
        {
          items.poster_path ? <Image
          removeWrapper
          alt="Movie"
          className="z-0 w-full h-full scale-125 -translate-y-6 object-cover"
          src={`https://image.tmdb.org/t/p/original${items?.poster_path}`}
        /> : <p className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">SORRY !! , Poster not available for this movie.</p>
        }
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
          <div>
            <p className="text-black text-md font-bold">{items?.original_title}</p>
            <p className="text-black text-tiny">{items.release_date}</p>
      
          </div>
          <div>
          <CircularProgress
            label="Rating"
            size="lg"
            value={items.vote_average * 10}
            color="success"
            formatOptions={{ style: "percent", unit: "percent" }}
            showValueLabel={true}
            
          />
          </div>
        </CardFooter>
      </Card>
      </Link>


    </div>
  );
}
