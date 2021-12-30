import { questions } from "./data/questions.js";
import { Quiz } from "./models/Quiz.js";
import { UI } from "./models/ui.js";

const main=()=>{
    const quiz =new Quiz (questions)
    const ui = new UI()
    ui.showQuestion(quiz.getQuestionIndex().text)
    
}
main()
