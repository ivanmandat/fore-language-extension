# TitleBox: класс DHTML-компонента

TitleBox: класс DHTML-компонента
-


**


# TitleBox


Пространство имен**: PP.Exp.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[GxTitle](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.htm)


TitleBox


## Описание


Класс TitleBox реализует
 представление [заголовка](../../../Components/Express/TitleBox/TitleBox.htm)
 экспресс-отчета.


## Синтаксис


PP.initClass(PP.Exp.Ui.TitleBox, [PP.Mb.Ui.GxTitle](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.htm),
 "TitleBox", [PP.Exp.Ui.ITitleBox, PP.INotifyPropertyChanged]);


## Комментарии


Класс TitleBox реализует компонент
 [TitleBox](../../../Components/Express/TitleBox/TitleBox.htm).


## Конструктор


				 Имя конструктора
				 Краткое описание


				 ![](../../../sub_image.gif)
				 [TitleBox](dhtmlExpress.chm::/classes/express/titlebox/constructor_titlebox.htm)
				 Конструктор TitleBox
				 создает экземпляр компонента TitleBox.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [DimTreeMode](dhtmlExpress.chm::/Classes/Express/TitleBox/TitleBox.DimTreeMode.htm)
		 Свойство DimTreeMode
		 определяет представление данных, для которого предназначен заголовок.


		 ![](../../../Property_Image.gif)
		 [EditMode](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.EditMode.htm)
		 Свойство EditMode
		 задаёт значение флага «Режим редактирования» для заголовка экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [EnableEdit](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.EnableEdit.htm)
		 Свойство EnableEdit
		 определяет, разрешено ли редактирование заголовка экспресс-отчёта.


		 ![](../../../Property_Image.gif)
		 [Instance](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.Instance.htm)
		 Свойство Instance
		 возвращает заголовок экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [IsMultiLanguage](dhtmlExpress.chm::/Classes/Express/TitleBox/TitleBox.IsMultiLanguage.htm)
		 Свойство IsMultiLanguage
		 управляет отображением кнопки для перевода заголовка при его редактировании.


		 ![](../../../Property_Image.gif)
		 [NeedValidate](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.NeedValidate.htm)
		 Свойство NeedValidate
		 определяет, нуждается ли заголовок в проверке.


		 ![](../../../Property_Image.gif)
		 [Options](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.Options.htm)
		 Свойство Options
		 устанавливает и возвращает настройки заголовка экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [Service](dhtmlExpress.chm::/Classes/Express/TitleBox/TitleBox.Service.htm)
		 Свойство Service
		 определяет объект сервиса для работы с заголовком.


		 ![](../../../Property_Image.gif)
		 [Source](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.Source.htm)
		 Свойство Source
		 определяет источник данных для заголовка экспресс-отчета.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [bindCancelNode](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.bindCancelNode.htm)
		 Метод bindCancelNode
		 указывает заголовку, что при выборе указанной вершины документа
		 не нужно выходить из режима редактирования заголовка.


		 ![](../../../sub_image.gif)
		 [getPropertyValue](dhtmlExpress.chm::/Classes/Express/TitleBox/TitleBox.getPropertyValue.htm)
		 Метод getPropertyValue
		 возвращает значение указанного свойства.


		 ![](../../../sub_image.gif)
		 [getTranslateDialog](dhtmlExpress.chm::/Classes/Express/TitleBox/TitleBox.getTranslateDialog.htm)
		 Метод getTranslateDialog
		 возвращает диалог для перевода заголовка.


		 ![](../../../sub_image.gif)
		 [getViewMode](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.getViewMode.htm)
		 Метод getViewMode
		 возвращает значение флага «Режим просмотра» для заголовка экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [isLoaded](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.isLoaded.htm)
		 Метод isLoaded
		 возвращает признак того, что заголовок экспресс-отчета загружен.


		 ![](../../../sub_image.gif)
		 [refresh](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.refresh.htm)
		 Метод refresh
		 обновляет заголовок экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [refreshAll](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.refreshAll.htm)
		 Метод refreshAll
		 обновляет все содержимое заголовка экспресс-отчета.


		 ![](../../../sub_image.gif)
		 [refreshSelections](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.refreshSelections.htm)
		 Метод refreshSelections
		 обновляет состояние заголовка экспресс-отчета в соответствии с
		 состоянием модели.


		 ![](../../../sub_image.gif)
		 [updateContent](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.updateContent.htm)
		 Метод updateContent
		 обновляет текст заголовка экспресс-отчета.


