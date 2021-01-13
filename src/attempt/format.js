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
  160000
]

const formatArray = list => {
  const _list = [];
  const first = list[0].toString();
  let temporary = {
    value: first.slice(0, -4),
    label: first.slice(0, -4),
    children: [
      {
        value: first.slice(-4),
        label: first.slice(-4)
      }
    ]
  }
  list.slice(1).forEach((val, idx) => {
    const firstCol = val.toString().slice(0, -4);
    const secondCol = val.toString().slice(-4);
    if (list.length === idx + 2) {
      // youwenti
      temporary.children.push({value: secondCol, label: secondCol})
      _list.push({...temporary});
    } else if (temporary.value === firstCol) {
      temporary.children.push({value: secondCol, label: secondCol})
    } else {
      _list.push({...temporary})
      temporary.value = firstCol;
      temporary.label = firstCol;
      temporary.children = [{value: secondCol, label: secondCol}]
    }
  })
  return _list
}
console.log(formatArray(data), 'data')