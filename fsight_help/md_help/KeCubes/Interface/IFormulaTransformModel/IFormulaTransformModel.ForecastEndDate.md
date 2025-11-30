# IFormulaTransformModel.ForecastEndDate

IFormulaTransformModel.ForecastEndDate
-


# IFormulaTransformModel.ForecastEndDate


## Синтаксис


ForecastEndDate: DateTime;


## Описание


Свойство ForecastEndDate определяет
 дату окончания периода прогнозирования.


## Пример


Для выполнения примера в репозитории необходимо наличие рабочей книги
 с идентификатором WORKBOOK. В рабочей области должна содержаться база
 данных временных рядов. В данной базе должен присутствовать показатель
 с ключом «1», содержащий годовые данные.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Express, Laner,
 Metabase, Ms.


			Sub UserProc;

Var

    MB: IMetabase;

    Workbook: IEaxAnalyzer;

    Laner: ILaner;

    Series: ILanerSeries;

    RubrIn: IRubricatorInstance;

    Factor: IRubricatorFactor;

    Serie: ILanerCalculateSerie;

    VarStub: IVariableStub;

    CalcSerie: ILanerCalculateSerie;

    TransformModel: IFormulaTransformModel;

    FormulaTransform: IMsFormulaTransform;

    Slice: IMsFormulaTransformSlice;

    Selector: IMsFormulaTransformSelector;

    Formula: IMsFormula;

    Arima: IMsArimaTransform;

    TermInfo: IMsFormulaTermInfo;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим рабочую книгу

    Workbook := MB.ItemById("WORKBOOK").Edit As IEaxAnalyzer;

    // Получим рабочую область каталога показателей

    Laner := Workbook.Laner;

    // Зададим даты начала и окончания, по которым будут отображаться данные

    Laner.StartDate := DateTime.Parse("01.01.2008");

    Laner.EndDate := DateTime.Parse("31.12.2008");

    // Получим коллекцию рядов рабочей области

    Series := Laner.Series;

    // Получим данные базы данных временных рядов

    RubrIn := Laner.RubricatorInstance;

    // Получим временной ряд показателя с ключом «1»

    Factor := RubrIn.GetFactData(1).Factor;

    // Добавим вычисляемый ряд на основе временного ряда

    Serie := Series.AddCalculateSerieAsSource(Factor);

    VarStub := Serie.Stub;

    // Добавим вычисляемый ряд с наименованием «ARIMA»

    CalcSerie := Series.AddCalculateSerie("ARIMA");

    // Настроим параметры вычисляемого ряда

    TransformModel := CalcSerie.Transform;

    TransformModel.AddInputVariable(VarStub);

    TransformModel.IdentificationStartDate := DateTime.Parse("01.01.2000 00:00:00");

    TransformModel.IdentificationEndDate := DateTime.Parse("31.12.2007 00:00:00");

    TransformModel.ForecastStartDate := DateTime.Parse("01.01.2008 00:00:00");

    TransformModel.ForecastEndDate := DateTime.Parse("31.12.2017 00:00:00");

    TransformModel.UsePeriod := True;

    // Настроим параметры метода расчёта

    FormulaTransform := TransformModel.Transform As IMsFormulaTransform;

    FormulaTransform.Inputs.Add(VarStub);

    Slice := FormulaTransform.Outputs.Item(0).Slices.Add(Null);

    Selector := FormulaTransform.CreateSelector;

    Selector.Slice := Slice;

    Formula := FormulaTransform.Transform(Selector);

    Formula.Kind := MsFormulaKind.Arima;

    Formula.Level := DimCalendarLevel.Year;

    Arima := Formula.Method As IMsArimaTransform;

    Slice := FormulaTransform.Inputs.Item(0).Slices.Add(Null);

    TermInfo := FormulaTransform.CreateTermInfo;

    TermInfo.Slice := Slice;

    Arima.Series.Input := TermInfo;

    // Сохраним изменения

    (Workbook As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в рабочей книге будет добавлен новый вычисляемый
 ряд «ARIMA», рассчитывающий показатель с ключом «1» с помощью метода ARIMA.
 Для вычислений будут использоваться указанные периоды идентификации и
 прогнозирования.


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
