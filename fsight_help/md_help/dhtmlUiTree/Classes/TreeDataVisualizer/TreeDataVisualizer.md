# TreeDataVisualizer

TreeDataVisualizer
-


**


# TreeDataVisualizer


Пространство имен**: PP.Ui;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


[Control](dhtmlUi.chm::/Classes/control/control.htm)


[DataVisualizer](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.htm)


TreeDataVisualizer


## Описание


Класс **TreeDataVisualizer**
 представляет собой визуализатор иерархических диаграмм.


## Комментарии


Класс **TreeDataVisualizer**
 является базовым для компонентов [BubbleTree](dhtmlBubbleTree.chm::/Components/BubbleTree/BubbleTree.htm)
 и [TreeMap](dhtmlBubbleTree.chm::/components/TreeMap/TreeMap.htm).


## Синтаксис


PP.initClass(PP.Ui.TreeDataVisualizer, [[PP.Ui.DataVisualizer](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.htm),
 PP.Ui.BaseMView], "PP.Ui.TreeDataVisualizer", [PP.Ui.IDataView]);


## Конструктор


			 Имя конструктора
			 Краткое описание


			 ![](../../sub_image.gif)
			 [TreeDataVisualizer](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/Constructor_TreeDataVisualizer.htm)
			 Конструктор **TreeDataVisualizer**
			 создаёт экземпляр класса **TreeDataVisualizer**.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ItemsNames](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.ItemsNames.htm)
		 Свойство **ItemsNames**
		 определяет имена элементов диаграммы.


		 ![](../../Property_Image.gif)
		 [Model](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.Model.htm)
		 Свойство **Model**
		 определяет модель данных диаграммы.


		 ![](../../Property_Image.gif)
		 [UseItemColorForToolTipBorder](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.UseItemColorForToolTipBorder.htm)
		 Свойство UseItemColorForToolTipBorder
		 определяет, будет ли использован цвет элемента для оформления
		 границы всплывающей подсказки при наведении на элемент мышкой.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [animationStop](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.animationStop.htm)
		 Метод **animationStop**
		 останавливает выполнение анимации диаграммы.


		 ![](../../sub_image.gif)
		 [drillTo](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.drillTo.htm)
		 Метод **drillTo**
		 переводит диаграмму к указанному элементу.


		 ![](../../sub_image.gif)
		 [getAnimationDuration](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.getAnimationDuration.htm)
		 Метод **getAnimationDuration**
		 возвращает длительность анимации диаграммы.


		 ![](../../sub_image.gif)
		 [getBreadcrumb](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.getBreadcrumb.htm)
		 Метод **getBreadcrumb**
		 возвращает цепочку навигации по уровням элементов диаграммы.


		 ![](../../sub_image.gif)
		 [getInstance](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.getInstance.htm)
		 Метод **getInstance**
		 возвращает экземпляр текущей диаграммы.


		 ![](../../sub_image.gif)
		 [getPaperNode](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.getPaperNode.htm)
		 Метод **getPaperNode**
		 возвращает SVG-элемент, в котором отрисовывается диаграмма.


		 ![](../../sub_image.gif)
		 [getRootNode](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.getRootNode.htm)
		 Метод **getRootNode**
		 возвращает контейнер, в котором располагается диаграмма.


		 ![](../../sub_image.gif)
		 [isAnimating](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.isAnimating.htm)
		 Метод **isAnimating**
		 возвращает признак воспроизведения анимации диаграммы.


		 ![](../../sub_image.gif)
		 [refreshView](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.refreshView.htm)
		 Метод **refreshView**
		 обновляет представление диаграммы.


		 ![](../../sub_image.gif)
		 [setAnimationStep](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.setAnimationStep.htm)
		 Метод **setAnimationStep**
		 выполняет шаг анимации.


		 ![](../../sub_image.gif)
		 [setupVisuals](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.setupVisuals.htm)
		 Метод **setupVisual**
		 применяет настройки визуальных элементов.


## События


		 Имя события
		 Краткое описание


		 ![](../../Event_Image.gif)
		 [ActiveItemChanged](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.ActiveItemChanged.htm)
		 Событие **ActiveItemChanged**
		 наступает при изменении активного элемента диаграммы.


		 ![](../../Event_Image.gif)
		 [ItemClick](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.ItemClick.htm)
		 Событие ItemClick
		 наступает при нажатии на элемент диаграммы.


		 ![](../../Event_Image.gif)
		 [Refreshed](dhtmlUiTree.chm::/Classes/TreeDataVisualizer/TreeDataVisualizer.Refreshed.htm)
		 Событие **Refreshed**
		 наступает после обновления представления диаграммы.


## Свойства, унаследованные от класса [DataVisualizer](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.htm)


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


