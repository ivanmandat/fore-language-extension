# ITabSheet.Clear

ITabSheet.Clear
-


# ITabSheet.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет очистку
 всего содержимого таблицы.


## Комментарии


Удаляются все значения и содержимое ячеек, оформления ячеек, строк и
 столбцов, настройки условных форматов.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента UiTabSheet
 с наименованием «UiTabSheet1» и компонента TabSheetBox.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Tab: ITabSheet;

	Begin

	    Tab := UiTabSheet1.TabSheet;

	    Tab.Clear;

	End Sub Button1OnClick;


После нажатии на кнопку «Button1» данные в таблицы будут удалены.


См. также:


[ITabSheet](ITabSheet.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
