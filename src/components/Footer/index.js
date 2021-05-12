/*
 * @Date: 03/05/2021 12.04.04 +0800
 * @Author: KnowsCount
 * @LastEditTime: 12/05/2021 10.38.45 +0800
 * @FilePath: /website/src/components/Footer/index.js
 */
import Link from 'components/Link';
import './index.css';

const Footer = () => (
    <footer className="footer">
        <span className="footer__date">
            {`© ${new Date().getFullYear()} TEDx@NKCSWX team.`}
        </span>
        <Link
            secondary
            className="footer__link"
            href="https://github.com/hamishmw"
            target="_self"
        >
            Thanks to @HamishMW
        </Link>
    </footer>
);

export default Footer;
