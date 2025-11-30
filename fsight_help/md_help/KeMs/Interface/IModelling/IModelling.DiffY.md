# IModelling.DiffY

IModelling.DiffY
-


# IModelling.DiffY


## Синтаксис


DiffY(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm)):
 Variant;


## Параметры


Input. Переменная.


## Описание


Метод DiffY
 осуществляет расчёт прироста точек переменной к соответствующему периоду
 предыдущего года.


## Комментарии


Расчёт прироста точек переменной осуществляется по следующей формуле:
 X[t]-X[t-1*F], где F
 - соответствующий период предыдущего года.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


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

    Expr := Determ.Expression;

    Expr.References := "Ms";

    Expr.AsString := "DiffY(" + TermInfo.TermInnerText + ")";

    If Expr.Valid

    Then ModelObj.Save;

    Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет рассчитывать прирост точек
 первой входной переменной к соответствующему периоду предыдущего года.


## Пример использования в выражениях


Выражение 1:


DiffY({Brazil|BCA})


Результат: рассчитан прирост наблюдений показателя «Brazil|BCA»
 к соответствующему периоду предыдущего года.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


DiffY(X1)


Результат: рассчитан прирост значение точек фактора «X1»
 к соответствующему периоду предыдущего года.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)


База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Разность](UiDw.chm::/Workbook/CalculatedSeries/Transformations/UiDw_cs_Difference.htm)


Контейнер моделирования:
 [Редактирование
 регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm), [Преобразования
 над переменными или факторами](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/UiModelling_work_Changes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
