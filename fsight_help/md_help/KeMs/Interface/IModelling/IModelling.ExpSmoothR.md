# IModelling.ExpSmoothR

IModelling.ExpSmoothR
-


# IModelling.ExpSmoothR


## Синтаксис


ExpSmoothR(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


           Period:
 [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


           SeasonalEffect:
 [SeasonalityType](StatLib.chm::/Enums/SeasonalityType.htm);


           SeasonalPeriod:
 Integer;


           Trend:
 [TrendType](StatLib.chm::/Enums/TrendType.htm);


           Alpha:
 Variant;


           Delta:
 Variant;


           Gamma:
 Variant;


           Phi:
 Variant;


           [Casewise:
 [MsCasewise](../../Enums/MsCasewise.htm) = 0;]


           [GridStep:
 Double = 0.1]): Variant;


## Параметры


Input. Переменная;


Period. Период, на котором
 рассчитывается метод;


SeasonalEffect. Модель сезонности;


SeasonalPeriod. Длина периода
 сезонности;


Trend. Модель роста;


Alpha. Коэффициент «Альфа»;


Delta. Коэффициент «Дельта»;


Gamma. Коэффициент «Гамма»;


Phi. Коэффициент «Фи»;


Casewise. Метод обработки пропусков;


GridStep. Шаг сетки.


## Описание


Метод ExpSmoothR преобразует
 данные переменной методом экспоненциального сглаживания с помощью пакета
 R.


## Комментарии


Для использования данного метода в репозитории должна быть настроена
 интеграция с R. Для настройки интеграции обратитесь к статье «[Как настроить
 интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Особенности задания параметров:


	- Period. Если значение
	 параметра Null, то метод рассчитывается
	 на всём временном периоде;


	- SeasonalPeriod. Значение
	 параметра должно быть больше либо равно четырём. Параметр учитывается,
	 если используется аддитивная или мультипликативная модель сезонности;


	- Delta. Значение параметра
	 учитывается, если используется аддитивная или мультипликативная модель
	 сезонности;


	- Gamma. Значение параметра
	 учитывается, если используется аддитивная или экспоненциальная модель
	 роста;


	- Phi. Значение параметра
	 учитывается, если используется затухающая модель роста;


Примечание.
 Значения коэффициентов Alpha,
 Delta, Gamma,
 Phi могут быть заданы пользователем
 либо оценены автоматически. Для автоматической оценки значений используйте
 метод [IModelling.Estimate](IModelling.Estimate.htm).


	- Casewise. Необязательный
	 параметр. По умолчанию обработка пропусков не используется.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


В репозитории должна быть настроена интеграция с R. Для настройки интеграции
 обратитесь к статье «[Как
 настроить интеграцию с R?](UiModelling.chm::/../../../FAQ/R_Integration.htm)».


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserExpSmoothR;

Var

    Mb: IMetabase;

    ModelSpace, ModelObj: IMetabaseObject;

    Transf: IMsFormulaTransform;

    Formula: IMsFormula;

    Model: IMsModel;

    Determ: IMsDeterministicTransform;

    TransVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    TermInfo: IMsFormulaTermInfo;

    Expr: IExpression;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ModelSpace := Mb.ItemById("MS").Bind;

    // Получаем модель

    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    // Получаем параметры расчета модели

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    // Получаем первую входную переменную

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms;Stat";

    // Задаем выражение расчета модели

    Expr.AsString := "ExpSmoothR(" + TermInfo.TermInnerText + ", SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

        "), SeasonalityType.Additive, 4, TrendType.Damped, " +

        "0.15, Estimate, Estimate, Estimate, MsCasewise.Yes, 0.2)";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserExpSmoothR;


В результате выполнения примера модель будет осуществлять преобразование
 первой входной переменной методом экспоненциального сглаживания. Расчёт
 будет выполнен с помощью пакета R.


## Пример использования в выражениях


Выражение 1:


ExpSmoothR({Чикаго - население[t]}, SetPeriod("2000",
 "2015"), SeasonalityType.Additive , 4, TrendType.Linear, 0.1,
 0, 0.1, 0)


Результат: для временного ряда «Чикаго
 - население» будет выполнено экспоненциальное сглаживание по следующим
 параметрам: период расчета метода - 2000-2015, используется аддитивная
 модель сезонности, длина периода сезонности - «4», значение коэффициентов
 «Дельта» и «Фи» - «0», «Альфа» и «Гамма» - «0,1». Расчет выполняется с
 помощью пакета R.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


ExpSmoothR(X1, Null, SeasonalityType.Additive, 4,TrendType.Linear,
 0.2, 0, 0.2, 0, MsCasewise.No, 0.2)


Результат: для фактора «X1»
 будет выполнено экспоненциальное сглаживание по следующим параметрам:
 расчет выполняется на всем временном периоде, используется аддитивная
 модель сезонности, длина периода сезонности - «4», значение коэффициентов
 «Дельта» и «Фи» - «0», «Альфа» и «Гамма» - «0,2», обработка пропусков
 не используется, значение шага сетки - «0,2». Расчет выполняется с помощью
 пакета R.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)
 | Метод [экспоненциального
 сглаживания](Lib.chm::/02_Time_series_analysis/UiModelling_ExpSmooth.htm) | База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Экспоненциальное
 сглаживание](UiDw.chm::/Workbook/CalculatedSeries/Forecast/UiDw_cs_ExponentialSmoothing.htm) | Контейнер моделирования: модель
 «[Экспоненциальное
 сглаживание](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/5_Exponential_smoothing/uimodelling_model_specification_exponential.htm)», [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
