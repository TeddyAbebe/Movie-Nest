import React from "react";

export default function About() {
  return (
    <div className=" max-w-4xl mx-auto space-y-5 px-8">
      <h1 className="text-3xl font-mono font-medium text-amber-600">About</h1>
      <p className="text-lg">
        Welcome to <span className="font-bold font-serif">Movie Nest</span>,
        your ultimate destination for discovering and enjoying movies! Our
        platform offers a curated collection of films across genres,
        personalized recommendations, and a user-friendly interface for seamless
        navigation. Join our community of movie enthusiasts to explore, share,
        and connect over your favorite cinematic experiences. Your feedback
        drives our continuous improvement.
      </p>
      <h1 className="text-3xl font-mono font-medium text-amber-600">
        Our Mission
      </h1>
      <p className="text-lg">
        At <span className="font-bold font-serif ">Movie Nest</span>, our
        mission is to create a seamless and engaging platform that connects
        movie enthusiasts with their favorite films and introduces them to new
        cinematic experiences. We strive to empower users to explore the world
        of cinema, broaden their horizons, and foster a sense of community
        around their shared love for movies.
      </p>

      <div className="text-lg">
        Thanks for choosing{" "}
        <span className="font-bold text-xl font-serif text-amber-600">
          Movie Nest
          <strong className="mx-1 text-3xl">!</strong>
        </span>
      </div>
    </div>
  );
}
