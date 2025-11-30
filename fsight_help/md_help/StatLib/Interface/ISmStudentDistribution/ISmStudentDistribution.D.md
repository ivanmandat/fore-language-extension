# ISmStudentDistribution.D

ISmStudentDistribution.D
-


# ISmStudentDistribution.D


## Синтаксис


D: Integer;


## Описание


Свойство D определяет количество
 степеней свободы распределения.


## Комментарии


Значение свойства должно удовлетворять условию: D
 ≥ 1.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Distrib: ISmStudentDistribution;

    Values: Array Of Double;

    i: Integer;

Const

    Cnt = 10;

Begin

    Distrib := New SmStudentDistribution.Create;

    Distrib.D := 3;

    Values := Distrib.RandomVector(Cnt);

    For i := 0 To Cnt - 1 Do

        Debug.WriteLine(Values[i]);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена выборка псевдослучайных
 чисел из распределения Стьюдента с тремя степенями свободы.


См. также:


[ISmStudentDistribution](ISmStudentDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
