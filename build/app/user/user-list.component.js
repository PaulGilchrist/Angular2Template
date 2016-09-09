"use strict";var __decorate=this&&this.__decorate||function(e,t,s,r){var o,n=arguments.length,i=n<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,s):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,s,r);else for(var c=e.length-1;c>=0;c--)(o=e[c])&&(i=(n<3?o(i):n>3?o(t,s,i):o(t,s))||i);return n>3&&i&&Object.defineProperty(t,s,i),i},__metadata=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},core_1=require("@angular/core"),user_service_1=require("../services/user.service"),UserListComponent=function(){function e(e){this._userService=e,this.onSelect=new core_1.EventEmitter,this.sortType="firstName",this.sortReverse=!1,this.searchString=""}return e.prototype.ngOnDestroy=function(){var e=_.where(this._userService.users,{isDirty:!0});e.length>0&&$.confirm({title:"Confirm!",content:"Save all modified users?",confirmButtonClass:"btn-info",cancelButtonClass:"btn-danger",closeIcon:!0,icon:"fa fa-warning",confirm:function(){_.each(e,function(e){e.isDirty=!1}),$.alert({title:"Saved!",content:"All modified users have been saved",autoClose:"confirm|1000",backgroundDismiss:!0})},cancel:function(){$.alert({title:"Canceled!",content:"Modified users have not been saved",autoClose:"confirm|1000",backgroundDismiss:!0})}})},e.prototype.ngOnInit=function(){this.isBusy=!0,this.getUsers(),this.isListOpen=!0},e.prototype.changeSort=function(e){e===this.sortType?this.sortReverse=!this.sortReverse:this.sortType=e},e.prototype.getUsers=function(){var e=this;this.isBusy=!0,this._userService.getUsers().subscribe(function(t){return e.isBusy=!1},function(t){return e.errorMessage=t})},e.prototype.selectUser=function(e){this.onSelect.emit(e)},__decorate([core_1.Output(),__metadata("design:type",Object)],e.prototype,"onSelect",void 0),e=__decorate([core_1.Component({moduleId:module.id,selector:"user-list",styleUrls:["user-list.component.css"],templateUrl:"user-list.component.html"}),__metadata("design:paramtypes",[user_service_1.UserService])],e)}();exports.UserListComponent=UserListComponent;