## События


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [MetadataChanged](dhtmlExpress.chm::/Classes/Express/TitleBox/TitleBox.MetadataChanged.htm)
		 Событие MetadataChanged
		 наступает после изменения настроек заголовка.


		 ![](../../../Event_Image.gif)
		 [PropertyChanged](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.PropertyChanged.htm)
		 Событие PropertyChanged
		 наступает после изменения значения свойства заголовка экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [RequestMetadata](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.RequestMetadata.htm)
		 Событие RequestMetadata
		 генерируется при отсутствии метаданных в источнике данных заголовка
		 экспресс-отчета.


		 ![](../../../Event_Image.gif)
		 [SelectionChanged](dhtmlExpress.chm::/Classes\Express\TitleBox\TitleBox.SelectionChanged.htm)
		 Событие SelectionChanged
		 наступает после изменения выделения в заголовке экспресс-отчета.


## Свойства, унаследованные от класса [GxTitle](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [AutoHeight](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.AutoHeight.htm)
		 Свойство AutoHeight
		 определяет, будет ли заголовок автоматически выравниваться по
		 высоте.


		 ![](../../../Property_Image.gif)
		 [BackgroundColor](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.BackgroundColor.htm)
		 Свойство BackgroundColor
		 определяет цвет фона заголовка экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [EnableEdit](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.EnableEdit.htm)
		 Свойство EnableEdit
		 определяет возможность редактирования заголовка.


		 ![](../../../Property_Image.gif)
		 [Font](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.Font.htm)
		 Свойство Font определяет
		 шрифт заголовка экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [HtmlText](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.HtmlText.htm)
		 Свойство HtmlText содержит
		 неотформатированное значение текста заголовка на языке разметки
		 HTML.


		 ![](../../../Property_Image.gif)
		 [HtmlTitle](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.HtmlTitle.htm)
		 Свойство HtmlTitle
		 содержит отформатированное значение текста заголовка на языке
		 разметки HTML.


		 ![](../../../Property_Image.gif)
		 [IsControl](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.IsControl.htm)
		 Свойство IsControl
		 определяет, является ли заголовок элементом управления.


		 ![](../../../Property_Image.gif)
		 [IsMultiLanguage](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.IsMultiLanguage.htm)
		 Свойство IsMultiLanguage
		 определяет возможность вызова диалога для перевода текста заголовка
		 во время редактирования.


		 ![](../../../Property_Image.gif)
		 [Options](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.Options.htm)
		 Свойство Options определяет
		 настройки заголовка экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [Size](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.Size.htm)
		 Свойство Size определяет
		 размер заголовка экспресс-отчета.


		 ![](../../../Property_Image.gif)
		 [Text](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.Text.htm)
		 Свойство Text содержит
		 неотформатированное значение текста заголовка.


		 ![](../../../Property_Image.gif)
		 [TextAlignment](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.TextAlignment.htm)
		 Свойство TextAlignment
		 определяет выравнивание текста заголовка по горизонтали.


		 ![](../../../Property_Image.gif)
		 [TextColor](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.TextColor.htm)
		 Свойство TextColor
		 определяет цвет текста заголовка.


		 ![](../../../Property_Image.gif)
		 [TextWrapping](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.TextWrapping.htm)
		 Свойство TextWrapping
		 определяет возможность переноса текста заголовка.


		 ![](../../../Property_Image.gif)
		 [Title](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.Title.htm)
		 Свойство Title содержит
		 отформатированное значение текста заголовка.


		 ![](../../../Property_Image.gif)
		 [Visible](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.Visible.htm)
		 Свойство Visible определяет
		 видимость заголовка.


