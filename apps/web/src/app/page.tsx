'use client'

import * as React from 'react'

import {
  Box,
  ButtonGroup,
  Card,
  CardBody,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Stat,
  StatArrow,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard, Button,
} from '@chakra-ui/react'
import { Sparkline } from '@saas-ui/charts'
import { Br, Link } from '@saas-ui/react'
import Image from 'next/image'
import {
  FiArrowRight,
  FiEye,
  FiGlobe,
  FiLayers,
  FiLock,
  FiShield,
  FiShoppingBag,
  FiTrendingUp,
  FiUserCheck,
} from 'react-icons/fi'
import { Typewriter } from 'react-simple-typewriter'
import { ButtonLink } from 'src/landingpage/components/button-link/button-link'
import { Faq } from 'src/landingpage/components/faq'
import { Demo } from 'src/landingpage/components/demo'
import { Features } from 'src/landingpage/components/features'
import { BackgroundGradient } from 'src/landingpage/components/gradients/background-gradient'
import { Hero } from 'src/landingpage/components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from 'src/landingpage/components/highlights'
import { Layout } from 'src/landingpage/components/layout'
import { FallInPlace } from 'src/landingpage/components/motion/fall-in-place'
import { Pricing } from 'src/landingpage/components/pricing/pricing'
import { SEO } from 'src/landingpage/components/seo/seo'
import {
  Testimonial,
  Testimonials,
} from 'src/landingpage/components/testimonials'
import { Em } from 'src/landingpage/components/typography'
import faq from 'src/landingpage/data/faq'
import pricing from 'src/landingpage/data/pricing'
import testimonials from 'src/landingpage/data/testimonials'

import UserSectionComponent from '../landingpage/components/user-benefits/user-benefits'
import UserBenefits from '../landingpage/components/user-benefits/user-benefits'
import {useAuth} from "@app/features/common/hooks/use-auth";

const Home = () => {
  return (
    <Layout>
      <Box>
        <SEO
          title="OLE Protocol - Decentralized Education Lending Platform"
          description="Join the open-source project revolutionizing education financing through blockchain technology."
        />
        <Box>
          <HeroSection />
          <HighlightsSection />
          <FeaturesSection />
          {/*<PricingSection />*/}
          <UserSectionComponent />
          <FaqSection />
          <DemoSection />
        </Box>
      </Box>
    </Layout>
  )
}


