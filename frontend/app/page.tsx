"use client";

import {
    BookOpen,
    FileCode2,
    Hash,
    Code2,
    ListTree,
    BoxSelect,
    Layers,
    Braces,
    Settings2,
    Workflow,
    DatabaseBackup,
    Repeat,
    Clock,
    Cpu,
    LayoutTemplate,
    Terminal,
    Wrench,
    ChevronRight,
} from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

type SubChapter = {
    id: string;
    title: string;
};

type Chapter = {
    id: string;
    title: string;
    icon: ReactNode;
    subChapters: SubChapter[];
};

export const Chapters: Chapter[] = [
    {
        id: "1",
        title: "1. Wprowadzenie",
        icon: <BookOpen className="w-5 h-5" />,
        subChapters: [
            { id: "1.1", title: "1.1 Poznajemy JavaScript" },
            { id: "1.2", title: "1.2 Środowisko uruchomieniowe" },
            { id: "1.3", title: "1.3 Zarys języka" },
        ],
    },
    {
        id: "2",
        title: "2. Struktura leksykalna",
        icon: <FileCode2 className="w-5 h-5" />,
        subChapters: [
            { id: "2.1", title: "2.1 Zestaw znaków" },
            { id: "2.2", title: "2.2 Komentarze" },
            { id: "2.3", title: "2.3 Literały" },
            { id: "2.4", title: "2.4 Identyfikatory i słowa zastrzeżone" },
            { id: "2.5", title: "2.5 Opcjonalne średniki" },
        ],
    },
    {
        id: "3",
        title: "3. Typy, wartości i zmienne",
        icon: <Hash className="w-5 h-5" />,
        subChapters: [
            { id: "3.1", title: "3.1 Typy liczbowe" },
            { id: "3.2", title: "3.2 Tekst" },
            { id: "3.3", title: "3.3 Wartości logiczne" },
            { id: "3.4", title: "3.4 null i undefined" },
            { id: "3.5", title: "3.5 Obiekt globalny" },
            { id: "3.6", title: "3.6 Niezmienność typów pierwotnych" },
            { id: "3.7", title: "3.7 Konwersje typów" },
            { id: "3.8", title: "3.8 Deklaracje zmiennych" },
        ],
    },
    {
        id: "4",
        title: "4. Wyrażenia i operatory",
        icon: <Code2 className="w-5 h-5" />,
        subChapters: [
            { id: "4.1", title: "4.1 Wyrażenia podstawowe" },
            { id: "4.2", title: "4.2 Tworzenie obiektów i tablic" },
            { id: "4.3", title: "4.3 Wywołania funkcji" },
            { id: "4.4", title: "4.4 Operatory arytmetyczne" },
            { id: "4.5", title: "4.5 Operatory relacyjne" },
            { id: "4.6", title: "4.6 Operatory logiczne" },
            { id: "4.7", title: "4.7 Wyrażenia przypisania" },
            { id: "4.8", title: "4.8 Ocena wyrażeń (eval)" },
        ],
    },
    {
        id: "5",
        title: "5. Instrukcje",
        icon: <ListTree className="w-5 h-5" />,
        subChapters: [
            { id: "5.1", title: "5.1 Instrukcje wyrażeń" },
            { id: "5.2", title: "5.2 Instrukcje złożone i puste" },
            { id: "5.3", title: "5.3 Instrukcje warunkowe" },
            { id: "5.4", title: "5.4 Pętle" },
            { id: "5.5", title: "5.5 Instrukcje skoku" },
            { id: "5.6", title: "5.6 Inne instrukcje" },
        ],
    },
    {
        id: "6",
        title: "6. Obiekty",
        icon: <BoxSelect className="w-5 h-5" />,
        subChapters: [
            { id: "6.1", title: "6.1 Tworzenie obiektów" },
            { id: "6.2", title: "6.2 Odpytywanie i ustawianie właściwości" },
            { id: "6.3", title: "6.3 Usuwanie właściwości" },
            { id: "6.4", title: "6.4 Testowanie właściwości" },
            { id: "6.5", title: "6.5 Wyliczanie właściwości" },
            { id: "6.6", title: "6.6 Rozszerzanie obiektów" },
            { id: "6.7", title: "6.7 Serializacja obiektów" },
            { id: "6.8", title: "6.8 Metody obiektów" },
        ],
    },
    {
        id: "7",
        title: "7. Tablice",
        icon: <Layers className="w-5 h-5" />,
        subChapters: [
            { id: "7.1", title: "7.1 Tworzenie tablic" },
            { id: "7.2", title: "7.2 Zapis i odczyt" },
            { id: "7.3", title: "7.3 Tablice rzadkie" },
            { id: "7.4", title: "7.4 Długość tablicy" },
            { id: "7.5", title: "7.5 Dodawanie i usuwanie elementów" },
            { id: "7.6", title: "7.6 Iterowanie po tablicach" },
            { id: "7.7", title: "7.7 Tablice wielowymiarowe" },
            { id: "7.8", title: "7.8 Metody tablicowe" },
        ],
    },
    {
        id: "8",
        title: "8. Funkcje",
        icon: <Braces className="w-5 h-5" />,
        subChapters: [
            { id: "8.1", title: "8.1 Definiowanie funkcji" },
            { id: "8.2", title: "8.2 Wywoływanie funkcji" },
            { id: "8.3", title: "8.3 Argumenty i parametry" },
            { id: "8.4", title: "8.4 Funkcje jako wartości" },
            { id: "8.5", title: "8.5 Funkcje jako przestrzenie nazw" },
            { id: "8.6", title: "8.6 Domknięcia (closures)" },
            { id: "8.7", title: "8.7 Właściwości, metody i konstruktor" },
        ],
    },
    {
        id: "9",
        title: "9. Klasy",
        icon: <Settings2 className="w-5 h-5" />,
        subChapters: [
            { id: "9.1", title: "9.1 Klasy i prototypy" },
            { id: "9.2", title: "9.2 Słowo kluczowe class" },
            { id: "9.3", title: "9.3 Dodawanie metod do istniejących klas" },
            { id: "9.4", title: "9.4 Podklasy (dziedziczenie)" },
        ],
    },
    {
        id: "10",
        title: "10. Moduły",
        icon: <Workflow className="w-5 h-5" />,
        subChapters: [
            {
                id: "10.1",
                title: "10.1 Moduły jako obiekty, domknięcia i IIFE",
            },
            { id: "10.2", title: "10.2 Moduły w Node" },
            { id: "10.3", title: "10.3 Moduły ES6" },
        ],
    },
    {
        id: "11",
        title: "11. Biblioteka standardowa",
        icon: <DatabaseBackup className="w-5 h-5" />,
        subChapters: [
            { id: "11.1", title: "11.1 Set i Map" },
            { id: "11.2", title: "11.2 Tablice typowane" },
            { id: "11.3", title: "11.3 Wyrażenia regularne" },
            { id: "11.4", title: "11.4 Daty i czas" },
            { id: "11.5", title: "11.5 Klasy błędów" },
            { id: "11.6", title: "11.6 Serializacja JSON" },
            { id: "11.7", title: "11.7 Interfejs Intl" },
            { id: "11.8", title: "11.8 API Console" },
            { id: "11.9", title: "11.9 Timery i URL" },
        ],
    },
    {
        id: "12",
        title: "12. Iteratory i Generatory",
        icon: <Repeat className="w-5 h-5" />,
        subChapters: [
            { id: "12.1", title: "12.1 Jak działają iteratory" },
            { id: "12.2", title: "12.2 Implementowanie iterowalnych obiektów" },
            { id: "12.3", title: "12.3 Generatory" },
            { id: "12.4", title: "12.4 Zaawansowane funkcje generatorów" },
        ],
    },
    {
        id: "13",
        title: "13. Asynchroniczny JS",
        icon: <Clock className="w-5 h-5" />,
        subChapters: [
            {
                id: "13.1",
                title: "13.1 Asynchroniczność z użyciem wywołań zwrotnych",
            },
            { id: "13.2", title: "13.2 Obiekty Promise" },
            { id: "13.3", title: "13.3 async i await" },
            { id: "13.4", title: "13.4 Iteracja asynchroniczna" },
        ],
    },
    {
        id: "14",
        title: "14. Metaprogramowanie",
        icon: <Cpu className="w-5 h-5" />,
        subChapters: [
            { id: "14.1", title: "14.1 Atrybuty właściwości" },
            { id: "14.2", title: "14.2 Rozszerzalność obiektów" },
            { id: "14.3", title: "14.3 Atrybut prototype" },
            { id: "14.4", title: "14.4 Symbole dobrze znane" },
            { id: "14.5", title: "14.5 Szablony tagowane" },
            { id: "14.6", title: "14.6 Obiekty Proxy i interfejs Reflect" },
        ],
    },
    {
        id: "15",
        title: "15. JS w przeglądarkach",
        icon: <LayoutTemplate className="w-5 h-5" />,
        subChapters: [
            { id: "15.1", title: "15.1 Model DOM" },
            { id: "15.2", title: "15.2 Zdarzenia" },
            { id: "15.3", title: "15.3 Skryptowanie CSS" },
            { id: "15.4", title: "15.4 Geometria dokumentu" },
            { id: "15.5", title: "15.5 Zdarzenia sieciowe (Fetch/SSE)" },
            { id: "15.6", title: "15.6 Przechowywanie danych" },
            { id: "15.7", title: "15.7 Web Workers" },
            { id: "15.8", title: "15.8 Canvas i SVG" },
            { id: "15.9", title: "15.9 Historia nawigacji" },
        ],
    },
    {
        id: "16",
        title: "16. Node.js",
        icon: <Terminal className="w-5 h-5" />,
        subChapters: [
            { id: "16.1", title: "16.1 Wprowadzenie do Node" },
            { id: "16.2", title: "16.2 Zdarzenia w Node" },
            { id: "16.3", title: "16.3 Bufory" },
            { id: "16.4", title: "16.4 Strumienie" },
            { id: "16.5", title: "16.5 System plików" },
            { id: "16.6", title: "16.6 HTTP" },
            { id: "16.7", title: "16.7 Procesy potomne" },
        ],
    },
    {
        id: "17",
        title: "17. Narzędzia i rozszerzenia",
        icon: <Wrench className="w-5 h-5" />,
        subChapters: [
            { id: "17.1", title: "17.1 Lintery" },
            { id: "17.2", title: "17.2 Formattery" },
            { id: "17.3", title: "17.3 Narzędzia testujące" },
            { id: "17.4", title: "17.4 Narzędzia budujące" },
            { id: "17.5", title: "17.5 TypeScript" },
        ],
    },
];

