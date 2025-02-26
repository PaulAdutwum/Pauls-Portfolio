import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  Mail,
  FileText,
} from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const MENU_ITEMS = [
  { icon: Home, label: "Home", href: "#hero" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function Navigation() {
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <span className="text-xl font-bold"> Meet Paul</span>

          <div className="hidden md:flex space-x-1">
            {MENU_ITEMS.map(({ icon: Icon, label, href }) => (
              <Button
                key={label}
                variant="ghost"
                size="sm"
                asChild
                className="flex items-center gap-2"
              >
                <a href={href}>
                  <Icon className="h-4 w-4" />
                  <span>{label}</span>
                </a>
              </Button>
            ))}
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="flex items-center gap-2"
            >
              <a
                href="/_Paul_Adutwum_Resume.py.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FileText className="h-4 w-4" />
                <span>Resume</span>
              </a>
            </Button>
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="md:hidden flex space-x-1">
              {MENU_ITEMS.map(({ icon: Icon, label, href }) => (
                <Button
                  key={label}
                  variant="ghost"
                  size="icon"
                  asChild
                  className="h-9 w-9"
                >
                  <a href={href}>
                    <Icon className="h-4 w-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
