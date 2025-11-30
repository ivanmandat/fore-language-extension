# ComboBox

ComboBox
-


**


# ComboBox


## Описание


Компонент ComboBox представляет собой раскрывающийся список.


## Комментарии


Компонент ComboBox реализован классом [ComboBox](../../Classes/ComboBox/ComboBox.htm).


## Пример


Раскрывающийся список выглядит следующим образом:


![](../../combobox1.gif)


Панель раскрывается при нажатии кнопки со стрелкой. Чтобы изменить размеры панели, наведите курсор на границу и при появлении двойной стрелки перетащите границу. Если размер панели не позволяет отобразить все элементы списка, появится полоса прокрутки:


![](ComboBox_scroll.gif)


Примечание. При работе в браузере Internet Explorer учитывайте следующую особенность: если навести курсор на полосу прокрутки и, удерживая кнопку мыши, переместить курсор на элемент списка, раскрывающаяся панель закроется.


[Пример создания компонента ComboBox](Constructor_ComboBox.htm)


## Конструкторы


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ComboBox](dhtmlUi.chm::/classes\combobox\constructor_combobox.htm)
		 Конструктор ComboBox
		 создает экземпляр компонента ComboBox.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AutoFind](dhtmlUi.chm::/classes\combobox\combobox.autofind.htm)
		 Свойство AutoFind
		 устанавливает возможность автопоиска.


		 ![](../../Property_Image.gif)
		 [SelectedIndex](dhtmlUi.chm::/classes\combobox\combobox.selectedindex.htm)
		 Свойство SelectedIndex
		 определяет индекс выбранного элемента списка.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [clearSelection](dhtmlUi.chm::/Classes/ComboBox/ComboBox.clearSelection.htm)
		 Метод clearSelection
		 удаляет отметку с элементов компонента ComboBox.


		 ![](../../Sub_Image.gif)
		 [filterByText](dhtmlUi.chm::/classes\combobox\combobox.filterbytext.htm)
		 Метод filterByText
		 осуществляет фильтрацию элементов по строке.


		 ![](../../Sub_Image.gif)
		 [getListBox](dhtmlUi.chm::/classes\combobox\combobox.getlistbox.htm)
		 Метод getListBox
		 возвращает компонент ListBox.


## Свойства, унаследованные от [Combo](../../Classes/Combo/Combo.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CloseOnContentClick](dhtmlUi.chm::/Classes/Combo/Combo.CloseOnContentClick.htm)
		 Свойство CloseOnContentClick
		 определяет возможность закрытия панели компонента по нажатию на
		 заголовок.


		 ![](../../Property_Image.gif)
		 [EnableEdit](dhtmlUi.chm::/classes\combo\combo.enableedit.htm)
		 Свойство EnableEdit
		 устанавливает возможность ввода.


		 ![](../../Property_Image.gif)
		 [IsDropHasCombosWidth](dhtmlUi.chm::/Classes/Combo/Combo.IsDropHasCombosWidth.htm)
		 Свойство IsDropHasCombosWidth
		 устанавливает признак независимости ширины раскрывающейся панели
		 от ширины редактора ввода.


		 ![](../../Property_Image.gif)
		 [IsHint](dhtmlUi.chm::/Classes/Combo/Combo.IsHint.htm)
		 Свойство IsHint определяет
		 отображение подсказки при наведении курсора мыши на кнопку открытия
		 раскрывающейся панели.


		 ![](../../Property_Image.gif)
		 [NoCreateEditors](dhtmlUi.chm::/Classes/Combo/Combo.NoCreateEditors.htm)
		 Свойство NoCreateEditors
		 определяет признак того, что заголовок отобразится простым текстом,
		 а не в редакторах компонентов [TextBox](dhtmlUi.chm::/Components/TextBox/TextBox.htm)
		 или [MaskEdit](dhtmlUi.chm::/Components/MaskEdit/MaskEdit.htm).


		 ![](../../Property_Image.gif)
		 [OpenOnContentClick](dhtmlUi.chm::/Classes/Combo/Combo.OpenOnContentClick.htm)
		 Свойство OpenOnContentClick
		 определяет возможность раскрытия панели компонента по нажатию
		 на заголовок.


		 ![](../../Property_Image.gif)
		 [OpenOnIconClick](dhtmlUi.chm::/Classes/Combo/Combo.OpenOnIconClick.htm)
		 Свойство OpenOnIconClick
		 определяет возможность раскрытия панели компонента по нажатию
		 на пиктограмму заголовка.


		 ![](../../Property_Image.gif)
		 [OpenOnKeyDown](dhtmlUi.chm::/Classes/Combo/Combo.OpenOnKeyDown.htm)
		 Свойство OpenOnKeyDown
		 определяет возможность открытия всплывающей панели при нажатии на клавиатуру.


		 ![](../../Property_Image.gif)
		 [UseMask](dhtmlUi.chm::/classes\combo\combo.usemask.htm)
		 Свойство UseMask
		 устанавливает возможность использования редактора маски.


