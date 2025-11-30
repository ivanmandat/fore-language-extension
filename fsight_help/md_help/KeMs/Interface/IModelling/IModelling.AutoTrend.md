# IModelling.AutoTrend

IModelling.AutoTrend
-


# IModelling.AutoTrend


## Синтаксис


AutoTrend(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);
 Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm)): Variant;


## Параметры


Input. Переменная, оптимальный
 тренд которой требуется подобрать;


Period. Период, на котором
 подбирается оптимальный тренд.


## Описание


Метод AutoTrend подбирает для
 переменной оптимальный тренд на заданном периоде.


## Комментарии


Если в качестве значения параметра Period
 установлено Null, то метод рассчитывается
 на всём временном периоде.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub
 UserProc;

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

    ModelObj := Mb.ItemByIdNamespace("MODEL", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    Expr := Determ.Expression;

    Expr.References := "Ms;Stat";

    Expr.AsString := "AutoTrend(" + TermInfo.TermInnerText + ",SetPeriod(" + """" + "01.01.2003" + """" + "," + """" + "01.01.2006" + """" + "))";

    If Expr.Valid

        Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера для первой входной переменной будет
 подобран оптимальный тренд на периоде с 2003 по 2006 год.


## Пример использования в выражениях


Выражение 1:


AutoTrend({Brazil|BCA}, SetPeriod("2006A",
 "2009A"))


Результат: для ряда «Brazil|BCA»
 подобран оптимальный тренд на периоде с 2006 года по 2009 год.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


AutoTrend(X1,SetPeriod("2006A", "2009A"))


Результат: для фактора «X1»
 подобран оптимальный тренд на периоде с 2006 года по 2009 год.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)
 | База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
