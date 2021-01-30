function copy(target) {
  function clone(data) {
    if (Array.isArray(data)) {
      return data.map(item => clone(item))
    } else if (Object.prototype.toString.call(data) === '[object Object]') {
      let result = {};
      Object.entries(data).forEach(([key, val]) => {
        result[key] = clone(val)
      })
      return result;
    } else {
      return data
    }
  }

  return clone(target);
}

const data = [
  {a: 1},
  {
    b: [3, {m: {h: 9}}]
  },
  {
    c: 45,
    d: [4, 6],
    e: null,
    f: undefined,
    g: '1'
  },
  'h',
  'i',
  [5, 6],
  [
    {j: '6', k: '6'}
  ]
]
const _data = copy(data)
data[2].d[0] = 10
data[1].b[1].m.h = 20;
console.log(_data, 'data')
console.log(data)

function merge(target, data) {
  if(Array.isArray(target) && Array.isArray(data)) {
    return target.map((item, idx) => {
      if(data[idx]) {
        return merge(item, data[idx])
      } else {
        return item
      }
    }).concat(data.slice(target.length, data.length))
  } else if (Object.prototype.toString.call(target) === '[object Object]' && Object.prototype.toString.call(data) === '[object Object]') {
    const result = {...target}
    Object.entries(data).forEach(([key, val]) => {
      if (target.hasOwnProperty(key)) {
        result[key] = merge(target[key], val)
      } else {
        result[key] = val;
      }
    })
    return result
  } else if (typeof target === typeof data) {
    return  data
  } else if ([undefined, null].includes(target) || [undefined, null].includes((data))) {
    return data
  } else {
    throw new Error('入参错误');
  }
}

const data1 = {
  insured: [
    {
      birth: '1980-10-10',
      sex: 'F',
      name: 'zs'
    },
    {
      birth: '1999-10-16',
      sex: 'F',
      name: 'gy',
    }
  ],
  insurer: {
    // birth: '1995-06-03',
    // sex: 'M',
    name: 'ls',
    birth: null,
    conAddress: {
      address: [11,43,55],
      detailAddress: '水晶路'
    }
  }
}
const data2 = {
  insured: [
    {
      // birth: '1980-10-10',
      sex: 'M',
      // name: 'zs',
      idNo: '3206831998010105513',
      conAddress: {
        address: [11,33,55],
        detailAddress: '水晶路'
      }
    },
  ],
  insurer: {
    birth: '1980-01-05',
    sex: 'M',
    name: 'ls'
  },
  appPlanInfo: {
    3120: { planCode: '3120', sumIns: '10W'}
  }
}
console.log(merge(data1,data2), 'merge')

console.log(data1)