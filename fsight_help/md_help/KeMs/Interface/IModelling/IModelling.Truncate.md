# IModelling.Truncate

IModelling.Truncate
-


# IModelling.Truncate


## Синтаксис


Truncate(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);

         Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);

         Mode: [MsTruncateMode](../../Enums/MsTruncateMode.htm)):
 Variant;


## Параметры


Input. Усекаемая переменная;


Period. Период усечения;


Mode. Режим усечения.


## Описание


Метод Truncate
 осуществляет усечение переменной по заданным параметрам.


## Комментарии


Если параметр Period имеет
 значение Null, то усечение выполняется
 на всём временном периоде.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    ModelSpace, ModelObj:IMetabaseObject;

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

    ModelObj := Mb.ItemByIdNamespace("MODEL_D",ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    Expr := Determ.Expression;

    Expr.References := "Ms";

    Expr.AsString := "Truncate(" + TermInfo.TermInnerText + ", SetPeriod(" + """"
 + "01.01.2003" +

                              """" + "01.01.2006"
 + """" + ")"
 + ", MsTruncateMode.Remove)";

    If Expr.Valid

        Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет осуществлять усечение первой
 входной переменной на периоде с 2003 по 2006 год.


## Пример использования в выражениях


Выражение 1:


Truncate({Brazil|BCA[t]}, SetPeriod("2006A",
 "2009A"), MsTruncateMode.Remove)


Результат: ряд «Brazil|BCA»
 усечен (отброшены значения с 2006 года по 2009 год).


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Truncate(X1,SetPeriod("2006A", "2009A"), MsTruncateMode.Keep)


Результат: фактор «X1» усечен
 (оставлены значения с 2006 года по 2009 год).


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 | База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Усечение](UiDw.chm::/Workbook/CalculatedSeries/Transformations/UiDw_cs_Truncate.htm)
 | Контейнер
 моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
