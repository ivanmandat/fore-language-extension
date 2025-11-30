# IMetabaseListViewItem

IMetabaseListViewItem
-


# IMetabaseListViewItem


Сборка: ExtCtrls;


## Описание


Интерфейс IMetabaseListViewItem
 содержит свойства и методы элемента компонента [MetabaseListView](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/MetabaseListView.htm).


## Иерархия наследования


           [IListViewItem](ModForms.chm::/Interface/IListViewItem/IListViewItem.htm)


           IMetabaseListViewItem


## Комментарии


Элемент возвращают следующие свойства и методы:


	- [IMetabaseListView.FindByDescriptor](../IMetabaseListView/IMetabaseListView.FindByDescriptor.htm);


	- [IMetabaseListView.FindItemByKey](../IMetabaseListView/IMetabaseListView.FindItemByKey.htm);


	- [IMetabaseListViewItemPopupEventArgs.Item](../IMetabaseListViewItemPopupEventArgs/IMetabaseListViewItemPopupEventArgs.Item.htm).


Также к интерфейсу IMetabaseListViewItem
 могут быть приведены значения свойств, которые компонент [MetabaseListView](UiDevEnv.chm::/02_Components_constructor_forms/02_Additional_components/MetabaseListView.htm)
 наследует от [IListView](ModForms.chm::/Interface/IListView/IListView.htm)
 и которые возвращают тип [IListViewItem](ModForms.chm::/Interface/IListViewItem/IListViewItem.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ObjectDescriptor](IMetabaseListViewItem.ObjectDescriptor.htm)


## Свойства, унаследованные от [IListViewItem](ModForms.chm::/Interface/IListViewItem/IListViewItem.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Checked](modforms.chm::/Interface/IListViewItem/IListViewItem.Checked.htm)
		 Свойство Checked определяет,
		 установлена ли отметка флага для элемента.


		 ![](../../Property_Image.gif)
		 [ColumnText](modforms.chm::/Interface/IListViewItem/ilistviewitem.columntext.htm)
		 Свойство ColumnText
		 определяет текст заданного столбца элемента.


		 ![](../../Property_Image.gif)
		 [Cut](modforms.chm::/Interface/IListViewItem/ilistviewitem.cut.htm)
		 Свойство Cut определяет,
		 будет ли элемент отмечен как вырезанный.


		 ![](../../Property_Image.gif)
		 [Data](modforms.chm::/Interface/IListViewItem/ilistviewitem.data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Focused](modforms.chm::/Interface/IListViewItem/ilistviewitem.focused.htm)
		 Свойство Focused определяет,
		 находится ли элемент компонента в фокусе.


		 ![](../../Property_Image.gif)
		 [Hint](modforms.chm::/Interface/IListViewItem/ilistviewitem.hint.htm)
		 Свойство Hint определяет
		 текст всплывающей подсказки для элемента.


		 ![](../../Property_Image.gif)
		 [ImageIndex](modforms.chm::/Interface/IListViewItem/ilistviewitem.imageindex.htm)
		 Свойство ImageIndex
		 определяет индекс изображения, которое будет располагаться слева
		 от элемента.


		 ![](../../Property_Image.gif)
		 [Indent](modforms.chm::/Interface/IListViewItem/ilistviewitem.indent.htm)
		 Свойство Indent определяет
		 отступ элемента от левой границы колонки компонента.


		 ![](../../Property_Image.gif)
		 [Index](modforms.chm::/Interface/IListViewItem/ilistviewitem.index.htm)
		 Свойство Index возвращает
		 индекс элемента в общем списке элементов.


		 ![](../../Property_Image.gif)
		 [IsVisible](modforms.chm::/Interface/IListViewItem/ilistviewitem.isvisible.htm)
		 Свойство IsVisible
		 возвращает признак расположения элемента в видимой области компонента.


		 ![](../../Property_Image.gif)
		 [ListView](modforms.chm::/Interface/IListViewItem/ilistviewitem.listview.htm)
		 Свойство ListView возвращает
		 объект-родитель.


		 ![](../../Property_Image.gif)
		 [OverlayIndex](modforms.chm::/Interface/IListViewItem/ilistviewitem.overlayindex.htm)
		 Свойство OverlayIndex
		 определяет индекс покрывающей маски.


		 ![](../../Property_Image.gif)
		 [Selected](modforms.chm::/Interface/IListViewItem/ilistviewitem.selected.htm)
		 Свойство Selected определяет
		 признак отметки данного элемента.


		 ![](../../Property_Image.gif)
		 [StateIndex](modforms.chm::/Interface/IListViewItem/ilistviewitem.stateindex.htm)
		 Свойство StateIndex
		 определяет индекс изображения, которое будет отображать состояние
		 элемента.


		 ![](../../Property_Image.gif)
		 [Text](modforms.chm::/Interface/IListViewItem/ilistviewitem.text.htm)
		 Свойство Text определяет
		 текст элемента компонента.


## Методы, унаследованные от [IListViewItem](ModForms.chm::/Interface/IListViewItem/IListViewItem.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CancelEdit](ModForms.chm::/Interface/IListViewItem/IListViewItem.CancelEdit.htm)
		 Метод CancelEdit осуществляет
		 выход из режима редактирования элемента с сохранением изменений.


		 ![](../../Sub_Image.gif)
		 [Delete](ModForms.chm::/Interface/IListViewItem/ilistviewitem.delete.htm)
		 Метод Delete осуществляет
		 удаление элемента компонента.


		 ![](../../Sub_Image.gif)
		 [EditText](ModForms.chm::/Interface/IListViewItem/ilistviewitem.edittext.htm)
		 Метод EditText переводит
		 элемент списка в режим редактирования текста.


		 ![](../../Sub_Image.gif)
		 [MakeVisible](ModForms.chm::/Interface/IListViewItem/ilistviewitem.makevisible.htm)
		 Метод MakeVisible осуществляет
		 прокрутку дерева элементов таким образом, чтобы данный элемент
		 попал в видимую область компонента.


См. также:


[Интерфейсы
 сборки ExtCtrls](../KeExtCtrls_Interfaces.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
