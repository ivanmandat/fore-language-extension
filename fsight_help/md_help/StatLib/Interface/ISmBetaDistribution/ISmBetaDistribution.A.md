# ISmBetaDistribution.A

ISmBetaDistribution.A
-


# ISmBetaDistribution.A


## Синтаксис


A: Double;


## Описание


Свойство A определяет значение
 параметра α распределения случайной величины.


## Комментарии


Значение свойства должно удовлетворять условию: A > 0.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    Distrib: ISmBetaDistribution;

	    Values: Array Of Double;

	    i: Integer;

	    Cnt: Integer = 10;

	Begin

	    Distrib := New SmBetaDistribution.Create;

	    Distrib.A := 1.5;

	    Distrib.B := 2.3;

	    Values := Distrib.RandomVector(Cnt);

	    For i := 0 To Cnt - 1 Do

	        Debug.WriteLine(Values[i]);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена выборка псевдослучайных
 чисел из бета-распределения с заданными параметрами.


См. также:


[ISmBetaDistribution](ISmBetaDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
