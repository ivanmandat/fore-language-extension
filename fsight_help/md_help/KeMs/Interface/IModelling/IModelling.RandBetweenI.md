# IModelling.RandBetweenI

IModelling.RandBetweenI
-


# IModelling.RandBetweenI


## Синтаксис


RandBetweenI(Bottom: Variant; Top: Variant): Variant;


## Параметры


Bottom. Наименьшее возвращаемое
 целое число;


Top. Наибольшее возвращаемое
 целое число.


## Описание


Метод RandBetweenI
 возвращает случайное целое число между двумя заданными целыми числами.


## Комментарии


Для получения любого случайного числа между двумя любыми числами используйте
 метод [IModelling.RandBetween](IModelling.Randbetween.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая более одной входной переменной. Первая и вторая входные переменные
 должны содержать только целые значения.


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

    Expr.AsString := "RandBetweenI(" + Inp_1 + ", " + Inp_2 + ")";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет возвращать случайные числа,
 расположенные между соответствующих точек первой и второй входных переменных.


## Пример использования в выражениях


Выражение 1:


RandBetweenI(Min({Brazil|BCA}),Max({Brazil|BCA}))


Результат: случайное число из диапазона: минимальное значение показателя
 «Brazil|BCA» - максимальное значение
 показателя «Brazil|BCA». Если
 показатель содержит вещественные значения, то возникнет ошибка.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


RandBetweenI(Min(X1),0)


Результат: случайное число, расположенное между минимальным значением
 фактора «X1» и нулём.


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
