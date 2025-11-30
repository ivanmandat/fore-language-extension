# TreeNodeEditEventArgs.Create

TreeNodeEditEventArgs.Create
-


# TreeNodeEditEventArgs.Create


## Синтаксис


Create(TreeControl: [ITreeControl](../../Interface/ITreeControl/ITreeControl.htm); Node: [ITreeListNode](../../Interface/ITreeListNode/ITreeListNode.htm); Text: String; [Column: Integer = -1]);


## Параметры


TreeControl - компонент, для которого генерируется событие.


Node - вершина, для которого генерируется событие.


Text - текст элемента в колонке, в которой осуществлялось редактирование.


Column - индекс колонки, в которой осуществлялось редактирование.


## Описание


Конструктор Create создает аргумента события, возникающего после выхода из режима редактирования элемента.


См. также:


[TreeNodeEditEventArgs](TreeNodeEditEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
