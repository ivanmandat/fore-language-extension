# Создание модели с переменными, являющимися объектами репозитория

Создание модели с переменными, являющимися объектами репозитория
-


# Создание модели с переменными, являющимися объектами репозитория


## Описание


Рассмотрим пример создания модели переменными, являющимися объектами
 репозитория, использующей для расчета метод линейной регрессии (оценка
 МНК).


## Требования


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS_DEFAULT». Данный контейнер моделирования
 должен содержать переменные с идентификаторами «OUTPUT_VARIABLE» и «FACTOR_VARIABLE».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Metabase, Ms,
 Stat.


## Пример


	Sub ModelVariable;

	Var

	    Mb: IMetabase;

	    CrInf: IMetabaseObjectCreateInfo;

	    Model: IMsModel;

	    Transform: IMsFormulaTransform;

	    TransformVarables: IMsFormulaTransformVariables;

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

	    CrInf.Id := Mb.GenerateId("MODEL_LINEAR_REGRESSION", Mb.ItemById("MS_DEFAULT").Key);

	    // Задаем наименование модели

	    CrInf.Name := "Модель линейной регрессии";

	    // Задаем контейнер моделирования, в котором будет создаваться модель

	    CrInf.Parent := Mb.ItemById("MS_DEFAULT");

	    // Создаем модель

	    Model := Mb.CreateObject(CrInf).Edit As IMsModel;

	    // Получаем объект для настройки параметров модели

	    Transform := Model.Transform;

	    // Получаем объект для работы с моделируемой переменной

	    TransformVarables := Transform.Outputs;

	    // Приводим переменную «OUTPUT_VARIABLE» к абстрактному источнику данных

	    Stub := Mb.ItemByIdNamespace("OUTPUT_VARIABLE", Mb.GetObjectKeyById("MS_DEFAULT")).Bind As IVariableStub;

	    // Используем переменную «OUTPUT_VARIABLE» качестве моделируемой переменной

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

	    // Не используем константу

	    Linear.ConstantMode := InterceptMode.None;

	    // Приводим переменную «FACTOR_VARIABLE» к абстрактному источнику данных

	    Stub := Mb.ItemByIdNamespace("FACTOR_VARIABLE", Mb.GetObjectKeyById("MS_DEFAULT")).Bind As IVariableStub;

	    // Добавляем в модель переменную «FACTOR_VARIABLE» в качестве фактора

	    TransVar := Transform.Inputs.Add(Stub);

	    Tree := TransVar.SlicesTree(TransVar);

	    Slice := Tree.CreateSlice(1);

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

	End Sub ModelVariable;


См. также:


[Примеры](KeMs_Sample.htm) | [IMsModel](../Interface/IMsModel/IMsModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
