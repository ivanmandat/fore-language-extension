# IValidationCrossDatabase.Mappings

IValidationCrossDatabase.Mappings
-


# IValidationCrossDatabase.Mappings


## Синтаксис


Mappings: [IValidationCrossDatabaseMappings](../IValidationCrossDatabaseMappings/IValidationCrossDatabaseMappings.htm);


## Описание


Свойство Mappings возвращает
 коллекцию привязок измерений сравниваемых источников данных.


## Комментарии


При настройке валидации «Сравнение
 между базами данных» по умолчанию считается, что все измерения
 привязаны по одинаковым идентификаторам. Свойство Mappings
 используется для создания собственных привязок и фиксации значений свободных
 измерений.


## Пример


Для выполнения примера в репозитории предполагается наличие базы
 данных временных рядов с идентификатором «TSDB_TARGET», содержащей измерение
 с идентификатором «CITY». Также база данных временных рядов должна содержать
 правило валидации с идентификатором «VALIDATION_CROSSDATABASE». В репозитории
 должна быть база данных временных рядов с идентификатором «TSDB_COMPARATOR»,
 содержащая измерение с идентификатором «CENTRAL_CITY». Измерения «CITY»
 и «CENTRAL_CITY» должны ссылаться на один и тот же справочник. Идентификаторы
 остальных пользовательских измерений в базах данных временных рядов должны
 совпадать.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    Mb: IMetabase;

    Descr: IMetabaseObjectDescriptor;

    RubTagret, RubComparator: IRubricator;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    CrossDb: IValidationCrossDatabase;

    ComparisonValue: IValidationComparisonValue;

    ValidExecSett: IValidationExecuteSettings;

    ValidExecRun: IValidationExecRun;

    SelValList: IValidationSelectionValueList;

    SelVal: IValidationSelectionValue;

    AttrMappings: IValidationCrossDatabaseMappings;

    DimTagret, DimComparator: IDimensionModel;

    InstTagret, InstComparator: IDimInstance;

    SelTagret, SelComparator: IDimSelection;

    AtMapping: IValidationCrossDatabaseMapping;

    i: Integer;

Begin

    Mb := MetabaseClass.Active;

    // Получаем сравниваемую базу данных временных рядов и ту,

    // с которой будем выполнять сравнение

    Descr := Mb.ItemById("TSDB_TARGET");

    RubTagret := Descr.Bind As IRubricator;

    RubComparator := Mb.ItemById("TSDB_COMPARATOR").Bind As IRubricator;

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALIDATION_CROSSDATABASE", Descr.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    ValidFilter.Level := DimCalendarLevel.None;

    ValidFilter.Kind := ValidationDetailsKind.CrossDatabase;

    CrossDb := ValidFilter.Details As IValidationCrossDatabase;

    // Настраиваем параметры сравнения данных

    ComparisonValue := CrossDb.ComparisonValue;

    ComparisonValue.ComparisonOperator := ValidationComparisonOperator.Less;

    ComparisonValue.Percentage := False;

    ComparisonValue.Value1 := 0.5;

    // Задаем тип изменения метаданных для сравниваемых значений

    CrossDb.ComparisonType := ValidationRevisionMetadataComparisonType.Change;

    // Указываем базу данных временных рядов, с которой будем выполнять сравнение

    CrossDb.Comparator := RubComparator As IVariableStub;

    // Удаляем существующие привязки измерений

    AttrMappings := CrossDb.Mappings;

    If AttrMappings.Count > 0 Then

        AttrMappings.Clear;

    End If;

    // Получаем справочники, на которых строятся измерения «CITY» и «CENTRAL_CITY»

    Descr := RubTagret.Facts.Attributes.FindById("CITY").ValuesObject;

    DimTagret := Descr.Bind As IDimensionModel;

    InstTagret := Descr.Open(Null) As IDimInstance;

    Descr := RubComparator.Facts.Attributes.FindById("CENTRAL_CITY").ValuesObject;

    DimComparator := Descr.Bind As IDimensionModel;

    InstComparator := Descr.Open(Null) As IDimInstance;

    // Получаем отметку данных справочников

    SelTagret := InstTagret.CreateSelection;

    SelComparator := InstComparator.CreateSelection;

    // Задаем привязку измерения «CITY» к измерению «CENTRAL_CITY»

    AtMapping := AttrMappings.Add;

    AtMapping.TargetDim := DimTagret;

    AtMapping.TargetSelectionMapping := SelTagret;

    AtMapping.ComparatorDim := DimComparator;

    AtMapping.ComparatorSelectionMapping := SelComparator;

    AtMapping.Type := ValidationCrossDatabaseMappingType.Attributes;

    // Задаем сравниваемые данные

    SelValList := CrossDb.SelectionTargetData;

    SelValList.Clear;

    SelVal := SelValList.Add(SelTagret);

    SelTagret.DeselectAll;

    SelTagret.SelectElement(1, False);

    SelVal.Value := SelTagret.ToVariant;

    // Задаем данные из базы данных временных рядов,

    // с которыми будет производиться сравнение

    SelValList := CrossDb.SelectionComparatorData;

    SelValList.Clear;

    SelVal := SelValList.Add(SelComparator);

    SelComparator.DeselectAll;

    SelComparator.SelectElement(0, False);

    SelVal.Value := SelComparator.ToVariant;

    // Удаляем фильтр валидации

    CrossDb.SelectionFilter.Clear;

    // Сохраняем изменения и рассчитываем правило валидации

    ValidObj.Save;

    ValidExecSett := New ValidationExecuteSettings.Create;

    ValidExecRun := ValidFilter.Execute(ValidExecSett);

End Sub UserProc;


В результате выполнения примера будет настроено правило валидации «Сравнение с базой данных временных рядов»:


	- сравниваются значения рядов из баз «TSDB_TARGET» и «TSDB_COMPARATOR»;


	- значения измерения «CITY» сравниваются со значениями атрибута «CENTRAL_CITY»;


	- задан набор сравниваемых рядов;


	- правило валидации будет срабатывать, если измененное значение
	 ряда базы «TSDB_TARGET» на «0,5» меньше значения ряда базы «TSDB_COMPARATOR».


Правило будет запущено, результаты выполнения сохранены в базе данных
 временных рядов.


См. также:


[IValidationCrossDatabase](IValidationCrossDatabase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
