"use client";
import React from "react";
import { Select, SelectItem } from "@nextui-org/select";

export const subjects = [
  { key: "DADA", label: "Defense Against the Dark Arts" },
  { key: "TRANSF", label: "Transfiguration" },
  { key: "CHARMS", label: "Charms" },
  { key: "POTIONS", label: "Potions" },
];

export default function App() {
  return (
    <Select
      className="w-1/2"
      label="What do you need help with"
      placeholder="Subject"
      selectionMode="multiple"
      size="lg"
    >
      {subjects.map((subject) => (
        <SelectItem key={subject.key}>{subject.label}</SelectItem>
      ))}
    </Select>
  );
}
