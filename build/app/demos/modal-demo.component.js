"use strict";var __decorate=this&&this.__decorate||function(e,t,o,a){var n,r=arguments.length,c=r<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,o):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,o,a);else for(var d=e.length-1;d>=0;d--)(n=e[d])&&(c=(r<3?n(c):r>3?n(t,o,c):n(t,o))||c);return r>3&&c&&Object.defineProperty(t,o,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),ModalDemoComponent=function(){function e(){this.id="",this.active=!1}return e.prototype.close=function(){this.active=!1},__decorate([core_1.Input(),__metadata("design:type",String)],e.prototype,"id",void 0),__decorate([core_1.Input(),__metadata("design:type",Boolean)],e.prototype,"active",void 0),e=__decorate([core_1.Component({moduleId:module.id,selector:"modal-demo",templateUrl:"modal-demo.component.html"}),__metadata("design:paramtypes",[])],e)}();exports.ModalDemoComponent=ModalDemoComponent;