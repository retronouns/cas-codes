import { API_HOST } from "./env.ts";
// @deno-types="@types/react"
import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState<string>("");
  useEffect(() => {
    (async () => {
      const req = await fetch(API_HOST, {
        headers: {
          "accept": "application/json",
        },
        method: "GET",
      });
      const response = await req.json() as { message: string };
      setMessage(response.message);
    })();
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-2 font-cas text-cas-text p-6 pt-2">
        <div className="flex flex-row gap-4 p-2 place-items-center">
          <span className="text-4xl font-medium italic flex-grow">
            cas.codes
          </span>
          <span className="italic">{message}</span>
          <span>UNDER CONSTRUCTION!!!</span>
        </div>
        <div className="flex-grow flex flex-row gap-8">
          <span className="flex flex-col gap-4 bg-cas-dark border-2 border-cas-text rounded-lg p-4">
            <div className="font-bold italic underline hover:cursor-pointer">
              About Me
            </div>
            <div className="hover:cursor-pointer">Contact</div>
          </span>
          <span className="flex-grow bg-cas-light border-2 border-cas-text rounded-lg p-4">
            lorem ipsum dolor sit amet
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
