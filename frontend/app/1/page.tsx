import { BookOpen, FileText } from "lucide-react";

const glossaryTerms = [
    {
        term: "JavaScript",
        definition:
            "Wysokopoziomowy, dynamiczny i interpretowany język programowania, stworzony pierwotnie do ożywiania stron WWW.",
    },
    {
        term: "ECMAScript",
        definition:
            "Formalna specyfikacja i standard języka, na którym opiera się JavaScript (np. specyfikacje ES6, ES2020).",
    },
    {
        term: "Interpreter (Silnik JS)",
        definition:
            "Program wykonujący kod JavaScript krok po kroku. W przeglądarce Chrome jest to silnik V8, w Firefoksie – SpiderMonkey.",
    },
    {
        term: "Node.js",
        definition:
            "Środowisko uruchomieniowe pozwalające na wykonywanie kodu JavaScript poza przeglądarką internetową (np. do pisania serwerów backendowych).",
    },
    {
        term: "Literał",
        definition:
            'Wartość wpisana bezpośrednio w kodzie źródłowym programu, np. liczba 12, tekst "Witaj" czy wartość logiczna true.',
    },
    {
        term: "Zmienna",
        definition:
            "Nazwany kontener służący do przechowywania i modyfikowania danych. Tworzymy je za pomocą słów kluczowych let lub const.",
    },
    {
        term: "Obiekt",
        definition:
            "Podstawowa struktura danych w JS. Zbiór powiązanych ze sobą właściwości (par klucz-wartość).",
    },
    {
        term: "Metoda",
        definition:
            "Funkcja, która jest przypisana do konkretnego obiektu i zazwyczaj służy do pracy z danymi tego obiektu.",
    },
    {
        term: "API (Application Programming Interface)",
        definition:
            "Zestaw gotowych funkcji i narzędzi dostarczanych przez środowisko (np. funkcje do obsługi okna przeglądarki lub systemu plików w Node).",
    },
    {
        term: "Konsola",
        definition:
            "Narzędzie deweloperskie służące do testowania kodu i wyświetlania wiadomości diagnostycznych (np. za pomocą console.log).",
    },
];

export default function Chapter1() {
    return (
        <article className="max-w-4xl mx-auto p-8 flex flex-col gap-10">
            {/* NAGŁÓWEK */}
            <header className="border border-accent py-8 text-center shadow-xl rounded-lg px-4">
                <h1 className="font-serif text-3xl md:text-4xl text-primary font-bold mb-4">
                    Rozdział 1: Wprowadzenie
                </h1>
                <p className="text-lg md:text-xl font-sans text-secondary max-w-2xl mx-auto leading-relaxed">
                    JavaScript to język programowania sieci Web. Zdecydowana
                    większość nowoczesnych witryn korzysta z niego, a każda
                    współczesna przeglądarka posiada wbudowany interpreter tego
                    języka.
                </p>
            </header>

            {/* OPIS ROZDZIAŁU */}
            <section className=" border border-accent p-6 md:p-8 rounded-lg shadow-xl">
                <h2 className="flex items-center gap-3 font-serif text-2xl text-primary mb-4 border-b border-accent pb-3">
                    <BookOpen className="w-7 h-7" /> Zarys rozdziału
                </h2>
                <div className="text-foreground leading-relaxed space-y-4 font-sans text-lg">
                    <p>
                        Ten rozdział stanowi panoramiczny przegląd całego języka
                        JavaScript. Zanim zagłębimy się w detale dotyczące typów
                        danych, funkcji czy klas, autor David Flanagan zabiera
                        nas na szybką wycieczkę po fundamentalnych koncepcjach.
                    </p>
                    <p>
                        Dowiadujemy się tutaj, czym różni się standard{" "}
                        <strong>ECMAScript</strong> od samego JavaScriptu, jak
                        uruchamiać kod w przeglądarce za pomocą konsoli
                        deweloperskiej, oraz jak korzystać ze środowiska{" "}
                        <strong>Node.js</strong>. Rozdział zawiera również
                        krótki "samouczek" pokazujący podstawową składnię,
                        deklarowanie zmiennych i kontrolowanie przepływu
                        programu, co stanowi fundament do zrozumienia reszty
                        książki.
                    </p>
                </div>
            </section>

            {/* GLOSARIUSZ */}
            <section className="border border-accent p-6 md:p-8 rounded-lg shadow-xl">
                <h2 className="flex items-center gap-3 font-serif text-2xl text-primary mb-6 border-b border-accent pb-3">
                    <FileText className="w-7 h-7" /> Terminologia (Glosariusz)
                </h2>

                <dl className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                    {glossaryTerms.map((item, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <dt className="font-bold text-foreground text-lg flex items-start gap-2">
                                <div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                                {item.term}
                            </dt>
                            <dd className="text-secondary text-base leading-relaxed pl-4 border-l-2 border-accent ml-1">
                                {item.definition}
                            </dd>
                        </div>
                    ))}
                </dl>
            </section>
        </article>
    );
}
