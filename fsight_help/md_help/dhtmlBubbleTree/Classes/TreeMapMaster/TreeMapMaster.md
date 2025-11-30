# TreeMapMaster

TreeMapMaster
-


**


# TreeMapMaster


Пространство имен**: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[ProxyControl](dhtmlUi.chm::/Classes/ProxyControl/proxycontrol.htm)


[Master](dhtmlUi.chm::/Classes/control/control.htm)


[TreeChartMaster](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.htm)


TreeMapMaster


## Описание


Класс TreeMapMaster реализует
 [мастер плоского
 дерева](../../Components/TreeMapMaster/TreeMapMaster.htm).


## Синтаксис


PP.initClass(PP.Ui.TreeMapMaster, [PP.Ui.TreeChartMaster](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.htm),
 "PP.Ui.TreeMapMaster", [PP.Ui.IMasterView]);


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../sub_image.gif)
		 [TreeMapMaster](dhtmlBubbleTree.chm::/Classes/TreeMapMaster/Constructor_TreeMapMaster.htm)
		 Конструктор TreeMapMaster
		 создаёт экземпляр класса TreeMapMaster.


## Свойства, унаследованные от класса [TreeChartMaster](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../property_image.gif)
		 [DataView](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.DataView.htm)
		 Свойство **DataView**
		 определяет источник данных мастера.


## Методы, унаследованные от класса [TreeChartMaster](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.htm)


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [getColorPanel](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.getColorPanel.htm)
		 Метод **getColorPanel**
		 возвращает панель управления цветами.


		 ![](../../sub_image.gif)
		 [getLegendPanel](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.getLegendPanel.htm)
		 Метод **getLegendPanel**
		 возвращает панель управления легендой.


		 ![](../../sub_image.gif)
		 [getSizeLegendPanel](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.getSizeLegendPanel.htm)
		 Метод getSizeLegendPanel
		 возвращает панель управления легендой размера.


		 ![](../../sub_image.gif)
		 [getSizePanel](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.getSizePanel.htm)
		 Метод **getSizePanel**
		 возвращает панель управления размерами.


		 ![](../../sub_image.gif)
		 [getTooltipsPanel](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.getTooltipsPanel.htm)
		 Метод **getTooltipsPanel**
		 возвращает панель управления подсказками.


## События, унаследованные от класса [TreeChartMaster](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.htm)


		 Имя события
		 Краткое описание


		 ![](../../event_image.gif)
		 [PropertyChanged](dhtmlUiTree.chm::/Classes/TreeChartMaster/TreeChartMaster.PropertyChanged.htm)
		 Событие **PropertyChanged**
		 наступает при изменении свойства мастера.


