# IPivotFilter.Elements

IPivotFilter.Elements
-


# IPivotFilter.Elements


## Синтаксис


Elements: [PivotFilterElements](../../Enums/PivotFilterElements.htm);


## Описание


Свойство Elements определяет
 элемент таблицы, по которому будет осуществляться фильтрация.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием "Button1", компонента TabSheetBox
 и компонента UiErAnalyzer с наименованием
 "UiErAnalyzer1", являющегося источником данных для TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    OLAP: IEaxAnalyzer;

	    Pivot: IPivot;

	    Filter: IPivotFilter;

	Begin

	    OLAP := UiErAnalyzer1.ErAnalyzer;

	    Pivot := OLAP.Pivot;

	    Filter := Pivot.Filter;

	    Filter.Area := PivotFilterArea.Table;

	    Filter.ConditionType := PivotFilterType.NLAandNGB;

	    Filter.ConditionValueA := 100;

	    Filter.ConditionValueB := 200;

	    Filter.Elements := PivotFilterElements.Columns;

	    Filter.SuppressZeros := True;

	    Filter.SuppressEmpty := True;

	    Filter.UseCondition := True;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет осуществлена фильтрация
 данных таблицы экспресс-отчета, загруженного в компонент "UiErAnalyzer1".
 Будут отфильтрованы данные по столбцам, значения в которых находятся в
 диапазоне [100,200]. Так же будут отфильтрованы столбцы, содержащие нулевые
 либо пустые значения.


См. также:


[IPivotFilter](IPivotFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
