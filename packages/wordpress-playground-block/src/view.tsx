import React from 'react';
import { createRoot } from '@wordpress/element';
import PlaygroundPreview from './components/playground-preview';
import { base64DecodeBlockAttributes } from './base64';

function renderPlaygroundPreview() {
	const playgroundDemo = Array.from(
		document.getElementsByClassName('wordpress-playground-block')
	);

	for (const element of playgroundDemo) {
		const rootElement = element as HTMLDivElement;
		const root = createRoot(rootElement);
		const attributes = base64DecodeBlockAttributes(
			JSON.parse(atob(rootElement.dataset['attributes'] || ''))
		) as any;

		root.render(<PlaygroundPreview {...attributes} />);
	}
}

if (document.readyState === 'loading') {
	document.addEventListener('DOMContentLoaded', renderPlaygroundPreview);
} else {
	renderPlaygroundPreview();
}
