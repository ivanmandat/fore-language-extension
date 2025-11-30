# ILanerCalculateSerie.Calculate

ILanerCalculateSerie.Calculate
-


# ILanerCalculateSerie.Calculate


## Синтаксис


Calculate;


## Описание


Метод Calculate осуществляет
 расчет вычисляемого ряда.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 TabSheetBox, UiErAnalyzer с наименованиями Button1, TabSheetBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для TabSheetBox1.
 В UiErAnalyzer1 должна быть загружена рабочая область базы данных временных
 рядов, в таблице данных которой должно быть более одного ряда данных.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Cubes, Dimensions, Express, ExtCtrls,
 Forms, Laner, Ms, Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Laner: Ilaner;

	    UsingSerie, UsingSerie2: ILanerSerie;

	    NewSerie: ILanerCalculateSerie;

	    Str: String;

	    Trasss: IFormulaTransformModel;

	    ms: IMsFormulaTransform;

	    TransformVar: IMsFormulaTransformVariable;

	    Coord: IMsFormulaTransformCoord;

	    Slice: IMsFormulaTransformSlice;

	    selector: IMsFormulaTransformSelector;

	    Formula: IMsFormula;

	    Det: IMsDeterministicTransform;

	    Term1, Term2: IMsFormulaTerm;

	Begin

	    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

	    Laner.BeginUpdate;

	    UsingSerie := Laner.Series.Item(0) As ILanerSerie;

	    UsingSerie2 := Laner.Series.Item(1) As ILanerSerie;

	    Str := "Summ_(" + UsingSerie.Name + " , " + UsingSerie2.Name + ")";

	    NewSerie := Laner.Series.AddCalculateSerie(Str);

	    Trasss := NewSerie.Transform;

	    Trasss.AddInputVariable(UsingSerie.Stub);

	    Trasss.AddInputVariable(UsingSerie2.Stub);

	    ms := Trasss.Transform As IMsFormulaTransform;

	    TransformVar := ms.Outputs.Item(0);

	    Coord := ms.CreateCoord(TransformVar);

	    Slice := TransformVar.Slices.Add(Null);

	    Selector := ms.CreateSelector;

	    Selector.Slice := Slice;

	    Formula := ms.Transform(Selector);

	    Formula.Kind := MsFormulaKind.Deterministic;

	    Formula.Level := DimCalendarLevel.Year;

	    Det := Formula.Method As IMsDeterministicTransform;

	    TransformVar := ms.Inputs.Add(UsingSerie.Stub);

	    Slice := TransformVar.Slices.Add(Null);

	    TransformVar := ms.Inputs.Add(UsingSerie.Stub);

	    Slice := TransformVar.Slices.Add(Null);

	    Term1 := Det.Operands.Add(Slice);

	    TransformVar := ms.Inputs.Add(UsingSerie2.Stub);

	    Slice := TransformVar.Slices.Add(Null);

	    Term2 := Det.Operands.Add(Slice);

	    Det.Expression.AsString := Term1.TermToInnerText + " + " + Term2.TermToInnerText;

	    NewSerie.Calculate;

	    Laner.EndUpdate;

	End Sub Button1OnClick;


После выполнения примера будет добавлен новый вычисляемый ряд, представляющий
 собой сумму данных первых двух рядов.


См. также:


[ILanerCalculateSerie](ILanerCalculateSerie.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
