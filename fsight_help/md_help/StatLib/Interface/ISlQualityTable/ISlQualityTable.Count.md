# ISlQualityTable.Count

ISlQualityTable.Count
-


# ISlQualityTable.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество строк в таблице.


## Пример


В примере описано задание параметров расчета для метода «Бинарная регрессия». Необходимо добавить ссылку на системную сборку Stat.


			Sub UserProc;

Var

    bm: SmBinaryModel;

    can: Array Of Double;

    bin2: Array Of Integer;

    i, res, mm: Integer;

    Intercept: IIntercept;

    Explanatories: ISlSeries;

    GuessingTable: ISlQualityTable;

    GuessTableItem: ISlQualitySet;

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

        For mm := 0 To GuessingTable.Count - 1 Do

            GuessTableItem := GuessingTable.Item(mm);

            i := GuessTableItem.Actual;

            Debug.WriteLine(mm.ToString + ". Фактически: " + i.ToString);

            i := GuessTableItem.Prediction;

            Debug.WriteLine(mm.ToString + ". Предсказано: " + i.ToString);

            i := GuessTableItem.CorrectPrediction;

            Debug.WriteLine(mm.ToString + ". Правильно предсказано: " + i.ToString);

        End For;

        GuessingTable.Clear;

    End If;

End Sub UserProc;


После выполнения примера будут заданы параметры расчета. В окно консоли будет выведено сообщение о результатах расчета и значения, описывающие качество подбора бинарной модели. Затем таблица качества подбора бинарной модели будет очищена.


Module execution started


Нет ошибок


Описание качества подбора


0. Фактически: 3


0. Предсказано: 3


0. Правильно предсказано: 2


1. Фактически: 2


1. Предсказано: 2


1. Правильно предсказано: 1


Module execution finished


См. также:


[ISlQualityTable](ISlQualityTable.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
