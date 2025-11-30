# ISmGammaDistribution.A

ISmGammaDistribution.A
-


# ISmGammaDistribution.A


## Синтаксис


A: Double;


## Описание


Свойство A определяет значение
 параметра формы гамма-распределения случайной величины.


## Комментарии


Значение свойства должно удовлетворять условию: A > 0.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Distrib: ISmGammaDistribution;

    Values: Array Of Double;

    i: Integer;

    Cnt: Integer = 10;

Begin

    Distrib := New SmGammaDistribution.Create;

    Distrib.A := 4;

    Distrib.B := 4;

    Values := Distrib.RandomVector(Cnt);

    For i := 0 To Cnt - 1 Do

        Debug.WriteLine(Values[i]);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена выборка псевдослучайных
 чисел из гамма-распределения с заданными параметрами формы и масштаба.


См. также:


[ISmGammaDistribution](ISmGammaDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