## Методы, унаследованные от класса [Master](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [addClassToTitles](dhtmlUi.chm::/Classes/Master/Master.addClassToTitles.htm)
		 Метод addClassToTitles
		 устанавливает дополнительный класс стиля заголовку всех вкладок
		 мастера, за исключением первой.


		 ![](../../sub_image.gif)
		 [addMaster](dhtmlUi.chm::/Classes/Master/Master.addMaster.htm)
		 Метод addMaster добавляет
		 дочерний мастер.


		 ![](../../sub_image.gif)
		 [addMasterPanel](dhtmlUi.chm::/Classes/Master/Master.addMasterPanel.htm)
		 Метод addMasterPanel
		 добавляет панель мастера.


		 ![](../../sub_image.gif)
		 [addNavItem](dhtmlUi.chm::/Classes/Master/Master.addNavItem.htm)
		 Метод addNavItem добавляет
		 элемент управления в мастер.


		 ![](../../sub_image.gif)
		 [beginUpdate](dhtmlUi.chm::/Classes/Master/Master.beginUpdate.htm)
		 Метод beginUpdate начинает
		 обновление мастера.


		 ![](../../sub_image.gif)
		 [clearItems](dhtmlUi.chm::/Classes/Master/Master.clearItems.htm)
		 Метод clearItems очищает
		 список панелей.


		 ![](../../sub_image.gif)
		 [endUpdate](dhtmlUi.chm::/Classes/Master/Master.endUpdate.htm)
		 Метод endUpdate завершает
		 обновление мастера.


		 ![](../../sub_image.gif)
		 [expandFirstItem](dhtmlUi.chm::/Classes/Master/Master.expandFirstItem.htm)
		 Метод expandFirstItem
		 разворачивает первую видимую вкладку, если мастер видимый.


		 ![](../../sub_image.gif)
		 [getActiveGroupName](dhtmlUi.chm::/Classes/Master/Master.getActiveGroupName.htm)
		 Метод getActiveGroupName
		 возвращает имя показанной в данный момент группы контекстно-зависимых
		 панелей.


		 ![](../../sub_image.gif)
		 [getActivePanel](dhtmlUi.chm::/Classes/Master/Master.getActivePanel.htm)
		 Метод getActivePanel
		 возвращает активную панель мастера.


		 ![](../../sub_image.gif)
		 [getItem](dhtmlUi.chm::/Classes/Master/Master.getItem.htm)
		 Метод getItem возвращает
		 панель мастера по ее типу или порядковому номеру в списке панелей.


		 ![](../../sub_image.gif)
		 [getItems](dhtmlUi.chm::/Classes/Master/Master.getItems.htm)
		 Метод getItems возвращает
		 массив панелей мастера.


		 ![](../../sub_image.gif)
		 [hideGroup](dhtmlUi.chm::/Classes/Master/Master.hideGroup.htm)
		 Метод hideGroup скрывает
		 группы вкладок по имени.


		 ![](../../sub_image.gif)
		 [refresh](dhtmlUi.chm::/Classes/Master/Master.refresh.htm)
		 Метод refresh обновляет
		 все панели мастера.


		 ![](../../sub_image.gif)
		 [refreshGroup](dhtmlUi.chm::/Classes/Master/Master.refreshGroup.htm)
		 Метод refreshGroup
		 обновляет панели, относящиеся к определённой группе.


		 ![](../../sub_image.gif)
		 [removeMaster](dhtmlUi.chm::/Classes/Master/Master.removeMaster.htm)
		 Метод removeMaster
		 удаляет дочерний мастер.


		 ![](../../sub_image.gif)
		 [removeMasterPanel](dhtmlUi.chm::/Classes/Master/Master.removeMasterPanel.htm)
		 Метод removeMasterPanel
		 удаляет панель мастера.


		 ![](../../sub_image.gif)
		 [removePanelsByGroup](dhtmlUi.chm::/Classes/Master/Master.removePanelsByGroup.htm)
		 Метод removePanelsByGroup
		 удаляет панели по имени группы, к которой они относятся.


		 ![](../../sub_image.gif)
		 [showGroup](dhtmlUi.chm::/Classes/Master/Master.showGroup.htm)
		 Метод showGroup отображает
		 группы вкладок по имени.


		 ![](../../sub_image.gif)
		 [showOnlyGroup](dhtmlUi.chm::/Classes/Master/Master.showOnlyGroup.htm)
		 Метод showOnlyGroup
		 отображает только указанные группы, остальные скрывает.


