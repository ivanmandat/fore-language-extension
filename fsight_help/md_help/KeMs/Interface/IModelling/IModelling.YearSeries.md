# IModelling.YearSeries

IModelling.YearSeries
-


# IModelling.YearSeries


## Синтаксис


		YearSeries([OutputFrequency: [MsFrequency](../../Enums/MsFrequency.htm)
		 = 0]): Variant;


## Параметры


OutputFrequency. Календарная
 динамика результирующего ряда.


## Описание


Метод YearSeries возвращает
 текущее значение года для каждой точки ряда в зависимости от заданных
 периодов расчёта.


## Комментарии


Если параметру OutputFrequency
 задано значение «0», то результирующий ряд создаётся с динамикой текущего
 расчёта.


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

		    Expr.AsString := "iif(YearSeries(MsFrequency.Annual)>=2010," + TermInfo.TermInnerText + ",0)";

		    // Проверяем корректность выражения

		    If Expr.Valid

		        // Если выражение задано корректно, то сохраняем модель

		        Then ModelObj.Save;

		        // Если выражение некорректное, то выводим сообщение в окно консоли

		        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

		    End If;

		End Sub UserProc;


В результате выполнения примера для модели будет изменена формула. Для
 значений до 2010 года модель будет возвращать нули, а начиная с 2010 года
 - значения первого фактора.


## Пример использования в выражениях


Выражение 1:


YearSeries


Период расчета: 2009-2013; динамика расчёта: годовая. Результат: [2009,
 2010, 2011, 2012, 2013].


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


iif(yearseries(MsFrequency.Annual) < 2015, X1,
 0)


Результат: для значений до 2015 года выражение будет возвращать значения
 фактора «X1», а с 2015 года -
 нули.


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
