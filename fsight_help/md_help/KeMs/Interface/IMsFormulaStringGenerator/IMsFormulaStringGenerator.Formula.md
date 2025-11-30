# IMsFormulaStringGenerator.Formula

IMsFormulaStringGenerator.Formula
-


# IMsFormulaStringGenerator.Formula


## Синтаксис


		Formula: [IMsFormula](../IMsFormula/IMsFormula.htm);


## Описание


Свойство Formula
 возвращает параметры метода, используемого для расчёта модели.


## Пример


Для выполнения примера в репозитории предполагается наличие формы, расположенной
 на ней кнопки с наименованием «Button1», компонента LanerBox
 и компонента UiErAnalyzer с наименованием
 «UiErAnalyzer1», являющегося источником данных для LanerBox.
 В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных
 рядов. Первый ряд рабочей книги должен быть вычислимым.


Пример является обработчиком события OnClick
 для кнопки «Button1».


Добавьте ссылки на системные сборки: Cubes, Dimensions, Ms.


					Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

		Var

		    Laner: ILaner;

		    Series: ILanerSeries;

		    CalcSerie: ILanerCalculateSerie;

		    TransformModel: IFormulaTransformModel;

		    FormulaTransform: IMsFormulaTransform;

		    Formula: IMsFormula;

		    StringGenerator: IMsFormulaStringGenerator;

		    s: String;

		Begin

		    Laner := UiErAnalyzer1.ErAnalyzer.Laner;

		    Series := Laner.Series;

		    CalcSerie := Series.Item(0) As ILanerCalculateSerie;

		    TransformModel := CalcSerie.Transform;

		    FormulaTransform := TransformModel.Transform As IMsFormulaTransform;

		    Formula := FormulaTransform.FormulaItem(0);

		    StringGenerator := Formula.CreateStringGenerator;

		    s := StringGenerator.Execute;

		    Select Case StringGenerator.Formula.Level

		        Case DimCalendarLevel.Year: s := s + " (годовая динамика)";

		        Case DimCalendarLevel.Quarter: s := s + " (квартальная динамика)";

		        Case DimCalendarLevel.Month: s := s + " (месячная динамика)";

		    End Select;

		    CalcSerie.Name := s;

		End Sub Button1OnClick;


В результате выполнения примера в качестве наименования первого ряда
 будет использоваться строковое представление его метода расчёта с указанием
 календарной динамики. Динамика будет указана, если она годовая квартальная
 или месячная.


См. также:


[IMsFormulaStringGenerator](IMsFormulaStringGenerator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
