import { motion } from "framer-motion";
import { ReactNode } from "react";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface SkillCardProps {
  skill: string;
  icon: ReactNode;
  experience: string;
  projects: string;
}

const SkillCard: React.FC<SkillCardProps> = ({
  skill,
  icon,
  experience,
  projects,
}) => {
  return (
    <div className="relative">
      <Tooltip>
        <TooltipTrigger asChild>
          <div className="bg-gray-800 p-4 rounded-lg text-white hover:scale-105 transition-all cursor-pointer">
            {icon}
            <h3 className="text-lg font-bold mt-2">{skill}</h3>
          </div>
        </TooltipTrigger>
        <TooltipContent className="bg-white text-black p-2 rounded-lg">
          <p>
            <strong>Experience:</strong> {experience}
          </p>
          <p>
            <strong>Projects:</strong> {projects}
          </p>
        </TooltipContent>
      </Tooltip>

      <motion.div
        className="relative w-56 h-56 bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
        whileHover={{ scale: 1.1, rotateY: 10 }}
        whileTap={{ scale: 0.95 }}
      >
        <div className="absolute top-4 left-4 text-blue-400 text-4xl">
          {icon}
        </div>

        <h3 className="text-xl font-semibold text-white mt-12">{skill}</h3>

        <motion.div className="absolute inset-0 flex flex-col justify-center items-center bg-black/80 text-white opacity-0 hover:opacity-100 transition-opacity duration-300 p-4 rounded-xl">
          <p className="text-sm">{experience}</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default SkillCard;
