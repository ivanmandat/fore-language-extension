# IValidationCorrelation.SelectionComparatorData

IValidationCorrelation.SelectionComparatorData
-


# IValidationCorrelation.SelectionComparatorData


## Синтаксис


SelectionComparatorData: [IValidationSelectionValueList](../IValidationSelectionValueList/IValidationSelectionValueList.htm);


## Описание


Свойство SelectionComparatorData
 возвращает набор отметок, определяющий данные, с которыми будет производиться
 корреляция.


## Комментарии


Для задания анализируемых рядов используйте свойство [IValidationDetails.SelectionFilter](../IValidationDetails/IValidationDetails.SelectionFilter.htm).


Если SelectionComparatorData
 не задано, то данные для корреляции определяются исходя из значения [IValidationDetails.SelectionTargetData](../IValidationDetails/IValidationDetails.SelectionTargetData.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_VALIDATION_PARAMETERS», содержащую
 правило валидации с идентификатором «VALIDATION». Указанная база данных
 временных рядов должна содержать пользовательский атрибут рядов с идентификатором
 «CITY».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrObj: IMetabaseObjectDescriptor;

    Rub: IRubricator;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    ComparisonValue: IValidationComparisonValue;

    Correlation: IValidationCorrelation;

    SelectionFilter: IValidationSelectionFilter;

    FilterVals: IValidationSelectionValues;

    MetaAttr: IMetaAttribute;

    SelectionValList: IValidationSelectionValueList;

    SelectionVal: IValidationSelectionValue;

    DimInst: IDimInstance;

    DimSel: IDimSelection;

Begin

    Mb := MetabaseClass.Active;

    // Получаем ключ базы данных временных рядов

    RubrObj := Mb.ItemById("TSDB_VALIDATION_PARAMETERS");

    Rub := RubrObj.Bind As IRubricator;

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION", RubrObj.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Задаем календарную динамику проверяемых данных

    ValidFilter.Level := DimCalendarLevel.Year;

    // Задаем тип правила валидации

    ValidFilter.Kind := ValidationDetailsKind.Correlation;

    // Настраиваем параметры правила

    Correlation := ValidFilter.Details As IValidationCorrelation;

    // Задаем параметры условия для анализа корреляции

    ComparisonValue := Correlation.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.More;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := 0.17;

    // Очищаем область выполнения валидации

    Correlation.SelectionTargetData.Clear;

    // Задаем сравниваемые данные

    SelectionFilter := Correlation.SelectionFilter;

    SelectionFilter.Clear;

    MetaAttr := Rub.Facts.Attributes.FindById("CITY");

    DimInst := MetaAttr.ValuesObject.Open(Null) As IDimInstance;

    DimSel := DimInst.CreateSelection;

    FilterVals := SelectionFilter.Add(DimSel);

    DimSel.SelectElement(1, False);

    FilterVals.Selection := DimSel;

    // Задаем данные, с которыми будет рассчитываться корреляция

    SelectionValList := Correlation.SelectionComparatorData;

    SelectionValList.Clear;

    DimSel := DimInst.CreateSelection;

    SelectionVal := SelectionValList.Add(DimSel);

    DimSel.SelectElement(2, False);

    SelectionVal.Value := DimSel.ToVariant;

    // Сохраняем правило

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Анализ корреляционной зависимости».


См. также:


[IValidationCorrelation](IValidationCorrelation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
