# IValidationCustom.Mappings

IValidationCustom.Mappings
-


# IValidationCustom.Mappings


## Синтаксис


Mappings: [IValidationCustomMappings](../IValidationCustomMappings/IValidationCustomMappings.htm);


## Описание


Свойство Mappings возвращает
 коллекцию сопоставлений источников данных.


## Комментарии


Сопоставления источников данных используются, если выражение сравнения
 использует элементы из различных источников данных. В качестве источников
 могут выступать базы данных временных рядов и стандартные кубы, содержащие
 календарное измерение.


## Пример


Для выполнения примера в репозитории предполагается наличие баз данных
 временных рядов с идентификаторами «TSDB» и «TSDB_VALID». Обе базы данных
 временных рядов должны содержать атрибут рядов с идентификатором «CITY».
 Также база данных «TSDB» должна содержать правило валидации типа «Сравнение по выражению» с идентификатором
 «VALID_CUSTOM».


Добавьте ссылки на системные сборки: Cubes, Dimensions. Metabase, Ms,
 Rds.


			Sub UserProc;

Var

    mb: IMetabase;

    TSDBExt, TSDBVal: IMetabaseObjectDescriptor;

    ValidObj: IMetabaseObject;

    ValidFilter: IValidationFilter;

    Custom: IValidationCustom;

    Mappings: IValidationCustomMappings;

    Map: IValidationCustomMapping;

    Rub: IRubricator;

    DimVal, DimEx: IDimInstance;

    Transform: IMsFormulaTransform;

    Formula: IMsFormula;

    Det: IMsDeterministicTransform;

    Inputs: IMsFormulaTransformVariables;

    TransformVar: IMsFormulaTransformVariable;

    Tree: IMsFormulaTransformSlicesTree;

    Slice: IMsFormulaTransformSlice;

    Term: IMsFormulaTerm;

    SelectionFilter: IValidationSelectionFilter;

    SelVals: IValidationSelectionValues;

    ValidExecSett: IValidationExecuteSettings;

    ValidExecRun: IValidationExecRun;

Begin

    mb := MetabaseClass.Active;

    // Получаем сравниваемую базу данных временных рядов (БДВР 1)

    TSDBVal := Mb.ItemById("TSDB");

    // Получаем правило валидации

    ValidObj := Mb.ItemByIdNamespace("VALID_CUSTOM", TSDBVal.Key).Edit;

    ValidFilter := ValidObj As IValidationFilter;

    ValidFilter.Kind := ValidationDetailsKind.Custom;

    // Получаем параметры правила

    Custom := ValidFilter.Details As IValidationCustom;

    // Получаем параметры сопоставления атрибутов

    Mappings := Custom.Mappings;

    // Очищаем существующие сопоставления

    Mappings.Clear;

    // Получаем базу данных временных рядов, с которой будем сравнивать (БДВР 2)

    TSDBExt := Mb.ItemById("TSDB_VALID");

    // Добавляем новое сопоставление

    map := Mappings.AddStub(TSDBExt.Bind As IVariableStub);

    // Получаем измерение, соответствующее атрибуту CITY, в БДВР 1

    Rub := TSDBVal.Bind As IRubricator;

    DimVal := Rub.Facts.Attributes.FindById("CITY").ValuesObject.Open(Null) As IDimInstance;

    // Получаем измерение, соответствующее атрибуту CITY, в БДВР 2

    Rub := TSDBExt.Bind As IRubricator;

    DimEx := Rub.Facts.Attributes.FindById("CITY").ValuesObject.Open(Null) As IDimInstance;

    // Добавляем привязку данных измерений

    map.AddBinding(DimVal, DimEx);

    // Задаем режим расчета правила

    Custom.CalculationType := MsCalculationType.Pointwise;

    // Получаем параметры расчета правила

    Transform := Custom.Transform;

    Formula := Transform.FormulaItem(0);

    Formula.Kind := MsFormulaKind.Deterministic;

    Det := Formula.Method As IMsDeterministicTransform;

    // Получаем коллекцию входных переменных

    Inputs := Transform.Inputs;

    // Добавляем входную переменную из БДВР 2

    TransformVar := Inputs.Add(map.ExternalStub);

    Tree := TransformVar.SlicesTree(TransformVar);

    Slice := Tree.CreateSlice(1);

    Term := Det.Operands.Add(Slice);

    // Добавляем переменную в выражение

    Det.Expression.AsString := Term.TermToInnerText;

    // Добавляем входную переменную из БДВР 1

    TransformVar := Transform.Inputs.Add(map.ValidationStub);

    Tree := TransformVar.SlicesTree(TransformVar);

    Slice := Tree.CreateSlice(1);

    Term := Det.Operands.Add(Slice);

    // Формируем окончательное выражение с участием обеих переменных

    Det.Expression.AsString := Det.Expression.AsString + ">" + Term.TermToInnerText;

    // Получаем параметры фильтрации данных, по которым выполняется валидация

    SelectionFilter := Custom.SelectionFilter;

    // Очищаем текущий фильтр

    SelectionFilter.Clear;

    // Добавляем измерение, по которому выполняется фильтрация

    SelVals := SelectionFilter.Add(DimVal.CreateSelection);

    // Задаем отметку для фильтрации по измерению

    SelVals.Selection.SelectElement(0, False);

    // Сохраняем изменения правила валидации

    ValidObj.Save;

    // Выполняем правило

    ValidExecSett := New ValidationExecuteSettings.Create;

    ValidExecRun := ValidFilter.Execute(ValidExecSett);

End Sub UserProc;


В результате выполнения примера для правила валидации будет задано выражение
 для расчета, основанное на рядах из двух различных баз данных временных
 рядов. Также для правила будут заданы ряды, валидацию которых нужно выполнить.


См. также:


[IValidationCustom](IValidationCustom.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
