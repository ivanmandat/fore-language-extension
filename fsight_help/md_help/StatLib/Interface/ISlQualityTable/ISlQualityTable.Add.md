# ISlQualityTable.Add

ISlQualityTable.Add
-


# ISlQualityTable.Add


## Синтаксис


Add: [ISlQualitySet](../ISlQualitySet/ISlQualitySet.htm);


## Описание


Метод Add добавляет строку в таблицу.


## Пример


В примере описано задание параметров расчета для метода «Бинарная регрессия». Необходимо добавить ссылку на системную сборку Stat.


			Sub UserProc;

Var

    bm: SmBinaryModel;

    can: Array Of Double;

    bin2: Array Of Integer;

    mm: Integer;

    i, res: Integer;

    Intercept: IIntercept;

    Explanatories: ISlSeries;

    GuessingTable: ISlQualityTable;

    GuessTableItem, GTableCom: ISlQualitySet;

Begin

// Задаем значения объясняющего ряда
    can := New double[9];

    can[00] := 6.209; can[05] := 5;

    can[01] := 6.385; can[06] := 6;

    can[02] := 6.29; can[07] := 7;

    can[03] := 6.25; can[08] := 8;

    can[04] := 6.1;

// Задаем значения объясняемого ряда
    bin2 := New integer[5];

    bin2[00] := 1; bin2[03] := 0;

    bin2[01] := 1; bin2[04] := 0;

    bin2[02] := 0;

    bm := New SmBinaryModel.Create;

// Задаем значения первой и последней точек периода идентификации
    bm.ModelPeriod.FirstPoint := 1;

    bm.ModelPeriod.LastPoint := 5;

// Задаем значение последней точки прогноза
    bm.Forecast.LastPoint := 14;

// Задаем способ оценки константы
    Intercept := bm.ModelCoefficients.Intercept;

    Intercept.Mode := InterceptMode.AutoEstimate;

// Задаем метод обработки пропусков
    bm.MissingData.Method := MissingDataMethod.SampleAverage;

// Задаем тип модели
    bm.BinaryDistr := BinaryDistrType.Probit;

// Задаем значение деления на группы и точность
    bm.ClassificationCutOff := 0.5;

    bm.Tolerance := 0.001;

// Задаем объясняемый ряд
    bm.BinaryExplained := bin2;

// Задаем объясняющий ряд
    Explanatories := bm.Explanatories;

    Explanatories.Add.Value := can;

    Explanatories.Item(0).Include := True;

// Производим расчет и выводим сообщения об ошибках
    bm.Execute;

    Debug.WriteLine(bm.Errors);

// Выводим результаты расчетов
    If (res = 0) Then

    // Таблица качества подбора бинарной модели
        Debug.WriteLine("Описание качества подбора");

        GuessingTable := bm.GuessingTable;

        GTableCom := GuessingTable.Add;

        For mm := 0 To 1 Do

            GuessTableItem := GuessingTable.Item(mm);

            i := GuessTableItem.Actual;

            GTableCom.Actual := GTableCom.Actual + i;

            Debug.WriteLine(mm.ToString + ". Фактически: " + i.ToString);

            i := GuessTableItem.Prediction;

            GTableCom.Prediction := GTableCom.Prediction + i;

            Debug.WriteLine(mm.ToString + ". Предсказано: " + i.ToString);

            i := GuessTableItem.CorrectPrediction;

            Debug.WriteLine(mm.ToString + ". Правильно предсказано: " + i.ToString);

            GTableCom.CorrectPrediction := GTableCom.CorrectPrediction + i;

        End For;

        Debug.WriteLine("Всего:");

        Debug.WriteLine(" Фактически: " + GTableCom.Actual.ToString);

        Debug.WriteLine(" Предсказано: " + GTableCom.Prediction.ToString);

        Debug.WriteLine(" Правильно предсказано: " + GTableCom.CorrectPrediction.ToString);

        GuessingTable.Remove(GuessingTable.Count - 1);

    End If;

End Sub UserProc;


После выполнения примера будут заданы параметры расчета. В окно консоли будет выведено сообщение о результатах расчета и значения, описывающие качество подбора бинарной модели. Также будут добавлены обобщенные значения качества подбора, которые после вывода в окно консоли будут удалены.


Module execution started


Нет ошибок


Описание качества подбора


0. Фактически: 3


0. Предсказано: 3


0. Правильно предсказано: 2


1. Фактически: 2


1. Предсказано: 2


1. Правильно предсказано: 1


Всего:


Фактически: 5


Предсказано: 5


Правильно предсказано: 3


Module execution finished


См. также:


[ISlQualityTable](ISlQualityTable.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
