/*
 * @Date: 17/04/2021 00.02.58 +0800
 * @Author: KnowsCount
 * @LastEditTime: 17/04/2021 07.59.45 +0800
 * @FilePath: /portfolio/src/components/Model/deviceModels.js
 */
import iphone11 from 'assets/iphone-11.glb';
import macbookPro from 'assets/macbook-pro.glb';

export const ModelAnimationType = {
    SpringUp: 'spring-up',
    LaptopOpen: 'laptop-open',
};

const models = {
    phone: {
        url: iphone11,
        width: 374,
        height: 512,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.SpringUp,
    },
    laptop: {
        url: macbookPro,
        width: 1280,
        height: 800,
        position: { x: 0, y: 0, z: 0 },
        animation: ModelAnimationType.LaptopOpen,
    },
};

export default models;
