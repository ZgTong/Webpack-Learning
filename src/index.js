let a = require('./a') //CommenJS
import './css/index.css'
import './less/index.less'
import './scss/index.scss'
import 'bootstrap/dist/css/bootstrap.css'
console.log(a)
console.log('配置')
console.log('测试')
console.log('heihei!!!!')

setTimeout(function(){
  console.log('Es5函数')
},2000)

setTimeout(()=>{
  console.log('箭头函数')
},2000)

class Person {
  constructor(name){
    this.name = name
  }
}

let p = new Person('小红')
console.log(p)


class Dog {
  // 高版本语法
  name = '大黄'
  static color = "yellow"
}

let d = new Dog()

console.dir(d)
console.dir(Dog)

function *fn() {
  yield 1
  yield 2
  return 3
}

let newFn = fn()
console.log(newFn.next())
console.log(newFn.next())
console.log(newFn.next())
console.log(newFn.next())

import '@babel/polyfill'
let str= '123'
console.log(str.includes('2'))
