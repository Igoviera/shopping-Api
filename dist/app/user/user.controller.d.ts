/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { UserDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    createUser(user: UserDto): Promise<import("mongoose").Document<unknown, {}, import("../../Mongo/Schemas/user.schema").User> & Omit<import("../../Mongo/Schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    allUser(): Promise<Omit<import("mongoose").Document<unknown, {}, import("../../Mongo/Schemas/user.schema").User> & Omit<import("../../Mongo/Schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
    userById(idUser: string): Promise<import("mongoose").Document<unknown, {}, import("../../Mongo/Schemas/user.schema").User> & Omit<import("../../Mongo/Schemas/user.schema").User & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
