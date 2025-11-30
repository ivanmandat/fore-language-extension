# EaxAnalyzer.TabFocusedCell

EaxAnalyzer.TabFocusedCell
-


**


# EaxAnalyzer.TabFocusedCell


## Синтаксис


TabFocusedCell: PP.Ui.TabSheetCoord


## Описание


Свойство TabFocusedCell** содержит координаты ячейки таблицы экспресс-отчета, в которой установлен фокус .


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setTabFocusedCell, а возвращается с помощью метода getTabFocusedCell.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [ExpressBox](../../../Components/Express/ExpressBox/ExpressBox.htm) с наименованием «expressBox» (см. «[Пример создания компонента ExpressBox](../../../Components/Express/ExpressBox/ExpressBox_Example.htm)»). Выделим любую ячейку таблицы экспресс-отчета и получим ее координаты:


var eaxAnalyzer = expressBox.getSource();
var focusedCell = eaxAnalyzer.getTabFocusedCell();
console.log("Column index: " + focusedCell.colIndex);
console.log("Row index: " + focusedCell.rowIndex);

В результате выполнения примера в консоли браузера будут выведены координаты произвольно выбранной ячейки экспресс-отчета:


Column index: 2

Row index: 3


См. также:


[EaxAnalyzer](EaxAnalyzer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
