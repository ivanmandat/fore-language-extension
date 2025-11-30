# ITabTableStyles.Count

ITabTableStyles.Count
-


# ITabTableStyles.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 стилей оформления в коллекции.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TTStyles: ITabTableStyles;

	    i: Integer;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TTStyles := TSheet.TableStyles;

	    i := TTStyles.Count;

	End Sub Button1OnClick;


После выполнения примера, в переменной i
 будет храниться количество стилей оформления в коллекции.


См. также:


[ITabTableStyles](ITabTableStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
