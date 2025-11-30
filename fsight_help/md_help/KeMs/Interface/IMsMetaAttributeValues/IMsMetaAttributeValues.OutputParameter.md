# IMsMetaAttributeValues.OutputParameter

IMsMetaAttributeValues.OutputParameter
-


# IMsMetaAttributeValues.OutputParameter


## Синтаксис


OutputParameter: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Свойство OutputParameter
 определяет выходной параметр.


## Комментарии


Выходной параметр используется для расчета правил валидации.


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:
 WorkbookDocumentViewerBox с идентификатором
 «WorkbookDocumentViewerBox1» и UiErAnalayzer
 с идентификатором «UiErAnalyzer1». «UiErAnalyzer1» является источником
 данных для «WorkbookDocumentViewerBox1» и содержит загруженную рабочую
 книгу базы данных временных рядов с идентификатором «TSDB». Параметры
 базы данных временных рядов:


	- присутствует обязательный атрибут временных рядов с идентификатором
	 «CITY», ссылающийся на справочник;


	- присутствует правило валидации с идентификатором «VALIDATION_COMPARPARAM»
	 типа «Сравнение трендов».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds, Transform.


			Sub UserProc;

Var

    mb: IMetabase;

    FCObj: IMetabaseObject;

    FC: IRubricator;

    Atts: IMetaAttributes;

    LinkedDict: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    ParamProvider: IMsParamProvider;

    Params: IMsModelParams;

    ComparPrarm: IMsModelParam;

    ExecSett: IValidationExecuteSettings;

    Analyzer: IEaxAnalyzer;

    ParamVals: IMsModelParamValues;

    DimSel: IDimSelection;

    ExecRun: IValidationExecRun;

    DiagRep: IDiagnosticReport;

    Filter: IMsMetaAttributeFilter;

    FilterVal: IMsMetaAttributeValues;

Begin

    mb := MetabaseClass.Active;

    // Получаем БД временных рядов

    FCObj := mb.ItemById("TSDB").Bind;

    FC := FCObj As IRubricator;

    //Получаем справочник, на который ссылается атрибут "CITY"

    Atts := FC.GetDictionary(RubricatorDictionary.Facts).Attributes;

    LinkedDict := Atts.FindById("CITY").ValuesObject;

    //Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION_COMPARPARAM", FCObj.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    // Получаем параметры правила валидации

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    ValidFilter.ParamProvider := Analyzer.ParamProvider As IMsParamProvider;

    ParamProvider := ValidFilter.ParamProvider;

    Params := ParamProvider.Params;

    Params.Clear;

    // Добавляем параметр для фильтрации

    ComparPrarm := Params.Add;

    ComparPrarm.Id := "COMPAR_CITY";

    ComparPrarm.Name := "Город для блока фильтрации";

    ComparPrarm.LinkedObject := LinkedDict;

    ComparPrarm.ParamType := TsParamType.Selection;

    // Сохраняем правило валидации

    ValidObj.Save;

    // Задаем параметры выполнения правила

    ExecSett := ValidFilter.CreateExecuteSettings;

    ExecSett.Laner := Analyzer.Laner;

    // Задаем фильтр

    Filter := ExecSett.Filter;

    Filter.Clear;

    FilterVal := Filter.Add(Atts.FindById("CITY"));

    FilterVal.OutputParameter := ComparPrarm;

    // Задаем значения параметра

    ParamVals := ExecSett.ParamValues;

    DimSel := (LinkedDict.Open(Null) As IDimInstance).CreateSelection;

    DimSel.SelectElement(1, False);

    ParamVals.FindById("COMPAR_CITY").Value := DimSel;

    // Выполняем правило валидации

    ExecRun := ValidFilter.Execute(ExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub UserProc;


Результат выполнения примера: для правила валидации «VALIDATION_COMPARPARAM»
 задан фильтр. Фильтрация задается параметром «COMPAR_CITY», определяющим
 значение обязательного атрибута «CITY». Правило будет выполнено для рабочей
 книги, отображаемой в «WorkbookDocumentViewerBox1».


См. также:


[IMsMetaAttributeValues](IMsMetaAttributeValues.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
