### interface 와 제네틱 합쳐보기
```js
interface SSrorage <T> {
   [key : string] : T
}

class LocalStorage<T> {
   private storage : SStorage<T> = {}
   //method set
   set(key:string, value:T){
      this.storage[key] = value;
   }
   remove(key:string){
      delete this.storage[key]
   }
   get(key:string):T{
      return this.storage[key]
   }
   clear(){
      this.storage = {}
      //stoage 를 비움
   }
}
//storage 에 key 와 value 를 저장해주려함
// 제네릭을 class > interface 로 보내서 사용
const stringStorage = new LocalStorage<string>()

stringsStorage.get("key")
stringsStorage.set("hello", "string")
// LocalStorage를 <string> 으로 만들었기 때문에 2번째인자에 T(제네릭)이 string으로 된다.

const booleansStorage = new LocalStorage<boolean>()

booleansStorage.get("xxx")
booleansStorage.set("hello", true)
// booleansStorage <boolean> 으로 만들었기 때문에 2번째인자에 T(제네릭)이 boolean이 된다.

```