# IMsCointegrationEquationTransform.Result

IMsCointegrationEquationTransform.Result
-


# IMsCointegrationEquationTransform.Result


## Синтаксис


		Result: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство Result возвращает терм,
 соответствующий моделируемой переменной.


## Комментарии


Для получения экзогенных переменных используйте свойство [IMsCointegrationEquationTransform.Operands](IMsCointegrationEquationTransform.Operands.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель коррекции ошибок
 с идентификатором MODEL_COINTEGRATIONEQ.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


					End Sub UserProc;

		Var

		    mb: IMetabase;

		    ModelCont: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Eq: IMsCointegrationEquationTransform;

		    i: integer;

		    Calc: IMsMethodCalculation;

		    arr: Array Of Double;

		    Period: IMsModelPeriod;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем контейнер моделирования

		    ModelCont := mb.ItemById("MS");

		    // Получаем модель коррекции ошибок

		    Model := mb.ItemByIdNamespace("MODEL_COINTEGRATIONEQ", ModelCont.Key).Edit As IMsModel;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Eq := Formula.Method As IMsCointegrationEquationTransform;

		    // Задаем тип модели коррекции ошибок

		    Eq.ModelType := ECMType.NoTrendIntercept;

		    // Задаем порядок авторегрессии эндогенной и экзогенной переменных

		    Eq.EndogenousAutoRegressionOrder[0] := 1;

		    Eq.ExogenousAutoRegressionOrder[0] := 0;

		    // Задаем метод обработки пропусков

		    Eq.MissingData.Method := MissingDataMethod.Geometric;

		    // Задаем значимость доверительных границ

		    Eq.ConfidenceLevel := 0.2;

		    // Относим все переменные к группе, описывающей краткосрочные коинтеграционные связи

		    For i := 0 To Eq.Operands.Count - 1 Do

		        Eq.OperandType(i) := MsCointegrationEquationOperandType.Common;

		    End For;

		    // Создаем объект с параметрами расчета модели

		    Calc := Transform.CreateCalculation;

		    // Задаем периоды расчета

		    Period := Model.Transform.Period;

		    Calc.Period.IdentificationStartDate := Period.IdentificationStartDate;

		    Calc.Period.IdentificationEndDate := Period.IdentificationEndDate;

		    Calc.Period.ForecastStartDate := Period.ForecastStartDate;

		    Calc.Period.ForecastEndDate := Period.ForecastEndDate;

		    Calc.CurrentPoint := Period.IdentificationStartDate;

		    // Получаем данные моделируемой переменной и выводим их в окно консоли

		    arr := Eq.Result.Serie(Calc);

		    For i := 0 To arr.Length - 1 Do

		        Debug.WriteLine(arr[i]);

		    End For;

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера будут изменены параметры модели, все
 экзогенные переменные будут включены в группу, описывающую краткосрочные
 коинтеграционные связи, данные моделируемой переменной будут выведены
 в окно консоли.


См. также:


[IMsCointegrationEquationTransform](IMsCointegrationEquationTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
