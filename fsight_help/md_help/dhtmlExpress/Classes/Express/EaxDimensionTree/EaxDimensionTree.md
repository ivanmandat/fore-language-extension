# EaxDimensionTree

EaxDimensionTree
-


**


# EaxDimensionTree


Пространство имен**: PP.Exp.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[ProxyControl](dhtmlUi.chm::/Classes/ProxyControl/ProxyControl.htm)


[ElsTree](dhtmlMetabase.chm::/Classes/Metabase/ElsTree/ElsTree.htm)


[DimTree](dhtmlDim.chm::/Classes/Metabase/DimTree/DimTree.htm)


EaxDimensionTree


## Описание


Класс **EaxDimensionTree**
 реализует дерево элементов измерения экспресс-отчета.


## Синтаксис


PP.initClass(PP.Exp.Ui.EaxDimensionTree, PP.Mb.Ui.[DimTree](dhtmlDim.chm::/Classes/Metabase/DimTree/DimTree.htm),
 "PP.Exp.Ui.EaxDimensionTree", [PP.Exp.Ui.IEaxDimensionTree]);


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [ActiveIndicator](EaxDimensionTree.ActiveIndicator.htm)
		 Свойство ActiveIndicator
		 определяет текущую метрику дерева измерений.


		 ![](../../../Property_Image.gif)
		 [EaxDimKey](EaxDimensionTree.EaxDimKey.htm)
		 Свойство EaxDimKey
		 определяет ключ измерения.


		 ![](../../../Property_Image.gif)
		 [EaxSource](EaxDimensionTree.EaxSource.htm)
		 Свойство EaxSource
		 определяет источник дерева измерений.


		 ![](../../../Property_Image.gif)
		 [EditMode](EaxDimensionTree.EditMode.htm)
		 Свойство EditMode
		 определяет возможность редактирования элементов дерева измерений.


		 ![](../../../Property_Image.gif)
		 [Mode](EaxDimensionTree.Mode.htm)
		 Свойство Mode определяет
		 режим работы дерева измерений.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [addElement](EaxDimensionTree.addElement.htm)
		 Метод addElement открывает
		 диалог создания нового элемента.


		 ![](../../../sub_image.gif)
		 [addPredefinedFormula](EaxDimensionTree.addPredefinedFormula.htm)
		 Метод addPredefinedFormula
		 применяет формулу объединения элементов.


		 ![](../../../sub_image.gif)
		 [getDataSourceKey](EaxDimensionTree.getDataSourceKey.htm)
		 Метод getDataSourceKey
		 возвращает индекс источника данных, если экспресс-отчет содержит
		 несколько источников.


		 ![](../../../sub_image.gif)
		 [getIndicatorEls](EaxDimensionTree.getIndicatorEls.htm)
		 Метод getIndicatorEls
		 возвращает массив доступных метрик.


		 ![](../../../sub_image.gif)
		 [getIsIndicatorBehaviour](EaxDimensionTree.getIsIndicatorBehaviour.htm)
		 Метод getIsIndicatorBehaviour
		 определяет использование метрик в дереве измерений.


		 ![](../../../sub_image.gif)
		 [getIsPrivate](EaxDimensionTree.getIsPrivate.htm)
		 Метод getIsPrivate
		 определяет, построено ли дерево измерений на частном измерении.


		 ![](../../../sub_image.gif)
		 [moveDownElement](EaxDimensionTree.moveDownElement.htm)
		 Метод moveDownElement
		 перемещает указанный элемент на одну позицию ниже.


		 ![](../../../sub_image.gif)
		 [moveLevelDownElement](EaxDimensionTree.moveLevelDownElement.htm)
		 Метод moveLevelDownElement
		 перемещает указанный элемент на уровень ниже.


		 ![](../../../sub_image.gif)
		 [moveUpElement](EaxDimensionTree.moveUpElement.htm)
		 Метод moveUpElement
		 перемещает указанный элемент на одну позицию выше.


		 ![](../../../sub_image.gif)
		 [removeElement](EaxDimensionTree.removeElement.htm)
		 Метод removeElement
		 удаляет указанный элемент.


		 ![](../../../sub_image.gif)
		 [renameElement](EaxDimensionTree.renameElement.htm)
		 Метод renameElement
		 переименовывает элемент.


		 ![](../../../sub_image.gif)
		 [restoreHierarchy](EaxDimensionTree.restoreHierarchy.htm)
		 Метод restoreHierarchy
		 восстанавливает иерархию измерения.


		 ![](../../../sub_image.gif)
		 [saveCustomHierarchy](EaxDimensionTree.saveCustomHierarchy.htm)
		 Метод saveCustomHierarchy
		 сохраняет текущую пользовательскую иерархию.


		 ![](../../../sub_image.gif)
		 [showDimEditDialog](EaxDimensionTree.showDimEditDialog.htm)
		 Метод showDimEditDialog
		 отображает диалог редактирования измерения.


		 ![](../../../sub_image.gif)
		 [showTransformDialog](EaxDimensionTree.showTransformDialog.htm)
		 Метод showTransformDialog
		 открывает окно редактирования формулы для сфокусированного
		 элемента.


