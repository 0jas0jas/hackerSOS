"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { MultiSelect } from "./multiSelect";



export default function App() {
  return (
      <MultiSelect 
        label={"Select Hogwarts Classes"} 
        placeHolder={"Choose..."} 
        options={["Defense Against the Dark Arts", "Potions", "Transfiguration", "Herbology", "Charms", "Divination", "Care of Magical Creatures", "Astronomy"]} 
        onChangeHook={(selected: Set<string>): void => {
          console.log("Selected classes:", selected);
        }} 
      />
  );
}
