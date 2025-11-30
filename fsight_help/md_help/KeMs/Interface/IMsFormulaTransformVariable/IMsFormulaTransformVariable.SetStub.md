# IMsFormulaTransformVariable.SetStub

IMsFormulaTransformVariable.SetStub
-


# IMsFormulaTransformVariable.SetStub


## Синтаксис


SetStub(Value: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm));


## Параметры


Value. Источник данных.


## Описание


Метод SetStub
 устанавливает новый источник данных для переменной.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных
 для TabSheetBox. В «UiErAnalyzer1» должна быть загружена рабочая книга
 базы данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


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

    Serie := Series.Item(0) As ILanerCalculateSerie;

    Serie.UseTransform := True;

    tr := Serie.Transform.Transform As IMsFormulaTransform;

    Serie.Name := " + 10";

    OutVar := tr.Outputs.Item(0);

    Slice := OutVar.Slices.Add(Null);

    Selector := tr.CreateSelector;

    Selector.Slice := Slice;

    Formula := tr.Transform(Selector);

    Formula.Kind := MsFormulaKind.Deterministic;

    Determ := Formula.Method As IMsDeterministicTransform;

    InpVar := tr.Inputs.Add(Serie.SourceStub);

    CalcSerie := Series.Item(1) As ILanerCalculateSerie;

    InpVar.SetStub(CalcSerie.SourceStub);

    Slice := InpVar.Slices.Add(Null);

    TermInfo := tr.CreateTermInfo;

    TermInfo.Slice := Slice;

    Determ.Expression.AsString := TermInfo.TermInnerText + " + 10";

    Laner.EndUpdate;

End Sub Button1OnClick;


После выполнения примера значения первого ряда рабочей книги будет рассчитываться
 по формуле: значения входного ряда увеличенные на десять. Источником данных
 для входного ряда будет установлен второй ряд рабочей книги.


См. также:


[IMsFormulaTransformVariable](IMsFormulaTransformVariable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
