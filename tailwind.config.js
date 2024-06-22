/** @type {import('tailwindcss').Config} */
export default {
  content: [
     './index.html',
     "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
     extend: {
       fontFamily:{
         sans:["Poppins","san-seif"],
       },
       colors:{
         primary:"#f6a7b4",
         secondary:"#704149",
         third:"#025321",
         darkBrand:"#3a2327",
       },
       container:{
         center:true,
         padding:{
           default:"1rem",
           sm:"2rem",
         },
       },
 
     },
   },
   plugins: [],
 }
 
 