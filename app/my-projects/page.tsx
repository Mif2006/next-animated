import OpenCards from "@/components/OpenCards";
import React from "react";

const Page = () => {
  return (
    <div
      className="bg-center bg-cover w-screen h-screen flex items-center justify-center"
      style={{ backgroundImage: "url(/SnowMoon.jpg)" }}
    >
      <div className="mt-8">
        <OpenCards />
      </div>
    </div>
  );
};

export default Page;
