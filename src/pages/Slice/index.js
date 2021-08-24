import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import {
    ProjectContainer,
    ProjectSection,
    ProjectSectionContent,
    ProjectImage,
    ProjectTextRow,
    ProjectSectionHeading,
    ProjectSectionText,
    ProjectBackground,
    ProjectHeader,
    ProjectSectionColumns,
} from 'components/ProjectLayout';
import sliceBackground from 'assets/slice-background.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
import sliceApp from 'assets/slice-app.jpg';
import sliceAppLarge from 'assets/slice-app-large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarAnnotations from 'assets/slice-sidebar-annotations.png';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-annotations-large.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
import sliceSlides from 'assets/slice-slides.jpg';
import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-background-bar.jpg';
import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
import sliceAnnotation from 'assets/slice-annotation.png';
import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import './index.css';

const title = 'About our Speakers';
const description =
    'Below is a brief introduction of the speakers whom we are privileged to invite.';
const roles = ['international', 'diverse', 'open'];

const ProjectSlice = () => {
    useScrollRestore();

    return (
        <Fragment>
            <Helmet>
                <title>{`Projects | ${title}`}</title>
                <meta name="description" content={description} />
            </Helmet>
            <ProjectContainer className="slice">
                <ProjectBackground
                    srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
                    placeholder={sliceBackgroundPlaceholder}
                    opacity={0.8}
                    entered={!prerender}
                />
                <ProjectHeader
                    title={title}
                    description={description}
                    url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
                    roles={roles}
                />
                <ProjectSection first>
                    <ProjectSectionContent>
                        <ProjectImage
                            srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
                            placeholder={sliceAppPlaceholder}
                            alt="invited members"
                            sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                {/* <ProjectSection>
                    <ProjectSectionColumns centered className="slice__columns">
                        <div className="sidebar__images-text">
                            <ProjectSectionHeading>
                                Bringing it together
                            </ProjectSectionHeading>
                            <ProjectSectionText>
                                Teachers needed a better way to create collaborative group
                                activities by annotating slides on Slice. Before starting
                                this project, a layer could only be annotated by a single
                                user, making it difficult for learners to work together.
                            </ProjectSectionText>
                            <ProjectSectionText>
                                Our solution was to allow users to be invited to a layer,
                                where they can see others’ annotations and make their own.
                            </ProjectSectionText>
                        </div>
                        <div className="slice__sidebar-images">
                            <Image
                                className="slice__sidebar-image"
                                srcSet={`${sliceSidebarLayers} 300w, ${sliceSidebarLayersLarge} 700w`}
                                placeholder={sliceSidebarLayersPlaceholder}
                                alt="The layers sidebar design, now with user profiles."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                            <Image
                                className="slice__sidebar-image"
                                srcSet={`${sliceSidebarAnnotations} 300w, ${sliceSidebarAnnotationsLarge} 700w`}
                                placeholder={sliceSidebarAnnotationsPlaceholder}
                                alt="Multiple user annotations on a shared layer."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection> */}
                <ProjectSection>
                    <ProjectSectionColumns centered className="slice__columns">
                        <div className="sidebar__images-text">
                            <ProjectSectionHeading>Piye Yuan</ProjectSectionHeading>
                            <ProjectSectionText>
                                Yuan is an interesting person, to describe him, it’s
                                better to use his own words.
                            </ProjectSectionText>
                            <ProjectSectionText>
                                “Now, I am, a ‘freelancer’, a ‘English Teacher’, a ‘mobile
                                bookstore owner’, a ‘podcaster’, a ‘backpacker’, a person
                                who likes ‘sports, arts, literature and philosophy’, a
                                ‘maker’, a person who wants to ‘put the above taxes all in
                                a device and combine them organically’. Yuan worked in the
                                Moonshot Academy which was a project-based learning
                                organization. He has been held valuable projects with his
                                students, from Xizang (zero outlet program) to Malaysia
                                (students integration). Personally to him, he likes
                                journey, which he completed a wonderful cycling journey on
                                route 318 in Chuanzang.
                            </ProjectSectionText>
                            <ProjectSectionText>
                                Yuan is also a English teacher through his WeChat Public
                                Domain, developed “Words Origin Talk” through “Goral” app.
                                He owns his mobile bookstore “Riddle”, also through his
                                public domain in WeChat. Yuan puts all these literature
                                and arts together, not only accomplish himself as an
                                individual but also promote others’ developments.
                            </ProjectSectionText>
                        </div>
                        <div className="slice__sidebar-images">
                            <Image
                                className="slice__sidebar-image"
                                // srcSet={`${sliceSidebarLayers} 300w, ${sliceSidebarLayersLarge} 700w`}
                                srcSet={`${sliceSidebarLayersPlaceholder} 300w, ${sliceSidebarLayersPlaceholder} 700w`}
                                placeholder={sliceSidebarLayersPlaceholder}
                                alt="The layers sidebar design, now with user profiles."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                            <Image
                                className="slice__sidebar-image"
                                // srcSet={`${sliceSidebarAnnotations} 300w, ${sliceSidebarAnnotationsLarge} 700w`}
                                srcSet={`${sliceSidebarAnnotationsPlaceholder} 300w, ${sliceSidebarAnnotationsLarge} 700w`}
                                placeholder={sliceSidebarAnnotationsPlaceholder}
                                alt="Multiple user annotations on a shared layer."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>
                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Vivian Zhao</ProjectSectionHeading>
                            <ProjectSectionText>
                                Vivian is a current female regional manager in East Asia
                                and Oceania at Minerva Schools of KGI. Vivian graduated
                                from Boston University from the international relations
                                and Affairs department. She completed her master degree at
                                Columbia university in the city of New York from master of
                                eduction and international eduction. Vivian was introduced
                                as guest speaker for academic festival in Teachers
                                College, Columbia University as soon as she graduated.
                            </ProjectSectionText>
                            <ProjectSectionText>
                                She started her life devoting into education, and worked
                                as project manager at seed for innovation, and coordinator
                                at Asia Society respectively. As her goal, she seek to
                                activate the global eduction to work together, and became
                                the founder of Future Columbia China Education. Her
                                passion with international education lead her way through
                                not as a traditional female “IT worker”, but meeting her
                                goal in another fields that she love, education.
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={`${sliceSlidesPlaceholder} 800w, ${sliceSlidesPlaceholder} 1440w`}
                            // placeholder={sliceSlidesPlaceholder}
                            alt="The new My Slides tab in slice, showing annotated and favorited slides."
                            sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                        />
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionContent className="slice__grid">
                        <div className="slice__grid-image">
                            <div className="slice__grid-background">
                                <Image
                                    // className="wrapped-image"
                                    // srcSet={`${sliceBackgroundBar} 400w, ${sliceBackgroundBarLarge} 898w`}
                                    srcSet={`${sliceBackgroundBarPlaceholder} 400w, ${sliceBackgroundBarPlaceholder} 898w`}
                                    placeholder={sliceBackgroundBarPlaceholder}
                                    alt=""
                                    role="presentation"
                                    sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                                />
                            </div>
                            <div className="slice__grid-foreground">
                                <Image
                                    srcSet={`${sliceAnnotation} 440w, ${sliceAnnotationLarge} 880w`}
                                    placeholder={sliceAnnotationPlaceholder}
                                    alt="An annotation preview popover with statistics for shape perimeter and area."
                                    sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                                />
                            </div>
                        </div>
                        <div className="slice__grid-text">
                            <ProjectSectionHeading>Simon Ye</ProjectSectionHeading>
                            <ProjectSectionText>
                                Simon Ye, Doctor of the Friedman School of nutrition,
                                Tufts University, USA, who was engaged in the research on
                                the effects of dietary quality on cardiovascular and
                                intestinal diseases during his university. He always views
                                health problems within different perspectives, from
                                nutrition, cooking and entrepreneurs, in order to improve
                                people's quality of life and health level. He has been
                                very interested in the principle and interaction of food
                                since he was a child, he has learned how to cook by
                                himself, and integrated the science and art of cooking
                                into nutrition, as well as general and intervention.
                            </ProjectSectionText>
                            <ProjectSectionText
                                // style={`(padding-left: ${media.mobile}px) 548px, (padding-left: ${media.tablet} 747px, 556px)`}
                                className="last-paragraph"
                            >
                                His unique understanding of food and innovative cooking
                                have made him stand out among many competitors and won the
                                learning opportunities of studying and working in Michelin
                                two-star restaurant, Mugaritz. At Harvard Business School,
                                he and his collaborators drafted a health intervention
                                plan for left-behind children in China, which has being
                                used as a model course. He once served as the admissions
                                officer of Friedman School of nutrition at Tufts
                                University, responsible for reviewing the information of
                                graduate students and project applicants. He is committed
                                to bringing an inclusive and unbiased culture into the
                                field of nutrition, so that people from different
                                backgrounds can learn and grow.
                            </ProjectSectionText>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
            </ProjectContainer>
            <Footer />
        </Fragment>
    );
};

export default ProjectSlice;
