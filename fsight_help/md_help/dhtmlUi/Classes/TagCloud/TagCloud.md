# TagCloud

TagCloud
-


**


# TagCloud


Пространство имен**: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](../Control/Control.htm)


[DataVisualizer](../DataVisualizer/DataVisualizer.htm)


TagCloud


## Описание


Класс TagCloud реализует компонент
 [TagCloud](../../Components/TagCloud/TagCloud.htm), представляющий
 собой облако меток.


## Синтаксис


PP.initClass(PP.Ui.TagCloud, PP.Ui.[DataVisualizer](../DataVisualizer/DataVisualizer.htm),
 "PP.Ui.TagCloud");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [TagCloud](dhtmlUi.chm::/Classes/TagCloud/Constructor_TagCloud.htm)
		 Конструктор TagCloud
		 создает экземпляр компонента [TagCloud](dhtmlUi.chm::/Components/TagCloud/TagCloud.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [FreezeActive](dhtmlUi.chm::/Classes/TagCloud/TagCloud.FreezeActive.htm)
		 Свойство FreezeActive
		 определяет, останавливается ли анимация элементов при наведении
		 курсора на активную метку.


		 ![](../../Property_Image.gif)
		 [IsDragControl](dhtmlUi.chm::/Classes/TagCloud/TagCloud.IsDragControl.htm)
		 Свойство IsDragControl
		 определяет способ движения элементов облака меток.


		 ![](../../Property_Image.gif)
		 [IsWheelZoom](dhtmlUi.chm::/Classes/TagCloud/TagCloud.IsWheelZoom.htm)
		 Свойство IsWheelZoom
		 определяет, доступно ли масштабирование облака меток с помощью
		 колесика мыши.


		 ![](../../Property_Image.gif)
		 [Shape](dhtmlUi.chm::/Classes/TagCloud/TagCloud.Shape.htm)
		 Свойство Shape содержит
		 форму разброса элементов облака меток.


		 ![](../../Property_Image.gif)
		 [SortItems](dhtmlUi.chm::/Classes/TagCloud/TagCloud.SortItems.htm)
		 Свойство SortItems
		 определяет, используется ли сортировка элементов облака меток.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [addItem](dhtmlUi.chm::/Classes/TagCloud/TagCloud.addItem.htm)
		 Метод addItem добавляет
		 новый элемент в облако меток.


		 ![](../../Sub_Image.gif)
		 [getActiveItem](dhtmlUi.chm::/Classes/TagCloud/TagCloud.getActiveItem.htm)
		 Метод getActiveItem
		 возвращает активную метку облака меток.


		 ![](../../Sub_Image.gif)
		 [getCanvas](dhtmlUi.chm::/Classes/TagCloud/TagCloud.getCanvas.htm)
		 Метод getCanvas возвращает
		 область отрисовки элементов облака меток.


		 ![](../../Sub_Image.gif)
		 [getClickToFront](dhtmlUi.chm::/Classes/TagCloud/TagCloud.getClickToFront.htm)
		 Метод getClickToFront
		 определяет, будет ли элемент облака выдвигаться вперед при нажатии
		 на него.


		 ![](../../Sub_Image.gif)
		 [getItems](dhtmlUi.chm::/Classes/TagCloud/TagCloud.getItems.htm)
		 Метод getItems возвращает
		 массив элементов облака меток.


		 ![](../../Sub_Image.gif)
		 [getItemsNames](dhtmlUi.chm::/Classes/TagCloud/TagCloud.getItemsNames.htm)
		 Метод getItemsNames
		 возвращает массив заголовков элементов облака меток.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [ItemClick](dhtmlUi.chm::/Classes/TagCloud/TagCloud.ItemClick.htm)
		 Событие ItemClick наступает
		 после нажатия кнопки мыши по активной метке облака.


		 ![](../../Event_Image.gif)
		 [ItemMouseOut](dhtmlUi.chm::/Classes/TagCloud/TagCloud.ItemMouseOut.htm)
		 Событие ItemMouseOut
		 наступает после выхода курсора за границы области активной метки.


		 ![](../../Event_Image.gif)
		 [ItemMouseOver](dhtmlUi.chm::/Classes/TagCloud/TagCloud.ItemMouseOver.htm)
		 Событие ItemMouseOver
		 наступает после появления курсора над активной меткой облака.


## Свойства, унаследованные от класса [DataVisualizer](../DataVisualizer/DataVisualizer.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ActiveMappingItems](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ActiveMappingItems.htm)
		 Свойство ActiveMappingItems
		 определяет массив активных значений пузырьковой диаграммы.


		 ![](../../Property_Image.gif)
		 [AreaSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelection.htm)
		 Свойство **AreaSelection**
		 устанавливает область выделения для диаграмм.


		 ![](../../Property_Image.gif)
		 [AreaSelectionAction](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelectionAction.htm)
		 Свойство AreaSelectionAction
		 определяет действие при выделении области в визуализаторе.


		 ![](../../Property_Image.gif)
		 [CustomData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.CustomData.htm)
		 Свойство CustomData
		 предназначено для хранения пользовательских данных.


		 ![](../../Property_Image.gif)
		 [DataSources](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.DataSources.htm)
		 Свойство **DataSources**
		 устанавливает и возвращает объект с источниками данных для диаграмм.


		 ![](../../Property_Image.gif)
		 [EnableBatchData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.EnableBatchData.htm)
		 Свойство **EnableBatchData**
		 управляет доступностью пакетных данных у источника диаграмм.


		 ![](../../Property_Image.gif)
		 [EnableSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.EnableSelection.htm)
		 Свойство **EnableSelection**
		 управляет доступностью выделения элементов в визуализаторе.


		 ![](../../Property_Image.gif)
		 [GlobalItemsIds](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.GlobalItemsIds.htm)
		 Свойство GlobalItemsIds
		 определяет словарь глобальных идентификаторов элементов.


		 ![](../../Property_Image.gif)
		 [HoverActiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.HoverActiveEffects.htm)
		 Свойство HoverActiveEffects
		 определяет эффекты, применяющиеся к объектам при наведении на
		 них курсора.


		 ![](../../Property_Image.gif)
		 [HoveredItems](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.HoveredItems.htm)
		 Свойство HoveredItems
		 определяет массив элементов, для которых установлено наведение.


		 ![](../../Property_Image.gif)
		 [HoverInactiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.HoverInactiveEffects.htm)
		 Свойство HoverInactiveEffects
		 определяет эффекты, применяющиеся к объектам, на которые не наведен
		 курсор.


		 ![](../../Property_Image.gif)
		 [ItemHoverness](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ItemHoverness.htm)
		 Свойство ItemHoverness
		 определяет, установлено ли наведение на элемент диаграммы.


		 ![](../../Property_Image.gif)
		 [ItemSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ItemSelection.htm)
		 Свойство Item**Selection**
		 определяет выделение элемента.


		 ![](../../Property_Image.gif)
		 [LegendMapping](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendMapping.htm)
		 Свойство LegendMapping
		 определяет словарь связи легенд с привязками данных.


		 ![](../../Property_Image.gif)
		 [Legends](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Legends.htm)
		 Свойство **Legends**
		 устанавливает и возвращает массив легенд диаграммы.


		 ![](../../Property_Image.gif)
		 [LegendsPackingMaxPart](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendsPackingMaxPart.htm)
		 Свойство **LegendsPackingMaxPart**
		 устанавливает и возвращает максимальную часть легенд диаграммы
		 из их компоновки.


		 ![](../../Property_Image.gif)
		 [MappingActiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.MappingActiveEffects.htm)
		 Свойство MappingActiveEffects
		 определяет сопоставление эффектов для активных элементов.


		 ![](../../Property_Image.gif)
		 [MappingInactiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.MappingInactiveEffects.htm)
		 Свойство MappingInactiveEffects
		 определяет сопоставление эффектов для неактивных элементов.


		 ![](../../Property_Image.gif)
		 [MappingItemActiveness](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.MappingItemActiveness.htm)
		 Свойство MappingItemActiveness
		 определяет, активно ли сопоставление эффекта у элемента визуализатора.


		 ![](../../Property_Image.gif)
		 [Scales](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Scales.htm)
		 Свойство **Scales**
		 устанавливает и возвращает шкалы диаграммы.


		 ![](../../Property_Image.gif)
		 [SelectActiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.SelectActiveEffects.htm)
		 Свойство SelectActiveEffects
		 определяет массив эффектов, которые применяются к выделенным элементам
		 пузырьковой диаграммы.


		 ![](../../Property_Image.gif)
		 [SelectedItems](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.SelectedItems.htm)
		 Свойство SelectedItems
		 определяет массив выделенных элементов пузырьковой диаграммы.


		 ![](../../Property_Image.gif)
		 [SelectInactiveEffects](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.SelectInactiveEffects.htm)
		 Свойство SelectInactiveEffects
		 определяет массив эффектов, которые применяются к невыделенным
		 элементам пузырьковой диаграммы.


		 ![](../../Property_Image.gif)
		 [SettingsProvider](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.SettingsProvider.htm)
		 Свойство SettingsProvider
		 определяет базовый класс для предоставления настроек.


		 ![](../../Property_Image.gif)
		 [Timeline](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Timeline.htm)
		 Свойство **Timeline**
		 устанавливает и возвращает временную шкалу диаграммы.


		 ![](../../Property_Image.gif)
		 [UseLegendsPacking](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.UseLegendsPacking.htm)
		 Свойство **UseLegendsPacking**
		 разрешает и запрещает использование упаковки легенд диаграммы.


		 ![](../../Property_Image.gif)
		 [UseSelectOnClick](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.UseSelectOnClick.htm)
		 Свойство UseSelectOnClick
		 определяет, разрешено ли выделение элемента с помощью указателя
		 мыши.


		 ![](../../Property_Image.gif)
		 [UseSelectOnRightClick](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.UseSelectOnRightClick.htm)
		 Свойство UseSelectOnRightClick
		 определяет, разрешено ли выделение элемента с помощью правой кнопки
		 мыши.


		 ![](../../Property_Image.gif)
		 [Visuals](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.Visuals.htm)
		 Свойство **Visuals**
		 устанавливает и возвращает настройки сопоставления значений рядов
		 данных осям диаграммы, цвету и размеру её элементов.


## Методы, унаследованные от класса [DataVisualizer](../DataVisualizer/DataVisualizer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [addVisual](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.addVisual.htm)
		 Метод addVisual устанавливает
		 сопоставление данных визуализатора с указанным идентификатором.


		 ![](../../Sub_Image.gif)
		 [animate](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.animate.htm)
		 Метод **animate**
		 воспроизводит анимацию диаграммы.


		 ![](../../Sub_Image.gif)
		 [beginUpdate](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.beginUpdate.htm)
		 Метод **beginUpdate**
		 включает режим обновления данных, запрещающий перерисовку компонента
		 до выхода из этого режима.


		 ![](../../Sub_Image.gif)
		 [clearAreaSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.clearAreaSelection.htm)
		 Метод **clearAreaSelection**
		 очищает выделение в диаграмме.


		 ![](../../Sub_Image.gif)
		 [disposeData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.disposeData.htm)
		 Метод dispose**Data**
		 удаляет сложные свойства визуализатора.


		 ![](../../Sub_Image.gif)
		 [draw](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.draw.htm)
		 Метод **draw** полностью
		 перерисовывает диаграмму.


		 ![](../../Sub_Image.gif)
		 [endUpdate](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.endUpdate.htm)
		 Метод **endUpdate**
		 выключает режим обновления данных, запрещающий перерисовку компонента
		 до выхода из этого режима.


		 ![](../../Sub_Image.gif)
		 [getBackwardGlobalItemsIds](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getBackwardGlobalItemsIds.htm)
		 Метод getBackwardGlobalItemsIds
		 возвращает обратный словарь глобальных идентификаторов элементов.


		 ![](../../Sub_Image.gif)
		 [getBackwardLegendMapping](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getBackwardLegendMapping.htm)
		 Метод getBackwardLegendMapping
		 возвращает обратный словарь связи легенд с привязками данных.


		 ![](../../Sub_Image.gif)
		 [getEnableHover](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getEnableHover.htm)
		 Метод getEnableHover
		 возвращает признак использования эффектов при наведении курсора
		 на пузырьки пузырьковой диаграммы.


		 ![](../../Sub_Image.gif)
		 [getFirstDataSource](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getFirstDataSource.htm)
		 Метод **getFirstDataSource**
		 возвращает первый источник у визуализатора данных для диаграмм.


		 ![](../../Sub_Image.gif)
		 [getFirstLegend](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getFirstLegend.htm)
		 Метод **getFirstLegend**
		 возвращает первую из всех легенд для диаграммы.


		 ![](../../Sub_Image.gif)
		 [getFirstScale](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getFirstScale.htm)
		 Метод **getFirstScale**
		 возвращает первую шкалу диаграммы.


		 ![](../../Sub_Image.gif)
		 [getGlobalItemId](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getGlobalItemId.htm)
		 Метод getGlobalItemId
		 возвращает глобальный идентификатор элемента.


		 ![](../../Sub_Image.gif)
		 [getItemsByAreaRect](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getItemsByAreaRect.htm)
		 Метод **getItemsByAreaRect**
		 возвращает элементы, входящие в указанную область диаграммы.


		 ![](../../Sub_Image.gif)
		 [getLegendByDataMapping](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getLegendByDataMapping.htm)
		 Метод getLegendByDataMapping
		 возвращает легенду визуализатора по идентификатору сопоставления
		 данных.


		 ![](../../Sub_Image.gif)
		 [getLegendById](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getLegendById.htm)
		 Метод getLegendById
		 возвращает легенду пузырьковой диаграммы по её идентификатору.


		 ![](../../Sub_Image.gif)
		 [getLocalItemId](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getLocalItemId.htm)
		 Метод getLocalItemId
		 возвращает внутренний идентификатор элемента.


		 ![](../../Sub_Image.gif)
		 [getTimelineStepName](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getTimelineStepName.htm)
		 Метод getTimelineStepName
		 возвращает текущий шаг временной шкалы.


		 ![](../../Sub_Image.gif)
		 [getVisualById](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getVisualById.htm)
		 Метод getVisualById
		 возвращает сопоставление данных визуализатора по его идентификатору.


		 ![](../../Sub_Image.gif)
		 [loadData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.loadData.htm)
		 Метод **loadData**
		 дозагружает в диаграмму указанные данные.


		 ![](../../Sub_Image.gif)
		 [refresh](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.refresh.htm)
		 Метод **refresh**
		 обновляет диаграмму.


		 ![](../../Sub_Image.gif)
		 [setTimelineStep](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.setTimelineStep.htm)
		 Метод setTimelineStep
		 устанавливает шаг временной шкалы.


		 ![](../../Sub_Image.gif)
		 [updateData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.updateData.htm)
		 Метод **updateData**
		 присваивает параметрам сопоставления значений рядов данных диаграммы
		 новое значение индекса.


## События, унаследованные от класса [DataVisualizer](../DataVisualizer/DataVisualizer.htm)


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [AreaSelected](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelected.htm)
		 Событие **AreaSelected**
		 генерируется после выделения области диаграммы.


		 ![](../../Event_Image.gif)
		 [AreaSelecting](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.AreaSelecting.htm)
		 Событие **AreaSelecting**
		 генерируется в процессе выделения области диаграммы.


		 ![](../../Event_Image.gif)
		 [ItemsSelected](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ItemsSelected.htm)
		 Событие ItemSelected
		 генерируется после выделения элементов визуализатора.


		 ![](../../Event_Image.gif)
		 [ItemsSelecting](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.ItemsSelecting.htm)
		 Событие ItemSelecting
		 генерируется перед выделением элементов визуализатора.


		 ![](../../Event_Image.gif)
		 [LegendHeaderClicked](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendHeaderClicked.htm)
		 Событие **LegendHeaderClicked**
		 генерируется при нажатии на заголовок легенды диаграммы.


		 ![](../../Event_Image.gif)
		 [LegendItemSelected](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendItemSelected.htm)
		 Событие LegendItemSelected
		 генерируется после выделения элемента легенды.


		 ![](../../Event_Image.gif)
		 [LegendItemSelecting](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.LegendItemSelecting.htm)
		 Событие LegendItemSelecting
		 генерируется в процессе выделения элемента легенды.


		 ![](../../Event_Image.gif)
		 [RequestData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.RequestData.htm)
		 Событие **RequestData**
		 генерируется при необходимости дозагрузки данных в источник диаграммы.


		 ![](../../Event_Image.gif)
		 [TimelineStep](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.TimelineStep.htm)
		 Событие **TimelineStep**
		 генерируется при изменении текущего шага временной шкалы диаграммы.


## Свойства, унаследованные от класса [Control](../Control/Control.htm)


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


## Методы, унаследованные от класса [Control](../Control/Control.htm)


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


## События, унаследованные от [Control](../Control/Control.htm)


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


[PP.Ui](../Classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
