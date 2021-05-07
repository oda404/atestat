/*
    Copyright Alexandru Olaru.
    Distributed under the MIT license.
*/

import { Link } from "@chakra-ui/react";
import React from "react";

export interface LinkButtonProps 
{
  href: string;
  name?: string;
}

export default function LinkButton({ name, href }: LinkButtonProps) 
{
  return (
    <Link
      color="#12a0d3"
      _focus={{ boxShadow: "none" }}
      href={href}
      target="_blank"
    >
      {name !== undefined ? name : href}
    </Link>
  );
}
