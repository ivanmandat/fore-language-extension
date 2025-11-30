# IValidationRatio.SelectionComparatorData

IValidationRatio.SelectionComparatorData
-


# IValidationRatio.SelectionComparatorData


## Синтаксис


SelectionComparatorData: [IValidationSelectionValueList](../IValidationSelectionValueList/IValidationSelectionValueList.htm);


## Описание


Свойство SelectionComparatorData
 возвращает набор отметок, определяющий данные, с которыми будет производиться
 сравнение.


## Комментарии


Для задания сравниваемых рядов используйте свойство [IValidationDetails.SelectionFilter](../IValidationDetails/IValidationDetails.SelectionFilter.htm).


Если ComparatorData не задано,
 то данные для сравнения определяются исходя из значения [IValidationDetails.SelectionTargetData](../IValidationDetails/IValidationDetails.SelectionTargetData.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие базы данных
 временных рядов с идентификатором «TSDB_TARGET», содержащую правило валидации
 с идентификатором «VALIDATION». Указанная база данных временных рядов
 должна содержать пользовательский атрибут рядов с идентификатором «CITY».
 Также в репозитории должна присутствовать база данных временных рядов
 с идентификатором «TSDB» со структурой аналогичной структуре «TSDB_TARGET».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    RubrObj: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    Ratio: IValidationRatio;

    ComparisonValue: IValidationComparisonValue;

    SelectionValList: IValidationSelectionValueList;

    Rub: IRubricator;

    SelectionFilter: IValidationSelectionFilter;

    FilterVals: IValidationSelectionValues;

    MetaAttr: IMetaAttribute;

    SelectionVal: IValidationSelectionValue;

    DimInst: IDimInstance;

    DimSel: IDimSelection;

Begin

    Mb := MetabaseClass.Active;

    // Получаем сравниваемую базу данных временных рядов

    RubrObj := Mb.ItemById("TSDB_TARGET");

    Rub := RubrObj.Bind As IRubricator;

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION", RubrObj.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Задаем календарную динамику проверяемых данных

    ValidFilter.Level := DimCalendarLevel.Year;

    // Задаем тип правила валидации

    ValidFilter.Kind := ValidationDetailsKind.Ratio;

    // Получаем параметры валидации «Сравнение отношения наблюдений»

    Ratio := ValidFilter.Details As IValidationRatio;

    // Задаем параметры сравнения

    ComparisonValue := Ratio.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.Less;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := 0.3;

    // Задаем сравниваемые данные

    SelectionFilter := Ratio.SelectionFilter;

    SelectionFilter.Clear;

    MetaAttr := Rub.Facts.Attributes.FindById("CITY");

    DimInst := MetaAttr.ValuesObject.Open(Null) As IDimInstance;

    DimSel := DimInst.CreateSelection;

    FilterVals := SelectionFilter.Add(DimSel);

    DimSel.SelectElement(1, False);

    FilterVals.Selection := DimSel;

    // Указываем базу данных временных рядов, с которой будет выполняться сравнение

    RubrObj := Mb.ItemById("TSDB");

    Ratio.Comparator := RubrObj.Bind As IVariableStub;

    // Задаем данные, с которыми будет выполняться сравнение

    SelectionValList := Ratio.SelectionComparatorData;

    SelectionValList.Clear;

    Rub := RubrObj.Bind As IRubricator;

    MetaAttr := Rub.Facts.Attributes.FindById("CITY");

    DimInst := MetaAttr.ValuesObject.Open(Null) As IDimInstance;

    DimSel := DimInst.CreateSelection;

    SelectionVal := SelectionValList.Add(DimSel);

    DimSel.DeselectAll;

    DimSel.SelectElement(1, False);

    SelectionVal.Value := DimSel.ToVariant;

    // Очищаем область выполнения валидации

    Ratio.SelectionTargetData.Clear;

    // Сохраняем правило

    ValidObj.Save;

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Сравнение отношения наблюдений».
 Будут сравниваться отношения наблюдений между базами данных «TSDB_TARGET»
 и «TSDB».


См. также:


[IValidationRatio](IValidationRatio.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
