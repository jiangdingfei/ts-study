const CHART_MAP = {
    name: 'label',
    code: 'value'
}
const DATA = [
    {
        name: '阑殿',
        code: '01',
        children: [
            {
                name: '幻堂',
                code: '0101',
                children: [
                    {
                        name: '尹洁',
                        code: '010101',
                        age: 20
                    },
                    {
                        name: '姚淑湘',
                        code: '010102',
                        age: 21
                    },
                    {
                        name: '葛灿灿',
                        code: '010103',
                        age: 24
                    },
                ]
            }
        ]
    },
    {
        name: '极乐宫',
        code: '02',
        children: [
            {
                name: '七彩殿',
                code: '0201',
                children: [
                    {
                        name: '贺雪英',
                        code: '020101',
                        age: 29
                    },
                    {
                        name: '陈莹',
                        code: '020102',
                        age: 21
                    },
                    {
                        name: '苌雪英',
                        code: '020103',
                        age: 24
                    },
                ]
            },
            {
                name: '幽殿',
                code: '0202',
                children: [
                    {
                        name: '刘亦菲',
                        code: '020201',
                        age: 29
                    },
                    {
                        name: '杨紫',
                        code: '020202',
                        age: 26
                    },
                    {
                        name: '鞠婧祎',
                        code: '020203',
                        age: 25
                    },
                ]
            },
            {
                name: '雪殿',
                code: '0203'
            }
        ]
    },
    {
        name: '宏殿',
        code: '03',
    }
]
export const switchKeys = (options, data) => {
    const keys = Object.keys(options);
    const switchToKey = (data) => {
      return data.map(ele => {
          const res = {};
          Object.entries(ele).forEach(([key, val]) => {
              if(keys.includes((key))) {
                  res[options[key]] = val;
              }else if (key === 'children' && Object.prototype.toString.call(val) === '[object Array]') {
                  res[key] = switchToKey(val)
              }
          })
          return res;
      })
    }
    return switchToKey(data)
}
console.log(switchKeys(CHART_MAP, DATA))