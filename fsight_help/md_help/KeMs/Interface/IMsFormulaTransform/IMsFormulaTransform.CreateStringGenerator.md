# IMsFormulaTransform.CreateStringGenerator

IMsFormulaTransform.CreateStringGenerator
-


# IMsFormulaTransform.CreateStringGenerator


## Синтаксис


CreateStringGenerator: [IMsTransformStringGenerator](../IMsTransformStringGenerator/IMsTransformStringGenerator.htm);


## Описание


Метод CreateStringGenerator
 создает генератор строкового представления параметров расчёта.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором Button1, компонента LanerBox и компонента
 UiErAnalyzer с наименованием UiErAnalyzer1, являющегося источником данных
 для LanerBox. В UiErAnalyzer1 должна быть загружена рабочая область базы
 данных временных рядов. Первый ряд рабочей области должен быть вычислимым.


Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Laner: ILaner;

    Series: ILanerSeries;

    CalcSerie: ILanerCalculateSerie;

    TransformModel: IFormulaTransformModel;

    FormulaTransform: IMsFormulaTransform;

    StringGenerator: IMsTransformStringGenerator;

    Inp: Integer;

Begin

    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

    Series := Laner.Series;

    CalcSerie := Series.Item(0) As ILanerCalculateSerie;

    TransformModel := CalcSerie.Transform;

    FormulaTransform := TransformModel.Transform As IMsFormulaTransform;

    StringGenerator := FormulaTransform.CreateStringGenerator;

    CalcSerie.Name := StringGenerator.Execute;

    Inp := StringGenerator.Transform.Inputs.Count;

    Debug.WriteLine("Число входных рядов: " + Inp.ToString);

End Sub Button1OnClick;


После выполнения примера в качестве наименования первого ряда будет
 использоваться строковое представление его параметров расчёта. В окно
 консоли будет выведено число входных рядов для вычисляемого ряда.


См. также:


[IMsFormulaTransform](IMsFormulaTransform.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
