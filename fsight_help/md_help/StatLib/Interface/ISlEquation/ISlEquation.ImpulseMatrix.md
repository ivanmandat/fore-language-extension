# ISlEquation.ImpulseMatrix

ISlEquation.ImpulseMatrix
-


# ISlEquation.ImpulseMatrix


## Синтаксис


ImpulseMatrix: Array;


## Описание


Свойство ImpulseMatrix возвращает
 матрицу значений функции импульсивного отклика.


## Комментарии


Для расчета матрицы необходимо определить свойства [ISmVectorAutoRegress.ImpulseAROrder](../ISmVectorAutoRegress/ISmVectorAutoRegress.ImpulseAROrder.htm)
 и [ISmVectorAutoRegress.ImpulsePeriod](../ISmVectorAutoRegress/ISmVectorAutoRegress.ImpulsePeriod.htm).


В случае когда не задан хотя бы один из параметров ImpulseAROrder или
 ImpulsePeriod, рассчитывается векторная авторегрессионная модель с авторегрессией,
 задаваемой вектором [ISlEquation.AutoRegressionOrder](ISlEquation.AutoRegressionOrder.htm),
 при этом ImpulseMatrix не рассчитывается.


Если же одновременно заданы ImpulseAROrder и ImpulsePeriod, то значения
 параметра AutoRegressionOrder игнорируется, модель рассчитывается с авторегрессией
 порядка 1, 2, 3, … ImpulseAROrder. При этом ImpulseMatrix рассчитывается.


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

    ARO: Array[0..0] Of Integer;

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

    //Эндогенная3

    ar3[0] := 7;

    ar3[1] := 2;

    ar3[2] := 11;

    ar3[3] := 14;

    ar3[4] := 18;

    ar3[5] := 22;

    ar3[6] := 32;

    ar3[7] := 28;

    ar3[8] := 39;

    ar3[9] := 44;

    ar3[10] := 50;

    ar3[11] := 54;

    ar3[12] := 58;

    ar3[13] := 57;

    ar3[14] := 71;

    ar3[15] := 72;

    var1 := New SmVectorAutoRegress.Create;

    Eqs := var1.Equations;

    Eq := Eqs.Add;

    Eq.Serie.Value := ar1;

    Eq.AutoRegressionOrder := ARO;

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

End Sub UserProc;


После выполнения примера в окно консоли будет выведена импульсная матрица
 для первого уравнения:


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


Выполнение модуля завершено


См. также:


[ISlEquation](ISlEquation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
