# ParametersDialog

ParametersDialog
-


**


# ParametersDialog


## Описание


Компонент ParametersDialog**
 реализует диалог «Параметры» для настройки параметров экспресс-отчета.


## Комментарии


Компонент **ParametersDialog**
 реализован классом [ParametersDialog](../../../Classes/Express/ParametersDialog/ParametersDialog.htm).


## Пример


Компонент **ParametersDialog**
 может иметь следующий вид:


![](ParametersDialog.png)


[Пример создания компонента ParametersDialog](ParametersDialog_Example.htm)


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [ParametersDialog](dhtmlExpress.chm::/Classes/Express/ParametersDialog/Constructor_ParametersDialog.htm)
		 Конструктор ParametersDialog
		 создает экземпляр компонента ParametersDialog.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [CurrentView](dhtmlExpress.chm::/classes/express/parametersdialog/parametersdialog.currentview.htm)
		 Свойство CurrentView
		 устанавливает активную вкладку в диалоге «Параметры».


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [addView](dhtmlExpress.chm::/classes/express/parametersdialog/parametersdialog.addview.htm)
		 Метод addView
		 добавляет вкладку в диалог «Параметры».


		 ![](../../../sub_image.gif)
		 **[getAllViewsPropChangedObjects](dhtmlExpress.chm::/Classes/Express/ParametersDialog/ParametersDialog.getAllViewsPropChangedObjects.htm)**
		 Метод getAllViewsPropChangedObjects
		 возвращает изменения по каждой из вкладок диалога «Параметры».


		 ![](../../../sub_image.gif)
		 [getAllViewsState](dhtmlExpress.chm::/classes/express/parametersdialog/parametersdialog.getallviewsstate.htm)
		 Метод getAllViewsPropChangedObjects
		 возвращает изменения по каждой из вкладок диалога «Параметры».


## Методы, унаследованные от класса [Dialog](dhtmlUi.chm::/Classes/Dialog/Dialog.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [close](dhtmlUi.chm::/classes/dialog/dialog.close.htm)
		 Метод close закрывает
		 диалог.


		 ![](../../../sub_image.gif)
		 [getCancelButton](dhtmlUi.chm::/classes/dialog/dialog.getcancelbutton.htm)
		 Метод getCancelButton
		 возвращает кнопку отмены.


		 ![](../../../sub_image.gif)
		 [getDialogResult](dhtmlUi.chm::/classes/dialog/dialog.getdialogresult.htm)
		 Метод getDialogResult
		 возвращает JSON-объект с настройками, установленными в диалоге
		 пользователем.


		 ![](../../../sub_image.gif)
		 [getOkButton](dhtmlUi.chm::/classes/dialog/dialog.getokbutton.htm)
		 Метод getOkButton возвращает
		 кнопку подтверждения.


## События, унаследованные от класса [Dialog](dhtmlUi.chm::/Classes/Dialog/Dialog.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [CancelButtonClicked](dhtmlUi.chm::/classes\dialog\dialog.cancelbuttonclicked.htm)
		 Событие CancelButtonClicked
		 наступает при нажатии на кнопку «Cancel».


		 ![](../../../Event_Image.gif)
		 [OkButtonClicked](dhtmlUi.chm::/classes/dialog/dialog.okbuttonclicked.htm)
		 Событие OkButtonClicked наступает
		 при нажатии на кнопку «OK».


## Свойства, унаследованные от класса [Window](dhtmlUi.chm::/Classes/Window/Window.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Caption](dhtmlUi.chm::/classes/window/window.caption.htm)
		 Свойство Caption устанавливает
		 заголовок для окна.


		 ![](../../../Property_Image.gif)
		 [CaptionIcon](dhtmlUi.chm::/classes/window/window.captionicon.htm)
		 Свойство CaptionIcon
		 определяет путь к изображению заголовка окна.


		 ![](../../../Property_Image.gif)
		 [DragContentView](dhtmlUi.chm::/Classes/Window/Window.DragContentView.htm)
		 Свойство DragContentView
		 определяет, отображается ли окно при перемещении.


		 ![](../../../Property_Image.gif)
		 [EnableMove](dhtmlUi.chm::/classes/window/window.enablemove.htm)
		 Свойство EnableMove
		 определяет, можно ли перемещать окно.


