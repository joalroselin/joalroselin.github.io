import { Card, Heading } from '@shadcn/ui';
import Layout from '../layout';

export default function Projects() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Heading className="text-3xl font-bold mb-6">My Projects</Heading>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Map through your projects data and render Card components */}
          <Card>
            <h3 className="text-xl font-bold mb-2">Project Title 1</h3>
            <p>A brief description of your project highlighting its key features and impact.</p>
            {/* Add image, links, or other relevant details */}
          </Card>
          {/* ... more project cards */}
        </div>
      </div>
    </Layout>
  );
}