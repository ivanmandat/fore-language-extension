# IMsMetaModel.SaveLaner

IMsMetaModel.SaveLaner
-


# IMsMetaModel.SaveLaner


## Синтаксис


SaveLaner(Laner: [ILaner](Laner.chm::/Interface/ILaner/ILaner.htm);
 SerieIndices: Array);


## Параметры


Laner. Рабочая область базы
 данных временных рядов.


SerieIndices. Индексы сохраняемых
 рядов, представленные в виде массива.


## Описание


Метод SaveLaner сохраняет модели
 расчета рядов рабочей книги в цепочку метамодели.


## Комментарии


Если значение параметра SerieIndices = Null, то будут сохранены все
 ряды.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием Button1, компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием UiErAnalyzer1, являющегося источником данных
 для TabSheetBox. В UiErAnalyzer1 должна быть загружена рабочая книга базы
 данных временных рядов. В контейнере моделирования данной базы должна
 присутствовать метамодель OBJ_METAMODEL.


Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    ActiveMetabase: IMetabase;

    ErAn: IEaxAnalyzer;

    Cont: IMetabaseObjectDescriptor;

    Ruby: IRubricator;

    Laner: ILaner;

    MModel: IMsMetaModel;

    Serie, CalcSerie: ILanerCalculateSerie;

    Ar: Array[1] Of Integer;

    Series: ILanerSeries;

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

    Ar[0] := Series.Count - 1;

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

    Ruby := Laner.RubricatorInstance.Rubricator;

    Cont := Ruby.ModelSpace;

    ActiveMetabase := MetabaseClass.Active;

    MModel := ActiveMetabase.FetchItemById("OBJ_METAMODEL", Cont.Key).Edit As IMsMetaModel;

    MModel.SaveLaner(Laner, Ar);

    (MModel As IMetabaseObject).Save;

End Sub Button1OnClick;


После выполнения примера в рабочую книгу будет добавлен новый вычисляемый
 ряд. Затем модель расчета данного ряда будет добавлена в цепочку метамодели
 OBJ_METAMODEL.


См. также:


[IMsMetaModel](IMsMetaModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
