import { Request, Response } from "express"
import { allowMatch } from "./utils/getStringSimilarity"


export type question = {
        id: string
        question: string
        answer: string
        allowedAnswers: string[]
}

export type form = {
        id: String,
        questions: question[]
}

const form1: form = {
        id: "form1",
        questions: [
                {
                        id: "question1",
                        question: "What is the capital of Sweden?",
                        answer: "Stockholm",
                        allowedAnswers: ["Stockholm"]
                }
        ]

}

const dummyForms = [
        form1
]

export async function getTestAnswer(req: Request, res: Response) {

        const {formId, questionId, answer} = req.query;

        const form = dummyForms.find(({id}) => id === formId);

        if (!form) {
                res.status(404).end("Form not found")
                return 
        }

        const question = form.questions?.find(({id}) => id === questionId)

        if (!question) {
                res.status(404).end("Quesiton not found")
                return 
        }

        const isMatch = allowMatch(answer as string, question.allowedAnswers)

        if (!isMatch) {
                res.status(200).json({match: false})
                return 
        }

        res.status(200).json({match: true, answer: question.answer})
        
}

