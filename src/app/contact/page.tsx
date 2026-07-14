import { Metadata } from "next";
import { ContactPageContent } from "@/components/ContactPageContent";

export const metadata: Metadata = {
  title: "Contact Us | Clix Media",
  description:
    "Get in touch with Clix Media. Book a strategy call or ask about real estate video marketing for your market.",
};

export default function ContactPage() {
  return <ContactPageContent />;
}
