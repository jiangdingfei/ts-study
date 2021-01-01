// import { name } from './b'
// import * as info from './b'
// import {name as nameProps } from './b'
// import './a';  // 有副作用的导入
// import * as AData from './a'
// import name from './c'
// import name = require('./c')
// import * as moment from "moment";
// import moment = require('moment')
// import moment from 'moment';
// console.log(moment)

// 命名空间
// 用namespace代替module

/// <reference path="./letter-validation.ts" />
/// <reference path="./number-validation.ts" />
let isLetter = Validation.checkLetter('abc')
let isNumber = Validation.checkNumber('abc')
console.log(isLetter, isNumber)

namespace Shapes {
    export namespace Polygons {
        export class Triangle {}
        export class Squire {}
    }
}
import polygons = Shapes.Polygons
let triangle = new polygons.Triangle()

// 相对导入