# Ribbon

Ribbon
-


# Ribbon


## Описание


Компонент Ribbon представляет
 собой ленту приложения, которая объединяет в себе функциональность главного
 меню и [панели инструментов](dhtmlUi.chm::/Classes/ToolBar/ToolBar.htm).


Лента приложения состоит из:


	- [вкладок](../../Classes/RibbonCategory/RibbonCategory.htm);


	- [панели
	 быстрого доступа](../../Classes/Ribbon/Ribbon.getQuickAccessControls.htm);


	- [кнопки
	 приложения](../../Classes/Ribbon/Ribbon.getMainButton.htm);


	- [главного
	 меню](../../Classes/Ribbon/Ribbon.MainMenu.htm).


Вкладки могут быть обычными и контекстными. Контекстные
 вкладки отображаются по мере необходимости.


На вкладках расположены панели,
 на панелях - элементы управления.


Для экономии пространства содержимое вкладок может сворачиваться при
 нажатии на кнопку ![](SlidePanel2.gif).


Размещать и настраивать ленту приложения можно как [из
 API](Example_Ribbon.htm), так и [из JSON](Example_Ribbon_JSON.htm).


## Комментарии


Компонент реализован классом [Ribbon](../../Classes/Ribbon/Ribbon.htm).


## Пример


![](Ribbon2.gif)


[Пример размещения компонента Ribbon из
 API](Example_Ribbon.htm)


