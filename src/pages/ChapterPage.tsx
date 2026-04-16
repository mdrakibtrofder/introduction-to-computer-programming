import { useParams, Navigate } from "react-router-dom";
import ChapterLayout from "../components/ChapterLayout";
import { chapters } from "../data/chapters";

const ChapterPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const chapterIndex = chapters.findIndex((c) => c.slug === slug);
  
  if (chapterIndex === -1) return <Navigate to="/" replace />;
  
  const chapter = chapters[chapterIndex];
  const prev = chapterIndex > 0 ? chapters[chapterIndex - 1] : undefined;
  const next = chapterIndex < chapters.length - 1 ? chapters[chapterIndex + 1] : undefined;

  return (
    <ChapterLayout
      title={chapter.title}
      description={chapter.description}
      weekNumber={chapter.week}
      slug={chapter.slug}
      slides={chapter.slides}
      prevChapter={prev ? { slug: prev.slug, title: prev.title } : undefined}
      nextChapter={next ? { slug: next.slug, title: next.title } : undefined}
    />
  );
};

export default ChapterPage;
