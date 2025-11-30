# ITabTableStyle.Range

ITabTableStyle.Range
-


# ITabTableStyle.Range


## Синтаксис


Range: [ITabRange](../ITabRange/ITabRange.htm);


## Описание


Свойство Range определяет диапазон
 ячеек, для которых создан стиль оформления.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Range: ITabRange;

	    TSheet: ITabSheet;

	    TTStyles: ITabTableStyles;

	    TStyle: ITabTableStyle;

	    s: String;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    Range := TSheet.View.Selection.Range;

	    TTStyles := Range.TableStyles;

	    TStyle := TTStyles.Add;

	    s := TStyle.Range.Address;

	End Sub Button1OnClick;


В результате выполнения примера в переменной s
 будет храниться адрес диапазона ячеек, для которых создан стиль
 оформления.


См. также:


[ITabTableStyle](ITabTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
