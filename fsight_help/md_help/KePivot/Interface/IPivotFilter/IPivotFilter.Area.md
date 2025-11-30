# IPivotFilter.Area

IPivotFilter.Area
-


# IPivotFilter.Area


## Синтаксис


Area: [PivotFilterArea](../../Enums/PivotFilterArea.htm);


## Описание


Свойство Area определяет область,
 для которой применяется фильтрация данных.


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

	    Range: IPivotFilterRange;

	Begin

	    OLAP := UiErAnalyzer1.ErAnalyzer;

	    Pivot := OLAP.Pivot;

	    Filter := Pivot.Filter;

	    Filter.ConditionType := PivotFilterType.GA;

	    Filter.ConditionValueA := 100;

	    Filter.Elements := PivotFilterElements.Rows;

	    Range := Filter.Range;

	    Range.Left := 0;

	    Range.Right := 0;

	    Range.Top := 9;

	    Range.Bottom := 9;

	    Filter.Area := PivotFilterArea.Range;

	    Filter.UseCondition := True;

	End Sub Button1OnClick;


После выполнения примера при нажатии на кнопку будет осуществлена фильтрация
 данных в заданном диапазоне таблицы экспресс-отчета, загруженного в компонент
 "UiErAnalyzer1". Будут отфильтрованы данные по строкам, значения
 в которых больше 100.


См. также:


[IPivotFilter](IPivotFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
