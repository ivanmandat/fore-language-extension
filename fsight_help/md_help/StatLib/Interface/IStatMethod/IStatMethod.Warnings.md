# IStatMethod.Warnings

IStatMethod.Warnings
-


# IStatMethod.Warnings


## Синтаксис


Warnings: Array;


## Описание


Свойство Warnings возвращает
 предупреждения, возникшие при расчёте метода.


## Комментарии


Предупреждения возвращаются в виде массива строк. Число элементов в
 данном массиве возвращает свойство [IStatMethod.WarningsCount](IStatMethod.WarningsCount.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    HP: SmHodrickPrescottFilter;

    s: Array[15] Of Double;

    res: Integer;

    j: Integer;

Begin

    // Задаем значения переменных

    s[00] := 670.2; s[08] := 1033.3;

    s[01] := 576.06; s[09] := 780.8;

    s[02] := 717.64; s[10] := 657.5;

    s[03] := 856.9; s[11] := 654.5;

    s[04] := 885.4; s[12] := 678.23;

    s[05] := 1011; s[13] := 642.41;

    s[06] := 995.44; s[14] := 751.9;

    s[07] := 1064.74;

    HP := New SmHodrickPrescottFilter.Create;

    //Задаем исходный ряд

    HP.Serie.Value := s;

    // Задаём период идентификации

    HP.ModelPeriod.FirstPoint := 1;

    HP.ModelPeriod.LastPoint := 15;

    // Задаём метод обработки пропусков

    HP.MissingData.Method := MissingDataMethod.SampleAverage;

    // Определяем количество периодов в году

    HP.Frequency := 12;

    // Определяем способ задания параметра сглаживания

    HP.SmoothingParameterMode := HPSmoothingParameterModeType.EditDirectly;

    // Задаём параметр сглаживания

    HP.SmoothingParameter := 5000000000000000000;

    // Выполняем расчет и выводим результаты

    res := HP.Execute;

    If res <> 0 Then

        Debug.WriteLine(HP.Errors);

    Else

        If HP.WarningsCount > 0 Then

            Debug.WriteLine("Предупреждения");

            For j := 0 To HP.WarningsCount - 1 Do

                Debug.WriteLine(HP.Warnings[j]);

            End For;

        End If;

        Debug.WriteLine("Модельный ряд");

        For j := 0 To HP.Fitted.Length - 1 Do

            Debug.WriteLine(HP.Fitted[j]);

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера в окне консоли будут выведены модельный
 ряд и предупреждения, возникшие при расчёте метода.


См. также:


[IStatMethod](IStatMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
