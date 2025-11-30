# TimeSpan.FromDouble

TimeSpan.FromDouble
-


# TimeSpan.FromDouble


## Синтаксис


FromDouble(Value: Double);


## Параметры


Value. Вещественное значение,
 которое необходимо преобразовать к формату интервала времени.


## Описание


Метод FromDouble возвращает
 значение интервала времени, полученное путём преобразования из формата
 Double.


## Пример


	Sub UserProc;

	Var

	    t: TimeSpan;

	Begin

	    t := TimeSpan.FromDouble(1.5);

	    Debug.WriteLine(t.ToString);

	End Sub UserProc;


После выполнения примера в консоль будет выведено
 значение интервала времени, полученное путем преобразования из формата
 Double.


См. также:


[TimeSpan](TimeSpan.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