## Методы, унаследованные от класса [Window](dhtmlUi.chm::/Classes/Window/Window.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [expand](dhtmlUi.chm::/classes/window/window.expand.htm)
		 Метод expand разворачивает
		 окно.


		 ![](../../../sub_image.gif)
		 [getCloseButton](dhtmlUi.chm::/classes/window/window.getclosebutton.htm)
		 Метод getCloseButton
		 возвращает кнопку закрытия окна.


		 ![](../../../sub_image.gif)
		 [getExpandButton](dhtmlUi.chm::/classes/window/window.getexpandbutton.htm)
		 Метод getExpandButton
		 возвращает кнопку разворачивания окна.


		 ![](../../../sub_image.gif)
		 [getIsExpanded](dhtmlUi.chm::/Classes/Window/Window.getIsExpanded.htm)
		 Метод getIsExpanded
		 возвращает признак того, развернуто ли окно.


		 ![](../../../sub_image.gif)
		 [showDialog](dhtmlUi.chm::/classes/window/window.showdialog.htm)
		 Метод showDialog отображает
		 окно.


## События, унаследованные от класса [Window](dhtmlUi.chm::/Classes/Window/Window.htm)


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [Expanded](dhtmlUi.chm::/classes/window/window.expanded.htm)
		 Событие Expanded наступает
		 после разворачивания окна.


		 ![](../../../Event_Image.gif)
		 [Expanding](dhtmlUi.chm::/Classes/Window/Window.Expanding.htm)
		 Событие Expanding наступает
		 во время разворачивания окна.


		 ![](../../../Event_Image.gif)
		 [Moved](dhtmlUi.chm::/classes/window/window.moved.htm)
		 Событие Moved наступает
		 после перемещения окна.


		 ![](../../../Event_Image.gif)
		 [Moving](dhtmlUi.chm::/classes/window/window.moving.htm)
		 Событие Moving наступает
		 во время перемещения окна.


## Свойства, унаследованные от класса [DropPanel](dhtmlUi.chm::/Classes/DropPanel/DropPanel.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [EnableResize](dhtmlUi.chm::/classes\droppanel\droppanel.enableresize.htm)


		 Свойство EnableResize
		 определяет возможность изменять размеры компонента.


		 ![](../../../Property_Image.gif)
		 [EnableResizeBottom](dhtmlUi.chm::/classes\droppanel\droppanel.enableresizebottom.htm)


		 Свойство EnableResizeBottom
		 определяет возможность изменения высоты компонента с помощью захвата
		 и перетаскивания его нижней границы курсором мыши.


		 ![](../../../Property_Image.gif)
		 [EnableResizeLeft](dhtmlUi.chm::/classes\droppanel\droppanel.enableresizeleft.htm)


		 Свойство EnableResizeLeft
		 определяет возможность изменения ширины компонента с помощью захвата
		 и перетаскивания его левой границы курсором мыши.


		 ![](../../../Property_Image.gif)
		 [EnableResizeRight](dhtmlUi.chm::/classes\droppanel\droppanel.enableresizeright.htm)


		 Свойство EnableResizeRight
		 определяет возможность изменения ширины компонента с помощью захвата
		 и перетаскивания его правой границы курсором мыши.


		 ![](../../../Property_Image.gif)
		 [EnableResizeTop](dhtmlUi.chm::/classes\droppanel\droppanel.enableresizetop.htm)


		 Свойство EnableResizeTop определяет
		 возможность изменения высоты компонента с помощью захвата и перетаскивания
		 его верхней границы курсором мыши.


		 ![](../../../Property_Image.gif)
		 [EnableRestoreFocus](dhtmlUi.chm::/Classes/DropPanel/DropPanel.EnableRestoreFocus.htm)


		 Свойство EnableRestoreFocus
		 определяет возможность восстановления фокуса при закрытии панели.


		 ![](../../../Property_Image.gif)
		 [MaxDropDownHeight](dhtmlUi.chm::/classes\droppanel\droppanel.maxdropdownheight.htm)


		 Свойство MaxDropDownHeight
		 определяет максимальную высоту раскрывающейся панели.


		 ![](../../../Property_Image.gif)
		 [MaxDropDownWidth](dhtmlUi.chm::/classes\droppanel\droppanel.maxdropdownwidth.htm)


		 Свойство MaxDropDownWidth
		 определяет максимальную ширину раскрывающейся панели.


		 ![](../../../Property_Image.gif)
		 [MinDropDownHeight](dhtmlUi.chm::/classes\droppanel\droppanel.mindropdownheight.htm)


		 Свойство MinDropDownHeight
		 определяет минимальную высоту раскрывающейся панели.


		 ![](../../../Property_Image.gif)
		 [MinDropDownWidth](dhtmlUi.chm::/classes\droppanel\droppanel.mindropdownwidth.htm)


		 Свойство MinDropDownWidth
		 определяет минимальную ширину раскрывающейся панели.


