import { chakra, AspectRatio } from '@chakra-ui/react'
import { Section, SectionProps, SectionTitle } from 'src/landingpage/components/section'

interface DemoProps extends Omit<SectionProps, 'title' | 'children'> {
  title?: React.ReactNode
  description?: React.ReactNode
  videoUrl: string
}

export const Demo: React.FC<DemoProps> = (props) => {
  const {
    title = 'Demo',
    description,
    videoUrl,
    ...sectionProps
  } = props

  return (
    <Section id="demo" {...sectionProps}>
      <SectionTitle title={title} description={description} />
      
      <AspectRatio maxW="100%" ratio={16 / 9}>
        <iframe
          title="Product Demo"
          src={videoUrl}
          allowFullScreen
          style={{ borderRadius: '8px' }}
        />
      </AspectRatio>
    </Section>
  )
}
