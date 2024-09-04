import { Button, Card, Heading } from '@shadcn/ui';
import Layout from './layout';

export default function Home() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Heading className="text-4xl font-bold mb-6">Hello, I&apos;m Joal</Heading>

        <section className="mb-12">
          <p className="text-lg mb-4">
            I&apos;m a passionate Salesforce Developer and Web Engineer, dedicated to crafting efficient solutions and elegant user experiences. 
            When I&apos;m not coding, you&apos;ll find me exploring the realms of productivity hacks and 3D printing.
          </p>
          <Button>Explore My Work</Button> 
        </section>

        <section className="mb-12">
          <Heading className="text-2xl font-bold mb-4">Featured Projects</Heading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Map through your projects data and render Card components */}
            <Card>
              <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
              <p>A brief description of your project highlighting its key features and impact.</p>
            </Card>
            {/* ... more project cards */}
          </div>
        </section>

        <section>
          <p className="text-lg mb-4">Let&apos;s collaborate on your next project!</p>
          <Button>Get in Touch</Button>
        </section>
      </div>
    </Layout>
  );
}