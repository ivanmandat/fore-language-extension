# TimeSpan.Hours

TimeSpan.Hours
-


# TimeSpan.Hours


## Синтаксис


Hours: Integer;


## Описание


Свойство Hours возвращает количество
 полных часов в интервале времени.


## Пример


	Sub UserProc;

	Var

	    t: TimeSpan;

	Begin

	    t := TimeSpan.Compose(1, 10, 15, 33, 7);

	    Debug.WriteLine(t.Hours);

	    Debug.WriteLine(t.TotalHours);

	End Sub UserProc;


После выполнения примера будет получен новый интервал
 времени. В консоль будет выведено количество полных часов, содержащихся
 во интервале и длина интервала, представленная в часах.


10


34,2591686111111


См. также:


[TimeSpan](TimeSpan.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
