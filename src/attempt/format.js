const data =  [
  10000,
  11000,
  15000,
  19000,
  20000,
  23000,
  35000,
  60000,
  62000,
  63000,
  130000,
  131000,
  132000,
  155000,
  159000,
  161000
]

const formatArray = data => {
  if (data.length < 3) {
    return data;
  }
  const res = []
  let mark = -1;
  let temporary = {
    value: '',
    children: [],
  };
  data.forEach((val, idx) => {
    const firstCol = val.toString().slice(0, -4);
    const secondCol = val.toString().slice(-4);
    if(idx === 0) {
      // 第一项
      temporary.value = firstCol;
      temporary.children = [{value: secondCol}];
    } else if (idx === data.length-1) {
      // 最后一项
      if(temporary.value === firstCol) {
        temporary.children.push({value: secondCol})
      }  else {
        res.push({...temporary})
        temporary = {}
        temporary.value = firstCol;
        temporary.children = [{value: secondCol}]
      }
      res.push({...temporary});
    } else if (temporary.value === firstCol) {
      temporary.children.push({value: secondCol})
    } else {
      res.push({...temporary});
      temporary = {};
      temporary.value = firstCol;
      temporary.children = [{value: secondCol}]
    }
  })
  return res;
}
// console.log(formatArray(data), 'data111')