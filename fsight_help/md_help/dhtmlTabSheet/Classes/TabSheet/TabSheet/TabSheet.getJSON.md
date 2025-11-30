# TabSheet.getJSON

TabSheet.getJSON
-


**


# TabSheet.getJSON


## Синтаксис


getJSON(range: PP.Ui.[TabSheetRange](../TabSheetRange/TabSheetRange.htm));


## Параметры


*range.* Диапазон ячеек, преобразуемый в JSON-объект.


## Описание


Метод getJSON** преобразует указанный диапазон ячеек в JSON-объект.


## Комментарии


Метод возвращает значение типа Object.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Преобразуем диапазон ячеек в JSON-объект и выведен информацию по сериализованным данным:


// Получим диапазон ячеек по заданным координатам
var range = tabSheet.getRange(0, 0, 1, 1);
// Сериализуем диапазон в формат источника данных
var result = tabSheet.getJSON(range);
// Выведем информацию по сериализованным данным
for (var i in result.Cells.Cell) {
    var cell = result.Cells.Cell[i];
    console.log("Значение ячейки (" + cell.L + "," + cell.T + "): " + cell.CellData.FT)
};

В результате выполнения примера в консоли браузера были выведены значения ячеек, входящих в диапазон в виде JSON-объекта:


Значение ячейки (0,0): 16905

Значение ячейки (1,0): 3912

Значение ячейки (0,1): 19281

Значение ячейки (1,1): 5315


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