## События


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [FormulaChanged](EaxDimensionTree.FormulaChanged.htm)
		 Событие FormulaChanged
		 наступает после изменения формулы элемента.


		 ![](../../../Event_Image.gif)
		 [HierarchyEdited](EaxDimensionTree.HierarchyEdited.htm)
		 Событие HierarchyEdited
		 наступает после редактирования иерархии.


		 ![](../../../Event_Image.gif)
		 [HierarchyEditing](EaxDimensionTree.HirearchyEditing.htm)
		 Событие HierarchyEditing
		 наступает перед редактированием иерархии.


		 ![](../../../Event_Image.gif)
		 [NamingsChanged](EaxDimensionTree.NamingChanged.htm)
		 Событие NamingsChanged
		 наступает после смены наименований элементов.


## Свойства, унаследованные от класса [DimTree](dhtmlDim.chm::/Classes/Metabase/DimTree/DimTree.htm)


Описание свойств находится в разработке.


## Методы, унаследованные от класса [DimTree](dhtmlDim.chm::/Classes/Metabase/DimTree/DimTree.htm)


Описание методов находится в разработке.


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getLoadToFirstSelected](dhtmlDim.chm::/Classes/Metabase/DimTree/DimTree.getLoadToFirstSelected.htm)
		 Метод getLoadToFirstSelected
		 возвращает признак необходимости загрузки дерева до первой выделенной
		 вершины.


		 ![](../../../sub_image.gif)
		 [getPredefinedAttributeId](dhtmlDim.chm::/Classes/Metabase/DimTree/DimTree.getPredefinedAttributeId.htm)
		 Метод getPredefinedAttributeId
		 возвращает идентификатор атрибута по предустановленному значению
		 идентификатора.


		 ![](../../../sub_image.gif)
		 [selectGroupItems](dhtmlDim.chm::/Classes/Metabase/DimTree/DimTree.selectGroupItems.htm)
		 Метод selectGroupItems
		 устанавливает отметку элементам группы.


		 ![](../../../sub_image.gif)
		 [setActiveGroupId](dhtmlDim.chm::/Classes/Metabase/DimTree/DimTree.setActiveGroupId.htm)
		 Метод setActiveGroupId
		 устанавливает идентификатор активной группы элементов справочника.


## События, унаследованные от класса [DimTree](dhtmlDim.chm::/Classes/Metabase/DimTree/DimTree.htm)


Описание событий находится в разработке.


## Свойства, унаследованные от класса [ElsTree](dhtmlMetabase.chm::/Classes/Metabase/ElsTree/ElsTree.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [TextFilter](dhtmlMetabase.chm::/Classes/Metabase/ElsTree/ElsTree.TextFilter.htm)
		 Свойство TextFilter
		 определяет текстовый фильтр, применяемый к элементам дерева.


## Методы, унаследованные от класса [ElsTree](dhtmlMetabase.chm::/Classes/Metabase/ElsTree/ElsTree.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [loadFirst](dhtmlMetabase.chm::/Classes/Metabase/ElsTree/ElsTree.loadFirst.htm)
		 Метод loadFirst загружает
		 корневые элементы дерева, если они еще не загружены.


