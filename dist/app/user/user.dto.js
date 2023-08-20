"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserDto = void 0;
const class_validator_1 = require("class-validator");
class UserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O nome do usuário é obrigatório' }),
    (0, class_validator_1.IsString)({ message: 'O nome não pode conter numeros' }),
    (0, class_validator_1.MinLength)(3, { message: 'O nome deve ser maior ou igual a 3 caracteres' }),
    (0, class_validator_1.MaxLength)(100, { message: 'O nome deve ser menor ou igual a 100 caracteres' }),
    __metadata("design:type", String)
], UserDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'O e-mail é obrigatório' }),
    (0, class_validator_1.MaxLength)(255, { message: 'O e-mail deve ser menor ou igual a 255 caracteres' }),
    __metadata("design:type", String)
], UserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'A senha é obrigatória' }),
    (0, class_validator_1.MinLength)(4, { message: 'A senha deve ser maior ou igual a 4 caracteres' }),
    (0, class_validator_1.MaxLength)(255, { message: 'A senha deve ser menor ou igual a 8 caracteres' }),
    __metadata("design:type", String)
], UserDto.prototype, "password", void 0);
exports.UserDto = UserDto;
//# sourceMappingURL=user.dto.js.map