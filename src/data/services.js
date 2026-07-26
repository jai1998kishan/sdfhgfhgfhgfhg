import { Home, Layers, Building, Users, Palette } from "lucide-react";

const services = [
  {
    id: "01",
    title: "Residential Architecture",
    description:
      "Architectural design for private houses, residential developments, and bespoke apartments.",
    discipline: "ARCHITECTURE",
    metric: "48+ HOUSES",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=1000&fit=crop",
    scope: [
      "Site analysis & feasibility",
      "Concept & schematic design",
      "Planning permission drawings",
      "Construction documentation",
    ],
  },
  {
    id: "02",
    title: "Interior Architecture",
    description:
      "Interior architecture for private residences, boutique hospitality, retail, and workplace projects.",
    discipline: "INTERIOR DESIGN",
    metric: "62+ INTERIORS",
    icon: Layers,
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=1000&fit=crop",
    scope: [
      "Space planning & layout",
      "Material & lighting palette",
      "Furniture specification",
      "Contractor coordination",
    ],
  },
  {
    id: "03",
    title: "Heritage Renovation",
    description:
      "Listed building renovation and contemporary intervention for private heritage homes and protected residential settings.",
    discipline: "RENOVATION",
    metric: "38+ LISTED",
    icon: Building,
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=1000&fit=crop",
    scope: [
      "Heritage & conservation survey",
      "Statutory consent applications",
      "Sympathetic material matching",
      "Structural intervention design",
    ],
  },
  {
    id: "04",
    title: "Hospitality Interiors",
    description:
      "Interior architecture for boutique hotels, restaurants, and members' clubs, designed with the rigour of residential interior architecture.",
    discipline: "INTERIOR DESIGN",
    metric: "AVG. 14 MONTHS",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=1000&fit=crop",
    scope: [
      "Guest experience mapping",
      "FF&E sourcing & procurement",
      "Kitchen & back-of-house planning",
      "Operator handover",
    ],
  },
  {
    id: "05",
    title: "Home Staging",
    description:
      "Home staging and styling for completed residences, ready for sale, lease, or editorial photography.",
    discipline: "INTERIOR DESIGN",
    metric: "AVG. 5 DAYS",
    icon: Home,
    image:
      "https://images.unsplash.com/photo-1618220179428-22790b461013?w=800&h=1000&fit=crop",
    scope: [
      "Furniture & prop hire",
      "Room-by-room styling plan",
      "On-site install & dress",
      "Photography-ready walkthrough",
    ],
  },
  {
    id: "06",
    title: "Material Consultation",
    description:
      "Material consultation, palette development, and finish specification for new builds, renovations, and interior projects.",
    discipline: "INTERIOR DESIGN",
    metric: "120+ PALETTES",
    icon: Palette,
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&h=1000&fit=crop",
    scope: [
      "Palette & finish concept",
      "Sample boarding",
      "Supplier & tolerance research",
      "Site-condition testing",
    ],
  },
];

export default services;
