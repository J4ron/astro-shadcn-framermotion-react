import { motion } from 'framer-motion';

const LandingPage = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen bg-black text-white flex flex-col justify-center items-center space-y-8"
        >
            {/* Animated Heading */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 }}
                className="text-4xl md:text-6xl font-bold mb-6"
            >
                Welcome to Astro, React, ShadCN, and Framer Motion!
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-lg md:text-xl mb-8 text-center"
            >
                We're glad you're here. This template integrates powerful technologies to help you build modern web applications. Let's explore the docs for each framework used!
            </motion.p>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="overflow-x-auto w-75"
            >
                <motion.table
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="min-w-full table-auto border-collapse border border-white"
                >
                    <thead>
                    <tr className="bg-gray-800">
                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">Framework</th>
                        <th className="px-6 py-3 text-left text-sm font-semibold text-white">Documentation Link</th>
                    </tr>
                    </thead>
                    <tbody>

                    <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.8 }}
                        className="bg-gray-900"
                    >
                        <td className="px-6 py-4 text-sm font-medium text-white">Astro</td>
                        <td className="px-6 py-4 text-sm font-medium">
                            <a href="https://astro.build" target="_blank" className="text-blue-400 hover:text-blue-600">
                                Visit Astro Docs
                            </a>
                        </td>
                    </motion.tr>
                    <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="bg-gray-800"
                    >
                        <td className="px-6 py-4 text-sm font-medium text-white">React</td>
                        <td className="px-6 py-4 text-sm font-medium">
                            <a href="https://reactjs.org" target="_blank" className="text-blue-400 hover:text-blue-600">
                                Visit React Docs
                            </a>
                        </td>
                    </motion.tr>
                    <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2 }}
                        className="bg-gray-900"
                    >
                        <td className="px-6 py-4 text-sm font-medium text-white">ShadCN</td>
                        <td className="px-6 py-4 text-sm font-medium">
                            <a href="https://shadcn.dev" target="_blank" className="text-blue-400 hover:text-blue-600">
                                Visit ShadCN Docs
                            </a>
                        </td>
                    </motion.tr>
                    <motion.tr
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1.4 }}
                        className="bg-gray-800"
                    >
                        <td className="px-6 py-4 text-sm font-medium text-white">Framer Motion</td>
                        <td className="px-6 py-4 text-sm font-medium">
                            <a href="https://www.framer.com/motion" target="_blank" className="text-blue-400 hover:text-blue-600">
                                Visit Framer Motion Docs
                            </a>
                        </td>
                    </motion.tr>
                    </tbody>
                </motion.table>
            </motion.div>
        </motion.div>
    );
};

export default LandingPage;
