webpackJsonp([22],{1001:function(t,e,s){var a=s(979);"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s(2)("cb0a5ca4",a,!0,{})},1131:function(t,e,s){function a(t){s(1001)}var i=s(0)(s(939),s(1167),a,"data-v-8a547614",null);t.exports=i.exports},1160:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("sk-reload",{attrs:{name:"page.item.assignStore"}},[s("sk-assign-store",{attrs:{editable:!0}})],1)},staticRenderFns:[]}},1167:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-container"},[s("div",{staticClass:"data-sets-con"},[s("sk-data-set",{attrs:{"query-para":{itemIds:this.ids},"query-mask":{info:"加载中..."},"query-service":t.itemModule.getAssignStoreDetail,"auto-query":""},on:{load:t.loadAssignDetail}}),t._v(" "),s("sk-data-set",{attrs:{"query-service":t.baseData.getCurrencyList,"auto-query":""},model:{value:t.currencyDs,callback:function(e){t.currencyDs=e},expression:"currencyDs"}}),t._v(" "),s("sk-data-set",{model:{value:t.assignedDs,callback:function(e){t.assignedDs=e},expression:"assignedDs"}}),t._v(" "),s("sk-data-set",{model:{value:t.unAssignedDs,callback:function(e){t.unAssignedDs=e},expression:"unAssignedDs"}}),t._v(" "),s("sk-data-set",{on:{ready:t.onItemsDsReady},model:{value:t.todoItemsDs,callback:function(e){t.todoItemsDs=e},expression:"todoItemsDs"}}),t._v(" "),s("sk-data-set",{model:{value:t.skuEditDs,callback:function(e){t.skuEditDs=e},expression:"skuEditDs"}})],1),t._v(" "),s("sk-fold",{attrs:{title:t.$t("assignItemsToStore")}},[s("div",{staticClass:"checked-part"},[s("sk-checkbox",{attrs:{label:t.$t("onlineItemMeanwhile")},model:{value:t.hasShelfFlag,callback:function(e){t.hasShelfFlag=e},expression:"hasShelfFlag"}})],1),t._v(" "),s("sk-row",[s("sk-col",{attrs:{width:"40"}},[s("sk-table",{attrs:{bind:t.unAssignedDs,"show-checkbox":""}},[s("div",{attrs:{slot:"row"},slot:"row"},[s("sk-column",{attrs:{align:"center",name:"storeName",width:"25%",title:t.$t("tobeAssignStore")}})],1)])],1),t._v(" "),s("sk-col",{attrs:{width:"20"}},[s("div",{staticClass:"assign-btn-con"},[s("sk-button",{attrs:{icon:"arrow_forward"},on:{click:t.assignCountry}})],1),t._v(" "),s("div",{staticClass:"assign-btn-con"},[s("sk-button",{attrs:{icon:"arrow_back"},on:{click:t.removeAssign}})],1)]),t._v(" "),s("sk-col",{attrs:{width:"40"}},[s("sk-table",{ref:"chooseCountryTable",attrs:{bind:t.assignedDs,"show-checkbox":""}},[s("div",{attrs:{slot:"row"},slot:"row"},[s("sk-column",{attrs:{align:"center",name:"storeName",width:"25%",title:t.$t("alreadyAssignStore")}})],1)])],1)],1)],1),t._v(" "),s("sk-fold",{attrs:{title:t.$t("tobeAssignItems")}},[s("sk-table",{attrs:{"show-line-number":"",bind:t.todoItemsDs,"show-checkbox":""}},[s("div",{attrs:{slot:"row"},slot:"row"},[s("sk-column",{attrs:{align:"center",name:"headAttacheList",width:"100px","view-type":"img",title:t.$t("thImg")}}),t._v(" "),s("sk-column",{attrs:{align:"center",name:"itemName",title:t.$t("itemName")}}),t._v(" "),s("sk-column",{attrs:{align:"center",name:"itemModel",title:t.$t("itemModel")}}),t._v(" "),s("sk-column",{attrs:{align:"center",name:"catalogMappingList",title:t.$t("subCategory"),formatter:t.renderCatalog}}),t._v(" "),s("sk-column",{attrs:{align:"center",width:"150px",name:"unit",editable:"","edit-type":"select","option-bind":t.currencyDs,"display-field":"exchangeUnit","value-field":"exchangeUnit",title:t.$t("currency")}}),t._v(" "),s("sk-column",{attrs:{align:"center",name:"storePrice",editable:"","edit-type":"money",title:t.$t("price")}}),t._v(" "),s("sk-column",{attrs:{align:"center",name:"skuList",title:t.$t("skuSet"),formatter:t.renderSkuEdit},on:{"cell-click":t.onClickEditSku}})],1)])],1),t._v(" "),s("sk-win",{ref:"editSkuWin",attrs:{title:t.$t("skuDetail"),width:"80%"}},[s("div",[s("div",{staticClass:"item-info-list"},[s("div",{staticClass:"info"},[s("label",{staticClass:"prompt"},[t._v(t._s(t.$t("country"))+"：")]),t._v(" "),s("span",[t._v(t._s(t.skuData.storeName||t.$t("noData")))])]),t._v(" "),s("div",{staticClass:"info"},[s("label",{staticClass:"prompt"},[t._v(t._s(t.$t("itemName"))+"：")]),t._v(" "),s("span",[t._v(t._s(t.skuData.itemName))])]),t._v(" "),s("div",{staticClass:"info"},[s("label",{staticClass:"prompt"},[t._v(t._s(t.$t("itemModel"))+"：")]),t._v(" "),s("span",[t._v(t._s(t.skuData.itemModel))])]),t._v(" "),s("div",{staticClass:"info"},[s("label",{staticClass:"prompt"},[t._v(t._s(t.$t("currency"))+"：")]),t._v(" "),s("span",[t._v(t._s(t.skuData.unit))])]),t._v(" "),s("div",{staticClass:"info"},[s("label",{staticClass:"prompt"},[t._v(t._s(t.$t("price"))+"：")]),t._v(" "),s("span",[t._v(t._s(t.skuData.storePrice))])])])]),t._v(" "),s("div",{staticClass:"edit-sku-div",style:{maxHeight:t.countHeight}},[s("sk-table",{attrs:{bind:t.skuEditDs}},[s("div",{attrs:{slot:"row"},slot:"row"},[s("sk-column",{attrs:{align:"center",name:"skuName",title:t.$t("skuName")}}),t._v(" "),s("sk-column",{attrs:{align:"center",name:"skuModel",title:t.$t("itemModel")}}),t._v(" "),s("sk-column",{attrs:{align:"center",width:"150px",name:"unit",editable:"","edit-type":"select","option-bind":t.currencyDs,"display-field":"exchangeUnit","value-field":"exchangeUnit",title:t.$t("currency")}}),t._v(" "),s("sk-column",{attrs:{align:"center",name:"skuPrice",editable:"","edit-type":"money",title:t.$t("price")}}),t._v(" "),s("sk-column",{attrs:{align:"center",name:"headAttachList",width:"100px","view-type":"img",title:t.$t("thImg")}})],1)])],1)])],1)},staticRenderFns:[]}},691:function(t,e,s){var a=s(0)(s(931),s(1160),null,null,null);t.exports=a.exports},718:function(t,e,s){"use strict";var a=s(38),i={enumeration:{baseInfoType:{attr:"ATTRIBUTE",spec:"SPEC"}},getItems:{url:"/item/getItemsByQueryParams",paras:{rootCatalogId:"",countryId:103e3,order:"asc",offset:0,limit:10,storeId:""}},getItemsForActivitySelect:{url:"/item/getItemsForActivitySelect",paras:{}},deleteByIds:{url:"/item/deleteByIds",event:"",params:{itemIds:"itemIds"}},online:{url:"/item/changeToOnLine",event:"",params:{itemIds:"itemIds"}},offline:{url:"/item/changeToOffLine",event:"",params:{itemIds:"itemIds"}},cancelAssign:{url:"/item/assignCancel",event:"",params:{itemIds:"itemIds"}},getItemsOrderBySort:{url:"/item/getItemsOrderBySort",event:"",params:{rootCatalogId:"",catalogId:""}},batchUpdateItemSort:{url:"/item/batchUpdateItemSort",params:{itemListString:""}},getItemBaseInfo:{url:"/itemAttributeMaster/queryByTypeAndCatalogIdOrderBySort",params:{catalogId:"",type:""}},getItemById:{url:"/item/getItemSaveOrInsert",event:"",params:{itemId:""}},maintain:{url:"/item/saveOrInsert",contentType:"application/json",params:{}},getAssignCountryDetail:{url:"/itemAssigned/getCountryTodoAssigned",params:{itemIds:""}},assignCountry:{contentType:"json",url:"/itemAssigned/countryAssigned",params:{}},unAssignCountry:{contentType:"json",url:"/itemAssigned/countryUnAssigned",params:{}},getAssignStoreDetail:{url:"/itemAssigned/getStoreTodoAssigned",itemIds:""},assignStore:{contentType:"json",url:"/itemAssigned/storeAssigned",params:{hasShelfFlag:"",itemList:"",optStores:""}},unAssignStore:{contentType:"json",url:"/itemAssigned/storeUnAssigned",params:{hasShelfFlag:"",itemList:"",optStores:""}},getItemAssignDetail:{url:"/itemAssigned/getItemAssignsDetail",params:{itemId:""}},cancelAssignOneCountry:{url:"/itemAssigned/unAssignedCountry",paras:{itemIds:""}}};e.a=s.i(a.a)(i,"order")},931:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(1131),i=s.n(a);e.default={components:{"sk-assign-store":i.a},data:function(){return{}}}},939:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s(129),i=s(718),n=s(39);e.default={data:function(){return window.test=this,{hasShelfFlag:!0,assignedDs:null,unAssignedDs:null,todoItemsDs:null,currencyDs:null,skuEditDs:null,countHeight:"400px",ids:this.$route.query.ids,skuData:{},itemModule:i.a,baseData:a.a}},created:function(){},methods:{renderSkuEdit:function(){return"<a class='edit-sku'>"+this.$t("skuDetail")+"</a>"},renderCatalog:function(t){return n.a.getFieldValue(t,"catalogName",",")},onClickEditSku:function(t,e,s,a,i){"edit-sku"==t.target.className&&(this.skuEditDs.setData(e),this.$refs.editSkuWin.show(),this.skuData=i.getData())},onItemsDsReady:function(t){t.addEventListener(t.event.update,this.updateSkuValue)},updateSkuValue:function(t,e,s){var a;"storePrice"==e?a="skuPrice":"unit"==e&&(a="unit");for(var i=s.getData().skuList,n=0,o=i.length;n<o;n++)i[n][a]=t},loadAssignDetail:function(t){var e=t[0].getData();this.assignedDs.setData(e.chooseStores),this.unAssignedDs.setData(e.toDoStores),this.todoItemsDs.setData(e.itemList)},assignCountry:function(){var t=this.unAssignedDs.getSelectedData();t&&0!=t.length&&i.a.assignStore.execute({data:{hasShelfFlag:this.hasShelfFlag,optStores:n.a.getFieldsValue(t,["storeId"]),itemList:this.getAssignSubmitData()},mask:{info:""},success:function(){var t=this.unAssignedDs.delete();this.assignedDs.addMultiple(this.assignedDs.getRecordsData(t))}.bind(this)})},removeAssign:function(){var t=this.assignedDs.getSelectedData();t&&0!=t.length&&i.a.unAssignStore.execute({data:{hasShelfFlag:this.hasShelfFlag,optStores:n.a.getFieldsValue(t,["storeId"]),itemList:this.getAssignSubmitData()},mask:{info:""},success:function(){var t=this.assignedDs.delete();this.unAssignedDs.addMultiple(this.unAssignedDs.getRecordsData(t))}.bind(this)})},getAssignSubmitData:function(){var t,e=this.$base.deepCopy(this.todoItemsDs.getAllData());e=n.a.getFieldsValue(e,["skuList","itemId","storePrice","unit"]);for(var s=0,a=e.length;s<a;s++)t=e[s].skuList,e[s].skuList=n.a.getFieldsValue(t,["skuId","itemId","skuPrice","unit"]);return e}}}},979:function(t,e,s){e=t.exports=s(1)(!0),e.push([t.i,".assign-btn-con[data-v-8a547614]{text-align:center;margin-top:10px}.assign-btn-con+.assign-btn-con[data-v-8a547614]{margin-top:20px}.item-info-list[data-v-8a547614]{overflow:hidden;color:#999}.item-info-list .info[data-v-8a547614]{float:left}.item-info-list .info+.info[data-v-8a547614]{margin-left:20px}.item-info-list .info .prompt[data-v-8a547614]{color:#aaa}.edit-sku-div[data-v-8a547614]{overflow-y:auto;overflow-x:hidden}","",{version:3,sources:["F:/project/vueMuseUI-master/src/page/item/plugins/assignStore.vue"],names:[],mappings:"AACA,iCACE,kBAAmB,AACnB,eAAiB,CAClB,AACD,iDACE,eAAiB,CAClB,AACD,iCACE,gBAAiB,AACjB,UAAY,CACb,AACD,uCACE,UAAY,CACb,AACD,6CACE,gBAAkB,CACnB,AACD,+CACE,UAAY,CACb,AACD,+BACE,gBAAiB,AACjB,iBAAmB,CACpB",file:"assignStore.vue",sourcesContent:["\n.assign-btn-con[data-v-8a547614] {\n  text-align: center;\n  margin-top: 10px;\n}\n.assign-btn-con + .assign-btn-con[data-v-8a547614] {\n  margin-top: 20px;\n}\n.item-info-list[data-v-8a547614] {\n  overflow: hidden;\n  color: #999;\n}\n.item-info-list .info[data-v-8a547614] {\n  float: left;\n}\n.item-info-list .info + .info[data-v-8a547614] {\n  margin-left: 20px;\n}\n.item-info-list .info .prompt[data-v-8a547614] {\n  color: #aaa;\n}\n.edit-sku-div[data-v-8a547614] {\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n"],sourceRoot:""}])}});
//# sourceMappingURL=22.b1611fd858018400e300.js.map