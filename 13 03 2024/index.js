class Lecture{
    constructor(Lectur,title,weekday){
        this.Lectur = Lectur,
        this.title = title,
        this.weekday = weekday
    }

    details(){
        console.log(this.Lectur,this.title,this.weekday)
    }
}



const lecture1 =new Lecture("xyz.masaischool.com","express","wednesday")
lecture1.details()