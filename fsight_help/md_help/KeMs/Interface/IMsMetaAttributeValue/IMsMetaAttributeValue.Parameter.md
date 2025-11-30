# IMsMetaAttributeValue.Parameter

IMsMetaAttributeValue.Parameter
-


# IMsMetaAttributeValue.Parameter


## Синтаксис


Parameter: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Свойство Parameter определяет
 параметр, задающий значение атрибута.


## Комментарии


Является ли атрибут параметром определяет свойство [IMsMetaAttributeValue.IsParameter](IMsMetaAttributeValue.IsParameter.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:
 LanerBox с идентификатором «LanerBox1»
 и UiErAnalayzer с идентификатором
 «UiErAnalyzer1». «UiErAnalyzer1» является источником данных для «LanerBox1»
 и содержит загруженную рабочую книгу БД временных рядов с идентификатором
 «TSDB_70». Параметры БД:


	- присутствует обязательный атрибут показателей с идентификатором
	 «COUNTRY», ссылающийся на справочник;


	- присутствует фильтр валидации с идентификатором «VALIDATION_COMPARPARAM»
	 типа «Сравнение трендов».


Добавьте ссылки на системные сборки: Metabase,
 Ms, Cubes,
 Rds.


			Sub AddComparPrarm;

Var

    mb: IMetabase;

    FCObj: IMetabaseObject;

    FC: IRubricator;

    Atts: IMetaAttributes;

    LinkedDict: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    Params: IMsModelParams;

    ComparPrarm: IMsModelParam;

    Comparator: IMsMetaAttributeValueList;

    ComparVal: IMsMetaAttributeValue;

    ExecSett: IValidationExecuteSettings;

    Analyzer: IEaxAnalyzer;

    ParamVals: IMsModelParamValues;

    ExecRun: IValidationExecRun;

    DiagRep: IDiagnosticReport;

Begin

    mb := MetabaseClass.Active;

    // Получаем БД временных рядов

    FCObj := mb.ItemById("TSDB_70").Bind;

    FC := FCObj As IRubricator;

    //Получаем справочник, на который ссылается атрибут "COUNTRY"

    Atts := FC.GetDictionary(RubricatorDictionary.Facts).Attributes;

    LinkedDict := Atts.FindById("COUNTRY").ValuesObject;

    //Получаем фильтр валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION_COMPARPARAM", FCObj.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Получаем параметры фильтра валидации

    Params := ValidFilter.Params;

    Params.Clear;

    // Добавляем параметр для выражения сравнения

    ComparPrarm := Params.Add;

    ComparPrarm.Id := "COMPAR_COUNTRY";

    ComparPrarm.Name := "Страна для блока сравнения";

    ComparPrarm.LinkedObject := LinkedDict;

    // Задаем выражение сравнения

    Comparator := (ValidFilter.Details As IValidationTrend).ComparatorData;

    Comparator.Clear;

    ComparVal := Comparator.Add(Atts.FindById("COUNTRY"));

    ComparVal.Parameter := ComparPrarm;

    // Сохраняем фильтр валидации

    ValidObj.Save;

    // Задаем параметры выполнения фильтра

    ExecSett := ValidFilter.CreateExecuteSettings;

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    ExecSett.Laner := Analyzer.Laner;

    // Задаем значения параметра

    ParamVals := ExecSett.ParamValues;

    ParamVals.FindById("COMPAR_COUNTRY").Value := 512;

    // Выполняем фильтр валидации

    ExecRun := ValidFilter.Execute(ExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub AddComparPrarm;


Результат выполнения примера: для фильтра валидации «VALIDATION_COMPARPARAM»
 изменён ряд, с трендом которого выполняется сравнение. Сравниваемый ряд
 задается параметром «COMPAR_COUNTRY», определяющим значение обязательного
 атрибута «COUNTRY». Фильтр будет выполнен для рабочей книги, отображаемой
 в «LanerBox1».


См. также:


[IMsMetaAttributeValue](IMsMetaAttributeValue.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
