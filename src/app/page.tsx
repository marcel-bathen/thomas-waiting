import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <div className="absolute left-0 right-0 bottom-0 p-[clamp(2rem,6vw,6rem)] flex flex-col gap-y-[3rem]">
            <h1 className="text-h1 font-bolder">
                Wir sind eine Digital-First Agentur. Für unsere Kund:innen bauen wir Websites, E-Commerce Stores und andere digitale Erlebnisse.
            </h1>

            <div className="flex flex-row flex-wrap justify-between gap-[1rem] gap-x-[2rem]">
                <a className="text-h3 flex flex-row items-baseline gap-[clamp(1rem,2vw,1.5rem)] transition-color duration-[.3s] hover:text-secondary" href="mailto:moin@wecraft.agency">
                    <span className="text-[clamp(1rem,1vw,1vw)]/[1] text-gray-500">E-Mail</span> moin@wecraft.agency
                </a>
                <a className="text-h3 flex flex-row items-baseline gap-[clamp(1rem,2vw,1.5rem)] transition-color duration-[.3s] hover:text-secondary" href="tel:+49 (0) 1512 9088072">
                    <span className="text-[clamp(1rem,1vw,1vw)]/[1] text-gray-500">Phone</span> +49 (0) 1512 9088072
                </a>
            </div>

            <Footer />
        </div>
  );
}
