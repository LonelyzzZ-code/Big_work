<script setup lang="ts">
import type { Question } from '@/types'

const props = defineProps<{
  question: Question
  selectedIndex: number | null
}>()

const emit = defineEmits<{
  (e: 'update:selectedIndex', index: number): void
}>()
</script>

<template>
    <div class = "question-card">
        <h3>{{ props.question.id }}.{{props.question.stem}}</h3>

        <div class = "option">
            <label 
            v-for = "(opt, idx) in props.question.options"
            :key = "idx"
            :class = "{'selected': props.selectedIndex === idx}"
            >
            <input
            type="radio"
            :name = "'q' + props.question.id"
            :checked="props.selectedIndex === idx"
            @change="emit('update:selectedIndex', idx)"
            />
            {{ opt }}
            </label>
            
        </div>
    </div>
</template>

<style scoped>
.question-card {
  background: rgba(255, 255, 255, 0.06);
  border-radius: 12px;
  padding: 24px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.2s, border-color 0.2s;
}

.question-card:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: rgba(255, 255, 255, 0.15);
}

.question-card h3 {
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 16px;
  line-height: 1.6;
}

/* ======== 选项区 ======== */
.option {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.option label {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border: 2px solid rgba(255, 255, 255, 0.12);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s;
  font-size: 15px;
  color: rgba(255, 255, 255, 0.75);
  user-select: none;
}

.option label:hover {
  border-color: #f7b733;
  background: rgba(247, 183, 51, 0.08);
  color: rgba(255, 255, 255, 0.9);
}

.option label.selected {
  border-color: #f7b733;
  background: rgba(247, 183, 51, 0.12);
  color: #f7b733;
}

/* ======== radio ======== */
.option input[type="radio"] {
  appearance: none;
  -webkit-appearance: none;
  width: 18px;
  height: 18px;
  border: 2px solid rgba(255, 255, 255, 0.3);
  border-radius: 50%;
  flex-shrink: 0;
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.option input[type="radio"]:checked {
  border-color: #f7b733;
  background: #f7b733;
}

.option input[type="radio"]:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 6px;
  height: 6px;
  background: #1e1a2e;
  border-radius: 50%;
}
</style>