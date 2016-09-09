"use strict";var __decorate=this&&this.__decorate||function(e,t,r,o){var n,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,r):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,r,o);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(c=(a<3?n(c):a>3?n(t,r,c):n(t,r))||c);return a>3&&c&&Object.defineProperty(t,r,c),c},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),ProgressBarComponent=function(){function e(){this.now=0,this.min=0,this.max=1e3}return e.prototype.ngOnDestroy=function(){clearInterval(this._interval)},e.prototype.ngOnInit=function(){var e=this;this._interval=setInterval(function(){e.now++,e.now>e.max&&(e.now=e.min)},100)},e=__decorate([core_1.Component({moduleId:module.id,selector:"progress-bar",templateUrl:"progress-bar.component.html"}),__metadata("design:paramtypes",[])],e)}();exports.ProgressBarComponent=ProgressBarComponent;