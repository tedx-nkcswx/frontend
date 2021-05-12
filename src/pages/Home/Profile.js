import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import Link from 'components/Link';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Image from 'components/Image';
import Section from 'components/Section';
import ProfileImg from 'assets/profile.jpg';
import ProfileImgLarge from 'assets/profile-large.jpg';
import ProfileImgPlaceholder from 'assets/profile-placeholder.jpg';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
import { ReactComponent as KatakanaProfile } from 'assets/katakana-profile.svg';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './Profile.css';

const ProfileText = ({ status, titleId }) => (
    <Fragment>
        <Heading
            className={classNames('profile__title', `profile__title--${status}`)}
            level={3}
            id={titleId}
        >
            <DecoderText text="About TEDx" start={status !== 'exited'} delay={500} />
        </Heading>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
            <Link href="https://www.ted.com/about/programs-initiatives/tedx-program">
                TEDx
            </Link>{' '}
            is a grassroots initiative, created in the spirit of TED’s overall mission to
            research and discover “ideas worth spreading.” TEDx brings the spirit of TED
            to local communities around the globe through TEDx events. These events are
            organized by passionate individuals who seek to uncover new ideas and to share
            the latest research in their local areas that spark conversations in their
            communities. TEDx events include live speakers and recorded TED Talks, and are
            organized independently under a free license granted by TED.
        </Text>
        <Text
            className={classNames(
                'profile__description',
                `profile__description--${status}`
            )}
            size="l"
        >
            These events are not controlled by TED, but event organizers agree to abide by
            our format, and are offered guidelines for curation, speaker coaching, event
            organizing and more. They learn from us and from each other. More than 3000
            events are now held annually.
        </Text>
    </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
    const titleId = `${id}-title`;

    return (
        <Section
            className="profile"
            as="section"
            id={id}
            ref={sectionRef}
            aria-labelledby={titleId}
            tabIndex={-1}
        >
            <Transition in={visible} timeout={0} onEnter={reflow}>
                {status => (
                    <div className="profile__content">
                        <div className="profile__column">
                            <ProfileText status={status} titleId={titleId} />
                            <Button
                                secondary
                                className={classNames(
                                    'profile__button',
                                    `profile__button--${status}`
                                )}
                                href="/contact"
                                icon="send"
                            >
                                Send me a message
                            </Button>
                        </div>
                        <div className="profile__column">
                            <div className="profile__tag" aria-hidden>
                                <Divider
                                    notchWidth="64px"
                                    notchHeight="8px"
                                    collapsed={status !== 'entered'}
                                    collapseDelay={1000}
                                />
                                <div
                                    className={classNames(
                                        'profile__tag-text',
                                        `profile__tag-text--${status}`
                                    )}
                                >
                                    About Me
                                </div>
                            </div>
                            <div className="profile__image-wrapper">
                                <Image
                                    reveal
                                    delay={100}
                                    placeholder={ProfileImgPlaceholder}
                                    srcSet={`${ProfileImg} 480w, ${ProfileImgLarge} 960w`}
                                    sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                                    alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                                />
                                <KatakanaProfile
                                    className={classNames(
                                        'profile__svg',
                                        `profile__svg--${status}`
                                    )}
                                />
                            </div>
                        </div>
                    </div>
                )}
            </Transition>
        </Section>
    );
};

export default Profile;
