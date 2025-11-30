# ILanerSeries.AddCalculateSerieAsLocal

ILanerSeries.AddCalculateSerieAsLocal
-


# ILanerSeries.AddCalculateSerieAsLocal


## Синтаксис


AddCalculateSerieAsLocal(

    SerieName: String;

    Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm);

    [ScenarioKey: Integer = -1;]

    [Index: Integer = -1]

): [ILanerCalculateSerie](../ILanerCalculateSerie/ILanerCalculateSerie.htm);


## Параметры


SerieName. Наименование добавляемого
 ряда;


Level. Календарная динамика
 добавляемого ряда;


ScenarioKey. Сценарий, по которому
 добавляется ряд;


Index. Индекс позиции, в которую
 необходимо добавить ряд.


## Описание


Метод AddCalculateSerieAsLocal
 добавляет новый ряд данных.


## Комментарии


Если параметр ScenarioKey имеет
 значение «-1», то ряд создается по сценарию «Факт».


Если параметр Index имеет значение
 «-1», то ряд добавляется в конец коллекции рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_SERIES, содержащей несколько рядов.


Добавьте ссылки на системные сборки: Dimensions, Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    SerieCalc: ILanerCalculateSerie;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SERIES").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем ряды рабочей книги

	    Series := Laner.Series;

	    // Добавляем пустой ряд

	    SerieCalc := Series.AddCalculateSerieAsLocal("Новый ряд", DimCalendarLevel.Year, -1, 1);

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc


В результате выполнения примера в рабочую книгу после первого ряда будет
 добавлен новый ряд, который не содержит данных. Обязательные атрибуты
 данного ряда не будут определены.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
