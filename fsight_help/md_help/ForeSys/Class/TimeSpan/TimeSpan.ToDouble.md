# TimeSpan.ToDouble

TimeSpan.ToDouble
-


# TimeSpan.ToDouble


## Синтаксис


ToDouble: Double;


## Описание


Свойство ToDouble возвращает
 значение интервала времени, представленное в формате Double.


## Пример


	Sub UserProc;

	Var

	    t: TimeSpan;

	Begin

	    t := TimeSpan.Compose(1, 12, 10, 0, 0);

	    Debug.WriteLine(t.ToDouble);

	End Sub UserProc;


После выполнения примера в консоль среды разработки
 будет выведено значение интервала времени, представленное в формате Double.


См. также:


[TimeSpan](TimeSpan.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
