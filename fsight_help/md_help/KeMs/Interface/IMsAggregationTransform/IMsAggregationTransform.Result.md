# IMsAggregationTransform.Result

IMsAggregationTransform.Result
-


# IMsAggregationTransform.Result


## Синтаксис


		Result: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство Result возвращает терм,
 соответствующий моделируемой переменной.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS_DEFAULT, содержащим модель агрегации
 с идентификатором MODEL_AGGREGATION.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    MObj: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    ModelTrans: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Agrr: IMsAggregationTransform;

		    Coord: IMsFormulaTransformCoord;

		    Calc: IMsModelCalculation;

		    Arr: Array Of Double;

		    i: Integer;

		Begin

		    // Получаем текущий репозиторий

		    MB := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    MObj := MB.ItemById("MS_DEFAULT");

		    // Получаем модель агрегации

		    Model := MB.ItemByIdNamespace("MODEL_AGGREGATION", MObj.Key).Bind As IMsModel;

		    ModelTrans := Model.Transform;

		    Formula := ModelTrans.FormulaItem(0);

		    // Получаем параметры расчета модели

		    Agrr := Formula.Method As IMsAggregationTransform;

		    // Задаем настройки для расчета модели

		    Coord := ModelTrans.CreateCoord(ModelTrans.Outputs.Item(0));

		    Calc := Model.CreateCalculation;

		    Calc.Period.IdentificationStartDate := DateTime.Parse("01.01.1990");

		    Calc.Period.IdentificationEndDate := DateTime.Parse("31.12.2016");

		    Calc.Period.ForecastStartDate := DateTime.Parse("01.01.2017");

		    Calc.Period.ForecastEndDate := DateTime.Parse("31.12.2025");

		    // Получаем данные моделируемой переменной и выводим их в окно консоли

		    Arr := Agrr.Result.Serie(Calc As IMsMethodCalculation);

		    For i := 0 To Arr.Length - 1 Do

		    Debug.WriteLine(Arr[i]);

		    End For;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены данные
 моделируемой переменной.


См. также:


[IMsAggregationTransform](IMsAggregationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
