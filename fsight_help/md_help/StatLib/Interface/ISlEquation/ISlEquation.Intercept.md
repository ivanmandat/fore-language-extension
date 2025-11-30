# ISlEquation.Intercept

ISlEquation.Intercept
-


# ISlEquation.Intercept


## Синтаксис


Intercept: [IIntercept](../IIntercept/IIntercept.htm);


## Описание


Свойство Intercept определяет
 параметры константы уравнения.


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

            Debug.WriteLine("=== Модельный ряд для уравнения " + j.ToString + " ===");

            Print(Eqs.Item(j).Fitted);

            Debug.WriteLine("=== End ===");

        End For;

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены модельные ряды
 уравнений векторной авторегрессии:


Выполнение модуля начато


=== Модельный ряд для уравнения 0 ===


---Begin---


0, ---empty---


1, 11.7808662785608


2, 9.66208784252558


3, 15.3342298062099


4, 19.283705270103


5, 30.3399077892943


6, 26.6425035575565


7, 34.8626350949055


8, 37.9867874849252


9, 47.284313328303


10, 41.5041408365521


11, 52.7043840598321


12, 50.8016666799299


13, 63.0793042092386


14, 62.1459506072986


15, 71.5875171547651


---End---


=== End ===


=== Модельный ряд для уравнения 1 ===


---Begin---


0, ---empty---


1, 9.47726238525208


2, 9.25310051806123


3, 14.5902092863256


4, 17.002584880367


5, 29.6408542765554


6, 25.5099333053118


7, 35.479648317368


8, 36.1841508418405


9, 46.1431935462634


10, 41.5426042253715


11, 53.1988476917301


12, 51.5016469297944


13, 63.1472180885197


14, 62.1758644663231


15, 71.1528812409162


---End---


=== End ===


Выполнение модуля завершено


См. также:


[ISlEquation](ISlEquation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
