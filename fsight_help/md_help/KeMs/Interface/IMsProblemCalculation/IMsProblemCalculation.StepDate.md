# IMsProblemCalculation.StepDate

IMsProblemCalculation.StepDate
-


# IMsProblemCalculation.StepDate


## Синтаксис


		StepDate;


## Описание


Метод StepDate выполняет
 пошаговый расчёт [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm) по точкам календарной динамики.


## Комментарии


На одном шаге рассчитываются все модели на все сценарии на определенную
 дату.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащим задачу моделирования
 с идентификатором PROBLEM.


Добавьте ссылки на системные сборки: Matrix, Metabase, Ms.


					Sub StepDate;

		Var

		    mb: IMetabase;

		    MSKey: Integer;

		    Problem: IMsProblem;

		    Setts: IMsProblemCalculationSettings;

		    Calc: IMsProblemCalculation;

		    State: IMsCalculationState;

		    Model: IMsModel;

		    Slice: IMsFormulaTransformSlice;

		    MatrixDS: IMatrixDataSource;

		    Matr: IMatrix;

		    Iter: IMatrixIterator;

		    TrVar: IMsFormulaTransformVariable;

		Begin

		    mb := MetabaseClass.Active;

		    // Получаем задачу моделирования

		    MSKey := mb.GetObjectKeyById("MODEL_SPACE");

		    Problem := mb.ItemByIdNamespace("PROBLEM", MSKey).Bind As IMsProblem;

		    // Создаем настройки для расчёта задачи

		    Setts := Problem.CreateCalculationSettings;

		    // Выполняем пошаговый расчёт задачи

		    Calc := Problem.Calculate(Setts);

		    Repeat

		        Calc.StepDate;

		        State := Calc.CalculationState;

		        Debug.WriteLine(State.Message);

		    Until State.Model <> Null;

		    // Выводим информацию о наименовании рассчитанной модели

		    Model := State.Model;

		    Debug.WriteLine("Модель: " + Model.Name);

		    // Получаем данные моделируемой переменной

		    TrVar := Model.Transform.Outputs.Item(0);

		    Slice := TrVar.Slices.Item(0);

		    MatrixDS := State.DataMultiDim(Slice);

		    Matr := MatrixDS.Execute(Null);

		    // Выводим данные моделируемой переменной

		    Debug.WriteLine("Текущие значения моделируемой переменной '" + TrVar.Name + "'");

		    Iter := Matr.CreateIterator;

		    Iter.Move(IteratorDirection.First);

		    While Iter.Valid Do

		        Debug.WriteLine(" " + Iter.Value);

		        Iter.Move(IteratorDirection.Next);

		    End While;

		    // Прерываем расчёт задачи

		    Calc.Stop;

		End Sub StepDate;


Результат выполнения примера: запущен пошаговый расчёт задачи PROBLEM,
 после расчёта в окно консоли выведено наименование рассчитанной модели
 и данные моделируемой переменной.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
