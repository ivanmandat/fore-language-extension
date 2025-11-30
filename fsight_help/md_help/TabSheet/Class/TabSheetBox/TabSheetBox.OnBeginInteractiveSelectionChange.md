# TabSheetBox.OnBeginInteractiveSelectionChange

TabSheetBox.OnBeginInteractiveSelectionChange
-


# TabSheetBox.OnBeginInteractiveSelectionChange


## Синтаксис


Sub OnBeginInteractiveSelectionChange(Sender: Object; Args: [ITabInteractiveSelectionEventArgs](../../Interface/ITabInteractiveSelectionEventArgs/ITabInteractiveSelectionEventArgs.htm));


Begin


//набор операторов;


End Sub OnBeginInteractiveSelectionChange;


## Параметры


Sender. Параметр, возвращающий компонент, сгенерировавший событие.


Args. Параметр, позволяющий определить параметры события.


## Описание


Событие OnBeginInteractiveSelectionChange наступает при начале перемещения выделенной области ячеек в таблице.


## Комментарии


Выделенная область начинает перемещаться в двух случаях:


-
Было начато перемещение выделенного диапазона ячеек.


-
Было начато автозаполнение диапазона на базе какого-либо другого диапазона.


См. также:


[TabSheetBox](TabSheetBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
