# ITabTableStyles.Move

ITabTableStyles.Move
-


# ITabTableStyles.Move


## Синтаксис


Move(IndexFrom: Integer, IndexTo: Integer);


## Параметры


IndexFrom - индекс позиции
 стиля, который необходимо переместить.


IndexTo - индекс позиции, в
 которую необходимо переместить стиль оформления.


## Описание


Метод Move осуществляет перемещение
 стиля оформления таблицы в коллекции.


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

	    TStyle := TTStyles.Add;

	    TTStyles.Move(0, 1);

	End Sub Button1OnClick;


После выполнения примера, первый стиль будет перемещен на вторую позицию
 в коллекции.


См. также:


[ITabTableStyles](ITabTableStyles.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
