# ISmGeneralizedExtremeValueDistribution.MLESettings

ISmGeneralizedExtremeValueDistribution.MLESettings
-


# ISmGeneralizedExtremeValueDistribution.MLESettings


## Синтаксис


MLESettings: [IMLESettings](../IMLESettings/IMLESettings.htm);


## Описание


Свойство MLESettings определяет
 параметры метода максимального правдоподобия.


## Комментарии


Метод максимального правдоподобия - способ оценивания неизвестных параметров.


## Пример


Для выполнения примера добавьте ссылки на системную сборку Stat.


			Sub UserProc;

Var

    distr: ISmGeneralizedExtremeValueDistribution;

    i: Integer;

    Values: Array Of Double;

    cnt: Integer = 10;

Begin

    distr := New SmGeneralizedExtremeValueDistribution.Create;

    // задаем параметры распределения:

    distr.Location := 0.1;

    distr.Scale := 0.1;

    distr.Shape := 0.1;

    // генерация случайного ряда:

    Values := distr.RandomVector(cnt);

    // задаем максимальное число итераций:

    distr.MLESettings.MaxIterations := 10;

    // задаем точность решения:

    distr.MLESettings.Tolerance := 0.000000001;

    // автоподбор параметров распределения методом LRS (Linear Ratio of Spacings):

    distr.LRSFitting(Values);

    // оценка параметров методом максимального правдоподобия:

    distr.MaximumLikelihoodFitting(Values);

    // вывод сообщений об ошибках

    Debug.WriteLine(distr.Errors);

    // вывод параметров сдвига, масштаба, формы:

    Debug.WriteLine(distr.Name + "(" + distr.Location.ToString + "," + distr.Scale.ToString + "," + distr.Shape.ToString + ")");

    Debug.WriteLine("Сгенерированный ряд:");

    Debug.Indent;

    For i := 0 To Cnt - 1 Do

        Debug.Write(i.ToString + " ");

        Debug.WriteLine(Values[i].ToString);

    End For;

    Debug.Unindent;

End Sub UserProc;


После выполнения примера будет сгенерирована выборка из псевдослучайных
 величин, имеющих распределение GEV (0,1; 0,1; 0,1).


См. также:


[ISmGeneralizedExtremeValueDistribution](ISmGeneralizedExtremeValueDistribution.htm) |
 [Оценка
 методом максимального правдоподобия](Lib.chm::/05_Statistics/Distribution/MaximumLikelihood.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
