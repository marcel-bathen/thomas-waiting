import Image from "@/app/components/ui/image";

export default function Home() {
  return (
    <div className="relative h-[100dvh]">
        <div className="max-w-[50vw] p-[clamp(2rem,6vw,6rem)]">
            <Image src={'logo.png'} index={1} aspectWidth={2994} aspectHeight={562}></Image>
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
