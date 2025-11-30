# IModelling.DLogX

IModelling.DLogX
-


# IModelling.DLogX


## Синтаксис


DLogX(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);
 [Lag: Integer = 1]): Variant;


## Параметры


Input. Переменная;


Lag. Параметр задает сдвиг
 (лаг) точек переменной во временном периоде.


## Описание


Метод DLogX
 осуществляет расчёт прироста логарифма точек переменной к указанному периоду.


## Комментарии


Параметр Lag может принимать
 только положительные значения; необязательный параметр, значение по умолчанию:
 «1» - предыдущий период.


Расчёт прироста логарифма точек переменной осуществляется по следующей
 формуле: (ln(x[t]/x[t-Lag])).


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
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

    Expr.AsString := "DLogX(" + TermInfo.TermInnerText + ", 3)";

    If Expr.Valid

    Then ModelObj.Save;

    Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет рассчитывать прирост логарифма
 точек первой входной переменной к периоду, сдвинутому от текущего на три
 точки назад.


## Пример использования в выражениях


Выражение 1:


DLogX({Brazil|BCA}, 2)


Результат: рассчитан прирост логарифма наблюдений показателя «Brazil|BCA» к периоду, сдвинутому
 от текущего на две точки назад.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


DLogX(X1, 3)


Результат: рассчитан прирост логарифма точек фактора «X1»
 к периоду, сдвинутому от текущего на три точки назад.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm)
 | База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер
 моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
