import { Music, BookOpen, Brain, Mic2 } from "lucide-react";
import { useTranslation } from "react-i18next";

export const HobbiesSection = () => {
  const { t } = useTranslation();
  const hobbies = t("portfolio.sections_content.hobbies", {
    returnObjects: true,
  }) as { title: string; description: string }[];

  const getIcon = (title: string) => {
    const text = title.toLowerCase();
    if (text.match(/guitar|musica|música/)) return <Music size={24} />;
    if (text.match(/read|leitura|lectura/)) return <BookOpen size={24} />;
    if (text.match(/learn|aprendizado|aprendizaje/)) return <Brain size={24} />;
    return <Mic2 size={24} />;
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "16px",
      }}
    >
      {hobbies.map((hobby, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "20px",
            background: "rgba(var(--primary-rgb), 0.03)",
            borderRadius: "12px",
            border: "1px solid rgba(var(--primary-rgb), 0.1)",
            transition: "transform 0.2s ease",
            cursor: "default",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-4px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }
        >
          <div
            style={{
              color: "var(--primary-color)",
              background: "rgba(var(--primary-rgb), 0.1)",
              width: "fit-content",
              padding: "10px",
              borderRadius: "10px",
              display: "flex",
            }}
          >
            {getIcon(hobby.title)}
          </div>

          <div>
            <h4
              style={{
                margin: "0 0 6px 0",
                fontSize: "1.05rem",
                color: "var(--primary-color)",
                fontWeight: "600",
              }}
            >
              {hobby.title}
            </h4>
            <p
              style={{
                margin: 0,
                fontSize: "0.85rem",
                opacity: 0.7,
                lineHeight: "1.5",
              }}
            >
              {hobby.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
