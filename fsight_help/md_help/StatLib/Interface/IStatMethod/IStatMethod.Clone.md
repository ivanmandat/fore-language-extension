# IStatMethod.Clone

IStatMethod.Clone
-


# IStatMethod.Clone


## Синтаксис


Clone: [IStatMethod](IStatMethod.htm);


## Описание


Метод Clone клонирует объект статистического метода.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

    Sub PrintResult(Count: Integer; Method: ISmLinearRegress);

    Var

        i: Integer;

        d0: Double;

    Begin

        For i := 0 To Count Do

        d0 := Method.Fitted[i];

        Debug.WriteLine(i.ToString + ", " + d0.ToString);

        End For;

    End Sub PrintResult;

Var

    LR: SmLinearRegress;

    LRClone: ISmLinearRegress;

    can: Array Of Double;

    res, Count: Integer;

    Error: String;

Begin

    LR := New SmLinearRegress.Create;

    can := New Double[5];

    can[00] := 6209;

    can[01] := 6385;

    can[02] := 6752;

    can[03] := 6837;

    can[04] := 6495;

    LR.Explained.Value := can;

    res := LR.Execute;

    Debug.WriteLine(res);

    Error := LR.Errors;

    Debug.WriteLine(Error);

    Count := LR.ModelPeriod.LastPoint - 1;

    Debug.WriteLine("=== Модельный ряд === ");

    PrintResult(Count, LR);

    LRClone := LR.Clone As ISmLinearRegress;

    Count := LRClone.ModelPeriod.LastPoint - 2;

    Debug.WriteLine("=== Модельный ряд клона === ");

    PrintResult(Count, LRClone);

End Sub UserProc;


После выполнения примера в окно консоли будут выведены результаты расчёта основного метода и результаты расчёта его клона.


См. также:


[IStatMethod](IStatMethod.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
