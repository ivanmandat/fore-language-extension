# IModelling.X11

IModelling.X11
-


# IModelling.X11


## Синтаксис


X11(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);

    Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm)

    OutputSeries: [MsOutputSeriesType](../../Enums/MsOutputSeriesType.htm);

    SeasonalEffect: [SeasonalityType](StatLib.chm::/Enums/SeasonalityType.htm);

    [TradingDaysAdjustment: MsTradingDaysAdjustment
 = 0;]

    [LowerSigma: Double = 1.5;]

    [UpperSigma: Double = 2.5;]

    [MovingAverage: String = "";]

    [WeightCoefficients: String = "";]

    [HolidayAdjustment: [MsHolidayAdjustment](../../Enums/MsHolidayAdjustment.htm)
 = 0;]

    [SSAnalysis: Boolean = False]):
 Variant;


## Параметры


Input. Входная переменная;


Period. Период, на котором
 рассчитывается метод;


OutputSeries. Тип ряда, выгружаемого
 в моделируемую переменную;


SeasonalEffect. Модель сезонности;


TradingDaysAdjustment. Поправка
 на рабочие дни;


LowerSigma. Нижняя граница
 сигма;


UpperSigma. Верхняя граница
 сигма;


MovingAverage. Скользящее среднее;


WeightCoefficients. Весовые
 коэффициенты;


HolidayAdjustment. Поправка
 на праздничные дни;


SSAnalysis. Признак использования
 в расчете скользящих интервалов.


## Описание


Метод X11 осуществляет
 сезонную декомпозицию и корректировку данных.


## Комментарии


Метод поддерживается только в ОС Windows.


Метод возвращает корректные результаты только при работе с месячными
 или квартальными динамиками.


Особенности задания параметров:


	- Period. Если параметр
	 принимает значение Null, то
	 метод рассчитывается на всём временном периоде;


	- TradingDaysAdjustment.
	 Необязательный параметр для Fore, по умолчанию поправки на рабочие
	 дни не вычисляются;


	- LowerSigma. Необязательный
	 параметр для Fore, значение по умолчанию: «1,5»;


	- UpperSigma. Необязательный
	 параметр для Fore, значение по умолчанию: «2,5»;


	- MovingAverage, WeightCoefficients. Необязательные
	 параметры для Fore, значение по умолчанию не задано;


	- HolidayAdjustment.
	 Необязательный параметр для Fore, по умолчанию поправка на праздничные
	 дни не производится;


	- SSAnalysis. Необязательный
	 параметр для Fore, по умолчанию : False
	 (скользящие интервалы не применяются в расчёте).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D_Q, рассчитываемая методом детерминированного
 уравнения на квартальных данных и содержащая хотя бы один фактор.


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

    ModelObj := Mb.ItemByIdNamespace("MODEL_D_Q", ModelSpace.Key).Edit;

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

    Expr.AsString := "X11(" + TermInfo.TermInnerText + ",SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

        "),MsOutputSeriesType.D10, SeasonalityType.Additive, " +

        "MsTradingDaysAdjustment.No, 1.8, 2.1, """", """", MsHolidayAdjustment.None, False)";

    If Expr.Valid Then

        ModelObj.Save;

    Else

        Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет осуществлять сезонную декомпозицию
 и корректировку данных методом X11 без поправки на рабочие и праздничные
 дни и без использования скользящих интервалов на периоде с 2000 по 2015
 год.


## Пример использования в выражениях


Выражение 1:


x11({Brazil|BCA[t]}, SetPeriod("2000",
 "2015"), MsOutputSeriesType.D10, SeasonalityType.Additive, MsTradingDaysAdjustment.Auto)


Результат: для показателя «Brazil|BCA»
 будет выполнена сезонная декомпозиция и корректировка данных с автоматической
 поправкой на рабочие дни на периоде с 2000 по 2015 год.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


x11(X1, Null, MsOutputSeriesType.D10, SeasonalityType.Additive,
 MsTradingDaysAdjustment.No, 1.8, 2.1


, "", "", MsHolidayAdjustment.None,
 False)


Результат: для фактора «X1» будет выполнена сезонная декомпозиция и
 корректировка данных на всём периоде без поправки на рабочие и праздничные
 дни и без использования скользящих интервалов.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 | Метод «[X11](Lib.chm::/02_Time_series_analysis/UiModelling_Census2.htm)»
 | База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [выделение
 сезонности](UiDw.chm::/Workbook/CalculatedSeries/Smoothing/UiDw_cs_Seasonality_Month.htm) | Контейнер моделирования: модель «[X11](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_Census2.htm)»,
 [редактирование
 регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
