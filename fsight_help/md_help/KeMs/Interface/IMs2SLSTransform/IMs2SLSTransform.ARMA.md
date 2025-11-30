# IMs2SLSTransform.ARMA

IMs2SLSTransform.ARMA
-


# IMs2SLSTransform.ARMA


## Синтаксис


ARMA: [ISlARMA](StatLib.chm::/Interface/ISlARMA/ISlARMA.htm);


## Описание


Свойство ARMA
 возвращает параметры авторегрессии и скользящего среднего.


## Комментарии


По умолчанию порядки авторегрессии и скользящего среднего не заданы.


Если для модели задан порядок авторегрессии или скользящего среднего,
 то будут рассчитаны верхняя и нижняя динамические доверительные границы
 прогнозного ряда.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, содержащего модель с идентификатором
 MODEL_2SLS. Данная модель должна рассчитываться методом «Линейная
 регрессия (оценка методом инструментальных переменных)».


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    hModel: IMetabaseObjectDescriptor;

	    oModel: IMsModel;

	    oTransform: IMsFormulaTransform;

	    oSelector: IMsFormulaTransformSelector;

	    oOutputVariable: IMsFormulaTransformVariable;

	    SLS: IMs2SLSTransform;

	    ARMA: ISlARMA;

	    coo: IMsFormulaTransformCoord;

	    calc: IMsMethodCalculation;

	    per: IMsModelPeriod;

	    AR, MR: Array[1] Of Integer;

	    CoefficientsAR, CoefficientsMA: ICoefficients;

	Begin

	    MB := MetabaseClass.Active;

	    // Получаем модель линейной регрессии

	    hModel := MB.ItemByIdNamespace("MODEL_2SLS", MB.GetObjectKeyById("MS"));

	    oModel := hModel.Edit As IMsModel;

	    // Получаем параметры расчета

	    oTransform := oModel.Transform;

	    oSelector := oTransform.CreateSelector;

	    // Получаем моделируемую переменную

	    oOutputVariable := oTransform.Outputs.Item(0) As IMsFormulaTransformVariable;

	    oSelector.Slice := oOutputVariable.Slices.Item(0);

	    // Настраиваем расчет линейной регрессии

	    SLS := oTransform.Transform(oSelector).Method As IMs2SLSTransform;

	    ARMA := SLS.ARMA;

	    // Задаю порядок авторегрессии

	    AR[0] := 3;

	    ARMA.OrderAR := AR;

	    // Задаем порядок скользящего среднего

	    MR[0] := 2;

	    ARMA.OrderMA := MR;

	    // Задаем максимальное число итераций

	    ARMA.MaxIteration := 30;

	    // Задаем точность решения

	    ARMA.Tolerance := 0.5;

	    // Указываем, что при расчете доверительных границ не учитываем,

	    // что коэффициенты найдены приближенно

	    SLS.CoefUncertaintyInSECalc := False;

	    // Задаем параметры обработки пропусков

	    SLS.MissingData.Method := MissingDataMethod.LinTrend;

	    // Идентифицируем коэффициенты

	    coo := oTransform.CreateCoord(oOutputVariable);

	    calc := oTransform.CreateCalculation;

	    per := calc.Period;

	    per.IdentificationStartDate := oTransform.Period.IdentificationStartDate;

	    per.IdentificationEndDate := oTransform.Period.IdentificationEndDate;

	    per.ForecastStartDate := oTransform.Period.ForecastStartDate;

	    per.ForecastEndDate := oTransform.Period.ForecastEndDate;

	    calc.CurrentPoint := oTransform.Period.IdentificationStartDate;

	    SLS.Identify(calc, coo);

	    // Получаем коэффициенты авторегрессии

	    CoefficientsAR := SLS.ARMACoefficients(coo).CoefficientsAR;

	    Debug.WriteLine("Коэффициенты авторегрессии");

	    Debug.Write("  Значение: ");

	    Debug.WriteLine(CoefficientsAR.Estimate[0]);

	    Debug.Write("  Стандартная ошибка: ");

	    Debug.WriteLine(CoefficientsAR.StandardError[0]);

	    Debug.Write("  t-статистика: ");

	    Debug.WriteLine(CoefficientsAR.TStatistic[0]);

	    Debug.Write("  Вероятность:");

	    Debug.WriteLine(CoefficientsAR.Probability[0]);

	    // Получаем коэффициенты скользящего среднего

	    CoefficientsMA := SLS.ARMACoefficients(coo).CoefficientsMA;

	    Debug.WriteLine("Коэффициенты скользящего среднего");

	    Debug.Write("  Значение: ");

	    Debug.WriteLine(CoefficientsMA.Estimate[0]);

	    Debug.Write("  Стандартная ошибка: ");

	    Debug.WriteLine(CoefficientsMA.StandardError[0]);

	    Debug.Write("  t-статистика: ");

	    Debug.WriteLine(CoefficientsMA.TStatistic[0]);

	    Debug.Write("  Вероятность:");

	    Debug.WriteLine(CoefficientsMA.Probability[0]);

	    (oModel As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для модели будут определены порядки
 авторегрессии и скользящего среднего. Также будет изменено максимальное
 число итераций, точность решения, метод обработки пропусков и параметры
 расчета доверительных границ. В окно консоли будут выведены значения статистических
 характеристик, рассчитанных для коэффициентов авторегрессии и скользящего
 среднего.


См. также:


[IMs2SLSTransform](IMs2SLSTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
