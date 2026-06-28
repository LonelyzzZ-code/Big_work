<script setup lang="ts">
import { questions } from '@/data/questions'
import QuizProgress from '@/components/QuizProgress.vue'
import QuestionCard from '@/components/QuestionCard.vue'
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import type { UserAnswer } from '@/types'
import { submittedAnswers } from '@/data/answers'

const router = useRouter()

const categories = ['全部', 'HTML基础', 'CSS与Flex', 'TypeScript', 'Vue3']
const currentCategory = ref('全部')
const searchKeyword = ref('')

const userAnswers = ref<UserAnswer[]>(
  questions.map((q) => ({
    questionId: q.id,
    selectedIndex: null,
  })),
)

const filteredQuestions = computed(() => {
  let list = questions
  if (currentCategory.value !== '全部') {
    list = list.filter((q) => q.category === currentCategory.value)
  }
  if (searchKeyword.value.trim()) {
    const kw = searchKeyword.value.trim().toLowerCase()
    list = list.filter((q) => q.stem.toLowerCase().includes(kw))
  }
  return list
})

const answeredCount = computed(() => {
  return userAnswers.value.filter((a) => a.selectedIndex !== null).length
})

const allAnswered = computed(() => {
  return userAnswers.value.every((a) => a.selectedIndex !== null)
})

const getUserAnswer = (qId: number): UserAnswer => {
  return userAnswers.value.find(a => a.questionId === qId)!
}

const setAnswer = (qId: number, idx: number): void => {
  const answer = userAnswers.value.find(a => a.questionId === qId)
  if (answer) {
    answer.selectedIndex = idx
  }
}

const switchCategory = (cat: string): void => {
  currentCategory.value = cat
}

const handleSubmit = (): void => {
  if (!allAnswered.value) {
    alert('请先完成所有题目再提交')
    return
  }
  if (!confirm('确认提交？提交后不可修改。')) {
    return
  }
  submittedAnswers.value = userAnswers.value
  router.push({ name: 'result' })
}
</script>

<template>
  <div class="quiz-view">
    <QuizProgress
      :categories="categories"
      :current-category="currentCategory"
      :answered-count="answeredCount"
      :total="questions.length"
      @update:current-category="switchCategory"
    />
    <input
      v-model="searchKeyword"
      type="text"
      placeholder="🔍 搜索题目关键字..."
      class="search-input"
    />

    <main class="question-list">
      <QuestionCard
        v-for="q in filteredQuestions"
        :key="q.id"
        :question="q"
        :selected-index="getUserAnswer(q.id).selectedIndex"
        @update:selected-index="(idx: number) => setAnswer(q.id, idx)"
      />

      <p v-if="filteredQuestions.length === 0" class="empty">没有找到相关题目</p>
    </main>
    <footer class="submit-footer">
      <button
        class="submit-btn"
        :disabled="!allAnswered"
        @click="handleSubmit"
      >
        提交答案
      </button>
      <p v-if="!allAnswered" class="hint">
        还有 {{ questions.length - answeredCount }} 道题未作答
      </p>
    </footer>
  </div>
</template>

<style scoped>
.quiz-view {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px 120px;
  min-height: 100vh;
  background: #1e1a2e;
}

.search-input {
  width: 100%;
  padding: 12px 16px;
  margin-top: 16px;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.35);
}

.search-input:focus {
  border-color: #f7b733;
}

.question-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 20px;
}

.empty {
  text-align: center;
  color: rgba(255, 255, 255, 0.4);
  padding: 48px 0;
  font-size: 15px;
}

/* ======== 底部提交栏 ======== */
.submit-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background: transparent;
  padding: 16px 24px;
  text-align: center;
  z-index: 10;
}

.submit-btn {
  background: linear-gradient(135deg, #f5a623, #f7b733);
  color: #1e1a2e;
  border: none;
  padding: 14px 56px;
  font-size: 18px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, opacity 0.2s;
}

.submit-btn:hover:not(:disabled) {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 166, 35, 0.5);
}

.submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.submit-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.hint {
  margin-top: 8px;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}
</style>
