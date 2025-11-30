# PP.Mb.Ui.GridView.SyncLoadClipboardData

PP.Mb.Ui.GridView.SyncLoadClipboardData
-


**


# GridView.SyncLoadClipboardData


## Синтаксис


SyncLoadClipboardData: Boolean;


## Описание


Свойство SyncLoadClipboardData
 определяет признак синхронной подгрузки данных, если при копировании есть
 неподгруженные ячейки.


## Комментарии


Значение свойства устанавливается из JSON и с помощью метода setSyncLoadClipboardData,
 а возвращается с помощью метода getSyncLoadClipboardData.**


Свойство содержит значение true,
 если разрешена синхронная подгрузка данных в случае наличия при копировании
 неподгруженных ячеек, иначе - false.


По умолчанию свойство имеет значение false.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента
 [ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox.htm)
 с наименованием «expressBox» (см. «[Пример
 создания компонента ExpressBox](dhtmlExpress.chm::/Components/Express/ExpressBox/ExpressBox_Example.htm)») и с загруженной таблицей
 в рабочей области экспресс-отчета.


Разрешим синхронную подгрузку данных при копировании неподгруженных
 ячеек. Выделим диапазон ячеек в таблице и вставим его значение в другую
 ячейку. Получим и выведем измененные значения:


// Получим таблицу экспресс-отчета
var grid = expressBox.getDataView().getGridView();
// Разрешим синхронную подгрузку данных при копировании неподгруженных ячеек
grid.setSyncLoadClipboardData(true);
// Получим таблицу
var tabSheet = grid.getTabSheet();
// Получим диапазон ячеек и выделим его
var range = tabSheet.getRange(1, 3, 1, 3);
tabSheet.select(range, false);
// Получаем данные выделенного диапазона
var value = tabSheet.copy(range);
// Вставим данные в ячейку с координатами (2, 1);
tabSheet.paste(value, 2, 1);
// Получим измененные данные
var cData = grid.getChangedData()[0];
console.log("Новое значение ячейки [" + cData.L + ", " + cData.T + "] : " + cData.CellData.V);
В результате выполнения примера было скопировано и вставлено в новое
 место значение ячейки, в консоли браузера было выведено измененное значение:


Новое значение ячейки [1, 2] : 5


См. также:


[GridView](GridView.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
