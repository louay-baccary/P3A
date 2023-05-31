import React from "react";
import { useRouter } from "next/navigation";

function TurnItToNftButton() {
  const router = useRouter();

  function onButtonClick() {
    router.push("/mint-page");
  }
  return (
    <button
      onClick={onButtonClick}
      className="p-2 text-sm font-extrabold text-white rounded-md bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient"
    >
      Turn It To NFT
    </button>
  );
}

export default TurnItToNftButton;
