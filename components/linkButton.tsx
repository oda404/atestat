/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { Link } from "@chakra-ui/react";
import React from "react";

export interface LinkButtonProps 
{
  href: string;
}

export default function LinkButton({ href }: LinkButtonProps) 
{
  return (
    <Link
      color="#12a0d3"
      _focus={{ boxShadow: "none" }}
      href={href}
      target="_blank"
    >
      {href}
    </Link>
  );
}
