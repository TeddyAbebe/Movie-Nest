import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Card({ result }) {
  return (
    <div className="group">
      <Link href={`/movie/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path || result.poster_path
          }`}
          alt="Poster"
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        ></Image>

        <div className="p-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate">
            {result.title || result.name}
          </h2>

          <p>{result.release_date || result.first_air_date}</p>
        </div>
      </Link>
    </div>
  );
}
