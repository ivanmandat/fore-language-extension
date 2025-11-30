# TimeSpan.Minutes

TimeSpan.Minutes
-


# TimeSpan.Minutes


## Синтаксис


Minutes: Integer;


## Описание


Свойство Minutes возвращает
 количество полных минут в интервале времени.


## Пример


	Sub UserProc;

	Var

	    t: TimeSpan;

	Begin

	    t := TimeSpan.Compose(1, 10, 15, 33, 7);

	    Debug.WriteLine(t.Minutes);

	    Debug.WriteLine(t.TotalMinutes);

	End Sub UserProc;


После выполнения примера будет получен новый интервал
 времени. В консоль среды разработки будет выведено количество полных минут,
 содержащихся во интервале и длина интервала, представленная в минутах.


15


2055,55011666667


См. также:


[TimeSpan](TimeSpan.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