## Методы, унаследованные от [Combo](../../Classes/Combo/Combo.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [applyNotValidCSS](dhtmlUi.chm::/Classes/Combo/Combo.applyNotValidCSS.htm)
		 Метод applyNotValidCSS**
		 устанавливает стиль, определяющий подсветку некорректно введенного
		 значения редактора ввода.


		 ![](../../Sub_Image.gif)
		 [applyValidCSS](dhtmlUi.chm::/Classes/Combo/Combo.applyValidCSS.htm)
		 Метод **applyValidCSS**
		 устанавливает стиль, определяющий подсветку корректно введенного
		 значения редактора ввода.


		 ![](../../Sub_Image.gif)
		 [getContentNode](dhtmlUi.chm::/Classes/Combo/Combo.getContentNode.htm)
		 Метод getContentNode
		 возвращает DOM-узел компонента редактора ввода.


		 ![](../../Sub_Image.gif)
		 [getDropPanel](dhtmlUi.chm::/classes\combo\combo.getdroppanel.htm)
		 Метод getDropPanel
		 возвращает раскрывающуюся часть компонента.


		 ![](../../Sub_Image.gif)
		 [getIconHeight](dhtmlUi.chm::/Classes/Combo/Combo.getIconHeight.htm)
		 Метод getIconHeight
		 возвращает значение высоты пиктограммы редактора ввода.


		 ![](../../Sub_Image.gif)
		 [getIconWidth](dhtmlUi.chm::/Classes/Combo/Combo.getIconWidth.htm)
		 Метод getIconeWidth
		 возвращает значение ширины пиктограммы редактора ввода.


		 ![](../../Sub_Image.gif)
		 [getMaskEdit](dhtmlUi.chm::/Classes/Combo/Combo.getMaskEdit.htm)
		 Метод getMaskEdit возвращает
		 редактор ввода данных, соответствующих определенному шаблону.


		 ![](../../Sub_Image.gif)
		 [getTextBox](dhtmlUi.chm::/Classes/Combo/Combo.getTextBox.htm)
		 Метод getTextBox возвращает
		 текстовое поле редактора ввода.


		 ![](../../Sub_Image.gif)
		 [setIconImageClass](dhtmlUi.chm::/Classes/Combo/Combo.setIconImageClass.htm)
		 Метод setIconImageClass
		 меняет имя класса компонента пиктограммы редактора ввода.


		 ![](../../Sub_Image.gif)
		 [showDropPanel](dhtmlUi.chm::/classes\combo\combo.showdroppanel.htm)
		 Метод showDropPanel
		 отображает раскрывающуюся часть компонента.


