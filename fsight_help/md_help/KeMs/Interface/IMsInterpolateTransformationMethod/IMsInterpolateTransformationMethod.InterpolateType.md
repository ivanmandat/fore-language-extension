# IMsInterpolateTransformationMethod.InterpolateType

IMsInterpolateTransformationMethod.InterpolateType
-


# IMsInterpolateTransformationMethod.InterpolateType


## Синтаксис


InterpolateType: [MsInterpolateType](../../Enums/MsInterpolateType.htm);


## Описание


Свойство InterpolateType определяет
 метод дезагрегации, который необходимо применить при преобразовании терма.


## Пример


Для выполнения примера в репозитории необходимо наличие рабочей книги
 с идентификатором WORKBOOK. В рабочей области должна содержаться база
 данных временных рядов. В данной базе должен присутствовать показатель
 с ключом «1», содержащий квартальные данные.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Express, Laner,
 Metabase, Ms, Rds.


			Sub UserProc;

Var

    MB: IMetabase;

    Workbook: IEaxAnalyzer;

    Laner: ILaner;

    Factor: IRubricatorFactor;

    Series: ILanerSeries;

    RubrIn: IRubricatorInstance;

    Serie: ILanerCalculateSerie;

    TransformModel: IFormulaTransformModel;

    CalcSerie: ILanerCalculateSerie;

    Selector: IMsFormulaTransformSelector;

    Slice: IMsFormulaTransformSlice;

    MDic: IMetaDictionary;

    MetaAttr: IMetaAttribute;

    MsMetaAttributeValue: IMsMetaAttributeValue;

    Formula: IMsFormula;

    FormulaTransform: IMsFormulaTransform;

    Det: IMsDeterministicTransform;

    Rubricator: IRubricator;

    Info: IMsFormulaTermInfo;

    Term: IMsFormulaTerm;

    TermMeth: IMsFormulaTermTransformationMethod;

    Interpolate: IMsInterpolateTransformationMethod;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим рабочую книгу

    Workbook := MB.ItemById("WORKBOOK").Edit As IEaxAnalyzer;

    // Получим рабочую область каталога показателей

    Laner := Workbook.Laner;

    // Получим коллекцию рядов рабочей области

    Series := Laner.Series;

    // Получим данные базы данных временных рядов

    RubrIn := Laner.RubricatorInstance;

    // Получим временной ряд показателя с ключом «1»

    Factor := RubrIn.GetFactData(1).Factor;

    // Добавим вычисляемый ряд на основе временного ряда

    Serie := Series.AddCalculateSerieAsSource(Factor);

    // Добавим вычисляемый ряд с наименованием «Interpolate»

    CalcSerie := Series.AddCalculateSerie("Interpolate");

    // Настроим параметры вычисляемого ряда

    TransformModel := CalcSerie.Transform;

    TransformModel.AddInputVariable(Serie.Stub);

    // Настроим параметры метода расчёта

    FormulaTransform := TransformModel.Transform As IMsFormulaTransform;

    Selector := FormulaTransform.CreateSelector;

    Slice := FormulaTransform.Outputs.Item(0).Slices.Add(Null);

    Selector.Slice := Slice;

    Formula := FormulaTransform.Transform(Selector);

    Formula.Kind := MsFormulaKind.Deterministic;

    Formula.Level := DimCalendarLevel.Month;

    Det := Formula.Method As IMsDeterministicTransform;

    Slice := FormulaTransform.Inputs.Item(0).Slices.Add(Null);

    Rubricator := Laner.RubricatorInstance.Rubricator;

    MDic := Rubricator.Facts;

    MetaAttr := MDic.Attributes.FindByKind(MetaAttributeKind.CalendarLevel);

    MsMetaAttributeValue := Slice.MetaAttributeValueList.Add(MetaAttr);

    Term := Det.Operands.Add(Slice);

    Info := Term.TermInfo;

    TermMeth := Info.CreateTermTransformationMethod(MsTermTransformationType.Interpolate);

    Interpolate := TermMeth As IMsInterpolateTransformationMethod;

    Interpolate.InterpolateType := MsInterpolateType.Prorate;

    Info.TermTransformationMethod := Interpolate;

    Det.Expression.AsString := Term.TermToInnerText;

    // Сохраним изменения

    (Workbook As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в рабочей книге будет добавлен новый ряд «Interpolate»,
 отображающий данные указанного показателя. На его основе будет создан
 вычисляемый ряд, рассчитанный методом «Интерполяция». Данные будут равномерно
 дезагрегированы с квартальной динамики на месячную.


См. также:


[IMsInterpolateTransformationMethod](IMsInterpolateTransformationMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
