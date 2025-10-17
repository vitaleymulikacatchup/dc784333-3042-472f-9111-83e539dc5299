export default function App() {
   return (
     <div className="__className_eda989 antialiased">
      <header className="!fixed top-6 left-1/2 -translate-x-1/2 z-50 navigation-background rounded w-90 md:w-60 lg:w-75 h-[3.5rem] flex justify-between items-center pl-8 pr-[0.75rem] gap-4">
  <a href="/home">
    <img alt="My Logo" width="100" height="100" decoding="async" data-nimg="1" className="h-5 w-auto cursor-pointer" style={{ color: 'transparent' }} src="/path/to/my/logo.svg" />
  </a>
  <div className="flex items-center gap-2">
    <button className="button text-xs blue-button px-6 transition-all duration-200 hover:-translate-y-[3px]" aria-expanded="false" aria-haspopup="dialog">
      Sign Up Now
    </button>
  </div>
</header>
     </div>
   );
 }