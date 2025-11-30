# TabSheetBox.OnInteractiveSelectionChange

TabSheetBox.OnInteractiveSelectionChange
-


# TabSheetBox.OnInteractiveSelectionChange


## Синтаксис


Sub OnInteractiveSelectionChange(Sender: Object; Args: [ITabInteractiveSelectionChangeEventArgs](../../Interface/ITabInteractiveSelectionChangeEventArgs/ITabInteractiveSelectionChangeEventArgs.htm));


Begin


//набор операторов;


End Sub OnInteractiveSelectionChange;


## Параметры


Sender. Параметр, возвращающий компонент, сгенерировавший событие.


Args. Параметр, позволяющий определить параметры события.


## Описание


Событие OnInteractiveSelectionChange наступает во время перемещения выделенной области ячеек в таблице.


## Комментарии


Используя свойства аргумента данного события можно анализировать куда производится перемещение выделенной области и при необходимости отменить процесс перемещения.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
