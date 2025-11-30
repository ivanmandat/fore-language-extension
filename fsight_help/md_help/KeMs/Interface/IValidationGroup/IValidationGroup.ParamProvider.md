# IValidationGroup.ParamProvider

IValidationGroup.ParamProvider
-


# IValidationGroup.ParamProvider


## Синтаксис


ParamProvider: [IMsParamProvider](../IMsParamProvider/IMsParamProvider.htm);


## Описание


Свойство ParamProvider
 определяет объект, предназначенный для работы с параметрами группы правил
 валидации и их значениями.


## Комментарии


По умолчанию группа правил валидации не содержит параметров.


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


	- присутствует группа правил валидации с идентификатором «VALIDATION_GROUP».


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

    ValidFilterGroup: IValidationGroup;

    ParamProvider: IMsParamProvider;

    Params: IMsModelParams;

    FilterParam: IMsModelParam;

    Filters: IValidationFilters;

    i: Integer;

    ExecSett: IValidationExecuteSettings;

    Analyzer: IEaxAnalyzer;

    ParamVals: IMsModelParamValues;

    pDimInstance: IDimInstance;

    DimSelect: IDimSelection;

    ExecRun: IValidationExecRun;

    DiagRep: IDiagnosticReport;

Begin

    mb := MetabaseClass.Active;

    FCObj := mb.ItemById("TSDB").Bind;

    FC := FCObj As IRubricator;

    //Получаем справочник, на который ссылается атрибут "CITY"

    Atts := FC.GetDictionary(RubricatorDictionary.Facts).Attributes;

    LinkedDict := Atts.FindById("CITY").ValuesObject;

    //Получаем группу правил валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION_GROUP", FCObj.Key).Edit;

    ValidFilterGroup := ValidObj As IValidationGroup;

    // Задаем пороговое значение для исключений группы правил

    ValidFilterGroup.ExceptionsLimit := 500000;

    // Получаем параметры группы правил валидации

    Analyzer := UiErAnalyzer1.ErAnalyzer;

    ValidFilterGroup.ParamProvider := Analyzer.ParamProvider As IMsParamProvider;

    ParamProvider := ValidFilterGroup.ParamProvider;

    Params := ParamProvider.Params;

    Params.Clear;

    // Создаем параметр для группы правил валидации

    FilterParam := Params.Add;

    FilterParam.Id := "FILTER_CITY";

    FilterParam.Name := "Города для блока фильтрации";

    FilterParam.LinkedObject := LinkedDict;

    FilterParam.ParamType := TsParamType.Selection;

    // Сохраняем группу правил валидации

    ValidObj.Save;

    // Задаем параметры выполнения группы правил

    ExecSett := ValidFilterGroup.CreateExecuteSettings;

    ExecSett.Laner := Analyzer.Laner;

    pDimInstance := LinkedDict.Open(Null) As IDimInstance;

    // Создаём отметку для фильтрации элементов

    DimSelect := pDimInstance.CreateSelection;

    DimSelect.DeselectAll;

    DimSelect.SelectElement(0, False);

    DimSelect.SelectElement(1, False);

    DimSelect.SelectElement(2, False);

    // Задаем значения параметра

    ParamVals := ExecSett.ParamValues;

    ParamVals.FindById("FILTER_CITY").Value := DimSelect.ToVariant;

    ExecRun := ValidFilterGroup.Execute(ExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub UserProc;


В результате выполнения примера для группы правил «VALIDATION_GROUP»
 задан параметр. Группа правил будет выполнена для рабочей книги, отображаемой
 в «LanerBox1».


См. также:


[IValidationGroup](IValidationGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
