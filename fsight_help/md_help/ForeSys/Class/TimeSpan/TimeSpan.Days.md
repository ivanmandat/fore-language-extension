# TimeSpan.Days

TimeSpan.Days
-


# TimeSpan.Days


## Синтаксис


Days: Integer;


## Описание


Свойство Days возвращает количество
 полных дней в интервале времени.


## Пример


	Sub UserProc;

	Var

	    t: TimeSpan;

	Begin

	    t := TimeSpan.Compose(1, 10, 15, 33, 7);

	    Debug.WriteLine(t.Days);

	    Debug.WriteLine(t.TotalDays);

	End Sub UserProc;


После выполнения примера будет получен новый интервал
 времени. В консоль будет выведено количество полных дней, содержащихся
 во интервале и длина интервала, представленная в днях.


1


1,4274653587963


См. также:


[TimeSpan](TimeSpan.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
