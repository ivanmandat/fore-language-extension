# TabSheetCell.toJSON

TabSheetCell.toJSON
-


# TabSheetCell.toJSON


## Синтаксис


toJSON();


## Описание


Метод toJSON возвращает объект
 ячейки в формате JSON.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим JSON представление ячейки
 таблицы:


// Получаем модель таблицы
var model = tabSheet.getModel();
// Получим координаты
var coord = tabSheet.coord(0, 1);
// Получим ячейку по координате
var cell = model.getCell(coord);
// Получим
var string = cell.toJSON();
console.log(string);

В результате выполнения примера был получен JSON объект ячейки таблицы.


См. также:


[TabSheetCell](TabSheetCell.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
