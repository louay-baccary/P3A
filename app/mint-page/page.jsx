"use client";
import React, { useState } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";

function page() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  return (
    <div>
      <div className="rounded flex items-center justify-center h-[60vh] w-[40vw] bg-gradient-to-r from-purple-500 to-blue-500 animate-gradient">
        <div className="w-3/4 p-8 bg-white rounded-lg shadow-lg">
          <div className="flex items-center justify-start w-full">
            {" "}
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
            />
            <p>Hello</p>
          </div>

          <p className="text-gray-700 font-satoshi">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
            aliquet velit, a ullamcorper leo. Sed eget felis vel massa ultrices
            maximus. Sed ut lorem sagittis, blandit lectus a, venenatis neque.
            Quisque vel turpis non ligula efficitur maximus. Suspendisse
            potenti.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center w-full mt-4 ">
        <button className="p-4 text-sm font-extrabold text-white rounded-md bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
          Mint
        </button>
      </div>
    </div>
  );
}

export default page;
