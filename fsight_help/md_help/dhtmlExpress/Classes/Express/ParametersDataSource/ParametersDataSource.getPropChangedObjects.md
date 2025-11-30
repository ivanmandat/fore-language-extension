# ParametersDataSource.getPropChangedObjects

ParametersDataSource.getPropChangedObjects
-


**


# ParametersDataSource.getPropChangedObjects


## Синтаксис


getPropChangedObjects();


## Описание


Метод getPropChangedObjects**
 возвращает изменения вкладки «Параметры источников данных» у диалога «Параметры».


## Комментарии


Метод возвращает объект класса [PP.Mb.Ui.PropertyChangedEventArgs](ParametersDataSource.getPropChangedObjects.htm),
 содержащий следующие свойства: PropertyName -
 наименование свойства в виде элемента перечисления PP.Exp.Ui.[ControlType](../../../Enums/PP.Exp.Ui.ControlType.htm),
 Metadata - метаданные, TypeUpdateData - массив типов обновляемых данных,
 Canceled - признак того, что изменения вкладки отменены.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog.htm)
 с наименованием «parametersDialog» (см. «[Пример
 создания компонента ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog_Example.htm)»). Выведем изменения вкладок
 «Параметры источников данных» и «Измерения» у диалога «Параметры» в виде
 JSON-строки:


// Получим вкладки у диалога «Параметры»
var items = parametersDialog._ViewItems;
for(var i = 0; i < items.length; i++) {    var item = items[i];
    switch(item.getTypeName()) {
        case "PP.Exp.Ui.ParametersDataSource":
        console.log("Вкладка «Параметры источников данных»: ");
        item.refresh();
        console.log(item.getPropChangedObjects());
        break;
        case "ParametersDimensionsView":
        console.log("Вкладка «Измерения: ");
        item.refresh();
        console.log(item.getPropChangedObjects());
        break;
    }
}

В результате выполнения примера в консоли браузера будут выведены измерения
 вкладок диалога «Параметры» в виде JSON-строки:


Вкладка «Параметры источников данных»:


[{"_PropertyName":"DataSourceParams","_Metadata":{"destsVis":false,


"params":[{"id":"INTPARAM","k":1,"value":"","vis":false}]},

"_TypeUpdateData":["PropertyBar"],"_ModelUpdateData":"",

"_Callback":null,"_Id":67,"_Canceled":false}]

Вкладка «Измерения:

[{"_PropertyName":"DimOrder","_Metadata":{"hiddenDims":{"it":[{"k":104},{"k":103}]},

"dims":{"its":{"it":[{"k":104,"position":"Top","vis":false},{"k":106,"position":"Left",


"vis":true},{"k":105,"position":"Fixed","vis":true},{"k":103,"position":"Fixed","vis":false},

{"k":98,"position":"Fixed","vis":true}]}},

"displaySourcesNames":false},"_TypeUpdateData":["DimBar","DataView"],

"_ModelUpdateData":"","_Callback":null,"_Id":68,"_Canceled":false}]


См. также:


[ParametersDataSource](ParametersDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
