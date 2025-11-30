# CollapsedDimPanel

CollapsedDimPanel
-


# CollapsedDimPanel


Пространство имен: PP.Ufe.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[Container](dhtmlUi.chm::/Classes/Container/Container.htm)


[Panel](dhtmlUi.chm::/Classes/Panel/Panel.htm)


[TransformDialogDimPanel](../TransformDialogDimPanel/TransformDialogDimPanel.htm)


CollapsedDimPanel


## Описание


Класс CollapsedDimPanel реализует
 раскрывающуюся панель, содержащую дерево с элементами измерения.


## Синтаксис


PP.initClass(PP.Ufe.Ui.CollapsedDimPanel, PP.Ufe.Ui.[TransformDialogDimPanel](../TransformDialogDimPanel/TransformDialogDimPanel.htm),
 "PP.Ufe.Ui.CollapsedDimPanel");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [CollapsedDimPanel](Constructor_CollapsedDimPanel.htm)
		 Конструктор CollapsedDimPanel
		 создает экземпляр класса CollapsedDimPanel.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getDimCombo](CollapsedDimPanel.getDimCombo.htm)
		 Метод getDimCombo возвращает
		 раскрывающийся список, в котором содержится дерево с элементами
		 измерения.


		 ![](../../../Sub_Image.gif)
		 [getDimTreeView](CollapsedDimPanel.getDimTreeView.htm)
		 Метод getDimTreeView
		 возвращает дерево раскрывающейся панели с элементами выбранного
		 измерения.


## Методы, унаследованные от класса [TransformDialogDimPanel](../TransformDialogDimPanel/TransformDialogDimPanel.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getExpression](dhtmlUfe.chm::/Classes/PP_Ufe_Ui/TransformDialogDimPanel/TransformDialogDimPanel.getExpression.htm)
		 Метод getExpression
		 возвращает объект с данными о выбранном элементе.


## События, унаследованные от класса [TransformDialogDimPanel](../TransformDialogDimPanel/TransformDialogDimPanel.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [DimensionExpanded](dhtmlUfe.chm::/Classes/PP_Ufe_Ui/TransformDialogDimPanel/TransformDialogDimPanel.DimensionExpanded.htm)
		 Событие DimensionExpanded
		 наступает после раскрытия панели с помощью пункта контекстного
		 меню.


		 ![](../../../Event_Image.gif)
		 [DimensionModeChanged](dhtmlUfe.chm::/Classes/PP_Ufe_Ui/TransformDialogDimPanel/TransformDialogDimPanel.DimensionModeChanged.htm)
		 Событие DimensionModeChanged
		 наступает после изменения режима отображения элементов дерева
		 панели.


		 ![](../../../Event_Image.gif)
		 [TreeDblClick](dhtmlUfe.chm::/Classes/PP_Ufe_Ui/TransformDialogDimPanel/TransformDialogDimPanel.TreeDblClick.htm)
		 Событие TreeDblClick
		 наступает после двойного нажатия на элемент дерева панели.


		 ![](../../../Event_Image.gif)
		 [TreeDragStart](dhtmlUfe.chm::/Classes/PP_Ufe_Ui/TransformDialogDimPanel/TransformDialogDimPanel.TreeDragStart.htm)
		 Событие TreeDragStart
		 наступает во время перетаскивания элемента дерева панели.


		 ![](../../../Event_Image.gif)
		 [TreeSelectionChanged](dhtmlUfe.chm::/Classes/PP_Ufe_Ui/TransformDialogDimPanel/TransformDialogDimPanel.TreeSelectionChanged.htm)
		 Событие TreeSelectionChanged
		 наступает после изменения отметки элементов дерева панели.


## Свойства, унаследованные от класса [Panel](dhtmlUi.chm::/Classes/Panel/Panel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [IsAbsolutePositioning](dhtmlUi.chm::/Classes/Panel/Panel.IsAbsolutePositioning.htm)
		 Свойство IsAbsolutePositioning
		 определяет позиционирование элементов панели.


		 ![](../../../Property_Image.gif)
		 [Name](dhtmlUi.chm::/Classes/Panel/Panel.Name.htm)
		 Свойство Name устанавливает
		 наименование панели.


