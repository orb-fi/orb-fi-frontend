import { Avatar, Grid } from "@nextui-org/react";
import React from "react";

const NetworkGroup = () => {
  const pictureUsers = ["ethereum", "polygon"];
  return (
    <Avatar.Group>
      {pictureUsers.map((chain, index) => (
        <Avatar
          key={index}
          size="lg"
          pointer
          src={`/chain/${chain}.png`}
          bordered
          color="gradient"
          stacked
        />
      ))}
    </Avatar.Group>
  );
};

export default NetworkGroup;