## Методы, унаследованные от класса [ProxyControl](dhtmlUi.chm::/Classes/ProxyControl/proxycontrol.htm)


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [getControl](dhtmlUi.chm::/classes/proxycontrol/proxycontrol.getcontrol.htm)
		 Метод getControl возвращает
		 базовый элемент управления - наследник PP.Ui.Control.


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


		 ![](../../sub_image.gif)
		 [addClass](dhtmlUi.chm::/classes\control\control.addclass.htm)


		 Метод addClass добавляет
		 CSS-класс к компоненту.


		 ![](../../sub_image.gif)
		 [addEventHandler](dhtmlUi.chm::/Classes/Control/Control.addEventHandler.htm)
		 Метод addEventHandler
		 добавляет обработчик события на DOM-вершину.


		 ![](../../sub_image.gif)
		 [addStateClass](dhtmlUi.chm::/Classes/Control/Control.addStateClass.htm)


		 Метод addStateClass
		 добавляет CSS-класс к компоненту и удаляет прежний CSS-класс.


		 ![](../../sub_image.gif)
		 [addToNode](dhtmlUi.chm::/classes\control\control.addtonode.htm)


		 Метод addToNode добавляет
		 компонент в указанную вершину.


		 ![](../../sub_image.gif)
		 [bindEvents](dhtmlUi.chm::/Classes/Control/Control.bindEvents.htm)
		 Метод bindEvents подписывает
		 элемент на все стандартные события.


		 ![](../../sub_image.gif)
		 [getAnchorFlags](dhtmlUi.chm::/Classes/Control/Control.getAnchorFlags.htm)


		 Метод getAnchorFlags
		 возвращает JSON-объект с настройками текущей позиции компонента.


		 ![](../../sub_image.gif)
		 [getClass](dhtmlUi.chm::/classes\control\control.getclass.htm)


		 Метод getClass возвращает
		 текущие css-классы компонента.


		 ![](../../sub_image.gif)
		 [getCssStyle](dhtmlUi.chm::/Classes/Control/Control.getCssStyle.htm)


		 Метод getCssStyle возвращает
		 стили для указанной вершины.


		 ![](../../sub_image.gif)
		 [getDomNode](dhtmlUi.chm::/Classes/Control/Control.getDomNode.htm)


		 Метод getDomNode возвращает
		 главную DOM-вершину компонента.


		 ![](../../sub_image.gif)
		 [getFocused](dhtmlUi.chm::/Classes/Control/Control.getFocused.htm)


		 Метод getFocused определяет
		 наличие фокуса у компонента.


		 ![](../../sub_image.gif)
		 [getIsBinded](dhtmlUi.chm::/Classes/Control/Control.getIsBinded.htm)
		 Метод getIsBinded возвращает
		 признак подписи элемента на события DOM-вершины.


		 ![](../../sub_image.gif)
		 [hide](dhtmlUi.chm::/classes\control\control.hide.htm)


		 Метод hide скрывает
		 элемент управления.


		 ![](../../sub_image.gif)
		 [hideToolTip](dhtmlUi.chm::/Classes/Control/Control.hideToolTip.htm)


		 Метод hideToolTip очищает
		 таймаут появления подсказки и скрывает её, если она был показана.


		 ![](../../sub_image.gif)
		 [refreshStyle](dhtmlUi.chm::/Classes/Control/Control.refreshStyle.htm)
		 Метод refreshStyle
		 обновляет CSS-стили элемента.


		 ![](../../sub_image.gif)
		 [removeClass](dhtmlUi.chm::/classes\control\control.removeclass.htm)


		 Метод removeClass удаляет
		 CSS-класс из компонента.


		 ![](../../sub_image.gif)
		 [removeEventHandler](dhtmlUi.chm::/Classes/Control/Control.removeEventHandler.htm)
		 Метод removeEventHandler
		 удаляет обработчик события DOM-вершины.


		 ![](../../sub_image.gif)
		 [removeFromDOM](dhtmlUi.chm::/classes/control/control.removefromdom.htm)
		 Метод removeFromDOM
		 удаляет вершину из DOM-структуры.


		 ![](../../sub_image.gif)
		 [removeStateClasses](dhtmlUi.chm::/Classes/Control/Control.removeStateClasses.htm)


		 Метод removeStateClasses
		 удаляет CSS-классы компонента.


		 ![](../../sub_image.gif)
		 [setDraggable](dhtmlUi.chm::/classes\control\control.setdraggable.htm)


		 Метод setDraggable
		 устанавливает возможность перетаскивания компонента на HTML-странице.


		 ![](../../sub_image.gif)
		 [setFocus](dhtmlUi.chm::/Classes/Control/Control.setFocus.htm)


		 Метод setFocus устанавливает
		 фокус компонента.


		 ![](../../sub_image.gif)
		 [setIsHovered](dhtmlUi.chm::/Classes/Control/Control.setIsHovered.htm)


		 Метод setIsHovered
		 настраивает отображение компонента только при наведении на него
		 курсора.


		 ![](../../sub_image.gif)
		 [setSize](dhtmlUi.chm::/classes\control\control.setsize.htm)


		 Метод setSize устанавливает
		 размеры компонента.


		 ![](../../sub_image.gif)
		 [show](dhtmlUi.chm::/classes/control/control.show.htm)


		 Метод show отображает
		 элемент управления.


		 ![](../../sub_image.gif)
		 [unBindEvents](dhtmlUi.chm::/Classes/Control/Control.unBindEvents.htm)
		 Метод unBindEvents
		 отписывает элемент от всех стандартных событий.


		 ![](../../sub_image.gif)
		 [updatePosition](dhtmlUi.chm::/Classes/Control/Control.updatePosition.htm)


		 Метод updatePosition
		 корректирует размер и положение при абсолютном позиционировании
		 на основе текущих параметров.


		 ![](../../sub_image.gif)
		 [updateSize](dhtmlUi.chm::/classes\control\control.updatesize.htm)


		 Метод updateSize обновляет
		 размеры компонента подгонке размеров контейнера, в котором находится
		 компонент.


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


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


		 ![](../../sub_image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../sub_image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../sub_image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../sub_image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../sub_image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../sub_image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../sub_image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../sub_image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../sub_image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../sub_image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../sub_image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../sub_image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../sub_image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[BubbleTree](../BubbleTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
