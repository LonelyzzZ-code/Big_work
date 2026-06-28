import type { UserAnswer } from '@/types'

/** 共享模块：QuizView 写入，ResultView 读取，绕过 router state 类型限制 */
export const submittedAnswers: { value: UserAnswer[] } = { value: [] }
