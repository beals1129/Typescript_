## Why Typescript

자바스크립트의 유연성

```javascript
[1, 2, 3, 4] + false
'1,2,3,4false'
```

이상적으로는 개발언어가 타입이 다른 두개를 더한다는것을 에러로 알려주지 않고 그대로 실행한다.

### RunTime Error 
런타임에러는 컴퓨터에서 코드가 실행될 때 일어나는 에러이다.

대부분의 언어들은 코드가 실행되기 전에 오류를 표기하고 코드를 실행하지 않는 반면에 
Javascript는 그대로 실행을 하고 코드가 실행될 때 오류가 나는 Run time error 가 발생한다.


## TypeScript 
Typescript 는 위의 Javascript 의 문제점을 보완해줄 수 있다.

- 프로그래밍 언어 (Strongly typed programming Language)
- 컴파일링 코드 -> Javascript 로 컴파일된다. (브라우저는 typeScript 가 아닌 Javascript를 이해하기 때문에)
- Javasvript의 엉뚱함을 보호해주는 역할을 해준다. (코드가 컴파일링 되기 전에 오류를 알려준다.)

>  타입스크립트 코드 테스트 <br> https://www.typescriptlang.org/play

> 타입스크립트 핸드북 <br> https://typescript-kr.github.io/pages/basic-types.html



## TypeSistem of Typescript

데이터와 변수의 타입을 명시적으로 정의할 수 있고,
혹은 Javascript처럼 작성하지 않고 넘어가도 괜찮다 (Typescript 가 추론해준다.)

### Type Checker
```js
let a = "hello"
// 자동적으로 string 인 것을 확인한다.
let b : bollean = false
// 해당 변수의 타입을 정의



//array
let c = [1,2,3]
//number[] 형태가 된다.
c.push("1") //error number형태의 배열에 string을 넣으려고한다면 오류가 난다.


// object
const player = {
   name : heekyung
}
// name : string 으로 정의 
```
