"use client";

import Link from "next/link";
import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Image,
  CardHeader,
} from "@nextui-org/react";
const VolTwoCard = ({ items }) => {
  return (
    <>
      <Link href="/">
        <Card className=" col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              What to watch
            </p>
            <h4 className="text-white font-medium text-large">
              {items.original_title}
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src={`https://image.tmdb.org/t/p/original${items?.poster_path}`}
          />
        </Card>
      </Link>
    </>
  );
};

export default VolTwoCard;
