# IForeThread.Start

IForeThread.Start
-


# IForeThread.Start


## Синтаксис


Start([Param: Variant = Null]);


## Параметры


Param. Значение параметра,
 которое будет передано в выполняемый метод.


## Описание


Метод Start запускает поток
 на выполнение.


## Комментарии


При вызове метода Start запускается
 на выполнение пользовательский метод, который был указан в конструкторе
 [Create](../../Class/ForeThread/ForeThread.Create.htm).
 Если пользовательский метод в своей сигнатуре имеет параметр, то, используя
 Param, можно передать в метод
 необходимое значение или массив значений.


## Пример


Для выполнения примера предполагается наличие в репозитории модуля с
 идентификатором «M_THREAD_CALC». В модуле реализованы указанные методы.


Добавьте ссылку на системную сборку Fore.


	Sub UserProc;

	Var

	    Method: IForeMethod;

	    Th1, Th2: IForeThread;

	Begin

	    Method := New ForeMethod.Create;

	    Method.Assembly := "M_THREAD_CALC";

	    Method.Method := "Init";

	    //Создание потока

	    Th1 := New ForeThread.Create(Method);

	    Th1.Name := "Подготовка к расчёту";

	    Th1.Start;

	    //Ожидание завершения метода Init в потоке

	    Th1.Join;

	    //Создание потоков на базе метода Calculate

	    Method.Method := "Calculate";

	    Th1 := New ForeThread.Create(Method);

	    Th1.Name := "Общий расчёт";

	    Th2 := New ForeThread.Create(Method);

	    Th2.Name := "Расчёт повышенной точности";

	    //Запуск параллельного выполнения потоков с разными значениями параметра

	    Th1.Start(0.00001);

	    Th2.Start(0.0000001);

	    While (Th1.State = ForeThreadState.Running) Or (Th2.State = ForeThreadState.Running) Do

	        //...

	        //Отслеживание состояния потоков

	        //...

	    End While;

	    Debug.WriteLine("End");

	End Sub UserProc;


	Sub Init;

	Begin

	    Debug.WriteLine("Init");

	    //...

	    //Подготовка к расчёту

	    //...

	End Sub Init;


	Sub Calculate(Error: Double);

	Begin

	    Debug.WriteLine(Error);

	    //...

	    //Действия по выполнению какого-либо расчёта

	    //...

	End Sub Calculate;


При выполнении примера будет создан поток, связанный с пользовательским
 методом «Init». Поток будет запущен, при этом текущий код будет ожидать
 завершения выполнения потока. После этого создаются два потока, связанных
 с пользовательским методом «Calculate». Потоки будут запущены параллельно
 с различными значениями параметра. В цикле будет производиться отслеживание
 состояния потоков до того момента, пока они не будут завершены.


См. также:


[IForeThread](IForeThread.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
