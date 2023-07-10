/** @type {import('tailwindcss').Config} */
module.exports = {
 content: ['./*.{html,js}'],
 theme: {
  container: {
   center: true,
   padding: '16px',
  },
  extend: {
   colors: {
    primary: '#002250',
    secondary: '#fde7d9',
    third: '#da3743',
   },
  },
 },
 plugins: [],
};
