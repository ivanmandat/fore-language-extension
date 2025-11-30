# IModelling.LowerConfidenceLevel

IModelling.LowerConfidenceLevel
-


# IModelling.LowerConfidenceLevel


## Синтаксис


LowerConfidenceLevel(Forecast: [IMsForecast](../IMsForecast/IMsForecast.htm)):
 Variant;


## Параметры


Forecast. Прогнозный ряд.


## Описание


Метод LowerConfidenceLevel возвращает
 нижнюю доверительную границу прогнозного ряда.


## Комментарии


Для получения верхней доверительной границы прогнозного ряда используйте
 метод [IModelling.UpperConfidenceLevel](IModelling.UpperConfidenceLevel.htm).


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

    Expr.AsString := "LowerConfidenceLevel((Arima(" + TermInfo.TermInnerText +

        ", Null, """ + "" + """, """ + "1" + """, 0, Estimate) as ms.IMsForecastObject).Forecast(Null))";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет возвращать значение нижней
 доверительной границы для метода ARIMA.


## Пример использования в выражениях


Выражение 1:


LowerConfidenceLevel((Arima({ВВП|Анкоридж[t]}, Null,
 "", "1", 0, Estimate) as ms.IMsForecastObject).Forecast(Null))


Результат: для модели «ARIMA»
 будут получены значения нижней доверительной границы.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


LowerConfidenceLevel((Arima(X1, Null, "",
 "1", 0, Estimate) as ms.IMsForecastObject).Forecast(Null))


Результат: для модели «ARIMA»
 будут получены значения нижней доверительной границы.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
