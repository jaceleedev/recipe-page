import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          50: '#FFF7FB',
          800: '#7A284E',
        },
        stone: {
          100: '#F3E5D7',
          150: '#E3DDD7',
          600: '#5F564D',
          900: '#312E2C',
        },
        brown: {
          800: '#854632',
        },
        white: '#FFFFFF',
      },
      screens: {
        tablet: { max: '768px' },
        mobile: { max: '375px' },
      },
      fontFamily: {
        youngSerif: ['var(--font-young-serif)'],
        outfit: ['var(--font-outfit)'],
      },
      spacing: {
        100: '8px',
        150: '12px',
        200: '16px',
        300: '24px',
        400: '32px',
        500: '40px',
        600: '48px',
        1600: '128px',
      },
    },
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const typographyComponents = {
        '.text-preset-1': {
          fontFamily: 'var(--font-young-serif)',
          fontSize: '40px',
          fontWeight: '400',
          lineHeight: '100%',
        },
        '.text-preset-2': {
          fontFamily: 'var(--font-young-serif)',
          fontSize: '28px',
          fontWeight: '400',
          lineHeight: '100%',
        },
        '.text-preset-3': {
          fontFamily: 'var(--font-outfit)',
          fontSize: '20px',
          fontWeight: '600',
          lineHeight: '100%',
        },
        '.text-preset-4': {
          fontFamily: 'var(--font-outfit)',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: '150%',
        },
        '.text-preset-5': {
          fontFamily: 'var(--font-outfit)',
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '150%',
        },
      };

      addComponents(typographyComponents);
    }),
  ],
};
export default config;
