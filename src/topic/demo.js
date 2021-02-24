// var lengthOfLongestSubstring = function(s) {
//     if (s.length < 2) return s.length;
//     let length = 1;
//     var findStr = (start, end) => {
//         for (let i = start + 1; i < s.length; i++) {
//             var sign = s.substr(i, 1);
//             var sel = s.slice(start, i);
//             var idx = sel.indexOf(sign);
//             var trueIdx = idx + start;
//             if (idx < 0) {
//                 // 满足,更新length长度
//                 var diff = i - start + 1;
//                 console.log(sel, 'sle', sign, 'DIFF', diff)
//                 if(diff-length > 0) {
//                     length = diff
//                 }
//                 if (trueIdx === s.length -1) {
//                     break;
//                 }
//             } else if (length > s.length - trueIdx -1) {
//                 break;
//             } else {
//                 findStr(trueIdx+1)
//                 break;
//             }
//         }
//     }
//     findStr(0);
//     return length;
// };
//
// var lengthOfLongestSubstring = function (s) {
//     const length = s.length;
//     if (length < 2) return length;
//     // 字符串长度大于/等于2
//     let start = 0;
//     let end = 1;
//     let ans = 1;
//     while (end < length) {
//         let code = s.charAt(end);
//         let str = s.slice(start, end)
//         let idx = str.indexOf(code);
//         if (idx < 0) {
//             // 无相同
//             ans = Math.max(ans, end - start + 1)
//         } else {
//             start = start + idx + 1;
//         }
//         end++;
//     }
//     return ans;
// }


var lengthOfLongestSubstring = function (s) {
    const length = s.length;
    if (length < 2) return length;
    // 字符串长度大于/等于2
    let start = 0;
    let end = 1;
    let ans = 1;
    while (end < length) {
        let code = s.charAt(end);
        let str = s.slice(start, end)
        let idx = str.indexOf(code);
        if (idx < 0) {
            // 无相同
            ans = Math.max(ans, end - start + 1)
        } else {
            start = start + idx + 1;
        }
        if (ans >= length - start) {
            break;
        }
        end++;
    }
    return ans;
}
console.log(lengthOfLongestSubstring('abghcdedbf'))