webpackJsonp([40],{1152:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("sk-data-set",{ref:"table",attrs:{"auto-create":""},model:{value:e.queryDs,callback:function(t){e.queryDs=t},expression:"queryDs"}}),e._v(" "),s("sk-data-set",{attrs:{"query-service":e.baseData.vendorCountries,"auto-query":""},model:{value:e.vendorCountriesDs,callback:function(t){e.vendorCountriesDs=t},expression:"vendorCountriesDs"}}),e._v(" "),s("sk-data-set",{attrs:{bind:e.queryDs,"bind-field":"countryId","query-service":e.baseData.getStoreByCountry},model:{value:e.storeDs,callback:function(t){e.storeDs=t},expression:"storeDs"}}),e._v(" "),s("sk-data-set",{attrs:{"query-bind":e.queryDs,"auto-query":"",pagination:"","page-size":"20","query-service":e.item.getItems},model:{value:e.itemListDs,callback:function(t){e.itemListDs=t},expression:"itemListDs"}}),e._v(" "),s("sk-form",{attrs:{bind:e.queryDs}},[s("div",[s("div",[s("sk-text-input",{attrs:{name:"name",value:"aasdf"}})],1),e._v(" "),s("div",[s("sk-date-picker",{attrs:{value:"2017/04/05",name:"startDate",label:"test"},on:{change:e.changDate}})],1)]),e._v(" "),s("sk-date-picker",{attrs:{"bind-min-date":"startDate",value:"",name:"endDate",label:"test"},on:{change:e.changDate}}),e._v(" "),s("sk-select",{attrs:{value:"119000","hint-text":"选择国家",label:"国家",name:"countryId","option-bind":e.vendorCountriesDs,"display-field":"countryName","value-field":"countryId"},on:{change:e.changDate}}),e._v(" "),s("sk-time-picker",{attrs:{value:"09:22",hintText:"startTime",name:"startTime",label:"startTime"},on:{change:e.changDate}}),e._v(" "),s("sk-time-picker",{attrs:{"bind-min-time":"startTime",hintText:"endTime",name:"endTime",label:"endTime"},on:{change:e.changDate}})],1),e._v(" "),s("sk-table",{attrs:{bind:e.itemListDs,selectable:"",showCheckbox:""}},[s("div",{attrs:{slot:"buttons"},slot:"buttons"},[s("sk-button",{attrs:{label:"保存"}})],1),e._v(" "),s("div",{attrs:{slot:"row"},slot:"row"},[s("sk-column",{attrs:{editable:"",name:"sort",title:"排序"}}),e._v(" "),s("sk-column",{attrs:{formatter:e.renderName,name:"itemName",title:"商品名字"}}),e._v(" "),s("sk-column",{attrs:{"if-hide":e.ifHide,name:"itemId",title:"id"}}),e._v(" "),s("sk-column",{attrs:{name:"updateTime",editable:"","edit-type":"date-picker",title:"更新时间"}}),e._v(" "),s("sk-column",{attrs:{name:"storeId",editable:"","edit-type":"select","option-bind":e.storeDs,"display-field":"storeName","value-field":"storeId",title:"创建时间"}})],1)])],1)},staticRenderFns:[]}},717:function(e,t,s){var a=s(0)(s(960),s(1152),null,null,null);e.exports=a.exports},718:function(e,t,s){"use strict";var a=s(38),n={enumeration:{baseInfoType:{attr:"ATTRIBUTE",spec:"SPEC"}},getItems:{url:"/item/getItemsByQueryParams",paras:{rootCatalogId:"",countryId:103e3,order:"asc",offset:0,limit:10,storeId:""}},getItemsForActivitySelect:{url:"/item/getItemsForActivitySelect",paras:{}},deleteByIds:{url:"/item/deleteByIds",event:"",params:{itemIds:"itemIds"}},online:{url:"/item/changeToOnLine",event:"",params:{itemIds:"itemIds"}},offline:{url:"/item/changeToOffLine",event:"",params:{itemIds:"itemIds"}},cancelAssign:{url:"/item/assignCancel",event:"",params:{itemIds:"itemIds"}},getItemsOrderBySort:{url:"/item/getItemsOrderBySort",event:"",params:{rootCatalogId:"",catalogId:""}},batchUpdateItemSort:{url:"/item/batchUpdateItemSort",params:{itemListString:""}},getItemBaseInfo:{url:"/itemAttributeMaster/queryByTypeAndCatalogIdOrderBySort",params:{catalogId:"",type:""}},getItemById:{url:"/item/getItemSaveOrInsert",event:"",params:{itemId:""}},maintain:{url:"/item/saveOrInsert",contentType:"application/json",params:{}},getAssignCountryDetail:{url:"/itemAssigned/getCountryTodoAssigned",params:{itemIds:""}},assignCountry:{contentType:"json",url:"/itemAssigned/countryAssigned",params:{}},unAssignCountry:{contentType:"json",url:"/itemAssigned/countryUnAssigned",params:{}},getAssignStoreDetail:{url:"/itemAssigned/getStoreTodoAssigned",itemIds:""},assignStore:{contentType:"json",url:"/itemAssigned/storeAssigned",params:{hasShelfFlag:"",itemList:"",optStores:""}},unAssignStore:{contentType:"json",url:"/itemAssigned/storeUnAssigned",params:{hasShelfFlag:"",itemList:"",optStores:""}},getItemAssignDetail:{url:"/itemAssigned/getItemAssignsDetail",params:{itemId:""}},cancelAssignOneCountry:{url:"/itemAssigned/unAssignedCountry",paras:{itemIds:""}}};t.a=s.i(a.a)(n,"order")},960:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(129),n=s(718);t.default={data:function(){return window.test=this,console.log("page"),{name:"aaa",ifHide:!0,queryDs:null,vendorCountriesDs:null,storeDs:null,itemListDs:null,baseData:a.a,item:n.a}},beforeCreate:function(){console.log("11")},computed:{},methods:{changDate:function(e){},renderName:function(e){return this.name+e}},watch:{}}}});
//# sourceMappingURL=40.5a03896ae18f87df470a.js.map