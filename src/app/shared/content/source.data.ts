
import { CompanyEntity } from "../entities/company.entity";
import { PortfolioEntity } from "../entities/portfolio.entity";
import { ProjectEntity } from "../entities/project.entity";
import { SkillEntity, TechnologyEntity } from "../entities/technology.entity";
// DATA
import { CompaniesData } from "./companies.data";
import { PortfolioData } from "./portfolio.data";
import { ProjectsData } from "./projects.data";
import { SkillsData } from "./skills.data";
import { technologiesData } from "./technologies.data";

export class SourceData {
    getCompanies(): Array<CompanyEntity> {
        const data: Array<CompanyEntity> = CompaniesData;
        return data;
    }

    getPortfolio(): Array<PortfolioEntity> {
        const technologies = this.getTechnologies();
        const data: Array<PortfolioEntity> = PortfolioData;

        data.map(item => {
            item.period = this.getPeriod(item.startDate, item.endDate);
            item.technologies = this.joinTechnologies(item.technologiesId, technologies, item);
            item.typesScope = this.joinTypesScope(item);
        })
        return data;
    }

    getProjects(): Array<ProjectEntity> {
        const technologies = this.getTechnologies();
        const data: Array<ProjectEntity> = ProjectsData;

        data.map(item => {
            item.period = this.getPeriod(item.startDate, item.endDate);
            item.technologies = this.joinTechnologies(item.technologiesId, technologies, item);
        })
        return data;
    }

    getSkills(): Array<SkillEntity> {
        const data: Array<SkillEntity> = SkillsData;
        return data;
    }

    getTechnologies(): Array<TechnologyEntity> {
        const data: Array<TechnologyEntity> = technologiesData;
        return data;
    }

    private getPeriod(start?: number | string, end?: number | string) {
        const startDate = start ? new Date(start) : null;
        const endDate = end ? new Date(end) : null;
        const isSame =
            startDate && endDate && startDate.getFullYear() == endDate.getFullYear();
        let period = `${startDate ? startDate.getFullYear() : ""}${startDate && endDate ? " - " : ""}${endDate ? endDate.getFullYear() : ""}`;
        return isSame ? `${startDate.getFullYear()}` : period;
    }

    private joinTechnologies(technologiesId: Array<string>, technologiesSource: Array<TechnologyEntity>, baseItem?: ProjectEntity | PortfolioEntity): Array<TechnologyEntity> {
        let technologies: Array<TechnologyEntity> = [];

        technologiesId.map(id => {
            const tech = technologiesSource.find((th) => th.id == id);
            if (tech) {
                technologies.push(tech);

                const techType: string = tech.type ? tech.type?.toString() : '';
                if (baseItem && baseItem.typesScope?.includes(techType)) {
                    baseItem.typesScope?.push(techType)
                }
            }
        });

        return technologies;
    }

    private joinTypesScope(source: ProjectEntity | PortfolioEntity): Array<string> {
        let typesScope: Array<string> = [];

        source.technologies?.map(tech => {
            const techType: string = tech.type ? tech.type.toString() : '';
            if (!typesScope.includes(techType)) {
                typesScope.push(techType)
            }
        });

        return typesScope;
    }
}