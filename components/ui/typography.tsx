import { HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

/*
p  - text-lg  / font-normal
h6 - text-lg  / font-medium
h5 - text-xl  / font-medium
h4 - text-2xl / font-semibold
h3 - text-3xl / font-semibold
h2 - text-4xl / font-bold
h1 - text-5xl / font-bold
*/

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
};

type ParagraphProps = HTMLAttributes<HTMLParagraphElement>;

export function P({ className, children, ...props }: ParagraphProps) {
    return (
        <p
            className={cn("text-base font-normal leading-relaxed", className)}
            {...props}
        >
            {children}
        </p>
    );
}

export function H6({ as: Tag = "h6", className, children, ...props }: HeadingProps) {
    return (
        <Tag
            className={cn("text-base font-medium leading-snug", className)}
            {...props}
        >
            {children}
        </Tag>
    );
}

export function H5({ as: Tag = "h5", className, children, ...props }: HeadingProps) {
    return (
        <Tag
            className={cn("text-lg font-medium leading-snug", className)}
            {...props}
        >
            {children}
        </Tag>
    );
}

export function H4({ as: Tag = "h4", className, children, ...props }: HeadingProps) {
    return (
        <Tag
            className={cn("text-xl font-semibold leading-snug", className)}
            {...props}
        >
            {children}
        </Tag>
    );
}

export function H3({ as: Tag = "h3", className, children, ...props }: HeadingProps) {
    return (
        <Tag
            className={cn("text-2xl font-semibold leading-tight", className)}
            {...props}
        >
            {children}
        </Tag>
    );
}

export function H2({ as: Tag = "h2", className, children, ...props }: HeadingProps) {
    return (
        <Tag
            className={cn("text-3xl font-bold leading-tight", className)}
            {...props}
        >
            {children}
        </Tag>
    );
}

export function H1({ as: Tag = "h1", className, children, ...props }: HeadingProps) {
    return (
        <Tag
            className={cn("text-4xl font-bold leading-none", className)}
            {...props}
        >
            {children}
        </Tag>
    );
}
