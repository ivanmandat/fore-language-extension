# IModelling.DateSeries

IModelling.DateSeries
-


# IModelling.DateSeries


## Синтаксис


DateSeries([OutputFrequency: [MsFrequency](../../Enums/MsFrequency.htm)
 = 0]): Variant;


## Параметры


OutputFrequency. Календарная
 динамика результирующего ряда.


## Описание


Метод DateSeries возвращает
 текущее значение даты для каждой точки ряда в зависимости от заданных
 периодов расчёта.


## Комментарии


По умолчанию параметр OutputFrequency
 равен динамике расчёта. Например, если задан период расчёта с 2015 по
 2020 год и метод используется в виде DateSeries(MsFrequency.Monthly),
 то будут получены все месяцы заданного периода расчёта;


Примечание.
 Если параметр не задан, то результирующий ряд создаётся с динамикой текущего
 расчёта.


Используется при расчёте [детерминированного
 уравнения](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm):


	- если выбран поточечный [способ
	 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm#calc), то метод возвращает дату расчёта;


	- если выбран векторный [способ
	 расчёта](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Specification/4_Deterministic_equation/uimodelling_model_specification_deter.htm#calc), то метод возвращает временной ряд, в котором
	 точки расчёта соответствуют датам.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS, который содержит модель с идентификатором
 MODEL_D. Модель рассчитывается методом детерминированного уравнения и
 содержит хотя бы одну входную переменную.


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

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ModelSpace := Mb.ItemById("MS").Bind;

    // Получаем модель

    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    // Получаем параметры расчёта модели

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    // Получаем первую входную переменную

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчёт

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем выражение расчёта модели

    Expr := Determ.Expression;

    Expr.References := "Ms";

    // Задаем выражение расчёта модели

    Expr.AsString := "iif(DateSeries(MsFrequency.Annual)>=DateTime.Parse(""01.01.2018"")," + TermInfo.TermInnerText + ",0)";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение корректное, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера для модели будет изменена формула:


	- модель возвращает нули, если используются значения до 2018 года;


	- модель возвращает значения первого фактора, если используются
	 значения после 2018 года.


В консоль будет выведено сообщение об ошибке в формуле, если выражение
 некорректно.


## Пример использования в выражениях


Выражение 1:


iif(DateSeries >= DateTime.Parse("01.01.2018"),
 {Brazil|BCA}, Null)


Результат: для значений от 2018 года выражение будет возвращать наблюдение
 показателя «Brazil|BCA».


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


iif(DateSeries = DateTime.Parse("01.01.2018"),
 X1, Null)


Результат: для значений 2018 года выражение будет возвращать значения
 фактора «X1».


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
