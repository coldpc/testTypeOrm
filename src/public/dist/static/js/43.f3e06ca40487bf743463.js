webpackJsonp([43],{1136:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-container"},[s("div",[s("sk-data-set",{attrs:{"before-query":t.beforeRefreshItemTable,pagination:!0,"page-size":"10","auto-query":!1,"query-bind":t.queryDs,"query-service":t.itemModule.getItems},on:{load:t.onLoadItemList,update:t.onUpdateSort},model:{value:t.itemListDs,callback:function(e){t.itemListDs=e},expression:"itemListDs"}}),t._v(" "),s("sk-data-set",{attrs:{"auto-query":"","query-service":t.baseData.getAccountGrade},on:{load:t.onLoadGradeInfoDs}}),t._v(" "),s("sk-data-set",{attrs:{"auto-create":!0},model:{value:t.queryDs,callback:function(e){t.queryDs=e},expression:"queryDs"}}),t._v(" "),s("sk-data-set",{attrs:{"auto-query":!0,"query-service":t.baseData.getRootCatalogs},model:{value:t.bigCatalogDs,callback:function(e){t.bigCatalogDs=e},expression:"bigCatalogDs"}}),t._v(" "),s("sk-data-set",{attrs:{"auto-query":!1,bind:t.queryDs,"bind-field":"rootCatalogId","bind-para-key":"parentCatalogId","query-service":t.baseData.getCatalogsByParentId},model:{value:t.catalogDs,callback:function(e){t.catalogDs=e},expression:"catalogDs"}}),t._v(" "),s("sk-data-set",{attrs:{"auto-query":"",bind:t.queryDs,"query-service":t.baseData.vendorCountries},model:{value:t.countriesDs,callback:function(e){t.countriesDs=e},expression:"countriesDs"}}),t._v(" "),s("sk-data-set",{attrs:{"auto-query":!1,bind:t.queryDs,"bind-field":"countryId","query-service":t.baseData.getStoreByCountry},model:{value:t.storeDs,callback:function(e){t.storeDs=e},expression:"storeDs"}})],1),t._v(" "),s("div",{staticStyle:{"margin-top":"30px"}},[s("sk-form",{attrs:{bind:t.queryDs}},[s("sk-fold",{attrs:{title:t.$t("queryPara")}},[s("sk-row",[s("sk-col",{attrs:{size:2}},[s("sk-select",{attrs:{value:t.countryId,readonly:!!t.storeId,"null-title":t.$t("global"),bind:t.queryDs,label:t.$t("country"),name:"countryId","option-bind":t.countriesDs,"display-field":"countryName","value-field":"countryId"}})],1),t._v(" "),s("sk-col",{attrs:{size:2}},[s("sk-select",{attrs:{value:t.storeId,bind:t.queryDs,"null-title":t.$t("wholeCountry"),label:t.$t("store"),name:"storeId","display-field":"storeName","value-field":"storeId","option-bind":t.storeDs}})],1)],1),t._v(" "),s("sk-row",[s("sk-col",{attrs:{size:2}},[s("sk-select",{attrs:{"option-bind":t.bigCatalogDs,"display-field":"catalogName","value-field":"catalogId",label:t.$t("category"),name:"rootCatalogId"}})],1),t._v(" "),s("sk-col",{attrs:{size:2}},[s("sk-select",{attrs:{label:t.$t("subCategory"),multiple:!1,"option-bind":t.catalogDs,"value-field":"catalogId","display-field":"catalogName",name:"catalogId"}})],1)],1),t._v(" "),s("sk-row",[s("sk-col",{attrs:{size:2}},[s("sk-text-input",{attrs:{label:t.$t("itemModel"),name:"itemModel"}})],1),t._v(" "),s("sk-col",{attrs:{size:2}},[s("sk-text-input",{attrs:{label:t.$t("itemName"),name:"itemName"}})],1)],1),t._v(" "),s("sk-row",[s("sk-col",{attrs:{size:1}},[s("div",{staticClass:"query-btn-con",staticStyle:{"margin-top":"20px","text-align":"right"}},[s("sk-button",{attrs:{primary:"",label:t.$t("query"),action:"query",bind:t.itemListDs}}),t._v(" "),s("sk-button",{attrs:{action:"reset",label:t.$t("clear")}})],1)])],1)],1)],1)],1),t._v(" "),s("div",[s("sk-table",{ref:"itemListTable",attrs:{bind:t.itemListDs,"show-checkbox":t.canEdit}},[s("div",{attrs:{slot:"buttons"},slot:"buttons"},[t.isStore&&t.canEdit?s("sk-button",{attrs:{label:t.$t("batchOnline"),action:"patchOnline",primary:""},on:{click:t.itemListAction}}):t._e(),t._v(" "),t.isStore&&t.canEdit?s("sk-button",{attrs:{label:t.$t("batchOffline"),action:"patchOff"},on:{click:t.itemListAction}}):t._e(),t._v(" "),t.isBrand&&t.canEdit?s("sk-button",{attrs:{primary:"",label:t.$t("assignCountry"),action:"assignCountry"},on:{click:t.itemListAction}}):t._e(),t._v(" "),t.isCountry&&t.canEdit?s("sk-button",{attrs:{primary:"",label:t.$t("assignStore"),action:"assignStore"},on:{click:t.itemListAction}}):t._e(),t._v(" "),!t.isStore&&t.canEdit?s("sk-button",{attrs:{label:t.$t("cancelAssign"),action:"cancelAssign"},on:{click:t.itemListAction}}):t._e(),t._v(" "),t.canEdit?s("sk-button",{attrs:{label:t.$t("batchDelete"),action:"patchDelete"},on:{click:t.itemListAction}}):t._e(),t._v(" "),t.isStore&&t.canEdit?s("sk-button",{attrs:{primary:"",label:t.$t("saveSort"),action:"sortSave"},on:{click:t.itemListAction}}):t._e()],1),t._v(" "),s("div",{attrs:{slot:"row"},slot:"row"},[s("sk-column",{attrs:{name:"index",title:t.$t("lineNo"),width:"100px",align:"center",formatter:t.renderIndex}}),t._v(" "),s("sk-column",{attrs:{name:"headAttacheList","view-type":"img",align:"center",title:t.$t("thImg")}}),t._v(" "),s("sk-column",{attrs:{name:"itemId",title:t.$t("itemModelName"),formatter:t.renderItemInfo,align:"center"},on:{"cell-click":t.onClickOperationCell}}),t._v(" "),s("sk-column",{attrs:{name:"catalogMappingList",title:t.$t("itemCategory"),formatter:t.renderCatalogs,align:"center"}}),t._v(" "),s("sk-column",{attrs:{name:"itemTagMappings",title:t.$t("itemTag"),formatter:t.renderItemTag,align:"center"}}),t._v(" "),s("sk-column",{attrs:{name:"unit",title:t.$t("currency"),align:"center"}}),t._v(" "),s("sk-column",{attrs:{name:"factPrice","view-type":"money",title:t.$t("price"),align:"center"}}),t._v(" "),s("sk-column",{attrs:{name:"discountPrice",formatter:t.formatYkPrice,title:t.$t("yaokPrice"),align:"center"}}),t._v(" "),s("sk-column",{attrs:{"if-hide":!t.isBrand,name:"assignCountryNum",title:t.$t("assignCountryNum"),align:"center"}}),t._v(" "),s("sk-column",{attrs:{"if-hide":t.isStore,name:"assignStoryNum",title:t.$t("assignStoreNum"),align:"center"}}),t._v(" "),s("sk-column",{attrs:{"if-hide":t.isStore,name:"onStoreNum",title:t.$t("onlineStoreNum"),align:"center"}}),t._v(" "),s("sk-column",{attrs:{"if-hide":!t.isStore,name:"shelfFlag",title:t.$t("status"),formatter:t.renderShelf,align:"center"}}),t._v(" "),s("sk-column",{attrs:{"if-hide":!(t.isStore&&t.canEdit),name:"sort",editable:"",title:t.$t("sortSet"),align:"center"}}),t._v(" "),s("sk-column",{attrs:{"if-hide":!t.canEdit,align:"center",name:"action",title:t.$t("operation"),formatter:t.renderOperation},on:{"cell-click":t.onClickOperationCell}})],1)])],1)])},staticRenderFns:[]}},695:function(t,e,s){var i=s(0)(s(935),s(1136),null,null,null);t.exports=i.exports},718:function(t,e,s){"use strict";var i=s(38),a={enumeration:{baseInfoType:{attr:"ATTRIBUTE",spec:"SPEC"}},getItems:{url:"/item/getItemsByQueryParams",paras:{rootCatalogId:"",countryId:103e3,order:"asc",offset:0,limit:10,storeId:""}},getItemsForActivitySelect:{url:"/item/getItemsForActivitySelect",paras:{}},deleteByIds:{url:"/item/deleteByIds",event:"",params:{itemIds:"itemIds"}},online:{url:"/item/changeToOnLine",event:"",params:{itemIds:"itemIds"}},offline:{url:"/item/changeToOffLine",event:"",params:{itemIds:"itemIds"}},cancelAssign:{url:"/item/assignCancel",event:"",params:{itemIds:"itemIds"}},getItemsOrderBySort:{url:"/item/getItemsOrderBySort",event:"",params:{rootCatalogId:"",catalogId:""}},batchUpdateItemSort:{url:"/item/batchUpdateItemSort",params:{itemListString:""}},getItemBaseInfo:{url:"/itemAttributeMaster/queryByTypeAndCatalogIdOrderBySort",params:{catalogId:"",type:""}},getItemById:{url:"/item/getItemSaveOrInsert",event:"",params:{itemId:""}},maintain:{url:"/item/saveOrInsert",contentType:"application/json",params:{}},getAssignCountryDetail:{url:"/itemAssigned/getCountryTodoAssigned",params:{itemIds:""}},assignCountry:{contentType:"json",url:"/itemAssigned/countryAssigned",params:{}},unAssignCountry:{contentType:"json",url:"/itemAssigned/countryUnAssigned",params:{}},getAssignStoreDetail:{url:"/itemAssigned/getStoreTodoAssigned",itemIds:""},assignStore:{contentType:"json",url:"/itemAssigned/storeAssigned",params:{hasShelfFlag:"",itemList:"",optStores:""}},unAssignStore:{contentType:"json",url:"/itemAssigned/storeUnAssigned",params:{hasShelfFlag:"",itemList:"",optStores:""}},getItemAssignDetail:{url:"/itemAssigned/getItemAssignsDetail",params:{itemId:""}},cancelAssignOneCountry:{url:"/itemAssigned/unAssignedCountry",paras:{itemIds:""}}};e.a=s.i(i.a)(a,"order")},935:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(130),a=s.n(i),n=s(27),r=s.n(n),o=s(129),l=s(718),c=s(39),u=s(131);e.default={data:function(){return window.test=this,{ifHideOperation:!0,countryId:null,storeId:null,queryDs:null,itemListDs:null,bigCatalogDs:null,catalogDs:null,countriesDs:null,storeDs:null,baseData:o.a,itemModule:l.a,queryType:"brand",gradeData:null,queryData:{}}},computed:{isCountry:function(){return"country"===this.queryType},isStore:function(){return"store"===this.queryType},isBrand:function(){return"brand"===this.queryType},canEdit:function(){var t=this.gradeData,e=this.queryData;if(this.queryType&&t){if(t.hasBrandGlobal)return!0;if(t.hasCountry){if(e.countryId==t.countryId)return!0}else if(e.storeId==t.storeId)return!0}return!1}},methods:{renderOperation:function(t,e,s){var i=this.isStore,a=s.getValue("shelfFlag"),n="<a class='edit'>"+this.$t("edit")+"</a>";return i?(n+="OFFLINE"===a?"<br><a class='online'>"+this.$t("online")+"</a>":"<br><a class='offline'>"+this.$t("offline")+"</a>",s.getValue("assignCountryNum")>0||(n+="<br><a class='delete'>"+this.$t("delete")+"</a>")):(s.getValue("assignStoryNum")>0||s.getValue("assignCountryNum")>0||(n+="<br><a class='delete'>"+this.$t("delete")+"</a>"),n+="<br><a class='assignDetail'>"+this.$t("assignDetail")+"</a>"),n},renderIndex:function(t,e){return parseInt(e+1)},renderCatalogs:function(t){return t=t||[],t.join(" ")||"-"},renderItemTag:function(t){if(t){var e="";return t.forEach(function(t){e+=t.desc+"<br>"}),e}return this.$t("none")},formatYkPrice:function(t){return t?u.a.format(t):this.$t("none")},renderItemInfo:function(t,e,s){var i="<div class='itemId'><a class='itemDetail'>"+s.getValue("itemName")+"</a></div>";return i+="<div class='disabled-text'>"+s.getValue("itemModel")+"</div>"},renderShelf:function(t){return"ONLINE"===t?this.$t("onlineAlready"):this.$t("offlineAlready")},onLoadItemList:function(){var t=this.itemListDs.lastQueryPara,e=void 0;e=t.storeId?"store":t.countryId?"country":"brand",this.queryType=e,this.queryData=r()({},t),this.resetItemListSort()},onClickOperationCell:function(t,e,s,i,a){switch(t.target.className){case"edit":this.gotoEditItem(a);break;case"delete":this.deleteItem(a);break;case"itemDetail":this.gotoItemDetail(a);break;case"assignDetail":this.gotoAssignDetail(a);break;case"online":this.online(a);break;case"offline":this.offline(a)}},resetItemListSort:function(t){for(var e=void 0,s=void 0,i=this.itemListDs.records||[],a=0,n=i.length;a<n;a++)e=i[a].getData(),s=c.a.getDataByAttr(t,"itemId",e.itemId),s&&s[0]?(e.oldSort=s[0].sort,i[a].setValue("sort",e.oldSort)):e.oldSort=e.sort},onUpdateSort:function(t,e,s,i){if("sort"==e)for(var a=i.records,n=0,r=a.length;n<r;n++)if(a[n]==s){n;break}},setItemListSort:function(t,e,s){for(var i=void 0,a=void 0,n=t,r=s.length;n<r;n++)i=s[n],(a=parseInt(i.getValue("sort")))<e&&(a=e+10,i.setValue("sort",a))},saveItemListSort:function(t){t=t||this.getSaveSortItemData(),t.length>0&&l.a.batchUpdateItemSort.execute({data:{itemListString:a()(t)},success:function(){this.$store.commit("message",this.$t("saveSuccess")),this.resetItemListSort(t)}.bind(this)})},getSaveSortItemData:function(t){t=t||this.itemListDs;for(var e=t.getAllData()||[],s=[],i=void 0,a=0,n=e.length;a<n;a++)i=e[a],i.oldSort!=i.sort&&s.push({sort:i.sort,itemId:i.itemId});return s},beforeRefreshItemTable:function(t){var e=this.getSaveSortItemData(t);return e.length>0&&this.$store.commit("confirm",{message:this.$t("haveAlterData"),ok:function(){this.saveItemListSort(e),e=null}.bind(this)}),!0},onLoadGradeInfoDs:function(t){var e=this.gradeData=t[0].getData(),s={};e.hasBrandGlobal||(s.countryId=e.countryId,e.hasCountry?this.countryId=e.countryId:e.hasStore&&(this.countryId=e.countryId||e.countryAuthList[0],this.storeId=e.storeId,s.storeId=e.storeId)),this.itemListDs.query(s)},online:function(t){t instanceof Array||(t=[t]),l.a.online.execute({data:{itemIds:this.getIds(t).join(",")},mask:{info:this.$t("saving")},success:function(){this.$store.commit("message",this.$t("onlineSuccess")),this.itemListDs.updateRecordsData(t,{shelfFlag:"ONLINE"}),t=null}.bind(this)})},offline:function(t){t instanceof Array||(t=[t]),l.a.offline.execute({data:{itemIds:this.getIds(t).join(",")},mask:{info:this.$t("saving")},success:function(){this.$store.commit("message",this.$t("offlineSuccess")),this.itemListDs.updateRecordsData(t,{shelfFlag:"OFFLINE"}),t=null}.bind(this)})},deleteItem:function(t){t instanceof Array||(t=[t]),this.$store.commit("confirm",{message:this.$t("DeleteNow"),ok:function(){l.a.deleteByIds.execute({data:{itemIds:this.getIds(t).join(",")},mask:{info:this.$t("saving")},success:function(){this.itemListDs.delete(t),t=null}.bind(this)})}.bind(this)})},cancelAssign:function(t){t instanceof Array||(t=[t]),l.a.cancelAssign.execute({data:{itemIds:this.getIds(t).join(",")},mask:{info:this.$t("saving")},success:function(){this.itemListDs.updateRecordsData(t,{assignCountryNum:"0",assignStoryNum:"0",onStoreNum:0,shelfFlag:"OFFLINE"})}.bind(this)})},gotoAssignCountry:function(t){this.$store.dispatch("router/push",{title:"分配国家",name:"page.item.assignCountry",query:{ids:this.getIds(t).join(",")}})},gotoAssignStore:function(t){this.$store.dispatch("router/push",{title:"分配门店",name:"page.item.assignStore",query:{ids:this.getIds(t).join(",")}})},gotoAssignDetail:function(t){this.$store.dispatch("router/push",{title:"分配详情",name:"page.item.assignDetail",query:{itemId:t.getValue("itemId"),type:this.queryType,storeId:this.queryData.storeId,countryId:this.queryData.countryId}})},gotoEditItem:function(t){this.$store.dispatch("router/push",{title:"商品编辑",name:"page.item.edit",query:{itemId:t.getValue("itemId")}})},gotoItemDetail:function(t){this.$store.dispatch("router/push",{title:"商品详情",name:"page.item.detail",query:{itemId:t.getValue("itemId")}})},itemListAction:function(t){var e=this.itemListDs.getSelectedRecords();switch(t){case"patchOff":e=this.filterRecords(e,"shelfFlag","ONLINE"),e.length>0&&this.offline(e);break;case"patchOnline":e=this.filterRecords(e,"shelfFlag","OFFLINE"),e.length>0&&this.online(e);break;case"assignCountry":e.length>0&&this.gotoAssignCountry(e);break;case"assignStore":e.length>0&&this.gotoAssignStore(e);break;case"cancelAssign":e.length>0&&this.cancelAssign(e);break;case"patchDelete":e.length>0&&this.deleteItem(e);break;case"sortSave":this.saveItemListSort()}e.length>0&&this.$refs.itemListTable.selectAll(!1)},getIds:function(t){for(var e=[],s=0,i=t.length;s<i;s++)e.push(t[s].getValue("itemId"));return e},filterRecords:function(t,e,s){for(var i=[],a=void 0,n=0,r=t.length;n<r;n++)a=t[n],a.getValue(e)==s&&i.push(a);return i}}}}});
//# sourceMappingURL=43.f3e06ca40487bf743463.js.map