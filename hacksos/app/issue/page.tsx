"use client";

import { useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Textarea } from "@nextui-org/input";
import React, { Suspense, useState } from "react";
import CheckBoxTech from "@/components/technologies";
import CheckBoxMentor from "@/components/mentors";

export default function Home() {
  const [tech, setTech] = useState<Set<string>>(new Set());
  const [mentor, setMentor] = useState("");
  const [description, setDescription] = useState("");
  const [code, setCode] = useState("");

  const getTechs  = (selected: Set<string>) => {
    setTech(selected);
    // console.log(selected);
  }

  const getMentor = (selected: string) => {
    setMentor(selected);
    console.log(selected);
  }

  React.useEffect(() => {
    console.log(mentor);
  }, [mentor]);

  return (
    <div className="flex flex-col gap-10">
      
      <Suspense fallback={<p>Loading...</p>} >
        
        <Suspense fallback={<p>Loading search params...</p>}>
          <SearchParamsComponent />
        </Suspense>

        <div className="divider"></div>

        <div className="flex flex-col gap-10 w-1/2">
          <CheckBoxTech func={getTechs} />

          <CheckBoxMentor func={getMentor} />
          
          <textarea 
          className="textarea textarea-bordered" 
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          ></textarea>

          <textarea 
          className="textarea textarea-ghost border-b-error" 
          placeholder="Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          ></textarea>

          <button 
          className="w-1/6 btn" 
          color="default"
          onClick={() => {
            console.log(tech);
            console.log(mentor);
            console.log(description);
            console.log(code);
          }}
          >Submit</button>
        </div>

      </Suspense>
    
    </div>
  );
}

function SearchParamsComponent() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  return <h1 className="text-5xl font-extrabold">{message}</h1>;
}
