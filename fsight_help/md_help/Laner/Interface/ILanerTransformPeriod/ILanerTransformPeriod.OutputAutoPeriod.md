# ILanerTransformPeriod.OutputAutoPeriod

ILanerTransformPeriod.OutputAutoPeriod
-


# ILanerTransformPeriod.OutputAutoPeriod


## Синтаксис


OutputAutoPeriod: Integer;


## Описание


Свойство OutputAutoPeriod определяет
 условия, которые используются для вычисления дат начала и окончания периода
 выгрузки данных.


## Комментарии


Условия задаются с помощью перечисления [MsDateAutoPeriodOptions](kems.chm::/Enums/MsDateAutoPeriodOptions.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WB_OUTPUT, содержащей один или несколько вычисляемых
 рядов.


Добавьте ссылки на системные сборки: Express, Laner, Metabase.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    i: Integer;

	    Serie: ILanerCalculateSerie;

	    Period: ILanerTransformPeriod;

	Begin

	    // Получаем текущий репозиторий

	    mb := MetabaseClass.Active;

	    // Получаем рабочую книгу

	    ErAn := mb.ItemById("WB_OUTPUT").Edit As IEaxAnalyzer;

	    Laner := ErAn.Laner;

	    // Получаем все ряды в рабочей книге

	    Series := Laner.Series;

	    // Начинаем перебирать ряды

	    For i := 0 To Series.Count - 1 Do

	        Serie := Series.Item(i) As ILanerCalculateSerie;

	        // Если ряд вычисляемый, то задаем для него период выгрузки данных

	        If Serie.Kind = LnSerieKind.Calculate Then

	            Period := Serie.TransformPeriod;

	            // Период выгрузки данных будет задан с помощью условий:

	            // даты начала и окончания периода равна текущему числу

	            // плюс/минус заданное количество периодов

	            Period.OutputAutoPeriod := MsDateAutoPeriodOptions.UseNowAndOffsets;

	            // Количество периодов, на которое сдвигается дата начала периода выгрузки данных

	            Period.OutputStartOffset := -10;

	            // Количество периодов, на которое сдвигается дата окончания периода выгрузки данных

	            Period.OutputEndOffset := 5;

	        End If;

	    End For;

	    // Сохраняем изменения

	    (ErAn As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для всех вычисляемых рядов в рабочей
 книге с помощью условий будет задан период выгрузки данных.


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
