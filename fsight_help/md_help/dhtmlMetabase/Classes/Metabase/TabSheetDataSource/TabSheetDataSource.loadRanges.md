# TabSheetDataSource.loadRanges

TabSheetDataSource.loadRanges
-


# TabSheetDataSource.loadRanges


## Синтаксис


loadRanges(rangeArray: Array);


## Параметры


rangeArray. Массив диапазонов
 ячеек [PP.Ui.TabSheetRange](dhtmlTabSheet.chm::/Classes/TabSheet/TabSheetRange/TabSheetRange.htm),
 которые необходимо загрузить.


## Описание


Метод loadRanges отправляет
 сервису запрос на получение диапазона ячеек.


## Пример


Для выполнения примера необходимо использовать пример, приведённый на
 странице описания метода [TabSheetDataSource.loadSyncData](TabSheetDataSource.loadSyncData.htm),
 заменив строку


source.loadSyncData([range1, range2]);


на следующую:


source.loadRanges([range1, range2]);


Результат выполнения примера будет тем же.


См. также:


[TabSheetDataSource](TabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
