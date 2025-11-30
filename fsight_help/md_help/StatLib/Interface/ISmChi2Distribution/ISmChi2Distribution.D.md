# ISmChi2Distribution.D

ISmChi2Distribution.D
-


# ISmChi2Distribution.D


## Синтаксис


D: Integer;


## Описание


Свойство D определяет количество
 степеней свободы распределения.


## Комментарии


Значение свойства должно удовлетворять условию: D ≥ 1.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Distrib: ISmChi2Distribution;

    Values: Array Of Double;

    i: Integer;

    Cnt: Integer = 10;

Begin

    Distrib := New SmChi2Distribution.Create;

    Distrib.D := 4;

    Values := Distrib.RandomVector(Cnt);

    For i := 0 To Cnt - 1 Do

        Debug.WriteLine(Values[i]);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена выборка
 псевдослучайных чисел из распределения χ2
 с двумя степенями свободы.


См. также:


[ISmChi2Distribution](ISmChi2Distribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
