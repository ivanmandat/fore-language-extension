# ISmPrincipalComponentAnalysis.Statistics

ISmPrincipalComponentAnalysis.Statistics
-


# ISmPrincipalComponentAnalysis.Statistics


## Синтаксис


Statistics: Array;


## Описание


Свойство Statistics возвращает
 собственные значения и статистики.


## Комментарии


Элементы массива:


	- [i, 0]. Собственное
	 значение;


	- [i, 1]. Дисперсия;


	- [i, 2]. Накопленная
	 дисперсия;


	- [i, 3]. Статистика
	 хи-квадрат;


	- [i, 4]. Число
	 степеней свободы для статистики хи-квадрат;


	- [i, 5]. Вероятность
	 для статистики хи-квадрат.


Где i - индекс главной компоненты.
 Индексация компонент сквозная и начинается с нуля.


## Пример


Добавьте ссылки на системную сборку Stat.


			Sub UserPCA;

Var

    pc: SmPrincipalComponentAnalysis;

    Obj: ISlSeries;

    d0, d1, d2: Double;

    i, res: Integer;

    ar1, ar2, ar3: Array Of Double;

Begin

    // Создаем объект для расчёта метода

    pc := New SmPrincipalComponentAnalysis.Create;

    // Задаем метод обработки пропусков

    pc.MissingData.Method := MissingDataMethod.AnyValue;

    ar1 := New Double[10];

    ar2 := New Double[10];

    ar3 := New Double[10];

    // Задаем значения для исходных наборов данных

    ar1[0] := 7.0; ar2[0] := 4.0; ar3[0] := 3.0;

    ar1[1] := 4.0; ar2[1] := 1.0; ar3[1] := 8.0;


    ar1[2] := 6.0; ar2[2] := 3.0; ar3[2] := 5.0;

    ar1[3] := 8.0; ar2[3] := Double.Nan; ar3[3] := 1.0;

    ar1[4] := 8.0; ar2[4] := 5.0; ar3[4] := 7.0;

    ar1[5] := Double.Nan; ar2[5] := 2.0; ar3[5] := 9.0;

    ar1[6] := 5.0; ar2[6] := 3.0; ar3[6] := 3.0;

    ar1[7] := 9.0; ar2[7] := 5.0; ar3[7] := 8.0;

    ar1[8] := 7.0; ar2[8] := 4.0; ar3[8] := 5.0;

    ar1[9] := 8.0; ar2[9] := 2.0; ar3[9] := 2.0;

    // Задаем исходные наборы данных

    Obj := pc.Objects;

    Obj.Add.Value := ar1;

    Obj.Add.Value := ar2;


    Obj.Add.Value := ar3;

    // Задаем тип анализа

    pc.Analysis.Type := AnalysisType.Correlation;

    // Задаем тип условия, накладываемого на главные компоненты

    pc.ScoreType := PCAScoreType.Stand;

    // Используем средние в качестве дополнительных компонентов

    pc.IncludeAverages := True;

    // Задаем тип центрирования исходной матрицы

    pc.MatrixAlignmentType := AlignmentType.NoAlignment;

    // Выполняем расчёт и выводим результат в окно консоли

    res := pc.Execute;

    If res <> 0 Then

        Debug.WriteLine(pc.Errors);

    Else

        Debug.WriteLine("Собственные векторы: ");

        For i := 1 To 3 Do

            d0 := pc.P[0, i - 1];

            d1 := pc.P[1, i - 1];

            d2 := pc.P[2, i - 1];

            Debug.AssertMsg(False, "Главная компонента №" +

                i.ToString + ": " + d0.ToString +

                " " + d1.ToString + " " + d2.ToString);

        End For;


        Debug.WriteLine("================================");

        Debug.WriteLine("Значения главных компонент: ");

        Debug.AssertMsg(False, "Главная компонента №1, №2, №3");

        For i := 1 To pc.v.GetUpperBound(1) + 1 Do

            d0 := pc.V[i - 1, 0];

            d1 := pc.V[i - 1, 1];

            d2 := pc.V[i - 1, 2];

            Debug.AssertMsg(False, "Наблюдение №" +

                i.ToString + ": " + d0.ToString +

                " " + d1.ToString + " " + d2.ToString);

        End For;

        Debug.WriteLine("================================");

        Debug.WriteLine("Статистики:");


        For i := 1 To 3 Do

            Debug.WriteLine("Главная компонента №" + i.ToString);

            d0 := pc.Statistics[i - 1, 0];

            Debug.WriteLine("  - собственное значение: " + d0.ToString);

            d0 := pc.Statistics[i - 1, 1];

            Debug.WriteLine("  - дисперсия:" + d0.ToString);

            d0 := pc.Statistics[i - 1, 2];

            Debug.WriteLine("  - накопленная дисперсия: " + d0.ToString);

            d0 := pc.Statistics[i - 1, 3];

            Debug.WriteLine("  - статистика хи-квадрат: " + d0.ToString);

            d0 := pc.Statistics[i - 1, 4];

            Debug.WriteLine("  - число степеней свободы для статистики хи-квадрат: " + d0.ToString);

            d0 := pc.Statistics[i - 1, 5];

            Debug.WriteLine("  - вероятность для статистики хи-квадрат: " + d0.ToString);

        End For;

    End If;

End Sub UserPCA;


После выполнения примера в окно консоли будут выведены собственные векторы,
 значения главных компонент и статистики.


См. также:


[ISmPrincipalComponentAnalysis](ISmPrincipalComponentAnalysis.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
