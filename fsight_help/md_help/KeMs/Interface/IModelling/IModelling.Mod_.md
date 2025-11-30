# IModelling.Mod_

IModelling.Mod_
-


# IModelling.Mod_


## Синтаксис


Mod_(Input: Variant; Divisor: Variant): Variant;


## Параметры


Input. Переменная;


Divisor. Делитель.


## Описание


Метод Mod_
 возвращает остаток от деления значений точек переменной на заданное число.


## Комментарии


Результат имеет такой же знак, как и делимое.


Методы Mod_ и [IModelling.Modulus](IModelling.Modulus.htm)
 дублируют друг друга.


Примечание.
 При делении значений целого типа результат также будет целого типа.


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

    Inp_1, Inp_2: String;

    Expr: IExpression;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ModelSpace := Mb.ItemById("MS").Bind;

    // Получаем модель

    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    // Получаем параметры расчета модели

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    // Получаем первую входную переменную

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Запоминаем настройки
 расчета модели для точек первой входной переменной

    Inp_1 := TermInfo.TermInnerText;

    // Получаем вторую входную переменную

    TransVar := Transf.Inputs.Item(1);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Запоминаем настройки
 расчета модели для точек второй входной переменной

    Inp_2 := TermInfo.TermInnerText;

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms";

    // Задаем выражение расчета модели

    Expr.AsString := "Mod_(" + Inp_1 + ", " + Inp_2 + ")";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет вращать остаток от целочисленного
 деления точек первой входной переменной на соответствующие точки второй
 входной переменной.


## Пример использования в выражениях


Выражение 1:


Mod_({Brazil|BCA},{China|BCA})


Результат: рассчитан остаток от целочисленного деления наблюдений показателя
 «Brazil|BCA» на соответствующие
 наблюдения показателя «China|BCA».


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Mod_(X1,3)


Результат: рассчитан остаток от целочисленного деления точек фактора
 «X1» на три.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


Выражение 3:


Mod_(15,4)


Результат: 3.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm)


База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Mod](UiDw.chm::/Workbook/CalculatedSeries/Arithmetic/UiDw_cs_Mod.htm)


Контейнер моделирования:
 [Редактирование
 регрессора](UiNav.Chm::/GUI/ExpressionEditor.htm)/[формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
