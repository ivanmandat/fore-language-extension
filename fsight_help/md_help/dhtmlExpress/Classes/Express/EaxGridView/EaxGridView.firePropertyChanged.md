# EaxGridView.firePropertyChanged

EaxGridView.firePropertyChanged
-


**


# EaxGridView.firePropertyChanged


## Синтаксис


firePropertyChanged(name, state);


## Параметры


*name.* Наименование свойства;


*state. Метаданные, отправляемые на сервер.*


## Описание


Метод firePropertyChanged** обрабатывает события, возникаемые при изменении свойств OLAP-куба для таблицы рабочей области экспресс-отчета.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента EaxGrid с наименованием «eaxGrid» (см. «[Пример создания компонента EaxGrid](../../../Components/Express/EaxGrid/EaxGrid_Example.htm)»). Далее отправим измененные свойства таблицы на сервер:


var state = {};
var selection = eaxGrid._GridSelection;
var row = selection.getRange().getCorners().tlCoord.rowIndex;
var column = selection.getRange().getCorners().tlCoord.colIndex;
state = { grid: { method: "Down", row: row, column: column} };
// Отправляем данные на сервер
eaxGrid.firePropertyChanged(PP.Exp.Ui.GridCellHeaderCMenu.DetailElement, state);

В результате выполнения данного примера измененные свойства таблицы будут отправлены на сервер.


См. также:


[EaxGridView](EaxGridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
