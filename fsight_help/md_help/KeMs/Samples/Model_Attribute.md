# Создание модели с переменными на атрибутах

Создание модели с переменными на атрибутах
-


# Создание модели с переменными на атрибутах


## Описание


Рассмотрим пример создания модели с [переменными
 на атрибутах](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/UiModelling_Panel_Param_Attr.htm), использующей для расчета метод линейной
 регрессии (оценка МНК).


## Требования


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS и базы данных временных рядов с идентификатором
 TSDB. Данная база данных временных рядов должна содержать обязательные
 пользовательские атрибуты рядов, являющиеся ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Stat.


## Пример


	Sub ModelAttr;

	Var

	    Mb: IMetabase;

	    CrInf: IMetabaseObjectCreateInfo;

	    Model: IMsModel;

	    Transform: IMsFormulaTransform;

	    TransformVarables: IMsFormulaTransformVariables;

	    RubrDescr: IMetabaseObjectDescriptor;

	    Stub: IVariableStub;

	    TransVar: IMsFormulaTransformVariable;

	    Tree: IMsFormulaTransformSlicesTree;

	    Slice: IMsFormulaTransformSlice;

	    Selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    Linear: IMsLinearRegressionTransform;

	    Ar: Array[0..1] Of Integer;

	    TermInfo: IMsFormulaTermInfo;

	    Period: IMsModelPeriod;

	Begin

	    Mb := MetabaseClass.Active;

	    // Задаем базовые параметры модели как объекта репозитория

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

	    // Задаем идентификатор модели

	    CrInf.Id := Mb.GenerateId("MODEL_LINEAR_REGRESSION", Mb.ItemById("MS").Key);

	    // Задаем наименование модели

	    CrInf.Name := "Модель линейной регрессии";

	    // Задаем контейнер моделирования, в котором будет создаваться модель

	    CrInf.Parent := Mb.ItemById("MS");

	    // Создаем модель

	    Model := Mb.CreateObject(CrInf).Edit As IMsModel;

	    // Получаем объект для настройки параметров модели

	    Transform := Model.Transform;

	    // Получаем объект для работы с моделируемой переменной

	    TransformVarables := Transform.Outputs;

	    // Получаем базу данных временных рядов (БДВР)

	    RubrDescr := Mb.ItemById("TSDB");

	    // Приводим полученную БДВР к абстрактному источнику данных

	    Stub := RubrDescr.Bind As IVariableStub;

	    // Используем БДВР в качестве источника данных моделируемой переменной

	    TransVar := TransformVarables.Add(Stub);

	    // Задаем срез моделируемой переменной

	    Tree := TransVar.SlicesTree(TransVar);

	    Slice := Tree.CreateSlice(1);

	    // Получаем настройки модели для среза моделируемой переменной

	    Selector := Transform.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := Transform.Transform(Selector);

	    // Указываем метод расчета - Линейная регрессия (оценка МНК)

	    Formula.Kind := MsFormulaKind.LinearRegression;

	    // Задаем календарную динамику расчета

	    Formula.Level := DimCalendarLevel.Year;

	    // Получаем объект для настройки линейной регрессии

	    Linear := Formula.Method As IMsLinearRegressionTransform;

	    // Задаем порядок авторегрессии

	    Ar[0] := 2;

	    Ar[1] := 4;

	    Linear.ARMA.OrderAR := Ar;

	    // Используем автоматическую оценку константы

	    Linear.ConstantMode := InterceptMode.AutoEstimate;

	    // Добавляем в модель фактор, источником данных которого является БДВР

	    TransVar := Transform.Inputs.Add(Stub);

	    Tree := TransVar.SlicesTree(TransVar);

	    Slice := Tree.CreateSlice(2);

	    // Получаем фактор в виде элемента выражения

	    TermInfo := Transform.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    // Задаем формулу расчета линейной регрессии

	    Linear.Explanatories.Add.Expression.AsString := TermInfo.TermInnerText;

	    // Задаем периоды расчета модели

	    Period := Transform.Period;

	    Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

	    Period.IdentificationEndDate := DateTime.ComposeDay(2014, 12, 31);

	    Period.ForecastStartDate := DateTime.ComposeDay(2015, 1, 1);

	    Period.ForecastEndDate := DateTime.ComposeDay(2020, 12, 31);

	    // Сохраняем модель в репозитории

	    (Model As IMetabaseObject).Save;

	End Sub ModelAttr;


См. также:


[Примеры](KeMs_Sample.htm) | [IMsModel](../Interface/IMsModel/IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
