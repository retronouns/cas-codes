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
        // mode: "no-cors",
      });
      const response = await req.json() as { message: string };
      setMessage(response.message);
    })();
  }, []);

  return (
    <>
      <div className="w-screen h-screen flex flex-col gap-8 font-cas text-cas-text p-8">
        <div className="flex flex-row gap-8 bg-cas-dark border-2 border-cas-text p-2">
          <span className="font-bold flex-grow">Cas Codes</span>
          <span>{message} UNDER CONSTRUCTION!!!</span>
        </div>
        <div className="flex-grow flex flex-row gap-8">
          <span className="flex-grow bg-cas-light border-2 border-cas-text p-2">
            lorem ipsum dolor sit amet
          </span>
          <span className="flex-grow bg-cas-light border-2 border-cas-text p-2">
            lorem ipsum dolor sit amet
          </span>
        </div>
      </div>
    </>
  );
}

export default App;
