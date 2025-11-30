# ITabCellBeforeEditEventArgs.Cancel

ITabCellBeforeEditEventArgs.Cancel
-


# ITabCellBeforeEditEventArgs.Cancel


## Синтаксис


Cancel: Boolean;


## Описание


Свойство Cancel определяет,
 будет ли производиться редактирование значения ячейки.


## Пример


Для выполнения примера предполагается наличие формы. На форме расположен
 компонент TabSheetBox и компонент UiTabSheet с наименованием «UiTabSheet1»,
 который является источником данных для компонента TabSheetBox. Данная
 процедура установлена в качестве обработчика события [OnBeforeEdit](../../Class/TabSheetBox/TabSheetBox.OnBeforeEdit.htm).


	Sub TabSheetBox1OnBeforeEdit(Sender: Object; Args: ITabCellBeforeEditEventArgs);

	Begin

	    Args.Cancel := True;

	End Sub TabSheetBox1OnBeforeEdit;


После выполнения события будет отменено редактирование значения в выделенной
 ячейке.


См. также:


[ITabCellBeforeEditEventArgs](ITabCellBeforeEditEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
