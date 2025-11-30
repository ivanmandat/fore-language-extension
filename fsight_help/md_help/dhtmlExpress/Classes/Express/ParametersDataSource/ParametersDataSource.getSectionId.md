# ParametersDataSource.getSectionId

ParametersDataSource.getSectionId
-


**


# ParametersDataSource.getSectionId


## Синтаксис


getSectionId();


## Описание


Метод getSectionId** возвращает
 ключ вкладки «Параметры источников данных» у диалога «Параметры».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog.htm)
 с наименованием «parametersDialog» (см. «[Пример
 создания компонента ParametersDialog](../../../Components/Express/ParametersDialog/ParametersDialog_Example.htm)»). Получим ключи вкладок «Параметры
 источников данных» и «Измерения»:


// Получим вкладки у диалога «Параметры»
var items = parametersDialog._ViewItems;
for(var i = 0; i < items.length; i++) {    var item = items[i];
    var key = item.getSectionId();
    switch(item.getTypeName()) {
        case "PP.Exp.Ui.ParametersDataSource":
        console.log("Ключ вкладки «Параметры источников данных»: " + key);
        break;
        case "ParametersDimensionsView":
        console.log("Ключ вкладки «Измерения»: " + key);
        break;
    }
}

В результате выполнения примера в консоль браузера будут выведены ключи
 вкладок диалога «Параметры»:


Ключ вкладки «Параметры источников данных»: SI_DataSourceParams

Ключ вкладки «Измерения: SI_DimsView


См. также:


[ParametersDataSource](ParametersDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