## Методы, унаследованные от класса [Panel](dhtmlUi.chm::/Classes/Panel/Panel.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [add](dhtmlUi.chm::/Classes/Panel/Panel.add.htm)
		 Метод add добавляет
		 элемент на панель.


		 ![](../../../Sub_Image.gif)
		 [beginUpdate](dhtmlUi.chm::/Classes/Panel/Panel.beginUpdate.htm)
		 Метод beginUpdate отключает
		 обновление панели до тех пор, пока не будет вызван метод [endUpdate](dhtmlUi.chm::/Classes/Panel/Panel.endUpdate.htm).


		 ![](../../../Sub_Image.gif)
		 [endUpdate](dhtmlUi.chm::/Classes/Panel/Panel.endUpdate.htm)
		 Метод endUpdate включает
		 перерисовку панели и обновляет её.


		 ![](../../../Sub_Image.gif)
		 [getContentNode](dhtmlUi.chm::/Classes/Panel/Panel.getContentNode.htm)
		 Метод getContentNode
		 возвращает DOM-вершину содержимого панели.


		 ![](../../../Sub_Image.gif)
		 [getItemByPoint](dhtmlUi.chm::/Classes/Panel/Panel.getItemByPoint.htm)
		 Метод getItemByPoint
		 возвращает элемент панели по координатам.


		 ![](../../../Sub_Image.gif)
		 [supportAnchors](dhtmlUi.chm::/Classes/Panel/Panel.supportAnchors.htm)
		 Метод supportAnchors возвращает
		 признак использования [Anchors](dhtmlUi.chm::/Classes/Control/Control.Anchors.htm)
		 в панели.


		 ![](../../../Sub_Image.gif)
		 [toBack](dhtmlUi.chm::/Classes/Panel/Panel.toBack.htm)
		 Метод toBack перемещает
		 элемент на задний план.


		 ![](../../../Sub_Image.gif)
		 [toFront](dhtmlUi.chm::/Classes/Panel/Panel.toFront.htm)
		 Метод toFront перемещает
		 элемент на передний план.


## Свойства, унаследованные от класса [Container](dhtmlUi.chm::/Classes/Container/Container.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Items](dhtmlUi.chm::/classes/container/container.items.htm)
		 Свойство Items устанавливает
		 массив дочерних элементов контейнера.


## Методы, унаследованные от класса [Container](dhtmlUi.chm::/Classes/Container/Container.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clear](dhtmlUi.chm::/classes/container/container.clear.htm)
		 Метод clear удаляет
		 компонент с html-страницы.


		 ![](../../../Sub_Image.gif)
		 [contains](dhtmlUi.chm::/Classes/Container/Container.contains.htm)
		 Метод contains проверяет
		 наличие элемента в контейнере.


		 ![](../../../Sub_Image.gif)
		 [forEachElement](dhtmlUi.chm::/Classes/Container/Container.forEachElement.htm)
		 Метод forEachElement
		 применяет функцию ко всем элементам контейнера.


		 ![](../../../Sub_Image.gif)
		 [getCount](dhtmlUi.chm::/classes/container/container.getcount.htm)
		 Метод getCount возвращает
		 количество дочерних элементов контейнера.


		 ![](../../../Sub_Image.gif)
		 [getItem](dhtmlUi.chm::/classes/container/container.getitem.htm)
		 Метод getItem возвращает
		 дочерний элемент контейнера по его индексу.


		 ![](../../../Sub_Image.gif)
		 [getItemById](dhtmlUi.chm::/classes/container/container.getitembyid.htm)
		 Метод getItemById возвращает
		 дочерний элемент контейнера по его идентификатору.


		 ![](../../../Sub_Image.gif)
		 [getLayoutItems](dhtmlUi.chm::/Classes/Container/Container.getLayoutItems.htm)
		 Метод getLayoutItems
		 возвращает массив панелей таблицы.


		 ![](../../../Sub_Image.gif)
		 [hideAt](dhtmlUi.chm::/classes/container/gridpanel.hideat.htm)
		 Метод hideAt скрывает дочерний
		 элемент контейнера по его индексу.


		 ![](../../../Sub_Image.gif)
		 [remove](dhtmlUi.chm::/classes/container/container.remove.htm)
		 Метод remove удаляет
		 указанный дочерний элемент контейнера.


		 ![](../../../Sub_Image.gif)
		 [removeAt](dhtmlUi.chm::/classes/container/container.removeat.htm)
		 Метод removeAt удаляет
		 дочерний элемент контейнера по его индексу.


		 ![](../../../Sub_Image.gif)
		 [setSettingsToControls](dhtmlUi.chm::/classes/container/container.setsettingstocontrols.htm)
		 Метод setSettingsToControls
		 устанавливает общие настройки для дочерних элементов контейнера.


		 ![](../../../Sub_Image.gif)
		 [showAt](dhtmlUi.chm::/classes/container/container.showat.htm)
		 Метод showAt отображает
		 дочерний элемент контейнера по его индексу.


