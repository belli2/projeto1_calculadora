// Criando a classe da calculadora
class Calculator{
    constructor(){
        //Propriedade que receberá os valores digitados
        this.displayValue=" ";
    }
    //Método que adiciona os valores à propriedade displayValue permitindo que o usuário veja os caracteres/valores na tela
    appendToDisplay(value){
        this.displayValue+=value;
        //Chamando o método updateDisplaydentro dentro do método appendToDisplay, para que quando o usúario digitar alguma tecla da calculadora, o valor armazenado na propriedade displayValue seja exibido na tela
        this.updateDisplay();
    }
    //Método que atualizao elemento input no HTML com o valor atual que está armazenado em diaplayValue
    updateDisplay(){
        document.getElementById("displayContent").value=this.displayValue;
    }
    //Método que limpa o valor que está armazenado em displayValue e que cham a função updateDisplay para atualizar a tela com um valor vazio
    clearDisplay(){
        this.displayValue=" ";
        this.updateDisplay();
    }
    //O método try catch executa o cálculo da expressão matemática contida em displayValue. Esse método utiliza a função eval() para avaliar a expressão e, se for bem sucedida, atualiza o displayValue com o resultado e chama a função updateDisplay(). Se ocorrer um erro durante a avaliação, ele atualiza o displayValue com amensagem "Erro" e chama a função updateDisplay().
    calculate(){
        try{
            //const result=eval(this.displayValue);
            const result=math.evaluate(this.displayValue);
            this.displayValue=result.toString();
            this.updateDisplay();
        }catch(error){
            this.displayValue="Erro";
            this.updateDisplay();
        }
    }
}
//Criando o objeto ou instanciando a classe
//Objeto chamado calc
const calc=new Calculator();