## События, унаследованные от [Combo](../../Classes/Combo/Combo.htm)


		  Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [TextChanged](dhtmlUi.chm::/classes\combo\combo.textchanged.htm)
		 Событие TextChanged
		 наступает при изменении текста в редакторе.


		 ![](../../Event_Image.gif)
		 [ValueChanged](dhtmlUi.chm::/Classes/Combo/Combo.ValueChanged.htm)
		 Событие ValueChanged
		 наступает после изменения содержимого редактора ввода.


## Свойства, унаследованные от [Control](../../Classes/Control/Control.htm)


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


## Методы, унаследованные от [Control](../../Classes/Control/Control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [addClass](dhtmlUi.chm::/classes\control\control.addclass.htm)


		 Метод addClass добавляет
		 CSS-класс к компоненту.


		 ![](../../Sub_Image.gif)
		 [addEventHandler](dhtmlUi.chm::/Classes/Control/Control.addEventHandler.htm)
		 Метод addEventHandler
		 добавляет обработчик события на DOM-вершину.


		 ![](../../Sub_Image.gif)
		 [addStateClass](dhtmlUi.chm::/Classes/Control/Control.addStateClass.htm)


		 Метод addStateClass
		 добавляет CSS-класс к компоненту и удаляет прежний CSS-класс.


		 ![](../../Sub_Image.gif)
		 [addToNode](dhtmlUi.chm::/classes\control\control.addtonode.htm)


		 Метод addToNode добавляет
		 компонент в указанную вершину.


		 ![](../../Sub_Image.gif)
		 [bindEvents](dhtmlUi.chm::/Classes/Control/Control.bindEvents.htm)
		 Метод bindEvents подписывает
		 элемент на все стандартные события.


		 ![](../../Sub_Image.gif)
		 [getAnchorFlags](dhtmlUi.chm::/Classes/Control/Control.getAnchorFlags.htm)


		 Метод getAnchorFlags
		 возвращает JSON-объект с настройками текущей позиции компонента.


		 ![](../../Sub_Image.gif)
		 [getClass](dhtmlUi.chm::/classes\control\control.getclass.htm)


		 Метод getClass возвращает
		 текущие css-классы компонента.


		 ![](../../Sub_Image.gif)
		 [getCssStyle](dhtmlUi.chm::/Classes/Control/Control.getCssStyle.htm)


		 Метод getCssStyle возвращает
		 стили для указанной вершины.


		 ![](../../Sub_Image.gif)
		 [getDomNode](dhtmlUi.chm::/Classes/Control/Control.getDomNode.htm)


		 Метод getDomNode возвращает
		 главную DOM-вершину компонента.


		 ![](../../Sub_Image.gif)
		 [getFocused](dhtmlUi.chm::/Classes/Control/Control.getFocused.htm)


		 Метод getFocused определяет
		 наличие фокуса у компонента.


		 ![](../../Sub_Image.gif)
		 [getIsBinded](dhtmlUi.chm::/Classes/Control/Control.getIsBinded.htm)
		 Метод getIsBinded возвращает
		 признак подписи элемента на события DOM-вершины.


		 ![](../../Sub_Image.gif)
		 [hide](dhtmlUi.chm::/classes\control\control.hide.htm)


		 Метод hide скрывает
		 элемент управления.


		 ![](../../Sub_Image.gif)
		 [hideToolTip](dhtmlUi.chm::/Classes/Control/Control.hideToolTip.htm)


		 Метод hideToolTip очищает
		 таймаут появления подсказки и скрывает её, если она был показана.


		 ![](../../Sub_Image.gif)
		 [refreshStyle](dhtmlUi.chm::/Classes/Control/Control.refreshStyle.htm)
		 Метод refreshStyle
		 обновляет CSS-стили элемента.


		 ![](../../Sub_Image.gif)
		 [removeClass](dhtmlUi.chm::/classes\control\control.removeclass.htm)


		 Метод removeClass удаляет
		 CSS-класс из компонента.


		 ![](../../Sub_Image.gif)
		 [removeEventHandler](dhtmlUi.chm::/Classes/Control/Control.removeEventHandler.htm)
		 Метод removeEventHandler
		 удаляет обработчик события DOM-вершины.


		 ![](../../Sub_Image.gif)
		 [removeFromDOM](dhtmlUi.chm::/classes/control/control.removefromdom.htm)
		 Метод removeFromDOM
		 удаляет вершину из DOM-структуры.


		 ![](../../Sub_Image.gif)
		 [removeStateClasses](dhtmlUi.chm::/Classes/Control/Control.removeStateClasses.htm)


		 Метод removeStateClasses
		 удаляет CSS-классы компонента.


		 ![](../../Sub_Image.gif)
		 [setDraggable](dhtmlUi.chm::/classes\control\control.setdraggable.htm)


		 Метод setDraggable
		 устанавливает возможность перетаскивания компонента на HTML-странице.


		 ![](../../Sub_Image.gif)
		 [setFocus](dhtmlUi.chm::/Classes/Control/Control.setFocus.htm)


		 Метод setFocus устанавливает
		 фокус компонента.


		 ![](../../Sub_Image.gif)
		 [setIsHovered](dhtmlUi.chm::/Classes/Control/Control.setIsHovered.htm)


		 Метод setIsHovered
		 настраивает отображение компонента только при наведении на него
		 курсора.


		 ![](../../Sub_Image.gif)
		 [setSize](dhtmlUi.chm::/classes\control\control.setsize.htm)


		 Метод setSize устанавливает
		 размеры компонента.


		 ![](../../Sub_Image.gif)
		 [show](dhtmlUi.chm::/classes/control/control.show.htm)


		 Метод show отображает
		 элемент управления.


		 ![](../../Sub_Image.gif)
		 [unBindEvents](dhtmlUi.chm::/Classes/Control/Control.unBindEvents.htm)
		 Метод unBindEvents
		 отписывает элемент от всех стандартных событий.


		 ![](../../Sub_Image.gif)
		 [updatePosition](dhtmlUi.chm::/Classes/Control/Control.updatePosition.htm)


		 Метод updatePosition
		 корректирует размер и положение при абсолютном позиционировании
		 на основе текущих параметров.


		 ![](../../Sub_Image.gif)
		 [updateSize](dhtmlUi.chm::/classes\control\control.updatesize.htm)


		 Метод updateSize обновляет
		 размеры компонента подгонке размеров контейнера, в котором находится
		 компонент.


