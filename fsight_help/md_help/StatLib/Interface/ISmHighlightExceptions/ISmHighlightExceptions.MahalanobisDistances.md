# ISmHighlightExceptions.MahalanobisDistances

ISmHighlightExceptions.MahalanobisDistances
-


# ISmHighlightExceptions.MahalanobisDistances


## Синтаксис


MahalanobisDistances: Array;


## Описание


Свойство MahalanobisDistances
 возвращает ряд расстояний Махаланобиса.


## Комментарии


Свойство актуально, если [ISmHighlightExceptions.IsContinuousData](ISmHighlightExceptions.IsContinuousData.htm) = True, то есть данные являются непрерывными.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Stat.


			Sub UserProc;

Var

    method: SmHighlightExceptions;

    v1,v2,v3,v4: Array[11] Of Double;

    i,res: Integer;

Begin

    method := New SmHighlightExceptions.Create;

    v1[0]:=284.8;   v2[0]:=199.9;   v3[0]:=2.8;  v4[0]:=40.8;

    v1[1]:=238.7;   v2[1]:=190.0;   v3[1]:=5.5;  v4[1]:=43.6;

    v1[2]:=287.9;   v2[2]:=189.8;   v3[2]:=5.6;  v4[2]:=39.4;

    v1[3]:=269.3;   v2[3]:=206.9;   v3[3]:=6.3;  v4[3]:=29.8;

    v1[4]:=187.4;   v2[4]:=159.8;   v3[4]:=10.3; v4[4]:=43.3;

    v1[5]:=369.3;   v2[5]:=188.9;   v3[5]:=1.9;  v4[5]:=54.3;

    v1[6]:=354.0;   v2[6]:=163.0;   v3[6]:=6.3;  v4[6]:=79.1;

    v1[7]:=706.4;   v2[7]:=163.6;   v3[7]:=9.0;  v4[7]:=66.8;

    v1[8]:=267.7;   v2[8]:=214.5;   v3[8]:=7.8;  v4[8]:=56.3;

    v1[9]:=182.8;   v2[9]:=194.3;   v3[9]:=8.8;  v4[9]:=64.5;

    v1[10]:=603.8;  v2[10]:=280.9;  v3[10]:=7.3; v4[10]:=102.4;

    // Выбор рядов:

    method.Data.Clear;

    method.Data.Add.Value := v1;

    method.Data.Add.Value := v2;

    method.Data.Add.Value := v3;

    method.Data.Add.Value := v4;

    // Данные являются непрерывными:

    method.IsContinuousData := True;

    // Способ вычисления расстояний Махаланобиса:

    method.HEDistance := HEDistanceType.DispersionrEllepceMahalanobisFast;

    // Медианное отклонение:

    method.MedianDeviationFraction := 0.5;

    // Выполняем расчёт и выводим результаты:

    res := method.Execute;

    Debug.WriteLine("MahalanobisDistances:
 ");

    For i := 0 To method.MahalanobisDistances.Length - 1 Do

        Debug.WriteLine(i.ToString + ": " + method.MahalanobisDistances[i].ToString);

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен ряд расстояний
 Махаланобиса.


См. также:


[ISmHighlightExceptions](ISmHighlightExceptions.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
