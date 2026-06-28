<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter();
</script>
<template>
  <div class="welcome-view">
    <form>
      <h2>欢迎来到Web 前端知识问答与刷题助手</h2>
      <button type="button" @click="router.push('/quiz')">开始刷题</button>
    </form>
  </div>
</template>
<style scoped>
.welcome-view {
  min-height: 100vh;
  background: url('/bg.jpg') center / cover no-repeat;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 35vh;
}

form {
  text-align: center;
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(8px);
  border-radius: 16px;
  padding: 48px 40px;
  max-width: 600px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
}

h2 {
  font-size: 26px;
  color: #2c3e50;
  margin-bottom: 48px;
  line-height: 1.5;
}

button {
  background: linear-gradient(135deg, #667eea, #764ba2);
  color: #fff;
  border: none;
  padding: 14px 56px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

button:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(102, 126, 234, 0.4);
}

button:active {
  transform: translateY(0);
}
</style>