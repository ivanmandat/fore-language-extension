# TimeSpan.Milliseconds

TimeSpan.Milliseconds
-


# TimeSpan.Milliseconds


## Синтаксис


Milliseconds: Integer;


## Описание


Свойство Milliseconds возвращает
 количество полных миллисекунд в интервале времени.


## Пример


	Sub UserProc;

	Var

	    t: TimeSpan;

	Begin

	    t := TimeSpan.Compose(1, 10, 15, 33, 7);

	    Debug.WriteLine(t.Milliseconds);

	    Debug.WriteLine(t.TotalMilliseconds);

	End Sub UserProc;


После выполнения примера будет получен новый интервал
 времени. В консоль среды разработки будет выведено количество полных миллисекунд,
 содержащихся во интервале и длина интервала, представленная в миллисекундах.


7


123333007


См. также:


[TimeSpan](TimeSpan.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
