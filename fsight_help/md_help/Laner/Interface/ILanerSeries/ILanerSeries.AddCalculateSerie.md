# ILanerSeries.AddCalculateSerie

ILanerSeries.AddCalculateSerie
-


# ILanerSeries.AddCalculateSerie


## Синтаксис


AddCalculateSerie(

    SerieName: String;

    [Level: [DimCalendarLevel](KeDims.chm::/Enums/DimCalendarLevel.htm)
 = -1;]

    [Index: Integer = -1]

): [ILanerCalculateSerie](../ILanerCalculateSerie/ILanerCalculateSerie.htm);


## Параметры


SerieName. Наименование добавляемого
 ряда;


Level. Календарная динамика
 добавляемого ряда;


Index. Индекс позиции, в которую
 необходимо добавить ряд.


## Описание


Метод AddCalculateSerie добавляет
 вычисляемый ряд.


## Комментарии


Если параметр Level не задан
 или его значение «-1», то используется календарная динамика, заданная
 в формуле ряда: [IMsFormula.Level](KeMs.chm::/Interface/IMsFormula/IMsFormula.Level.htm).


Если для вычисления значений ряда применяется метод интерполяции или
 коллапса, то параметр Level должен
 быть задан обязательно.


Если параметр Index имеет
 значение «-1», то вычисляемый ряд добавляется в конец коллекции рядов.


## Пример


Для выполнения примера в репозитории предполагается наличие рабочей
 книги с идентификатором WORKBOOK_SERIES, содержащей несколько рядов.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Express, Laner,
 Metabase, Ms.


	Sub UserProc;

	Var

	    mb: IMetabase;

	    WbkObj: IMetabaseObject;

	    EaxAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Series: ILanerSeries;

	    UsingSerie: ILanerSerie;

	    NewSerie: ILanerCalculateSerie;

	    Trasss: IFormulaTransformModel;

	    ms: IMsFormulaTransform;

	    TransformVar: IMsFormulaTransformVariable;

	    Coord: IMsFormulaTransformCoord;

	    Slice: IMsFormulaTransformSlice;

	    selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    Det: IMsDeterministicTransform;

	    Term1: IMsFormulaTerm;

	Begin

	    // Получаем рабочую книгу

	    mb := MetabaseClass.Active;

	    WbkObj := mb.ItemById("WORKBOOK_SERIES").Edit;

	    EaxAn := WbkObj As IEaxAnalyzer;

	    Laner := EaxAn.Laner;

	    // Получаем ряды рабочей книги

	    Series := Laner.Series;

	    // Получаем первый ряд рабочей книги

	    UsingSerie := Series.Item(0) As ILanerSerie;

	    // Добавляем вычисляемый ряд

	    NewSerie := Laner.Series.AddCalculateSerie("", DimCalendarLevel.Year, 0);

	    // Задаем параметры генерации наименования ряда

	    NewSerie.UserName := False;

	    NewSerie.UserFormat := ("Ln(%s)");

	    // Задаем параметры расчета ряда

	    NewSerie.UseTransform := True;

	    Trasss := NewSerie.Transform;

	    // Задаем входную переменную

	    Trasss.AddInputVariable(UsingSerie.Stub);

	    // Задаем формулу расчета

	    ms := Trasss.Transform As IMsFormulaTransform;

	    TransformVar := ms.Outputs.Item(0);

	    Coord := ms.CreateCoord(TransformVar);

	    Slice := TransformVar.Slices.Add(Null);

	    Selector := ms.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := ms.Transform(Selector);

	    Formula.Kind := MsFormulaKind.Deterministic;

	    Det := Formula.Method As IMsDeterministicTransform;

	    TransformVar := ms.Inputs.Add(UsingSerie.Stub);

	    Slice := TransformVar.Slices.Add(Null);

	    Term1 := Det.Operands.Add(Slice);

	    Det.Expression.AsString := "Ln(" + Term1.TermToInnerText + ")";

	    // Сохраняем изменения

	    WbkObj.Save;

	End Sub UserProc;


В результате выполнения примера в рабочую книгу будет добавлен вычисляемый
 ряд, рассчитывающий натуральный логарифм первого ряда.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
