import { useTranslation } from "react-i18next";
import { Star, GitFork, ExternalLink } from "lucide-react";
import { useGithubRepos } from "@/features/portfolio/hooks/useGithubRepos";
import { Button } from "@/shared/components/Button/Button";
import styled from "styled-components";

const excludedRepositoryNames = new Set(["webpink", "wepink"]);

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
  gap: ${({ theme }) => theme.spacing.sm};
  margin-bottom: 8px;

  strong {
    color: ${({ theme }) => theme.colors.primary};
    font-size: ${({ theme }) => theme.typography.fontSizes.md};
    font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  }

`;

export const RepoIdentity = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  min-width: 0;
`;

export const RepositoryLabel = styled.span`
  color: ${({ theme }) => theme.colors.gray500};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  letter-spacing: 0.04em;
  text-transform: uppercase;
`;

export const CardLinkHint = styled.span`
  display: inline-flex;
  flex-shrink: 0;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.typography.fontSizes.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeights.bold};
  white-space: nowrap;
`;

export const RepoCard = styled.a`
  background: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.gray300}44;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  padding: ${({ theme }) => theme.spacing.md};
  display: flex;
  flex-direction: column;
  cursor: pointer;
  color: inherit;
  text-decoration: none;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.primary};
    outline: 2px solid ${({ theme }) => theme.colors.primary};
    outline-offset: 2px;
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
  const visibleRepositories = data?.filter(
    (repository) =>
      !excludedRepositoryNames.has(repository.name.toLowerCase()),
  );

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
      {visibleRepositories?.map((repo) => {
        const hasRepositoryStats =
          repo.stargazers_count > 0 || repo.forks_count > 0;

        return (
          <RepoCard
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <RepoCardHeader>
                <RepoIdentity>
                  <RepositoryLabel>
                    {t(
                      "portfolio.sections_content.use_cases.repository_label",
                    )}
                  </RepositoryLabel>
                  <strong>{repo.name}</strong>
                </RepoIdentity>
                <CardLinkHint aria-hidden="true">
                  {t(
                    "portfolio.sections_content.use_cases.view_repository",
                  )}
                  <ExternalLink size={14} />
                </CardLinkHint>
              </RepoCardHeader>
              <p>
                {repo.description ||
                  t("portfolio.sections_content.use_cases.no_description")}
              </p>
            </div>

            <footer>
              <span className="language">{repo.language || "Code"}</span>
              {hasRepositoryStats && (
                <div className="stats">
                  {repo.stargazers_count > 0 && (
                    <span
                      aria-label={t(
                        "portfolio.sections_content.use_cases.stars",
                        { count: repo.stargazers_count },
                      )}
                    >
                      <Star size={14} aria-hidden="true" />
                      {repo.stargazers_count}
                    </span>
                  )}
                  {repo.forks_count > 0 && (
                    <span
                      aria-label={t(
                        "portfolio.sections_content.use_cases.forks",
                        { count: repo.forks_count },
                      )}
                    >
                      <GitFork size={14} aria-hidden="true" />
                      {repo.forks_count}
                    </span>
                  )}
                </div>
              )}
            </footer>
          </RepoCard>
        );
      })}
    </RepoGrid>
  );
}
