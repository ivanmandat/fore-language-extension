# ISmAutoCorrelation.MissingData

ISmAutoCorrelation.MissingData
-


# ISmAutoCorrelation.MissingData


## Синтаксис


MissingData: [IMissingData](../IMissingData/IMissingData.htm);


## Описание


Свойство MissingData определяет
 метод обработки пропусков.


## Комментарии


По умолчанию обработка пропусков не выполняется.


## Пример


Добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    AC: SmAutoCorrelation;

    d0, d1, d2, d3, d4: Double;

    i, res: Integer;

    s: Array[25] Of Double;

Begin

    // Создаем экземпляр класса

    AC := New SmAutoCorrelation.Create;

    // Задаем значения ряда данных

    s[00] := 4110; s[01] := 4280; s[02] := 4459; s[03] := 4545; s[04] := Double.Nan;

    s[05] := 4861; s[06] := 5195; s[07] := 5389; s[08] := 5463; s[09] := 5610;

    s[10] := 5948; s[11] := 6218; s[12] := 6521; s[13] := 6788; s[14] := Double.Nan;

    s[15] := 7486; s[16] := 7832; s[17] := 8153; s[18] := 8468; s[19] := 9054;

    s[20] := 9499; s[21] := 9866; s[22] := 10217; s[23] := 10763; s[24] := 10683;

    AC.Serie.Value := s;

    // Определяем начальную точку периода идентификации

    AC.ModelPeriod.FirstPoint := 1;

    // Определяем конечную точку периода идентификации

    AC.ModelPeriod.LastPoint := 25;

    // Определяем метод обработки пропусков

    AC.MissingData.Method := MissingDataMethod.Casewise;

    // Определяем, сколько раз исходный временной ряд будет продифференцирован

    AC.DifferenceOrder := 3;

    // Определяем лаг

    AC.LagOrder := 10;

    // Осуществляем вычисление

    res := AC.Execute;

    If res <> 0 Then

        Debug.WriteLine(AC.Errors);

        Else

            // Получаем стандартную ошибку

            d0 := AC.StandardError;

            Debug.WriteLine("Стандартная ошибка: " + d0.ToString);

            Debug.WriteLine("ACF, PACF");

            For i := 0 To AC.AutoCorrelationFunction.Length - 1 Do

                // Получаем автокорреляционную функцию (ACF)

                d1 := AC.AutoCorrelationFunction[i];

                // Получаем частную автокорреляционную функцию (PACF)

                d2 := AC.PartialAutoCorrelationFunction[i];

                Debug.WriteLine((i + 1).ToString + ". " + d1.ToString + ", " + d2.ToString);

            End For;

            Debug.WriteLine("Q-статистика Льюнг-Бокса, вероятность для Q-статистики Льюнг-Бокса");

            For i := 0 To AC.AutoCorrelationFunction.Length - 1 Do

                // Получаем Q-статистику Льюнг-Бокса

                d3 := AC.QStatistics[i];

                // Получаем вероятность для Q-статистики Льюнг-Бокса

                d4 := AC.Probability[i];

                Debug.WriteLine((i + 1).ToString + ", " + d3.ToString + ", " + d4.ToString);

            End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены:


	- стандартная ошибка;


	- автокорреляционная функция;


	- частная автокорреляционная функция;


	- Q-статистика Льюнг-Бокса;


	- Получаем вероятность для Q-статистики Льюнг-Бокса.


См. также:


[ISmAutoCorrelation](ISmAutoCorrelation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
