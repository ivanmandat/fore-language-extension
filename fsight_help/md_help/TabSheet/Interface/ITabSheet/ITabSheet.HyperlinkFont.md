# ITabSheet.HyperlinkFont

ITabSheet.HyperlinkFont
-


# ITabSheet.HyperlinkFont


## Синтаксис


HyperlinkFont: [ITabFont](../ITabFont/ITabFont.htm);


## Описание


Свойство HyperlinkFont определяет
 параметры оформления гиперссылок, содержащихся в ячейках таблицы. Данное
 оформление перекрывает оформление отдельных ячеек.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки, компонента TabSheetBox
 с идентификатором TabSheetBox1 и компонента UiTabSheet, являющегося источником
 данных для TabSheetBox1.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	    Style: ITabCellStyle;

	    HypFont: ITabFont;

	Begin

	    Tab := TabSheetBox1.Source.GetTabSheet;

	    Style := New TabCellStyle.Create;

	    HypFont := Style.Font;

	    HypFont.Color := GxColor.FromName("Red");

	    HypFont.Size := 12;

	    HypFont.Underline := TriState.OnOption;

	    Tab.HyperlinkFont := HypFont;

	End Sub Button1OnClick;


После выполнения примера, для гиперссылок, отображаемых в компоненте
 TabSheetBox1, будет использоваться единое оформление.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
