# ITreeControl.Images

ITreeControl.Images
-


# ITreeControl.Images


## Синтаксис


Images: [IImageList](../IImageList/IImageList.htm);


## Описание


Свойство Images определяет компонент [ImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageList.htm), изображения которого будут использоваться в компоненте.


## Комментарии


В список доступных значений входят все компоненты [ImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageList.htm) и [GlobalImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/GlobalImageList.htm), расположенные на форме.


Для установки изображений в заголовках столбцов используйте свойство [ITreeListColumn.ImageIndex](../ITreeListColumn/ITreeListColumn.ImageIndex.htm). Установка изображений для элементов осуществляется в свойстве [ITreeListNode.ImageIndex](../ITreeListNode/ITreeListNode.ImageIndex.htm). Также изменить изображение для элемента можно в событии [OnGetNodeImage](ITreeControl.OnGetNodeImage.htm) путем изменения свойства [Result](../ITreeNodeGetImageEventArgs/ITreeNodeGetImageEventArgs.Result.htm) аргумента данного события.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
