import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { FaTelegramPlane } from "react-icons/fa"

const config: DocsThemeConfig = {
  logo: <span>Sing-web Project</span>,
  project: {
    link: 'https://github.com/sing-web',
  },
  chat: {
    link: 'https://t.me/sing_web',
    icon: FaTelegramPlane,
  },
  docsRepositoryBase: 'https://github.com/sing-web/document',
  footer: {
    text: 'Nextra Docs Template',
  },
}

export default config
