# IModelling.Census1

IModelling.Census1
-


# IModelling.Census1


## Синтаксис


Census1(Input: [ITimeSeries](../ITimeSeries/ITimeSeries.htm);

        Period: [IMsPeriod](../IMsPeriod/IMsPeriod.htm);

        OutputSeries: [MsOutputCensus1SeriesType](../../Enums/MsOutputCensus1SeriesType.htm);

        SeasonalEffect: [SeasonalityType](StatLib.chm::/Enums/SeasonalityType.htm);

        [SeasonalPeriod: Integer
 = 12];

        [Casewise: [MsCasewise](../../Enums/MsCasewise.htm)
 = 0]): Variant;


## Параметры


Input. Моделируемая переменная;


Period. Период, на котором
 рассчитывается метод;


OutputSeries. Тип ряда, выгружаемого
 в моделируемую переменную;


SeasonalEffect. Модель сезонности;


SeasonalPeriod. Продолжительность
 сезонного периода;


Casewise. Метод обработки пропусков.


## Описание


Метод Census1 выделяет сезонную
 составляющую в соответствии с заданными параметрами.


## Комментарии


Если параметр Period принимает
 значение Null, то метод рассчитывается
 на всём временном периоде.


## Пример


Для выполнения примера предполагается наличие в репозитории контейнера
 моделирования с идентификатором MS. В данном контейнере содержится модель
 с идентификатором MODEL_D, рассчитываемая методом детерминированного уравнения
 и содержащая хотя бы одну входную переменную.


Добавьте ссылки на системные сборки: Metabase, Ms, Stat.


			Sub UserProc;

Var

    Mb: IMetabase;

    ModelSpace, ModelObj: IMetabaseObject;

    Transf: IMsFormulaTransform;

    Formula: IMsFormula;

    Model: IMsModel;

    Determ: IMsDeterministicTransform;

    TransVar: IMsFormulaTransformVariable;

    Slice: IMsFormulaTransformSlice;

    TermInfo: IMsFormulaTermInfo;

    Expr: IExpression;

Begin

    // Получаем репозиторий

    Mb := MetabaseClass.Active;

    // Получаем контейнер моделирования

    ModelSpace := Mb.ItemById("MS").Bind;

    // Получаем модель

    ModelObj := Mb.ItemByIdNamespace("MODEL_D", ModelSpace.Key).Edit;

    Model := ModelObj As IMsModel;

    // Получаем параметры расчета модели

    Transf := Model.Transform;

    Formula := Transf.FormulaItem(0);

    Determ := Formula.Method As IMsDeterministicTransform;

    // Получаем первую входную переменную

    TransVar := Transf.Inputs.Item(0);

    Slice := TransVar.Slices.Item(0);

    TermInfo := Transf.CreateTermInfo;

    TermInfo.Slice := Slice;

    // Задаем режим передачи переменной в расчет

    TermInfo.Type := MsFormulaTermType.Pointwise;

    // Получаем выражение расчета модели

    Expr := Determ.Expression;

    Expr.References := "Ms;Stat";

    // Задаем выражение расчета модели

    Expr.AsString := "Census1(" + TermInfo.TermInnerText + ", SetPeriod(" +

        """" + "01.01.2000" + """" + "," + """" + "01.01.2015" + """" +

        "), MsOutputCensus1SeriesType.MovingAverage, SeasonalityType.Additive)";

    // Проверяем корректность выражения

    If Expr.Valid Then

        // Если выражение задано корректно, то сохраняем модель

        ModelObj.Save;

    Else

        // Если выражение некорректное, то выводим сообщение в окно консоли

        Debug.WriteLine("Модель не сохранена: ошибка в формуле");

    End If;

End Sub UserProc;


В результате выполнения примера модель будет рассчитывать значения на
 основе первой входной переменной методом Census1 на периоде с 2000 по
 2015 год. В моделируемую переменную будет выгружаться сглаженный ряд входной
 переменной.


См. также:


[IModelling](IModelling.htm)
 | Метод «[Centus1](Lib.chm::/02_Time_series_analysis/UiModelling_Census1.htm)»


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
