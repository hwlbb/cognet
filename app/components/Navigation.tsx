import Link from "next/link";

const topics = [
  { slug: "ai-basics", title: "AI 基础" },
  { slug: "machine-learning", title: "机器学习" },
  // 可以根据需要添加更多主题
];

export default function Navigation() {
  return (
    <nav className="bg-gray-100 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            首页
          </Link>
        </li>
        {topics.map((topic) => (
          <li key={topic.slug}>
            <Link
              href={`/topics/${topic.slug}`}
              className="text-blue-500 hover:underline"
            >
              {topic.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
