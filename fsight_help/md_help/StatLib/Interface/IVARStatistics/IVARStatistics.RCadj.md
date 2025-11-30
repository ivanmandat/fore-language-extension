# IVARStatistics.RCadj

IVARStatistics.RCadj
-


# IVARStatistics.RCadj


## Синтаксис


RCadj: Double;


## Описание


Свойство RCadj возвращает скорректированный
 определитель матрицы ковариаций остатков.


## Комментарии


Предпочтительней модель с наименьшим значением критерия.


Для получение определителя матрицы ковариаций остатков используйте свойство
 [IVARStatistics.RC](IVARStatistics.RC.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    y1, y2: Array[15] Of Double;

    status: Integer;

    VarModel: ISmVectorAutoRegress;

    Eqs: ISlEquations;

    Eq: ISlEquation;

    ARO: Array[2] Of Integer;

    VARStat: IVARStatistics;

Begin

    VarModel := New SmVectorAutoRegress.Create;

    //значения массива y1

    y1[00] := 6209; y1[01] := 6385; y1[02] := 6752; y1[03] := 6837; y1[04] := 6495;

    y1[05] := 6907; y1[06] := 7349; y1[07] := 7213; y1[08] := 7061; y1[09] := 7180;

    y1[10] := 7132; y1[11] := 7137; y1[12] := 7473; y1[13] := 7722; y1[14] := 8088;

    //значения массива y2

    y2[00] := 4110; y2[01] := 4280; y2[02] := 4459; y2[03] := 4545; y2[04] := 4664;

    y2[05] := 4861; y2[06] := 5195; y2[07] := 5389; y2[08] := 5463; y2[09] := 5610;

    y2[10] := 5948; y2[11] := 6218; y2[12] := 6521; y2[13] := 6788; y2[14] := 7222;

    //значения массива ARO

    ARO[0]:=1; ARO[1]:=2;

    Eqs := VarModel.Equations;

    Eq := Eqs.Add;

    Eq.Serie.Value := y1;

    Eq.AutoRegressionOrder := ARO;

    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

    Eq := Eqs.Add;

    Eq.Serie.Value := y2;

    Eq.AutoRegressionOrder := ARO;

    Eq.Intercept.Mode := InterceptMode.AutoEstimate;

    VarModel.ModelPeriod.FirstPoint := 1;

    VarModel.ModelPeriod.LastPoint := 43;

    status := VarModel.Execute;

    If status <> 0 Then

        Debug.WriteLine(VarModel.Errors);

        Else

            VARStat := VarModel.VARStatistics;

            Debug.WriteLine("Информационный критерий Акаике: " + VARStat.AIC.ToString);

            Debug.WriteLine("Значение функции правдоподобия: " + VARStat.LLV.ToString);

            Debug.WriteLine("Определитель матрицы ковариаций остатков: " + VARStat.RC.ToString);

            Debug.WriteLine("Скорректированный определитель матрицы ковариаций остатков: " + VARStat.RCadj.ToString);

            Debug.WriteLine("Критерий Шварца: " + VARStat.SC.ToString);

    End If;

End Sub UserProc;


После выполнения примера в окно консоли будут выведены значения статистики
 векторной авторегрессии.


См. также:


[IVARStatistics](IVARStatistics.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
