import * as React from 'react'

import { ColorModeScript } from '@chakra-ui/react'
import '@fontsource-variable/inter'
import { Metadata } from 'next'
import App from 'next/app'
import { cookies } from 'next/headers'

import { AppKit } from '../landingpage/components/context/web3modal'
import { LemonSqueezyScript } from '../lib/lemonsqueezy'
import { Provider } from './provider'

export const metadata: Metadata = {
  title: {
    template: '%s | Saas UI',
    default: 'OLE Protocol',
  },
  icons: {
    icon: '/favicons/favicon-32x32.png',
    apple: '/favicons/apple-touch-icon.png',
  },
}

export default async function AppRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = cookies()

  const colorMode = (cookieStore.get('chakra-ui-color-mode')?.value ??
    'dark') as 'light' | 'dark'

  return (
    <html data-theme={colorMode} style={{ colorScheme: colorMode }}>
      <body className={`chakra-ui-${colorMode}`}>
        <AppKit>
          <LemonSqueezyScript />
          <ColorModeScript initialColorMode={colorMode} type="cookie" />
          <Provider>{children}</Provider>
        </AppKit>
      </body>
    </html>
  )
}
