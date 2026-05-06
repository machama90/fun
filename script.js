:root {
  color-scheme: dark;
  --bg-start: #02040f;
  --bg-end: #0d052d;
  --pink: #ff4d6d;
  --purple: #6a00f4;
  --blue: #0b0c10;
  --text: #f4f4f8;
  --soft: #c7c0ff;
  --shadow: 0 30px 80px rgba(0, 0, 0, 0.45);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top, rgba(255, 77, 109, 0.18), transparent 25%),
    linear-gradient(180deg, #07131f 0%, #04070e 100%);
  color: var(--text);
}

button {
  font: inherit;
  border: none;
  cursor: pointer;
}

.page {
  position: relative;
  min-height: 100vh;
  display: none;
  justify-content: center;
  align-items: center;
  padding: 32px;
  opacity: 0;
  transition: opacity 0.9s ease;
}

.page.active {
  display: flex;
  opacity: 1;
}

.panel {
  width: min(540px, 100%);
  padding: 48px 40px;
  border-radius: 32px;
  background: rgba(8, 9, 18, 0.94);
  border: 1px solid rgba(255, 255, 255, 0.08);
  box-shadow: var(--shadow);
  text-align: center;
  backdrop-filter: blur(18px);
}

.panel--access h1 {
  margin: 0 0 28px;
  font-size: clamp(2rem, 3vw, 2.7rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
}

.input-row {
  display: flex;
  justify-content: center;
  gap: 16px;
  flex-wrap: wrap;
}

input[type='date'] {
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  padding: 14px 16px;
  width: 220px;
  background: rgba(255, 255, 255, 0.05);
  color: var(--text);
  font-size: 1rem;
  transition: border-color 0.25s ease, box-shadow 0.25s ease;
}

input[type='date']:focus {
  outline: none;
  border-color: rgba(255, 77, 109, 0.85);
  box-shadow: 0 0 0 4px rgba(255, 77, 109, 0.12);
}

#enterButton {
  padding: 14px 28px;
  border-radius: 18px;
  background: linear-gradient(135deg, #ff4d6d, #6a00f4);
  color: #fff;
  font-weight: 700;
  box-shadow: 0 18px 40px rgba(255, 77, 109, 0.24);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

#enterButton:hover {
  transform: translateY(-2px);
  box-shadow: 0 22px 50px rgba(255, 77, 109, 0.32);
}

.message {
  margin-top: 26px;
  color: rgba(244, 244, 248, 0.78);
  line-height: 1.7;
}

.main-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 20% 20%, rgba(255, 77, 109, 0.14), transparent 18%),
    radial-gradient(circle at 80% 10%, rgba(106, 0, 244, 0.16), transparent 16%),
    linear-gradient(180deg, #02040f 0%, #090a12 100%);
}

.stars,
.stars::before,
.stars::after {
  position: absolute;
  content: '';
  inset: 0;
  background-image: radial-gradient(#fff 0.8px, transparent 0), radial-gradient(#fff 0.7px, transparent 0);
  background-size: 20px 20px, 40px 40px;
  background-position: 0 0, 10px 30px;
  opacity: 0.35;
  animation: drift 20s linear infinite;
}

.stars--small {
  opacity: 0.2;
  background-size: 12px 12px, 26px 26px;
  animation-duration: 33s;
}

.glow {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 50% 35%, rgba(255, 77, 109, 0.16), transparent 25%),
    radial-gradient(circle at 20% 70%, rgba(106, 0, 244, 0.14), transparent 18%);
}

.content {
  position: relative;
  z-index: 2;
  display: grid;
  justify-items: center;
  gap: 24px;
  text-align: center;
  padding: 40px 20px;
}

.heart-container {
  width: 260px;
  height: 260px;
  display: grid;
  place-items: center;
  position: relative;
}

.heart {
  width: 140px;
  height: 140px;
  background: #ff0000;
  position: relative;
  transform: rotate(-45deg);
  border-radius: 30px 30px 0 0;
  animation: beat 1.4s ease-in-out infinite;
  box-shadow: 0 0 50px rgba(255, 0, 0, 0.6), 0 0 80px rgba(255, 0, 0, 0.3), inset -8px -8px 15px rgba(139, 0, 0, 0.2);
  filter: drop-shadow(0 8px 20px rgba(255, 0, 0, 0.4));
}

.heart::before,
.heart::after {
  content: '';
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: #ff0000;
  box-shadow: inset -5px -5px 10px rgba(139, 0, 0, 0.15);
}

.heart::before {
  top: -70px;
  left: 0;
}

