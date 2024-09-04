import { Button, Heading, Input, Textarea } from '@shadcn/ui';
import Layout from '../layout';

export default function Contact() {
  return (
    <Layout>
      <div className="container mx-auto p-4">
        <Heading className="text-3xl font-bold mb-6">Get in Touch</Heading>

        <form className="space-y-4">
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Textarea placeholder="Your Message" />
          <Button type="submit">Send Message</Button>
        </form>
      </div>
    </Layout>
  );
}