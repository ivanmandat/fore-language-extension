# IDimensionViewer.OnGetNodeImage

IDimensionViewer.OnGetNodeImage
-


# IDimensionViewer.OnGetNodeImage


## Синтаксис


OnGetNodeImage(Sender: Object; Args: [IDimensionNodeGetImageEventArgs](../IDimensionNodeGetImageEventArgs/IDimensionNodeGetImageEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnGetNodeImage используется
 при определении изображения возле элемента дерева.


## Комментарии


Событие актуально, только если для компонента определено свойство [IDimensionViewer.Images](IDimensionViewer.Images.htm).


Событие наступает для каждого элемента дерева в следующих случаях:


	- Изменяются параметры формы: размеры, состояние;


	- Осуществляется обновление содержимого формы;


	- Изменяются параметры компонента: меняется список элементов,
	 сворачивается/разворачивается иерархия, изменяется выделение или фокус
	 у элементов;


	- Осуществляется прокрутка дерева элементов;


	- Осуществляется обновление содержимого компонента.


Используя событие OnGetNodeImage,
 можно отслеживать происходящие изменения и при наступлении определенных
 условий получать или изменять изображение элемента дерева. Индекс элемента,
 для которого сгенерировано текущее событие, будет доступен в свойстве
 [Node](../IDimensionNodeEventArgs/IDimensionNodeEventArgs.Node.htm)
 аргумента события Args. В свойстве
 [ImageIndex](../IDimensionNodeGetImageEventArgs/IDimensionNodeGetImageEventArgs.ImageIndex.htm)
 аргумента события можно получить индекс изображения, которое установлено
 для элемента. Указав новое значение для свойства [ImageIndex](../IDimensionNodeGetImageEventArgs/IDimensionNodeGetImageEventArgs.ImageIndex.htm),
 можно изменить изображение для элемента.


## Пример


Для выполнения примера предполагается наличие формы, расположенного
 на ней компонента DimensionTree с наименованием «DimensionTree1», компонента
 UiDimension, являющегося источником данных для «DimensionTree1» и компонента
 ImageList, содержащего набор изображений. ImageList установлен в свойстве
 Images для компонента «DimensionTree1». UiDimension подключен к какому-либо
 справочнику. Указанная ниже процедура установлена в качестве обработчика
 события OnGetNodeImage для компонента «DimensionTree1».


	Sub DimensionTree1OnGetNodeImage(Sender: Object; Args: IDimensionNodeGetImageEventArgs);

	Begin

	    Select Case Args.State

	        Case DimensionViewerNodeState.None: Args.ImageIndex := -1;

	        Case DimensionViewerNodeState.Selected: Args.ImageIndex := 0;

	        Case DimensionViewerNodeState.Focused: Args.ImageIndex := 1;

	        Case DimensionViewerNodeState.SelectedFocused: Args.ImageIndex := 2;

	        Case DimensionViewerNodeState.Expanded: Args.ImageIndex := 3;

	    End Select;

	End Sub DimensionTree1OnGetNodeImage;


При наступлении события у элемента, для которого оно сгенерировано,
 в соответствии с его состоянием, будет установлено соответствующее изображение.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
