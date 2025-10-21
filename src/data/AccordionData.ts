
interface DataType {
  id: string;
  question: string;
  question_2: string;
  answer: string;
}[]

const accordion_data:DataType[] = [
  {
    id: "One",
    question: 'What is business consulting?',
    question_2: 'How much do consulting services cost?',
    answer: "Business consulting is a service provided by professionals who offer expert advice and guidance to organizations seeking to improve their business processes, strategies, and operations",
  },
  {
    id: "Two",
    question: 'What types of businesses typically use consulting services?',
    question_2: 'What types of businesses typically use consulting services?',
    answer: "Business consulting is a service provided by professionals who offer expert advice and guidance to organizations seeking to improve their business processes, strategies, and operations",
  },
  {
    id: "Three",
    question: 'What are the benefits of using a business consulting service?',
    question_2: 'What are the benefits of using a business consulting service?',
    answer: "Business consulting is a service provided by professionals who offer expert advice and guidance to organizations seeking to improve their business processes, strategies, and operations",
  },
  {
    id: "Four",
    question: 'How much do consulting services cost?',
    question_2: 'How much do consulting services cost?',
    answer: "Business consulting is a service provided by professionals who offer expert advice and guidance to organizations seeking to improve their business processes, strategies, and operations",
  }
]
export default accordion_data