## Методы, унаследованные от класса [DataVisualizer](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.htm)


		 Имя метода
		 Краткое описание


		 ![](../../sub_image.gif)
		 [addVisual](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.addVisual.htm)
		 Метод addVisual устанавливает
		 сопоставление данных визуализатора с указанным идентификатором.


		 ![](../../sub_image.gif)
		 [animate](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.animate.htm)
		 Метод **animate**
		 воспроизводит анимацию диаграммы.


		 ![](../../sub_image.gif)
		 [beginUpdate](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.beginUpdate.htm)
		 Метод **beginUpdate**
		 включает режим обновления данных, запрещающий перерисовку компонента
		 до выхода из этого режима.


		 ![](../../sub_image.gif)
		 [clearAreaSelection](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.clearAreaSelection.htm)
		 Метод **clearAreaSelection**
		 очищает выделение в диаграмме.


		 ![](../../sub_image.gif)
		 [disposeData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.disposeData.htm)
		 Метод dispose**Data**
		 удаляет сложные свойства визуализатора.


		 ![](../../sub_image.gif)
		 [draw](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.draw.htm)
		 Метод **draw** полностью
		 перерисовывает диаграмму.


		 ![](../../sub_image.gif)
		 [endUpdate](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.endUpdate.htm)
		 Метод **endUpdate**
		 выключает режим обновления данных, запрещающий перерисовку компонента
		 до выхода из этого режима.


		 ![](../../sub_image.gif)
		 [getBackwardGlobalItemsIds](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getBackwardGlobalItemsIds.htm)
		 Метод getBackwardGlobalItemsIds
		 возвращает обратный словарь глобальных идентификаторов элементов.


		 ![](../../sub_image.gif)
		 [getBackwardLegendMapping](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getBackwardLegendMapping.htm)
		 Метод getBackwardLegendMapping
		 возвращает обратный словарь связи легенд с привязками данных.


		 ![](../../sub_image.gif)
		 [getEnableHover](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getEnableHover.htm)
		 Метод getEnableHover
		 возвращает признак использования эффектов при наведении курсора
		 на пузырьки пузырьковой диаграммы.


		 ![](../../sub_image.gif)
		 [getFirstDataSource](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getFirstDataSource.htm)
		 Метод **getFirstDataSource**
		 возвращает первый источник у визуализатора данных для диаграмм.


		 ![](../../sub_image.gif)
		 [getFirstLegend](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getFirstLegend.htm)
		 Метод **getFirstLegend**
		 возвращает первую из всех легенд для диаграммы.


		 ![](../../sub_image.gif)
		 [getFirstScale](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getFirstScale.htm)
		 Метод **getFirstScale**
		 возвращает первую шкалу диаграммы.


		 ![](../../sub_image.gif)
		 [getGlobalItemId](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getGlobalItemId.htm)
		 Метод getGlobalItemId
		 возвращает глобальный идентификатор элемента.


		 ![](../../sub_image.gif)
		 [getItemsByAreaRect](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getItemsByAreaRect.htm)
		 Метод **getItemsByAreaRect**
		 возвращает элементы, входящие в указанную область диаграммы.


		 ![](../../sub_image.gif)
		 [getLegendByDataMapping](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getLegendByDataMapping.htm)
		 Метод getLegendByDataMapping
		 возвращает легенду визуализатора по идентификатору сопоставления
		 данных.


		 ![](../../sub_image.gif)
		 [getLegendById](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getLegendById.htm)
		 Метод getLegendById
		 возвращает легенду пузырьковой диаграммы по её идентификатору.


		 ![](../../sub_image.gif)
		 [getLocalItemId](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getLocalItemId.htm)
		 Метод getLocalItemId
		 возвращает внутренний идентификатор элемента.


		 ![](../../sub_image.gif)
		 [getTimelineStepName](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getTimelineStepName.htm)
		 Метод getTimelineStepName
		 возвращает текущий шаг временной шкалы.


		 ![](../../sub_image.gif)
		 [getVisualById](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.getVisualById.htm)
		 Метод getVisualById
		 возвращает сопоставление данных визуализатора по его идентификатору.


		 ![](../../sub_image.gif)
		 [loadData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.loadData.htm)
		 Метод **loadData**
		 дозагружает в диаграмму указанные данные.


		 ![](../../sub_image.gif)
		 [refresh](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.refresh.htm)
		 Метод **refresh**
		 обновляет диаграмму.


		 ![](../../sub_image.gif)
		 [setTimelineStep](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.setTimelineStep.htm)
		 Метод setTimelineStep
		 устанавливает шаг временной шкалы.


		 ![](../../sub_image.gif)
		 [updateData](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.updateData.htm)
		 Метод **updateData**
		 присваивает параметрам сопоставления значений рядов данных диаграммы
		 новое значение индекса.


## События, унаследованные от класса [DataVisualizer](dhtmlUi.chm::/Classes/DataVisualizer/DataVisualizer.htm)


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


[PP.Ui](dhtmlUi.chm::/Classes/classes.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
