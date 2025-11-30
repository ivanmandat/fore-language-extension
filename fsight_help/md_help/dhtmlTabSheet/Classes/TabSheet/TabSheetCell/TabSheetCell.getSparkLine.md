# TabSheetCell.getSparkLine

TabSheetCell.getSparkLine
-


**


# TabSheetCell.getSparkLine


## Синтаксис


getSparkLine();


## Описание


Метод getSparkLine** возвращает
 спарклайн, находящийся в ячейке таблицы.


## Комментарии


Метод возвращает экземпляр класса PP.Ui.TabSheetCellSparkLine, содержащий
 информацию о параметрах спарклайна.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Classes/Express/expressbox/expressbox.htm)
 с наименованием «expressBox» (см. [Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/components/express/expressbox/expressbox_example.htm)), содержащего таблицу с отображением
 спарклайнов по столбцам. Получим информацию о спарклайне, находящемся
 в ячейке с координатами (1, 1):


    var tabSheet = expressBox.getDataView().getGridView().getTabSheet();
    var cell = tabSheet.getModel().getCell(tabSheet.coord(1, 1));
    var SparkLine = cell.getSparkLine();
    console.log(SparkLine);
В результате выполнения примера в консоль браузера будет выведена информация
 о спарклайне, находящемся в ячейке с координатами (1, 1):


PP.Ui.TabSheetCellSparkLine {_Parent: PP.Ui.TabSheetCell
 ...}


См. также:


[TabSheetCell](TabSheetCell.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
