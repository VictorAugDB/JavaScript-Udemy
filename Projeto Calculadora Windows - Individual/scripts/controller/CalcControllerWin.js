class CalcControllerWin{

    constructor(){

        this._displayCalcEl = document.querySelector("#display");
        this._operation = [];
        this._lastNumber = '';
        this._lastOperator = '';

        this.initialize();
        this.initButtonEvents();
    }
    initialize(){

    }

    setLasNumberToDisplay(){
        

    }

    addOperation(value){

        if(isNaN(this.getLastOperation())){

            if(isOperator){
                this.setLastOperation(value);
            }else{

                this.pushOperation(value);
                this.setLasNumberToDisplay();
            }
        }
    } 

    pushOperation(value){

        this._operation.push(value);

        if(this._operation.length > 3){

            this.calc();
        }
    }

    isOperator(){

        return ['+', '-', '*', '%', '/', '√', '¹/x', 'x²', 'X'].indexOf(value) > -1;
    }

    setLastOperation(value){

        this._operation[this._operation.length-1] = value;
    }

    getLastOperation(){

        return this._operation[this._operation.length-1];
    }

    addDot(){

    }

    calc(){


    }

    setError(){
        this.displayCalc = "ERROR";
    }

    pressBackspace(){


    }

    execBtn(value){

        switch(value){
            
            case 'C':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case '+':
                this.addOperation('+');
                break;
            case '-':
                this.addOperation('-')
                break;
            case '*':
                this.addOperation('*');
                break;
            case '%':
                this.addOperation('%');
                break;
            case '=':
                this.calc();
                break;
            case ',':
                this.addDot('.');
                break;
            case '√':
                this.addOperation('√');
                break;
            case '¹/x':
                this.addOperation('¹/x');
                break;
            case 'x²':
                this.addOperation('x²');
                break;   
            case '←':
                this.pressBackspace('←');
                break; 
            case '÷':
                this.addOperation('/');
                break; 
            case 'X':
                this.addOperation('X');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                    this.addOperation(parseInt(value));
                    break;
                default:
                    this.setError();
                    break;
        };
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event =>{
            element.addEventListener(event, fn, false);
        });
    }

    initButtonEvents(){

        let buttons = document.querySelectorAll(".row > button");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, 'click drag', e=>{
                
                let btnText = (btn.innerText);

                this.execBtn(btnText);
            });

            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e=>{

                btn.style.cursor = "pointer";
            });
        });
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