# IEaxTableStyle.ValueChangeStyle

IEaxTableStyle.ValueChangeStyle
-


# IEaxTableStyle.ValueChangeStyle


## Синтаксис


ValueChangeStyle: [ITabCellStyle](TabSheet.chm::/Interface/ITabCellStyle/ITabCellStyle.htm);


## Описание


Свойство ValueChangeStyle определяет
 стиль оформления ячеек с настроенным преобразованием.


## Комментарии


Преобразования задаются свойством [IPivot.ValueType](KePivot.chm::/Interface/IPivot/IPivot.ValueType.htm).


Стиль применяется, только если было установлено одно из преобразований:


	- процент;


	- рост в процентах;


	- прирост в процентах.


## Пример


Для выполнения примера разместите на форме компоненты Button, UiErAnalyzer
 и TabSheetBox с наименованиями «Button1», «UiErAnalyzer1» и «TabSheetBox1»
 соответственно. Для UiErAnalyzer задайте свойству Object экспресс-отчёт.


Добавьте ссылки на системные сборки: Pivot, Express, Drawing, Tab.


Пример является обработчиком события OnClick для компонента «Button1».


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    CellStyle: ITabCellStyle;

	    Pivot: IPivot;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Grid := Eax.Grid;

	    Style := Grid.Style;

	    // Установим стиль преобразования
	 данных

	    CellStyle := Style.ValueChangeStyle;

	    CellStyle.BackgroundColor := GxColor.FromName("LightBlue");

	    CellStyle.CustomFormat := "0,000%";

	    // Установим формат
	 преобразований данных по строкам

	    Pivot := Eax.Pivot;

	    Pivot.ValueType := PivotValueType.Percentage;

	    Pivot.ValueAreaType := PivotValueArea.Row;

	End Sub Button1OnClick;


При нажатии на кнопку для экспресс-отчёта данные будут представлены
 в процентном формате от суммарного значения по строкам, с измененным стилем
 ячеек.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
