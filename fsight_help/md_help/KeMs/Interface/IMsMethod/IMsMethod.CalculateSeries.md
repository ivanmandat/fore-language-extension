# IMsMethod.CalculateSeries

IMsMethod.CalculateSeries
-


# IMsMethod.CalculateSeries


## Синтаксис


CalculateSeries(Calculation: [IMsMethodCalculation](../IMsMethodCalculation/IMsMethodCalculation.htm);
 Coord: [IMsFormulaTransformCoord](../IMsFormulaTransformCoord/IMsFormulaTransformCoord.htm)):
 [IMsTransformSeries](../IMsTransformSeries/IMsTransformSeries.htm);


## Параметры


Calculation. Параметры расчета
 модели.


Coord. Срез моделируемой переменной,
 для которого осуществляется расчет.


## Описание


Свойство CalculateSeries возвращает
 данные, полученные в результате расчета модели.


## Комментарии


Данный метод позволяет получить результаты расчета модели без расчета
 всей задачи.


[![](../../opened.gif)![](../../closed.gif)Модели, доступные
 для данного метода](javascript:TextPopup(this))


		- Регрессионные модели:


			- модели множественной
			 регрессии:


				- [линейная регрессия
				 (Оценка МНК)](../IMsLinearRegressionTransform/IMsLinearRegressionTransform.htm);


				- [линейная
				 регрессия (Оценка методом инструментальных переменных)](../IMs2SLSTransform/IMs2SLSTransform.htm);


			- [нелинейная
			 регрессия (Оценка МНК)](../IMsNonLinearRegressionTransform/IMsNonLinearRegressionTransform.htm).


		- Анализ временных рядов:


			- [тренд
			 с подбором функциональной зависимости](../IMsCurveEstimationTransform/IMsCurveEstimationTransform.htm);


			- методы сглаживания:


				- [медианное
				 сглаживание](../IMsMedianSmoothingTransform/IMsMedianSmoothingTransform.htm);


				- [скользящее
				 среднее](../IMsSlideSmoothingTransform/IMsSlideSmoothingTransform.htm);


				- [грей-метод](../IMsGreyForecastTransform/IMsGreyForecastTransform.htm);


				- [фильтр
				 Ходрика-Прескотта](../IMsHodrickPrescottFilterTransform/IMsHodrickPrescottFilterTransform.htm);


				- [LRX-фильтр](../IMsLRXFilterTransform/IMsLRXFilterTransform.htm);


				- [фильтр
				 Бакстера-Кинга](../IMsBandpassFilterTransform/IMsBandpassFilterTransform.htm);


				- [экспоненциальное
				 сглаживание](../IMsExponentialSmoothingTransform/IMsExponentialSmoothingTransform.htm);


			- динамические модели:


				- [модель
				 коррекции ошибок](../IMsCointegrationEquationTransform/IMsCointegrationEquationTransform.htm);


			- [ARIMA](../IMsArimaTransform/IMsArimaTransform.htm).


		- Преобразования:


			- [методы
			 накопления](../IMsCumulativeTransform/IMsCumulativeTransform.htm);


			- [коллапс](../IMsCollapseTransform/IMsCollapseTransform.htm);


			- [обработка
			 пропусков](../IMsFillGapsTransform/IMsFillGapsTransform.htm);


			- [интерполяция](../IMsInterpolateTransform/IMsInterpolateTransform.htm).


		- [Детерминированное
		 уравнение](../IMsDeterministicTransform/IMsDeterministicTransform.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В контейнере присутствует модель с
 идентификатором MODEL_LINREG. Модель использует для расчета метод линейной
 регрессии (оценка МНК).


Добавьте ссылки на системные сборки: Metabase, Ms.


	Sub UserProc;

	Var MB: IMetabase;

	    Model: IMsModel;

	    Transform: IMsFormulaTransform;

	    VarTrans: IMsFormulaTransformVariable;

	    Tree: IMsFormulaTransformSlicesTree;

	    Slice: IMsFormulaTransformSlice;

	    Selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    LinReg: IMsLinearRegressionTransform;

	    Coord: IMsFormulaTransformCoord;

	    Calc: IMsModelCalculation;

	    CalcRes: IMsTransformSeries;

	    d: Double;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем модель

	    Model := MB.ItemByIdNamespace("MODEL_LINREG", MB.ItemById("MS").Key).Bind As IMsModel;


	    // Получаем параметры модели

	    Transform := Model.Transform;

	    VarTrans := Transform.Outputs.Item(0);

	    Tree := VarTrans.SlicesTree(VarTrans);

	    Slice := Tree.CreateSlice(1);

	    Selector := Transform.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := Transform.Transform(Selector);

	    LinReg := Formula.Method As IMsLinearRegressionTransform;

	    Coord := Transform.CreateCoord(VarTrans);


	    // Создаем объект для расчета модели

	    Calc := Model.CreateCalculation;

	    // Задаем периоды расчета

	    Calc.Period.IdentificationStartDate := DateTime.Parse("01.01.2000");

	    Calc.Period.IdentificationEndDate := DateTime.Parse("31.12.2005");

	    Calc.Period.ForecastStartDate := DateTime.Parse("01.01.2006");

	    Calc.Period.ForecastEndDate := DateTime.Parse("31.12.2010");


	    // Выполняем расчет

	    CalcRes := LinReg.CalculateSeries(Calc As IMsMethodCalculation, Coord);

	    // Выводим результаты расчета в окно консоли

	    Debug.WriteLine("Исходный ряд:");

	    For Each d In CalcRes.Fact Do

	        Debug.WriteLine(d.ToString);

	    End For;

	    Debug.WriteLine("");

	    Debug.WriteLine("Модельный ряд:");

	    For Each d In CalcRes.Modelling Do

	        Debug.WriteLine(d.ToString);

	    End For;

	    Debug.WriteLine("");

	    Debug.WriteLine("Остатки:");

	    For Each d In CalcRes.Residuals Do

	        Debug.WriteLine(d.ToString);

	    End For;


	    Debug.WriteLine("");

	    Debug.WriteLine("Прогноз:");


	    For Each d In CalcRes.Forecast Do

	        Debug.WriteLine(d.ToString);

	    End For;

	    Debug.WriteLine("");

	    Debug.WriteLine("Верхняя доверительная граница:");

	    For Each d In CalcRes.UpperConfidenceLevel Do

	        Debug.WriteLine(d.ToString);

	    End For;

	    Debug.WriteLine("");

	    Debug.WriteLine("Нижняя доверительная граница:");

	    For Each d In CalcRes.LowerConfidenceLevel Do

	        Debug.WriteLine(d.ToString);

	    End For;

	End Sub UserProc;


В результате выполнения примера модель будет рассчитана. Данные исходного,
 модельного, прогнозного ряда, ряда с остатками и верхней и нижней доверительных
 границ будут выведены в консоль среды разработки.


См. также:


[IMsMethod](IMsMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