## Методы, унаследованные от класса [ProxyControl](dhtmlUi.chm::/Classes/ProxyControl/ProxyControl.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getControl](dhtmlUi.chm::/classes/proxycontrol/proxycontrol.getcontrol.htm)
		 Метод getControl возвращает
		 базовый элемент управления - наследник PP.Ui.Control.


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


## Методы, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [addClass](dhtmlUi.chm::/classes\control\control.addclass.htm)


		 Метод addClass добавляет
		 CSS-класс к компоненту.


		 ![](../../../sub_image.gif)
		 [addEventHandler](dhtmlUi.chm::/Classes/Control/Control.addEventHandler.htm)
		 Метод addEventHandler
		 добавляет обработчик события на DOM-вершину.


		 ![](../../../sub_image.gif)
		 [addStateClass](dhtmlUi.chm::/Classes/Control/Control.addStateClass.htm)


		 Метод addStateClass
		 добавляет CSS-класс к компоненту и удаляет прежний CSS-класс.


		 ![](../../../sub_image.gif)
		 [addToNode](dhtmlUi.chm::/classes\control\control.addtonode.htm)


		 Метод addToNode добавляет
		 компонент в указанную вершину.


		 ![](../../../sub_image.gif)
		 [bindEvents](dhtmlUi.chm::/Classes/Control/Control.bindEvents.htm)
		 Метод bindEvents подписывает
		 элемент на все стандартные события.


		 ![](../../../sub_image.gif)
		 [getAnchorFlags](dhtmlUi.chm::/Classes/Control/Control.getAnchorFlags.htm)


		 Метод getAnchorFlags
		 возвращает JSON-объект с настройками текущей позиции компонента.


		 ![](../../../sub_image.gif)
		 [getClass](dhtmlUi.chm::/classes\control\control.getclass.htm)


		 Метод getClass возвращает
		 текущие css-классы компонента.


		 ![](../../../sub_image.gif)
		 [getCssStyle](dhtmlUi.chm::/Classes/Control/Control.getCssStyle.htm)


		 Метод getCssStyle возвращает
		 стили для указанной вершины.


		 ![](../../../sub_image.gif)
		 [getDomNode](dhtmlUi.chm::/Classes/Control/Control.getDomNode.htm)


		 Метод getDomNode возвращает
		 главную DOM-вершину компонента.


		 ![](../../../sub_image.gif)
		 [getFocused](dhtmlUi.chm::/Classes/Control/Control.getFocused.htm)


		 Метод getFocused определяет
		 наличие фокуса у компонента.


		 ![](../../../sub_image.gif)
		 [getIsBinded](dhtmlUi.chm::/Classes/Control/Control.getIsBinded.htm)
		 Метод getIsBinded возвращает
		 признак подписи элемента на события DOM-вершины.


		 ![](../../../sub_image.gif)
		 [hide](dhtmlUi.chm::/classes\control\control.hide.htm)


		 Метод hide скрывает
		 элемент управления.


		 ![](../../../sub_image.gif)
		 [hideToolTip](dhtmlUi.chm::/Classes/Control/Control.hideToolTip.htm)


		 Метод hideToolTip очищает
		 таймаут появления подсказки и скрывает её, если она был показана.


		 ![](../../../sub_image.gif)
		 [refreshStyle](dhtmlUi.chm::/Classes/Control/Control.refreshStyle.htm)
		 Метод refreshStyle
		 обновляет CSS-стили элемента.


		 ![](../../../sub_image.gif)
		 [removeClass](dhtmlUi.chm::/classes\control\control.removeclass.htm)


		 Метод removeClass удаляет
		 CSS-класс из компонента.


		 ![](../../../sub_image.gif)
		 [removeEventHandler](dhtmlUi.chm::/Classes/Control/Control.removeEventHandler.htm)
		 Метод removeEventHandler
		 удаляет обработчик события DOM-вершины.


		 ![](../../../sub_image.gif)
		 [removeFromDOM](dhtmlUi.chm::/classes/control/control.removefromdom.htm)
		 Метод removeFromDOM
		 удаляет вершину из DOM-структуры.


		 ![](../../../sub_image.gif)
		 [removeStateClasses](dhtmlUi.chm::/Classes/Control/Control.removeStateClasses.htm)


		 Метод removeStateClasses
		 удаляет CSS-классы компонента.


		 ![](../../../sub_image.gif)
		 [setDraggable](dhtmlUi.chm::/classes\control\control.setdraggable.htm)


		 Метод setDraggable
		 устанавливает возможность перетаскивания компонента на HTML-странице.


		 ![](../../../sub_image.gif)
		 [setFocus](dhtmlUi.chm::/Classes/Control/Control.setFocus.htm)


		 Метод setFocus устанавливает
		 фокус компонента.


		 ![](../../../sub_image.gif)
		 [setIsHovered](dhtmlUi.chm::/Classes/Control/Control.setIsHovered.htm)


		 Метод setIsHovered
		 настраивает отображение компонента только при наведении на него
		 курсора.


		 ![](../../../sub_image.gif)
		 [setSize](dhtmlUi.chm::/classes\control\control.setsize.htm)


		 Метод setSize устанавливает
		 размеры компонента.


		 ![](../../../sub_image.gif)
		 [show](dhtmlUi.chm::/classes/control/control.show.htm)


		 Метод show отображает
		 элемент управления.


		 ![](../../../sub_image.gif)
		 [unBindEvents](dhtmlUi.chm::/Classes/Control/Control.unBindEvents.htm)
		 Метод unBindEvents
		 отписывает элемент от всех стандартных событий.


		 ![](../../../sub_image.gif)
		 [updatePosition](dhtmlUi.chm::/Classes/Control/Control.updatePosition.htm)


		 Метод updatePosition
		 корректирует размер и положение при абсолютном позиционировании
		 на основе текущих параметров.


		 ![](../../../sub_image.gif)
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


