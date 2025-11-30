# ITabCellStyle.BorderWeight

ITabCellStyle.BorderWeight
-


# ITabCellStyle.BorderWeight


## Синтаксис


BorderWeight(Index: [TabBorder](../../Enums/TabBorder.htm)):
 [TabBorderWeight](../../Enums/TabBorderWeight.htm);


## Параметры


Index — определяет
 границу ячейки, у которой нужно определить толщину линии.


## Описание


Свойство BorderColor определяет
 толщину линии указанной границы ячеек таблицы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiTabSheet с наименованием «UiTabSheet1». «UiTabSheet1» является источником
 данных для компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TRange: ITabRange;

	    Style: ITabCellStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TRange := TSheet.ParseRange("A0:B0");

	    Style := TRange.Style;

	    Style.BorderStyle(TabBorder.EdgeBottom) := TabBorderStyle.Continuous;

	    Style.BorderColor(TabBorder.EdgeBottom) := GxColor.FromName("Green");

	    Style.BorderWeight(TabBorder.EdgeBottom) := TabBorderWeight.Medium;

	End Sub Button1OnClick;


При нажатии на кнопку для ячеек в диапазоне «A0:B0» будет настроена
 нижняя граница. Нижняя граница будет выделена сплошной линией, средней
 толщины, красного цвета.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
