# TreeNodeActionEventArgs.Create

TreeNodeActionEventArgs.Create
-


# TreeNodeActionEventArgs.Create


## Синтаксис


Create(TreeControl: [ITreeControl](../../Interface/ITreeControl/ITreeControl.htm); Node: [ITreeListNode](../../Interface/ITreeListNode/ITreeListNode.htm); AllowAction: Boolean; [Column: Integer = -1]);


## Параметры


TreeControl - компонент, для которого генерируется событие.


Node - вершина, для которой генерируется событие.


AllowAction - параметр, определяющий будет ли производиться действие.


Column - номер колонки, в которой осуществляется переход в режим редактирования элемента. Свойство актуально только для события [OnEditing](../../Interface/ITreeControl/ITreeControl.OnEditing.htm).


## Описание


Конструктор Create создает аргумент событий, возникающих перед каким-либо действием над вершиной дерева компонентов [TreeCombo](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeCombo.htm) и [TreeList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeList.htm).


См. также:


[TreeNodeActionEventArgs](TreeNodeActionEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
