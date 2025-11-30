# ISmSlideSmoothing.MissingData

ISmSlideSmoothing.MissingData
-


# ISmSlideSmoothing.MissingData


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

    Slide: SmSlideSmoothing;

    s: Array[10] Of Double;

    res, i: Integer;

Begin

    Slide := New SmSlideSmoothing.Create;

    // Задаем значения переменной

    s[0] := 670.2; s[1] := 576.06;

    s[2] := 856.9; s[3] := Double.Nan;

    s[4] := 885.4;  s[5] := 1011.8;

    s[6] := 995.44; s[7] := 1064.74;

    s[8] := 780.85; s[9] := Double.Nan;

    // Определяем параметры исходного ряда

    Slide.Serie.Value := s;

    // Определяем параметры периода идентификации

    Slide.ModelPeriod.FirstPoint := 1;

    Slide.ModelPeriod.LastPoint := 10;

    // Определяем метод обработки пропусков

    Slide.MissingData.Method := MissingDataMethod.SampleAverage;

    // Определяем интервал времени, на котором будет определятся среднее значение элементов

    Slide.Width := 3;

    // Определяем, будет ли центрировано скользящее среднее

    Slide.CenterMovingAverage := True;

    // Выполняем расчет и выводим результаты

    res := Slide.Execute;

    If res <> 0 Then

        Debug.WriteLine(Slide.Errors);

        Else

            Debug.WriteLine("Модельный ряд");

            For i := 0 To Slide.Fitted.Length - 1 Do

                Debug.WriteLine(" " + (i + 1).ToString + ". " + Slide.Fitted[i].ToString);

            End For;

            Debug.WriteLine("Остатки");

            For i := 0 To Slide.Residuals.Length - 1 Do

                Debug.WriteLine(" " + (i + 1).ToString + ". " + Slide.Residuals[i].ToString);

            End For;

            Debug.WriteLine("Статистика Дарбина-Уотсона: " + Slide.SummaryStatistics.DW.ToString);

    End If;

End Sub UserProc;


В результате выполнения примера в окне консоли будет выведены модельный
 ряд, остатки и статистические характеристики.


См. также:


[ISmSlideSmoothing](ISmSlideSmoothing.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
