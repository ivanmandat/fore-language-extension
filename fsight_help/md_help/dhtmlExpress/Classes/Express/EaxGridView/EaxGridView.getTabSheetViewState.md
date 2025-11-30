# EaxGridView.getTabSheetViewState

EaxGridView.getTabSheetViewState
-


**


# EaxGridView.getTabSheetViewState


## Синтаксис


getTabSheetViewState();


## Описание


Метод getTabSheetViewState** возвращает свойства представления таблицы в JSON-формате.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента ExpressBox с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Выведем ширину и высоту таблицы:


// Получаем свойства представления таблицы.
var tabSheetViewState = expressBox.getDataView().getGridView().getTabSheetViewState();
// Получаем размер таблицы
var size = tabSheetViewState.size;
// Выводим ширину и высоту таблицы
console.log("Width: " + size.width);
console.log("Height: " + size.height);

В результате выполнения примера в консоли будут выведены ширина и высота таблицы:


Width: 866

Height: 222


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
