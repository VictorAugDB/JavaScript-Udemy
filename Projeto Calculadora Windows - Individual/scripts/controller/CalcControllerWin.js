class CalcControllerWin{

    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        this._operation = [];

        this.initialize();
        this.initButtonEvents();
    }
    initialize(){

    }

    get displayCalc(){

        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(value){
     
        if(value.toString().length > 10){
            this.setError();
            return false;
        }

        this._displayCalcEl.innerHTML = value;
    }
}