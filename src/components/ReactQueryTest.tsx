import { useMemo, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";
import ProductItem from "./productList/ProductItem";
import { getProductListApi } from "../utils/shop";

interface Product {
  id: number;
  name: string;
  price: string;
}

export default function ReactQueryTest() {
  const [checked, setChecked] = useState<boolean>(false);

  const { isLoading, error, data, fetchNextPage, hasNextPage, remove, refetch } = useInfiniteQuery(
    ["getProducList", checked],
    ({ pageParam = 0 }) => getProductListApi(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const { isLast } = lastPage;
        if (!isLast) return undefined;

        return lastPage.nextPage;
      },
    }
  );

  const products = useMemo(() => data?.pages.map((page) => page.result).flat(), [data]);

  const getMoreProducts = () => {
    if (hasNextPage) fetchNextPage();
  };

  const handleChange = () => setChecked((prev) => !prev);

  if (isLoading) return <p>Loading...</p>;

  if (error instanceof Error) return <p>{error.message}</p>;

  return (
    <>
      <input id="checkbox" type="checkbox" checked={checked} onChange={handleChange} />
      <label htmlFor="checkbox">Show Only Sale</label>
      <button onClick={getMoreProducts}>Get more...</button>
      <ul
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          width: "100%",
          rowGap: "1rem",
          columnGap: "1rem",
          flexWrap: "wrap",
          padding: "0 4rem",
        }}
      >
        {!!products && products?.length > 0 ? (
          products.map((product: Product) => <ProductItem key={product.id} product={product} />)
        ) : (
          <p>No products </p>
        )}
      </ul>
    </>
  );
}
