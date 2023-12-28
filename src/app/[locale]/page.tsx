import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

export async function generateStaticParams() {
    return [{ locale: "en" }, { locale: "ko" }];
}

export default function Page({ params }: { params: { locale: string } }) {
    const { locale } = params;
    locale;
    return (
        <>
            <Card className="m-4">
                <CardHeader>
                    <CardTitle>Home</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer</p>
                </CardFooter>
            </Card>
        </>
    );
}
