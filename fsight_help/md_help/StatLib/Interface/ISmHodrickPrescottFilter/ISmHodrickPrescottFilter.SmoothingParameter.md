# ISmHodrickPrescottFilter.SmoothingParameter

ISmHodrickPrescottFilter.SmoothingParameter
-


# ISmHodrickPrescottFilter.SmoothingParameter


## Синтаксис


SmoothingParameter: Double;


## Описание


Свойство SmoothingParameter
 определяет параметр сглаживания.


## Комментарии


Под параметром сглаживания понимается интервал времени, на котором будет
 определяться среднее значение элементов. Чем больше параметр, тем более
 «гладкий» получается ряд.


Рекомендуется выбирать значение параметра сглаживания следующим образом:


	- 100 - для годовых данных;


	- 1600 - для квартальных данных;


	- 14400 - для месячных данных.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    HP: SmHodrickPrescottFilter;

    s: Array[15] Of Double;

    res, i: Integer;

Begin

    HP := New SmHodrickPrescottFilter.Create;

    // Задаем значения переменных

    s[00] := 670.2;  s[01] := 576.06;  s[02] := 717.64;

    s[03] := 856.9;  s[04] := 885.4;   s[05] := Double.Nan;

    s[06] := 995.44; s[07] := 1064.74; s[08] := 1033.3;

    s[09] := 780.8;  s[10] := 657.5;   s[11] := Double.Nan;

    s[12] := 678.23; s[13] := 642.41; s[14] := 751.9;

    HP.Serie.Value := s;

    // Задаём период идентификации

    HP.ModelPeriod.FirstPoint := 1;

    HP.ModelPeriod.LastPoint := 15;

    // Задаём метод обработки пропусков

    HP.MissingData.Method := MissingDataMethod.SampleAverage;

    // Задаём параметр сглаживания

    HP.SmoothingParameter := 100;

    // Выполняем расчёт метода и выводим результаты

    res := HP.Execute;

    If res <> 0 Then

        Debug.WriteLine(HP.Errors);

    Else

        Debug.WriteLine("Модельный ряд");

        Debug.Indent;

        For i := 0 To HP.Fitted.Length - 1 Do

            Debug.WriteLine(HP.Fitted[i]);

        End For;

        Debug.Unindent;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен модельный ряд.


См. также:


[ISmHodrickPrescottFilter](ISmHodrickPrescottFilter.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
