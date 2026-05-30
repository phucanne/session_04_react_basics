# Tier 1 — Hiểu luồng React (React Flow)

> **Thời gian:** 25-35 phút  
> **Mục tiêu:** Hiểu cách React hoạt động, component render như thế nào, và bản chất của JSX  
> **Kiến thức cần:** Đã hoàn thành Tier 0

---

## 🎯 Hôm nay bạn sẽ học

- Component là gì? Function Component
- React render lần đầu (Initial Render)
- Re-render là gì? Khi nào component render lại?
- Virtual DOM và lý do React nhanh
- JSX thực chất là gì?

---

## 📝 Bài 1.1 — Component là gì? (8 phút)

Một **React Component** đơn giản là một **hàm JavaScript** trả về JSX.

```jsx
// Cách viết phổ biến nhất (Arrow Function)
const Welcome = () => {
    return <h1>Xin chào, React!</h1>;
};

// Hoặc viết theo kiểu function thông thường
function Welcome() {
    return <h1>Xin chào, React!</h1>;
}

export default Welcome;