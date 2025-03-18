export default function Footer() {
    return (
        <>
            <div className="flex flex-row flex-wrap gap-[1rem] gap-x-[2rem] justify-between mt-[1rem]">
                <div className="text-[1rem] ">
                    <strong>we craft.</strong> - Marcel Bathen - Im Eichborn 1 - 59909 Bestwig
                </div>

                <div className="text-[1rem] flex flex-wrap flex-row gap-[.5rem] gap-x-[1.5rem]">
                    <a href="/impressum" className="text-primary transition-color duration-[.3s] hover:text-secondary">
                        Impressum
                    </a>
                    <a href="/datenschutz" className="text-primary transition-color duration-[.3s] hover:text-secondary">
                        Datenschutz
                    </a>
                </div>
            </div>
        </>
    )
}