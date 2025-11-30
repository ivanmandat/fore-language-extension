# IPivot.FixedElementsAggregation

IPivot.FixedElementsAggregation
-


# IPivot.FixedElementsAggregation


## Синтаксис


FixedElementsAggregation: [PivotAggregationOperation](../../Enums/PivotAggregationOperation.htm);


## Описание


Свойство FixedElementsAggregation
 определяет способ агрегации при множественной отметке в фиксированных
 измерениях.


## Комментарии


Если свойству установлено значение [PivotAggregationOperation.None](../../Enums/PivotAggregationOperation.htm),
 то в фиксированных измерениях не будет осуществляться агрегация и не будет
 доступна множественная отметка элементов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiErAnalyzer
 с наименованием «UiErAnalyzer1» и компонентов TabSheetBox
 и ErAnalyzerDimPanel, используемых
 для отображения данных экспресс-отчёта. «UiErAnalyzer1» подключён к какому-либо
 экспресс-отчёту и является источником данных для TabSheetBox
 и ErAnalyzerDimPanel.


			Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

Var

    Exp: IEaxAnalyzer;

    Pivot: IPivot;

Begin

    Exp := UiErAnalyzer1.ErAnalyzer;

    Pivot := Exp.Pivot;

    Pivot.FixedElementsAggregation := PivotAggregationOperation.Sum;

End Sub Button1OnClick;


При нажатии на кнопку будет установлена агрегация значений по фиксированным
 измерениям источника данных. В фиксированных измерениях будет доступна
 множественная отметка, для выделенных элементов будет рассчитываться сумма
 значений.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