## Методы, унаследованные от класса [Object](dhtmlCommon.chm::/Classes/object/object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [clone](dhtmlCommon.chm::/classes\object\object.clone.htm)
		 Метод clone создает
		 копию объекта.


		 ![](../../../sub_image.gif)
		 [dispose](dhtmlCommon.chm::/classes\object\object.dispose.htm)
		 Метод dispose уничтожает
		 компонент.


		 ![](../../../sub_image.gif)
		 [getHashCode](dhtmlCommon.chm::/Classes/Object/Object.getHashCode.htm)
		 Метод getHashCode возвращает
		 хеш-код объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод getId возвращает
		 идентификатор объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getSettings](dhtmlCommon.chm::/Classes/Object/Object.getSettings.htm)
		 Метод getSettings возвращает
		 настройки объекта репозитория.


		 ![](../../../sub_image.gif)
		 [getTypeName](dhtmlCommon.chm::/classes\object\object.gettypename.htm)
		 Метод getTypeName возвращает
		 имя типа объекта без пространства имен, к которому он принадлежит.


		 ![](../../../sub_image.gif)
		 [isEqual](dhtmlCommon.chm::/Classes/Object/Object.isEqual.htm)
		 Метод isEqual определяет,
		 равен ли заданный объект текущему объекту репозитория.


		 ![](../../../sub_image.gif)
		 [isLive](dhtmlCommon.chm::/Classes/Object/Object.isLive.htm)
		 Метод isLive определяет
		 действительность объекта репозитория.


		 ![](../../../sub_image.gif)
		 [removeAllEvents](dhtmlCommon.chm::/Classes/Object/Object.removeAllEvents.htm)
		 Метод removeAllEvents
		 удаляет все обработчики событий объекта по заданному контексту.


		 ![](../../../sub_image.gif)
		 [setId](dhtmlCommon.chm::/Classes/Object/Object.Id.htm)
		 Метод setId определяет
		 идентификатор объекта репозитория.


		 ![](../../../sub_image.gif)
		 [setSettings](dhtmlCommon.chm::/Classes/Object/Object.setSettings.htm)
		 Метод setSettings задает
		 настройки объекта репозитория.


		 ![](../../../sub_image.gif)
		 [defineProps](dhtmlCommon.chm::/Classes/Object/Object.defineProps.htm)
		 Метод defineProps создает
		 методы get и set из массива имен для указанного класса.


		 ![](../../../sub_image.gif)
		 [keys](dhtmlCommon.chm::/Classes/Object/Object.keys.htm)
		 Метод keys возвращает
		 массив названий методов и свойств для указанного объекта.


См. также:


[PP.Exp.Ui](../../PP.Exp.Ui.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
