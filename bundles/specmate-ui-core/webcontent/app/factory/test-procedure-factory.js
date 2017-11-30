"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var element_factory_base_1 = require("./element-factory-base");
var TestProcedure_1 = require("../model/TestProcedure");
var Id_1 = require("../util/Id");
var Url_1 = require("../util/Url");
var config_1 = require("../config/config");
var TestProcedureFactory = (function (_super) {
    __extends(TestProcedureFactory, _super);
    function TestProcedureFactory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TestProcedureFactory.prototype.create = function (parent, commit, compoundId) {
        var _this = this;
        var id = Id_1.Id.uuid;
        var url = Url_1.Url.build([parent.url, id]);
        var testProcedure = new TestProcedure_1.TestProcedure();
        testProcedure.name = config_1.Config.TESTPROCEDURE_NAME;
        testProcedure.description = config_1.Config.TESTPROCEDURE_DESCRIPTION;
        testProcedure.id = id;
        testProcedure.url = url;
        testProcedure.isRegressionTest = false;
        return this.dataService.createElement(testProcedure, true, Id_1.Id.uuid)
            .then(function () { return commit ? _this.dataService.commit("Create") : Promise.resolve(); })
            .then(function () { return testProcedure; });
    };
    return TestProcedureFactory;
}(element_factory_base_1.ElementFactoryBase));
exports.TestProcedureFactory = TestProcedureFactory;
//# sourceMappingURL=test-procedure-factory.js.map