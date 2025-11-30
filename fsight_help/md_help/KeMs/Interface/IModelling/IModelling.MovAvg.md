# IModelling.MovAvg

IModelling.MovAvg
-


# IModelling.MovAvg


## Синтаксис


MovAvg(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


       Period:
 [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


       [WindowSize:
 Integer = 5;]


       [Casewise:
 [MsCasewise](../../Enums/MsCasewise.htm) = 0]): Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод;


WindowSize. Размер окна;


Casewise. Метод обработки пропусков.


## Описание


Метод MovAvg осуществляет преобразование
 переменной методом [скользящего
 среднего](Lib.chm::/02_Time_series_analysis/UiModelling_SlideSmooth.htm).


## Комментарии


Особенности задания параметров:


	- Period. Если параметру
	 задано значение Null, то метод
	 рассчитывается на всём временном периоде;


	- WindowSize. Параметр
	 должен иметь нечётное значение.


Метод скользящего среднего основан на представлении ряда в виде суммы
 достаточно гладкого тренда и случайной компоненты.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub ProcAvg;

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

    Expr.References := "Ms";

    Expr.AsString := "MovAvg(" + TermInfo.TermInnerText + ", SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" + "),  3, MsCasewise.Yes)";

    If Expr.Valid

        Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub ProcAvg;


В результате выполнения примера модель будет осуществлять преобразование
 первой входной переменной методом скользящего среднего на периоде с 2000
 по 2015 год. Расчёт выполняется с применением обработки пропусков методом
 Casewise.


## Пример использования в выражениях


Выражение 1:


MovAvg({Brazil|BCA}, SetPeriod("01.01.2000",
 "01.01.2015"), 3, MsCasewise.Yes)


Результат: для показателя «Brazil|BCA»
 будет применен метод скользящего среднего с окном равным трем на периоде
 с 2000 по 2015 год. Расчёт выполняется с применением обработки пропусков
 методом Casewise.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


MovAvg(X1, SetPeriod("01.01.1990", "01.01.2016"))


Результат: для фактора «X1»
 будет применен метод скользящего среднего на периоде с 1990 по 2016 год.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)
 | [Метод
 скользящего среднего](Lib.chm::/02_Time_series_analysis/UiModelling_SlideSmooth.htm) | База данных временных рядов:
 [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Скользящее
 среднее](UiDw.chm::/Workbook/CalculatedSeries/Smoothing/UiDw_cs_MovingAverage.htm) | Контейнер моделирования: модель «[Скользящее
 среднее](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/2_Slitherring_smoothing/2_Slitherring_smoothing.htm)», [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
