# TabSheetDataSource.loadSyncData

TabSheetDataSource.loadSyncData
-


# TabSheetDataSource.loadSyncData


## Синтаксис


loadSyncData(rangeArray: Array, args: Object);


## Параметры


rangeArray. Массив диапазонов
 ячеек [PP.Ui.TabSheetRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheetRange/TabSheetRange.htm);


args. Передаваемые аргументы.
 Необязательный параметр.


## Описание


Метод loadSyncData отправляет
 сервису синхронный запрос на получение диапазона ячеек.


## Комментарии


Метод возвращает JSON-объект, содержащий загруженные данные.


## Пример


Для выполнения примера предполагается наличие на странице компонента
 [GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox.htm)
 с наименованием «grid» (см. «[Пример
 размещения компонента GridBox](dhtmlReport.chm::/Components/RegularReport/GridBox/GridBox_example.htm)»). Загрузим и определим данные диапазонов
 B2 и C2:


// Получим таблицу
var tabSheet = grid.getTabSheet();
// Зададим два диапазона
var range1 = tabSheet.getRange(1, 2, 1, 2);
var range2 = tabSheet.getRange(2, 2, 2, 2);
// Получим источник данных таблицы
var source = grid.getTableSource();
// Отправим сервису запрос на получение диапазона ячеек
source.loadSyncData([range1, range2]);
// Обработаем событие RangeLoaded
source.RangeLoaded.add(function (sender, args) {
    for (var i in args.Data) {
        // Получим данные о загруженном диапазоне
        var corners = args.Ranges[i].getCorners();
        var range = "(" + corners.tlCoord.rowIndex + ", " + corners.tlCoord.colIndex + ")-" +
            "(" + corners.brCoord.rowIndex + ", " + corners.brCoord.colIndex + ")";
        // Получим содержимое загруженного диапазона
        var data = args.Data[i];
        var value = data.Cells.Cell[0].CellData.FormattedText;
        console.log("Значение в диапазоне " + range + " равно " + value);
    }
});
В результате выполнения примера в консоли браузера были выведены данные
 диапазонов B2 и C2:


Значение в диапазоне (2, 1)-(2, 1) равно 16905,3


Значение в диапазоне (2, 2)-(2, 2) равно 3912


См. также:


[TabSheetDataSource](TabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
