# ISmHodrickPrescottFilter.SmoothingParameterMode

ISmHodrickPrescottFilter.SmoothingParameterMode
-


# ISmHodrickPrescottFilter.SmoothingParameterMode


## Синтаксис


SmoothingParameterMode: [HPSmoothingParameterModeType](../../Enums/HPSmoothingParameterModeType.htm);


## Описание


Свойство SmoothingParameterMode
 определяет способ задания параметра сглаживания.


## Комментарии


Для SmoothingParameterMode возможны
 следующие значения:


	- HPSmoothingParameterModeType.SetByFrequencyRule.
	 Параметр сглаживания определяется значением степени: [ISmHodrickPrescottFilter.Power](ISmHodrickPrescottFilter.Power.htm);


	- HPSmoothingParameterModeType.EditDirectly.
	 Значение по умолчанию. Параметр сглаживания определяется значением
	 лямбды: [ISmHodrickPrescottFilter.SmoothingParameter](ISmHodrickPrescottFilter.SmoothingParameter.htm).


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub Print(Data: Array Of Double);

Var

    i: Integer;

Begin

    For i := 0 To Data.Length - 1 Do

        If Double.IsNan(Data[i]) Then

            Debug.WriteLine("----empty---");

            Else

                Debug.WriteLine(i.ToString + " " + Data[i].ToString);

        End If;

    End For;

End Sub Print;


Sub UserProc;

Var

    HP: SmHodrickPrescottFilter;

    s: Array Of Double;

    res: Integer;

Begin

    s := New Double[15];

    // Задаём значения переменной

    s[00] := 670.2; s[08] := 1033.3;

    s[01] := 576.06; s[09] := 780.8;

    s[02] := 717.64; s[10] := 657.5;

    s[03] := 856.9; s[11] := 654.5;

    s[04] := 885.4; s[12] := 678.23;

    s[05] := 1011; s[13] := 642.41;

    s[06] := 995.44; s[14] := 751.9;

    s[07] := 1064.74;

    HP := New SmHodrickPrescottFilter.Create;

    HP.Serie.Value := s;

    // Задаём период идентификации

    HP.ModelPeriod.FirstPoint := 1;

    HP.ModelPeriod.LastPoint := 15;

    // Задаём метод обработки пропусков

    HP.MissingData.Method := MissingDataMethod.SampleAverage;

    // Задаём  количество периодов в году

    HP.Frequency := 12;

    // Определяем способ задания параметра сглаживания

    HP.SmoothingParameterMode := HPSmoothingParameterModeType.SetByFrequencyRule;

    // Задаём значение степени

    HP.Power := 5;

    // Выполняем расчёт метода и выводим результаты

    res := HP.Execute;

    If res <> 0 Then

        Debug.WriteLine(HP.Errors);

    Else

        Debug.WriteLine("Модельный ряд");

        Print(HP.Fitted);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будет выведен модельный ряд.
 Расчеты будут сделаны на месячных данных, параметр сглаживания будет определяться
 значением степени.


См. также:


[ISmHodrickPrescottFilter](ISmHodrickPrescottFilter.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
