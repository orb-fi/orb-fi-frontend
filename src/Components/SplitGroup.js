import { Avatar } from '@nextui-org/react';
import React from 'react'

const SplitGroup = () => {
    const Users = ["ethereum", "polygon"];
    return (
      <Avatar.Group>
        {Users.map((chain, index) => (
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
}

export default SplitGroup