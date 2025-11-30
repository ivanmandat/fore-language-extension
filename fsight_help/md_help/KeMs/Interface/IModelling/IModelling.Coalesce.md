# IModelling.Coalesce

IModelling.Coalesce
-


# IModelling.Coalesce


## Синтаксис


Coalesce(Parameters: Array): Variant;


## Параметры


Parameters. Массив рядов.


## Описание


Метод Coalesce возвращает ряд,
 каждая точка которого вычисляется как первое встреченное значение из указанных
 рядов, которое не равно Null.


## Комментарии


Для метода доступно задание периода расчёта. Для этого используйте метод
 [IModelling.SetPeriod](IModelling.SetPeriod.htm),
 указав его в любом месте входного массива.


Переменные в Parameters должны
 быть указаны через запятую.


Для корректной работы метода убедитесь, что массив рядов содержит более
 одного ряда.


Если все значения во входном массиве рядов будут Null,
 то метод тоже вернёт Null.


Для расчёта метода без учёта пустых значений используйте параметр IgnoreMissing, указав его в любом
 месте входного массива. Допустимые значения параметра:


	- True. Расчёт ведется
	 без учета пустых значений;


	- False. По умолчанию.
	 Расчет ведется с учетом пустых значений.


Допустим, есть три ряда «A»,
 «B» и «C».
 В результате применения метода Coalesce будет получен следующий ряд:


		 Ряд/Значения


		 А
		 1
		 Null
		 1
		 1
		 Null
		 1
		 Null
		 Null


		 B
		 2
		 2
		 Null
		 2
		 Null
		 Null
		 2
		 Null


		 C
		 3
		 3
		 3
		 Null
		 3
		 Null
		 Null
		 Null


		 Coalesce (A, B,C)
		 1
		 2
		 1
		 1
		 3
		 1
		 2
		 Null


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая больше двух входных переменных.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserCoalesce;

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

    X1, X2, X3: String;

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

    // Получаем внутреннее представление переменной в виде текста

    X1 := TermInfo.TermInnerText;

    // Получаем вторую входную переменную

    TransVar := Transf.Inputs.Item(1);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем внутреннее представление переменной в виде текста

    X2 := TermInfo.TermInnerText;

    // Получаем третью входную переменную

    TransVar := Transf.Inputs.Item(2);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем внутреннее представление переменной в виде текста

    X3 := TermInfo.TermInnerText;

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms";

    // Задаем выражение расчета модели

    Expr.AsString := "Coalesce(" + X1 + ", " + X2 + "," + X3 + ", True, SetPeriod(2000,2010))";

    // Проверяем корректность выражения

    If Expr.Valid

        // Если выражение задано корректно, то сохраняем модель

        Then ModelObj.Save;

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Else Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserCoalesce;


В результате выполнения примера будет получен ряд путём применения метода
 Coalesce к трём первым входным переменным без учёта пропущенных значений
 за период с 2000 по 2010 год.


## Пример использования в выражениях


Выражение 1:


Coalesce(True, {Уровень безработицы, %|Анкоридж[t]},
 {Уровень безработицы, %|Чикаго[t]}, {Уровень безработицы, %|Мехико[t]})


Результат: будет получен ряд путём применения метода Coalesce к рядам
 «Уровень безработицы, %|Анкоридж»,
 «Уровень безработицы, %|Чикаго»,
 «Уровень безработицы, %|Мехико» без
 учёта пропущенных значений.


Применение: можно использовать в формулах [универсального редактора
 выражения](uinav.chm::/GUI/ExpressionEditor.htm) в любом инструменте платформы, где он доступен.


Выражение 2:


Coalesce(X1, X2)


Результат: будет получен ряд путём применения метода Coalesce к факторам
 «X1» и «X2».


Применение: можно использовать в формулах моделей контейнера моделирования,
 основанных на [переменных](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_1_Value/uimodelling_work_object_value.htm).


См. также:


[IModelling](IModelling.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
