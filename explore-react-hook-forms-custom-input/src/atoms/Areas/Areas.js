import { Areas as allList } from "./ListAreas";

export default function Areas(stateWatch) {
  let selectOptions = [];
  let v = allList;

  if (stateWatch) {
    for (let i = 0; i < v.length; i++) {
      if (allList[i].state === stateWatch) {
        selectOptions.push(v[i]);
      }
    }
  } else {
    selectOptions = [];
  }

  return selectOptions;
}
