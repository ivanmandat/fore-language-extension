# IDistribution.Random

IDistribution.Random
-


# IDistribution.Random


## Синтаксис


Random: Double;


## Описание


Свойство Random возвращает случайное
 число, соответствующее распределению.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    Distr: IDistribution;

    Uniform: SmUniformDistribution;

    Values: Array Of Double;

    d0: Double;

    i: Integer;

    Const Cnt = 10;

Begin

    Uniform := New SmUniformDistribution.Create;

    Uniform.A := 0.8;

    Uniform.B := 1.4;

    Distr := Uniform;

    Values := Distr.RandomVector(Cnt);

    For i := 0 To Values.Length - 1 Do

        d0 := Values[i];

        Debug.WriteLine(d0);

    End For;

    Debug.WriteLine("Случайное число: " + d0.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены вектор случайных
 чисел и случайное число, соответствующее распределению:


Выполнение модуля начато


1,2184262808878


1,00027958350256


0,971868008887395


1,39371337075718


1,16480676741339


1,12695003822446


1,07897159797139


1,24510682192631


1,2083841281943


1,12512587206438


Случайное число: 1.12512587206438


Выполнение модуля завершено


См. также:


[IDistribution](IDistribution.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
