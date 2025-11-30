# ISmLogisticDistribution.A

ISmLogisticDistribution.A
-


# ISmLogisticDistribution.A


## Синтаксис


A: Double;


## Описание


Свойство A определяет значение
 параметра сдвига (медианы) распределения.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Distrib: ISmLogisticDistribution;

    Values: Array Of Double;

    i: Integer;

    Cnt: Integer = 10;

Begin

    Distrib := New SmLogisticDistribution.Create;

    Distrib.A := -3;

    Distrib.B := 5;

    Values := Distrib.RandomVector(Cnt);

    For i := 0 To Cnt - 1 Do

        Debug.WriteLine(Values[i]);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена выборка псевдослучайных
 чисел из логистического распределения с заданными параметром сдвига (медианой)
 и параметром масштаба.


См. также:


[ISmLogisticDistribution](ISmLogisticDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
