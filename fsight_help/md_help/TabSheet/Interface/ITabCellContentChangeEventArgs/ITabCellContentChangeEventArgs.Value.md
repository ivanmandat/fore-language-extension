# ITabCellContentChangeEventArgs.Value

ITabCellContentChangeEventArgs.Value
-


# ITabCellContentChangeEventArgs.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 в ячейке таблицы.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события [OnChangeCellContent](../../Class/TabSheetBox/TabSheetBox.OnChangeCellContent.htm)
 (изменение содержимого в ячейке таблицы) для компонента TabSheetBox с
 наименованием «TabSheetBox1».


	Sub TabSheetBox1OnChangeCellContent(Sender: Object; Args: ITabCellContentChangeEventArgs);

	Begin

	    If Args.Type = TabCellContentChange.Formula Then

	        WinApplication.InformationBox("Была введена формула: " + Args.Value);

	    End If;

	End Sub TabSheetBox1OnChangeCellContent;


Если при изменении значения в ячейке таблицы была введена или изменена
 формула, откроется информационное сообщение с текстом данной формулы.


См. также:


[ITabCellContentChangeEventArgs](ITabCellContentChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
