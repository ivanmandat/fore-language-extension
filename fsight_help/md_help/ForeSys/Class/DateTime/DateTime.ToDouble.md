# DateTime.ToDouble

DateTime.ToDouble
-


# DateTime.ToDouble


## Синтаксис


ToDouble: Double;


## Описание


Свойство ToDouble возвращает
 значение даты, представленное в формате Double.


## Пример


	Sub UserProc;

	Var

	    d: DateTime;

	Begin

	    d := DateTime.Now;

	    Debug.WriteLine(d.ToDouble);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено значение
 текущей даты и времени, представленные в формате Double.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
