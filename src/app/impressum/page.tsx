import Footer from "@/app/components/footer";

export default function Impressum() {
    return (
        <>
            <div className="p-[clamp(2rem,6vw,6rem)] text-[1.5rem] flex flex-col gap-y-[2rem] max-w-[120rem]">
                <h1 className="text-h1 font-bolder">
                    Impressum
                </h1>

                <h3 className="text-h3 font-bolder">
                    Angaben gemäß § 5 TMG
                </h3>

                <h3 className="text-h3 font-bolder pt-[1rem]" style={{
                    lineHeight: 1.2
                }}>
                    narrengold
                </h3>

                <p>
                    Hauptstraße 26a<br />
                    59889 Eslohe
                </p>

                <p>
                    <strong>Inhaber</strong><br />
                    Thomas Böhmer
                </p>

                <p>
                    <strong>Steuer-Identifikationsnummer (Steuer-IDNr.)</strong><br />
                    61773825406
                </p>

                <p>
                    <strong>Kontakt</strong><br />
                    Telefon: +49 (0) 171 1977097<br/>
                    E-Mail: kontakt@narrengold.com
                </p>



                <h3 className="text-h3 font-bolder pt-[1rem]" style={{
                    lineHeight: 1.2
                }}>
                    Haftung für Inhalte
                </h3>

                <p>
                    Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
                </p>

                <h3 className="text-h3 font-bolder pt-[1rem]" style={{
                    lineHeight: 1.2
                }}>
                    Haftung für Links
                </h3>

                <p>
                    Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
                </p>

                <h3 className="text-h3 font-bolder pt-[1rem]" style={{
                    lineHeight: 1.2
                }}>
                    Urheberrecht
                </h3>

                <p>
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
                </p>
            </div>

            <div className="p-[clamp(2rem,6vw,6rem)] flex flex-col gap-y-[3rem]">
                <Footer />
            </div>
        </>

    );
}
