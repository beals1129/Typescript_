### public 상태에서 readonly 사용하기

- `public` 일지라도 내용을 수정할 수 없도록 만든다. 
- `private` 대신 사용하기 좋다. 
- 자바스크립트에서는 보이지 않는 타입스크립트 기능이다.

```js
type Nickname = string
type Player = {
   nickname : Nickname,
   healthBar : number
}

const heekyung : Player = {
   nickname : "ryu",
   healthBar : 10
}
```

## 타입을 지정된 옵션으로 제한하기 

```js
type Team = "red" | "blue" | "yellow"
// 지정된 것 만 사용할 수 있도록 하는 것


type Player = {
   nickname : string,
  team: Team
}

const heekyung : Player = {
   nickname: "ryu",
   team: "red" //work
}
```

## 인터페이스
오브젝트의 모양을 타입스크립트에게 전달하는 방법
- `type` 은 다양한 방법으로 정의가 가능하다.
- `interface` 는 오브젝트에서만 사용된다. 
- 타입을 정의하는 같은 역할임. 

```js
type Team = "red" | "blue" | "yellow"

interface Plyer {
   nickname : string,
   team: Team
}
// react 에서 많이 사용됨
```

#### interface 로 상속
```js
interface User {
   name : string
}

interface Player extends User {
}

const heekyung : Plyaer = {
   name : "hk"
}
```
조금 더 class 와 비슷하게 사용할 수 있다. 
<br>
<br>
위 코드를 type 로 작성하면

```js
type User = {
   name : string
}
type Player = User & {
}

const heekyung : Player = {
   name : "hk"
}
```

둘 다 사용해도 됨.<br>
문법적 차이가 있을 뿐임

#### interface 의 이름이 같으면 한번에 합쳐줌

```js
interface User {
   health : number
}

interface User {
   firstname : string
}

interface User {
   lastname : string
}

const heekyung : User = {
   firstname : "ryu",
   lastname : "hk",
   health : 100
}
```

### 추상클래스에서 interface 사용

- 추상 클래스를 type 으로 했을 때와 interface로 했을 때 다르게 작성함
- interface는  private를 사용할 수 없다. protected 또한. > public 사용
- type 를 사용할 때 보다 컴파일 된 js 파일의 길이, 크기를 줄일 수 있다.
- 여러개의 interface를 상속할 수 있다. `inplements`를 사용! 
```js
interface User {
   firstName : string,
   lastName : string,
   sayHi(name:string) : string
   fullName():string
}
// 추가적인 interface 상속
interface Human{
   health : number
}
// 쉼표로 추가
class Player implements User, Human {
   constructor(
      public firstName : string,
      public lastName : string,
      public health : number
   ){}
   fullName(){
      return ``
   }
   sayHi(name:string){
      return ``
   }

}
```

인터페이스를 return 한다면 new User() 로 사용하지 않고 컨텐츠를 넣어주는 방향으로 진행한다.