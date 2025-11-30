# IModelling.LevelIndexSeries

IModelling.LevelIndexSeries
-


# IModelling.LevelIndexSeries


## Синтаксис


LevelIndexSeries(TargetFrequency: [MsFrequency](../../Enums/MsFrequency.htm);


                 [OutputFrequency:
 [MsFrequency](../../Enums/MsFrequency.htm) = 0]): Variant;


## Параметры


TargetFrequency. Календарная
 динамика, индексы элементов которой требуется получить;


OutputFrequency. Календарная
 динамика результирующего ряда.


## Описание


Метод LevelIndexSeries возвращает
 текущий индекс элемента для заданной календарной динамики.


## Комментарии


Особенности задания параметров:


	- TargetFrequency. Для
	 корректного расчёта параметр должен быть больше или равен значению
	 динамики расчёта;


	- OutputFrequency. Если
	 параметр имеет значение «0», то результирующий ряд создаётся с динамикой
	 текущего расчёта.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D_Q, рассчитываемая методом детерминированного
 уравнения на квартальных данных и содержащая хотя бы один фактор.


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

    ModelObj := Mb.ItemByIdNamespace("MODEL_D_Q", ModelSpace.Key).Edit;

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

    Expr.AsString := "iif(LevelIndexSeries(MsFrequency.Annual,MsFrequency.Quarterly)<=2," + TermInfo.TermInnerText + ",0)";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера для модели будет изменена формула. Для
 значений первого и второго кварталов модель будет возвращать значения
 первого фактора, а для значений третьего и четвертого кварталов - нули.


## Пример использования в выражениях


Выражение 1:


LevelIndexSeries(MsFrequency.Annual)


Период расчета: 01.04.2000-01.09.2002; динамика расчета квартальная.
 Результат: [2, 3, 4, 1, 2, 3, 4, 1, 2, 3].


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


iif(levelindexseries(MsFrequency.Annual, MsFrequency.Quarterly)
 <= 3, X1, X2)


Результат: для значений первого, второго и третьего кварталов выражение
 будет возвращать значения фактора «X1»,
 а для значений четвертого квартала -фактора «X2».


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
