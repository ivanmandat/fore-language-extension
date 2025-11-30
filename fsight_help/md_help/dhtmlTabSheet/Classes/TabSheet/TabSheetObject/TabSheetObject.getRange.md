# TabSheetObject.getRange

TabSheetObject.getRange
-


**


# TabSheetObject.getRange


## Синтаксис


getRange();


## Описание


Метод getRange** возвращает диапазон ячеек, охватываемый объектом в таблице.


## Комментарии


Метод возвращает объект типа PP.Ui.[TabSheetRange](../TabSheetRange/TabSheetRange.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)») и компонента [TabSheetObject](TabSheetObject.htm) (см. страницу «[Конструктор TabSheetObject](Constructor_TabSheetObject.htm)»). Установим символ «*» в ячейке, в пределах которой расположен левый верхний угол объекта, и выделим диапазон, охватываемый данным объектом:


// Получим координаты объекта
var coord = tabSheetObject.getCoord();
// Установим символ «*» в ячейке, в пределах которой расположен левый верхний угол объекта
tabSheet.setCellValue("*", coord.rowIndex, coord.colIndex);
// Получим диапазон ячеек, охватываемый объектом в таблице
var range = tabSheetObject.getRange();
// Выделим полученный диапазон
range.select();

В результате выполнения примера в ячейку B0, в пределах которой расположен левый верхний угол объекта, был записан символ «*», а диапазон B0-B1, охватываемый данный объектом, был выделен:


![](TabSheetObject.getRange.png)


См. также:


[TabSheetObject](TabSheetObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
