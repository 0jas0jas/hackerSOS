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
      <Divider />
      <CheckBoxTech />
      <CheckBoxMentor />
      <Textarea
        isClearable
        className="w-1/2"
        label="Describe your issue"
        placeholder="Description"
        variant="bordered"
        // eslint-disable-next-line no-console
        onClear={() => console.log("textarea cleared")}
      />
      <Textarea
        isClearable
        className="w-1/2"
        label="Enter your code here"
        placeholder="Code"
        variant="underlined"
        // eslint-disable-next-line no-console
        onClear={() => console.log("textarea cleared")}
      />
      <Button className="w-1/12" color="default">Submit</Button>
      </Suspense>
    </div>
  );
}

function SearchParamsComponent() {
  const searchParams = useSearchParams();
  const message = searchParams.get("message");

  return <h1 className="text-5xl font-extrabold">{message}</h1>;
}
