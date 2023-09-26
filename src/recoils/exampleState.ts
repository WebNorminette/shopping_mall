import { atom, selector } from "recoil";

export const exampleState = atom<number[]>({
  key: "example",
  default: [1, 2, 3],
});

// 사용
// const exampleCnt = useRecoilValue(exampleState);
// const [value, setValue] = useRecoilState(exampleState)
// const  setValue = useSetRecoilState(exampleState)
// console.log(exampleCnt);
// setValue([...])

export const exampleSelector = selector({
  key: "exampleSelector",
  get: ({ get }) => {
    const jobList = get(exampleState);
    const cnt = jobList.length;
    return cnt;
  },
});

// 사용
// const exampleCnt = useRecoilValue(exampleSelector);
// console.log(exampleCnt);
