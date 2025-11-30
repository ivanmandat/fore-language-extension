# ListBox

ListBox
-


# ListBox


Пространство имен: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


ListBox


## Описание


Класс ListBox реализует компонент
 [ListBox](../../Components/ListBox/ListBox.htm), представляющий
 собой список.


## Синтаксис


PP.initClass(PP.Ui.ListBox, PP.Ui.[Control](dhtmlUi.chm::/Classes/control/control.htm),
 "ListBox");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ListBox](dhtmlList.chm::/Classes/ListBox/Constructor_ListBox.htm)
		 Конструктор ListBox
		 создает экземпляр компонента [ListBox](dhtmlList.chm::/components/listbox/listbox.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [EmptySelection](dhtmlList.chm::/classes/listbox/listbox.emptyselection.htm)
		 Свойство EmptySelection
		 определяет возможность выбора пустого множества элементов.


		 ![](../../Property_Image.gif)
		 [EnableEdit](dhtmlList.chm::/classes/listbox/listbox.enableedit.htm)
		 Свойство EnableEdit
		 определяет возможность редактирования элементов списка.


		 ![](../../Property_Image.gif)
		 [EnableKeyboard](dhtmlList.chm::/classes/listbox/listbox.enablekeyboard.htm)
		 Свойство EnableKeyboard
		 определяет возможность выделять элементы списка при помощи клавиш
		 UP, DOWN.


		 ![](../../Property_Image.gif)
		 [ImageList](dhtmlList.chm::/Classes/ListBox/ListBox.ImageList.htm)
		 Свойство ImageList
		 определяет набор пиктограмм для компонента ListBox.


		 ![](../../Property_Image.gif)
		 [IsScrollToSelected](dhtmlList.chm::/Classes/ListBox/Listbox.isscrolltoselected.htm)
		 Свойство IsScrollToSelected
		 определяет признак прокручивания списка до выделенного
		 элемента.


		 ![](../../Property_Image.gif)
		 [Items](dhtmlList.chm::/Classes/ListBox/Listbox.items.htm)
		 Свойство Items содержит
		 массив элементов списка.


		 ![](../../Property_Image.gif)
		 [MultiSelect](dhtmlList.chm::/Classes/ListBox/Listbox.Multiselect.htm)
		 Свойство MultiSelect определяет,
		 доступен ли множественный выбор элементов списка.


		 ![](../../Property_Image.gif)
		 [Orientation](dhtmlList.chm::/classes/listbox/listbox.orientation.htm)
		 Свойство Orientation
		 определяет ориентацию компонента ListBox.


		 ![](../../Property_Image.gif)
		 [SelectedIndex](dhtmlList.chm::/classes/listbox/listbox.selectedindex.htm)
		 Свойство SelectedIndex
		 определяет индекс выделенной строки списка.


		 ![](../../Property_Image.gif)
		 [SelectedItem](dhtmlList.chm::/classes/listbox/listbox.selecteditem.htm)
		 Свойство SelectedItem
		 определяет выделенный элемент списка.


		 ![](../../Property_Image.gif)
		 [SelectOnMouseDown](dhtmlList.chm::/classes/listbox/listbox.selectonmousedown.htm)
		 Свойство SelectOnMouseDown
		 определяет признак выделения элементов при нажатии на них.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [addItem](dhtmlList.chm::/classes/listbox/listbox.additem.htm)
		 Метод addItem добавляет
		 новый элемент в список.


		 ![](../../Sub_Image.gif)
		 [beginUpdate](dhtmlList.chm::/classes/listbox/listbox.beginupdate.htm)
		 Метод beginUpdate устанавливает
		 признак того, что список обновляется.


		 ![](../../Sub_Image.gif)
		 [clear](dhtmlList.chm::/classes/listbox/listbox.clear.htm)
		 Метод clear удаляет
		 все элементы из списка.


		 ![](../../Sub_Image.gif)
		 [clearSelection](dhtmlList.chm::/classes/listbox/listbox.clearselection.htm)
		 Метод clearSelection
		 предназначен для сброса выделения.


		 ![](../../Sub_Image.gif)
		 [endUpdate](dhtmlList.chm::/classes/listbox/listbox.endupdate.htm)
		 Метод endUpdate убирает
		 признак того, что список обновляется.


		 ![](../../Sub_Image.gif)
		 [filterByText](dhtmlList.chm::/classes/listbox/listbox.filterbytext.htm)
		 Метод filterByText
		 осуществляет фильтрацию элементов списка по строке.


		 ![](../../Sub_Image.gif)
		 [getActiveItem](dhtmlList.chm::/classes/listbox/listbox.getactiveitem.htm)
		 Метод getActiveItem
		 возвращает выделенный элемент списка.


		 ![](../../Sub_Image.gif)
		 [getItemByPoint](dhtmlList.chm::/classes/listbox/listbox.getitembypoint.htm)
		 Метод getItemByPoint
		 возвращает элемент списка по заданным координатам.


		 ![](../../Sub_Image.gif)
		 [getLastItemClick](dhtmlList.chm::/classes/listbox/listbox.getlastitemclick.htm)
		 Метод getLastItemClick
		 возвращает последний выделенный элемент списка.


		 ![](../../Sub_Image.gif)
		 [getLayoutItems](dhtmlList.chm::/classes/listbox/listbox.getlayoutitems.htm)
		 Метод getLayoutItems
		 возвращает массив элементов списка.


		 ![](../../Sub_Image.gif)
		 [getScrollBox](dhtmlList.chm::/classes/listbox/listbox.getscrollbox.htm)
		 Метод getScrollBox
		 возвращает область прокрутки списка элементов.


		 ![](../../Sub_Image.gif)
		 [getSelectedItems](dhtmlList.chm::/classes/listbox/listbox.getselecteditems.htm)
		 Метод getSelectedItems
		 возвращает массив выделенных элементов списка.


		 ![](../../Sub_Image.gif)
		 [insertItem](dhtmlList.chm::/classes/listbox/listbox.insertitem.htm)
		 Метод insertItem добавляет
		 элемент в позицию списка элементов, заданную параметром index.


		 ![](../../Sub_Image.gif)
		 [removeItem](dhtmlList.chm::/classes/listbox/listbox.removeitem.htm)
		 Метод removeItem удаляет
		 элемент списка по указанному индексу.


		 ![](../../Sub_Image.gif)
		 [scrollToItem](dhtmlList.chm::/classes/listbox/listbox.scrolltoitem.htm)
		 Метод scrollToItem
		 прокручивает список до элемента item.


		 ![](../../Sub_Image.gif)
		 [scrollToSelected](dhtmlList.chm::/classes/listbox/listbox.scrolltoselected.htm)
		 Метод scrollToSelected
		 прокручивает список до выделенного элемента списка.


		 ![](../../Sub_Image.gif)
		 [selectItemById](dhtmlList.chm::/classes/listbox/listbox.selectitembyid.htm)
		 Метод selectItemById
		 выделяет элемент с указанным идентификатором Id.


		 ![](../../Sub_Image.gif)
		 [setSelectedFocus](dhtmlList.chm::/classes/listbox/listbox.setselectedfocus.htm)
		 Метод setSelectedFocus
		 устанавливает фокус по индексу элемента.


## События


		 Имя события
		 Краткое описание


		 ![](../../event_image.gif)
		 [ItemClick](dhtmlList.chm::/classes/listbox/listbox.itemclick.htm)
		 Событие ItemClick наступает
		 при нажатии на элемент списка.


		 ![](../../event_image.gif)
		 [ItemDeselected](dhtmlList.chm::/classes/listbox/listbox.itemdeselected.htm)
		 Событие ItemDeselected наступает
		 при снятии отметки с элемента списка.


		 ![](../../event_image.gif)
		 [ItemEdited](dhtmlList.chm::/classes/listbox/listbox.itemedited.htm)
		 Событие ItemEdited наступает
		 после завершения редактирования элемента списка.


		 ![](../../event_image.gif)
		 [ItemEditing](dhtmlList.chm::/classes/listbox/listbox.itemediting.htm)
		 Событие ItemEditing наступает
		 при начале редактирования элемента списка.


		 ![](../../event_image.gif)
		 [ItemMouseDown](dhtmlList.chm::/classes/listbox/listbox.itemmousedown.htm)
		 Событие ItemMouseDown наступает
		 при зажатии кнопки мыши на элементе.


		 ![](../../event_image.gif)
		 [ItemSelected](dhtmlList.chm::/classes/listbox/listbox.itemselected.htm)
		 Событие ItemSelected
		 наступает при выделении элемента списка.


		 ![](../../event_image.gif)
		 [SelectableSelected](dhtmlList.chm::/classes/listbox/listbox.selectableselected.htm)
		 Событие SelectableSelected
		 наступает при любом нажатии на элемент списка.


## Свойства, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Anchors](dhtmlUi.chm::/Classes/Control/Control.Anchors.htm)
		 Свойство Anchors определяет
		 позицию компонента, размещенного внутри контейнера.


		 ![](../../Property_Image.gif)
		 [Animation](dhtmlUi.chm::/Classes/Control/Control.Animation.htm)
		 Свойство Animation
		 определяет параметры анимации для компонента.


		 ![](../../Property_Image.gif)
		 [Bottom](dhtmlUi.chm::/Classes/Control/Control.Bottom.htm)
		 Свойство Bottom определяет
		 отступ снизу при размещении компонента внутри LayoutPanel.


		 ![](../../Property_Image.gif)
		 [Content](dhtmlUi.chm::/classes\control\control.content.htm)
		 Свойство Content определяет
		 содержимое компонента.


		 ![](../../Property_Image.gif)
		 [ContextMenu](dhtmlUi.chm::/Classes\Control\Control.ContextMenu.htm)
		 Свойство ContextMenu
		 определяет контекстное меню для компонента.


		 ![](../../Property_Image.gif)
		 [Data](dhtmlUi.chm::/Classes/Control/Control.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../Property_Image.gif)
		 [Enabled](dhtmlUi.chm::/classes\control\control.enabled.htm)
		 Свойство Enabled определяет
		 признак доступности компонента для использования.


		 ![](../../Property_Image.gif)
		 [Height](dhtmlUi.chm::/classes\control\control.height.htm)
		 Свойство Height определяет
		 высоту компонента.


		 ![](../../Property_Image.gif)
		 [IsRTL](dhtmlUi.chm::/classes\control\control.isrtl.htm)
		 Свойство IsRTL определяет
		 признак расположения элементов компонента по правому краю.


		 ![](../../Property_Image.gif)
		 [IsVisible](dhtmlUi.chm::/Classes/Control/Control.IsVisible.htm)
		 Свойство IsVisible
		 определяет признак отображения компонента.


		 ![](../../Property_Image.gif)
		 [Left](dhtmlUi.chm::/Classes/Control/Control.Left.htm)
		 Свойство Left определяет
		 отступ слева при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../Property_Image.gif)
		 [Opacity](dhtmlUi.chm::/Classes/Control/Control.Opacity.htm)
		 Свойство Opacity определяет
		 прозрачность компонента.


		 ![](../../Property_Image.gif)
		 [Parent](dhtmlUi.chm::/Classes/Control/Control.Parent.htm)
		 Свойство Parent определяет
		 родительский компонент элемента управления.


		 ![](../../Property_Image.gif)
		 [ParentNode](dhtmlUi.chm::/Classes/Control/Control.ParentNode.htm)
		 Свойство ParentNode
		 определяет родительскую DOM-вершину.


		 ![](../../Property_Image.gif)
		 [ResourceKey](dhtmlUi.chm::/classes\control\control.resourcekey.htm)
		 Свойство ResourceKey
		 определяет ресурсный ключ для компонента.


		 ![](../../Property_Image.gif)
		 [Right](dhtmlUi.chm::/Classes/Control/Control.Right.htm)
		 Свойство Right определяет
		 отступ справа при размещении компонента внутри LayoutPanel.


		 ![](../../Property_Image.gif)
		 [Rotate](dhtmlUi.chm::/Classes/Control/Control.Rotate.htm)
		 Свойство Rotate определяет
		 угол поворота компонента.


		 ![](../../Property_Image.gif)
		 [ShowToolTip](dhtmlUi.chm::/Classes/Control/Control.ShowToolTip.htm)
		 Свойство ShowToolTip
		 определяет признак возможности отображения [всплывающей
		 подсказки](dhtmlUi.chm::/Classes/Control/Control.ToolTip.htm) компонента.


		 ![](../../Property_Image.gif)
		 [Style](dhtmlUi.chm::/Classes/Control/Control.Style.htm)
		 Свойство Style определяет
		 стиль для компонента.


		 ![](../../Property_Image.gif)
		 [TabIndex](dhtmlUi.chm::/classes\control\control.tabindex.htm)
		 Свойство TabIndex определяет
		 последовательность перехода элемента управления внутри контейнера.


		 ![](../../Property_Image.gif)
		 [Tag](dhtmlUi.chm::/Classes/Control/Control.Tag.htm)
		 Свойство Tag определяет
		 JSON-объект, ассоциированный с компонентом.


		 ![](../../Property_Image.gif)
		 [ToolTip](dhtmlUi.chm::/classes\control\control.tooltip.htm)
		 Свойство ToolTip определяет
		 текст всплывающей подсказки компонента.


		 ![](../../Property_Image.gif)
		 [Top](dhtmlUi.chm::/Classes/Control/Control.Top.htm)
		 Свойство Top определяет
		 отступ сверху при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../Property_Image.gif)
		 [Value](dhtmlUi.chm::/classes\control\control.value.htm)
		 Свойство Value определяет
		 значение компонента.


		 ![](../../Property_Image.gif)
		 [Width](dhtmlUi.chm::/classes\control\control.width.htm)
		 Свойство Width определяет
		 ширину компонента.


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [addItem](dhtmlList.chm::/classes/listbox/listbox.additem.htm)
		 Метод addItem добавляет
		 новый элемент в список.


		 ![](../../Sub_Image.gif)
		 [beginUpdate](dhtmlList.chm::/classes/listbox/listbox.beginupdate.htm)
		 Метод beginUpdate устанавливает
		 признак того, что список обновляется.


		 ![](../../Sub_Image.gif)
		 [clear](dhtmlList.chm::/classes/listbox/listbox.clear.htm)
		 Метод clear удаляет
		 все элементы из списка.


		 ![](../../Sub_Image.gif)
		 [clearSelection](dhtmlList.chm::/classes/listbox/listbox.clearselection.htm)
		 Метод clearSelection
		 предназначен для сброса выделения.


		 ![](../../Sub_Image.gif)
		 [endUpdate](dhtmlList.chm::/classes/listbox/listbox.endupdate.htm)
		 Метод endUpdate убирает
		 признак того, что список обновляется.


		 ![](../../Sub_Image.gif)
		 [filterByText](dhtmlList.chm::/classes/listbox/listbox.filterbytext.htm)
		 Метод filterByText
		 осуществляет фильтрацию элементов списка по строке.


		 ![](../../Sub_Image.gif)
		 [getActiveItem](dhtmlList.chm::/classes/listbox/listbox.getactiveitem.htm)
		 Метод getActiveItem
		 возвращает выделенный элемент списка.


		 ![](../../Sub_Image.gif)
		 [getItemByPoint](dhtmlList.chm::/classes/listbox/listbox.getitembypoint.htm)
		 Метод getItemByPoint
		 возвращает элемент списка по заданным координатам.


		 ![](../../Sub_Image.gif)
		 [getLastItemClick](dhtmlList.chm::/classes/listbox/listbox.getlastitemclick.htm)
		 Метод getLastItemClick
		 возвращает последний выделенный элемент списка.


		 ![](../../Sub_Image.gif)
		 [getLayoutItems](dhtmlList.chm::/classes/listbox/listbox.getlayoutitems.htm)
		 Метод getLayoutItems
		 возвращает массив элементов списка.


		 ![](../../Sub_Image.gif)
		 [getScrollBox](dhtmlList.chm::/classes/listbox/listbox.getscrollbox.htm)
		 Метод getScrollBox
		 возвращает область прокрутки списка элементов.


		 ![](../../Sub_Image.gif)
		 [getSelectedItems](dhtmlList.chm::/classes/listbox/listbox.getselecteditems.htm)
		 Метод getSelectedItems
		 возвращает массив выделенных элементов списка.


		 ![](../../Sub_Image.gif)
		 [insertItem](dhtmlList.chm::/classes/listbox/listbox.insertitem.htm)
		 Метод insertItem добавляет
		 элемент в позицию списка элементов, заданную параметром index.


		 ![](../../Sub_Image.gif)
		 [removeItem](dhtmlList.chm::/classes/listbox/listbox.removeitem.htm)
		 Метод removeItem удаляет
		 элемент списка по указанному индексу.


		 ![](../../Sub_Image.gif)
		 [scrollToItem](dhtmlList.chm::/classes/listbox/listbox.scrolltoitem.htm)
		 Метод scrollToItem
		 прокручивает список до элемента item.


		 ![](../../Sub_Image.gif)
		 [scrollToSelected](dhtmlList.chm::/classes/listbox/listbox.scrolltoselected.htm)
		 Метод scrollToSelected
		 прокручивает список до выделенного элемента списка.


		 ![](../../Sub_Image.gif)
		 [selectItemById](dhtmlList.chm::/classes/listbox/listbox.selectitembyid.htm)
		 Метод selectItemById
		 выделяет элемент с указанным идентификатором Id.


		 ![](../../Sub_Image.gif)
		 [setSelectedFocus](dhtmlList.chm::/classes/listbox/listbox.setselectedfocus.htm)
		 Метод setSelectedFocus
		 устанавливает фокус по индексу элемента.


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя события
		 Краткое описание


		 ![](../../event_image.gif)
		 [Drag](dhtmlUi.chm::/classes\control\control.drag.htm)
		 Событие Drag наступает
		 при нажатии и удерживании кнопки мыши.


		 ![](../../event_image.gif)
		 [DragEnd](dhtmlUi.chm::/classes\control\control.dragend.htm)
		 Событие DragEnd наступает
		 при окончании перетаскивания компонента.


		 ![](../../event_image.gif)
		 [DragStart](dhtmlUi.chm::/classes\control\control.dragstart.htm)
		 Событие DragStart наступает,
		 когда начинается перетаскивание компонента.


		 ![](../../event_image.gif)
		 [OnContextMenu](dhtmlUi.chm::/classes\control\control.OnContextMenu.htm)
		 Событие OnContextMenu
		 наступает при вызове контекстного меню компонента.


		 ![](../../event_image.gif)
		 [SizeChanged](dhtmlUi.chm::/Classes/Control/Control.SizeChanged.htm)
		 Событие SizeChanged
		 наступает после изменения размеров компонента.


		 ![](../../event_image.gif)
		 [SizeChanging](dhtmlUi.chm::/Classes/Control/Control.SizeChanging.htm)
		 Событие SizeChanging
		 наступает во время изменения размеров компонента.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[DropPanel](dhtmlUi.chm::/Classes/droppanel/droppanel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
