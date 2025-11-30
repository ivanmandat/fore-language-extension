# TabSheetCellBorderStyle.toJSON

TabSheetCellBorderStyle.toJSON
-


# TabSheetCellBorderStyle.toJSON


## Синтаксис


toJSON();


## Описание


Метод toJSON возвращает JSON
 объект с настройками границы.


## Пример


Для выполнения получим диапазон ячеек, аналогично примеру из описания
 [конструктора
 TabSheetCellSpan](../TabSheetCellSpan/Consrtuctor_TabSheetCellSpan.htm). Получим JSON объект с настройками границы:


//Получаем модель таблицы
var model = tabSheet.getModel();
// Получаем стиль по умолчанию
var style = model.getDefaultStyle();
// Получим границу
var border = style.getBorders()[0]
// Получим JSON объект
border.toJSON();
// -> Object {@I: "2", @S: "0", @W: "2", @C: "#FFFFFF"}

В результате выполнения примера был получен JSON объект с настройками
 границы.


См. также:


[TabSheetCellBorderStyle](TabSheetCellBorderStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
