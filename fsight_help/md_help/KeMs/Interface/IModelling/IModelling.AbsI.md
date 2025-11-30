# IModelling.AbsI

IModelling.AbsI
-


# IModelling.AbsI


## Синтаксис


AbsI(Input: Variant): Variant;


## Параметры


Input. Переменная.


## Описание


Метод AbsI
 возвращает абсолютное значение (модуль) точек указанной переменной, если
 она содержит только целые значения.


## Комментарии


Для расчёта модуля точек переменной, содержащей не только целые значения,
 используйте метод [IModelling.Abs](IModelling.Abs.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserAbsI;

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

    Expr.AsString := "AbsI(" + TermInfo.TermInnerText + ")";

    If Expr.Valid

         Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserAbsI;


В результате выполнения примера модель будет рассчитывать абсолютное
 значение (модуль) точек первой входной переменной, если она содержит только
 целые значения.


## Пример использования в выражениях


Выражение 1:


AbsI({Brazil|BCA})


Результат: для каждого наблюдения показателя
 «Brazil|BCA» будет рассчитано
 абсолютное значение. Если показатель содержит вещественные значения, то
 возникнет ошибка.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


AbsI(X1)


Результат: для каждой точки фактора «X1»
 будет рассчитано абсолютное значение.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


Выражение 3:


AbsI(-7)


Результат: 7.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm)
 | База данных временных рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Абсолютное
 значение](UiDw.chm::/Workbook/CalculatedSeries/Arithmetic/UiDw_cs_Abs.htm) | Контейнер моделирования: [Редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
