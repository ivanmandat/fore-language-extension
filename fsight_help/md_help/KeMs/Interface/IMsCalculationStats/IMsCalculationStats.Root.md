# IMsCalculationStats.Root

IMsCalculationStats.Root
-


# IMsCalculationStats.Root


## Синтаксис


Root: [IMsCalculationStatNode](../IMsCalculationStatNode/IMsCalculationStatNode.htm);


## Описание


Свойство Root определяет корневую
 вершину дерева статистик.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL и задачи моделирования с идентификатором
 PROBLEM.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub UserProc;

Var

    Mb: IMetabase;

    Problem: IMsProblem;

    Settings: IMsProblemCalculationSettings;

    Calc: IMsProblemCalculation;

Begin

    Mb := MetabaseClass.Active;

    // Получим задачу моделирования

    Problem := Mb.ItemByIdNamespace("PROBLEM", Mb.GetObjectKeyById("CONT_MODEL")).EditTemporary As IMsProblem;

    Settings := Problem.CreateCalculationSettings;

    // Зададим детализацию статистик расчета

    Settings.StatsLevel := MsCalculationStatsLevel.Basic;

    Calc := Problem.Calculate(Settings);

    // Рассчитаем задачу моделирования и статистики расчета

    Calc.Run;

    // Выведем результат в консоль

    ShowStats(Calc.Stats);

End Sub UserProc;


Sub ShowStats(Stats: IMsCalculationStats);

Var

    Node: IMsCalculationStatNode;

    Nodes: IMsCalculationStatNodes;

Begin

    // Построим дерево статистик расчета

    Node := Stats.Root;

    Node.Name := "Статистики расчета:";

    Debug.WriteLine(Node.Name);

    Nodes := Stats.Root.Children;

    For Each Node In Nodes Do

        ShowNode(Node);

    End For;

End Sub ShowStats;


Sub ShowNode(StatNode: IMsCalculationStatNode);

Var

    j: Integer;

    Node: IMsCalculationStatNode;

    Value: Variant;

    Values: Array Of Variant;

    Combined: String;

Begin

    // Построим вершины дерева статистик расчета

    Debug.Indent;

    Debug.Write(StatNode.Name + ":   " + StatNode.Id + ";   " + StatNode.Type.ToString);

    Value := StatNode.Value;

    If Value Is Array Then

        Values := Value As Array;

        For j := 0 To Values.Length - 1 Do

            If Not Combined.IsEmpty Then

                Combined := Combined + ", ";

            End If;

            Combined := Combined + Values[j];

        End For;

        Debug.Write("[" + Combined + "]");

        Combined := "";

        Elseif Value Is IMsDatePeriod Then

            Debug.Write((Value As IMsDatePeriod).Start.ToString + " - " + (Value As IMsDatePeriod).End_.ToString);

        Else

        Debug.Write(";   " + StatNode.Value);

    End If;

    Debug.WriteLine("");

    If StatNode.Children.Count > 0 Then

        For Each Node In StatNode.Children Do

            ShowNode(Node);

        End For;

    End If;

    Debug.Unindent;

End Sub ShowNode;


В результате выполнения примера будет запущен расчёт заданной задачи
 моделирования с идентификатором PROBLEM.


В консоль будут выведены статистики расчёта с идентификатором, типом
 расчёта и значением:


Статистики расчета:


    Загрузка данных:   LOADSTEP;
   0;


        Время
 расчета (с):   ELAPSEDTIME;   1;   0.094


        Статистические
 данные:   TSDB_STAT;   0;


            Внешняя
 матрица:   EXTERNALMATRIX;   0;   0


            Количество
 точек:   POINTCOUNT;   0;   31


    Расчет:   CALCSTEP;
   0;


        Время
 расчета (с):   ELAPSEDTIME;   1;   0


        Многомерный
 итератор:   ;   0;


    Сохранение данных:   SAVESTEP;
   0;


        Время
 расчета (с):   ELAPSEDTIME;   1;   0


        Статистические
 данные:   TSDB_STAT;   0;


            Внешняя
 матрица:   EXTERNALMATRIX;   0;   0


            Количество
 точек:   POINTCOUNT;   0;   31


            Количество
 изменённых точек:   CHANGEDPOINTCOUNT;   0;   0


См. также:


[IMsCalculationStats](IMsCalculationStats.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
