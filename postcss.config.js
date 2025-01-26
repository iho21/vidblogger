module.exports = {
  plugins: [
    require('lightningcss'), 
    require('@tailwindcss/postcss')({
      
      // Your Tailwind CSS configuration here (you can copy this from your existing tailwind.config.js)
      content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
      ],
      theme: {
        extend: {
          colors: {
            'primary-600': '#6C47FF',
            'primary-700': '#5639CC',
            'primary-50': '#F4F2FF',
            'success-700': '#027A48',
            'success-50': '#ECFDF3',
          },
          fontFamily: {
            sans: ['var(--font-geist-sans)'],
            mono: ['var(--font-geist-mono)'],
          },
        },
      },
      plugins: [],
    }),
  ],
};