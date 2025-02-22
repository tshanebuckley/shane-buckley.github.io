import React from 'react'
import { GetImg } from '../../../lib/constants'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'

export default function FooterLayout({ style, links, logo, copyright }) {
  // since the footer exits on every page, this is a bit of a hack to load the favicon
  const { siteConfig } = useDocusaurusContext();
  GetImg(siteConfig.favicon);

  return (
    <footer className='bg-ifmFooterBackground'>
      <div className='container max-w-7xl py-10'>
        {links}
        {(logo || copyright) && (
          <div className='footer__bottom text--center'>
            {logo && <div className='margin-bottom--sm'>{logo}</div>}
            {copyright}
          </div>
        )}
      </div>
    </footer>
  )
}
