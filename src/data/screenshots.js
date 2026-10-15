// Screenshots live in src/assets/projects/<slug>/, ordered by their 01-, 02- prefixes
const files = import.meta.glob('../assets/projects/*/*.webp', { eager: true, import: 'default' });

export function screenshotsFor(slug) {
	return Object.entries(files)
		.filter(([path]) => path.split('/').at(-2) === slug)
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([path, src]) => ({ key: path.split('/').at(-1).replace('.webp', ''), src, portrait: src.height > src.width }));
}
