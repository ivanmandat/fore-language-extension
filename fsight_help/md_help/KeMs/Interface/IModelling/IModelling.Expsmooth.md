# IModelling.ExpSmooth

IModelling.ExpSmooth
-


# IModelling.ExpSmooth


## Синтаксис


ExpSmooth(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


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


Метод ExpSmooth осуществляет
 преобразование переменной методом экспоненциального сглаживания.


## Комментарии


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


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы один фактор.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

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

    Mb := MetabaseClass.Active;

    ModelSpace := Mb.ItemById("MS").Bind;

    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    TermInfo.Type := MsFormulaTermType.Pointwise;

    Expr := Determ.Expression;

    Expr.References := "Ms;Stat";

    Expr.AsString := "ExpSmooth(" + TermInfo.TermInnerText + ",SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

        "), SeasonalityType.Additive, 4, TrendType.Damped, " +

        "0.15, Estimate, Estimate, Estimate, MsCasewise.No, 0.2)";

    If Expr.Valid Then

        ModelObj.Save;

    Else

        Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет осуществлять преобразование
 первой входной переменной методом экспоненциального сглаживания на периоде
 с 2000 по 2015 год. Расчёт ведется без обработки пропусков.


## Пример использования в выражениях


Выражение 1:


ExpSmooth({Brazil|BCA[t]}, SetPeriod("01.01.2005",
 "01.01.2015"), SeasonalityType.Additive, 4, TrendType.Linear,
 0.1, 0, 0.1, 0, MsCasewise.No, 0.2)


Результат: для ряда «Brazil|BCA»
 будет выполнено экспоненциальное сглаживание по следующим параметрам:
 использована аддитивная модель сезонности, длина периода сезонности -
 «4», значение коэффициентов «Дельта» и «Фи» - «0», «Альфа» и «Гамма» -
 «0,1», расчёт ведется без обработки пропусков, период расчета - с 2005
 по 2015 год, шаг сетки - «0,2».


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


ExpSmooth(X1, Null, SeasonalityType.Additive, 4,
 TrendType.Linear, 0.2, 0, 0.2, 0, MsCasewise.No, 0.3)


Результат: для фактора «X1»
 будет выполнено экспоненциальное сглаживание на всём периоде расчета по
 следующим параметрам: использована аддитивная модель сезонности, длина
 периода сезонности - «4», значение коэффициентов «Дельта» и «Фи» - «0»,
 «Альфа» и «Гамма» - «0,2», расчёт ведется без обработки пропусков, шаг
 сетки - «0,3».


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


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
