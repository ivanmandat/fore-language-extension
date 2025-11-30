# ISmMultiNormalDistribution.K

ISmMultiNormalDistribution.K
-


# ISmMultiNormalDistribution.K


## Синтаксис


K: Integer;


## Описание


Свойство K определяет размерность
 распределения.


## Комментарии


Значение должно соответствовать условию: K
 ≥ 1.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Distrib: ISmMultiNormalDistribution;

    Mu, Sigma, MultiRandom, MultiRandomVector: Array Of Double;

    i, j: Integer;

    d: Integer = 2;

    Cnt: Integer = 10;

Begin

    Distrib := New SmMultiNormalDistribution.Create;

    Distrib.K := d;

    Mu := New Double[d];

    Mu[0] := -1; Mu[1] := 0;

    Distrib.Mu := Mu;

    Sigma := New Double[d, d];

    Sigma[0, 0] := 2; Sigma[0, 1] := 0;

    Sigma[1, 0] := 0; Sigma[1, 1] := 1;

    Distrib.Sigma := Sigma;

    MultiRandom := Distrib.MultiRandom;

    Debug.WriteLine("-- Сгенерированный вектор --");

    For i := 0 To d - 1 Do

        Debug.Write(MultiRandom[i]);

        Debug.Write(";  ");

    End For;

    Debug.WriteLine("");

    Debug.WriteLine("-- Сгенерированная матрица
 --");

    MultiRandomVector := Distrib.MultiRandomVector(Cnt);

    For i := 0 To Cnt - 1 Do

        For j := 0 To d - 1 Do

            Debug.Write(MultiRandomVector[i, j]);

            Debug.Write(";  ");

        End For;

        Debug.WriteLine("");

    End For;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены вектор и матрица
 псевдослучайных чисел из многомерного нормального распределения.


См. также:


[ISmMultiNormalDistribution](ISmMultiNormalDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
