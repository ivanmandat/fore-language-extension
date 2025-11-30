# IModelling.SignI

IModelling.SignI
-


# IModelling.SignI


## Синтаксис


SignI(Input: Variant): Variant;


## Параметры


Input. Переменная.


## Описание


Метод SignI
 возвращает знак точек указанной переменной, если она содержит только целые
 значения.


## Комментарии


Метод
 может возвращать следующие значения:


	- 1.
	 Число положительное;


	- 0.
	 Число равно нулю;


	- -1.
	 Число отрицательное.


Для получения знака точек переменной, содержащей не только целые значения,
 используйте метод [IModelling.Sign](IModelling.Sign.htm).


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

    Expr.AsString := "SignI(" + TermInfo.TermInnerText + ")";

    If Expr.Valid

         Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет рассчитывать знак точек
 первой входной переменной, если она содержит только целые значения.


## Пример использования в выражениях


Выражение 1:


SignI({Brazil|BCA})


Результат: рассчитаны знаки наблюдений показателя «Brazil|BCA». Если
 показатель содержит вещественные значения, то возникнет ошибка.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


SignI(X1)


Результат: рассчитаны знаки точек фактора «X1».


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


См. также:


[IModelling](IModelling.htm) |
 База данных временных рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)
 | Контейнер моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