const HeroSection: React.FC = () => {
  const {logIn} = useAuth();
  return (
      <Box position="relative" overflow="hidden">
        <BackgroundGradient height="100%" zIndex="-1" />
        <Container maxW="container.xl" pt={{ base: 60, lg: 40}} pb="30">
          <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
            <Hero
                id="home"
                justifyContent="flex-start"
                px="0"
                title={
                  <FallInPlace>
                    Open Lending for <Br />{' '}
                    <Typewriter
                        words={[
                          'Education',
                          'Students',
                          'Future Engineers',
                          'Future Doctors',
                          'Educators',
                          'Everyone',
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                  </FallInPlace>
                }
                description={
                  <FallInPlace delay={0.4} fontWeight="medium">
                    Empowering education with secure, decentralized loans. The{' '}
                    <Em>OLE Protocol</Em> makes funding your future easier and more
                    transparent.
                  </FallInPlace>
                }
            >
              <FallInPlace delay={0.8}>
                <HStack pt="4" pb="12" spacing="8">
                  <Link href="https://opencampus.xyz">
                    <Image
                        src="/img/openCampusLogo.png"
                        alt="Open Campus Logo"
                        height={35}
                        width={140}
                    />
                  </Link>
                </HStack>
                <ButtonGroup spacing={4} alignItems="center">
                  <Button colorScheme="primary" size="lg" onClick={() => window.location.href = "https://x.com/intent/user?screen_name=OLEProtocol"}>
                  Follow on 𝕏 for updates
                  </Button>
                </ButtonGroup>
              </FallInPlace>
            </Hero>
            <Box
                height="600px"
                position="absolute"
                display={{ base: 'none', lg: 'block' }}
                left={{ lg: '60%', xl: '55%' }}
                width="80vw"
                maxW="1100px"
                margin="0 auto"
            >
              <FallInPlace delay={1}>
                <Box overflow="hidden" height="100%" boxShadow="-9px 12px 20px 1px rgba(0, 0, 0, 0.25) !important">
                  <Image
                      src="/screenshots/dashboard.png"
                      layout="fixed"
                      width={1200}
                      height={762}
                      alt="Screenshot of a the dashboard"
                      quality="75"
                      priority
                  />
                </Box>
              </FallInPlace>
            </Box>
          </Stack>
        </Container>
        <Features
            id="benefits"
            columns={[1, 2, 4]}
            iconSize={4}
            innerWidth="container.xl"
            pt="20"
            features={[
              {
                title: 'Impact-Driven Lending',
                icon: FiTrendingUp,
                description:
                    'Invest in education with confidence. Our platform ensures that every loan directly contributes to meaningful learning opportunities, fostering the next generation of global leaders.',
                iconPosition: 'left',
                delay: 1,
              },
              {
                title: 'Transparent Borrower Insights',
                icon: FiEye,
                description:
                    'Access verified borrower profiles with Open Campus ID, ensuring informed lending decisions and alignment with educational goals.',
                iconPosition: 'left',
                delay: 0.6,
              },
              {
                title: 'Loans Secured by EDU Tokens',
                icon: FiLock,
                description:
                    'Borrowers use EDU tokens as collateral to access loans, ensuring a secure and decentralized way to fund education.',
                iconPosition: 'left',
                delay: 0.8,
              },
              {
                title: 'Tokenized RWAs (Coming Soon)',
                icon: FiLayers,
                description:
                    'Soon, use tokenized real-world assets as collateral, offering even more flexibility and security in education finance.',
                iconPosition: 'left',
                delay: 1.1,
              },
            ]}
            reveal={FallInPlace}
        />
      </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @saas-ui/react')

  const data = [
    {
      date: 'Jan 1',
      value: 1475,
    },
    {
      date: 'Jan 8',
      value: 1936,
    },
    {
      date: 'Jan 15',
      value: 1555,
    },
    {
      date: 'Jan 22',
      value: 1557,
    },
    {
      date: 'Jan 29',
      value: 1977,
    },
    {
      date: 'Feb 5',
      value: 2315,
    },
    {
      date: 'Feb 12',
      value: 1736,
    },
    {
      date: 'Feb 19',
      value: 1981,
    },
    {
      date: 'Feb 26',
      value: 2581,
    },
    {
      date: 'Mar 5',
      value: 2592,
    },
    {
      date: 'Mar 12',
      value: 2635,
    },
    {
      date: 'Mar 19',
      value: 2074,
    },
    {
      date: 'Mar 26',
      value: 2984,
    },
    {
      date: 'Apr 2',
      value: 2254,
    },
    {
      date: 'Apr 9',
      value: 3159,
    },
    {
      date: 'Apr 16',
      value: 2804,
    },
    {
      date: 'Apr 23',
      value: 2602,
    },
    {
      date: 'Apr 30',
      value: 2840,
    },
    {
      date: 'May 7',
      value: 3299,
    },
    {
      date: 'May 14',
      value: 3487,
    },
    {
      date: 'May 21',
      value: 3439,
    },
    {
      date: 'May 28',
      value: 3095,
    },
    {
      date: 'Jun 4',
      value: 3252,
    },
    {
      date: 'Jun 11',
      value: 4096,
    },
    {
      date: 'Jun 18',
      value: 4193,
    },
    {
      date: 'Jun 25',
      value: 4759,
    },
  ]

  return (
    <Highlights id="">
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Empowering Education Finance"
      >
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Unlock the potential of a{' '}
            <Em>$3.8 trillion global student loan market</Em> by lending to
            promising students and educational initiatives. The{' '}
            <Em>OLE Protocol</Em> allows you to seamlessly provide loans using
            tokenized real-world assets (RWAs) and EDU tokens as collateral.
            Borrowers benefit from <Em>transparent, flexible loans</Em>, while
            lenders enjoy <Em>secure returns and governance opportunities</Em>.
            Join the future of decentralized education finance!
          </Text>
          {/*<Flex
                        rounded="full"
                        borderWidth="1px"
                        flexDirection="row"
                        alignItems="center"
                        py="1"
                        ps="8"
                        pe="2"
                        bg="primary.900"
                        _dark={{ bg: 'gray.900' }}
                    >
                        <Box>
                            <Text color="yellow.400" display="inline">
                                yarn add
                            </Text>{' '}
                            <Text color="cyan.300" display="inline">
                                @saas-ui/react
                            </Text>
                        </Box>
                        <IconButton
                            icon={hasCopied ? <FiCheck /> : <FiCopy />}
                            aria-label="Copy install command"
                            onClick={onCopy}
                            variant="ghost"
                            ms="4"
                            isRound
                            color="white"
                        />
                    </Flex>*/}
        </VStack>
      </HighlightsItem>
      <HighlightsItem>
        <Stat w="full" h="full">
          <StatLabel>Average Student Loan Debts</StatLabel>
          <StatHelpText pos="absolute" top="0" right="0">
            <StatArrow type="increase" /> 7.2%
          </StatHelpText>
          <StatNumber>$37,570</StatNumber>
          <Sparkline data={data} height="150px" mx="-4" />
        </Stat>
      </HighlightsItem>
      <HighlightsItem title="Built on Trust and Transparency">
        <Text color="muted" fontSize="lg">
          OLE Protocol leverages Open Campus' EDU Chain to ensure every
          transaction is transparent and traceable. For borrowers, this means
          accessing funds securely while showcasing their educational goals
          through verifiable credentials. For lenders, it means knowing exactly
          where their capital is going, improving trust and accountability in
          every loan provided.
        </Text>
      </HighlightsItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Your Gateway to Decentralized Lending"
      >
        <Text color="muted" fontSize="lg">
          Whether you're a lender looking to diversify your portfolio or a
          borrower in need of educational funding, the OLE Protocol is designed
          to make the process seamless and secure. With tokenized RWAs and EDU
          collateral, we provide a robust platform where education meets
          decentralized finance. Empower your future or support the next
          generation of learners with OLE.
        </Text>
        <Wrap mt="8">
          {[
            'Higher Education',
            'Vocational Training',
            'Online Learning',
            'Study Abroad Programs',
            'Continuing Education',
            'Professional Certifications',
            'STEM Programs',
            'Arts and Humanities',
            'Technical Schools',
            'Language Learning',
            'Research and Development',
            'Educational Workshops',
            'Internships and Apprenticeships',
            'Educational Startups',
            'E-learning Platforms',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="gray"
              rounded="full"
              borderWidth="1px"
              px="3"
              py="1"
              bg="gray.900"
              color="white"
              _dark={{ bg: 'gray.700' }}
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="how-it-works"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Not Your Typical Lending Platform
        </Heading>
      }
      description={
        <>
          OLE Protocol is <Em>revolutionizing education finance.</Em> By
          leveraging blockchain technology, we're transforming how students and
          educators access funding, making the process transparent, efficient,
          and equitable for all.
        </>
      }
      align="left"
      columns={[1, 2]}
      iconSize={4}
      features={[
        {
          title: 'Decentralized Lending for Education.',
          icon: FiGlobe,
          description:
            'We provide a secure and transparent platform for lenders and borrowers to connect directly. With the integration of Open Campus, every transaction is backed by blockchain, ensuring trust and transparency.',
          variant: 'inline',
        },
        {
          title: 'Tokenized Assets as Collateral.',
          icon: FiShield,
          description:
            'Borrowers can use real-world assets and EDU tokens as collateral, opening up a new world of possibilities for funding education. This not only lowers the barrier for accessing loans but also maximizes the use of existing assets.',
          variant: 'inline',
        },
        {
          title: 'Dynamic Loan Marketplace.',
          icon: FiShoppingBag,
          description:
            'Our platform allows lenders to explore diverse opportunities within the $3.8 trillion global student loan market. With OLE Protocol, you can diversify your investment portfolio while supporting the next generation of learners.',
          variant: 'inline',
        },
        {
          title: 'Governance and Staking with LP Tokens.',
          icon: FiUserCheck,
          description:
            'Lenders are rewarded with LP tokens, granting them governance rights and staking opportunities within the OLE ecosystem. Be a part of decision-making processes and earn passive income through staking.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

const DemoSection = () => {
  return <Demo 
  title="The OLE Protocol in Action"
  description="Watch the demo to get a better understanding of the OLE Protocol."
  videoUrl="https://www.youtube.com/embed/44eGPnfVTRs?si=dCa0zRjzWnGpaYCS" 
/>
}


export default Home
