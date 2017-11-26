"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var broker_action_model_1 = require("../models/broker.action.model");
var BrokerActionBuilder = /** @class */ (function () {
    function BrokerActionBuilder() {
    }
    BrokerActionBuilder.prototype.create = function (actionType, brokerType, payLoad) {
        var brokerAction = new broker_action_model_1.BrokerAction();
        brokerAction.actionType = actionType;
        brokerAction.brokerType = brokerType;
        brokerAction.payLoad = payLoad;
        return brokerAction;
    };
    BrokerActionBuilder = __decorate([
        core_1.Injectable()
    ], BrokerActionBuilder);
    return BrokerActionBuilder;
}());
exports.BrokerActionBuilder = BrokerActionBuilder;
