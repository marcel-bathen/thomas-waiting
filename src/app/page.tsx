import Footer from "@/app/components/footer";

export default function Home() {
    return (
        <div className="p-[clamp(2rem,6vw,6rem)] flex flex-col gap-y-[3rem]">

            <h1 className="text-h1 text-[8vw]/[1] font-bolder">
                Wir sind bald wieder erreichbar.
            </h1>

            <div className="flex flex-row flex-wrap justify-between gap-[1rem] gap-x-[2rem]">
                <a className="text-h3 flex flex-row flex-wrap items-baseline gap-[clamp(1rem,2vw,1.5rem)] gap-y-[.372rem]  transition-color duration-[.3s] hover:text-secondary" href="mailto:kontakt@narrengold.com">
                    <span className="text-[clamp(1rem,1vw,1vw)]/[1] text-gray-500">E-Mail</span> kontakt@narrengold.com
                </a>
                <a className="text-h3 flex flex-row flex-wrap items-baseline gap-[clamp(1rem,2vw,1.5rem)] gap-y-[.372rem] transition-color duration-[.3s] hover:text-secondary" href="tel:+49 (0) 171 1977097">
                    <span className="text-[clamp(1rem,1vw,1vw)]/[1] text-gray-500">Phone</span> +49 (0) 171 1977097
                </a>
            </div>

            <Footer />
        </div>
  );
}
