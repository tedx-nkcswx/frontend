/*
 * @Date: 17/04/2021 00.02.58 +0800
 * @Author: KnowsCount
 * @LastEditTime: 17/04/2021 07.52.08 +0800
 * @FilePath: /portfolio/src/index.js
 */
import { hydrate, render } from 'react-dom';
import App from './app';

const rootElement = document.getElementById('root');

if (rootElement.hasChildNodes()) {
    hydrate(<App />, rootElement);
} else {
    render(<App />, rootElement);
}
