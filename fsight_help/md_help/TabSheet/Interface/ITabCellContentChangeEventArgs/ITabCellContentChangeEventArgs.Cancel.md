# ITabCellContentChangeEventArgs.Cancel

ITabCellContentChangeEventArgs.Cancel
-


# ITabCellContentChangeEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет:
 отменять ли изменения, сделанные в ячейке таблицы. Если значение данного
 свойства True, то изменения, произведенные
 в ячейке таблицы, будут отменены. По умолчанию значение свойства Cancel - False.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события [OnChangeCellContent](../../Class/TabSheetBox/TabSheetBox.OnChangeCellContent.htm)
 (изменение содержимого в ячейке таблицы) для компонента TabSheetBox с
 наименованием «TabSheetBox1».


	Sub TabSheetBox1OnChangeCellContent(Sender: Object; Args: ITabCellContentChangeEventArgs);

	Begin

	    Args.Cancel := True;

	End Sub TabSheetBox1OnChangeCellContent;


После выполнения примера изменения, производимые в ячейках таблицы,
 будут отменяться. Таким образом, ввод значений в таблицу станет невозможным.


См. также:


[ITabCellContentChangeEventArgs](ITabCellContentChangeEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
