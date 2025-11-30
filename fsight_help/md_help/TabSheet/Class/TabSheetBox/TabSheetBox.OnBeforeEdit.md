# TabSheetBox.OnBeforeEdit

TabSheetBox.OnBeforeEdit
-


# TabSheetBox.OnBeforeEdit


## Синтаксис


Sub TabSheetBoxOnBeforeEdit(Sender:
 Object; Args: [ITabCellBeforeEditEventArgs](../../Interface/ITabCellBeforeEditEventArgs/ITabCellBeforeEditEventArgs.htm));


Begin


//набор операторов


End Sub
 TabSheetBoxOnBeforeEdit;


## Параметры


Sender - параметр, указывающий
 на компонент, в котором произошло событие.


Args - параметр, позволяющий
 определить ячейку, в которой произошло событие.


## Описание


Событие OnBeforeEdit возникает
 перед началом редактирования ячейки компонента TabSheetBox.


## Пример


Для выполнения примера данную процедуру необходимо назначить в качестве
 обработчика события OnBeforeEdit
 для компонента TabSheetBox с идентификатором
 «TabSheetBox1».


	Sub TabSheetBox1OnBeforeEdit(Sender: Object; Args: ITabCellBeforeEditEventArgs);

	Begin

	    Args.Cancel:=True;

	End Sub TabSheetBox1OnBeforeEdit;


После выполнения события будет отменено редактирование выделенной ячейки.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
