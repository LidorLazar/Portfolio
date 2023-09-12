import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      boxShadow: {
       'buttonSubmit' : '0px 20px 45px 0px rgba(255, 101, 36, 0.20);'
      },
    },
  },
  plugins: [],
}
export default config
