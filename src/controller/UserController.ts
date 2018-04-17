import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {SysUsers} from "../entity/SysUsers";

export class UserController {

    private userRepository = getRepository(SysUsers);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.find({
            skip: 5, // offset
            take: 10 // limit
        });
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.findOneById(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.userRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        await this.userRepository.removeById(request.params.id);
    }
}