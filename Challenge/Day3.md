## Typescript내에서의 함수

### Call signature
```js
function add = (a:number, b:number) => a+b

//number type 반환
```
add 함수 만의 타입을 넣어주고 싶다면 

```js
type Add = (a:number , b:number ) => number
// call signature

const add:Add = (a,b) => a+b
```
각각의 type을 작성하지 않고 미리  선언해준 뒤 사용


## Overloading 
- 함수가 여러개의 call signature 를 가지고 있는 것 을 뜻한다. (다 다른 call signature)

```js
//in next js router 

Router.push({
   path: "/home",
   state :1 
})


// overloading
type Config = {
   path : string,
   state : object
}
type Push = {
   (path:string):void
   (confing: Config):void
   //return nothing = void
}

const push:Push = (config) => {
   if(typeof config === "string" ) console.log(config)
   else {
      console.log(config.path)
   }
}
```
두가지의 타입을 가지고 있을 수 있으니까 
그것이 무슨 타입인지 확인 후 사용한다.

### 다른 argument 를 가지고 있을 때 

```js
type Add = {
   (a:number, b:number) : number
   (a:number, b:nubmer, c:number):number
}
//다른 call signatures 에
//파라미터의 개수도 다르고

const add:Add = (a,b,c) => {
   return a+b
}
// error! 
// c 파라미터가 같이 없으니까.. 


const add:Add = (a,b,c?:number) => {
   if(c) return a+b+c
   return a+b
}
// c는 옵션이다. 라는 것을 알려줌 
//아마 number 로 사용될 것 이다. 라고 사용

add(1,2) //work
add(1,2,3) // work

```