## Свойства, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Anchors](dhtmlUi.chm::/Classes/Control/Control.Anchors.htm)
		 Свойство Anchors определяет
		 позицию компонента, размещенного внутри контейнера.


		 ![](../../../Property_Image.gif)
		 [Animation](dhtmlUi.chm::/Classes/Control/Control.Animation.htm)
		 Свойство Animation
		 определяет параметры анимации для компонента.


		 ![](../../../Property_Image.gif)
		 [Bottom](dhtmlUi.chm::/Classes/Control/Control.Bottom.htm)
		 Свойство Bottom определяет
		 отступ снизу при размещении компонента внутри LayoutPanel.


		 ![](../../../Property_Image.gif)
		 [Content](dhtmlUi.chm::/classes\control\control.content.htm)
		 Свойство Content определяет
		 содержимое компонента.


		 ![](../../../Property_Image.gif)
		 [ContextMenu](dhtmlUi.chm::/Classes\Control\Control.ContextMenu.htm)
		 Свойство ContextMenu
		 определяет контекстное меню для компонента.


		 ![](../../../Property_Image.gif)
		 [Data](dhtmlUi.chm::/Classes/Control/Control.Data.htm)
		 Свойство Data предназначено
		 для хранения любых пользовательских данных.


		 ![](../../../Property_Image.gif)
		 [Enabled](dhtmlUi.chm::/classes\control\control.enabled.htm)
		 Свойство Enabled определяет
		 признак доступности компонента для использования.


		 ![](../../../Property_Image.gif)
		 [Height](dhtmlUi.chm::/classes\control\control.height.htm)
		 Свойство Height определяет
		 высоту компонента.


		 ![](../../../Property_Image.gif)
		 [IsRTL](dhtmlUi.chm::/classes\control\control.isrtl.htm)
		 Свойство IsRTL определяет
		 признак расположения элементов компонента по правому краю.


		 ![](../../../Property_Image.gif)
		 [IsVisible](dhtmlUi.chm::/Classes/Control/Control.IsVisible.htm)
		 Свойство IsVisible
		 определяет признак отображения компонента.


		 ![](../../../Property_Image.gif)
		 [Left](dhtmlUi.chm::/Classes/Control/Control.Left.htm)
		 Свойство Left определяет
		 отступ слева при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../../Property_Image.gif)
		 [Opacity](dhtmlUi.chm::/Classes/Control/Control.Opacity.htm)
		 Свойство Opacity определяет
		 прозрачность компонента.


		 ![](../../../Property_Image.gif)
		 [Parent](dhtmlUi.chm::/Classes/Control/Control.Parent.htm)
		 Свойство Parent определяет
		 родительский компонент элемента управления.


		 ![](../../../Property_Image.gif)
		 [ParentNode](dhtmlUi.chm::/Classes/Control/Control.ParentNode.htm)
		 Свойство ParentNode
		 определяет родительскую DOM-вершину.


		 ![](../../../Property_Image.gif)
		 [ResourceKey](dhtmlUi.chm::/classes\control\control.resourcekey.htm)
		 Свойство ResourceKey
		 определяет ресурсный ключ для компонента.


		 ![](../../../Property_Image.gif)
		 [Right](dhtmlUi.chm::/Classes/Control/Control.Right.htm)
		 Свойство Right определяет
		 отступ справа при размещении компонента внутри LayoutPanel.


		 ![](../../../Property_Image.gif)
		 [Rotate](dhtmlUi.chm::/Classes/Control/Control.Rotate.htm)
		 Свойство Rotate определяет
		 угол поворота компонента.


		 ![](../../../Property_Image.gif)
		 [ShowToolTip](dhtmlUi.chm::/Classes/Control/Control.ShowToolTip.htm)
		 Свойство ShowToolTip
		 определяет признак возможности отображения [всплывающей
		 подсказки](dhtmlUi.chm::/Classes/Control/Control.ToolTip.htm) компонента.


		 ![](../../../Property_Image.gif)
		 [Style](dhtmlUi.chm::/Classes/Control/Control.Style.htm)
		 Свойство Style определяет
		 стиль для компонента.


		 ![](../../../Property_Image.gif)
		 [TabIndex](dhtmlUi.chm::/classes\control\control.tabindex.htm)
		 Свойство TabIndex определяет
		 последовательность перехода элемента управления внутри контейнера.


		 ![](../../../Property_Image.gif)
		 [Tag](dhtmlUi.chm::/Classes/Control/Control.Tag.htm)
		 Свойство Tag определяет
		 JSON-объект, ассоциированный с компонентом.


		 ![](../../../Property_Image.gif)
		 [ToolTip](dhtmlUi.chm::/classes\control\control.tooltip.htm)
		 Свойство ToolTip определяет
		 текст всплывающей подсказки компонента.


		 ![](../../../Property_Image.gif)
		 [Top](dhtmlUi.chm::/Classes/Control/Control.Top.htm)
		 Свойство Top определяет
		 отступ сверху при размещении компонента внутри [GridPanel](dhtmlUi.chm::/Components/GridPanel/GridPanel.htm).


		 ![](../../../Property_Image.gif)
		 [Value](dhtmlUi.chm::/classes\control\control.value.htm)
		 Свойство Value определяет
		 значение компонента.


		 ![](../../../Property_Image.gif)
		 [Width](dhtmlUi.chm::/classes\control\control.width.htm)
		 Свойство Width определяет
		 ширину компонента.


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [addClass](dhtmlUi.chm::/classes\control\control.addclass.htm)


		 Метод addClass добавляет
		 CSS-класс к компоненту.


		 ![](../../../Sub_Image.gif)
		 [addEventHandler](dhtmlUi.chm::/Classes/Control/Control.addEventHandler.htm)
		 Метод addEventHandler
		 добавляет обработчик события на DOM-вершину.


		 ![](../../../Sub_Image.gif)
		 [addStateClass](dhtmlUi.chm::/Classes/Control/Control.addStateClass.htm)


		 Метод addStateClass
		 добавляет CSS-класс к компоненту и удаляет прежний CSS-класс.


		 ![](../../../Sub_Image.gif)
		 [addToNode](dhtmlUi.chm::/classes\control\control.addtonode.htm)


		 Метод addToNode добавляет
		 компонент в указанную вершину.


		 ![](../../../Sub_Image.gif)
		 [bindEvents](dhtmlUi.chm::/Classes/Control/Control.bindEvents.htm)
		 Метод bindEvents подписывает
		 элемент на все стандартные события.


		 ![](../../../Sub_Image.gif)
		 [getAnchorFlags](dhtmlUi.chm::/Classes/Control/Control.getAnchorFlags.htm)


		 Метод getAnchorFlags
		 возвращает JSON-объект с настройками текущей позиции компонента.


		 ![](../../../Sub_Image.gif)
		 [getClass](dhtmlUi.chm::/classes\control\control.getclass.htm)


		 Метод getClass возвращает
		 текущие css-классы компонента.


		 ![](../../../Sub_Image.gif)
		 [getCssStyle](dhtmlUi.chm::/Classes/Control/Control.getCssStyle.htm)


		 Метод getCssStyle возвращает
		 стили для указанной вершины.


		 ![](../../../Sub_Image.gif)
		 [getDomNode](dhtmlUi.chm::/Classes/Control/Control.getDomNode.htm)


		 Метод getDomNode возвращает
		 главную DOM-вершину компонента.


		 ![](../../../Sub_Image.gif)
		 [getFocused](dhtmlUi.chm::/Classes/Control/Control.getFocused.htm)


		 Метод getFocused определяет
		 наличие фокуса у компонента.


		 ![](../../../Sub_Image.gif)
		 [getIsBinded](dhtmlUi.chm::/Classes/Control/Control.getIsBinded.htm)
		 Метод getIsBinded возвращает
		 признак подписи элемента на события DOM-вершины.


		 ![](../../../Sub_Image.gif)
		 [hide](dhtmlUi.chm::/classes\control\control.hide.htm)


		 Метод hide скрывает
		 элемент управления.


		 ![](../../../Sub_Image.gif)
		 [hideToolTip](dhtmlUi.chm::/Classes/Control/Control.hideToolTip.htm)


		 Метод hideToolTip очищает
		 таймаут появления подсказки и скрывает её, если она был показана.


		 ![](../../../Sub_Image.gif)
		 [refreshStyle](dhtmlUi.chm::/Classes/Control/Control.refreshStyle.htm)
		 Метод refreshStyle
		 обновляет CSS-стили элемента.


		 ![](../../../Sub_Image.gif)
		 [removeClass](dhtmlUi.chm::/classes\control\control.removeclass.htm)


		 Метод removeClass удаляет
		 CSS-класс из компонента.


		 ![](../../../Sub_Image.gif)
		 [removeEventHandler](dhtmlUi.chm::/Classes/Control/Control.removeEventHandler.htm)
		 Метод removeEventHandler
		 удаляет обработчик события DOM-вершины.


		 ![](../../../Sub_Image.gif)
		 [removeFromDOM](dhtmlUi.chm::/classes/control/control.removefromdom.htm)
		 Метод removeFromDOM
		 удаляет вершину из DOM-структуры.


		 ![](../../../Sub_Image.gif)
		 [removeStateClasses](dhtmlUi.chm::/Classes/Control/Control.removeStateClasses.htm)


		 Метод removeStateClasses
		 удаляет CSS-классы компонента.


		 ![](../../../Sub_Image.gif)
		 [setDraggable](dhtmlUi.chm::/classes\control\control.setdraggable.htm)


		 Метод setDraggable
		 устанавливает возможность перетаскивания компонента на HTML-странице.


		 ![](../../../Sub_Image.gif)
		 [setFocus](dhtmlUi.chm::/Classes/Control/Control.setFocus.htm)


		 Метод setFocus устанавливает
		 фокус компонента.


		 ![](../../../Sub_Image.gif)
		 [setIsHovered](dhtmlUi.chm::/Classes/Control/Control.setIsHovered.htm)


		 Метод setIsHovered
		 настраивает отображение компонента только при наведении на него
		 курсора.


		 ![](../../../Sub_Image.gif)
		 [setSize](dhtmlUi.chm::/classes\control\control.setsize.htm)


		 Метод setSize устанавливает
		 размеры компонента.


		 ![](../../../Sub_Image.gif)
		 [show](dhtmlUi.chm::/classes/control/control.show.htm)


		 Метод show отображает
		 элемент управления.


		 ![](../../../Sub_Image.gif)
		 [unBindEvents](dhtmlUi.chm::/Classes/Control/Control.unBindEvents.htm)
		 Метод unBindEvents
		 отписывает элемент от всех стандартных событий.


		 ![](../../../Sub_Image.gif)
		 [updatePosition](dhtmlUi.chm::/Classes/Control/Control.updatePosition.htm)


		 Метод updatePosition
		 корректирует размер и положение при абсолютном позиционировании
		 на основе текущих параметров.


		 ![](../../../Sub_Image.gif)
		 [updateSize](dhtmlUi.chm::/classes\control\control.updatesize.htm)


		 Метод updateSize обновляет
		 размеры компонента подгонке размеров контейнера, в котором находится
		 компонент.


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [Drag](dhtmlUi.chm::/classes\control\control.drag.htm)
		 Событие Drag наступает
		 при нажатии и удерживании кнопки мыши.


		 ![](../../../Event_Image.gif)
		 [DragEnd](dhtmlUi.chm::/classes\control\control.dragend.htm)
		 Событие DragEnd наступает
		 при окончании перетаскивания компонента.


		 ![](../../../Event_Image.gif)
		 [DragStart](dhtmlUi.chm::/classes\control\control.dragstart.htm)
		 Событие DragStart наступает,
		 когда начинается перетаскивание компонента.


		 ![](../../../Event_Image.gif)
		 [OnContextMenu](dhtmlUi.chm::/classes\control\control.OnContextMenu.htm)
		 Событие OnContextMenu
		 наступает при вызове контекстного меню компонента.


		 ![](../../../Event_Image.gif)
		 [SizeChanged](dhtmlUi.chm::/Classes/Control/Control.SizeChanged.htm)
		 Событие SizeChanged
		 наступает после изменения размеров компонента.


		 ![](../../../Event_Image.gif)
		 [SizeChanging](dhtmlUi.chm::/Classes/Control/Control.SizeChanging.htm)
		 Событие SizeChanging
		 наступает во время изменения размеров компонента.


## Свойства, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../Sub_Image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../Sub_Image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../Sub_Image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../Sub_Image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../Sub_Image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../Sub_Image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../Sub_Image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP.Ufe.Ui](../../PP.Ufe.Ui.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
