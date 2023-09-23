import { atom } from "recoil";

interface SelectProductType {
  size: string;
  color: string;
}
export const selectProductState = atom<SelectProductType>({
  key: "selectProduct",
  default: {
    size: "",
    color: "",
  },
});
