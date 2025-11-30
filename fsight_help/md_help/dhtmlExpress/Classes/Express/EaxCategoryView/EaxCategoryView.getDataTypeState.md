# EaxCategoryView.getDataTypeState

EaxCategoryView.getDataTypeState
-


**


# EaxCategoryView.getDataTypeState


## Синтаксис


getDataTypeState(dataType);


## Параметры


*dataType.* Тип данных, задаваемый с помощью перечисления PP.Exp.Ui.RankingEnum.


## Описание


Метод getDataTypeState** возвращает свойства меню ленты инструментов «Преобразовать данные».


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. [Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)). Получим свойства меню ленты инструментов «Преобразовать данные»:


var category;
var defaultItem;
// Получим представление вкладки «Данные»
category = expressBox.getRibbonView().getDataRibbonCategory();
data = category.getDataTypeMenu().getItems()[0].getData();
// Выведем свойства различных меню
console.log("Data type state: " + JSON.stringify(category.getDataTypeState(data)));
data = category.getRankingMenu().getItems()[0].getData();
console.log("Ranking state: " + JSON.stringify(category.getRankingState(data)));
console.log("Filter state: " + JSON.stringify(category.getFilterState(data)));
console.log("Table format state: " + JSON.stringify(category.getTableCFormatState(PP.Exp.Ui.TabTablePredefinedScale.RedGreen)));
console.log("Totals state: " + JSON.stringify(category.getTotalsState()));

В результате выполнения данного примера в консоли браузера будет выведен следующий текст:


Data type state: {"@valueType":"Growth","@valueAreaType":"Row"}


Ranking state: {"@rankType":"Desc","@rankAreaType":"Column"}


Filter state: {"suppressEmpty":false,"suppressZeros":false,"suppressNoNumeric":false,"enabled":false}


Table format state: {"Metadata":{"Key":0,"Type":"Scale","Range":{"left":0,"top":0,"width":0,"height":0},"Enabled":true,"Condition":"",


"Details":{"Scale":{"Type":"EqualValues","IntervalsCount":5,"UseAutoColors":true,"StartColor":"#DCE9D7","EndColor":"#6EA45A",


"Colors":{"C":[{"Index":0,"Value":"#FFFFFF"},{"Index":1,"Value":"#FFFFFF"},{"Index":2,"Value":"#FFFFFF"},{"Index":3,"Value":"#FFFFFF"},


{"Index":4,"Value":"#FFFFFF"}]}}},"PredefinedScale":"RedGreen"}}


Totals state: {"rowTypes":{"t":"None"},"columnTypes":{"t":"None"}}


См. также:


[EaxCategoryView](EaxCategoryView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