## Методы, унаследованные от класса [GxTitle](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [beginEdit](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.beginEdit.htm)
		 Метод beginEdit включает
		 режим редактирования.


		 ![](../../../sub_image.gif)
		 [bindCancelNode](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.bindCancelNode.htm)
		 Метод bindCancelNode отменяет
		 отключение режима редактирования заголовка при нажатии на указанную
		 DOM-вершину.


		 ![](../../../sub_image.gif)
		 [endEdit](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.endEdit.htm)
		 Метод endEdit выключает
		 режим редактирования.


		 ![](../../../sub_image.gif)
		 [getDropPanel](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.getDropPanel.htm)
		 Метод getDropPanel
		 возвращает раскрывающуюся панель заголовка.


		 ![](../../../sub_image.gif)
		 [getEditMode](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.getEditMode.htm)
		 Метод getEditMode определяет,
		 включен ли режим редактирования заголовка.


		 ![](../../../sub_image.gif)
		 [getTextEditor](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.getTextEditor.htm)
		 Метод getTextEditor
		 возвращает текстовый редактор заголовка.


		 ![](../../../sub_image.gif)
		 [getTranslateDialog](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.getTranslateDialog.htm)
		 Метод getTranslateDialog
		 возвращает диалог для перевода текста заголовка.


		 ![](../../../sub_image.gif)
		 [getUnformattedText](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.getUnformattedText.htm)
		 Метод getUnformattedText
		 возвращает неотформатированный текст заголовка.


		 ![](../../../sub_image.gif)
		 [setFontColor](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.setFontColor.htm)
		 Метод setFontColor
		 устанавливает цвет шрифта текста заголовка.


		 ![](../../../sub_image.gif)
		 [setFontFamily](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.setFontFamily.htm)
		 Метод setFontFamily
		 устанавливает наименование шрифта заголовка.


		 ![](../../../sub_image.gif)
		 [setFontSize](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.setFontSize.htm)
		 Метод setFontSize устанавливает
		 размер шрифта текста заголовка.


		 ![](../../../sub_image.gif)
		 [setIsBold](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.setIsBold.htm)
		 Метод setIsBold устанавливает
		 полужирное начертание тексту заголовка.


		 ![](../../../sub_image.gif)
		 [setIsItalic](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.setIsItalic.htm)
		 Метод setIsItalic
		 устанавливает курсивное начертание тексту заголовка.


		 ![](../../../sub_image.gif)
		 [setIsUnderline](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.setIsUnderline.htm)
		 Метод setIsUnderline
		 устанавливает подчеркивание тексту заголовка.


		 ![](../../../sub_image.gif)
		 [unbindCancelNode](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.unbindCancelNode.htm)
		 Метод unbindCancelNode отключает
		 режим редактирования заголовка при нажатии на указанную DOM-вершину.


		 ![](../../../sub_image.gif)
		 [updateContent](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.updateContent.htm)
		 Метод updateContent
		 обновляет содержимое заголовка.


## События, унаследованные от класса [GxTitle](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.htm)


		 Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [EditModeChanged](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.EditModeChanged.htm)
		 Событие EditModeChanged
		 наступает после включения или отключения режима редактирования.


		 ![](../../../Event_Image.gif)
		 [HyperlinkClick](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.HyperlinkClick.htm)
		 Событие HyperlinkClick
		 наступает после нажатия по гиперссылке заголовка.


		 ![](../../../Event_Image.gif)
		 [TextSelectionChanged](dhtmlMetabase.chm::/Classes/Metabase/GxTitle/GxTitle.TextSelectionChanged.htm)
		 Событие TextSelectionChanged
		 наступает после изменения текста в редакторе заголовка.


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
