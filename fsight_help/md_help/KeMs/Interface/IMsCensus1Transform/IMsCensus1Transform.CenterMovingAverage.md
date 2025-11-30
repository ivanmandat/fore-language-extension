# IMsCensus1Transform.CenterMovingAverage

IMsCensus1Transform.CenterMovingAverage
-


# IMsCensus1Transform.CenterMovingAverage


## Синтаксис


		CenterMovingAverage: Boolean;


## Описание


Свойство CenterMovingAverage
 определяет признак центрирования скользящего среднего.


## Комментарии


Допустимые значения:


	- True. Скользящее среднее
	 центрируется;


	- False. По умолчанию.
	 Скользящее среднее не центрируется.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащего модель с идентификатором
 MODEL_CENSUS1 и переменную с идентификатором OUTPUT_VAR_CENSUS. Переменная
 должна содержать квартальные данные.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Stat.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    MsObj: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Vars: IMsFormulaTransformVariables;

		    OutputStub: IVariableStub;

		    OutputVar: IMsFormulaTransformVariable;

		    Coord: IMsFormulaTransformCoord;

		    Slice: IMsFormulaTransformSlice;

		    Selector: IMsFormulaTransformSelector;

		    Formula: IMsFormula;

		    Census1: IMsCensus1Transform;

		    Calc: IMsMethodCalculation;

		    CPeriod, TPeriod: IMsModelPeriod;

		    Data: Array Of Double;

		Begin

		mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MsObj := mb.ItemById("MODEL_SPACE");

		    // Получаем модель

		    Model := mb.ItemByIdNamespace("MODEL_CENSUS1", MsObj.Key).Edit As IMsModel;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    // Задаем моделируемую переменную

		    Vars := Transform.Outputs;

		    Vars.Clear;

		    OutputStub := mb.ItemByIdNamespace("OUTPUT_VAR_CENSUS", MsObj.Key).Edit As IVariableStub;

		    OutputVar := Vars.Add(OutputStub);

		    // Получаем параметры метода расчета модели

		    Coord := Transform.CreateCoord(OutputVar);

		    Slice := OutputVar.Slices.Add(Null);

		    Selector := Transform.CreateSelector;

		    Selector.Slice := Slice;

		    Formula := Transform.Transform(Selector);

		    // Задаем календарную динамику расчета

		    Formula.Level := DimCalendarLevel.Quarter;

		    // Задаем метод расчёта модели

		    Formula.Kind := MsFormulaKind.Census1;

		    // Получаем параметры расчёта метода Census1

		    Census1 := Formula.Method As IMsCensus1Transform;

		    // Задаем тип сезонности

		    Census1.Seasonality := SeasonalityType.Additive;

		    // Центрируем скользящее среднее

		    Census1.CenterMovingAverage := True;

		    // Задаем параметры обработки пропусков

		    Census1.MissingData.Method := MissingDataMethod.LinTrend;

		    Census1.OutputType := MsCensus1OutputType.RD;

		    // Сохраняем изменения

		    (Model As IMetabaseObject).Save;

		    // Задаем параметры периода расчёта

		    Calc := Transform.CreateCalculation;

		    CPeriod := Calc.Period;

		    TPeriod := model.Transform.Period;

		    CPeriod.IdentificationStartDate := TPeriod.IdentificationStartDate;

		    CPeriod.IdentificationEndDate := TPeriod.IdentificationEndDate;

		    CPeriod.ForecastStartDate := TPeriod.ForecastStartDate;

		    CPeriod.ForecastEndDate := TPeriod.ForecastEndDate;

		    // Выполняем расчет

		    Census1.Execute(Calc, Coord);

		    // Выводим результаты расчета

		    Data := Census1.Explained.Serie(Calc);

		    Debug.WriteLine("Смоделированные данные");

		    Print(Data); Debug.WriteLine("");

		    Data := Census1.MovingAverage;

		    Debug.WriteLine("Сглаженный ряд");

		    Print(Data); Debug.WriteLine("");

		    Data := Census1.RatioDifferences;

		    Debug.WriteLine("Разность");

		    Print(Data); Debug.WriteLine("");

		    Data := Census1.Seasonal;

		    Debug.WriteLine("Сезонная составляющая");

		    Print(Data); Debug.WriteLine("");

		    Data := Census1.SeasonalAdjustment;

		    Debug.WriteLine("Сезонная корректировка");

		    Print(Data); Debug.WriteLine("");

		    Data := Census1.TrendCycle;

		    Debug.WriteLine("Тренд-циклическая компонента");

		    Print(Data); Debug.WriteLine("");

		    Data := Census1.Irregula;

		    Debug.WriteLine("Нерегулярная компонента");

		    Print(Data); Debug.WriteLine("");

		End Sub UserProc;


		// Процедура вывода данных

		Sub Print(Data: Array Of Double);

		Var

		    i: Integer;

		Begin

		    Debug.Indent;

		    For i := 0 To Data.Length - 1 Do

		        Debug.WriteLine(i.ToString + " " + Data[i].ToString);

		    End For;

		    Debug.Unindent;

		End Sub Print;


В результате выполнения примера модель MODEL_SPACE будет настроена на
 расчёт метода Census1 и рассчитана, а результаты будут выведены в окно
 консоли.


См. также:


[IMsCensus1Transform](IMsCensus1Transform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
