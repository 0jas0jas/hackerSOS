"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Divider } from "@nextui-org/divider";
import { Textarea } from "@nextui-org/input";
import { Suspense } from "react";

import CheckBoxTech from "@/components/technologies";
import CheckBoxMentor from "@/components/mentors";

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      <Suspense fallback={<p>Loading...</p>} >
        <Suspense fallback={<p>Loading search params...</p>}>
          <SearchParamsComponent />
        </Suspense>
        <div className="divider"></div>
        <div className="flex flex-col gap-10 w-1/2">
          <CheckBoxTech />
          <CheckBoxMentor />
          {/* <Textarea
        isClearable
        className="w-1/2"
        label="Describe your issue"
        placeholder="Description"
        variant="bordered"
        // eslint-disable-next-line no-console
        onClear={() => console.log("textarea cleared")}
      /> */}

          <textarea className="textarea textarea-bordered" placeholder="Description"></textarea>
          {/* <Textarea
          isClearable
          className="w-1/2"
          label="Enter your code here"
          placeholder="Code"
          variant="underlined"
          // eslint-disable-next-line no-console
          onClear={() => console.log("textarea cleared")}
        /> */}

          <textarea className="textarea textarea-ghost border-b-error" placeholder="Code"></textarea>
          <button className="w-1/6 btn" color="default">Submit</button>
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
