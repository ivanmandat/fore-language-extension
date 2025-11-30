# IForeThreadClass.Sleep

IForeThreadClass.Sleep
-


# IForeThreadClass.Sleep


## Синтаксис


Sleep(Timeout: Integer);


## Параметры


Timeout. Время в миллисекундах.


## Описание


Метод Sleep приостанавливает
 выполнение текущего потока приложения на заданное время.


## Пример


Добавьте ссылку на системную сборку Fore.


	Sub UserProc;

	Var

	    ci: ICultureInfo;

	    t1, t2: DateTime;

	    t3: TimeSpan;

	Begin

	    ci := CultureInfo.Invariant;

	    t1 := DateTime.Now;

	    Debug.WriteLine("Старт: " + ci.FormatTimeEx(t1, "HH:mm:ss"));

	    // Приостановка выполнения кода

	    ForeThreadClass.Sleep(5000);

	    // Продолжение выполнения

	    t2 := DateTime.Now;

	    t3 := t2 - t1;

	    Debug.WriteLine("Стоп: " + ci.FormatTimeEx(t2, "HH:mm:ss"));

	    Debug.WriteLine("Время выполнения: " + t3.TotalMilliseconds.ToString + " миллисекунд.");

	End Sub UserProc;


Во время выполнения примера осуществляется приостановка выполнения кода.
 Время старта, завершения, а также время выполнения кода будут выведены
 в консоль среды разработки.


См. также:


[IForeThreadClass](IForeThreadClass.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
