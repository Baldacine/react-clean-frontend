import { Trophy, ExternalLink } from "lucide-react";
import { Button } from "@/shared/components/Button/Button";
import { useTranslation } from "react-i18next";

export const AwardsSection = () => {
  const { t } = useTranslation();
  const awards = t("portfolio.sections_content.awards", {
    returnObjects: true,
  }) as {
    title: string;
    description: string;
    image: string;
    link: string;
  }[];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: "20px",
      }}
    >
      {awards.map((award, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            flexDirection: "column",
            background:
              "var(--background-secondary, rgba(255, 255, 255, 0.05))",
            borderRadius: "16px",
            border: "1px solid rgba(var(--primary-rgb), 0.1)",
            overflow: "hidden",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          }}
        >
          <div style={{ width: "100%", height: "200px", position: "relative" }}>
            <img
              src={award.image}
              alt={award.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />

            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                background: "rgba(0, 0, 0, 0.6)",
                backdropFilter: "blur(4px)",
                borderRadius: "50%",
                padding: "8px",
                display: "flex",
                zIndex: 2,
              }}
            >
              <Trophy size={20} color="#FFD700" />
            </div>

            {award.title.includes("2º") && (
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  background: "#C0C0C0",
                  color: "#333",
                  padding: "4px 12px",
                  borderRadius: "20px",
                  fontSize: "0.75rem",
                  fontWeight: "bold",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                }}
              >
                🥈 2nd Place
              </div>
            )}
          </div>

          <div
            style={{
              padding: "20px",
              flex: 1,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <h4
              style={{
                margin: "0 0 10px 0",
                fontSize: "1.1rem",
                color: "var(--primary-color)",
              }}
            >
              {award.title}
            </h4>

            <p
              style={{
                margin: "0 0 20px 0",
                fontSize: "0.85rem",
                opacity: 0.8,
                lineHeight: "1.6",
                flex: 1,
              }}
            >
              {award.description}
            </p>

            <Button
              variant="outline"
              size="small"
              onClick={() => window.open(award.link, "_blank")}
              style={{ width: "100%", gap: "8px" }}
            >
              <ExternalLink size={14} />
              {t("portfolio.sections_content.use_cases.view_project")}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};
