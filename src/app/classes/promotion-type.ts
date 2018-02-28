import {PromotionTypeInfo} from './promotion-type-info';

export class PromotionType {
    // id: number;
    // name: string;
    // display_name: string;
    // promotion_type_info: PromotionTypeInfo[];
    // created_at: string;
    // updated_at: string;
    public constructor(
        public id: number = null,
        public name: string = '',
        public display_name: string = '',
        public promotion_type_info: PromotionTypeInfo[] = [] as PromotionTypeInfo[],
        public created_at: string = '',
        public updated_at: string = ''
    ) {}
}
