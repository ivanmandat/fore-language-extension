# IModelling.Int

IModelling.Int
-


# IModelling.Int


## Синтаксис


Int(Input: Variant): Variant;


## Параметры


Input. Переменная.


## Описание


Метод Int
 округляет значения точек указанной переменной до ближайшего меньшего целого.


## Комментарии


Диапазон допустимых значений входной переменной [MinInteger; MaxInteger]:
 MinInteger = -231, MaxInteger
 = 231 - 1.


Если входной параметр выходит за левую границу допустимых значений,
 метод возвращает MinInteger.


Если входной параметр выходит за правую границу допустимых значений,
 метод возвращает MaxInteger.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В контейнере содержится модель с идентификатором
 MODEL_D, рассчитываемая методом детерминированного уравнения и содержащая
 хотя бы одну входную переменную.


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

    Expr.AsString := "Int(" + TermInfo.TermInnerText + ")";

    If Expr.Valid Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет округлять значения точек
 первой входной переменной до ближайшего меньшего целого.


## Пример использования в выражениях


Выражение 1:


Int({Brazil|BCA})


Результат: наблюдения показателя «Brazil|BCA» будут округлены до
 ближайшего меньшего целого.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Int(X1)


Результат: точки фактора «X1»
 будут округлены до ближайшего меньшего целого.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


Выражение 3:


Int(4.6)


Результат: 4.


Применение: можно использовать в любых выражениях.


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
