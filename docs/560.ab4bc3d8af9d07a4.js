"use strict";(self.webpackChunkveloce_ang=self.webpackChunkveloce_ang||[]).push([[560],{9560:(y,p,i)=>{i.r(p),i.d(p,{ProductsPageModule:()=>P});var g=i(6814),d=i(4670),t=i(4946),f=i(5333),u=i(2848),m=i(2623),x=i(467),l=i(95);function h(n,r){1&n&&t._UZ(0,"div",23)}function C(n,r){1&n&&(t.TgZ(0,"div",24),t._uU(1," please choose cups size "),t.qZA())}function b(n,r){if(1&n){const e=t.EpF();t.TgZ(0,"section",6)(1,"div",7),t._UZ(2,"img",8),t.YNc(3,h,1,0,"div",9),t.qZA(),t.TgZ(4,"div",10),t._uU(5),t.TgZ(6,"div",11)(7,"label",12),t._uU(8),t.qZA()()(),t.TgZ(9,"div",13)(10,"input",14),t.NdJ("ngModelChange",function(c){const a=t.CHM(e).$implicit;return t.KtG(a.choosenSize=c)}),t.qZA(),t.TgZ(11,"label",15),t._uU(12),t.qZA(),t.TgZ(13,"input",14),t.NdJ("ngModelChange",function(c){const a=t.CHM(e).$implicit;return t.KtG(a.choosenSize=c)}),t.qZA(),t.TgZ(14,"label",15),t._uU(15),t.qZA()(),t.TgZ(16,"div",16)(17,"input",17),t.NdJ("ngModelChange",function(c){const a=t.CHM(e).$implicit;return t.KtG(a.IsSugarAdded=c)}),t.qZA(),t.TgZ(18,"div",18),t._uU(19,"add sugar"),t.qZA()(),t.YNc(20,C,2,0,"div",19),t.TgZ(21,"div",20)(22,"button",21),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.increment(s))}),t._uU(23," add to cart "),t.qZA(),t.TgZ(24,"button",22),t.NdJ("click",function(){const s=t.CHM(e).$implicit,a=t.oxw();return t.KtG(a.onButtonClick(s))}),t.qZA()()()}if(2&n){const e=r.$implicit,o=r.index;t.xp6(2),t.s9C("src",e.cupImg,t.LSH),t.xp6(1),t.Q6J("ngIf",e.stamp),t.xp6(2),t.hij(" ",e.title," "),t.xp6(3),t.hij(" $",e.choosenSize?e.price[e.choosenSize]:0,""),t.xp6(2),t.MGl("name","size",o,""),t.Q6J("ngModel",e.choosenSize)("value",e.size1),t.xp6(2),t.hij("",e.size1," ml"),t.xp6(1),t.MGl("name","size",o,""),t.Q6J("ngModel",e.choosenSize)("value",e.size2),t.xp6(2),t.hij("",e.size2," ml"),t.xp6(2),t.Q6J("ngModel",e.IsSugarAdded),t.xp6(3),t.Q6J("ngIf",e.buttonClicked&&!e.choosenSize)}}const _=[{path:"",component:(()=>{class n{constructor(e,o,c,s){this.countService=e,this.dataService=o,this.cartService=c,this.detailsService=s,this.data=[],this.buttonClicked=!1,this.count=0}ngOnInit(){this.dataService.getData().subscribe(e=>{this.data=e.cups})}increment(e){if(e.buttonClicked=!0,e.choosenSize){const o={...e};this.cartService.addToCart(o),this.countService.incrementCount(),e.IsSugarAdded=!1,e.choosenSize=void 0,e.buttonClicked=!1}}incrementCount(){this.count++}onButtonClick(e){this.detailsService.setSelectedProduct(e),this.detailsService.openModal(!0)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(f.w),t.Y36(u.D),t.Y36(m.N),t.Y36(x.G))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-products-page"]],decls:9,vars:1,consts:[[1,"main"],[1,"container"],[1,"sloganTxt"],[1,"pleasures"],[1,"chooseCoffe"],["class","option",4,"ngFor","ngForOf"],[1,"option"],[1,"cup"],["alt","Extra Latte Cup",1,"cup",3,"src"],["class","rotate-img",4,"ngIf"],[1,"coffe-info"],[1,"price"],[1,"price-lable"],[1,"choose-size"],["type","radio",1,"size-btn",3,"name","ngModel","value","ngModelChange"],[1,"size"],[1,"sugar-choice"],["type","checkbox",1,"sugar-btn",3,"ngModel","ngModelChange"],[1,"sugar"],["class","error-msg",4,"ngIf"],[1,"cart-container"],[1,"cart-btn",3,"click"],[1,"info-btn",3,"click"],[1,"rotate-img"],[1,"error-msg"]],template:function(e,o){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"h2",2),t._uU(3," We believe a cup of coffee is one of the most important, simple "),t.TgZ(4,"span",3),t._uU(5,"pleasures"),t.qZA(),t._uU(6," in life "),t.qZA()(),t.TgZ(7,"section",4),t.YNc(8,b,25,14,"section",5),t.qZA()()),2&e&&(t.xp6(8),t.Q6J("ngForOf",o.data))},dependencies:[g.sg,g.O5,l.Fj,l.Wl,l._,l.JJ,l.On],styles:[".main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:flex-start;background:#fef2e8;height:100vh;width:100%;overflow-y:auto}.container[_ngcontent-%COMP%]{margin-left:240px;display:flex;flex-direction:column;justify-content:center;width:792px;height:174px;margin-top:64px}.sloganTxt[_ngcontent-%COMP%]{width:760px;font-size:48px;font-style:normal;font-weight:700;line-height:120%;color:#023a6b;font-family:Eczar}.pleasures[_ngcontent-%COMP%]{color:#f73;font-family:Eczar;font-size:48px;font-style:normal;font-weight:700;line-height:120%}@media screen and (max-width: 768px){.body[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start}.container[_ngcontent-%COMP%]{margin-left:3vw;margin-top:0}.sloganTxt[_ngcontent-%COMP%]{width:327px;align-items:flex-start;font-size:24px;font-style:normal;font-weight:700;line-height:130%}.pleasures[_ngcontent-%COMP%]{color:#f73;font-family:Eczar;font-size:24px;font-style:normal;font-weight:700;line-height:130%}}.chooseCoffe[_ngcontent-%COMP%]{display:inline-flex;flex-direction:row;margin-top:64px;gap:48px;width:960px;height:426px;margin-left:240px}.option[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-right:4.8vw}.rotate-img[_ngcontent-%COMP%]{margin-left:-135px;margin-top:110px;display:flex;width:100px;height:103px;padding-bottom:0;justify-content:center;align-items:center;flex-shrink:0;background-repeat:no-repeat;background-image:url(Stamp.2cd2287009ecbf43.png);animation:_ngcontent-%COMP%_rotation 23s ease-in-out infinite}@keyframes _ngcontent-%COMP%_rotation{0%{transform:rotate(0)}50%{transform:rotate(360deg)}to{transform:rotate(-360deg)}}.cup[_ngcontent-%COMP%]{width:264px;height:220px;display:flex}.nameNprice[_ngcontent-%COMP%]{display:flex}.coffe-info[_ngcontent-%COMP%]{display:flex;margin-bottom:16px;margin-top:24px;color:#023a6b;font-family:Eczar;font-size:32px;font-style:normal;font-weight:700;line-height:120%}",'.price[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:22px;margin-top:-10px;height:50px;width:24px;rotate:90deg;border-radius:16px;background:#f73;z-index:0}.price-lable[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:42px;height:19px;color:#fff;font-family:Eczar;font-size:16px;font-style:normal;font-weight:700;line-height:120%;rotate:-90deg}.choose-size[_ngcontent-%COMP%]{margin-bottom:16px;display:flex;flex-direction:row;align-items:center}.size-btn[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;margin-right:12px;width:24px;height:24px;background-color:#fff;border-radius:50%;border:none;outline:none;-webkit-appearance:none;appearance:none;cursor:pointer}.size-btn[_ngcontent-%COMP%]:checked:after{content:"";display:block;width:60%;height:60%;border-radius:50%;background-color:#f73}.size[_ngcontent-%COMP%]{margin-right:16px;font-family:Open Sans;font-size:14px;font-style:normal;font-weight:700;line-height:120%;text-transform:uppercase;color:#023a6b}.sugar-choice[_ngcontent-%COMP%]{display:flex;align-items:center;margin-bottom:16px}.sugar-btn[_ngcontent-%COMP%]{width:24px;height:24px;border:none;background-color:#fff;border-radius:30%;cursor:pointer;-webkit-appearance:none;appearance:none}.sugar-btn[_ngcontent-%COMP%]:checked:after{content:"";display:block;width:100%;height:100%;position:relative;background-image:url(Checkbox.e2efb4d51bdc8773.svg)}.sugar[_ngcontent-%COMP%]{margin-left:12px;color:#023a6b;font-family:Open Sans;font-size:14px;font-style:normal;font-weight:700;line-height:120%;text-transform:uppercase}.error-msg[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;width:230px;margin-bottom:10px;background:rgba(220,17,17,.41);border-radius:16px;box-shadow:0 4px 30px #0000001a;backdrop-filter:blur(4.5px);-webkit-backdrop-filter:blur(4.5px);border:1px solid rgba(220,17,17,.55);text-transform:uppercase;color:#023a6b;font-family:Open Sans;font-size:14px;font-style:normal;font-weight:700}.cart-container[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-items:center}.cart-btn[_ngcontent-%COMP%]{display:flex;width:141px;height:48px;justify-content:center;align-items:center;gap:10px;border-radius:64px;border:2px solid #ffbd5c;color:#023a6b;font-family:Open Sans;font-size:14px;font-style:normal;font-weight:700;line-height:16px;text-transform:uppercase;cursor:pointer;background-color:transparent}.cart-btn[_ngcontent-%COMP%]:hover{background-color:#ffbd5c;transition:background-color .5s ease}.info-btn[_ngcontent-%COMP%]{margin-left:16px;background-image:url(Info.e48bf154ea4b4244.svg);width:20px;height:20px;object-fit:contain;border:none;background-color:transparent;cursor:pointer}.info-btn[_ngcontent-%COMP%]:hover{transform:scale(1.2)}@media screen and (max-width: 768px){.chooseCoffe[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:18vw;margin-top:40px}}']}),n})()}];let P=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[g.ez,d.Bz.forChild(_),d.Bz]}),n})()}}]);