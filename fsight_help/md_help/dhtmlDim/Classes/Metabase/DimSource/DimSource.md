# DimSource

DimSource
-


# DimSource


Пространство имен: PP.Mb;


## Иерархия наследования


[PP.Object](dhtmlCommon.chm::/Classes/object/object.htm)


    [PP.Mb.Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


        [PP.Mb.Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


            PP.Mb.DimSource


## Описание


Класс DimSource реализует модель
 справочника.


## Синтаксис


PP.initClass(PP.Mb.DimSource, [PP.Mb.Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm),
 "PP.Mb.DimSource");


## Конструктор


		 Имя конструктора
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [DimSource](Constructor_DimSource.htm)
		 Конструктор DimSource
		 создает экземпляр класса DimSource.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 addSelection
		 Метод addSelection
		 добавляет моникёр для работы с альтернативной отметкой измерения.


		 ![](../../../sub_image.gif)
		 [clearDimItems](DimSource.clearDimItems.htm)
		 Метод clearDimItems
		 очищает список подгруженных элементов в справочнике.


		 ![](../../../sub_image.gif)
		 [getActiveGroup](DimSource.getActiveGroup.htm)
		 Метод getActiveGroup
		 возвращает активную группу измерения.


		 ![](../../../sub_image.gif)
		 [getActiveHierarchy](DimSource.getActiveHierarchy.htm)
		 Метод getActiveHierarchy
		 возвращает активную альтернативную иерархию измерения.


		 ![](../../../sub_image.gif)
		 [getActiveSchema](DimSource.getActiveSchema.htm)
		 Метод getActiveSchema
		 возвращает активную схему отметки измерения.


		 ![](../../../sub_image.gif)
		 getAllSelections
		 Метод getAllSelections
		 возвращает массив хранящихся отметок измерения.


		 ![](../../../sub_image.gif)
		 [getAttributeIndex](DimSource.getAttributeIndex.htm)
		 Метод getAttributeIndex
		 возвращает индекс атрибута справочника по идентификатору.


		 ![](../../../sub_image.gif)
		 [getAttributes](DimSource.getAttributes.htm)
		 Метод getAttributes
		 возвращает объект, содержащий коллекцию значений атрибутов справочника.


		 ![](../../../sub_image.gif)
		 getCalendarLevels
		 Метод getCalendarLevels
		 возвращает список или массив элементов календарного измерения
		 по уровням.


		 ![](../../../sub_image.gif)
		 getChildEls
		 Метод getChildEls возвращает
		 массив дочерних элементов выбранного элемента справочника по ключу.


		 ![](../../../sub_image.gif)
		 getChildrenCount
		 Метод getChildrenCount
		 возвращает количество дочерних элементов, входящих в отметку указанного
		 элемента справочника.


		 ![](../../../sub_image.gif)
		 getDefaultFilter
		 Метод getDefaultFilter
		 возвращает базовый фильтр элементов измерения.


		 ![](../../../sub_image.gif)
		 [getElem](DimSource.getElem.htm)
		 Метод getElem возвращает
		 элементы справочника.


		 ![](../../../sub_image.gif)
		 getElems
		 Метод getElems возвращает
		 массив загруженных элементов справочника.


		 ![](../../../sub_image.gif)
		 getErrorInfo
		 Метод getErrorInfo
		 возвращает информацию об ошибке в структуре измерения.


		 ![](../../../sub_image.gif)
		 [getFirstSelectedText](DimSource.getFirstSelectedText.htm)
		 Метод getFirstSelectedText
		 возвращает текст первого выделенного элемента.


		 ![](../../../sub_image.gif)
		 [getGroups](DimSource.getGroups.htm)
		 Метод getGroups возвращает
		 группу элементов справочника, которая установлена в отметке.


		 ![](../../../sub_image.gif)
		 [getHierarchies](DimSource.getHierarchies.htm)
		 Метод getHierarchies
		 возвращает коллекцию данных альтернативных иерархий справочника.


		 ![](../../../sub_image.gif)
		 getIndexes
		 Метод getIndexes возвращает
		 объект, содержащий коллекцию индексов справочника.


		 ![](../../../sub_image.gif)
		 getIsAllElsLoaded
		 Метод getIsAllElsLoaded
		 возвращает результат загрузки элементов измерения.


		 ![](../../../sub_image.gif)
		 getIsDataLoading
		 Метод getIsDataLoading
		 возвращает состояние загрузки элементов измерения.


		 ![](../../../sub_image.gif)
		 getIsElUpdated
		 Метод getIsElUpdated
		 возвращает состояние элемента справочника по ключу.


		 ![](../../../sub_image.gif)
		 getIsEmpty
		 Метод getIsEmpty возвращает
		 результат проверки справочника на наличие элементов.


		 ![](../../../sub_image.gif)
		 getIsPlain
		 Метод getIsPlain возвращает
		 результат проверки наличия дочерних элементов в структуре элементов
		 справочника.


		 ![](../../../sub_image.gif)
		 getIsSelInfoUpdated
		 Метод getIsSelInfoUpdated
		 возвращает результат синхронизации отметки измерения.


		 ![](../../../sub_image.gif)
		 getIsStateLoading
		 Метод getIsStateLoading
		 возвращает состояние загрузки элементов измерения.


		 ![](../../../sub_image.gif)
		 [getLastSelectedText](DimSource.getLastSelectedText.htm)
		 Метод getLastSelectedText
		 возвращает текст последнего выделенного элемента.


		 ![](../../../sub_image.gif)
		 getLevels
		 Метод getLevels возвращает
		 объект, содержащий коллекцию уровней элементов справочника.


		 ![](../../../sub_image.gif)
		 getLoadedAttributes
		 Метод getLoadedAttributes
		 возвращает список загруженных атрибутов в справочнике.


		 ![](../../../sub_image.gif)
		 getPredefinedAttributeId
		 Метод getPredefinedAttributeId
		 возвращает идентификатор предопределённого атрибута в справочнике.


		 ![](../../../sub_image.gif)
		 getPredefinedAttributes
		 Метод getPredefinedAttributes
		 возвращает предопределённые атрибуты в справочнике.


		 ![](../../../sub_image.gif)
		 [getSchemas](DimSource.getSchemas.htm)
		 Метод getSchemas возвращает
		 объект для работы с коллекцией схем отметок измерения.


		 ![](../../../sub_image.gif)
		 getSelectedCount
		 Метод getSelectedCount
		 возвращает количество элементов в отметке измерения.


		 ![](../../../sub_image.gif)
		 getSelectedGroup
		 Метод getSelectedGroup
		 возвращает установленную группу элементов измерения.


		 ![](../../../sub_image.gif)
		 getSelectedHierarchy
		 Метод getSelectedHierarchy
		 возвращает установленную альтернативную иерархию измерения.


		 ![](../../../sub_image.gif)
		 getSelectionInfo
		 Метод getSelectionInfo
		 возвращает информацию о выделенных элементах отметки измерения.


		 ![](../../../sub_image.gif)
		 getTotalCount
		 Метод getTotalCount
		 возвращает максимальное количество элементов справочника.


		 ![](../../../sub_image.gif)
		 increaseState
		 Метод increaseState
		 увеличивает счётчик состояния измерения.


		 ![](../../../sub_image.gif)
		 isCalendar
		 Метод isCalendar возвращает
		 признак календарного измерения.


		 ![](../../../sub_image.gif)
		 isCompoundSelection
		 Метод isCompoundSelection
		 возвращает признак составной отметки измерения.


		 ![](../../../sub_image.gif)
		 isElemsExist
		 Метод isElemsExist
		 возвращает результат проверки загруженных элементов в измерении.


		 ![](../../../sub_image.gif)
		 isMdLoaded
		 Метод isMdLoaded возвращает
		 результат проверки измерения на содержание необходимых для работы
		 метаданных.


		 ![](../../../sub_image.gif)
		 isNameAttributesLoaded
		 Метод isNameAttributesLoaded
		 возвращает результат загрузки отображаемых атрибутов в справочнике.


		 ![](../../../sub_image.gif)
		 isSelectionExist
		 Метод isSelectionExist
		 возвращает признак существования отметки измерения.


		 ![](../../../sub_image.gif)
		 removeSelection
		 Метод removeSelection
		 снимает выделение со всех элементов измерения.


		 ![](../../../sub_image.gif)
		 setAllElements
		 Метод setAllElements
		 заполняет справочник указанными элементами.


		 ![](../../../sub_image.gif)
		 setChildEls
		 Метод setChildEls задает
		 массив дочерних элементов выбранного элемента справочника по ключу.


		 ![](../../../sub_image.gif)
		 setIsDataLoading
		 Метод setIsDataLoading
		 задает состояние загрузки элементов измерения.


		 ![](../../../sub_image.gif)
		 setIsStateLoading
		 Метод setIsStateLoading
		 задает состояние загрузки группы элементов, схемы отметки и иерархии
		 справочников.


		 ![](../../../sub_image.gif)
		 setSelectionInfo
		 Метод setSelectionInfo
		 задает информацию об отметке измерения.


		 ![](../../../sub_image.gif)
		 setTotalCount
		 Метод setTotalCount
		 задает максимальное количество элементов справочника.


		 ![](../../../sub_image.gif)
		 updateEls
		 Метод updateEls обновляет
		 состояние элементов измерения и данные атрибутов справочника.


## Методы, унаследованные от класса [PP.Object](dhtmlCommon.chm::/Classes/object/object.htm)


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


## Методы, унаследованные от класса [PP.Mb.Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getState](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.getstate.htm)
		 Метод getState возвращает
		 метаданные дескриптора объекта - значения всех свойств класса
		 Descriptor.


## Методы, унаследованные от класса [PP.Mb.Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [getIsOpened](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.getIsOpened.htm)
		 Метод getIsOpened возвращает
		 результат проверки открытия объекта.


		 ![](../../../sub_image.gif)
		 [getRights](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.getRights.htm)
		 Метод getRights возвращает
		 эффективные права доступа объекта.


## События


		 Имя свойства
		 Краткое описание


		 ![](../../../Event_Image.gif)
		 MetadataChanged
		 Событие MetadataChanged
		 наступает после изменения метаданных объекта репозитория.


См. также:


[PP.Mb](dhtmlMetabase.chm::/Classes/PP.Mb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
