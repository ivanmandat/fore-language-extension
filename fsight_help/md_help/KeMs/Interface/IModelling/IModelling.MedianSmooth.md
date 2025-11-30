# IModelling.MedianSmooth

IModelling.MedianSmooth
-


# IModelling.MedianSmooth


## Синтаксис


MedianSmooth(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


             Period:
 [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


             [WindowSize:
 Integer = 5];


             [Casewise:
 [MsCasewise](../../Enums/MsCasewise.htm) = 0]): Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод;


WindowSize. Размер окна;


Casewise. Метод обработки пропусков.


## Описание


Метод MedianSmooth выполняет
 [медианное
 сглаживание](Lib.chm::/02_Time_series_analysis/UiModelling_median_smoothing.htm) переменной.


## Комментарии


Особенности задания параметров:


	- Period. Если параметру
	 задано значение Null, то метод
	 рассчитывается на всём временном периоде;


	- WindowSize. Параметр
	 должен иметь нечётное значение.


Основное достоинство медианного сглаживания - устойчивость к наличию
 выбросов.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub ProcMedianSmooth;

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

    Expr.AsString := "MedianSmooth(" + TermInfo.TermInnerText + ", SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" + "), 5, MsCasewise.Yes)";

    If Expr.Valid

        Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub ProcMedianSmooth;


В результате выполнения примера модель будет осуществлять преобразование
 первой входной переменной методом медианного сглаживания на периоде с
 2000 по 2015 год. Расчёт выполняется с применением обработки пропусков
 методом Casewise.


## Пример использования в выражениях


Выражение 1:


MedianSmooth({Brazil|BCA}, SetPeriod("01.01.2000",
 "01.01.2015"), 5, MsCasewise.Yes)


Результат: для показателя «Brazil|BCA»
 будет применено медианное сглаживание (размер окна равняется пяти), расчёт
 выполняется на периоде с 2000 по 2015 год с применением обработки пропусков
 методом Casewise.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


MedianSmooth(X1, SetPeriod("01.01.2000",
 "01.01.2015"), 7, MsCasewise.Yes)


Результат: для фактора «X1»
 будет применено медианное сглаживание (размер окна равняется семи), расчёт
 выполняется на периоде с 2000 по 2015 год с применением обработки пропусков
 методом Casewise.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm) |
 Метод расчёта [медианного
 сглаживания](Lib.chm::/02_Time_series_analysis/UiModelling_median_smoothing.htm) | База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