## Методы, унаследованные от класса [DropPanel](dhtmlUi.chm::/Classes/DropPanel/DropPanel.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getDroppedDown](dhtmlUi.chm::/classes\droppanel\droppanel.getdroppeddown.htm)


		 Метод getDroppedDown
		 возвращает признак того, раскрыта ли панель.


		 ![](../../../sub_image.gif)
		 [isVisibleArea](dhtmlUi.chm::/classes\droppanel\droppanel.isvisiblearea.htm)


		 Метод isVisibleArea
		 определяет, входит ли раскрывающая часть в видимую область.


		 ![](../../../sub_image.gif)
		 [setPosition](dhtmlUi.chm::/classes\droppanel\droppanel.setposition.htm)


		 Метод setPosition устанавливает
		 позицию раскрывающейся панели.


		 ![](../../../sub_image.gif)
		 [show](dhtmlUi.chm::/classes/droppanel/droppanel.show.htm)


		 Метод show раскрывает
		 панель.


## События, унаследованные от класса [DropPanel](dhtmlUi.chm::/Classes/DropPanel/DropPanel.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [Closed](dhtmlUi.chm::/classes\droppanel\droppanel.closed.htm)


		 Событие Closed наступает
		 после закрытия компонента.


		 ![](../../../Event_Image.gif)
		 [FrameDown](dhtmlUi.chm::/classes\droppanel\droppanel.framedown.htm)


		 Событие FrameDown
		 наступает по щелчку мыши за пределами панели.


		 ![](../../../Event_Image.gif)
		 [Opened](dhtmlUi.chm::/classes\droppanel\droppanel.opened.htm)


		 Событие Opened наступает
		 сразу после открытия компонента.


		 ![](../../../Event_Image.gif)
		 [Opening](dhtmlUi.chm::/classes\droppanel\droppanel.opening.htm)


		 Событие Opening наступает
		 перед открытием компонента.


		 ![](../../../Event_Image.gif)
		 [OutOfPanelDown](dhtmlUi.chm::/classes\droppanel\droppanel.outofpaneldown.htm)


		 Событие OutOfPanelDown
		 наступает по щелчку мыши за пределами панели в случае отображения без
		 фрейма-подложки.


		 ![](../../../Event_Image.gif)
		 [SizeChanged](dhtmlUi.chm::/classes\droppanel\droppanel.sizechanged.htm)


		 Событие SizeChanged
		 наступает после того, как были изменены размеры компонента.


		 ![](../../../Event_Image.gif)
		 [SizeChanging](dhtmlUi.chm::/classes\droppanel\droppanel.sizechanging.htm)


		 Событие SizeChanging
		 наступает перед изменением размеров компонента.


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


## События, унаследованные от класса [Control](dhtmlUi.chm::/Classes/control/control.htm)


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


[DHTML-компоненты](dhtml.chm::/DHTML_components.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
