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
   get(term:string){
     return this.words[term]
   }

    delete(term:string){
        if(this.words[term]){
            delete this.words[term]
        }
    }
    update(word:Word){
        if(this.words[word.term]){
            this.words[word.term] = word.def
        }
    }
    showAll(){
       Object.keys(this.words).map(el => console.log(el))
    }
    
    count(){
        console.log(Object.keys(this.words).length)
    }
}




class Word {
   constructor(
      public term:string,
      public def :string
   ){}
}

const dict = new Dict()

const kimchi = new Word("kimchi", "한국의 음식")
const tteokbokki = new Word("tteokbokki", "한국의 음식2")
const kamjatang = new Word("kamjatang", "한국의 음식3")
dict.add(kimchi)
dict.add(kamjatang)
dict.add(tteokbokki)
dict.get("kimchi")
dict.delete("kamjatang")
const kimchiupdate = new Word("kimchi", "김치 업데이트")
dict.update(kimchiupdate)
dict.showAll()
dict.count()