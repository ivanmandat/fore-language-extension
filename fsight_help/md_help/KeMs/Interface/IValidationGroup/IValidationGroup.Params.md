# IValidationGroup.Params

IValidationGroup.Params
-


# IValidationGroup.Params


## Синтаксис


Params: [IMsModelParams](../IMsModelParams/IMsModelParams.htm);


## Описание


Свойство Params возвращает набор параметров для группы правил валидаций.


## Комментарии


Для управления параметрами дочерних правил используйте свойство [IValidationFilters.ParamControl](../IValidationFilters/IValidationFilters.ParamControl.htm).


Значения параметров указываются в объекте, создаваемом с помощью метода [IValidationGroup.CreateExecuteSettings](IValidationGroup.CreateExecuteSettings.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты: LanerBox с идентификатором «LanerBox1» и UiErAnalayzer с идентификатором «UiErAnalyzer1». «UiErAnalyzer1» является источником данных для «LanerBox1» и содержит загруженную рабочую книгу БД временных рядов с идентификатором «TSDB_70». Параметры БД:


-
присутствует обязательный атрибут показателей с идентификатором «COUNTRY», ссылающийся на справочник;


-
присутствуют несколько правил валидации, содержащих только параметр с идентификатором «FILTER_COUNTRY». Данный параметр ссылается на тот же справочник, что и атрибут «COUNTRY»;


-
правила , содержащие параметр «FILTER_COUNTRY», объединены в группу правил с идентификатором «VALIDATION_GROUP».


Добавьте ссылки на системные сборки: Metabase, Ms, Cubes, Rds, Dimensions.


			Sub AddFilterGroupParam;

Var

    mb: IMetabase;

    FCObj: IMetabaseObject;

    FC: IRubricator;

    Atts: IMetaAttributes;

    LinkedDict: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilterGroup: IValidationGroup;

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

    FCObj := mb.ItemById("TSDB_70").Bind;

    FC := FCObj As IRubricator;

    //Получаем справочник, на который ссылается атрибут "COUNTRY"
    Atts := FC.GetDictionary(RubricatorDictionary.Facts).Attributes;

    LinkedDict := Atts.FindById("COUNTRY").ValuesObject;

    //Получаем группу правил валидации
    ValidObj := Mb.ItemByIdNamespace("VALIDATION_GROUP", FCObj.Key).Edit;

    ValidFilterGroup := ValidObj As IValidationGroup;

    // Задаем пороговое значение для исключений группы правил
    ValidFilterGroup.ExceptionsLimit := 500000;

    // Получаем параметры группы правил валидации
    Params := ValidFilterGroup.Params;

    Params.Clear;

    // Создаем параметр для группы правил валидации
    FilterParam := Params.Add;

    FilterParam.Id := "FILTER_COUNTRY";

    FilterParam.Name := "Страны для блока фильтрации";

    FilterParam.LinkedObject := LinkedDict;

    // Задаем управляющий параметр
    Filters := ValidFilterGroup.ValidationFilters;

    For i := 0 To Filters.Count - 1 Do

        Filters.ParamControl(i).Item(0).ControllingParam := FilterParam;

    End For;

    // Сохраняем группу правил валидации
    ValidObj.Save;

    // Задаем параметры выполнения группы правил
    ExecSett := ValidFilterGroup.CreateExecuteSettings;

    Analyzer := UiErAnalyzer1.ErAnalyzer;

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

    ParamVals.FindById("FILTER_COUNTRY").Value := DimSelect.ToVariant;

    ExecRun := ValidFilterGroup.Execute(ExecSett);

    DiagRep := New DiagnosticReport.Create;

    DiagRep.Run := ExecRun;

    DiagRep.EaxAnalyzer := Analyzer;

End Sub AddFilterGroupParam;


Результат выполнения примера: для группы правил «VALIDATION_GROUP» задан параметр, управляющий параметрами дочерних валидаций. Группа правил будет выполнена для рабочей книги, отображаемой в «LanerBox1».


См. также:


[IValidationGroup](IValidationGroup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
