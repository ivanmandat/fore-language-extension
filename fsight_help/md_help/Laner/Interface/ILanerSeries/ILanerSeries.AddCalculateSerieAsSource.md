# ILanerSeries.AddCalculateSerieAsSource

ILanerSeries.AddCalculateSerieAsSource
-


# ILanerSeries.AddCalculateSerieAsSource


## Синтаксис


AddCalculateSerieAsSource(

    Factor: [IRubricatorFactor](KeCubes.chm::/Interface/IRubricatorFactor/IRubricatorFactor.htm);

    [RevisionKey: Integer = -1;]

    [ScenarioKey: Integer = -1;]

    [Index: Integer = -1]

): [ILanerCalculateSerie](../ILanerCalculateSerie/ILanerCalculateSerie.htm);


## Параметры


Factor. Ряд, который будет
 выступать в качестве источника данных для вычисляемого ряда;


RevisionKey. Ключ ревизии,
 данные на которую должен содержать ряд;


ScenarioKey. Ключ сценария,
 данные которого должны быть загружены;


Index. Индекс позиции, в которую
 необходимо добавить ряд.


## Описание


Метод AddCalculateSerieAsSource
 добавляет вычисляемый ряд на основе заданного ряда.


## Комментарии


Если параметр RevisionKey имеет
 значение «-1», то берутся данные по состоянию на последнюю ревизию.


Если база данных временных рядов неверсионная, то значение параметра
 RevisionKey игнорируется. Признак
 версионности возвращает свойство [IRubricator.KeepHistory](KeCubes.chm::/Interface/IRubricator/IRubricator.KeepHistory.htm).


Если параметр ScenarioKey имеет
 значение «-1», то данные загружаются по сценарию «Факт».


Если параметр Index имеет значение
 «-1», то вычисляемый ряд добавляется в конец коллекции рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_SERIES, содержащей несколько рядов.


Добавьте ссылки на системные сборки: Cubes, Express, Laner, Metabase,
 Ms.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    CalcSerie, Serie: ILanerCalculateSerie;

	    tr: IMsFormulaTransform;

	    OutVar, InpVar: IMsFormulaTransformVariable;

	    Slice: IMsFormulaTransformSlice;

	    Selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    Determ: IMsDeterministicTransform;

	    TermInfo: IMsFormulaTermInfo;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SERIES").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем ряды рабочей книги

	    Series := Laner.Series;

	    // Получаем первый ряд в рабочей книге

	    CalcSerie := Series.Item(0) As ILanerCalculateSerie;

	    // Создаем вычисляемый ряд на основе полученного ряда

	    Serie := Series.AddCalculateSerieAsSource(CalcSerie.Source, -1, -1, 0);

	    // Задаем наименование ряда

	    Serie.Name := Serie.SourceStub.Name + " + 10";

	    // Задаем способ вычисления ряда

	    Serie.UseTransform := True;

	    tr := Serie.Transform.Transform As IMsFormulaTransform;

	    OutVar := tr.Outputs.Item(0);

	    Slice := OutVar.Slices.Add(Null);

	    Selector := tr.CreateSelector;

	    Selector.Slice := Slice;

	    // Задаем формулу расчета

	    Formula := tr.Transform(Selector);

	    Formula.Kind := MsFormulaKind.Deterministic;

	    Determ := Formula.Method As IMsDeterministicTransform;

	    InpVar := tr.Inputs.Add(Serie.SourceStub);

	    Slice := InpVar.Slices.Add(Null);

	    TermInfo := tr.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    Determ.Expression.AsString := TermInfo.TermInnerText + " + 10";

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


После выполнения примера в начало рабочей книги будет добавлен вычисляемый
 ряд, основанный на данных первого ряда рабочей книги.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
