import Link from "next/link";

type FooterProps = {
    className?: string;
};

export default function Footer({ className }: FooterProps) {
    return (
        <div className={`${className} gap-4 `}>
            <p className="font-serif text-2xl text-secondary font-bold">
                JS(P)
            </p>
            <Link
                target="_blank"
                href={
                    "https://helion.pl/ksiazki/javascript-przewodnik-poznaj-jezyk-mistrzow-programowania-wydanie-vii-david-flanagan,jspp7v.htm#format/d"
                }
                className="font-serif text-2xl text-secondary font-bold hover:underline"
            >
                Książka
            </Link>
        </div>
    );
}
