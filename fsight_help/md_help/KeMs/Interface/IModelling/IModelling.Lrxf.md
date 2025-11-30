# IModelling.Lrxf

IModelling.Lrxf
-


# IModelling.Lrxf


## Синтаксис


Lrxf(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


     Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);


     PrioryValues: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


     Weights1: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


     Weights2: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);


     Smoothing: Integer]):
 Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод;


PrioryValues. Входной ряд предварительных
 значений;


Weights1. Первые весовые значения;


Weights2. Вторые весовые значения;


Smoothing. Параметр сглаживания.


## Описание


Метод Lrxf осуществляет моделирование
 переменной с помощью [LRX-фильтра](Lib.chm::/02_Time_series_analysis/UiModellling_LRX.htm).


## Комментарии


Если параметру Period задано
 значение Null, то метод рассчитывается
 на всём временном периоде.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одного фактора.


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

    Inp_1, Inp_2: String;

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

    Inp_1 := TermInfo.TermInnerText;

    TransVar := Transf.Inputs.Item(1);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    TermInfo.Type := MsFormulaTermType.Pointwise;

    Inp_2 := TermInfo.TermInnerText;

    Expr := Determ.Expression;

    Expr.References := "Ms";

    Expr.AsString := "Lrxf(" + Inp_1 + ",SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

        "), " + Inp_2 + " ,Null, Null, 110)";

    If Expr.Valid

        Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет выполнять преобразование
 первой входной переменной с помощью LRX-фильтра на периоде с 2000 по 2015
 год.


## Пример использования в выражениях


Выражение 1:


Lrxf({Brazil|BCA}, SetPeriod("01.01.2005",
 "01.01.2015"),{Sudan|BCA[t]},{China|BCA[t]},Null,100)


Результат: для ряда «Brazil|BCA»
 будет применено сглаживание с использованием LRX-фильтра на периоде с
 2005 по 2015 год. Входной ряд предварительных значений задан рядом «Sudan|BCA», первые весовые значения
 - рядом «China|BCA», параметр
 сглаживания равен ста.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Lrxf(X1,Null,X2,Null,Null,50)


Результат: для фактора «X1»
 будет применено сглаживание с использованием LRX-фильтра на всём временном
 периоде. Входной ряд предварительных значений задан фактором «X2»,
 весовые значения не заданы, параметр сглаживания равен пятидесяти.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm) | Метод «[LRX-фильтр](Lib.chm::/02_Time_series_analysis/UiModellling_LRX.htm)» |
 База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: модель «[LRX-фильтр](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/UiModelling_Specification_LRX.htm)»,
 [редактирование
 регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
