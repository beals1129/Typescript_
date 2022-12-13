## Typescript 의 optional  type


object 의 타입을 정의하는 것 

```js
const player = {
   name : 'heekyung'
}
// 만약 player 중 몇몇은 age 를 가지고 있고 어떤 것은 없다면 이것을 어떻게 Typescript로 소통을 할까?


const player : {
   name : string,
   age? : number
} = {
   name : 'heekyung',
}

```

> `?` 는 해당 객체가 undefined 일 수 있다고 정의 해주는 것 

```js
age? : number | undefined;
```

`plyer.age` 를 이후에 사용하기 위해서는 `undefined`일 수 있기 때문에 
```js
if(plyer.age && player.age < 30) {

}
```

player.age 가 존재하는지 확인 후 사용할 수 있도록 `typescript`가 확인한다.


### 반복된 객체의 타입을 정의하는 법 

#### Type Alias (별칭)

```js 
type Age = number;
type Player = {
   name : string,
   age? : Age
}

const PlayerH : Player = {
   name:"heekyung"
}
const playerK : Player = {
   name : "Ryu",
   age : 26
}
```

## 함수의 return type 지정

```js
type Player = {
   name : string,
   age? : Age
}
function playerMaker(name:string) : Player {
   return {
      name
   }
}
const ryu = playerMarker('heekyung')

ryu.age = 26
// age 객체를 추가할 때 age 객체의 type 이 정의되지 않았을 때 오류가 발생한다. (이를 Alieas 로 해결)
```

### 화살표함수

```js
const playerMarker = (name : string) : Player => ({name})
```

## Readonly 속성을 타입에 추가하기
#### 속성값을 바꾸지 못하도록 하는 것

```js
type Player = {
   readonly name : Name,
   age? : Age
}
const playerMarker = (name : string) : Player => ({name})
const ryu = playerMarker('heekyung')
ryu.name = "kyunghee" // error!
```

#### array
```js
const numbers : readonly number[] = [1,3,4]

numbers.puhs(1)

//map 이나 filter 는 사용이 가능하다.(원 배열을 바꾸는 것이 아니기 때문)
```
> immutable 한 배열을 표현 가능하다. 


## Tuple

#### 항상 정해진 갯수의 Array
특정 위치에 특정 타입이 존재해야한다.

```js
const player : [string, number, boolean] = ["heekyung", 11, true]
//3개의 type 을 지정해둔 만큼 3개의 내용을 가진 array 를 제작해야한다.

player[0] = 1 //error!
// string 이 아니기 때문

// readonly 사용이 가능
const player : readonly[boolean] = [true]
```

## Athoer Types
### undefined, null
```js
let a : undefined = undefined
let b : null = null
```

### any
- typescript에서 벗어나기위한 장치
- 모든 타입을 허용한다.
- 사용하게되면 자바스크립트와 같아진다.

```js
const a : any[] = [1,2,3,4]
const b : any = true

a+b //Not Error
```

### unknown
- 어떤 타입인지 모르는 변수를 사용하는 상황에 사용
- 작업을 하기위해 이 변수의 타입을 먼저 확인해야한다.
```js
let a : unknow;

if(typeof a === 'number'){
   let b = a + 1
}
if(typeof a === 'string'){
   let b = a.toUpperCase()
}
```

### void
- 아무것도 return 하지 않는 함수에 사용
```js
function hello(){
   console.log('x')
}
// void 함수 
// 자동으로 추측해서 정의됨
```

### never
- 함수가 절대 return 되지 않을 때 사용
```js
function hello(name : string|number) : never {
   if(typeof name === "string"){
      name 
   } else if( typeof name === "number"){
      name 
   }else {
      name 
      //never가 된다. 
      //절대로 실행되지 않기 때문에. 
   }
}
```