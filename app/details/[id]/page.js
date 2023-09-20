"use client";
import { Tooltip, Button } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { CircularProgress } from "@nextui-org/react";
import { AiOutlineMenuFold, AiOutlineStar } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import { BsBookmark } from "react-icons/bs";

import { BsPlayFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), { ssr: false });

const page = ({ params }) => {
  const { id } = params;
  const [movie, setMovie] = useState(null);
  const [trailer, setTrailer] = useState("");
  const [showPlayer, setShowPlayer] = useState(false);
  const [crew, setcrew] = useState(null);
  const [cast, setcast] = useState(null);


  const getDetailsOfMovie = async () => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=03f1548b65a603b16ff790d32bce2275&append_to_response=videos`
      );
      console.log(data);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };
  // const castNcrew = async () => {
  //   const {data} = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=03f1548b65a603b16ff790d32bce2275&append_to_response=credits`)
  //   setcrew(data.crew.filter((crew) => crew.job === "Writer" || crew.job === "Director"));
  //   setcast(data.cast)
  // }
  useEffect(() => {
    if (movie === null) getDetailsOfMovie();
    // castNcrew();
    
  }, []);

  useEffect(() => {
    const trailerIndex = movie?.videos?.results?.findIndex(
      (element) => element.type === "Trailer"
    );
    const trailerURL = `https://www.youtube.com/watch?v=${
      movie?.videos?.results[trailerIndex || 0]?.key
    }`;
    setTrailer(trailerURL);
    console.log("thisiis" , trailerURL)
  }, [movie]);

  // let h = String((movie?.runtime / 60).toFixed(1)).split(".")[0];
  // let m = String((movie?.runtime / 60).toFixed(1)).split(".")[1];

  // // let m = lol.
  // console.log("thissss", `${h}h,${m}m`);
  // console.log(cast)

  return (
    <>
      <div className=" z-10 mt-14 w-[100vw] min-h-[100vh]">
        <div className=" z-20 w-full h-auto  flex items-center mt-10 text-white justify-center">
          <div className=" text-lg font-semibold flex gap-5 py-2">
            <Tooltip showArrow={true} content="depends on overviews ">
              <Button className="bg-transparent">Overview </Button>
            </Tooltip>
            <Tooltip showArrow={true} content="media access ">
              <Button className="bg-transparent">Media</Button>
            </Tooltip>
            <Tooltip showArrow={true} content="fan base ">
              <Button className="bg-transparent">Fandom</Button>
            </Tooltip>

            <Tooltip showArrow={true} content="sharable content ">
              <Button className="bg-transparent">Share</Button>
            </Tooltip>
          </div>
        </div>

        <div className="w-full h-full">
          <div className=" w-full h-[100vh] relative ">
            <img
              className="object-cover w-[100%] h-[100%]"
              src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
              alt=""
            />

            <div className="absolute bottom-0 left-0 w-full h-[100%] bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute top-0 left-0 w-full h-[100%] bg-gradient-to-b from-black to-transparent"></div>

            <div className="absolute top-0 left-0 w-[100%] h-[100%]  text-white text-base flex items-center justify-between flex-col md:flex-row lg:flex-row ">
              <div className="h-[100%] w-[80%] md:w-[30%] lg:w-[30%] flex items-center justify-center ">
                {movie ? (
                  <img
                    className="object-cover rounded-xl w-[80%] h-[80%]"
                    src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                  />
                ) : (
                  ""
                )}
              </div>

              <div className="h-[100%] w-[100%] md:w-[70%] lg:w-[70%]  p-2 md:p-16 p-5 lg:p-16 md:mt-14">
                <div>
                  <h1 className="text-4xl font-bold ">
                    {movie?.original_title}
                    {movie?.release_date
                      ? ` ( ${String(movie?.release_date).split("-")[0]} )`
                      : ""}
                  </h1>
                </div>

                <div className="flex items-center gap-2 mt-2">
                  {movie ? <div className="p-1 rounded-sm border">UA</div> : ""}

                  <div>
                    {movie?.release_date
                    
                      ? `( ${String(movie?.release_date)} )`
                      : ""}{" "}
                    {movie?.production_companies[0].origin_country}
                  </div>

                  <div className="flex gap-3 hidden md:visible lg:visible cursor-pointer
                   ">
                    {movie?.genres.map((items) => (
                      <h6 key={items.id}>{items.name}</h6>
                    ))}
                  </div>

                  {movie ? (
                    <div><span className="hover:text-red-400">Duration</span>{' '}
                      {String((movie?.runtime / 60).toFixed(1)).split(".")[0]}h{" "}
                      {String((movie?.runtime / 60).toFixed(1)).split(".")[1]}m
                    </div>
                  ) : (
                    ""
                  )}
                </div>

                {movie ? (
                  <div className="flex mt-5 items-center ">
                    <div className="mt-5 hover:scale-105 transition-all duration-200">
                      <CircularProgress
                        label="User Rating"
                        size="lg"
                        value={movie?.vote_average * 10}
                        color="success"
                        formatOptions={{ style: "percent", unit: "percent" }}
                        showValueLabel={true}
                      />
                    </div>
                    <div className="flex items-start gap-8">
                      <div className="bg-slate-700 p-3 rounded-full">
                        <AiOutlineMenuFold className="text-lg" />
                      </div>
                      <div className="bg-slate-700 p-3 rounded-full">
                        <FcLike className="text-lg hover:scale-150 transition-all duration-200" />
                      </div>
                      <div className="bg-slate-700 p-3 rounded-full">
                        <BsBookmark className="text-lg" />
                      </div>
                      <div className="bg-slate-700 p-3 rounded-full">
                        <AiOutlineStar className="text-lg" />
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
                {movie ? (
                  <div className="mt-5">
                    <h1 className="text-2xl font-bold">Overview</h1>
                    <p className="text-base">{movie?.overview}</p>
                  </div>
                ) : (
                  ""
                )}

                {movie ? (
                  <div
                    className="inline-block pt-6 cursor-pointer"
                    onClick={() => setShowPlayer(true)}
                  >
                    <div className="flex gap-2 items-center bg-blue-300 text-black px-4 py-2 mb-6 hover:bg-[#b4b4b4]">
                      <BsPlayFill size={24} />
                      Watch Trailer
                    </div>
                  </div>
                ) : (
                  ""
                )}

        



    

                




              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
          showPlayer ? "opacity-100 z-50" : "opacity-0 -z-10"
        }`}
      >
        <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
          <span className="font-semibold">
            Playing ({movie?.original_title}) Trailer
          </span>
          <div
            className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
            onClick={() => setShowPlayer(false)}
          >
            <IoMdClose className="h-10 w-10 text-white font-bold" />
          </div>
        </div>
        <div className="relative pt-[56.25%]">
         
          <ReactPlayer
            url={trailer}
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "0", left: "0" }}
            controls={true}
            playsinline={true}
            playing={showPlayer}
          />

      


        </div>

        
      </div>


    </>
  );
};

export default page;



//  CAstt


// <div>
// <h1 className="text-2xl font-bold">Cast</h1>
// <div className="flex gap-2 mt-2 flex-wrap">
//   {cast?.credits?.cast?.slice(0, 10).map((items) => (
//     <div key={items.id} className="flex flex-col items-center gap-2">
//       <img
//         className="object-cover rounded-full w-20 h-20"
//         src={`https://image.tmdb.org/t/p/original${items?.profile_path}`}
//       />
//       <div className="text-sm">{items?.name}</div>
//     </div>

//   ))}
// </div>
// </div>