# IMsModelParams.Add

IMsModelParams.Add
-


# IMsModelParams.Add


## Синтаксис


Add: [IMsModelParam](../IMsModelParam/IMsModelParam.htm);


## Описание


Метод Add добавляет параметр в коллекцию.


## Комментарии


Для удаления определенного параметра из коллекции используйте методы [IMsModelParams.Remove](IMsModelParams.Remove.htm) и [IMsModelParams.RemoveByKey](IMsModelParams.RemoveByKey.htm), для удаления всех параметров - метод [IMsModelParams.Clear](IMsModelParams.Clear.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера моделирования с идентификатором «MODEL_SPACE». Контейнер должен содержать метамодель с идентификатором «METAMODEL», рассчитываемую задачей с идентификатором «PROBLEM». Цепочка расчёта метамодели должна содержать модель детерминированного уравнения с идентификатором «MODEL».


Добавьте ссылки на системные сборки «Dal», «Metabase», «Ms», «Transform».


			Sub ParamsAdd;

Var

    mb: IMetabase;

    Ms: IMetabaseObjectDescriptor;

    Problem: IMsProblem;

    MetaModel: IMsMetaModel;

    Model: IMsModel;

    MMParams: IMsModelParams;

    Param: IMsModelParam;

    CalcSett: IMsProblemCalculationSettings;

    Calc: IMsProblemCalculation;

    Method: IMsDeterministicTransform;

    ParamsVals: IMsModelParamValues;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования
    Ms := mb.ItemById("MODEL_SPACE");

    // Получаем метамодель
    MetaModel := mb.ItemByIdNamespace("METAMODEL", Ms.Key).Edit As IMsMetaModel;

    // Задаем параметры метамодели
    MMParams := MetaModel.Params;

    MMParams.Clear;

    // Добавляем параметр, определяющий нижнюю границу значений
    Param := MMParams.Add;

    Param.Name := "MIN_VALUE";

    Param.Id := "MIN_VALUE";

    Param.Tag := "Значение по умолчанию отсутствует";

    Param.Hidden := True;

    Param.DataType := DbDataType.Integer;

    Param.ParamType := TsParamType.Simple;

    // Добавляем параметр, определяющий верхнюю границу значений
    Param := MMParams.Add;

    Param.Name := "MAX_VALUE";

    Param.Id := "MAX_VALUE";

    Param.Tag := "Значение по умолчанию отсутствует";

    Param.Hidden := True;

    Param.DataType := DbDataType.Integer;

    Param.ParamType := TsParamType.Simple;

    // Сохраняем изменения в метамодели
    (MetaModel As IMetabaseObject).Save;

    // Получаем модель
    Model := mb.ItemByIdNamespace("MODEL", Ms.Key).Edit As IMsModel;

    Method := Model.Transform.FormulaItem(0).Method As IMsDeterministicTransform;

    // Задаем выражение для расчёта модели, основанное на значениях параметров
    Method.Expression.AsString := "RandBetween({MIN_VALUE}, {MAX_VALUE})";

    // Сохраняем изменения в модели
    (Model As IMetabaseObject).Save;

    // Получаем задачу моделирования
    Problem := mb.ItemByIdNamespace("PROBLEM", Ms.Key).Edit As IMsProblem;

    // Задаем параметры расчёта задачи
    CalcSett := Problem.CreateCalculationSettings;

    // Задаем значения параметров
    ParamsVals := CalcSett.ParamValues;

    ParamsVals.FindById("MIN_VALUE").Value := -100;

    ParamsVals.FindById("MAX_VALUE").Value := 100;

    CalcSett.FactIncluded := True;

    // Выполняем расчёт
    Calc := Problem.Calculate(CalcSett);

    Calc.Run;

End Sub ParamsAdd;


После выполнения примера в метамодели «METAMODEL» созданы два параметра. На основе данных параметров задана формула расчёта модели «MODEL». Выполнен расчёт цепочки метамодели. Перед расчётом заданы значения параметров.


См. также:


[IMsModelParams](IMsModelParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
