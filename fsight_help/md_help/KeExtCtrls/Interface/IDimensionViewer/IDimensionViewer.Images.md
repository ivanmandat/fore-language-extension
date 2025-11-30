# IDimensionViewer.Images

IDimensionViewer.Images
-


# IDimensionViewer.Images


## Синтаксис


Images: [IImageList](ModForms.chm::/Interface/IImageList/IImageList.htm);


## Описание


Свойство Images определяет компонент,
 изображения которого будут использоваться в компоненте.


## Комментарии


В список доступных значений входят все компоненты [ImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageList.htm)
 и [GlobalImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/GlobalImageList.htm),
 расположенные на форме.


Для установки изображений в заголовках столбцов используется свойство
 [ImageIndex](../IDimensionViewerColumn/IDimensionViewerColumn.ImageIndex.htm).
 Установка изображений для элементов справочников, отображаемых в компоненте,
 осуществляется в событии [OnGetNodeImage](IDimensionViewer.OnGetNodeImage.htm)
 путём изменения свойства [ImageIndex](../IDimensionNodeGetImageEventArgs/IDimensionNodeGetImageEventArgs.ImageIndex.htm)
 аргумента данного события.


См. также:


[IDimensionViewer](IDimensionViewer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
