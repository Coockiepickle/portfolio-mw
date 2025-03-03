
import { ReactNode } from 'react';
import { Award, Star, Calendar, Trophy } from 'lucide-react';

export interface Achievement {
  icon: ReactNode;
  year: string;
  title: string;
  description: string;
  code: string;
}

export const achievements: Achievement[] = [
  {
    icon: <Trophy className="w-6 h-6 text-mw-green" />,
    year: "2024-2025",
    title: "Bachelor A.I.S.",
    description: "Awaiting results..., Institution Beaupeyrat",
    code: "MISSION_STATUS: PENDING"
  },
  {
    icon: <Award className="w-6 h-6 text-mw-green" />,
    year: "2023-2024",
    title: "D.E.C. Techniques de l'informatique",
    description: "Network channel, 80% success rate, Cégep of La Pocatière, Québec",
    code: "INTEL_LEVEL: ADVANCED"
  },
  {
    icon: <Star className="w-6 h-6 text-mw-green" />,
    year: "2021-2023",
    title: "B.T.S. S.I.O.",
    description: "Option S.I.S.R., 15,88/20, Institution Beaupeyrat",
    code: "CLEARANCE_LEVEL: HIGH"
  },
  {
    icon: <Calendar className="w-6 h-6 text-mw-green" />,
    year: "2019-2021",
    title: "Bac S.T.I.2.D.",
    description: "Option S.I.N., Mention 'Assez Bien', 13,66/20, Lycée Raoul Dautry",
    code: "FIELD_OPERATIVE: CONFIRMED"
  },
];

export const certifications: string[] = [
  "PIX",
  "C.N.I.L.",
  "A.N.S.S.I.",
  "C.C.N.A 2 & 3",
  "Cisco IoT Fundamentals",
  "Cisco Cybersecurity Fundamentals"
];

export const ongoingEducation: string[] = [
  "TypeScript Codecademy course",
  "TypeScript OpenClassroom course",
  "Tailwind CSS Coursera course",
  "T.O.E.I.C."
];
