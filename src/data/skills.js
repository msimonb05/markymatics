// Groups follow the résumé; project-stack tech the résumé leaves out sits in the closest group
export const skills = [
	{ group: 'Languages', items: ['JavaScript', 'Python', 'SQL', 'PHP', 'HTML', 'CSS'] },
	{
		group: 'Back-end & Web',
		items: ['Node.js', 'Express', 'REST APIs', 'Microservices', 'Socket.IO', 'Flask', 'FastAPI', 'React', 'React Native', 'Expo', 'Astro', 'Tailwind CSS', 'EJS'],
	},
	{ group: 'AI & Data', items: ['RAG', 'LangChain', 'Ollama', 'Hugging Face', 'pandas', 'SciPy', 'Matplotlib', 'seaborn', 'Statistical analysis'] },
	{ group: 'Databases & Cloud', items: ['MongoDB', 'MariaDB', 'Firebase', 'Cloudflare R2', 'Cloudflare Pages', 'Render', 'Netlify', 'Resend'] },
	{ group: 'DevOps & Tools', items: ['Git', 'GitHub Actions', 'Docker', 'Kubernetes', 'Bun', 'Vitest', 'Supertest', 'Trello', 'GitHub Projects'] },
	{ group: 'Project Delivery', items: ['Agile', 'Scrumban', 'Requirements engineering'] },
];

// Project stacks name some skills more specifically; these count toward "Used in"
export const alsoListedAs = {
	JavaScript: ['Node.js', 'React', 'React Native'],
	MongoDB: ['MongoDB Atlas'],
	Firebase: ['Firebase Authentication', 'Cloud Firestore'],
};
