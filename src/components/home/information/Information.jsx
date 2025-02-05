import {
  Building,
  CalendarDays,
  Gamepad,
  Gamepad2,
  Globe,
  Users,
} from "lucide-react";
import Link from "next/link";

const infoSections = [
  {
    icon: CalendarDays,
    title: "Release Date",
    content: {
      type: "text",
      data: "February 26, 2016",
    },
    className: "flex md:items-center border-y px-2 py-4",
  },
  {
    icon: Users,
    title: "No. of players",
    content: {
      type: "links",
      data: [
        { text: "Single System(1)", href: "/" },
        { text: "Local wireless (1)", href: "/" },
        { text: "Online (1-4)", href: "/" },
      ],
    },
    className: "flex md:items-center border-y px-2 py-4",
  },
  {
    icon: Gamepad,
    title: "Genre",
    content: {
      type: "links",
      data: [
        { text: "Role-playing", href: "/" },
        { text: "Simulation", href: "/" },
      ],
    },
    className: "flex md:items-center border-y px-2 py-4",
  },
  {
    icon: Building,
    title: "Publisher",
    content: {
      type: "links",
      data: [{ text: "ConcernedApe", href: "/" }],
    },
    className: "flex md:items-center border-y px-2 py-4",
  },
  {
    icon: Gamepad2,
    title: "Play Modes",
    content: {
      type: "text",
      data: "TV mode, Tabletop mode, Handheld mode",
    },
    className: "flex md:items-center border-y px-2 py-4",
  },
  {
    icon: Globe,
    title: "Supported languages",
    content: {
      type: "text",
      data: "English, French, German, Italian, Japanese, Korean, Portuguese, Russian, Simplified Chinese, Spanish, Traditional Chinese",
    },
    className: "flex md:items-center border-y px-2 py-4",
  },
];

const Information = () => {
  return (
    <div className="w-full">
      <div className="md-container">
        {infoSections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div key={index} className={section.className}>
              <div className="flex w-1/2 items-center space-x-3">
                <Icon className="w-8 h-8" />
                <h1 className="text-lg font-semibold">{section.title}</h1>
              </div>
              <div className="w-3/4">
                {section.content.type === "text" ? (
                  <p className="text-gray-500 text-sm">
                    {section.content.data}
                  </p>
                ) : (
                  <div className="space-x-2">
                    {section.content.data.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.href}
                        className="text-main hover:text-main-hover font-bold underline underline-offset-4"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Information;
