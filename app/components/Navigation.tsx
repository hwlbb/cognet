import Link from "next/link";
import fs from "fs/promises";
import path from "path";

async function getTopics(): Promise<string[]> {
  const topicsDir = path.join(process.cwd(), "app/topics");
  const entries = await fs.readdir(topicsDir, { withFileTypes: true });
  return entries
    .filter((entry) => entry.isDirectory() && entry.name !== "[slug]")
    .map((dir) => dir.name);
}

export default async function Navigation() {
  const topics = await getTopics();

  return (
    <nav className="bg-gray-900 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="text-blue-500 hover:underline">
            home
          </Link>
        </li>
        {topics.map((topic) => (
          <li key={topic}>
            <Link
              href={`/topics/${topic}`}
              className="text-blue-500 hover:underline"
            >
              {topic.replace(/-/g, " ")}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
