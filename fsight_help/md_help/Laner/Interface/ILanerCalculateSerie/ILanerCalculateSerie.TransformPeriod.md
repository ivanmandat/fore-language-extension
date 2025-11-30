# ILanerCalculateSerie.TransformPeriod

ILanerCalculateSerie.TransformPeriod
-


# ILanerCalculateSerie.TransformPeriod


## Синтаксис


TransformPeriod: [ILanerTransformPeriod](../ILanerTransformPeriod/ILanerTransformPeriod.htm);


## Описание


Свойство TransformPeriod возвращает
 параметры периода расчёта вычисляемого ряда.


## Комментарии


Используется для изменения периода расчёта конкретного ряда, а не всей
 рабочей книги.


По умолчанию период расчёта вычисляемого ряда совпадет с периодом расчёта
 рабочей книги:


	- начало идентификации = [ILaner.StartDate](../ILaner/ILaner.StartDate.htm);


	- конец прогнозирования = [ILaner.EndDate](../ILaner/ILaner.EndDate.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_TR_PERIOD, первый ряд в которой - вычисляемый.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


			Sub UserProc;

Var

    mb: IMetabase;

    Analyzer: IEaxAnalyzer;

    pLaner: ILaner;

    pSeries: ILanerCalculateSerie;

    TransPeriod: ILanerTransformPeriod;

Begin

    // Получим текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаим рабочую книгу

    Analyzer := mb.ItemById("WORKBOOK_TR_PERIOD").Edit As IEaxAnalyzer;

    pLaner := Analyzer.Laner;

    // Получим первый ряд в рабочей книге

    pSeries := pLaner.Series.Item(0) As ILanerCalculateSerie;

    // Получим параметры периода расчёта ряда

    TransPeriod := pSeries.TransformPeriod;

    // Укажем, что используем дату начала прогнозирования

    TransPeriod.IsUsingForecastStart := True;

    // Укажем, что период прогнозирования может идти до периода идентификации

    TransPeriod.AllowForecastBeforeIdent := True;

    // Зададим даты начала и окончания периодов идентификации и прогнозирования

    TransPeriod.PeriodSet := LnTransformPeriodSet.All;

    TransPeriod.StartDate := DateTime.Parse("01.01.2000");

    TransPeriod.EndDate := DateTime.Parse("01.01.2000");

    // Сохраним изменения

    (Analyzer As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в рабочей книге для вычисляемого ряда будут
 установлены следующие параметры периода расчёта:


	- начало идентификации - «01.01.2000»;


	- конец прогнозирования - «01.01.2000».


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
