# IFormulaTransformModel.Warnings

IFormulaTransformModel.Warnings
-


# IFormulaTransformModel.Warnings


## Синтаксис


Warnings: [IStringList](ModCollections.chm::/Interface/IStringList/IStringList.htm);


## Описание


Свойство Warnings возвращает предупреждения, возникшие при расчете вычисляемого ряда.


## Комментарии


Предупреждения представлены массивом строк.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на ней кнопки с идентификатором «Button1», компонента LanerBox и компонента UiErAnalyzer с идентификатором «UiErAnalyzer1», являющегося источником данных для LanerBox. В «UiErAnalyzer1» должна быть загружена рабочая книга базы данных временных рядов, которая содержит ряды. В данной базе должен присутствовать пользовательский метод «CalculateLaner».


Добавьте ссылки на системные сборки «Ms», «Cubes», «Dimensions». Пример будет выполняться при нажатии на кнопку.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    laner: ILaner;

    serie: ILanerCalculateSerie;

    transform: IMsFormulaTransform;

    selector: IMsFormulaTransformSelector;

    inputserie: ILanerSerie;

    formula: IMsFormula;

    determ: IMsDeterministicTransform;

    rub: IRubricator;

    s: string;

Begin

    laner := UiErAnalyzer1.ErAnalyzer.Laner;

    laner.BeginUpdate;

    rub := laner.RubricatorInstance.Rubricator;

    inputserie := laner.Series.Item(0);

// Создаем вычисляемый ряд
    serie := laner.Series.AddCalculateSerie("CalculateLaner", DimCalendarLevel.Year);

    Serie.TransformPeriod.PeriodSet := LnTransformPeriodSet.All;

    Serie.TransformPeriod.StartDate := DateTime.ComposeDay(2002, 1, 1);

    Serie.TransformPeriod.EndDate := DateTime.ComposeDay(2009, 1, 1);

    Serie.TransformPeriod.ForecastStartDate := DateTime.ComposeDay(2008, 1, 1);

    serie.UseTransform := True;

// Задаем параметры вычисления ряда
    transform := serie.Transform.Transform As IMsFormulaTransform;

    transform.Outputs.Add(inputserie.Stub);

    selector := transform.CreateSelector;

    selector.Slice := transform.Outputs.Item(0).Slices.Add(Null);

    formula := transform.Transform(selector);

    formula.Level := DimCalendarLevel.Year;

    formula.Kind := MsFormulaKind.Deterministic;

    determ := formula.Method As IMsDeterministicTransform;

    transform.Inputs.Add(inputserie.Stub).Slices.Add(Null);

    determ.Operands.Add(transform.Inputs.Item(0).Slices.Item(0));

    determ.Expression.AsString := "CalculateLaner(" + determ.Operands.Item(0).TermToInnerText + ")";

// Выводим сообщения и предупреждения
    laner.EndUpdate;

    Debug.WriteLine("======Сообщения=====");

    For Each s In serie.Transform.Messages Do

        Debug.WriteLine(s);

    End For;

    Debug.WriteLine("======Предупреждения=====");

    For Each s In serie.Transform.Warnings Do

        Debug.WriteLine(s);

    End For;

End Sub Button1OnClick;


После выполнения примера в рабочую книгу будет добавлен вычисляемый ряд, рассчитываемый методом «CalculateLaner». В окно консоли будут выведены сообщения и предупреждения, полученные при вычислении ряда.


См. также:


[IFormulaTransformModel](IFormulaTransformModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
