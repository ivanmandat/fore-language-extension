# ISmHyperGeometricDistribution.N1

ISmHyperGeometricDistribution.N1
-


# ISmHyperGeometricDistribution.N1


## Синтаксис


N1: Integer;


## Описание


Свойство N1 определяет объем
 всей совокупности.


## Комментарии


Значение свойства должно удовлетворять условиям: 1 ≤ N ≤ N1
 и 1 ≤ M ≤ N1. Где:


	- N - объем одной выборки,
	 определяемый значением свойства [ISmHyperGeometricDistribution.N](ISmHyperGeometricDistribution.N.htm);


	- M - количество «успешных»
	 элементов во всей совокупности, определяемое значением свойства [ISmHyperGeometricDistribution.M](ISmHyperGeometricDistribution.M.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Distrib: ISmHyperGeometricDistribution;

    Values: Array Of Double;

    i: Integer;

    Cnt: Integer = 10;

Begin

    Distrib := New SmHyperGeometricDistribution.Create;

    Distrib.N1 := 10000;

    Distrib.N := 500;

    Distrib.M := 10;

    Values := Distrib.RandomVector(Cnt);

    For i := 0 To Cnt - 1 Do

        Debug.WriteLine(Values[i]);

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будет выведена выборка псевдослучайных
 целых чисел из дискретного гипергеометрического распределения по заданным
 параметрам.


См. также:


[ISmHyperGeometricDistribution](ISmHyperGeometricDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
