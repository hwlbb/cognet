import Navigation from "./components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen p-4">
      <Navigation />
      <div className="mt-8">
        <h1 className="text-3xl font-bold mb-4">欢迎来到AI学习笔记</h1>
        <p className="mb-4">
          这里是您学习和探索人工智能世界的起点。浏览不同的主题，深入了解AI的基础知识和应用。
        </p>
        <p>开始您的学习之旅，点击上方导航栏中的主题！</p>
      </div>
    </main>
  );
}
