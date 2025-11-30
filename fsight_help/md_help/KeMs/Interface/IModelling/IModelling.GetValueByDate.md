# IModelling.GetValueByDate

IModelling.GetValueByDate
-


# IModelling.GetValueByDate


## Синтаксис


GetValueByDate(Input: Variant; Date: Variant): Variant;


## Параметры


Input. Ряд, значение которого
 необходимо получить;


Date. Дата, на которую надо
 получить значение.


## Описание


Метод GetValueByDate возвращает
 значение ряда на заданную дату.


## Комментарии


Особенности задания параметров:


	- Input. В качестве значения
	 параметра может передаваться
	 константа, параметр или объект типа [iTimeSeries](../ITimeSeries/ITimeSeries.htm);


	- Date. В качестве значения
	 параметра может передаваться число, строка или параметр.


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

    TransVar_1: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    TermInfo_1: IMsFormulaTermInfo;

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

    TransVar_1 := Transf.Inputs.Item(0);

    Slice := TransVar_1.Slices.Item(0);

    TermInfo_1 := Transf.CreateTermInfo;

    TermInfo_1.Slice := Slice;

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms";

    // Задаем выражение расчета модели

    Expr.AsString := "GetValueByDate(" + TermInfo_1.TermInnerText + ", 2005)*2";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера будет задано новое выражение для модели
 детерминированного уравнения: умноженное на два значение первой входной
 переменной на 2005-й год.


## Пример использования в выражениях


Выражение 1:


GetValueByDate({ВВП|Анкоридж[t]}, 2005)*2


Результат: значение ряда «ВВП|Анкоридж»
 на 2005-й год будет умножено на два.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


GetValueByDate(X1, "2015A")*2


Результат: значение фактора «X1»
 на 2015-й год будет умножено на два.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)
 | База данных временных рядов: [калькулятор](UiDw.chm::/Workbook/CalculatedSeries/UiDw_cs_Calculator.htm) |
 Контейнер моделирования: [редактирование регрессора/формулы](UiNav.Chm::/GUI/ExpressionEditor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
