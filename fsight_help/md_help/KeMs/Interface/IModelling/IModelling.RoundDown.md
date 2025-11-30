# IModelling.RoundDown

IModelling.RoundDown
-


# IModelling.RoundDown


## Синтаксис


RoundDown(Input: Variant; Precision: Variant): Variant;


## Параметры


Input. Переменная;


Precision. Количество десятичных
 разрядов, до которого нужно округлить число.


## Описание


Метод RoundDown
 осуществляет округление с недостатком значений точек переменной.


## Комментарии


Особенности задания параметра Precision:


	- если значение параметра больше 0, то число округляется до указанного
	 количества десятичных разрядов справа от десятичной запятой;


	- если значение параметра равно 0, то число округляется до ближайшего
	 целого;


	- если значение параметра меньше 0, то число округляется слева
	 от десятичной запятой.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserNvl;

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

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms";

    // Задаем выражение расчета модели

    Expr.AsString := "RoundDown(" +
 TermInfo.TermInnerText + ", 2)";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserNvl;


В результате выполнения примера модель будет осуществлять округление
 с недостатком точек первой входной переменной до двух десятичных разрядов.


## Пример использования в выражениях


Выражение 1:


RoundDown({Brazil|BCA},2)


Результат: наблюдения показателя «Brazil|BCA»
 округлены с недостатком до двух десятичных разрядов.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


RoundDown(X1,0)


Результат: точки фактора «X1» округлены с
 недостатком до ближайшего целого.


Применение: можно использовать в формулах моделей [контейнера
 моделирования](UiModelling.chm::/1_Modelling/UiModelling_First.htm).


Выражение 3:


RoundDown(5.978,2)


Результат: 5,97.


Применение: можно использовать в любых выражениях.


См. также:


[IModelling](IModelling.htm)


База данных временных
 рядов: [Калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm),
 [Округление](UiDw.chm::/Workbook/CalculatedSeries/Arithmetic/UiDw_cs_Round.htm)


Контейнер моделирования:
 [Редактирование
 регрессора](UiNav.Chm::/GUI/ExpressionEditor.htm)/[формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
