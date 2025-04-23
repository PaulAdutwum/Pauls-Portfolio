import { motion } from "framer-motion";
import {
  FileCode2,
  BarChart2,
  Cloud,
  Server,
  BookOpen,
  Figma,
  Palette,
  Music,
  Camera,
  BookIcon,
  Code,
  Gamepad,
  Volleyball,
} from "lucide-react";
import { football } from "@lucide/lab";

// Interests/Hobbies array
const interests = [
  {
    name: "Soccer",
    icon: football,
    color: "from-green-500 to-emerald-700",
  },
  {
    name: "Volleyball",
    icon: Volleyball,
    color: "from-amber-500 to-orange-700",
  },
  { name: "Piano", icon: Music, color: "from-indigo-500 to-blue-700" },
  { name: "Video Games", icon: Gamepad, color: "from-purple-500 to-pink-700" },
  { name: "Art & Design", icon: Palette, color: "from-pink-500 to-rose-700" },
  { name: "Photography", icon: Camera, color: "from-amber-500 to-orange-700" },
  { name: "Mathematics", icon: Code, color: "from-green-500 to-emerald-700" },
];
