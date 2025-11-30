# IForeThread.Sleep

IForeThread.Sleep
-


# IForeThread.Sleep


## Синтаксис


Sleep(timeout: Integer);


## Параметры


timeout. Время приостановки
 в миллисекундах.


## Описание


Метод Sleep приостанавливает
 выполнение потока на заданное количество миллисекунд.


## Комментарии


Для того, чтобы не блокировать основное приложение, метод Sleep
 должен вызываться для потока внутри пользовательского метода, с которым
 связан сам поток. Поток в пользовательский метод может быть передан через
 параметр в методе [Start](IForeThread.Start.htm).
 Во время приостановки выполнения потока [состояние
 потока](IForeThread.State.htm) не меняется.


## Пример


Для выполнения примера предполагается наличие в репозитории модуля с
 идентификатором «M_THREAD_CALC». В модуле реализованы указанные методы.


Добавьте ссылку на системную сборку Fore.


	Sub UserProc;

	Var

	    Method: IForeMethod;

	    Th: IForeThread;

	Begin

	    Method := New ForeMethod.Create;

	    Method.Assembly := "M_THREAD_CALC";

	    Method.Method := "SecTimer";

	    Th := New ForeThread.Create(Method);

	    //Запуск таймера в отдельном потоке

	    Th.Start(Th);

	    //...

	    //Продолжение основной программы с возможностью отслеживания состояния потока

	    //...

	End Sub UserProc;


	Sub SecTimer(Param: Variant);

	Var

	    Th: IForeThread;

	    i: Integer;

	Begin

	    Th := Param As IForeThread;

	    For i := 1 To 10 Do

	        Th.Sleep(1000);

	        Debug.WriteLine(DateTime.Now.TimeOfDay.ToString);

	        //...

	        //Какие-либо действия с задержкой в 1 секунду

	        //...

	    End For;

	End Sub SecTimer;


При выполнении примера будет создан поток, связанный с пользовательским
 методом «SecTimer». Поток будет запущен параллельно основному потоку приложения.
 Внутри метода «SecTimer» циклически может выполняться какой-либо код с
 задержкой в одну секунду. В основном приложении при этом можно отслеживать
 состояние потока.


См. также:


[IForeThread](IForeThread.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
