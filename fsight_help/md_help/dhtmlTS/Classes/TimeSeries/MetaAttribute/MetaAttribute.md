# MetaAttribute

MetaAttribute
-


# MetaAttribute


Пространство имен: PP.TS.Ui;


## Иерархия наследования


 [Object](dhtmlCommon.chm::/Classes/object/object.htm)


MetaAttribute


## Описание


Класс MetaAttribute реализуется в
 навигационной цепочке метаатрибутов. Связывает всплывающую панель, иерархию
 и измерение.


## Комментарии


Класс признан устаревшим и более
 не используется.


## Синтаксис


PP.initClass(PP.TS.Ui.MetaAttribute, PP.[Object](dhtmlCommon.chm::/Classes/object/object.htm),
 "MetaAttribute");


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [lsRTL](MetaAttribute.IsRTL.htm)
		 Свойство lsRTL определяет
		 направление флага письма справа-налево.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getAttribute](MetaAttribute.getAttribute.htm)
		 Метод getAttribute
		 возвращает атрибут иерархии.


		 ![](../../../Sub_Image.gif)
		 [getAttributeld](MetaAttribute.getAttributeId.htm)
		 Метод getAttributeld
		 вычисляет идентификатор атрибута иерархии.


		 ![](../../../Sub_Image.gif)
		 [getDropPanel](MetaAttribute.getDropPanel.htm)
		 Метод getDropPanel
		 возвращает раскрывающуюся панель, соответствующую атрибуту.


		 ![](../../../Sub_Image.gif)
		 [getTree](MetaAttribute.getTree.htm)
		 getTree
		 устанавливает дерево измерения атрибута.


		 ![](../../../Sub_Image.gif)
		 [setSort](MetaAttribute.setSort.htm)
		 Метод setSort устанавливает
		 сортировку.


		 ![](../../../Sub_Image.gif)
		 [refreshSelection](MetaAttribute.refreshSelection.htm)
		 Метод refreshSelection
		 устанавливает выделение в дереве измерений атрибута.


		 ![](../../../Sub_Image.gif)
		 [removeFromSelected](MetaAttribute.removeFromSelected.htm)
		 Метод removeFromSelected
		 начинает передачу на сервер данных о том что данный атрибут удаляется
		 из списка выбранных атрибутов.


		 ![](../../../Sub_Image.gif)
		 [updateContent](MetaAttribute.updateContent.htm)
		 Метод updateContent
		 обновляет надпись на элементе навигационной цепочки (в зависимости
		 от отметки в измерении атрибута).


## События


		  Имя события
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 [DimSelectionChanged](MetaAttribute.DimSelectionChanged.htm)
		 Событие DimSelectionChanged
		 наступает после изменения отметки на сервере.


		 ![](../../../Event_Image.gif)
		 [TreeSortChanged](MetaAttribute.TreeSortChanged.htm)
		 Событие TreeSortChanged
		 наступает после изменения сортировки в дереве измерения.


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


[PP.TS.Ui](../../PP.TS.Ui.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
