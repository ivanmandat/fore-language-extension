# ISlEquation.ParseAR

ISlEquation.ParseAR
-


# ISlEquation.ParseAR


## Синтаксис


ParseAR(Value: String; [AssignOrder: Boolean = True]);


## Параметры


Value. Строковое представление
 порядка авторегрессии;


AssignOrder. Признак установки
 полученного значения в свойство [ISlEquation.AutoRegressionOrder](ISlEquation.AutoRegressionOrder.htm).


## Описание


Метод ParseAR разбирает строки
 с параметрами несезонной авторегрессии.


## Комментарии


Параметр Value должен содержать номера или диапазоны порядков авторегрессии,
 разделённые запятыми. Например:


ParseAR("1-3,5,7-9", True);


Если AssignOrder = True, то после выполнения ParseAR
 полученное значение устанавливается в свойство [ISlEquation.AutoRegressionOrder](ISlEquation.AutoRegressionOrder.htm).
 Если AssignOrder = False, то порядок параметров несезонной авторегрессии
 не изменяется.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


Sub UserProc;

Var

    x1, x2: Array[16] Of Double;

    i, j, status: Integer;

    VarModel: ISmVectorAutoRegress;

    Eqs: ISlEquations;

    Eq, Equations: ISlEquation;

    Intercept: IIntercept;

    EndogenousCoeff: ICoefficients;

Begin

    VarModel := New SmVectorAutoRegress.Create;

    // Эндогенная переменная 1

    x1[0] := 3; x1[1] := 8; x1[2] := 12; x1[3] := 10;

    x1[4] := 26; x1[5] := 21; x1[6] := 35; x1[7] := 29;

    x1[8] := 40; x1[9] := 39; x1[10] := 51; x1[11] := 50;

    x1[12] := 59; x1[13] := 58; x1[14] := 65; x1[15] := 72;

    // Эндогенная переменная 2

    x2[0] := 5; x2[1] := 3; x2[2] := 9; x2[3] := 13;

    x2[4] := 25; x2[5] := 21; x2[6] := 30; x2[7] := 33;

    x2[8] := 43; x2[9] := 37; x2[10] := 49; x2[11] := 47;

    x2[12] := 60; x2[13] := 59; x2[14] := 69; x2[15] := 68;

    // Период идентификации:

    VarModel.ModelPeriod.FirstPoint := 1;

    VarModel.ModelPeriod.LastPoint := 10;

    // Параметры коллекции уравнений:

    Eqs := VarModel.Equations;

    // ===Объясняемый ряд 1===

    Eq := Eqs.Add;

    Eq.Serie.Value := x1;

    Eq.Serie.Name := "x1";

    // Порядок авторегрессии:

    Eq.ParseAR("1",True);

    // Последняя точка прогноза:

    Eq.Forecast.LastPoint := 16;

    // Параметры константы уравнения:

    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

    // ===Объясняемый ряд 2===

    Eq := Eqs.Add;

    Eq.Serie.Value := x2;

    Eq.Serie.Name := "x2";

    // Порядок авторегрессии:

    Eq.ParseAR("1",True);

    // Последняя точка прогноза:

    Eq.Forecast.LastPoint := 16;

    // Параметры константы уравнения:

    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

    // ===Расчет модели===

    status := VarModel.Execute;

    If status <> 0 Then

        Debug.Writeline(VarModel.Errors);

        Else

        For i := 0 To Eqs.Count-1 Do

            Debug.WriteLine("=== Коэффициенты уравнения " + (i+1).ToString + " ===");

            Intercept := VarModel.Equations.Item(i).Intercept;

            Debug.WriteLine("Константа "+Intercept.Estimate.ToString);

            EndogenousCoeff := VarModel.Equations.Item(i).EndogenousCoefficients;

            For j:=0 To EndogenousCoeff.Estimate.Length-1 Do

                Equations := VarModel.Equations.Item(j);

                Debug.WriteLine(Equations.Serie.Name+"[t-1]: " + Equations.EndogenousCoefficients.Estimate[j].ToString);

            End For;

        End For;

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены коэффициенты
 уравнений векторной авторегрессии.


См. также:


[ISlEquation](ISlEquation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
