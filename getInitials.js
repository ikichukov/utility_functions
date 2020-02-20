function getInitials(words) {
	return words
		.split(' ')
		.map(word => `${word.charAt(0).toUpperCase()}.`)
		.join('');		
}
