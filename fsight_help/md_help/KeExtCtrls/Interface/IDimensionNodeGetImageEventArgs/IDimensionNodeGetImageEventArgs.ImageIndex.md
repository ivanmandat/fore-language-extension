# IDimensionNodeGetImageEventArgs.ImageIndex

IDimensionNodeGetImageEventArgs.ImageIndex
-


# IDimensionNodeGetImageEventArgs.ImageIndex


## Синтаксис


ImageIndex: Integer;


## Описание


Свойство ImageIndex определяет
 индекс изображения, которое будет располагаться слева от текста элемента
 в первом столбце компонента.


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


[IDimensionNodeGetImageEventArgs](IDimensionNodeGetImageEventArgs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
