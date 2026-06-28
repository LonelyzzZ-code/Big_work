<script setup lang="ts">
defineProps<{
  correct: number
  total: number
  wrongCount: number
}>()
</script>

<template>
  <div class="result-summary">
    <h2>📊 答题成绩</h2>
    <div class="stats">
      <div class="stat-item correct">
        <span class="num">{{ correct }}</span>
        <span class="label">答对</span>
      </div>
      <div class="stat-item wrong">
        <span class="num">{{ wrongCount }}</span>
        <span class="label">答错</span>
      </div>
      <div class="stat-item rate">
        <span class="num">{{ total > 0 ? Math.round((correct / total) * 100) : 0 }}%</span>
        <span class="label">正确率</span>
      </div>
    </div>
    <p v-if="wrongCount === 0" class="perfect">🎉 全部正确！</p>
  </div>
</template>

<style scoped>
.result-summary {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 32px 24px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.08);
}

.result-summary h2 {
  font-size: 20px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
}

.stats {
  display: flex;
  justify-content: center;
  gap: 32px;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.stat-item .num {
  font-size: 32px;
  font-weight: 700;
}

.stat-item .label {
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
}

.stat-item.correct .num { color: #4ade80; }
.stat-item.wrong .num   { color: #f87171; }
.stat-item.rate .num    { color: #f7b733; }

.perfect {
  margin-top: 16px;
  font-size: 18px;
  color: #f7b733;
}
</style>
