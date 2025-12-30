import { useTranslation } from "react-i18next";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { useGithubRepos } from "@/hooks/useGithubRepos";
import { Button } from "@/shared/components/Button/Button";
import styled from "styled-components";

export const RepoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 280px), 1fr));
  gap: ${({ theme }) => theme.spacing.md};
  margin-top: ${({ theme }) => theme.spacing.lg};
  width: 100%;
  min-width: 0;
`;

export const RepoCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }

  a {
    color: ${({ theme }) => theme.colors.gray500};
    transition: color 0.2s;
    &:hover {
      color: ${({ theme }) => theme.colors.primary};
    }
  }
`;

export const RepoCard = styled.div`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray300}44;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  p {
    font-size: ${({ theme }) => theme.typography.fontSizes.sm};
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.8;
    margin: 0;
    line-height: 1.5;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.typography.fontSizes.xs};
    color: ${({ theme }) => theme.colors.gray500};

    .stats {
      display: flex;
      gap: ${({ theme }) => theme.spacing.md};

      span {
        display: flex;
        align-items: center;
        gap: 4px;
      }
    }

    .language {
      display: flex;
      align-items: center;
      gap: 6px;

      &::before {
        content: "";
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }
`;

export function GithubStats() {
  const { t } = useTranslation();
  const { data, isLoading, isError, refetch } = useGithubRepos("Baldacine");

  if (isLoading) return <p>{t("common.loading")}</p>;

  if (isError)
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <p style={{ marginBottom: "1rem" }}>
          {t("portfolio.sections_content.use_cases.error")}
        </p>
        <Button variant="outline" size="small" onClick={() => refetch()}>
          {t("portfolio.sections_content.use_cases.retry")}
        </Button>
      </div>
    );

  return (
    <RepoGrid>
      {data?.map((repo) => (
        <RepoCard
          key={repo.id}
          onClick={() =>
            window.open(repo.html_url, "_blank", "noopener,noreferrer")
          }
        >
          <div>
            <RepoCardHeader>
              <strong>{repo.name}</strong>
              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                title={t("portfolio.sections_content.use_cases.view_project")}
              >
                <ExternalLink size={16} />
              </a>
            </RepoCardHeader>
            <p>
              {repo.description ||
                t("portfolio.sections_content.use_cases.no_description")}
            </p>
          </div>

          <footer>
            <span className="language">{repo.language || "Code"}</span>
            <div className="stats">
              <span>
                <Star size={14} /> {repo.stargazers_count}
              </span>
              <span>
                <GitFork size={14} /> {repo.forks_count}
              </span>
            </div>
          </footer>
        </RepoCard>
      ))}
    </RepoGrid>
  );
}
