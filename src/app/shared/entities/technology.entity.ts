import { TypeLevel, TypeScope, TypeSkill } from "./types.enum";

export class TechnologyEntity {
    id?: string = '';
    name: string = '';
    level: TypeLevel = TypeLevel.TRAINEE;
    levelName?: string = TypeLevel.TRAINEE.toString();
    years: string = '';
    image: string = '';
    type: TypeScope | null = TypeScope.ADMIN;
    color: string = '';
}

export class SkillEntity extends TechnologyEntity {
    description?: string = '';
    typeSkill: TypeSkill = TypeSkill.SOFT;
    value: number = 0;

    constructor() {
        super();
    }
}