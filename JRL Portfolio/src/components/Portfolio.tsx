export default function Portfolio() {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">Latest Work
                </h1>


                <div className="flex py-4 mt-4 overflow-x-auto overflow-y-hidden md:justify-center dark:border-gray-700">
                    <button
                        className="h-12 px-8 py-2 -mb-px text-sm text-center text-blue-600 bg-transparent border-b-2 border-blue-500 sm:text-base dark:border-blue-400 dark:text-blue-300 whitespace-nowrap focus:outline-none">
                        Web
                    </button>

                    <button
                        className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
                        Salesforce
                    </button>

                    <button
                        className="h-12 px-8 py-2 -mb-px text-sm text-center text-gray-700 bg-transparent border-b-2 border-gray-200 sm:text-base dark:text-white whitespace-nowrap cursor-base focus:outline-none dark:border-gray-700 dark:hover:border-gray-400 hover:border-gray-400">
                        Consultancy
                    </button>
                </div>

                <section className="mt-8 space-y-8 lg:mt-12">
                    <section className="lg:flex lg:items-center">
                        <div className="lg:w-1/2 ">
                            <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Ui kit</p>
                            <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Block
                                of Ui kit collections</h2>
                        </div>

                        <div className="mt-4 lg:w-1/2 lg:mt-0">
                            <img className="object-cover w-full h-64 rounded-lg md:h-96"
                                src="https://images.unsplash.com/photo-1621609764180-2ca554a9d6f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
                                alt=""></img>
                        </div>
                    </section>

                    <section className="lg:flex lg:items-center">
                        <div className="lg:w-1/2 ">
                            <p className="text-lg tracking-wider text-blue-500 uppercase dark:text-blue-400 ">Wareframe</p>
                            <h2 className="mt-2 text-2xl font-semibold text-gray-800 capitalize dark:text-white">Best
                                free website layout </h2>
                        </div>

                        <div className="mt-4 lg:w-1/2 lg:mt-0">
                            <img className="object-cover w-full h-64 rounded-lg md:h-96"
                                src="https://images.unsplash.com/photo-1600132806608-231446b2e7af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
                                alt=""></img>
                        </div>
                    </section>
                </section>
            </div>
        </section>
    )
}