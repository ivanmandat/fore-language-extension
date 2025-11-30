# ITabTableStyles.Remove

ITabTableStyles.Remove
-


# ITabTableStyles.Remove


## Синтаксис


Remove(Index: Integer): Boolean;


## Параметры


Index - индекс стиля оформления
 в коллекции, который необходимо удалить.


## Описание


Метод Remove удаляет указанный
 стиль из коллекции. Возвращает True
 в случае удачного удаления.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    TSheet: ITabSheet;

	    TTStyles: ITabTableStyles;

	    TStyle: ITabTableStyle;

	Begin

	    TSheet := UiTabSheet1.TabSheet;

	    TTStyles := TSheet.TableStyles;

	    TStyle := TTStyles.Add;

	    TTStyles.Remove(0);

	End Sub Button1OnClick;


После выполнения примера, из коллекции будет удален первый стиль оформления.


См. также:


[ITabTableStyles](ITabTableStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
