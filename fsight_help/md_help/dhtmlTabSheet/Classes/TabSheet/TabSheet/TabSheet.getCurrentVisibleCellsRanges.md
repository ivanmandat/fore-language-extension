# TabSheet.getCurrentVisibleCellsRanges

TabSheet.getCurrentVisibleCellsRanges
-


**


# TabSheet.getCurrentVisibleCellsRanges


## Синтаксис


getCurrentVisibleCellsRanges();


## Описание


Метод getCurrentVisibleCellsRanges**
 возвращает текущий видимый диапазон ячеек.


## Комментарии


Метод возвращает массив объектов типа PP.Ui.[TabSheetCoord](../TabSheetCoord/TabSheetCoord.htm).


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm)
 с наименованием «tabSheet» (см. «[Пример
 создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»). Получим координаты текущего видимого
 диапазона ячеек:


// Получим текущий видимый диапазон ячеек
var ranges = tabSheet.getCurrentVisibleCellsRanges()
for (var i in ranges) {
    if (ranges[i] instanceof PP.Ui.TabSheetRange) {
        var tlCoord = ranges[i].getCorners().tlCoord;
        var brCoord = ranges[i].getCorners().brCoord;
        console.log("Видимый диапазон: (" + tlCoord.colIndex + "," + tlCoord.rowIndex + ")" +
            "-(" + brCoord.colIndex + "," + brCoord.rowIndex + ")");
    }
};

В результате выполнения примера в консоли браузера были выведены координаты
 текущего видимого диапазона ячеек:


Видимый диапазон: (0,0)-(3,3)


См. также:


[TabSheet](TabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
