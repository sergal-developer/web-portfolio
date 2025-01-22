import { TechnologyEntity } from "./technology.entity";

export class PortfolioEntity {
    id: string = '';
    image: string = '';
    name: string = '';
    description: string = '';
    technologiesId: Array<string> = [];
    startDate: number = 0;
    endDate: number = 0;
    url: string | null = null; 
    externalUrl: string | null = null;

    //FECH DATA
    period?: string = '';
    technologies?: Array<TechnologyEntity> = [];
    typesScope?: Array<String> = [];
    _description?: string = '';
}