import React from "react";
import styled from "@emotion/styled";
import Button from "../components/Button";

const Red = styled.div({ color: "red" });

const Index: React.FC<void> = () => (
  <Button>
    <Red>Hello World</Red>
  </Button>
);

export default Index;
