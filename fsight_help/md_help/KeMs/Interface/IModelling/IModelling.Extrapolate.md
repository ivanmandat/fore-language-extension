# IModelling.Extrapolate

IModelling.Extrapolate
-


# IModelling.Extrapolate


## Синтаксис


Extrapolate(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


            Period:
 [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


            Type:
 [DependenceType](StatLib.chm::/Enums/DependenceType.htm);


            [SeasonalEffect:
 [SeasonalityType](StatLib.chm::/Enums/SeasonalityType.htm)
 = 0;]


            [SeasonalPeriod:
 Integer = 4;]


            [PolinomPower:
 Integer = 3;]


            [Value:
 Integer = 0;]


            [Casewise:
 [MsCasewise](../../Enums/MsCasewise.htm) = 0]): Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод;


Type. Тип функциональной зависимости;


SeasonalEffect. Модель сезонности;


SeasonalPeriod. Длина периода
 сезонности;


PolinomPower. Степень полинома
 для полиномиальной функциональной зависимости;


Value. Заданное значение экстраполяции;


Casewise. Метод обработки пропусков.


## Описание


Метод Extrapolate осуществляет
 преобразование переменной с использованием тренда с подбором функциональной
 зависимости.


## Комментарии


Особенности задания параметров:


	- Period. Если значение
	 параметра Null, то метод рассчитывается
	 на всём временном периоде;


	- SeasonalEffect. Необязательный
	 параметр. По умолчанию модель сезонности не используется;


	- SeasonalPeriod. Необязательный
	 параметр. Значение по умолчанию - четыре. Параметр должен быть больше
	 либо равен четырём. Значение параметра учитывается, если используется
	 аддитивная или мультипликативная модель сезонности;


	- PolinomPower. Необязательный
	 параметр. Значение по умолчанию - три. Параметр должен быть больше,
	 либо равен нулю. Если указано отрицательное значение, то при расчёте
	 степень полинома приравнивается к нулю;


	- Value. Необязательный
	 параметр. Значение по умолчанию - нуль. Используется, если применяется
	 экстраполяция заданным значением: Type
	 = DependenceType.Value;


	- Casewise. Необязательный
	 параметр. По умолчанию обработка пропусков не используется.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
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

    Expr.AsString := "Extrapolate(" + TermInfo.TermInnerText + ", SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

        "), DependenceType.Linear, SeasonalityType.Additive, 4, 3, 0, MsCasewise.Yes)";

    If Expr.Valid Then

        ModelObj.Save;

    Else

        Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет осуществлять преобразование
 первой входной переменной с использованием тренда с подбором линейной
 функциональной зависимости на периоде с 2000 по 2015 год. Расчёт
 выполняется с применением обработки пропусков методом Casewise.


## Пример использования в выражениях


Выражение 1:


Extrapolate({Brazil|BCA[t]}, SetPeriod("01.01.2000","01.01.2015"),DependenceType.Linear)


Результат: выполнено преобразование ряда «Brazil|BCA»
 с использованием тренда с подбором линейной функциональной зависимости,
 расчёт ведется на периоде с 2000 по 2015 год без заполнения пропусков.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Extrapolate(X1,DependenceType.Logarithmic,SeasonalityType.Additive,4,0,0,
 MsCasewise.Yes)


Результат: выполнено преобразование фактора «X1»
 с использованием логарифмического тренда с аддитивной моделью сезонности
 (длина периода сезонности - «4»), расчёт выполняется на всём периоде с
 применением обработки пропусков методом Casewise.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 |[Тренд
 с подбором функциональной зависимости](Lib.chm::/02_Time_series_analysis/UiModelling_TrendCurveEstimation.htm) | База данных
 временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [тренд](UiDw.chm::/Workbook/CalculatedSeries/Forecast/UiDw_cs_Exponential_Trend.htm)
 | Контейнер моделирования: модель «[Тренд
 с подбором функциональной зависимости](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/9_Universal_graph/9_universal_graph.htm)», [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
