import { BookOpen } from "lucide-react";
import Link from "next/link";

type NavProps = {
    className?: string;
};

export default function Nav({ className }: NavProps) {
    return (
        <div className={className}>
            <Link href="/">
                <h1 className="font-serif text-4xl text-primary flex items-center gap-3 font-bold">
                    <BookOpen className="w-10 h-10" /> JS(P)
                </h1>
            </Link>
        </div>
    );
}