[Пример размещения компонента Ribbon
 из JSON](Example_Ribbon_JSON.htm)


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Ribbon](dhtmlRibbon.chm::/classes/ribbon/constructor_ribbon.htm)
		 Конструктор Ribbon
		 создает экземпляр компонента Ribbon.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../property_image.gif)
		 [Controls](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.Controls.htm)
		 Свойство Controls содержит
		 набор элементов управления ленты инструментов.


		 ![](../../property_image.gif)
		 [IsAutoHiding](dhtmlRibbon.chm::/classes/ribbon/ribbon.isautohiding.htm)
		 Свойство IsAutoHiding
		 определяет, свернута ли лента приложения.


		 ![](../../property_image.gif)
		 [IsAutoHidingEnabled](dhtmlRibbon.chm::/classes/ribbon/ribbon.isautohidingenabled.htm)
		 Свойство IsAutoHidingEnabled
		 определяет, доступна ли кнопка сворачивания ленты приложения.


		 ![](../../property_image.gif)
		 [MainButton](dhtmlRibbon.chm::/classes/ribbon/ribbon.mainbutton.htm)
		 Свойство MainButton
		 устанавливает настройки для кнопки приложения.


		 ![](../../property_image.gif)
		 [MainMenu](dhtmlRibbon.chm::/classes/ribbon/ribbon.mainmenu.htm)
		 Свойство MainMenu устанавливает
		 главное меню ленты приложения.


		 ![](../../property_image.gif)
		 [QuickAccessControls](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.QuickAccessControls.htm)
		 Свойство QuickAccessControls
		 устанавливает кнопки панели быстрого доступа.


		 ![](../../property_image.gif)
		 [SelectedIndex](dhtmlRibbon.chm::/classes/ribbon/ribbon.selectedindex.htm)
		 Свойство SelectedIndex
		 устанавливает индекс активной вкладки.


		 ![](../../property_image.gif)
		 [SelectedItem](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.SelectedItem.htm)
		 Свойство SelectedItem
		 устанавливает активную вкладку ленты инструментов.


		 ![](../../property_image.gif)
		 [UseIntellisense](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.UseIntellisense.htm)
		 Свойство UseIntellisense
		 определяет наличие команд ленты инструментов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [addCategory](dhtmlRibbon.chm::/classes/ribbon/ribbon.addcategory.htm)
		 Метод addCategory добавляет
		 вкладку на ленту приложения.


		 ![](../../Sub_Image.gif)
		 [addQuickAccessControl](dhtmlRibbon.chm::/classes/ribbon/ribbon.addquickaccesscontrol.htm)
		 Метод addQuickAccessControl
		 добавляет кнопку на панель быстрого доступа.


		 ![](../../Sub_Image.gif)
		 [beginUpdate](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.beginUpdate.htm)
		 Метод beginUpdate отключает
		 перерисовку ленты инструментов до тех пор, пока не будет вызван
		 метод [endUpdate](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.endUpdate.htm).


		 ![](../../Sub_Image.gif)
		 [endUpdate](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.endUpdate.htm)
		 Метод endUpdate включает
		 перерисовку ленты инструментов и обновляет её.


		 ![](../../Sub_Image.gif)
		 [getCategory](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.getCategory.htm)
		 Метод getCategory возвращает
		 вкладку ленты инструментов по индексу.


		 ![](../../Sub_Image.gif)
		 [getCategoryById](dhtmlRibbon.chm::/classes/ribbon/ribbon.getcategorybyid.htm)
		 Метод getCategoryById
		 возвращает вкладку по идентификатору.


		 ![](../../Sub_Image.gif)
		 [getControlById](dhtmlRibbon.chm::/classes/ribbon/ribbon.getcontrolbyid.htm)
		 Метод getControlById
		 возвращает элемент управления по идентификатору.


		 ![](../../Sub_Image.gif)
		 [getCustomControlsContainer](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.getCustomControlsContainer.htm)
		 Метод getCustomControlsContainer
		 возвращает контейнер для пользовательских элементов управления.


		 ![](../../Sub_Image.gif)
		 [getHideButton](dhtmlRibbon.chm::/classes/ribbon/ribbon.gethidebutton.htm)
		 Метод getHideButton
		 возвращает кнопку сворачивания/разворачивания содержимого вкладок.


		 ![](../../Sub_Image.gif)
		 [getImageList](dhtmlRibbon.chm::/classes/ribbon/ribbon.getimagelist.htm)
		 Метод getImageList
		 возвращает объект PP.ImageList, содержащий путь к файлу с картинками.


		 ![](../../Sub_Image.gif)
		 [getIsCategoryContentHidden](dhtmlRibbon.chm::/classes/ribbon/ribbon.getiscategorycontenthidden.htm)
		 Метод getIsCategoryContentHidden
		 возвращает признак того, является ли вкладка скрытой.


		 ![](../../Sub_Image.gif)
		 [getItems](dhtmlRibbon.chm::/classes/ribbon/ribbon.getitems.htm)
		 Метод getItems возвращает
		 массив вкладок ленты приложения.


		 ![](../../Sub_Image.gif)
		 [getMainButton](dhtmlRibbon.chm::/classes/ribbon/ribbon.getmainbutton.htm)
		 Метод getMainButton
		 возвращает кнопку приложения.


		 ![](../../Sub_Image.gif)
		 [getPanelById](dhtmlRibbon.chm::/classes/ribbon/ribbon.getpanelbyid.htm)
		 Метод getPanelById
		 возвращает панель по идентификатору.


		 ![](../../Sub_Image.gif)
		 [getQuickAccessControls](dhtmlRibbon.chm::/classes/ribbon/ribbon.getquickaccesscontrols.htm)
		 Метод getQuickAccessControls
		 возвращает элементы управления панели быстрого доступа.


		 ![](../../Sub_Image.gif)
		 [getSelectedItem](dhtmlRibbon.chm::/classes/ribbon/ribbon.getselecteditem.htm)
		 Метод getSelectedItem
		 возвращает активную вкладку.


		 ![](../../Sub_Image.gif)
		 [removeQuickAccessControl](dhtmlRibbon.chm::/classes/ribbon/ribbon.removequickaccesscontrol.htm)
		 Метод removeQuickAccessControl
		 удаляет кнопку из панели быстрого доступа по индексу.


		 ![](../../Sub_Image.gif)
		 [removeQuickAccessControlById](dhtmlRibbon.chm::/classes/ribbon/ribbon.removequickaccesscontrolbyid.htm)
		 Метод removeQuickAccessControlById
		 удаляет кнопку из панели быстрого доступа по идентификатору.


		 ![](../../Sub_Image.gif)
		 [setCategoriesVisibilityByGroupName](dhtmlRibbon.chm::/classes/ribbon/ribbon.setcategoriesvisibilitybygroupname.htm)
		 Метод setCategoriesVisibilityByGroupName
		 определяет, отображается ли группа контекстных вкладок.


		 ![](../../Sub_Image.gif)
		 [setSettingsTo](dhtmlRibbon.chm::/classes/ribbon/ribbon.setsettingsto.htm)
		 Метод setSettingsTo
		 устанавливает JSON-объект с настройками для указанного элемента
		 управления.


		 ![](../../Sub_Image.gif)
		 [showCategoryContent](dhtmlRibbon.chm::/classes/ribbon/ribbon.showcategorycontent.htm)
		 Метод showCategoryContent
		 раскрывает содержимое вкладок.


		 ![](../../Sub_Image.gif)
		 [updateAutoComplete](dhtmlRibbon.chm::/Classes/Ribbon/Ribbon.updateAutoComplete.htm)
		 Метод updateAutoComplete
		 обновляет результат поиска операций, введенных в поле быстрого
		 запуска.


