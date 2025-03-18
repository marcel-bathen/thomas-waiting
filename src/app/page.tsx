
export default function Home() {
  return (
    <div className="relative h-[100dvh]">
        <div className="max-w-[50vw] p-[clamp(2rem,6vw,6rem)]">
            <svg className="w-[100%] h-auto text-blue-700" x="0px" y="0px" viewBox="0 0 434.2 81.2">
                <path fill="currentColor" d="M26.9,56.2l9.6-32.5h15.8l9.4,32.5l8.7-32.5h16.1l-17.8,56H53.1l-10-35.2l-10,35.2H17.6L0,23.7h18.3L26.9,56.2   z"></path>
                <path fill="currentColor" d="M85.6,52.1c0-17.7,11.6-29.5,29.2-29.5c17.9,0,28.3,11.1,28.3,29.7v4.4h-40.2c0.8,7.6,5.7,11.5,12.9,11.5   s10.8-3.6,12.5-8.2l14.6,4.4c-3.8,10.2-12.1,16.6-27.8,16.6C96.8,80.9,85.6,69.7,85.6,52.1z M102.9,46.1h22.5   c-0.5-7.5-4-11.1-10.9-11.1C108.3,35,103.8,39,102.9,46.1z"></path>
                <path fill="currentColor" d="M171.5,51.6c0-17.3,11.7-29.1,29.7-29.1c15.1,0,23.1,7.1,26.8,18.5l-16.6,4.4c-1.3-5.3-3.8-9.5-10.1-9.5   c-7.2,0-11.5,5.9-11.5,15.4v0.7c0,9.6,3.9,15.4,11.1,15.4c6.8,0,9.7-3.8,10.9-10.1l16.6,3.9c-3.4,12-11.7,19.6-27.5,19.6   C182.4,80.9,171.5,69.5,171.5,51.6z"></path>
                <path fill="currentColor" d="M252.7,33.4c1.8-6.2,6.2-10.1,15.8-10.1h1.3v16.2h-6.6c-8.3,0-10.4,3.7-10.4,12.1v28h-18.1v-56h18.1V33.4z"></path>
                <path fill="currentColor" d="M272.2,65c0-12.6,10-15.4,21.8-17.8c9.7-2,15.3-2.4,15.7-5.5v-0.4c0-3.4-2.7-5.9-9-5.9c-6.4,0-9.6,3.2-10,7.7   v0.9h-17.2c0.2-13,10.4-21.6,27.4-21.6c16.8,0,26.2,6.9,26.2,23v34.2h-17.6V72c-3.3,5.7-9.6,9.3-18.1,9.3   C279.7,81.2,272.2,74.8,272.2,65z M309.7,58.1v-5.6c-2.7,1.4-6.8,2.3-10.6,3.2c-5,1.4-8.9,3.1-8.9,7.8c0,3.4,2.5,5.8,7,5.8   C303,69.4,309.1,66.4,309.7,58.1z"></path>
                <path fill="currentColor" d="M340.3,36.9h-8.2V23.7h8.2v-3.6c0-13.9,3.9-19.1,16.4-20.2h12.2v13.9h-3.7c-6.6,0-8.1,0.4-7.8,8.3l0.1,1.5H368   v13.2h-10.2v42.8h-17.6V36.9z"></path>
                <path fill="currentColor" d="M393.9,79.7c-11.6-0.8-13.9-6.2-14.1-16.1V36.4h-7.5V23.7h7.5V12.8l17.7-8.7v19.6h10.1v12.7h-10.2v26.4   c0,2.5,1.2,3.6,3.7,3.7h6.2v13.2H393.9z"></path>
                <path fill="currentColor" d="M434.2,79.7h-19.3V60.5h19.3V79.7z"></path>
            </svg>
        </div>

        <div className="absolute left-0 right-0 bottom-0 p-[clamp(2rem,6vw,6rem)] flex flex-col gap-y-[3rem]">
            <h1 className="text-h1 font-bolder">
                Wir sind eine Digital-First Agentur. Für unsere Kund:innen bauen wir Websites, E-Commerce Stores und andere digitale Erlebnisse.
            </h1>
            
            <div className="flex flex-row flex-wrap justify-between gap-[1rem] gap-x-[2rem]">
                <a className="text-h3 flex flex-row items-baseline gap-[1rem] transition-color duration-[.3s] hover:text-blue-700" href="mailto:moin@wecraft.agency">
                    <span className="text-[clamp(1rem,1.5vw,1.5vw)]/[1] text-primary">E-Mail</span> moin@wecraft.agency
                </a>
                <a className="text-h3 flex flex-row items-baseline gap-[1rem] transition-color duration-[.3s] hover:text-blue-700" href="tel:+49 1512 9088072">
                    <span className="text-[clamp(1rem,1.5vw,1.5vw)]/[1] text-primary">Phone</span> +49 1512 9088072
                </a>
            </div>

            <div className="text-[.75rem] mt-[1rem]">
                <strong>we craft.</strong> - Marcel Bathen - Im Eichborn 1 - 59909 Bestwig
            </div>
        </div>
    </div>
  );
}
