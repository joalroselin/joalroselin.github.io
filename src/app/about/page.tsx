import { Heading, Paragraph } from '@shadcn/ui';
import Layout from '../layout';

export default function About() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Heading className="text-3xl font-bold mb-6">About Me</Heading>

        <section className="mb-12">
          <Paragraph>
            I&apos;m a tech enthusiast with a knack for problem-solving and a drive for continuous learning. 
            My journey in the world of Salesforce and web development has equipped me with the skills to build robust, scalable, and user-friendly applications.
          </Paragraph>
          <Paragraph>
            Beyond coding, I&apos;m fascinated by the art of optimizing workflows and maximizing productivity. 
            I enjoy experimenting with different tools and techniques to streamline processes and achieve peak efficiency. 
            In my spare time, I delve into the exciting world of 3D printing, bringing ideas to life in tangible form.
          </Paragraph>
        </section>

        <section className="mb-12">
          <Heading className="text-2xl font-bold mb-4">Skills & Technologies</Heading>
          <ul className="list-disc list-inside">
            <li>Salesforce Development (Apex, Visualforce, Lightning Web Components)</li>
            <li>Web Development (HTML, CSS, JavaScript, React, Next.js)</li>
            <li>3D Printing & Design</li>
            <li>Productivity & Workflow Optimization</li>
          </ul>
        </section>
      </div>
    </Layout>
  );
}