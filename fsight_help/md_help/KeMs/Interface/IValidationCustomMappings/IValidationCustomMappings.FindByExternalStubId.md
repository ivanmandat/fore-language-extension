# IValidationCustomMappings.FindByExternalStubId

IValidationCustomMappings.FindByExternalStubId
-


# IValidationCustomMappings.FindByExternalStubId


## Синтаксис


FindByExternalStubId(Id: String): [IValidationCustomMapping](../IValidationCustomMapping/IValidationCustomMapping.htm);


## Параметры


Id. Идентификатор внешнего
 источника данных, который участвует в сопоставлении.


## Описание


Метод FindByExternalStubId выполняет
 поиск сопоставления для внешнего источника данных с указанным идентификатором.


## Комментарии


Если сопоставления для указанного внешнего источника данных не найдено,
 то метод возвращает значение Null.


## Пример


Для выполнения примера в репозитории предполагается наличие баз данных
 временных рядов с идентификаторами «TSDB» и «TSDB_VALID». Обе базы данных
 временных рядов должны содержать атрибуты рядов с одинаковыми идентификаторами.
 Также база данных «TSDB» должна содержать правило валидации типа «Сравнение по выражению» с идентификатором
 «VALID_CUSTOM».


Добавьте ссылки на системные сборки: Cubes, Dimensions. Metabase, Ms.


			Sub UserProc;

Var

    mb: IMetabase;

    TSDBExt, TSDBVal: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    Custom: IValidationCustom;

    Mappings: IValidationCustomMappings;

    Map: IValidationCustomMapping;

    Transform: IMsFormulaTransform;

    Formula: IMsFormula;

    Det: IMsDeterministicTransform;

    Inputs: IMsFormulaTransformVariables;

    TransformVar: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Term: IMsFormulaTerm;

    j: Integer;

    Binding: IValidationCustomDimensionsBinding;

    ValidExecSett: IValidationExecuteSettings;

    ValidExecRun: IValidationExecRun;

Begin

    mb := MetabaseClass.Active;

    // Получаем сравниваемую базу данных временных рядов (БДВР 1)

    TSDBVal := Mb.ItemById("TSDB");

    // Получаем базу данных временных рядов, с которой будем сравнивать (БДВР 2)

    TSDBExt := Mb.ItemById("TSDB_VALID");

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALID_CUSTOM", TSDBVal.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    ValidFilter.Kind := ValidationDetailsKind.Custom;

    // Получаем параметры правила

    Custom := ValidFilter.Details As IValidationCustom;

    // Получаем параметры расчета правила

    Transform := Custom.Transform;

    Formula := Transform.FormulaItem(0);

    Formula.Kind := MsFormulaKind.Deterministic;

    Det := Formula.Method As IMsDeterministicTransform;

    // Получаем коллекцию входных переменных

    Inputs := Transform.Inputs;

    // Добавляем входную переменную из БДВР 2

    TransformVar := Inputs.Add(TSDBExt.Bind As IVariableStub);

    Tree := TransformVar.SlicesTree(TransformVar);

    Slice := Tree.CreateSlice(1);

    Term := Det.Operands.Add(Slice);

    // Добавляем переменную в выражение

    Det.Expression.AsString := Term.TermToInnerText;

    // Добавляем входную переменную из БДВР 1

    TransformVar := Transform.Inputs.Add(TSDBVal.Bind As IVariableStub);

    Tree := TransformVar.SlicesTree(TransformVar);

    Slice := Tree.CreateSlice(1);

    Term := Det.Operands.Add(Slice);

    // Формируем окончательное выражение с участием обеих переменных

    Det.Expression.AsString := Det.Expression.AsString + ">" + Term.TermToInnerText;

    // Получаем параметры сопоставления атрибутов

    Mappings := Custom.Mappings;

    // Очищаем существующие сопоставления

    Mappings.Clear;

    // Выполняем автоматическое сопоставление

    Mappings.FillByAttributes;

    // Выводим информацию о выполненных сопоставлениях

    Debug.WriteLine("Сопоставления для источника данных '" + TSDBExt.Name + "'");

    Map := Mappings.FindByExternalStubId(TSDBExt.Id);

    Debug.Indent;

    // Перебираем все привязки измерений

    For j := 0 To Map.ValidationStub.DimensionCount - 1 Do

        Binding := Map.FindByValidationDimKey((Map.ValidationStub.Dimension(j) As IMetabaseObject).Key);

        Debug.WriteLine("Привязка №" + (j + 1).ToString);

        Debug.Indent;

        Debug.WriteLine("Измерение из внешнего источника данных: " + Binding.ExternalDim.Name);

        Debug.WriteLine("Измерение из источник данных, по которому выполняется валидация: " + Binding.ValidationDim.Name);

        Debug.Unindent;

    End For;

    Debug.Unindent;

    // Сохраняем изменения правила валидации

    ValidObj.Save;

    // Выполняем правило

    ValidExecSett := New ValidationExecuteSettings.Create;

    ValidExecRun := ValidFilter.Execute(ValidExecSett);

End Sub UserProc;


В результате выполнения примера для правила валидации будет задано выражение
 для расчета, основанное на рядах из двух различных баз данных временных
 рядов. Сопоставление измерений между двумя различными базами данных временных
 рядов будет выполнено автоматически.


См. также:


[IValidationCustomMappings](IValidationCustomMappings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