## События


		 Имя события
		 Краткое описание


		 ![](../../event_image.gif)
		 [CategoryContentCollapsed](dhtmlRibbon.chm::/classes/ribbon/ribbon.categorycontentcollapsed.htm)
		 Событие CategoryContentCollapsed
		 наступает при сворачивании содержимого вкладок.


		 ![](../../event_image.gif)
		 [CategoryContentExpanded](dhtmlRibbon.chm::/classes/ribbon/ribbon.categorycontentexpanded.htm)
		 Событие CategoryContentExpanded
		 наступает при разворачивании содержимого вкладок.


		 ![](../../event_image.gif)
		 [CategoryDeselected](dhtmlRibbon.chm::/classes/ribbon/ribbon.categorydeselected.htm)
		 Событие CategoryDeselected
		 наступает при закрытии вкладки.


		 ![](../../event_image.gif)
		 [CategorySelected](dhtmlRibbon.chm::/classes/ribbon/ribbon.categoryselected.htm)
		 Событие CategorySelected
		 наступает при выборе вкладки.


## Свойства, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../property_image.gif)
		 [Anchors](dhtmlUi.chm::/Classes/Control/Control.Anchors.htm)
		 Свойство Anchors определяет
		 позицию компонента, размещенного внутри контейнера.


		 ![](../../property_image.gif)
		 [Animation](dhtmlUi.chm::/Classes/Control/Control.Animation.htm)
		 Свойство Animation
		 определяет параметры анимации для компонента.


		 ![](../../property_image.gif)
		 [Bottom](dhtmlUi.chm::/Classes/Control/Control.Bottom.htm)
		 Свойство Bottom определяет
		 отступ снизу при размещении компонента внутри LayoutPanel.


		 ![](../../property_image.gif)
		 [Content](dhtmlUi.chm::/classes\control\control.content.htm)
		 Свойство Content определяет
		 содержимое компонента.


		 ![](../../property_image.gif)
		 [ContextMenu](dhtmlUi.chm::/Classes\Control\Control.ContextMenu.htm)
		 Свойство ContextMenu
		 определяет контекстное меню для компонента.


		 ![](../../property_image.gif)
		 [Data](dhtmlUi.chm::/Classes/Control/Control.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../property_image.gif)
		 [Enabled](dhtmlUi.chm::/classes\control\control.enabled.htm)
		 Свойство Enabled определяет
		 признак доступности компонента для использования.


		 ![](../../property_image.gif)
		 [Height](dhtmlUi.chm::/classes\control\control.height.htm)
		 Свойство Height определяет
		 высоту компонента.


		 ![](../../property_image.gif)
		 [IsRTL](dhtmlUi.chm::/classes\control\control.isrtl.htm)
		 Свойство IsRTL определяет
		 признак расположения элементов компонента по правому краю.


		 ![](../../property_image.gif)
		 [IsVisible](dhtmlUi.chm::/Classes/Control/Control.IsVisible.htm)
		 Свойство IsVisible
		 определяет признак отображения компонента.


		 ![](../../property_image.gif)
		 [Left](dhtmlUi.chm::/Classes/Control/Control.Left.htm)
		 Свойство Left определяет
		 отступ слева при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../property_image.gif)
		 [Opacity](dhtmlUi.chm::/Classes/Control/Control.Opacity.htm)
		 Свойство Opacity определяет
		 прозрачность компонента.


		 ![](../../property_image.gif)
		 [Parent](dhtmlUi.chm::/Classes/Control/Control.Parent.htm)
		 Свойство Parent определяет
		 родительский компонент элемента управления.


		 ![](../../property_image.gif)
		 [ParentNode](dhtmlUi.chm::/Classes/Control/Control.ParentNode.htm)
		 Свойство ParentNode
		 определяет родительскую DOM-вершину.


		 ![](../../property_image.gif)
		 [ResourceKey](dhtmlUi.chm::/classes\control\control.resourcekey.htm)
		 Свойство ResourceKey
		 определяет ресурсный ключ для компонента.


		 ![](../../property_image.gif)
		 [Right](dhtmlUi.chm::/Classes/Control/Control.Right.htm)
		 Свойство Right определяет
		 отступ справа при размещении компонента внутри LayoutPanel.


		 ![](../../property_image.gif)
		 [Rotate](dhtmlUi.chm::/Classes/Control/Control.Rotate.htm)
		 Свойство Rotate определяет
		 угол поворота компонента.


		 ![](../../property_image.gif)
		 [ShowToolTip](dhtmlUi.chm::/Classes/Control/Control.ShowToolTip.htm)
		 Свойство ShowToolTip
		 определяет признак возможности отображения [всплывающей
		 подсказки](dhtmlUi.chm::/Classes/Control/Control.ToolTip.htm) компонента.


		 ![](../../property_image.gif)
		 [Style](dhtmlUi.chm::/Classes/Control/Control.Style.htm)
		 Свойство Style определяет
		 стиль для компонента.


		 ![](../../property_image.gif)
		 [TabIndex](dhtmlUi.chm::/classes\control\control.tabindex.htm)
		 Свойство TabIndex определяет
		 последовательность перехода элемента управления внутри контейнера.


		 ![](../../property_image.gif)
		 [Tag](dhtmlUi.chm::/Classes/Control/Control.Tag.htm)
		 Свойство Tag определяет
		 JSON-объект, ассоциированный с компонентом.


		 ![](../../property_image.gif)
		 [ToolTip](dhtmlUi.chm::/classes\control\control.tooltip.htm)
		 Свойство ToolTip определяет
		 текст всплывающей подсказки компонента.


		 ![](../../property_image.gif)
		 [Top](dhtmlUi.chm::/Classes/Control/Control.Top.htm)
		 Свойство Top определяет
		 отступ сверху при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../property_image.gif)
		 [Value](dhtmlUi.chm::/classes\control\control.value.htm)
		 Свойство Value определяет
		 значение компонента.


		 ![](../../property_image.gif)
		 [Width](dhtmlUi.chm::/classes\control\control.width.htm)
		 Свойство Width определяет
		 ширину компонента.


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


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


		 ![](../../property_image.gif)
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


[DHTML-компоненты](dhtml.chm::/DHTML_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