export default function Home() {
    return (
        <div className="min-h-screen w-full bg-background p-8">
            <main className="max-w-4xl mx-auto flex flex-col items-center">
                <div className="w-full border border-primary rounded-lg p-6 bg-card shadow-2xl">
                    <h2 className="font-serif text-2xl text-primary mb-6 border-b border-primary pb-2">
                        Spis Treści
                    </h2>

                    <div className="flex flex-col gap-4">
                        {Chapters.map((chapter) => (
                            <details
                                key={chapter.id}
                                className="group border border-primary rounded-md bg-background transition-all"
                            >
                                <summary className="flex items-center gap-3 p-4 cursor-pointer hover:bg-muted/50 rounded-md outline-none list-none [&::-webkit-details-marker]:hidden">
                                    <div className="p-2 bg-muted rounded-md text-secondary">
                                        {chapter.icon}
                                    </div>

                                    <Link
                                        href={`/${chapter.id}`}
                                        onClick={(e) => e.stopPropagation()}
                                        className="font-serif text-xl text-secondary font-medium flex-1 hover:underline decoration-primary transition-all"
                                    >
                                        {chapter.title}
                                    </Link>

                                    <ChevronRight className="w-5 h-5 text-muted-foreground group-open:rotate-90 transition-transform" />
                                </summary>

                                <div className="flex flex-col px-4 pb-4 gap-2 border-t border-accent pt-4">
                                    {chapter.subChapters.map((sub) => (
                                        <Link
                                            href={`/${sub.id}`}
                                            key={sub.id}
                                            className="flex items-center gap-2 p-3 rounded-md hover:bg-muted/80 text-secondary hover:text-primary transition-colors text-md"
                                        >
                                            <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                                            {sub.title}
                                        </Link>
                                    ))}
                                </div>
                            </details>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
