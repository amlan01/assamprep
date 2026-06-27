import { ExamsCoveredSection } from '@/components/sections/ExamsCoveredSection';

export const metadata = {
  title: 'Exams | AssamPrep',
  description: 'Explore the list of Assam Government Exams supported by our mock test platform.',
};

export default function ExamsPage() {
  return (
    <>
      <div className="bg-background">
        <ExamsCoveredSection />
      </div>
    </>
  );
}
