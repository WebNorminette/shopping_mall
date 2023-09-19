import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProductDetailDataApi } from "../utils/shop";
import { useState } from "react";
import AccordionMenu from "../components/accordionMenu/AccordionMenu";

interface UserSeleteData {
  size: string | null;
  color: string | null;
}
export default function ProductDetail() {
  const { productId } = useParams();

  const [userSeleteData, setUserSeleteData] = useState<UserSeleteData>({
    size: null,
    color: null,
  });

  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const { data, status, isLoading, error } = useQuery(
    ["getProductDetailData", productId],
    getProductDetailDataApi
  );

  const keys = ["details", "sizeGuide", "shipping"];

  const convertUnit = (value: string) => {
    const intValue = parseInt(value);
    return intValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100vw",
          justifyContent: "space-between",
          padding: "1rem 2rem",
        }}
      >
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "1.1rem",
            color: "grey",
            fontWeight: 600,
          }}
        >
          back to all
        </p>
        <p
          style={{
            textTransform: "uppercase",
            fontSize: "1.1rem",
            color: "grey",
            fontWeight: 600,
          }}
        >
          next product
        </p>
      </div>
      <div
        style={{
          display: "flex",
          position: "relative",
          justifyContent: "space-between",
          width: "100vw",
          minHeight: "calc(100vh - 50px)",
          gap: "6rem",
          padding: "1rem",
          height: "100vh",
          backgroundColor: "rgba(17,17,17,0.2)",
        }}
      >
        <div style={{ display: "flex", flex: 1.2, flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: data?.currentColor,
              marginBottom: 10,
            }}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              paddingBottom: "100%",
              backgroundColor: "red",
              marginBottom: 10,
            }}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              backgroundColor: "pink",
              paddingBottom: "100%",
              marginBottom: 10,
            }}
          />
          <div
            style={{
              display: "flex",
              flex: 1,
              paddingBottom: "100%",
              backgroundColor: data?.currentColor,
              marginBottom: 10,
            }}
          />
          <div
            style={{ display: "flex", paddingBottom: "100%", flex: 1, backgroundColor: "red" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            position: "sticky",
            top: 0,
            flex: 1,
            flexDirection: "column",
            padding: "0 0 0 6rem",
            boxSizing: "border-box",
            gap: "1rem",
            paddingTop: "7rem",
          }}
        >
          <p style={{ fontWeight: 700, fontSize: "3.5rem", maxWidth: "70%" }}>{data?.title}</p>
          <p style={{ fontSize: "1.1rem" }}>₩{convertUnit(String(data?.price))}</p>
          <div
            style={{ width: "85%", height: "0.8px", backgroundColor: "#ccc", margin: "2rem 0" }}
          />
          <p
            style={{
              color: "#757575",
              fontWeight: 700,
              fontSize: "1.2rem",
              textTransform: "uppercase",
            }}
          >
            {userSeleteData?.color || data?.currentColor}
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(8, 1fr)",
              width: "70%",
              rowGap: "1rem",
              columnGap: "1rem",
              flexWrap: "wrap",
            }}
          >
            {data?.colors?.map((color) => (
              <div
                onMouseOver={() => setUserSeleteData({ ...userSeleteData, color: color })}
                onClick={() => setUserSeleteData({ ...userSeleteData, color: color })}
                style={{
                  backgroundColor: color,
                  flex: 1,
                  paddingBottom: "100%",
                  cursor: "pointer",
                  border: data?.currentColor === color ? "0.8px solid lightGrey" : "",
                }}
              />
            ))}
          </div>
          <div
            style={{ width: "85%", height: "0.8px", backgroundColor: "#ccc", margin: "1rem 0" }}
          />

          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            {data?.sizes?.map(({ content, isSelectable }) => (
              <div
                onClick={() => setUserSeleteData({ ...userSeleteData, size: content })}
                style={{
                  color: isSelectable ? "black" : "grey",
                  fontWeight: userSeleteData.size == content ? 700 : 600,
                  fontSize: "1.2rem",
                  cursor: "pointer",
                  textDecorationLine: userSeleteData.size == content ? "underline" : "blink",
                }}
              >
                {content}
              </div>
            ))}
          </div>
          <div
            style={{ width: "85%", height: "0.8px", backgroundColor: "#ccc", margin: "1rem 0" }}
          />

          <p>{data?.conditions}</p>
          <div
            style={{ width: "85%", height: "0.8px", backgroundColor: "#ccc", margin: "1rem 0" }}
          />
          <div>
            {keys?.map((key) => (
              <>
                <p
                  onClick={() => setOpenMenu(key)}
                  style={{
                    textTransform: "uppercase",
                    fontWeight: key === openMenu ? 700 : 600,
                    fontSize: "1.1rem",
                  }}
                >
                  {key}
                </p>
                {openMenu === key && (
                  <>
                    <p>{data && (key === "details" || key === "shipping") && data[key]}</p>
                    <p>{data && key === "sizeGuide" && data[key].size.join("")}</p>
                  </>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
