# IEaxDataAreaTransformation.Period

IEaxDataAreaTransformation.Period
-


# IEaxDataAreaTransformation.Period


## Синтаксис


Period: Object;


## Описание


Свойство Period возвращает период
 расчета формулы.


## Комментарии


Для работы со значением, возвращаемым данным свойством, приведите его
 к интерфейсу [IMsModelPeriod](KeMs.chm::/Interface/IMsModelPeriod/IMsModelPeriod.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS_TRANSF_PERIOD, содержащего вычисляемый элемент
 в каком-либо измерении.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Ms.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    Analyzer: IEaxAnalyzer;

	    Slice: IEaxDataAreaSlice;

	    Transforms: IEaxDataAreaTransformations;

	    Transf: IEaxDataAreaTransformation;

	    Period: IMsModelPeriod;

	    OutputPeriod: IMsDatePeriod;

	Begin

	    // Получаем экспресс-отчет

	    mb := MetabaseClass.Active;

	    Analyzer := mb.ItemById("EXPRESS_TRANSF_PERIOD").Edit As IEaxAnalyzer;

	    // Получаем срез, по которому построена таблица

	    Slice := Analyzer.Grid.Slice;

	    // Получаем формулы вычисляемых элементов

	    Transforms := Slice.CalcTransformations;

	    // Получаем формулу первого элемента

	    Transf := Transforms.Item(0);

	    // Задаем период расчета формулы

	    Period := Transf.Period As IMsModelPeriod;

	    Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

	    Period.IdentificationEndDate := DateTime.Parse("01.01.2010");

	    Period.ForecastStartDate := DateTime.Parse("01.01.2010");

	    Period.ForecastEndDate := DateTime.Parse("01.01.2020");

	    // Задаем период выгрузки данных

	    OutputPeriod := Transf.OutputPeriod As IMsDatePeriod;

	    OutputPeriod.Start := DateTime.Parse("01.01.1990");

	    OutputPeriod.End_ := DateTime.Parse("01.01.2020");

	    // Задаем календарную динамику формулы

	    Transf.Level := DimCalendarLevel.Year;

	    // Сохраняем изменения

	    (Analyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для первого вычисляемого элемента измерения
 будут изменены период расчета и период выгрузки данных.


См. также:


[IEaxDataAreaTransformation](IEaxDataAreaTransformation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
