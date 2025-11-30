# ILanerTransformPeriod.OutputStartDate

ILanerTransformPeriod.OutputStartDate
-


# ILanerTransformPeriod.OutputStartDate


## Синтаксис


OutputStartDate: DateTime;


## Описание


Свойство OutputStartDate
 определяет дату начала выгрузки данных.


## Комментарии


Для задания даты окончания выгрузки данных используйте свойство [ILanerTransformPeriod.OutputEndDate](ILanerTransformPeriod.OutputEndDate.htm).


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

	            Period.OutputStartDate := DateTime.Parse("01.01.2005");

	            Period.OutputEndDate := DateTime.Parse("01.01.2017");

	        End If;

	    End For;

	    // Сохраняем изменения

	    (ErAn As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для всех вычисляемых рядов в рабочей
 книге будет задан период выгрузки данных.


См. также:


[ILanerTransformPeriod](ILanerTransformPeriod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
