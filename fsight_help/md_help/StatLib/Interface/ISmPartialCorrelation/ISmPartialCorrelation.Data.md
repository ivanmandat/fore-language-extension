# ISmPartialCorrelation.Data

ISmPartialCorrelation.Data
-


# ISmPartialCorrelation.Data


## Синтаксис


Data: Array;


## Описание


Свойство Data определяет матрицу
 исходных данных.


## Комментарии


Индексация входных массивов должна начинаться с нуля.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    pc: SmPartialCorrelation;

    m1, m2: Array[10,2] Of Double;

    w: Array[10] Of Double;

    res, i, j: Integer;

    PartialCorr, PairCorr: Array Of Double;

Begin

    pc := New SmPartialCorrelation.Create;

    //значения m1

    m1[0,0] := -6209; m1[0,1] := 6385;

    m1[1,0] := 4110;  m1[1,1] := 4280;

    m1[2,0] := -6752; m1[2,1] := 4459;

    m1[3,0] := 6837;  m1[3,1] := Double.Nan;

    m1[4,0] := -6495; m1[4,1] := 4664;

    m1[5,0] := 6907;  m1[5,1] := 4861;

    m1[6,0] := 7349;  m1[6,1] := 5195;

    m1[7,0] := 7213;  m1[7,1] := 5389;

    m1[8,0] := -7061; m1[8,1] := Double.Nan;

    m1[9,0] := 7180;  m1[9,1] := 5610;

    pc.Data := m1;

    pc.MissingData.Method := MissingDataMethod.SampleAverage;

    //значения m2

    m2[0,0] := 5320;  m2[0,1] := -5484;

    m2[1,0] := -8680; m2[1,1] := 9132;

    m2[2,0] := 5517;  m2[2,1] := -9213;

    m2[3,0] := 5791;  m2[3,1] := 9450;

    m2[4,0] := 5971;  m2[4,1] := 9177;

    m2[5,0] := 6158;  m2[5,1] := 9756;

    m2[6,0] := 6238;  m2[6,1] := 9756;

    m2[7,0] := 6322;  m2[7,1] := 9724;

    m2[8,0] := 6340;  m2[8,1] := 94;

    m2[9,0] := 6569;  m2[9,1] := 99;

    pc.X := m2;

    //значения w

    w[0] := 0;

    w[1] := 1;

    w[2] := 2;

    w[3] := 3;

    w[4] := 4;

    w[5] := 0;

    w[6] := 1.5;

    w[7] := 2.2;

    w[8] := 3.4;

    w[9] := 1;

    pc.Weights := w;

    res := pc.Execute;

    If res <> 0 Then

        Debug.Write(pc.Errors);

        Else

            Debug.WriteLine("Матрица частных коэффициентов корреляции:");

            Debug.Indent;

            For i := 0 To pc.PartialCorrelationMatrix.GetUpperBound(1) Do

                For j := 0 To pc.PartialCorrelationMatrix.GetUpperBound(2) Do

                    PartialCorr := pc.PartialCorrelationMatrix;

                    Debug.Write(PartialCorr[i, j].ToString + ", ");

                End For;

                Debug.WriteLine(" ");

            End For;

            Debug.Unindent;

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


После выполнения примера в окно консоли будут выведены:


	- матрица частных коэффициентов корреляции;


	- матрица парных коэффициентов корреляции.


См. также:


[ISmPartialCorrelation](ISmPartialCorrelation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
