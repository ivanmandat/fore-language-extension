# ITreeControl.StateImages

ITreeControl.StateImages
-


# ITreeControl.StateImages


## Синтаксис


StateImages: [IImageList](../IImageList/IImageList.htm);


## Описание


Свойство StateImages определяет
 список изображений, используемых для индикации состояния элементов дерева
 компонентов [TreeList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeList.htm)
 и [TreeCombo](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/TreeCombo.htm).


## Комментарии


В список доступных значений входят все компоненты [ImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/ImageList.htm)
 и [GlobalImageList](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/GlobalImageList.htm),
 расположенные на форме.


Если для компонента установлено свойство StateImages
 и [Checkboxes](ITreeControl.Checkboxes.htm) = True,
 то для отображения состояния флажка (отмечен/не отмечен) элементов будут
 использоваться два первых изображения из коллекции StateImages,
 изображение с индексом 0 для не отмеченных, изображение с индексом 1 -
 для отмеченных флажков.


См. также:


[ITreeControl](ITreeControl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
