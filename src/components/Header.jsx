import React from "react";
import Button from "./Button";
import { GoRocket } from "react-icons/go";

export default function Header() {
  return (
    <div className="text-white pt-6  px-6 md:px-32 flex justify-between items-center ">
      <h1 className="font-medium text-lg">Fauzan</h1>
      <Button
        label={
          <span className="flex items-center gap-3">
            Hire <GoRocket />
          </span>
        }
        size="sm"
        actions="link"
        url="/contact"
      />
    </div>
  );
}
