import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
    theme: {
        ...themes.dark,
        // brandImage:
        //     'https://knowscount-1304485449.cos.ap-shanghai.myqcloud.com/img/icon.svg',
        brandTitle: 'TEDx@NKCSWX team Components',
        brandUrl: 'https://tedx.workermen.cyou/',
    },
});
