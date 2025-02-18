"use client";

import React from "react";
import { SharedSelection } from "@nextui-org/system";
import { Select, SelectItem } from "@nextui-org/select";

interface MentorProps {
  func: (b: string) => void;
}

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

const CheckBoxMentor: React.FC<MentorProps> = ({ func }) => {
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
      <select
      className="select w-full max-w-xs select-bordered"
      
      onChange={(e) => {
        const selectedKey = e.target.value;
        setValue(new Set([selectedKey]));
        const professor = professors.find((prof) => prof.key === selectedKey);
        if (professor) {
          func(professor.label);
        }
        setSelectedDesc(professor ? professor.description : null);
      }}
      >

      <option disabled selected>
        Select a professor
      </option>

      {professors.map((prof) => (
        <option key={prof.key} value={prof.key}>
        {prof.label}
        </option>
      ))}
      
      </select>

      <p className="text-sm text-default-500">
      {selectedDesc || ""}
      </p>
    </div>
  );
}

export default CheckBoxMentor;