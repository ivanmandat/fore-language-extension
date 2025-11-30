# DefaultTabSheetDataSource.loadMeasures

DefaultTabSheetDataSource.loadMeasures
-


**


# DefaultTabSheetDataSource.loadMeasures


## Синтаксис


loadMeasures();


## Описание


Метод loadMeasures** загружает значения в таблицу.


## Пример


Для выполнения примера необходимо наличие на html-странице компонента [TabSheet](../../../Components/TabSheet/TabSheet/TabSheet.htm) с наименованием «tabSheet» (см. «[Пример создания компонента TabSheet](../../../Components/TabSheet/TabSheet/TabSheet_Example.htm)»), а также экземпляра класса PP.Ui.[DefaultTabSheetDataSource](DefaultTabSheetDataSource.htm) с наименованием «dataSource» (см. сценарий на странице «[Конструктор DefaultTabSheetDataSource](Constructor_DefaultTabSheetDataSource.htm)»). Загрузим значения и диапазон ячеек A0-C2 в таблицу:


// Загрузим значения в таблицу
dataSource.loadMeasures();
// Определим диапазон ячеек
var range = tabSheet.getRange(0, 0, 2, 2);
// Загрузим созданный диапазон ячеек в таблицу
dataSource.loadRanges([range]);

После выполнения примера в таблицу были загружены значения и диапазон ячеек A0-C2. В результате срабатывания соответствующих событий [MeasuresLoaded](DefaultTabSheetDataSource.MeasuresLoaded.htm) и [RangeLoaded](DefaultTabSheetDataSource.RangeLoaded.htm) в консоль браузера были выведены количество ячеек с загруженными значениями и список загруженных диапазонов:


Количество ячеек с загруженными значениями: 0

Загружен диапазон (0, 0)-(2, 2)


См. также:


[DefaultTabSheetDataSource](DefaultTabSheetDataSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
