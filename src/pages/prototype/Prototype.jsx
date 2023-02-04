import React from 'react';
import qs from 'qs'

const prototypeConfig = {
	silverGate: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2XWMJIb6C3fbtE84K772PC%2Fcase-study%3Fpage-id%3D0%253A1%26node-id%3D2%253A345%26viewport%3D455%252C742%252C0.02%26scaling%3Dscale-down-width',

	houten: 'https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F2XWMJIb6C3fbtE84K772PC%2Fcase-study%3Fpage-id%3D2%253A2185%26node-id%3D2%253A2456%26viewport%3D490%252C5840%252C0.13%26scaling%3Dscale-down-width',
};

const Prototype = () => {
	const { type } = qs.parse(window.location.href.split('?')[1]);

	return (
		<div>
			<iframe title="prototype" style={{height: '100vh', width: '100%', border: '1px solid rgba(0, 0, 0, 0.1)'}} src={prototypeConfig[type]} allowFullScreen></iframe>
		</div>
	)
};

export default Prototype;
