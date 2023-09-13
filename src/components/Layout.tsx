import React, { useLayoutEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { styled } from "styled-components";

export default function Layout({ children }: any) {
  const targetRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState<number>(0);

  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions(targetRef.current.offsetHeight);
    }
  }, []);

  return (
    <div>
      <Navbar />
      <StChildrenWrapper dimensions={dimensions}>{children}</StChildrenWrapper>
      <Footer ref={targetRef} />
    </div>
  );
}

const StChildrenWrapper = styled.div<{ dimensions: number }>`
  min-height: calc(100vh - ${(props) => props.dimensions}px);
`;
