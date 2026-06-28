export interface Question {
  id: number
  category: 'HTML基础' | 'CSS与Flex' | 'TypeScript' | 'Vue3'
  stem: string
  options: [string, string, string, string]
  correctIndex: 0 | 1 | 2 | 3
  explanation: string
}

export interface UserAnswer {
  questionId: number
  selectedIndex: number | null
}
