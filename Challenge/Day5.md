## 객체지향 프로그래밍으로 사용하기

TS 표기법으로 작성한 뒤 js로 어떻게 컴파일 되는 지 확인하면서 작성해보면 이해가 쉽다. 

```js
class Player {
   constructor(
      private firstName : string,
      private lastName : string
      public nickname : string
   )
}

const heekyung = new Player("Ryu" ,"heekyung", "히경");

= js 변환 =

class player {
   construtor(
      this.firstName  = firstName ; 
      this.lastName = lastName ;
      this.nickname = nickname ;
   )
}

```


### 추상클래스 
다른 클래스가 상속받을 수 있는 클래스</br>
추상클래스는 직접 새로운 인스턴스를 만들 수 없다.

```js
abstract class User {
   constructor(
      private firstName : string,
      private lastName : string
      public nickname : string
   ) {}

   // 메소드 getFullName
   private getFullName(){
      return `${this.fisrtName} ${this.lastName}`
   }
   // 만약 private 로 되어있다면 아래에 heekyung.getFullName() 은 에러가 난다
   getFullName(){
      return `${this.fisrtName} ${this.lastName}`
   }
}

class Player extends User{
   //Player 에서 상속받음

}
const hee = new User 
// error! 추상클래스는 새로운 인스턴스를 만들 수 없다. 

const heekyung = new Player("Ryu" ,"heekyung", "히경");

heekyung.getFullName() 
```


## 추상 메소드

구현이 되어있지않는 (코드가 없는) 메소드
- 추상 메소드가 있는 경우 추상 클래스를 상속받는 클래스에 추상메소드를 꼭 구현해주어야 한다.
```js

abstract class User {
   constructor(
      private firstName : string,
      private lastName : string
      public nickname : string
   ) {}


//추상 메소드
   abstract getNickName() : void

}

class Player extends User{
   //Player 에서 상속받음

   getNickName(){
      console.log(this.nickname) 
      // 추상 메소드가 있는 경우 추상 클래스를 상속받는 클래스에 추상메소드를 꼭 구현해주어야 한다.
   }

}

const heekyung = new Player("Ryu" ,"heekyung", "히경");
```


#### public
전역에서 사용할 수 있도록 함


#### Private
필드가 외부로부터 보호되면서 다른 자식 클래스에서 사용할 수 없다.

다른 자식 클래스에서 사용할 수 있도록 하기 위해서는 

### protected 
를 사용한다.

```js


abstract class User {
   constructor(
      protected firstName : string,
      private lastName : string
      public nickname : string
   ) {}

   abstract getNickName() : void
}

class Player extends User {
   getNickName(){
      console.log(this.fisrtName)
      //protected 이기 때문에 접근 가능
   }
}

const heekyung = new Player("Ryu", "heekyung", "히경");

heekyung.fisrtName // not Work 
// protected 이기 때문에 전역에서 호출 불가능

heekyung.getNicName()
```


> public, private, protected 는 javascript로 변환되면 보이지 않는다. 

> 또한 함수도 private 등의 설정을 해줄 수 있다. 

> 가본은 public

## 해시맵
단어사전 과 같은 것

```js
type Words = {
   [key:string] : string
}
class Dict {
   private words: Words
   // constructor 에 포함하지 않고 바로 작성함
   constructor(){
      this.words = {}
   }
   // 여기에서 초기화 시켜주면 에러가 나지않음.

   add(word:Word){
      if(this.words[word.term]=== undefined ){
      this.words[word.term] = word.def;
      }
   }
   //definetions
    def(term:string){
        return this.words[term]
    }
}




class Word {
   constructor(
      public term:string,
      public def :string
   ){}
}

const kimchi = new Word("kimchi", "한국의 음식")

const dict = new Dict()

dict.add(kimchi)
dict.def("kimchi")
```

### [key:string]
Words 타입이 string 만을 property로 가지는 오브젝트 이다.
</br>
라고 선언을 해주는 문법
(양 쪽이 string 인것을 알려줌)
> key 대신 다르 변수명을 사용해도 되지만 대부분 key라고 작성

숫자로 하고싶다면
[key:number] : string
으로 할 수 있다.