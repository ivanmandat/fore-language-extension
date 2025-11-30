# IMsDeterministicTransform.Result

IMsDeterministicTransform.Result
-


# IMsDeterministicTransform.Result


## Синтаксис


		Result: [IMsFormulaTerm](../IMsFormulaTerm/IMsFormulaTerm.htm);


## Описание


Свойство Result возвращает терм,
 соответствующий моделируемой переменной.


## Комментарии


Для получения коллекции термов, используемых для составления уравнения
 модели, используйте свойство [IMsDeterministicTransform.Operands](IMsDeterministicTransform.Operands.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель детерминированного
 уравнения с идентификатором MODEL_D.


Добавьте ссылки на системные сборки: Metabase, Ms.


					Sub UserProc;

		Var

		    mb: IMetabase;

		    ModelCont: IMetabaseObjectDescriptor;

		    Model: IMsModel;

		    Transform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    Determ: IMsDeterministicTransform;

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

		    Model := mb.ItemByIdNamespace("MODEL_D", ModelCont.Key).Edit As IMsModel;

		    // Задаем период действия формулы

		    Model.CalculationPeriod := MsCalculationPeriod.Both;

		    // Получаем параметры модели

		    Transform := Model.Transform;

		    Formula := Transform.FormulaItem(0);

		    Determ := Formula.Method As IMsDeterministicTransform;

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

		    arr := Determ.Result.Serie(Calc);

		    For i := 0 To arr.Length - 1 Do

		        Debug.WriteLine(arr[i]);

		    End For;

		    (Model As IMetabaseObject).Save;

		End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены значения
 моделируемой переменной.


См. также:


[IMsDeterministicTransform](IMsDeterministicTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
