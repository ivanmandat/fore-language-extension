# IModelling.ExpX

IModelling.ExpX
-


# IModelling.ExpX


## Синтаксис


ExpX(Input: Variant; Base: Variant): Variant;


## Параметры


Input. Показатель степени;


Base. Переменная, задающая
 основание степени.


## Описание


Метод ExpX
 возвращает результат возведения точек переменной в заданную степень.


## Комментарии


Методы ExpX
 и [IModelling.Power](IModelling.Power.htm)
 дублируют друг друга.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одной входной переменной.


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

    Expr.AsString := "ExpX(" + Inp_2 + "," + Inp_1 + ")";

    If Expr.Valid

        Then ModelObj.Save;

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет возводить точки первой
 входной переменной в степень, заданную точками второй входной переменной.


## Пример использования в выражениях


Выражение 1:


ExpX({Canada|BCA},{Brazil|BCA})


Результат: наблюдения показателя «Brazil|BCA»
 будут возведены в степень, заданную наблюдениями показателя «Canada|BCA».


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


ExpX(2,X1)


Результат: все точки фактора «X1»
 будут возведены во вторую степень.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


Выражение 3:


ExpX(4,2)


Результат: 24=16.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm)


База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm)


Контейнер моделирования:
 [Редактирование
 регрессора](UiNav.Chm::/GUI/ExpressionEditor.htm)/[формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
