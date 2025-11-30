# ITsModelParams.Add

ITsModelParams.Add
-


# ITsModelParams.Add


## Синтаксис


Add: [ITsModelParam](../ITsModelParam/ITsModelParam.htm);


## Описание


Метод Add добавляет параметр
 в коллекцию.


## Комментарии


Для удаления определенного параметра из коллекции используйте методы
 [ITsModelParams.Remove](ITsModelParams.Remove.htm) и [ITsModelParams.RemoveByKey](ITsModelParams.RemoveByKey.htm),
 для удаления всех параметров - метод [ITsModelParams.Clear](ITsModelParams.Clear.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MODEL_SPACE». Контейнер должен содержать
 метамодель с идентификатором «METAMODEL», рассчитываемую задачей с идентификатором
 «PROBLEM». Цепочка расчёта метамодели должна содержать модель детерминированного
 уравнения с идентификатором «MODEL».


Добавьте ссылки на системные сборки «Dal», «Metabase», «Ms», «Transfrom».


	Sub ModelParams;

	Var

	    mb: IMetabase;

	    Ms: IMetabaseObjectDescriptor;

	    Problem: IMsProblem;

	    MetaModel: IMsMetaModel;

	    Model: IMsModel;

	    MMParams: ITsModelParams;

	    TsParam: ITsModelParam;

	    CalcSett: IMsProblemCalculationSettings;

	    Calc: IMsProblemCalculation;

	    Method: IMsDeterministicTransform;

	    ParamsVals: ITsModelParamValues;

	Begin

	    mb := MetabaseClass.Active;

	    // Получаем контейнер моделирования

	    Ms := mb.ItemById("MODEL_SPACE");

	    // Получаем метамодель

	    MetaModel := mb.ItemByIdNamespace("METAMODEL", Ms.Key).Edit As IMsMetaModel;

	    // Задаем параметры метамодели

	    MMParams := MetaModel.Params As ITsModelParams;

	    MMParams.Clear;

	    // Добавляем параметр, определяющий нижнюю границу значений

	    TsParam := MMParams.Add;

	    TsParam.Name := "MIN_VALUE";

	    TsParam.Id := "MIN_VALUE";

	    TsParam.Tag := "Значение по умолчанию отсутствует";

	    TsParam.Hidden := True;

	    TsParam.DataType := DbDataType.Integer;

	    TsParam.ParamType := TsParamType.Simple;

	    // Добавляем параметр, определяющий верхнюю границу значений

	    TsParam := MMParams.Add As ITsModelParam;

	    TsParam.Name := "MAX_VALUE";

	    TsParam.Id := "MAX_VALUE";

	    TsParam.Tag := "Значение по умолчанию отсутствует";

	    TsParam.Hidden := True;

	    TsParam.DataType := DbDataType.Integer;

	    TsParam.ParamType := TsParamType.Simple;

	    // Сохраняем изменения в метамодели

	    (MetaModel As IMetabaseObject).Save;

	    // Получаем модель

	    Model := mb.ItemByIdNamespace("MODEL", Ms.Key).Edit As IMsModel;

	    Method := Model.Transform.FormulaItem(0).Method As IMsDeterministicTransform;

	    // Задаем выражение для расчёта модели, основанное на значениях параметров

	    Method.Expression.AsString := "Randbetween({MIN_VALUE}, {MAX_VALUE})";

	    // Сохраняем изменения в модели

	    (Model As IMetabaseObject).Save;

	    // Получаем задачу моделирования

	    Problem := mb.ItemByIdNamespace("PROBLEM", Ms.Key).Edit As IMsProblem;

	    // Задаем параметры расчёта задачи

	    CalcSett := Problem.CreateCalculationSettings;

	    // Задаем значения параметров

	    ParamsVals := CalcSett.ParamValues As ITsModelParamValues;

	    ParamsVals.FindById("MIN_VALUE").Value := -100;

	    ParamsVals.FindById("MAX_VALUE").Value := 100;

	    CalcSett.FactIncluded := True;

	    // Выполняем расчёт

	    Calc := Problem.Calculate(CalcSett);

	    Calc.Run;

	End Sub ModelParams;


После выполнения примера в метамодели «METAMODEL» созданы два параметра.
 На основе данных параметров задана формула расчёта модели «MODEL». Выполнен
 расчёт цепочки метамодели. Перед расчётом заданы значения параметров.


См. также:


[ITsModelParams](ITsModelParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
