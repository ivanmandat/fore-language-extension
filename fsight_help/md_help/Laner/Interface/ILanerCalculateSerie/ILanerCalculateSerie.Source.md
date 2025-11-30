# ILanerCalculateSerie.Source

ILanerCalculateSerie.Source
-


# ILanerCalculateSerie.Source


## Синтаксис


Source: [IRubricatorFactor](KeCubes.chm::/Interface/IRubricatorFactor/IRubricatorFactor.htm);


## Описание


Свойство Source определяет источник
 вычисляемого ряда.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Express, ExtCtrls, Forms,
 Laner, Ms, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

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

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Laner.BeginUpdate;

	    Series := Laner.Series;

	    CalcSerie := Series.Item(0) As ILanerCalculateSerie;

	    Serie := Series.AddCalculateSerieAsSource(CalcSerie.Source);

	    Serie.Name := Serie.SourceStub.Name + " + 10";

	    Serie.UseTransform := True;

	    tr := Serie.Transform.Transform As IMsFormulaTransform;

	    OutVar := tr.Outputs.Item(0);

	    Slice := OutVar.Slices.Add(Null);

	    Selector := tr.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := tr.Transform(Selector);

	    Formula.Kind := MsFormulaKind.Deterministic;

	    Determ := Formula.Method As IMsDeterministicTransform;

	    InpVar := tr.Inputs.Add(Serie.SourceStub);

	    Slice := InpVar.Slices.Add(Null);

	    TermInfo := tr.CreateTermInfo;

	    TermInfo.Slice := Slice;

	    Determ.Expression.AsString := TermInfo.TermInnerText + " + 10";

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера в рабочую книгу будет добавлен вычисляемый
 ряд, основанный на данных первого ряда рабочей книги.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
