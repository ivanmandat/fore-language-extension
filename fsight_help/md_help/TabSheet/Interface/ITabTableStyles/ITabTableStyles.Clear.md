# ITabTableStyles.Clear

ITabTableStyles.Clear
-


# ITabTableStyles.Clear


## Синтаксис


Clear;


## Описание


Метод Clear очищает коллекцию
 стилей оформления таблицы.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TTStyles: ITabTableStyles;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TTStyles := TSheet.TableStyles;

	    TTStyles.Clear;

	End Sub Button1OnClick;


После выполнения примера, коллекция стилей оформления таблицы будет
 очищена.


См. также:


[ITabTableStyles](ITabTableStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
