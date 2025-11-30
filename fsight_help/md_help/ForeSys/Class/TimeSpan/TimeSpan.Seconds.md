# TimeSpan.Seconds

TimeSpan.Seconds
-


# TimeSpan.Seconds


## Синтаксис


Seconds: Integer;


## Описание


Свойство Seconds возвращает
 количество полных секунд в интервале времени.


## Пример


	Sub UserProc;

	Var

	    t: TimeSpan;

	Begin

	    t := TimeSpan.Compose(1, 10, 15, 33, 7);

	    Debug.WriteLine(t.Seconds);

	    Debug.WriteLine(t.TotalSeconds);

	End Sub UserProc;


После выполнения примера будет получен новый интервал
 времени. В консоль среды разработки будет выведено количество полных секунд,
 содержащихся во интервале и длина интервала, представленная в секундах.


33


123333,007


См. также:


[TimeSpan](TimeSpan.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
