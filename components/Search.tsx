import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";

import React, { ReactElement, useState } from "react";

interface Props {
 value:string;
 onChange:(value:string) => void
 onSubmit:() => void
}

export default function Search({value, onChange, onSubmit}: Props): ReactElement {
  return (
    <InputGroup size="lg">
      <Input
        pr="4.5rem"
        type="text"
        placeholder="Search.."
        onChange={(e) => onChange(e.currentTarget.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
           onSubmit()
          }
        }}
        value={value}
      />
      <InputRightElement width="5.5rem">
        <Button
          h="2rem"
          size="lg"
          onClick={() => {
           onSubmit()
          }}
          colorScheme="purple"
        >
          Go
        </Button>
      </InputRightElement>
    </InputGroup>
  );
}
