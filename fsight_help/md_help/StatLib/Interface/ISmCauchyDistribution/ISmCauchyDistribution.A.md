# ISmCauchyDistribution.A

ISmCauchyDistribution.A
-


# ISmCauchyDistribution.A


## Синтаксис


A: Double;


## Описание


Свойство A определяет значение
 параметра сдвига (медианы) распределения.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


	Sub UserProc;

	Var

	    Distrib: ISmCauchyDistribution;

	    Values: Array Of Double;

	    i: Integer;

	    Cnt: Integer = 10;

	Begin

	    Distrib := New SmCauchyDistribution.Create;

	    Distrib.A := -3;

	    Distrib.B := 6;

	    Values := Distrib.RandomVector(Cnt);

	    For i := 0 To Cnt - 1 Do

	        Debug.WriteLine(Values[i]);

	    End For;

	End Sub UserProc;


После выполнения примера в окно консоли будет выведена выборка псевдослучайных
 чисел из распределения Коши с заданными параметром сдвига (медианой) и
 параметром масштаба.


См. также:


[ISmCauchyDistribution](ISmCauchyDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
