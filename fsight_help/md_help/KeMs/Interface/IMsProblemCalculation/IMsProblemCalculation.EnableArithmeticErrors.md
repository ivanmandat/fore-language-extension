# IMsProblemCalculation.EnableArithmeticErrors

IMsProblemCalculation.EnableArithmeticErrors
-


# IMsProblemCalculation.EnableArithmeticErrors


## Синтаксис


EnableArithmeticErrors: Boolean;


## Описание


Свойство EnableArithmeticErrors
 определяет признак срабатывания события [OnError](../IMsProblemCalculationCallback/IMsProblemCalculationCallback.OnError.htm)
 при возникновении ошибок в арифметических операциях в процессе расчёта
 [задачи
 моделирования](uimodelling.chm::/2_container_of_modeling/2_3_work_object/2_3_4_problem/uimodelling_problem.htm).


## Комментарии


Допустимые значения:


	- True. Событие OnError
	 срабатывает при возникновении ошибок в арифметических операциях;


	- False. По умолчанию.
	 Событие OnError не срабатывает.


Событие OnError обрабатывает ошибки при делении на 0.


## Пример


Для выполнения примера в репозитории необходимо наличие контейнера моделирования
 с идентификатором CONTAINER. В контейнере моделирования должна содержаться
 задача моделирования с идентификатором CONTAINER_TASK.


Добавьте ссылки на системные сборки: Metabase, Ms.


	Public Class MCallback: ProblemCalculationCallback

	    // Опишем событие OnError

	    Public Sub OnError(Message: String);

	    Begin

	        // Выведем в консоль информацию об ошибке

	        Debug.WriteLine("Ошибка: " + Message);

	    End Sub OnError;

	End Class MCallback;


	Sub UserProc;

	Var

	    Mb: IMetabase;

	    MbDes: IMetabaseObjectDescriptor;

	    Problem: IMsProblem;

	    Calc: IMsProblemCalculation;

	    CallBack: MCallBack;

	    CalcSet: IMsProblemCalculationSettings;

	Begin

	    // Получим репозиторий

	    Mb := MetabaseClass.Active;

	    // Получим задачу моделирования

	    MbDes := Mb.ItemByIdNamespace("CONTAINER_TASK", Mb.GetObjectKeyById("CONTAINER"));

	    Problem := MbDes.Edit As IMsProblem;

	    // Настроим параметры расчёта задачи

	    CalcSet := Problem.CreateCalculationSettings;

	    // Отключим прерывание расчёта задачи при возникновении ошибки

	    CalcSet.BreakOnError := False;

	    // Создадим объект для расчёта задачи

	    Calc := Problem.Calculate(CalcSet);

	    // Создадим объект для обработки событий

	    CallBack := New MCallback.Create;

	    Calc.Callback := CallBack;

	    // Активируем срабатывание события OnError при ошибках в арифметических операциях

	    Calc.EnableArithmeticErrors := True;

	    // Запустим расчёт задачи

	    Calc.Run;

	End Sub UserProc;


После выполнения примера будет выполнен расчёт задачи моделирования.
 Если при расчёте возникли ошибки в арифметических операциях, то в консоль
 будет выведено соответствующее сообщение.


См. также:


[IMsProblemCalculation](IMsProblemCalculation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
