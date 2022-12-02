import { Button, Navbar, Text } from "@nextui-org/react";
import React from "react";

const TopBar = () => {
  return (
    <Navbar isBordered variant={"sticky"}>
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          ACME
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Link color="inherit" href="#">
          Login
        </Navbar.Link>
        <Navbar.Item>
          <Button auto flat as={"Link"} href="#">
            Sign Up
          </Button>
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
};

export default TopBar;
