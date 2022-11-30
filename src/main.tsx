import * as ReactDomClient from 'react-dom/client';

import Root from '~/src/layout/components/root';

import services from './services';

const appElement = document.querySelector('#app');

if (appElement != null) {
	const appRoot = ReactDomClient.createRoot(appElement);

	appRoot.render(<Root services={services} />);
}
