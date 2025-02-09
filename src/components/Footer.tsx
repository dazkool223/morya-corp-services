import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.png";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <Container className="py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src={logo}
              alt="Company Logo"
              width={50}
              height={50}
              className="mb-4"
            />
            <p className="text-sm text-muted-foreground mb-4">
              Your company description goes here. This is a brief overview of
              what your company does and its mission.
            </p>
            <Button
              asChild
              variant="outline"
              className="bg-primary-foreground text-secondary"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm hover:underline">
                  Services
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Contact Information</h3>
            <address className="not-italic text-sm text-muted-foreground space-y-3">
              <p className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>
                  Jai Ganesh Vision, Br-1/328,
                  <br />
                  3rd Floor. Akurdi, Pune, IN 411035
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>(+91) 77678 17086</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hr.moryacorp@gmail.com</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri: 9AM-5PM</span>
              </p>
            </address>
          </div>
          <div className="w-full h-64 md:h-64">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.3522867946253!2d73.7819478250775!3d18.648180982470315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9cf97e77f49%3A0x3b50529c2227b411!2sJAI%20GANESH%20VISION%2C%20Shubhashri%20Residency%2C%20Ganga%20Nagar%2C%20Akurdi%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411035!5e0!3m2!1sen!2sin!4v1739090430433!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <Separator className="text-white my-8" />
        <div className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Made with ❤️ by Morya Corp
        </div>
      </Container>
    </footer>
  );
}
