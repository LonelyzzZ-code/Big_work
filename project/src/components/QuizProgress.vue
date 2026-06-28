<script setup lang="ts">
const props = defineProps<{
    categories: string[];
    currentCategory: string;
    answeredCount: number;
    total: number;
}>();

const emit = defineEmits<{
    (e: 'update:currentCategory', category: string): void
}>();
</script>

<template>
    <div class = "quiz-progress">
        <div class = "category-tabs">
            <span
            v-for = "cat in categories"
            :key = "cat"
            :class = "{active: cat === props.currentCategory}"
            @click="emit('update:currentCategory', cat)"
            >
            {{cat}}
            </span>
        </div>
        <span>已回答情况:{{props.answeredCount}}/{{props.total}}</span>
    </div>
</template>

<style scoped>
.quiz-progress {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.08);
  padding: 16px 20px;
  border-radius: 12px;
  position: sticky;
  top: 0;
  z-index: 10;
  backdrop-filter: blur(8px);
}

.category-tabs {
  display: flex;
  gap: 6px;
}

.category-tabs span {
  padding: 6px 16px;
  border-radius: 20px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.65);
  cursor: pointer;
  transition: all 0.2s;
  white-space: nowrap;
  user-select: none;
}

.category-tabs span:hover {
  color: #f7b733;
  background: rgba(247, 183, 51, 0.12);
}

.category-tabs span.active {
  background: linear-gradient(135deg, #f5a623, #f7b733);
  color: #1e1a2e;
  font-weight: 600;
}

.quiz-progress > span {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.55);
  white-space: nowrap;
}
</style>