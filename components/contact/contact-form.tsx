'use client'

import { InputGroup, InputGroupAddon, InputGroupInput, InputGroupText } from "../ui/input-group";
import { Field, FieldContent, FieldDescription, FieldError, FieldGroup, FieldLabel, FieldTitle } from "../ui/field";
import { Banknote, Loader2, Mail, Phone, Send, User } from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Grid } from "../ui/grid";
import z from "zod";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL ?? "https://n8n.example.com/webhook/contact-form";

const SERVICES = [
    { id: "website", title: "Strona internetowa", description: "Next.js · Wordpress" },
    { id: "mobile", title: "Aplikacja mobilna", description: "React Native" },
    { id: "automation", title: "Automatyzacja procesów", description: "Python · n8n · AI" },
    // { id: "custom", title: "Program na zlecenie", description: "Python · HTML" },
    { id: "hire", title: "Zatrudnienie", description: "Chcę Cię zatrudnić!" },
]

const contactFormSchema = z.object({
    name: z.string().trim().min(2, "Jak się do Ciebie zwracać?"),
    email: z.email("Podaj poprawny adres email.").trim(),
    phone: z.string().trim().optional(),
    budget: z.string().optional()
        .refine(val => !val || !isNaN(Number(val)), "Budżet musi być liczbą.")
        .refine(val => !val || Number(val) > 0, "Budżet musi być liczbą dodatnią."),
    message: z.string().trim().min(10, "Wiadomość powinna mieć co najmniej 10 znaków."),
    services: z.array(z.string()).optional()
})

type ContactFormValues = z.infer<typeof contactFormSchema>

export function ContactForm() {

    const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

    const { register, control, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
        defaultValues: {
            name: '',
            email: '',
            phone: '',
            budget: '',
            message: '',
            services: [],
        }
    })

    async function onSubmit(values: ContactFormValues) {
        setStatus("idle")
        try {
            const res = await fetch(WEBHOOK_URL, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(values),
            })
            if (!res.ok) throw new Error(`Webhook zwrócił status ${res.status}`)
            setStatus("success")
            reset()
        } catch (err) {
            setStatus("error")
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <FieldGroup>
                <Field data-invalid={!!errors.name}>
                    <FieldLabel htmlFor="name">Imię <Required /></FieldLabel>
                    <InputGroup>
                        <InputGroupInput id="name" placeholder="Jan Kowalski" aria-invalid={!!errors.name} {...register("name")} />
                        <InputGroupAddon>
                            <User />
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.name && <FieldError>{errors.name.message}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.email}>
                    <FieldLabel htmlFor="email">Adres email <Required /></FieldLabel>
                    <InputGroup>
                        <InputGroupInput type='email' id="email" placeholder="email@example.com" aria-invalid={!!errors.email} {...register("email")} />
                        <InputGroupAddon>
                            <Mail />
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.email && <FieldError>{errors.email.message}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.phone}>
                    <FieldLabel htmlFor="phone">Numer telefonu</FieldLabel>
                    <InputGroup>
                        <InputGroupInput type='tel' id="phone" placeholder="123 456 789" aria-invalid={!!errors.phone} {...register("phone")} />
                        <InputGroupAddon>
                            <Phone />
                            <InputGroupText>+48</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.budget}>
                    <FieldLabel htmlFor="budget">Budżet</FieldLabel>
                    <InputGroup>
                        <InputGroupAddon>
                            <Banknote />
                        </InputGroupAddon>
                        <InputGroupInput type='number' id="budget" placeholder="300 000" aria-invalid={!!errors.budget} {...register("budget")} />
                        <InputGroupAddon align="inline-end">
                            <InputGroupText>PLN</InputGroupText>
                        </InputGroupAddon>
                    </InputGroup>
                    {errors.budget && <FieldError>{errors.budget.message}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.message}>
                    <FieldLabel htmlFor="message">Wiadomość <Required /></FieldLabel>
                    <Textarea rows={5} id="message" placeholder="Witam, piszę w sprawie..." className="min-h-24" aria-invalid={!!errors.message} {...register("message")} />
                    {errors.message && <FieldError>{errors.message.message}</FieldError>}
                </Field>

                <Field data-invalid={!!errors.services}>
                    <FieldLabel className="text-base">Usługa</FieldLabel>
                    <Controller control={control} name="services" render={({ field }) => (
                        <Grid className="grid-cols-2 gap-5">
                            {SERVICES.map(service => {
                                const checked = field.value?.includes(service.id);
                                return (
                                    <FieldLabel key={service.id}>
                                        <Field orientation="horizontal">
                                            <Checkbox
                                                id={`checkbox-${service.id}`}
                                                checked={checked}
                                                onCheckedChange={(isChecked) => {
                                                    const next = isChecked
                                                        ? [...(field.value || []), service.id]
                                                        : (field.value || []).filter(v => v !== service.id);
                                                    field.onChange(next);
                                                }}
                                            />
                                            <FieldContent>
                                                <FieldTitle>{service.title}</FieldTitle>
                                                <FieldDescription>{service.description}</FieldDescription>
                                            </FieldContent>
                                        </Field>
                                    </FieldLabel>
                                )
                            })}
                        </Grid>
                    )} />
                    {errors.services && <FieldError>{errors.services.message}</FieldError>}
                </Field>
                <Field>
                    <Button type="submit" disabled={isSubmitting}>
                        {isSubmitting ? <>Wysyłanie... <Loader2 className="animate-spin" /></> : <>Wyślij <Send /></>}
                    </Button>

                    {status === "success" &&
                        <FieldDescription className="text-green-600">
                            Dziękuję za wiadomość! Odezwę się najszybciej jak to możliwe.
                        </FieldDescription>
                    }
                    {status === "error" &&
                        <FieldDescription className="text-red-600">
                            Coś poszło nie tak przy wysyłce. Spróbuj ponownie lub napisz bezpośrednio na email.
                        </FieldDescription>
                    }

                    <FieldDescription>
                        Wysyłając wiadomość akceptuję przekazanie danych do Jana Zagórskiego oraz kontakt z jego strony.
                    </FieldDescription>
                </Field>
            </FieldGroup>
        </form>
    )
}

function Required() {
    return (
        <span className="text-destructive" aria-hidden="true">*</span>
    )
}