Prism.languages.ini= {
	'comment': /^[ \t]*;.*$/m,
	'selector': /^\s*\[.*?\]/m,
	'constant': /^[ \t]*[^\s=]+?(?=[ \t]*=)/m,
	'attr-value': {
		pattern: /=.*/,
		inside: {
			'punctuation': /^[=]/
		}
	}
};