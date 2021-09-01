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
    ProjectSectionHeadingLily,
} from 'components/ProjectLayout';
import sliceBackground from 'assets/slice-background.jpg';
import sliceBackgroundLarge from 'assets/slice-background-large.jpg';
import sliceBackgroundPlaceholder from 'assets/slice-background-placeholder.jpg';
// import sliceApp from 'assets/slice-app.jpg';
// import sliceAppLarge from 'assets/slice-app-large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
// import sliceSidebarLayers from 'assets/slice-sidebar-layers.png';
// import sliceSidebarLayersLarge from 'assets/slice-sidebar-layers-large.png';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
// import sliceSidebarAnnotations from 'assets/slice-sidebar-annotations.png';
import sliceSidebarAnnotationsLarge from 'assets/slice-sidebar-annotations-large.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/slice-sidebar-annotations-placeholder.png';
// import sliceSlides from 'assets/slice-slides.jpg';
// import sliceSlidesLarge from 'assets/slice-slides-large.jpg';
// import sliceSlidesPlaceholder from 'assets/slice-slides-placeholder.jpg';
// import sliceBackgroundBar from 'assets/slice-background-bar.jpg';
// import sliceBackgroundBarLarge from 'assets/slice-background-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-background-bar-placeholder.jpg';
// import sliceAnnotation from 'assets/slice-annotation.png';
// import sliceAnnotationLarge from 'assets/slice-annotation-large.png';
// import sliceAnnotationPlaceholder from 'assets/slice-annotation-placeholder.png';
import sliceMic from 'assets/slice-mic.jpg';
import sliceMicLarge from 'assets/slice-mic-large.jpg';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
// speakers images - wide
import vivian from 'assets/men/wide-vivian-0.png';
import piye from 'assets/men/wide-piye-1.png';
import simon from 'assets/men/wide-simon-2.png';
import yujia from 'assets/men/wide-yujia-3.png';
// speakers images - narrow
import rain from 'assets/men/narrow-rain-0.png';
import grit from 'assets/men/grit.png';
import sherry from 'assets/men/narrow-sherry-1.png';
import lily from 'assets/men/narrow-lily-2.png';
import leona from 'assets/men/narrow-leona-3.png';
import fiona from 'assets/men/narrow-fiona-4.jpg';
import shahid from 'assets/men/narrow-shahid-5.jpg';
import olivia from 'assets/men/square-olivia-0.png';
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
                    url="https://knowscount-1304485449.cos.ap-shanghai.myqcloud.com/img/9)3SEFVGSDIP%5DW1J9~A4%248L.jpg"
                    roles={roles}
                />
                <ProjectSection first>
                    <ProjectSectionContent>
                        <ProjectImage
                            srcSet={`${sliceMic} 800w, ${sliceMicLarge} 1920w`}
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
                        <div className="slice__sidebar-images">
                            <Image
                                className="slice__sidebar-image"
                                // srcSet={`${sliceSidebarLayers} 300w, ${sliceSidebarLayersLarge} 700w`}
                                srcSet={`${sherry} 300w, ${sherry} 700w`}
                                placeholder={sherry}
                                alt="The layers sidebar design, now with user profiles."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                            <Image
                                className="slice__sidebar-image"
                                // srcSet={`${sliceSidebarAnnotations} 300w, ${sliceSidebarAnnotationsLarge} 700w`}
                                srcSet={`${sherry} 300w, ${sherry} 700w`}
                                placeholder={sherry}
                                alt="Multiple user annotations on a shared layer."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                        </div>
                        <div className="sidebar__images-text">
                            <ProjectSectionHeading>Sherry Wang</ProjectSectionHeading>
                            <ProjectSectionText>
                                Sherry is a teaching assistant in NKCS, what is not
                                average about her is her struggle in improving herself.
                                She likes English but her college entrance exam score
                                wasn’t good enough for her to major in English. However,
                                she didn’t give up, in the university, she kept studying
                                English and when she graduated, she worked as an English
                                teacher in Web International English and WSE for 7 years.
                                For the recent three years, she focused on public
                                speaking. After taking part in the competition twice, she
                                decided to organize her own public speaking workshop,
                                which helps other to improve public speaking skills. She
                                chose the continuous struggle instead of lying flat. She
                                failed many times, but she always stands up. If you are
                                like her, she will tell you how she deals with different
                                choices and never give in to defeat.
                            </ProjectSectionText>
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>
                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Vivian Zhao</ProjectSectionHeading>
                            <ProjectSectionText>
                                Vivian is a current regional manager in East Asia and
                                Oceania at Minerva Schools of KGI. She was introduced as
                                guest speaker for academic festival in Columbia University
                                as soon as she graduated. Her goal is to promote global
                                cooperation in education and let more people know the true
                                meaning of international education.
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={`${vivian} 800w, ${vivian} 1440w`}
                            // placeholder={sliceSlidesPlaceholder}
                            alt="The new My Slides tab in slice, showing annotated and favorited slides."
                            className="image_sizing vivian"
                            // sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
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
                                    srcSet={`${rain} 400w, ${rain} 898w`}
                                    className="rain"
                                    placeholder={sliceBackgroundBarPlaceholder}
                                    alt=""
                                    role="presentation"
                                    sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                                />
                            </div>
                        </div>
                        <div className="slice__grid-text">
                            <ProjectSectionHeading>Rain Shen</ProjectSectionHeading>
                            <ProjectSectionText>
                                Rain is a grade 10 student from Nanwai King's College
                                School. He is passionate to share the experience he had
                                about learning new language, and how is the factor “Grit”
                                helped him in language learning and further studies. He
                                wants to convey that “Grit” can be an imperative motivator
                                in terms of studies, but also a great passion about life.
                            </ProjectSectionText>
                            <div className="slice__grid-foreground">
                                <Image
                                    srcSet={`${grit} 440w, ${grit} 880w`}
                                    placeholder={grit}
                                    alt="An annotation preview popover with statistics for shape perimeter and area."
                                    sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                                />
                            </div>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow className="algin-left">
                            <ProjectSectionHeading>Simon Ye</ProjectSectionHeading>
                            <ProjectSectionText>
                                By integrating lenses of molecular nutrition, culinary
                                arts, and social entrepreneurship, Simon brings unique
                                insight to improve human health and quality of life. As a
                                self-trained chef, his passion and innovative cooking
                                demos won him an offer from Mugaritz, a 2-Michellin
                                starred restaurant in Spain. He is now serving as the
                                Regional Scientific Marketing Lead at IFF Health (Greater
                                Asia) and the Chair of membership and service at
                                International Chinese Nutrition Young Scholar Network.
                                Simon is committed to deliver supportive and
                                non-judgmental culture to the nutrition community, where
                                everyone with various background could freely grow.
                            </ProjectSectionText>
                            <ProjectSectionText
                            // style={`(padding-left: ${media.mobile}px) 548px, (padding-left: ${media.tablet} 747px, 556px)`}
                            // className="last-paragraph"
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
                        </ProjectTextRow>
                        <Image
                            srcSet={`${simon} 800w, ${simon} 1440w`}
                            // placeholder={sliceSlidesPlaceholder}
                            className="image_sizing simon"
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
                                    srcSet={`${lily} 800w, ${lily} 1440w`}
                                    // placeholder={sliceSlidesPlaceholder}
                                    alt="lily"
                                    className="lily"
                                    sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                                />
                            </div>
                        </div>
                        <div className="slice__grid-text">
                            <ProjectSectionHeadingLily>Lily Yu</ProjectSectionHeadingLily>
                            <ProjectSectionText>
                                Lily, an IB student in grade 11 in NKCS. When she was a
                                14-year-old girl, she went to international boarding
                                school in New York by herself. One year later, she
                                transferred to NKCS due the covid-19. The experience that
                                she underwent within studying abroad taught her how to be
                                independent, overcame the difficulties, which understood
                                deeply the meaning of choice. She has a friendly and
                                outgoing personality, with wide range of interests such as
                                dancing, piano, tennis, choir, painting, basketball, and
                                calligraphy. Dancing is one of the most persistent hobby
                                she had, got Chinese traditional dancing certificate in
                                level 10, as well as participating in many dancing
                                competitions and performances. She loves public speaking,
                                actively participated in speech competitions in and
                                outside during the primary and secondary school. She was
                                the finalist of the NSDA 2021Original Oratory high school
                                group in the national round. The hope is to give some
                                inspirations and thoughts to students through sharing her
                                own experience.
                            </ProjectSectionText>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionColumns centered className="slice__columns">
                        <div className="slice__sidebar-images">
                            <Image
                                className="slice__sidebar-image"
                                // srcSet={`${sliceSidebarLayers} 300w, ${sliceSidebarLayersLarge} 700w`}
                                srcSet={`${fiona} 300w, ${fiona} 700w`}
                                placeholder={sliceSidebarLayersPlaceholder}
                                alt="The layers sidebar design, now with user profiles."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                            <Image
                                className="slice__sidebar-image"
                                srcSet={`${fiona} 300w, ${fiona} 700w`}
                                // srcSet={`${sliceSidebarAnnotationsPlaceholder} 300w, ${sliceSidebarAnnotationsLarge} 700w`}
                                placeholder={sliceSidebarAnnotationsPlaceholder}
                                alt="Multiple user annotations on a shared layer."
                                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
                            />
                        </div>
                        <div className="sidebar__images-text">
                            <ProjectSectionHeading>Fiona You</ProjectSectionHeading>
                            <ProjectSectionText>
                                Fiona You graduated from the University of Birmingham in
                                the United Kingdom in 2003 with a master degree in
                                education. After working in the UK for four years, she
                                returned to her hometown of Wuxi to work as a lecturer at
                                the School of Foreign Students at Jiangnan University. A
                                year later she left to join Dipont Education, becoming
                                responsible for the international curriculum centre at
                                Wuxi No. 1 Middle School in 2008. Currently, Fiona is
                                responsible for finance and administration at Nanwai
                                King’s College School Wuxi. Fiona is also a qualified
                                college counseling teacher, accredited by the University
                                of California, Los Angeles, supporting many students
                                through course choices and college applications. She has
                                visited many universities in different countries and
                                participated in various industry conferences at home and
                                abroad.
                            </ProjectSectionText>
                        </div>
                    </ProjectSectionColumns>
                </ProjectSection>
                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Piye Yuan</ProjectSectionHeading>
                            <ProjectSectionText>
                                Yuan is an interesting guy with long hair. To describe
                                him, his words are better than mine.
                            </ProjectSectionText>
                            <ProjectSectionText>
                                "Now, I'm a freelancer, an English teacher, an owner of a
                                mobile bookstore, a podcast host, a writer who collects
                                stories about strangers, a couch surfer, and someone who
                                wants to combine all the cool things above and beyond.
                                “Yuan has initiated loads of fun in project courses with
                                his students at an innovative high school. From
                                integrating visual art design with sci-fi literature class
                                to translating and publishing a book, to leading study
                                trips to Malaysia and Tibet. At school, you could find
                                Yuan teaching and leading in a classroom, trash-talking
                                with students on the basketball court, playing with the
                                student band at the graduation ceremony, and taking rock
                                kids and drama aficionados to live houses and musicals.
                            </ProjectSectionText>
                            <ProjectSectionText>
                                When you see Yuan at TEDx, he'd have probably driven
                                Riddle, his mobile bookstore, across the cities and
                                countryside of China, delivering warmth to strangers.
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={`${piye} 800w, ${piye} 1440w`}
                            // placeholder={sliceSlidesPlaceholder}
                            alt="piye"
                            className="piye"
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
                                    srcSet={`${shahid} 400w, ${shahid} 898w`}
                                    placeholder={shahid}
                                    className="leona"
                                    alt=""
                                    role="presentation"
                                    sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                                />
                            </div>
                        </div>
                        <div className="slice__grid-text">
                            <ProjectSectionHeading>Shahid Anwar</ProjectSectionHeading>
                            <ProjectSectionText
                            // style={`(padding-left: ${media.mobile}px) 548px, (padding-left: ${media.tablet} 747px, 556px)`}
                            // className="last-paragraph"
                            >
                                Shahid Anwar is a teacher of Mathematics at NKCS China. He
                                has been involved in the field of education for more than
                                a decade. He did his Master’s in Space Science from
                                University of Punjab Pakistan and Post Graduate
                                Certificate in Education from University of Sunderland,
                                UK. He did not stop and is currently pursuing his Master’s
                                in teaching mathematics from University of Waterloo,
                                Canada. Shahid is a lifelong learner. After coming to
                                China in 2012, he was deeply impressed by the Chinese
                                language and culture. He taught himself Chinese and took
                                part in several Chinese competitions for foreigners
                                organized by TV and social platforms. In 2017, He won a
                                video competition with the title “life of foreigners in
                                Wuxi”. Shahid is originally from Pakistan, but he
                                considers himself as an international citizen. His
                                curiosity to learn about different cultures and people has
                                made him travel to over 40 countries from the grasslands
                                of New Zealand to the desserts of Africa. As an educator
                                and international traveler, he believes that travelling is
                                one the best forms of learning which provides us freedom,
                                self-awareness, independence, joy, and consciousness. Like
                                any other Millennial (born in 80’s and 90’s), Shahid has
                                fully adapted himself to the rapid change in the field of
                                technology, moving from floppy disks to the cloud storage.
                                As a technophile, mathematician, international traveler,
                                lifelong learner, and a common man, Shahid would like to
                                share his personal experiences about the meaning of choice
                                and how has it changed over the period of time and the
                                role of technology in making this change.
                            </ProjectSectionText>
                        </div>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection>
                    <ProjectSectionContent>
                        <ProjectTextRow>
                            <ProjectSectionHeading>Olivia Zhang</ProjectSectionHeading>
                            <Image
                                srcSet={`${olivia} 800w, ${olivia} 1440w`}
                                // placeholder={sliceSlidesPlaceholder}
                                className="olivia"
                                alt="olivia"
                                sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
                            />
                            <ProjectSectionText className="down-a-bit">
                                “Be resilient, be proactive.” As the 2021 full scholarship
                                winner, a leader of the school’s poverty relief project,
                                and NSDA campus ambassador, this 15-year-old girl at
                                Nanwai King’s College School always serves this as her
                                greatest motto. Her incredible enthusiasm in original
                                oratory has helped her win the national champion in 2021’s
                                TOC tournament following by tons of awards in NSDA. Who
                                knows that behind these glorious achievements, she had
                                suffered years from the “toxic pressure “and was even once
                                unable to get rid of depression? In her speech, Olivia’s
                                going to talk about how the small-fish-big-pond effect
                                blocks her way of self-pursuit and how we can transform
                                the toxic pressure brought by it into something benign.
                            </ProjectSectionText>
                        </ProjectTextRow>
                    </ProjectSectionContent>
                </ProjectSection>
                <ProjectSection light>
                    <ProjectSectionContent>
                        <ProjectTextRow className="algin-left">
                            <ProjectSectionHeading>Yujia Fu</ProjectSectionHeading>
                            <ProjectSectionText>
                                Ms Fu is currently working at UNESCO-ICUA as the head of
                                education development and research team. While studying at
                                Columbia University and the Graduate Institute of
                                International and Development Studies in Geneva, she has
                                developed her interest in global governance on
                                international issues. Ms. Fu focuses on using educational
                                approaches to engage young people contributing their
                                talents to solving global challenges. Now she has become
                                an outstanding leader who has a deep understanding of the
                                cross-national education sector.
                            </ProjectSectionText>
                        </ProjectTextRow>
                        <Image
                            srcSet={`${yujia} 800w, ${yujia} 1440w`}
                            className="yujia"
                            // placeholder={sliceSlidesPlaceholder}
                            alt="yujia"
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
                                    srcSet={`${leona} 400w, ${leona} 898w`}
                                    placeholder={leona}
                                    className="leona"
                                    alt=""
                                    role="presentation"
                                    sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                                />
                            </div>
                        </div>
                        <div className="slice__grid-text">
                            <ProjectSectionHeading>Leona Li</ProjectSectionHeading>
                            <ProjectSectionText
                            // style={`(padding-left: ${media.mobile}px) 548px, (padding-left: ${media.tablet} 747px, 556px)`}
                            // className="last-paragraph"
                            >
                                Currently working as an Admission Officer for Polaris
                                Youth. Ms. Li has received the Bachelor of Engineering
                                from Beijing Institute of Technology and the Master of
                                Arts at Teachers College, Columbia University. She has
                                been installed as a digital marketing intern, instructor,
                                research assistant, and volunteer teaching assistant at
                                Microsoft.Ms. Li used to work in digital marketing and
                                technology education. But she has a unique understanding
                                and determination towards freedom. Since Ms. Li decided to
                                pursue what she truly needs, she takes part in the Polaris
                                Youth community, which aims to promote the young to enter
                                the communities and participate in a variety of activities
                                by focusing on themself and the world.
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
