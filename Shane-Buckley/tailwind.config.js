/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './docs/**/*.{js,jsx,ts,tsx}',
    './blog/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: ['class', '[data-theme="dark"]'], // Support Docusaurus dark mode
  theme: {
    extend: {
      colors: {
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)'
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'var(--destructive-foreground)'
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)'
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)'
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)'
        },
        // Docusaurus colors
        prismBackground: 'var(--prism-background-color)',
        dsForeground: 'var(--foreground-color)',
        dsBackground: 'var(--background-color)',
        dsPrimaryText: 'var(--primary-text-color)',
        dsSecondaryText: 'var(--secondary-text-color)',
        dsHighlightedCodeLineBg: 'var(--docusaurus-highlighted-code-line-bg)',
        dsMenuLinkActive: 'var(--menu-link-active)',
        dsDocsFgBase: 'var(--docs-fg-base)',
        dsDocsearchMutedColor: 'var(--docsearch-muted-color)',
        // ifm colors
        ifmBackground: 'var(--ifm-background-color)',
        ifmPrimary: 'var(--ifm-color-primary)',
        ifmPrimaryDark: 'var(--ifm-color-primary-dark)',
        ifmPrimaryDarker: 'var(--ifm-color-primary-darker)',
        ifmPrimaryDarkest: 'var(--ifm-color-primary-darkest)',
        ifmPrimaryLight: 'var(--ifm-color-primary-light)',
        ifmPrimaryLighter: 'var(--ifm-color-primary-lighter)',
        ifmPrimaryLightest: 'var(--ifm-color-primary-lightest)',
        ifmFooterBackground: 'var(--ifm-footer-background-color)',
        ifmFooterLink: 'var(--ifm-footer-link-color)',
        ifmMenuColorActive: 'var(--ifm-menu-color-active)',
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: 'calc(var(--radius) - 4px)',
      },
      textColor: {
        primary: 'var(--primary-text-color)',
        secondary: 'var(--secondary-text-color)',
      },
      fontSize: {
        ifmCodeFontSize: 'var(--ifm-code-font-size)',
        ifmH1FontSize: 'var(--ifm-h1-font-size)',
        resume: 'var(--resume-text-size)',
      },
      fontFamily: {
        ifmFontFamilyBase: 'var(--ifm-font-family-base)',
      },
      padding: {
        ifmMenuLinkPaddingVertical: 'var(--ifm-link-padding-vertical)',
      },
      gradientColorStops: {
        dsDocsearchKeyGradient: 'var(--docsearch-key-gradient)',
      },
      boxShadow: {
        dsDocsearchKeyShadow: 'var(--docsearch-key-shadow)',
        ifmGlobalShadowTl: 'var(--ifm-global-shadow-tl)',
      }
    }
  },
  plugins: [
    require('tailwindcss-animate'),
    require('@tailwindcss/typography'),
  ]
}
