# ISlEquation.Residuals

ISlEquation.Residuals
-


# ISlEquation.Residuals


## Синтаксис


Residuals: Array;


## Описание


Свойство Residuals возвращает
 ряд остатков.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    ar1, ar2: Array[0..15] Of Double;

    j,status: Integer;

    var1: ISmVectorAutoRegress;

    Eqs: ISlEquations;

    Eq: ISlEquation;

    ARO: Array[0..0] Of Integer;

    Sub Print(Data: Array Of Double);

    Var

        i: Integer;

        d: Double;

    Begin

        Debug.WriteLine("---Begin---");

        For i := 0 To Data.Length - 1 Do

            If Double.IsNan(Data[i]) Then

                Debug.WriteLine(i.ToString + ", ---empty---");

            Else

                d := Data[i];

                Debug.WriteLine(i.ToString + ", " + d.ToString);

            End If;

        End For;

        Debug.WriteLine("---End---");

    End Sub Print;

Begin

    //Эндогенная1

    ar1[0] := 3;

    ar1[1] := 8;

    ar1[2] := 12;

    ar1[3] := 10;

    ar1[4] := 26;

    ar1[5] := 21;

    ar1[6] := 35;

    ar1[7] := 29;

    ar1[8] := 40;

    ar1[9] := 39;

    ar1[10] := 51;

    ar1[11] := 50;

    ar1[12] := 59;

    ar1[13] := 58;

    ar1[14] := 65;

    ar1[15] := 72;

    //Эндогенная2

    ar2[0] := 5;

    ar2[1] := 3;

    ar2[2] := 9;

    ar2[3] := 13;

    ar2[4] := 25;

    ar2[5] := 21;

    ar2[6] := 30;

    ar2[7] := 33;

    ar2[8] := 43;

    ar2[9] := 37;

    ar2[10] := 49;

    ar2[11] := 47;

    ar2[12] := 60;

    ar2[13] := 59;

    ar2[14] := 69;

    ar2[15] := 68;

    ARO[0] := 1;

    var1 := New SmVectorAutoRegress.Create;

    Eqs := var1.Equations;

    Eq := Eqs.Add;

    Eq.Serie.Value := ar1;

    Eq.AutoRegressionOrder := ARO;

    Eq.Forecast.LastPoint := 16;

    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

    Eq := Eqs.Add;

    Eq.Serie.Value := ar2;

    Eq.AutoRegressionOrder := ARO;

    Eq.Forecast.LastPoint := 16;

    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

    var1.ModelPeriod.FirstPoint := 1;

    var1.ModelPeriod.LastPoint := 16;

    status := var1.Execute;

    If status <> 0 Then

        Debug.Writeline(var1.Errors);

    Else

        For j := 0 To Eqs.Count-1 Do

            Debug.WriteLine("=== Ряд остатков для уравнения " + j.ToString + " ===");

            Print(Eqs.Item(j).Residuals);

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены остатки рядов
 для уравнений векторной авторегрессии:


Выполнение модуля начато


=== Ряд остатков для уравнения 0 ===


---Begin---


0, ---empty---


1, -3.78086627856084


2, 2.33791215747442


3, -5.33422980620993


4, 6.71629472989699


5, -9.33990778929427


6, 8.35749644244354


7, -5.86263509490554


8, 2.01321251507483


9, -8.28431332830298


10, 9.49585916344792


11, -2.70438405983207


12, 8.19833332007011


13, -5.07930420923859


14, 2.85404939270141


15, 0.412482845234877


---End---


=== Ряд остатков для уравнения 1 ===


---Begin---


0, ---empty---


1, -6.47726238525208


2, -0.253100518061231


3, -1.59020928632559


4, 7.997415119633


5, -8.64085427655543


6, 4.49006669468822


7, -2.47964831736803


8, 6.81584915815951


9, -9.14319354626344


10, 7.45739577462852


11, -6.19884769173005


12, 8.49835307020558


13, -4.14721808851969


14, 6.82413553367686


15, -3.15288124091623


---End---


Выполнение модуля завершено


См. также:


[ISlEquation](ISlEquation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
