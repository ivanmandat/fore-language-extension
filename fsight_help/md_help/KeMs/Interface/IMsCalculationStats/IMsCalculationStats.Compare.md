# IMsCalculationStats.Compare

IMsCalculationStats.Compare
-


# IMsCalculationStats.Compare


## Синтаксис


Compare(Right: [IMsCalculationStats](IMsCalculationStats.htm)):
 [IMsCalculationStatsDiffList](../IMsCalculationStatsDiffList/IMsCalculationStatsDiffList.htm);


## Параметры


Right. Сравниваемые статистики
 расчёта.


## Описание


Метод Compare сравнивает статистики
 между собой.


## Комментарии


Для сравнения статистик расчёта сохраните результат статистик в XML-файл
 с помощью метода [IMsCalculationStats.SaveToXml](IMsCalculationStats.SaveToXml.htm).


Сравнение производится между одинаковыми статистиками. Результатом сравнения
 будет являться коллекция, содержащая информацию только по тем статистикам,
 значения которых различны.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором CONT_MODEL, в котором создана задача моделирования
 с идентификатором PROBLEM. В файловой системе должен быть сохранён файл
 со статистиками предыдущего расчёта задачи D:\Work\Stats.xml.


Добавьте ссылки на системные сборки: Metabase, Ms, Xml.


			Sub UserProc;

Var

    Mb: IMetabase;

    Problem: IMsProblem;

    Settings: IMsProblemCalculationSettings;

    Calc: IMsProblemCalculation;

    OldStats, NewStats: IMsCalculationStats;

    Doc: IXMLDOMDocument3;

    Elem: IXmlDomElement;

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

    // Статистика выполнения задачи

    NewStats := Calc.Stats;

    // Загрузим предыдущую статистику из файла и сравним

    Doc := New FreeThreadedDOMDocument60.Create;

    Doc.load("D:\Work\Stats.xml");

    Elem := doc.selectSingleNode("Stats") As IXmlDomElement;

    OldStats := New MsCalculationStats.Create;

    OldStats.LoadFromXml(Elem);

    // Сравнение статистик

    ShowCompareResult(NewStats.Compare(OldStats));

End Sub UserProc;


Sub ShowCompareResult(DiffList: IMsCalculationStatsDiffList);

Var

    Diff: IMsCalculationStatsDiff;

    Left, Right: IMsCalculationStatNode;

    i: Integer;

Begin

    Debug.WriteLine("Количество найденных различий: " + DiffList.Count.ToString);

    Debug.Indent;

    For i := 0 To DiffList.Count - 1 Do

        Diff := DiffList.Item(i);

        Left := Diff.Left;

        Right := Diff.Right;

        Debug.Write(Left.Name + ":   ");

        Debug.Write("Расчитанное значение: "); ShowValue(Left.Value);

        Debug.Write(". Полученное из файла значение: "); ShowValue(Right.Value);

        Debug.WriteLine("");

    End For;

    Debug.Unindent;

End Sub ShowCompareResult;


Sub ShowValue(Value: Variant);

Var

    Values: Array Of Variant;

    j: Integer;

    Combined: String;

Begin

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

        Debug.Write(Value);

    End If;

End Sub ShowValue;


В результате выполнения примера будет запущен расчёт указанной задачи
 моделирования и получена статистика расчёта. После этого будет осуществлено
 сравнение полученной статистики со статистикой, сохранённой в файл. Если
 имеются различия, то они будут выведены в консоль среды разработки.


См. также:


[IMsCalculationStats](IMsCalculationStats.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
