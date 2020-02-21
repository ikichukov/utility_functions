function getURLSlug(words) {
	return words
		.replace(/\s+/g, '_')
		.toLowerCase();
}