## События, унаследованные от [Control](../../Classes/Control/Control.htm)


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [Drag](dhtmlUi.chm::/classes\control\control.drag.htm)
		 Событие Drag наступает
		 при нажатии и удерживании кнопки мыши.


		 ![](../../Event_Image.gif)
		 [DragEnd](dhtmlUi.chm::/classes\control\control.dragend.htm)
		 Событие DragEnd наступает
		 при окончании перетаскивания компонента.


		 ![](../../Event_Image.gif)
		 [DragStart](dhtmlUi.chm::/classes\control\control.dragstart.htm)
		 Событие DragStart наступает,
		 когда начинается перетаскивание компонента.


		 ![](../../Event_Image.gif)
		 [OnContextMenu](dhtmlUi.chm::/classes\control\control.OnContextMenu.htm)
		 Событие OnContextMenu
		 наступает при вызове контекстного меню компонента.


		 ![](../../Event_Image.gif)
		 [SizeChanged](dhtmlUi.chm::/Classes/Control/Control.SizeChanged.htm)
		 Событие SizeChanged
		 наступает после изменения размеров компонента.


		 ![](../../Event_Image.gif)
		 [SizeChanging](dhtmlUi.chm::/Classes/Control/Control.SizeChanging.htm)
		 Событие SizeChanging
		 наступает во время изменения размеров компонента.


## Свойства, унаследованные от [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от [Object](dhtmlCommon.chm::/Classes/object/object.htm)


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


[DHTML-компоненты](dhtml.chm::/DHTML_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
