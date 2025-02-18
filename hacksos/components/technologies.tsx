"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";
import { MultiSelect } from "./multiSelect";

interface TechProps {
  func : (b: Set<string>) => void;
}



const technologies: React.FC<TechProps> = ({ func }) => {

  return (
      <MultiSelect 
        label={"Select Hogwarts Classes"} 
        placeHolder={"Choose..."} 
        options={["Defense Against the Dark Arts", "Potions", "Transfiguration", "Herbology", "Charms", "Divination", "Care of Magical Creatures", "Astronomy"]} 
        onChangeHook={(selected: Set<string>): void => {
          func(selected);
        }} 

      />
  );
}


export default technologies;