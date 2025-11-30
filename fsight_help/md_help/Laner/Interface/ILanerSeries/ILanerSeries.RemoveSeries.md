# ILanerSeries.RemoveSeries

ILanerSeries.RemoveSeries
-


# ILanerSeries.RemoveSeries


## Синтаксис


RemoveSeries(Value: [ILanerSeriesSet](../ILanerSeriesSet/ILanerSeriesSet.htm));


## Параметры


Value. Удаляемые ряды.


## Описание


Метод RemoveSeries удаляет
 указанные ряды из рабочей книги.


## Комментарии


Для удаления отдельного ряда используйте методы [ILanerSeries.Remove](ILanerSeries.Remove.htm),
 [ILanerSeries.RemoveByKey](ILanerSeries.RemoveByKey.htm) и
 [ILanerSeries.RemoveGroupedByKey](ILanerSeries.RemoveGroupedByKey.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_SERIES, содержащей более двух рядов.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    SeriesSet: ILanerSeriesSet;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SERIES").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем ряды рабочей книги

	    Series := Laner.Series;

	    // Создаём набор рядов

	    SeriesSet := Series.CreateSet;

	    // Добавляем первые два ряда в набор

	    SeriesSet.Add(Series.Item(0));

	    SeriesSet.Add(Series.Item(1));

	    // Удаляем из рабочей книги ряды, входящие в набор

	    Series.RemoveSeries(SeriesSet);

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера из рабочей книги будут удалены первые
 два ряда данных.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
