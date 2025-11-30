# IModelling.Trunc

IModelling.Trunc
-


# IModelling.Trunc


## Синтаксис


Trunc(Input: Variant; Precision: Variant): Variant;


## Параметры


Input. Переменная;


Precision. Количество десятичных
 разрядов, до которого нужно усечь число.


## Описание


Метод Trunc
 усекает точки переменной до указанного количества десятичных разрядов.


## Комментарии


Особенности задания параметров:


	- если Precision больше
	 0, то число округляется до указанного количества десятичных разрядов
	 справа от десятичной запятой;


	- если Precision равно
	 0, то число округляется до ближайшего целого;


	- если Precision меньше
	 0, то число округляется слева от десятичной запятой.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
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

    Expr.AsString := "Trunc("
 + TermInfo.TermInnerText + ",
 2)";

    If Expr.Valid

        Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет осуществлять усечение точек
 первой входной переменной до двух десятичных разрядов.


## Пример использования в выражениях


Выражение 1:


Trunc({Brazil|BCA},2)


Результат: наблюдения показателя «Brazil|BCA»
 усечены до двух десятичных разрядов.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Trunc(X1,0)


Результат: точки фактора «X1» усечены
 до ближайшего целого.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


Выражение 3:


Trunc(5.978,1)


Результат: 5,9.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm)


База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)


Контейнер моделирования:
 [Редактирование
 формулы](UiNav.Chm::/GUI/ExpressionEditor.htm), [Редактирование регрессора](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
