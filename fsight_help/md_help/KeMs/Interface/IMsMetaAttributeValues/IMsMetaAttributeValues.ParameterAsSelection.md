# IMsMetaAttributeValues.ParameterAsSelection

IMsMetaAttributeValues.ParameterAsSelection
-


# IMsMetaAttributeValues.ParameterAsSelection


## Синтаксис


ParameterAsSelection: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Свойство ParameterAsSelection определяет параметр для передачи отметки элементов, используемой для расчёта валидации.


## Комментарии


Для задания значения параметра используйте свойство [IValidationExecuteSettings.ParamValues](../IValidationExecuteSettings/IValidationExecuteSettings.ParamValues.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты: LanerBox с идентификатором «LanerBox1» и UiErAnalayzer с идентификатором «UiErAnalyzer1». «UiErAnalyzer1» является источником данных для «LanerBox1» и содержит загруженную рабочую книгу БД временных рядов с идентификатором «TSDB_70». Параметры БД:


-
присутствует обязательный атрибут показателей с идентификатором «COUNTRY», ссылающийся на справочник;


-
присутствует фильтр валидации с идентификатором «VALIDATION_FILTER» типа «Сравнение трендов».


Добавьте ссылки на системные сборки: Metabase, Ms, Cubes, Rds.


Пример является функцией для добавления параметра в фильтр валидации. Параметр ограничивает набор фильтруемых рядов. Входные параметры функции:


-
IsGroup. Определяет, является ли значение параметра группой элементов. True - значение параметра является группой элементов; False - значение параметра является отметкой элементов;


-
Value. Значение параметра.


			Sub AddFilterParam(IsGroup: Boolean; Value: Variant);

Var

    mb: IMetabase;

    FCObj: IMetabaseObject;

    FC: IRubricator;

    Atts: IMetaAttributes;

    LinkedDict: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    Params: IMsModelParams;

    FilterPrarm: IMsModelParam;

    Filter: IMsMetaAttributeFilter;

    FilterVal: IMsMetaAttributeValues;

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
    ValidObj := Mb.ItemByIdNamespace("VALIDATION_FILTER", FCObj.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Получаем параметры фильтра валидации
    Params := ValidFilter.Params;

    Params.Clear;

    // Добавляем параметр для фильтрации элементов
    FilterPrarm := Params.Add;

    FilterPrarm.Id := "FILTER_COUNTRY";

    FilterPrarm.Name := "Страна для фильтра";

    FilterPrarm.LinkedObject := LinkedDict;

    // Задаем фильтр валидации
    Filter := (ValidFilter.Details As IValidationTrend).Filter;

    Filter.Clear;

    FilterVal := Filter.Add(Atts.FindById("COUNTRY"));

    If IsGroup Then

        FilterVal.ParameterAsGroup := FilterPrarm;

    Else

        FilterVal.ParameterAsSelection := FilterPrarm;

    End If;

    // Сохраняем фильтр валидации
    ValidObj.Save;

    // Задаем параметры выполнения фильтра
    ExecSett := ValidFilter.CreateExecuteSettings;

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    ExecSett.Laner := Analyzer.Laner;

    // Задаем значения параметра
    ParamVals := ExecSett.ParamValues;

    ParamVals.FindById("FILTER_COUNTRY").Value := Value;

    // Выполняем фильтр валидации
    ExecRun := ValidFilter.Execute(ExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub AddFilterParam;


Результат выполнения примера: для фильтра валидации «VALIDATION_FILTER» изменён набор рядов, для которых фильтр выполняется. Фильтруемые ряды задаются параметром «COMPAR_COUNTRY», определяющим значение обязательного атрибута «COUNTRY». Фильтр будет выполнен для рабочей книги, отображаемой в «LanerBox1».


См. также:


[IMsMetaAttributeValues](IMsMetaAttributeValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
