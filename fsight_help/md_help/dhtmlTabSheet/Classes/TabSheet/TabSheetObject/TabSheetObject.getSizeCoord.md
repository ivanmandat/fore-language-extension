# TabSheetObject.getSizeCoord

TabSheetObject.getSizeCoord
-


**


# TabSheetObject.getSizeCoord


## Синтаксис


getSizeCoord();


## Описание


Метод getSizeCoord** возвращает количество строк и столбцов, которые охватывает объект в таблице.


## Комментарии


Метод возвращает JSON-объект со следующими полями: row - количество строк, column - количество столбцов.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)») и компонента [TabSheetObject](TabSheetObject.htm) (см. страницу «[Конструктор TabSheetObject](Constructor_TabSheetObject.htm)»). Определим количество строк и столбцов, которые охватывает объект в таблице, и его размер в пикселях:


// Определим размер объекта в количестве строк и столбцов, им занимаемом
var sizeCoord = tabSheetObject.getSizeCoord();
console.log("Количество охваченных строк: " + sizeCoord.row + ", количество столбцов: " + sizeCoord.column);
// Получим размер объекта в пикселях
var visibleSize = tabSheetObject.getVisibleSize();
console.log("Ширина объекта: " + visibleSize.width + ", высота: " + visibleSize.height);

В результате выполнения примера в консоли браузера было выведено количество строк и столбцов, которые охватывает объект в таблице, и его размер в пикселях:


Количество охваченных строк: 1, количество столбцов: 1


Ширина объекта: 32, высота: 32


См. также:


[TabSheetObject](TabSheetObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
