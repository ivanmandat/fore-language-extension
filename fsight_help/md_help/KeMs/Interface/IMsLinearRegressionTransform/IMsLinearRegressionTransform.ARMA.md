# IMsLinearRegressionTransform.ARMA

IMsLinearRegressionTransform.ARMA
-


# IMsLinearRegressionTransform.ARMA


## Синтаксис


ARMA: [ISlARMA](StatLib.chm::/Interface/ISlARMA/ISlARMA.htm);


## Описание


Свойство ARMA
 возвращает параметры авторегрессии и скользящего среднего.


## Комментарии


Если для модели задан порядок авторегрессии или скользящего среднего,
 то будут рассчитаны верхняя и нижняя динамические доверительные границы
 прогнозного ряда.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором «MS», содержащего модель с идентификатором
 «MODEL_LINEARREGR». Данная модель должна рассчитываться методом «Линейная регрессия (оценка МНК)».


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


			Sub UserProc;

Var

    mb: IMetabase;

    hModel: IMetabaseObjectDescriptor;

    oModel: IMsModel;

    oTransform: IMsFormulaTransform;

    oSelector: IMsFormulaTransformSelector;

    oOutputVariable: IMsFormulaTransformVariable;

    oLinear: IMsLinearRegressionTransform;

    ARMA: ISlARMA;

    pCalc: IMsMethodCalculation;

    coo: IMsFormulaTransformCoord;

    AR, MR: Array[1] Of Integer;

    CoefficientsAR, CoefficientsMA: ICoefficients;

Begin

    mb := MetabaseClass.Active;

    // Получаем модель линейной регрессии

    hModel := mb.ItemByIdNamespace("MODEL_LINEARREGR", mb.GetObjectKeyById("MS"));

    oModel := hModel.Edit As IMsModel;

    // Получаем параметры расчета

    oTransform := oModel.Transform;

    oSelector := oTransform.CreateSelector;

    // Получаем моделируемую переменную

    oOutputVariable := oTransform.Outputs.Item(0) As IMsFormulaTransformVariable;

    oSelector.Slice := oOutputVariable.Slices.Item(0);

    // Настраиваем расчет линейной регрессии

    oLinear := oTransform.Transform(oSelector).Method As IMsLinearRegressionTransform;

    ARMA := oLinear.ARMA;

    // Задаем порядок авторегрессии

    AR[0] := 3;

    ARMA.OrderAR := AR;

    // Задаем порядок скользящего среднего

    MR[0] := 2;

    ARMA.OrderMA := MR;

    // Задаем максимальное число итераций

    ARMA.MaxIteration := 300;

    // Задаем точность решения

    ARMA.Tolerance := 0.5;

    // Указываем, что при расчете доверительных границ не учитываем,

    // что коэффициенты найдены приближенно

    oLinear.CoefUncertaintyInSECalc := False;

    // Задаем параметры обработки пропусков

    oLinear.MissingData.Method := MissingDataMethod.LinTrend;

    // Задаем параметры расчета модели

    pCalc := oTransform.CreateCalculation;

    pCalc.Period.IdentificationStartDate := DateTime.ComposeDay(2000, 1, 1);

    pCalc.Period.IdentificationEndDate := DateTime.ComposeDay(2010, 12, 31);

    pCalc.Period.ForecastStartDate := DateTime.ComposeDay(2011, 1, 1);

    pCalc.Period.ForecastEndDate := DateTime.ComposeDay(2015, 12, 31);

    coo := oTransform.CreateCoord(oOutputVariable);

    oLinear.Identify(pCalc, coo);

    // Получаем коэффициенты авторегрессии

    CoefficientsAR := oLinear.ARMACoefficients(coo).CoefficientsAR;

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

    CoefficientsMA := oLinear.ARMACoefficients(coo).CoefficientsMA;

    Debug.WriteLine("Коэффициенты скользящего среднего");

    Debug.Write("  Значение: ");

    Debug.WriteLine(CoefficientsMA.Estimate[0]);

    Debug.Write("  Стандартная ошибка: ");

    Debug.WriteLine(CoefficientsMA.StandardError[0]);

    Debug.Write("  t-статистика: ");

    Debug.WriteLine(CoefficientsMA.TStatistic[0]);

    Debug.Write("  Вероятность:");

    Debug.WriteLine(CoefficientsMA.Probability[0]);

    // Сохраняем изменения в модели

    (oModel As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера для модели будут определены порядки авторегрессии
 и скользящего среднего. Также будет изменено максимальное число итераций,
 точность решения, метод обработки пропусков и параметры расчета доверительных
 границ. В окно консоли будут выведены значения статистических характеристик,
 рассчитанных для коэффициентов авторегрессии и скользящего среднего.


См. также:


[IMsLinearRegressionTransform](IMsLinearRegressionTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
