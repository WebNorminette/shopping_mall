import React, { useLayoutEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer/Footer";

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
      <div style={{ minHeight: `calc(100vh - ${dimensions}px)` }}>{children}</div>
      <Footer ref={targetRef} />
    </div>
  );
}
