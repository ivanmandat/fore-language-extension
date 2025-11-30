# DateTime.FromDouble

DateTime.FromDouble
-


# DateTime.FromDouble


## Синтаксис


FromDouble(Value: Double): DateTime;


## Параметры


Value. Вещественное значение,
 которое необходимо преобразовать к формату даты и времени.


## Описание


Метод FromDouble возвращает
 значение даты и времени, полученное путем преобразования из формата Double.


## Пример


Добавьте ссылку на системную сборку MathFin.


	Sub UserProc;

	Var

	    d: DateTime;

	Begin

	    //38718 - соответствует дате 01.01.2006

	    //39814 - соответствует дате 01.01.2009

	    d := DateTime.FromDouble(Math.RandBetween(38718, 39814));

	    Debug.WriteLine(d);

	End Sub UserProc;


После выполнения примера в консоль среды разработки будет выведено случайное
 значение даты и времени, полученное путем преобразования из формата Double.


См. также:


[DateTime](DateTime.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
