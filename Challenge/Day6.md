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

둘 다 사용해도 됨.
문법적 차이가 있을 뿐임