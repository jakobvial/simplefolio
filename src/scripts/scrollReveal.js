export default function initScrollReveal(targetElements, defaultProps) {
	if (!targetElements.length) return; // If there are no target elements, do nothing

	ScrollReveal({reset: false});

	targetElements.forEach(({element, animation}) => {
		ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation)); // Merge the default props with the animation object
	});
}
