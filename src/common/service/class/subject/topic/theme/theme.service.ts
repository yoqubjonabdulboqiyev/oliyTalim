import { BeAnObject, IObjectWithTypegooseFunction, ModelType } from "@typegoose/typegoose/lib/types";
import { Document, QueryOptions, Types } from "mongoose";
import { ThemeError } from "../../../../../db/model/class/subject/topic/theme/theme.error";
import { Theme, ThemeModel } from "../../../../../db/model/class/subject/topic/theme/theme.model";
import { ThemeDto } from "../../../../../validation/dto/class/subject/topic/theme/theme.dto";
import { PagingDto } from "../../../../../validation/dto/pagingDto";
import { BaseServise } from "../../../../BaseService";


export class ThemeServise extends BaseServise<Theme>{
    constructor(model: ModelType<Theme>) {
        super(model)
    }

    public async ThemeFindById(id) {
        const theme = await this.findById(id);
        if (!theme) throw ThemeError.NotFound(id);
        return theme;
    }

    public async createTheme(data) {
        try {
            const theme = await super.create(data);
            return theme;
        } catch (e) {
            if (e.code == 11000) throw ThemeError.AlreadyExsist(Object.keys(e.keyPattern))
            return e;
        }
    }
    public async updateTheme(id, data: ThemeDto, options?: QueryOptions) {
        try {
            await this.ThemeFindById(id)
            const updatemavzu = await this.updateOne(id, data, options);
            return updatemavzu
        } catch (e) {
            if (e.code == 11000) throw ThemeError.AlreadyExsist(Object.keys(e.keyPattern))
            return e;
        }
    }

    public async deleteTheme(id) {
        await this.ThemeFindById(id)
        const deleteTheme = await this.deleteOne(id)
        return deleteTheme
    }

    public async getPaging<T>(dto: PagingDto) {
        let query: any = { isDeleted: false };

        const $projection = {
            $project: {
                name: 1,
            },
        };

        const $pipline = [$projection];

        return await this.findPaging(query, dto, $pipline);
    }

    public async getById<T>(id: string) {
        const $match = {
            $match: {
                _id: new Types.ObjectId(id),
                isDeleted: false
            }
        }
        const $projection = {
            $project: {
                name: 1,
            },
        };

        const $pipline = [$match, $projection];

        return (await this.aggregate($pipline)).shift();
    }


}

export const themeService = new ThemeServise(ThemeModel)