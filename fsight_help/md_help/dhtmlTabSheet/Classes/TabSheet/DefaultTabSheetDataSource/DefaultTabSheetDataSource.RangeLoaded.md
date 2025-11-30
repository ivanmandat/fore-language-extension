# DefaultTabSheetDataSource.RangeLoaded

DefaultTabSheetDataSource.RangeLoaded
-


**


# DefaultTabSheetDataSource.RangeLoaded


## Синтаксис


RangeLoaded: function (sender, args);


## Параметры


sender. Источник события;


args. Информация о событии. Доступные аргументы: Data - JSON-объект, содержащий свойства Cells (массив ячеек таблицы), Structure (структура таблицы), Version (номер версии данных), и Ranges - массив диапазонов ячеек таблицы. Свойство Structure содержит следующие поля: MUR - максимальное количество строк в таблице, MUC - максимальное количество столбцов, FR - индекс крайней фиксированной строки, FC - индекс крайнего фиксированного столбца, DefaultRow - объект со значениями видимости и высоты строки по умолчанию, DefaultColumn - объект со значениями видимости и ширины столбца по умолчанию, DG - признак видимости сетки, DCN - признак видимости заголовков столбцов, DRN - признак видимости заголовков строк.


## Описание


Событие RangeLoaded** наступает после загрузки диапазонов ячеек в таблицу.


## Пример


Пример использования события приведён на странице «[Конструктор DefaultTabSheetDataSource](Constructor_DefaultTabSheetDataSource.htm)».


См. также:


[DefaultTabSheetDataSource](DefaultTabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
