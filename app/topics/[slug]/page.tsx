import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import fs from "fs/promises";
import path from "path";

export async function generateStaticParams() {
  const topicsDir = path.join(process.cwd(), "app/topics");
  const topics = await fs.readdir(topicsDir);
  return topics.map((topic) => ({ slug: topic }));
}

export default async function TopicPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const filePath = path.join(
    process.cwd(),
    "app/topics",
    slug,
    "introduction.mdx"
  );

  try {
    const content = await fs.readFile(filePath, "utf-8");
    return (
      <div className="min-h-screen p-4">
        <div className="mt-8">
          <MDXRemote source={content} />
        </div>
      </div>
    );
  } catch (error) {
    notFound();
  }
}
