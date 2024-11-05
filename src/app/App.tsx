import './styles/App.css';
import Link from 'next/link';

function App() {

  return (
    <div>
      <nav>
        <div className="bg-gray-200 p-4"> 
          <div className="container mx-auto flex items-center justify-between">
          <div className="text-xl font-bold">Hello Joal</div> {/* Your brand name */}
          <ul className="flex space-x-6"> 
              <li>
              <Link href="/">Home</Link>
              </li>
              <li>
                  <Link href="/about">About</Link>
              </li>
              <li>
                  <Link href="/projects">Projects</Link>
              </li>
              <li>
                  <Link href="/contact">Contact</Link>

              </li>
          </ul>
          </div>
        </div>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              About Me{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              I'm Joal Rose Lin, a Salesforce developer with a passion for user-experience and clean data. I also love data analysis and marketing, and I'm always looking for ways to improve end-to-end business operations.
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Skills{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Salesforce Development | User Experience | Data Analysis | Marketing | Clean Data
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Projects{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              - Project 1: [Link to project]
              - Project 2: [Link to project]
              - Project 3: [Link to project]
            </p>
          </div>

          <div className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
            <h2 className={`mb-3 text-2xl font-semibold`}>
              Contact{' '}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              Email: joal.rose.lin@example.com
            </p>
          </div>
        </div>
      </main>
    </div>
    
  )
}

export default App
