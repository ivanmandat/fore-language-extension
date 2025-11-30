# IMsCensus2Transform.B1Result

IMsCensus2Transform.B1Result
-


# IMsCensus2Transform.B1Result


## Синтаксис


B1Result: Array;


## Описание


Свойство B1Result возвращает
 ряд после априорной корректировки или исходный ряд.


## Комментарии


Значение доступно только после расчёта метода.


Для задания терма, в который будут выгружены данные результаты, используйте
 свойство [IMsCensus2Transform.B1Term](IMsCensus2Transform.B1Term.htm).


Метод X11 поддерживается только в ОС Windows.


## Пример


Для выполнения примера в репозитории предполагается наличие контейнера
 моделирования с идентификатором MODEL_SPACE, содержащего модель с идентификатором
 MODEL_CENSUS2. Модель должна рассчитываться методом X11.


Добавьте ссылки на системные сборки: Metabase, Ms.


			Sub X11;

Var

    mb: IMetabase;

    MsObj: IMetabaseObjectDescriptor;

    Model: IMsModel;

    Transform: IMsFormulaTransform;

    Vars: IMsFormulaTransformVariables;

    OutputVar: IMsFormulaTransformVariable;

    Coord: IMsFormulaTransformCoord;

    Formula: IMsFormula;

    Census2: IMsCensus2Transform;

    Calc: IMsMethodCalculation;

    Data: Array Of Double;

Begin

    mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    MsObj := mb.ItemById("MODEL_SPACE");

    // Получаем модель

    Model := mb.ItemByIdNamespace("MODEL_CENSUS2", MsObj.Key).Edit As IMsModel;

    // Получаем параметры модели

    Transform := Model.Transform;

    // Получаем параметры расчёта метода X11

    Formula := Transform.FormulaItem(0);

    Census2 := Formula.Method As IMsCensus2Transform;

    // Задаём компоненту, выгружаемую в моделируемую переменную

    Census2.OutputType := MsCensus2OutputType.D11;

    // Настраиваем расчёт модели

    Vars := Transform.Outputs;

    OutputVar := Vars.Item(0);

    Coord := Transform.CreateCoord(OutputVar);

    // Задаем параметры периода расчёта

    Calc := Transform.CreateCalculation;

    Calc.Period.IdentificationStartDate := Model.Transform.Period.IdentificationStartDate;

    Calc.Period.IdentificationEndDate := Model.Transform.Period.IdentificationEndDate;

    Calc.Period.ForecastStartDate := Model.Transform.Period.ForecastStartDate;

    Calc.Period.ForecastEndDate := Model.Transform.Period.ForecastEndDate;

    // Выполняем расчет

    Census2.Execute(Calc, Coord);

    // Выводим результаты расчета

    Data := Census2.Explained.Serie(Calc);

    Debug.WriteLine("Смоделированные данные");

    Print(Data); Debug.WriteLine("");

    Data := Census2.B1Result;

    Debug.WriteLine("Ряд после априорной корректировки или исходный ряд");

    Print(Data); Debug.WriteLine("");

    Data := Census2.D10Result;

    Debug.WriteLine("Сезонная составляющая");

    Print(Data); Debug.WriteLine("");

    Data := Census2.D11Result;

    Debug.WriteLine("Сезонная корректировка");

    Print(Data); Debug.WriteLine("");

    Data := Census2.D12Result;

    Debug.WriteLine("Тренд-циклическая компонента");

    Print(Data); Debug.WriteLine("");

    Data := Census2.D13Result;

    Debug.WriteLine("Нерегулярная компонента");

    Print(Data); Debug.WriteLine("");

    // Сохраняем модель

    (Model As IMetabaseObject).Save;

End Sub X11;


// Процедура вывода данных

Sub Print(Data: Array Of Double);

Var

    i: Integer;

Begin

    Debug.Indent;

    For i := 0 To Data.Length - 1 Do

        Debug.WriteLine(i.ToString + " " + Data[i].ToString);

    End For;

    Debug.Unindent;

End Sub Print;


В результате выполнения примера модель будет рассчитана методом X11,
 а результаты расчёта будут выведены в окно консоли.


См. также:


[IMsCensus2Transform](IMsCensus2Transform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
