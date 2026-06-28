<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { questions } from '@/data/questions'
import { submittedAnswers } from '@/data/answers'
import ResultSummary from '@/components/ResultSummary.vue'

const router = useRouter()

const results = computed(() =>
  submittedAnswers.value.map((a) => {
    const q = questions.find((q) => q.id === a.questionId)!
    return {
      question: q,
      selectedIndex: a.selectedIndex!,
      isCorrect: a.selectedIndex === q.correctIndex,
    }
  }),
)

const correctCount = computed(() => results.value.filter((r) => r.isCorrect).length)
const wrongCount = computed(() => results.value.filter((r) => !r.isCorrect).length)

const handleRetry = (): void => {
  submittedAnswers.value = []
  router.push({ name: 'quiz' })
}

const handleBackHome = (): void => {
  submittedAnswers.value = []
  router.push({ name: 'welcome' })
}

onMounted(() => {
  if (submittedAnswers.value.length === 0) {
    router.replace({ name: 'welcome' })
  }
})
</script>

<template>
  <div class="result-view">
    <ResultSummary
      :correct="correctCount"
      :total="questions.length"
      :wrong-count="wrongCount"
    />

    <section v-if="wrongCount > 0" class="wrong-section">
      <h2 class="wrong-title">❌ 错题回顾</h2>
      <div
        v-for="r in results.filter((r) => !r.isCorrect)"
        :key="r.question.id"
        class="wrong-card"
      >
        <h3>{{ r.question.id }}. {{ r.question.stem }}</h3>
        <p class="your-answer">
          你的答案：<span class="wrong-text">{{ r.question.options[r.selectedIndex] }}</span>
        </p>
        <p class="correct-answer">
          正确答案：<span class="correct-text">{{ r.question.options[r.question.correctIndex] }}</span>
        </p>
        <p class="explanation">💡 {{ r.question.explanation }}</p>
      </div>
    </section>

    <p v-else class="all-correct-msg">
      ✅ 所有题目均已掌握，知识点牢靠！
    </p>

    <footer class="action-bar">
      <button class="btn-retry" @click="handleRetry">重新答题</button>
      <button class="btn-back" @click="handleBackHome">返回首页</button>
    </footer>
  </div>
</template>

<style scoped>
.result-view {
  max-width: 720px;
  margin: 0 auto;
  padding: 24px 16px 120px;
  min-height: 100vh;
  background: #1e1a2e;
}

/* ======== 错题区域 ======== */
.wrong-section {
  margin-top: 32px;
}

.all-correct-msg {
  margin-top: 32px;
  text-align: center;
  font-size: 16px;
  color: #4ade80;
}

.wrong-title {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
}

.wrong-card {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  margin-bottom: 16px;
}

.wrong-card h3 {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  line-height: 1.6;
}

.your-answer,
.correct-answer {
  font-size: 14px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.6);
}

.wrong-text {
  color: #f87171;
}

.correct-text {
  color: #4ade80;
}

.explanation {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.5);
  margin-top: 12px;
  padding-top: 12px;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  line-height: 1.6;
}

/* ======== 底部操作栏 ======== */
.action-bar {
  display: flex;
  gap: 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 16px 24px;
  justify-content: center;
  z-index: 10;
}

.btn-retry {
  background: linear-gradient(135deg, #f5a623, #f7b733);
  color: #1e1a2e;
  border: none;
  padding: 14px 48px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.btn-retry:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(245, 166, 35, 0.5);
}

.btn-retry:active {
  transform: translateY(0);
}

.btn-back {
  background: rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.15);
  padding: 14px 48px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

.btn-back:hover {
  background: rgba(255, 255, 255, 0.15);
  color: rgba(255, 255, 255, 0.9);
}
</style>
