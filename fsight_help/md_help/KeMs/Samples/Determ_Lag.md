# Создание модели детерминированного уравнения с лагированными операндами

Создание модели детерминированного уравнения с лагированными операндами
-


# Создание модели детерминированного уравнения с лагированными операндами


## Описание


Рассмотрим пример создания модели [детерминированного
 уравнения](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm) с операндами, для которых задан лаг.


## Требования


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS» и базы данных временных рядов с идентификатором
 «TSDB». Данная база данных временных рядов должна содержать обязательные
 пользовательские атрибуты рядов, являющиеся ссылкой на справочник.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms.


## Пример


	Sub UserProc;

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

	    Determ: IMsDeterministicTransform;

	    TermX1, TermX2: IMsFormulaTerm;

	    TermInfo: IMsFormulaTermInfo;

	    Period: IMsModelPeriod;

	Begin

	    Mb := MetabaseClass.Active;

	    // Задаем базовые параметры модели как объекта репозитория

	    CrInf := Mb.CreateCreateInfo;

	    CrInf.ClassId := MetabaseObjectClass.KE_CLASS_MSMODEL;

	    // Задаем идентификатор модели

	    CrInf.Id := Mb.GenerateId("MODEL_DETERMINISTIC_LAG", Mb.ItemById("MS").Key);

	    // Задаем наименование модели

	    CrInf.Name := "Детерминированное уравнение с лагированными операндами";

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

	    // Указываем метод расчета - детерминированное уравнение

	    Formula.Kind := MsFormulaKind.Deterministic;

	    // Задаем календарную динамику расчета

	    Formula.Level := DimCalendarLevel.Year;

	    // Получаем объект для настройки детерминированного уравнения

	    Determ := Formula.Method As IMsDeterministicTransform;

	    // Добавляем в модель фактор, источником данных которого является БДВР

	    TransVar := Transform.Inputs.Add(Stub);

	    Tree := TransVar.SlicesTree(TransVar);

	    Slice := Tree.CreateSlice(2);

	    // Добавляем 1-й фактор в коллекцию элементов выражений, используемых для составления уравнения

	    TermX1 := Determ.Operands.Add(Slice);

	    // Получаем параметры элемента выражения

	    TermInfo := TermX1.TermInfo;

	    // Задаем тип элемента выражения: значение на определенную дату

	    TermInfo.Type := MsFormulaTermType.Date;

	    // Задаем дату для элемента выражения

	    TermInfo.SetDate(DateTime.ComposeDay(2014, 1, 1), "YYYY");

	    // Устанавливаем измененные параметры для элемента выражения

	    TermX1.TermInfo := TermInfo;

	    // Добавляем в модель фактор, источником данных которого является БДВР

	    TransVar := Transform.Inputs.Add(Stub);

	    Tree := TransVar.SlicesTree(TransVar);

	    Slice := Tree.CreateSlice(3);

	    // Добавляем 2-й фактор в коллекцию элементов выражений, используемых для составления уравнения

	    TermX2 := Determ.Operands.Add(Slice);

	    // Получаем параметры элемента выражения

	    TermInfo := TermX2.TermInfo;

	    // Задаем лаг для элемента выражения

	    TermInfo.Lag := "-2";

	    // Устанавливаем измененные параметры для элемента выражения

	    TermX2.TermInfo := TermInfo;

	    // Задаем выражение для расчета детерминированного уравнения

	    Determ.Expression.AsString := "Iif(" + TermX1.TermToInnerText + ">-0.5, " +

	        TermX2.TermToInnerText + "+1, " + TermX2.TermToInnerText + "-1)";

	    // Задаем периоды расчета модели

	    Period := Transform.Period;

	    Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

	    Period.IdentificationEndDate := DateTime.ComposeDay(2014, 12, 31);

	    Period.ForecastStartDate := DateTime.ComposeDay(2015, 1, 1);

	    Period.ForecastEndDate := DateTime.ComposeDay(2020, 12, 31);

	    // Сохраняем модель в репозитории

	    (Model As IMetabaseObject).Save;

	End Sub UserProc;


См. также:


[Примеры](KeMs_Sample.htm) | [IMsDeterministicTransform](../Interface/IMsDeterministicTransform/IMsDeterministicTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
