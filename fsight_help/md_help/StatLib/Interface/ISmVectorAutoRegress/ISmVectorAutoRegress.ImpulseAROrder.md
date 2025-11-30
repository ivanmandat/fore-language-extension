# ISmVectorAutoRegress.ImpulseAROrder

ISmVectorAutoRegress.ImpulseAROrder
-


# ISmVectorAutoRegress.ImpulseAROrder


## Синтаксис


ImpulseAROrder: Integer;


## Описание


Свойство ImpulseAROrder определяет
 порядок авторегрессии для импульсной функции.


## Комментарии


Если одновременно заданы свойства ImpulseAROrder и [ImpulsePeriod](ISmVectorAutoRegress.ImpulsePeriod.htm),
 то значения параметра [ISlEquation.AutoRegressionOrder](../ISlEquation/ISlEquation.AutoRegressionOrder.htm)
 игнорируется, модель рассчитывается с авторегрессией порядка 1, 2, 3,
 … ImpulseAROrder, при этом будет рассчитана матрица значений функции импульсивного
 отклика [ISlEquation.ImpulseMatrix](../ISlEquation/ISlEquation.ImpulseMatrix.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    ar1, ar2, ar3: Array[0..15] Of Double;

    i,j,status: Integer;

    d: Double;

    var1: ISmVectorAutoRegress;

    Eqs: ISlEquations;

    Eq: ISlEquation;

    VARStat: IVARStatistics;

Begin

    //Эндогенная1, Эндогенная2, Эндогенная3

    ar1[0] := 3; ar2[0] := 5; ar3[0] := 7;

    ar1[1] := 8; ar2[1] := 3; ar3[1] := 2;

    ar1[2] := 12; ar2[2] := 9; ar3[2] := 11;

    ar1[3] := 10; ar2[3] := 13; ar3[3] := 14;

    ar1[4] := 26; ar2[4] := 25; ar3[4] := 18;

    ar1[5] := 21; ar2[5] := 21; ar3[5] := 22;

    ar1[6] := 35; ar2[6] := 30; ar3[6] := 32;

    ar1[7] := 29; ar2[7] := 33; ar3[7] := 28;

    ar1[8] := 40; ar2[8] := 43; ar3[8] := 39;

    ar1[9] := 39; ar2[9] := 37; ar3[9] := 44;

    ar1[10] := 51; ar2[10] := 49; ar3[10] := 50;

    ar1[11] := 50; ar2[11] := 47; ar3[11] := 54;

    ar1[12] := 59; ar2[12] := 60; ar3[12] := 58;

    ar1[13] := 58; ar2[13] := 59; ar3[13] := 57;

    ar1[14] := 65; ar2[14] := 69; ar3[14] := 71;

    ar1[15] := 72; ar2[15] := 68; ar3[15] := 72;

    var1 := New SmVectorAutoRegress.Create;

    Eqs := var1.Equations;

    Eq := Eqs.Add;

    Eq.Serie.Value := ar1;

    Eq := Eqs.Add;

    Eq.Serie.Value := ar2;

    Eq := Eqs.Add;

    Eq.Serie.Value := ar3;

    var1.ModelPeriod.FirstPoint := 1;

    var1.ModelPeriod.LastPoint := 16;

    var1.ImpulseAROrder := 1;

    var1.ImpulsePeriod := 10;

    status := var1.Execute;

    Debug.Writeline("Статус = " + status.tostring);

    Debug.Writeline("Ошибки = " + var1.Errors);

    Debug.WriteLine(" == ИМПУЛЬСНАЯ МАТРИЦА 1 == ");

    For i := 0 To var1.ImpulsePeriod-1 Do //по наблюдениям (строкам)

        Debug.Write(i.ToString+ ": ");

        For j := 0 To var1.Equations.Count-1 Do //по переменным (столбцам)

            d := var1.Equations.Item(0).ImpulseMatrix[i,j];

            Debug.Write(d.ToString + ", ");

        End For;

        Debug.WriteLine(" ");

    End For;

    Debug.WriteLine("======");

    VARStat := var1.VARStatistics;

    Debug.Writeline("====VAR-статистики==== ");

    Debug.WriteLine("AIC = " + VARStat.AIC.ToString);

    Debug.WriteLine("LLV = " + VARStat.LLV.ToString);

    Debug.WriteLine("RC = " + VARStat.RC.ToString);

    Debug.WriteLine("SC = " + VARStat.SC.ToString);

End Sub UserProc;


После выполнения примера в окно консоли будет выведена импульсная матрица
 для первого уравнения, VAR-статистики:


Выполнение модуля начато


Статус = 0


Ошибки = Нет ошибок


 == ИМПУЛЬСНАЯ МАТРИЦА 1 ==


0: 5.82107343478578, 0, 0,


1: 4.72548383099913, 1.23833213187933, 2.68208535855136,


2: 5.90752703120581, 1.07790881080037, 1.65492903378997,


3: 6.158981230265, 1.27989162179673, 2.35186755113905,


4: 6.8688532037235, 1.36052756519905, 2.35021593799561,


5: 7.46593760748684, 1.50587867733303, 2.66523136511949,


6: 8.19391197439218, 1.64143661888061, 2.87900291695787,


7: 8.95997824258687, 1.79954700936484, 3.16717935765933,


8: 9.81122855440278, 1.96859037512526, 3.46021103215874,


9: 10.7377391829624, 2.15528690847276, 3.79022385646187,


======


====VAR-статистики====


AIC = 17.4814387532504


LLV = -122.110790649378


RC = 2363.28423125514


SC = 17.9062688739118


Выполнение модуля завершено


См. также:


[ISmVectorAutoRegress](ISmVectorAutoRegress.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
