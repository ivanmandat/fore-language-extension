# ISmGrangerTest.MissingData

ISmGrangerTest.MissingData
-


# ISmGrangerTest.MissingData


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

	    GrangerCT: ISmGrangerTest;

	    y: Array[10,4] Of Double;

	    res, i, j: Integer;

	    ResValue: Array Of Integer;

	    PValue, TStat: Array Of Double;

	Begin

	    GrangerCT := New SmGrangerTest.Create;

	    // значения Y

	    y[0, 0] := 6209;  y[0, 1] := 4110;  y[0, 2] := 3415;  y[0, 3] := 2822;

	    y[1, 0] := 6385;  y[1, 1] := 4280;  y[1, 2] := 3673;  y[1, 3] := 3023;

	    y[2, 0] := 6752;  y[2, 1] := 4459;  y[2, 2] := 4013;  y[2, 3] := 3131;

	    y[3, 0] := 6837;  y[3, 1] := 4545;  y[3, 2] := 4278;  y[3, 3] := 3351;

	    y[4, 0] := 6495;  y[4, 1] := 4664;  y[4, 2] := 4577;  y[4, 3] := 3463;

	    y[5, 0] := 6907;  y[5, 1] := 4861;  y[5, 2] := 5135;  y[5, 3] := Double.Nan;

	    y[6, 0] := 7349;  y[6, 1] := 5195;  y[6, 2] := 5388;  y[6, 3] := 3815;

	    y[7, 0] := 7213;  y[7, 1] := 5389;  y[7, 2] := 5610;  y[7, 3] := 3960;

	    y[8, 0] := 7061;  y[8, 1] := 5463;  y[8, 2] := 5787;  y[8, 3] := 4119;

	    y[9, 0] := 7180;  y[9, 1] := 5610;  y[9, 2] := 6181;  y[9, 3] := 4351;

	    GrangerCT.Data := y;

	    GrangerCT.Lag := 1;

	    GrangerCT.ConfidenceLevel := 0.05;


    GrangerCT.MissingData.Method := MissingDataMethod.SampleAverage;

    GrangerCT.MissingData.MethodParameter := 1000;

    res := GrangerCT.Execute;

    Debug.WriteLine("Матрица вероятностей:");

    Debug.Indent;

    For i := 0 To GrangerCT.PValueMatrix.GetUpperBound(1) Do

        For j := 0 To GrangerCT.PValueMatrix.GetUpperBound(2) Do

            PValue := GrangerCT.PValueMatrix;

            Debug.Write(PValue[i, j].ToString + ", ");

        End For;

        Debug.WriteLine(" ");

    End For;

    Debug.Unindent;

    Debug.WriteLine("Матрица результатов:");

    Debug.Indent;

    For i := 0 To GrangerCT.ResValueMatrix.GetUpperBound(1) Do

        For j := 0 To GrangerCT.ResValueMatrix.GetUpperBound(2) Do

            ResValue := GrangerCT.ResValueMatrix;

            Debug.Write(ResValue[i, j].ToString + ", ");

        End For;

        Debug.WriteLine(" ");

    End For;

    Debug.Unindent;

    Debug.WriteLine("Матрица статистик Фишера:");

    Debug.Indent;

    For i := 0 To GrangerCT.TStatMatrix.GetUpperBound(1) Do

        For j := 0 To GrangerCT.TStatMatrix.GetUpperBound(2) Do

            TStat := GrangerCT.TStatMatrix;

            Debug.Write(TStat[i, j].ToString + ", ");

        End For;

        Debug.WriteLine(" ");

    End For;

    Debug.Unindent;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены матрицы вероятностей
 и результатов и статистик Фишера.


См. также:


[ISmGrangerTest](ISmGrangerTest.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
