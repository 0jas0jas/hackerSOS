"use client";

import React from "react";
import { Select, SelectItem, SharedSelection } from "@nextui-org/react";

export const professors = [
  {
    label: "Galatea Merrythought",
    key: "MRT",
    description: "The DADA Professor",
  },
  {
    label: "Minerva McGonagall",
    key: "MCG",
    description: "The Transfiguration Professor",
  },
  {
    label: "Filius Flitwick",
    key: "FLIT",
    description: "The Charms Professor",
  },
  {
    label: "Severus Snape",
    key: "SNAPE",
    description: "The Potions Master",
  },
];

export default function App() {
  const [value, setValue] = React.useState<Set<string>>(new Set()); // Explicitly type the state as Set<string>
  const [selectedDesc, setSelectedDesc] = React.useState<string | null>(null);

  const onSelectionChange = (keys: SharedSelection) => {
    const selectedKey = Array.from(keys).pop() as string; // Extract the selected key

    setValue(new Set([selectedKey])); // Update the selected keys
    const professor = professors.find((prof) => prof.key === selectedKey);

    setSelectedDesc(professor ? professor.description : null); // Update the description
  };

  return (
    <div className="flex w-1/2 flex-col gap-2">
      <Select
        className="w-full"
        label="Professor"
        placeholder="Select a professor"
        selectedKeys={value}
        variant="bordered"
        onSelectionChange={onSelectionChange}
      >
        {professors.map((prof) => (
          <SelectItem key={prof.key}>{prof.label}</SelectItem>
        ))}
      </Select>
      <p className="text-small text-default-500">
        Description: {selectedDesc || "None"}
      </p>
    </div>
  );
}
