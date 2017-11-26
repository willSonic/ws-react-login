"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fromRoot = require("../../../data-layer/ngrx-data/reducers/index");
var layoutActions = require("../../../data-layer/ngrx-data/actions/layout.actions");
var LayoutActionTypes = require("../../shared-types/actions/layout.action.types");
var brokerlist_1 = require("./brokerlist");
var BrokerDialogStore = /** @class */ (function () {
    function BrokerDialogStore(store, brkrActnBuilder) {
        this.store = store;
        this.brkrActnBuilder = brkrActnBuilder;
        this.brokerLabel = brokerlist_1.BrokerList.BROKER_DIALOG_STORE;
    }
    BrokerDialogStore.prototype.getComponentSupplies = function () {
        return Object.assign({
            brokerLabel: this.brokerLabel,
            storeObs: {
                layoutState$: this.store.select(fromRoot.getLayoutState),
                usersessionState$: this.store.select(fromRoot.getUsersessionState)
            },
            storeDsp: {
                HIDE_LOGIN_DIALOG: this.brkrActnBuilder.create(LayoutActionTypes.HIDE_LOGIN_DIALOG, this.brokerLabel, null)
            }
        });
    };
    BrokerDialogStore.prototype.dispatchAction = function (brokerAction) {
        switch (brokerAction.actionType) {
            case LayoutActionTypes.HIDE_LOGIN_DIALOG:
                this.store.dispatch(new layoutActions.HideLoginDialog());
                break;
        }
    };
    BrokerDialogStore = __decorate([
        core_1.Injectable()
    ], BrokerDialogStore);
    return BrokerDialogStore;
}());
exports.BrokerDialogStore = BrokerDialogStore;
