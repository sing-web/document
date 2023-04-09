import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaTelegramPlane } from "react-icons/fa"

const config: DocsThemeConfig = {
  logo: <span>Sing-web Document</span>,
  project: {
    link: 'https://github.com/sing-web',
  },
  chat: {
    link: 'https://t.me/sing_web',
    icon: FaTelegramPlane
  },
  docsRepositoryBase: 'https://github.com/sing-web/document',
  footer: {
    text: 'Copyright © Sing-web Team',
  },
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Sing-web Document'
    }
  }
}

export default config