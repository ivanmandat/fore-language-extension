# ISmPairCorrelation.BalancedSample

ISmPairCorrelation.BalancedSample
-


# ISmPairCorrelation.BalancedSample


## Синтаксис


BalancedSample: Boolean;


## Описание


Свойство BalancedSample определяет,
 по каким наблюдениям рассчитываются коэффициенты корреляции.


## Комментарии


Свойство актуально, если используется метод обработки пропусков - [MissingDataMethod.Casewise](../../Enums/MissingDataMethod.htm).
 Метод обработки пропусков определяет свойство [ISmPairCorrelation.MissingData](ISmPairCorrelation.MissingData.htm).


Допустимые значения BalancedSample:


	- True. Значение по умолчанию.
	 Из расчёта исключаются все наблюдения, в которых есть пропуски
	 в данных хотя бы по одной переменной;


	- False. Коэффициенты
	 корреляции рассчитываются по всем возможным данным.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    pc: SmPairCorrelation;

    m: Array[4, 4] Of Double;

    w: Array[4] Of Double;

    res, i, j: Integer;

    PairCorr: Array Of Double;

Begin

    pc := New SmPairCorrelation.Create;

    // Задаем исходные данные

    m[0, 0] := 10;  m[0, 1] := 1;  m[0, 2] := 62;  m[0, 3] := -3;

    m[1, 0] := 30;  m[1, 1] := 2;  m[1, 2] := 32;  m[1, 3] := Double.Nan;

    m[2, 0] := 3;   m[2, 1] := 3;  m[2, 2] := 22;  m[2, 3] := -3;

    m[3, 0] := 77;  m[3, 1] := 4;  m[3, 2] := 21;  m[3, 3] := 3;

    pc.Data := m;

    // Задаем метод обработки пропусков

    pc.MissingData.Method := MissingDataMethod.Casewise;

    // Задаем вектор весов

    w[0] := 1;  w[1] := 2;  w[2] := 2.2;  w[3] := 0.5;

    pc.Weights := w;

    // Определяем данные, по которым будет рассчитываться корреляция

    pc.BalancedSample := False;

    // Выполняем расчёт и выводим результаты

    res := pc.Execute;

    If res <> 0 Then

        Debug.Write(pc.Errors);

    Else

        Debug.WriteLine("Матрица парных коэффициентов корреляции:");

        Debug.Indent;

        For i := 0 To pc.PairCorrelationMatrix.GetUpperBound(1) Do

            For j := 0 To pc.PairCorrelationMatrix.GetUpperBound(2) Do

                PairCorr := pc.PairCorrelationMatrix;

                Debug.Write(PairCorr[i, j].ToString + ", ");

            End For;

            Debug.WriteLine(" ");

        End For;

        Debug.Unindent;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведена матрица парных
 коэффициенты корреляции.


См. также:


[ISmPairCorrelation](ISmPairCorrelation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
