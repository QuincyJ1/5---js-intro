console.clear();

class Student {           
    constructor (vardas, gimimoMetai) {
        this.name = vardas;
       this.birthYear = gimimoMetai;
       this.isMarried = false;
       this.marks = [];
    }      
    
    addMark(mark) {                 //metodas itraukiantis nauja pazymi.
        console.log('bandau prideti pazymi', mark);
        this.marks.push(mark)
    }

    marksAverage () {
        if (this.marks.length === 0) {
            return 'neiskaita';
        }
        const correctMarks = this.marks.filter(m => m > 0);

        console.log('>>>', correctMarks);
        return this.marks.reduce((t, m) => t + m, 0) / this.marks.length;
    }
}

export { Student }