# ISmMedianSmoothing.MissingData

ISmMedianSmoothing.MissingData
-


# ISmMedianSmoothing.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 параметры обработки пропусков.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    MS: SmMedianSmoothing;

    s: Array[10] Of Double;

    ar: Array Of Double;

    res, i: Integer;

Begin

    MS := New SmMedianSmoothing.Create;

    // Задаём значения переменной

    s[0] := 6; s[1] := 5;

    s[2] := 7; s[3] := Double.Nan;

    s[4] := 1;  s[5] := 10;

    s[6] := 9; s[7] := 10;

    s[8] := 8; s[9] := Double.Nan;

    // Определяем объясняемый ряд

    MS.Serie.Value := s;

    // Определяем параметры периода идентификации

    MS.ModelPeriod.FirstPoint := 1;

    MS.ModelPeriod.LastPoint := 10;

    // Определяем параметры обработки пропусков

    MS.MissingData.Method := MissingDataMethod.SampleAverage;

    // Определяем интервал времени, на котором будет определяться среднее значение элементов

    MS.Width := 2;

    // Выполняем расчёт метода и выводим результаты

    res := MS.Execute;

    If res <> 0 Then

        Debug.WriteLine(MS.Errors);

        Else

            Debug.WriteLine("Статистика Дарбина-Уотсона: " + Ms.SummaryStatistics.DW.ToString);

            Debug.WriteLine("Модельный ряд");

            Debug.Indent;

            ar := MS.Fitted;

            For i := 0 To Ms.ModelPeriod.LastPoint - 1 Do

                Debug.WriteLine((i + 1).ToString + ". " + ar[i].ToString);

            End For;

            Debug.Unindent;

            Debug.WriteLine("Остатки");

            Debug.Indent;

            For i := 0 To Ms.ModelPeriod.LastPoint - 1 Do

                Debug.WriteLine(i.ToString + ", " + MS.Residuals[i].ToString);

            End For;

            Debug.Unindent;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены заданная статистика, модельный ряд и ряд остатков.


См. также:


[ISmMedianSmoothing](ISmMedianSmoothing.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
