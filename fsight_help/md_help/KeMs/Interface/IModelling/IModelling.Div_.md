# IModelling.Div_

IModelling.Div_
-


# IModelling.Div_


## Синтаксис


Div_(Input: Variant; Divisor: Variant): Variant;


## Параметры


Input. Входная переменная.


Divisor. Делитель.


## Описание


Метод Div_ возвращает целую
 часть от целочисленного деления значений точек переменной на заданное
 число.


## Комментарии


Для получения остатка от целочисленного деления используйте метод [IModelling.Mod_](IModelling.Mod_.htm).


Примечание.
 При делении значений целого типа результат также будет целого типа.


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

	    TermInfo.Type := MsFormulaTermType.Pointwise;

	    Expr := Determ.Expression;

	    Expr.References := "Ms";

	    Expr.AsString := "Div_(" + TermInfo.TermInnerText + ",2)";

	    If Expr.Valid Then

	        ModelObj.Save;

	    Else

	        Debug.WriteLine("Модель не сохранена: ошибка в формуле");

	    End If;

	End Sub UserProc;


В результате выполнения примера модель будет возвращать целую часть
 от целочисленного деления точек первой входной переменной на число «2».


## Пример использования в выражениях


Выражение 1:


Div_({Brazil|BCA}, 2)


Результат: рассчитана целая часть от целочисленного деления наблюдений
 показателя «Brazil|BCA» на число
 «2».


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Div_(X1, 3)


Результат: рассчитана целая часть от целочисленного деления точек фактора
 «X1» на три.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


Выражение 3:


Div_(15,4)


Результат: 3.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm)
 | База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: модель [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
