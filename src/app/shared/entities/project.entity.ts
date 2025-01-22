import { TechnologyEntity } from "./technology.entity";

export class ProjectEntity {
    id: string = '';
    name: string = '';
    type: string = '';
    period: string = '';
    startDate: number = 0;
    endDate: number = 0;
    duration: number = 0;
    durationFraction: string = '';
    description: string = '';
    portfolioUrl: string | null = null;
    portfolioImage: string | null = null;
    technologiesId: Array<string> = [];
    level: number = 0;
    color: string = '';

    //FECH DATA
    technologies?: Array<TechnologyEntity> = [];
    typesScope?: Array<String> = [];
}


export class ProjectTimelineEntity extends ProjectEntity {
    constructor() {
        super();
    }

    _duration?: string = '';
    _level?: string = '';
    showDetails?: string = '';
    _showDetails?: string = '';
    _color?: string = '';
    _className?: string = '';
    _description?: string = '';
}