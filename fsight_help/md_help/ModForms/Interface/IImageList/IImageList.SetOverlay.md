# IImageList.SetOverlay

IImageList.SetOverlay
-


# IImageList.SetOverlay


## Синтаксис


SetOverlay(Image: Integer; Overlay: Integer): Boolean;


## Параметры


Image. Индекс изображения, которое будет использоваться как покрывающая маска. Допустимое значение параметра находится в диапазоне [0, [Count](IImageList.Count.htm)).


Overlay. Индекс покрывающей маски, который присваивается изображению. Данный индекс в дальнейшем указывается в качестве значения для свойств [IListViewItem.OverlayIndex](../IListViewItem/IListViewItem.OverlayIndex.htm) или [ITreeListNode.OverlayIndex](../ITreeListNode/ITreeListNode.OverlayIndex.htm). Допустимое значение параметра находится в диапазоне [0, 14].


## Описание


Метод SetOverlay идентифицирует изображение в списке как изображение, которое может быть использовано как покрывающая маска.


## Комментарии


Покрывающая маска - это рисунок, расположенный над пиктограммой элемента компонента.


Метод возвращает значение True, если идентификация изображения прошла удачно.


Метод вернет значение False, если значение какого-либо параметра выходит за пределы допустимого диапазона.


## Пример


Пример использования метода приведен в описании свойств [IListViewItem.OverlayIndex](../IListViewItem/IListViewItem.OverlayIndex.htm) и [ITreeListNode.OverlayIndex](../ITreeListNode/ITreeListNode.OverlayIndex.htm).


См. также:


[IImageList](IImageList.htm) | [IListViewItem.OverlayIndex](../IListViewItem/IListViewItem.OverlayIndex.htm) | [ITreeListNode.OverlayIndex](../ITreeListNode/ITreeListNode.OverlayIndex.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