.heart::after {
  left: 70px;
  top: 0;
}

.message-box {
  max-width: 760px;
}

.typewriter,
.slow-text,
.final-message {
  font-size: clamp(1.05rem, 1.15vw, 1.2rem);
  line-height: 1.9;
  letter-spacing: 0.01em;
  opacity: 0;
}

.typewriter {
  min-height: 150px;
  white-space: pre-wrap;
  text-align: center;
}

.button {
  margin-top: 24px;
  padding: 16px 28px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease;
}

.button--secondary {
  background: rgba(255, 255, 255, 0.08);
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.12);
}

.button--secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(106, 0, 244, 0.18);
}

.button--primary {
  background: linear-gradient(135deg, #ff4d6d 0%, #6a00f4 100%);
  color: #fff;
}

.button--primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(255, 77, 109, 0.28);
}

#afterClick {
  margin-top: 24px;
}

.hidden {
  display: none;
}

.button--magic {
  background: linear-gradient(135deg, #ff4d6d 0%, #ffd700 100%);
  color: #fff;
  margin-top: 16px;
}

.button--magic:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(255, 215, 0, 0.28);
}

.magic-hearts {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.magic-heart {
  position: absolute;
  width: 8px;
  height: 8px;
  background: linear-gradient(135deg, #ff4d6d, #ffd700);
  border-radius: 50%;
  filter: blur(0.3px);
  opacity: 0.9;
  animation: magicFloat 2s ease-out forwards;
}

@keyframes magicFloat {
  0% {
    transform: translateY(100vh) scale(0.5);
    opacity: 0.9;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateY(-100vh) scale(1.2);
    opacity: 0;
  }
}

.floating-hearts {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.floating-hearts span {
  position: absolute;
  width: 14px;
  height: 14px;
  background: rgba(255, 77, 109, 0.9);
  border-radius: 50%;
  filter: blur(0.5px);
  opacity: 0.8;
  animation: floatUp 10s infinite ease-in;
}

.floating-hearts span:nth-child(1) {
  left: 18%;
  bottom: 12%;
  animation-delay: 0s;
  animation-duration: 11s;
}

.floating-hearts span:nth-child(2) {
  left: 52%;
  bottom: 6%;
  width: 18px;
  height: 18px;
  animation-delay: 2.3s;
  animation-duration: 12s;
}

.floating-hearts span:nth-child(3) {
  left: 72%;
  bottom: 18%;
  animation-delay: 1.4s;
  animation-duration: 9s;
}

.floating-hearts span:nth-child(4) {
  left: 35%;
  bottom: 8%;
  width: 12px;
  height: 12px;
  animation-delay: 3.8s;
  animation-duration: 13s;
}

.floating-hearts span:nth-child(5) {
  left: 84%;
  bottom: 4%;
  width: 16px;
  height: 16px;
  animation-delay: 5.1s;
  animation-duration: 10.5s;
}

@keyframes drift {
  from {
    transform: translateX(0) translateY(0);
  }
  to {
    transform: translateX(-180px) translateY(120px);
  }
}

@keyframes beat {
  0%, 100% {
    transform: rotate(-45deg) scale(1);
  }
  45% {
    transform: rotate(-45deg) scale(1.08);
  }
}

@keyframes floatUp {
  0% {
    transform: translateY(0) scale(1);
    opacity: 0.85;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-140vh) scale(1.4);
    opacity: 0;
  }
}

.fade-in {
  animation: fadeIn 1.4s ease forwards;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 640px) {
  .panel {
    padding: 32px 24px;
  }
  .heart-container {
    width: 180px;
    height: 180px;
  }
  .heart {
    width: 100px;
    height: 100px;
  }
  .heart::before,
  .heart::after {
    width: 100px;
    height: 100px;
  }
  .heart::before {
    top: -50px;
    left: 0;
  }
  .heart::after {
    left: 50px;
    top: 0;
  }
}


.button--touch {
  background: linear-gradient(135deg, #ff4d6d 0%, #6a00f4 100%);
  color: #fff;
  margin-top: 20px;
}

.button--touch:hover {
  transform: translateY(-2px);
  box-shadow: 0 18px 40px rgba(255, 77, 109, 0.28);
}

.final-love-text {
  font-size: clamp(1.3rem, 1.5vw, 1.8rem);
  line-height: 1.9;
  letter-spacing: 0.05em;
  opacity: 0;
  animation: fadeIn 2s ease forwards;
  color: #ffe7fb;
  font-weight: 600;
}
