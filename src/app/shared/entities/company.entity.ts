import { TypeScope } from "./types.enum";

export class CompanyEntity {
    id: string = '';
    name: string = '';
    type?: TypeScope = TypeScope.ADMIN;
    typeDescription: string = '';
    period:  string = '';
    duration: number = 0;
    durationFraction: string = '0';
    image: string | null = null;
    startDate: number = 0;
    endDate: number = 0;
}

export class CompanyTimelineEntity extends CompanyEntity {
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