# MetaHierarchy

MetaHierarchy
-


# MetaHierarchy


Пространство имен: PP.Mb;


## Иерархия наследования


[Object](dhtmlCommon.chm::/Classes/object/object.htm)


PP.Mb.[Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


PP.Mb.[Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


MetaHierarchy


## Описание


Класс MetaHierarchy реализует
 экземпляр иерархии метаданных.


## Синтаксис


PP.initClass(PP.Mb.MetaHierarchy, PP.Mb.[Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm), "MetaHierarchy");


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [ChildEls](MetaHierarchy.ChildEls.htm)
		 Свойство ChildEls определяет
		 дочерние элементы по указанному ключу.


		 ![](../../../Property_Image.gif)
		 [Dim](MetaHierarchy.Dim.htm)
		 Свойство Dim определяет
		 измерение по ключу атрибута.


		 ![](../../../Property_Image.gif)
		 [FilterFacts](MetaHierarchy.FilterFacts.htm)
		 Свойство FilterFacts
		 определяет массив ключей рядов, которые нужно отобразить
		 в иерархии.


		 ![](../../../Property_Image.gif)
		 [FilterMode](MetaHierarchy.FilterMode.htm)
		 Свойство FilterMode
		 определяет тип фильтрации рядов в иерархии.


		 ![](../../../Property_Image.gif)
		 [IsAttributeFilter](MetaHierarchy.IsAttributeFilter.htm)
		 Свойство IsAttributeFilter
		 определяет признак того, установлен ли фильтр для
		 атрибута с идентификатором attributeId.


		 ![](../../../Property_Image.gif)
		 [LeafLoadExtent](MetaHierarchy.LeafLoadExtent.htm)
		 Свойство LeafLoadExtent
		 определяет максимальное количество листьевых элементов, которые
		 будут загружены в иерархии.


		 ![](../../../Property_Image.gif)
		 [Levels](MetaHierarchy.Levels.htm)
		 Свойство Levels определяет
		 массив уровней.


		 ![](../../../Property_Image.gif)
		 [RubricatorKey](MetaHierarchy.RubricatorKey.htm)
		 Свойство RubricatorKey
		 определяет ключ каталога показателей в метабазе.


		 ![](../../../Property_Image.gif)
		 [SelectedBreadcrumbAttributes](MetaHierarchy.SelectedBreadcrumbAttributes.htm)
		 Свойство SelectedBreadcrumbAttributes
		 определяет последнюю, установленную в навигационной
		 цепочке, последовательность атрибутов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [clearDims](MetaHierarchy.clearDims.htm)
		 Метод clearDims очищает
		 список измерений.


		 ![](../../../Sub_Image.gif)
		 [getAttributeById](MetaHierarchy.getAttributeById.htm)
		 Метод getAttributeById
		 определяет список атрибутов по значению идентификатора.


		 ![](../../../Sub_Image.gif)
		 [getAttributes](MetaHierarchy.getAttributes.htm)
		 Метод getAttributes
		 определяет список атрибутов.


		 ![](../../../Sub_Image.gif)
		 [getDimOdId](MetaHierarchy.getDimOdId.htm)
		 Метод getDimOdId возвращает
		 объект, содержащий моникёр измерения по ключу измерения.


		 ![](../../../Sub_Image.gif)
		 [getWhereIsEmpty](MetaHierarchy.getWhereIsEmpty.htm)
		 Метод getWhereIsEmpty
		 возвращает признак определяющий, загружать ли элементы,
		 для которых установлен признак отсутствия данных.


		 ![](../../../Sub_Image.gif)
		 [setAttrIncludeSelectedOnly](MetaHierarchy.setAttrIncludeSelectedOnly.htm)
		 Метод setAttrIncludeSelectedOnly
		 устанавливает на всех уровнях для атрибутов иерархии свойство
		 includeSelectedOnly отвечающее за то, чтобы при построении иерархии
		 учитывались только выделенные значения атрибута.


		 ![](../../../Sub_Image.gif)
		 [setAttrProperty](MetaHierarchy.setAttrProperty.htm)
		 Метод setAttrProperty
		 устанавливает значение для свойства атрибута по его идентификатору.


		 ![](../../../Sub_Image.gif)
		 [setSort](MetaHierarchy.setSort.htm)
		 Метод setSort устанавливает
		 сортировку в дереве рядов.


## Свойства, унаследованные от класса PP.Mb.[Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Metabase](dhtmlMetabase.chm::/classes/metabase/object/object.metabase.htm)
		 Свойство Metabase определяет
		 репозиторий, в котором хранится объект.


		 ![](../../../Property_Image.gif)
		 [Names](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.Names.htm)
		 Свойство Names определяет
		 коллекцию наименований объекта для разных языков.


		 ![](../../../Property_Image.gif)
		 [OdId](dhtmlMetabase.chm::/classes/metabase/object/object.odid.htm)
		 Свойство OdId определяет
		 строку моникёра объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [Params](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.Params.htm)


		 Свойство Params определяет
		 коллекцию параметров объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [PPService](dhtmlMetabase.chm::/classes/metabase/object/object.ppservice.htm)
		 Свойство PPService
		 определяет сервис для работы с объектом репозитория.


		 ![](../../../Property_Image.gif)
		 [ReadOnly](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.ReadOnly.htm)
		 Свойство ReadOnly определяет
		 возможность редактирования объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [ShareUrl](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.ShareUrl.htm)
		 Свойство ShareUrl определяет
		 URL-адрес объекта репозитория.


## Методы, унаследованные от класса PP.Mb.[Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getIsOpened](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.getIsOpened.htm)
		 Метод getIsOpened возвращает
		 результат проверки открытия объекта.


		 ![](../../../Sub_Image.gif)
		 [getRights](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.getRights.htm)
		 Метод getRights возвращает
		 эффективные права доступа объекта.


## Свойства, унаследованные от класса [Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [Class](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.Class.htm)
		 Свойство Class определяет
		 класс объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [HasChildren](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.HasChildren.htm)
		 Свойство HasChildren
		 определяет признак наличия дочерних объектов.


		 ![](../../../Property_Image.gif)
		 [IsLink](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.IsLink.htm)
		 Свойство IsLink возвращает
		 признак того, что данный объект находится в другом репозитории.


		 ![](../../../Property_Image.gif)
		 [IsShortcut](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.IsShortcut.htm)
		 Свойство IsShortcut
		 возвращает признак того, что данный объект является ярлыком на
		 другой объект репозитория.


		 ![](../../../Property_Image.gif)
		 [Key](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.key.htm)
		 Свойство Key определяет
		 ключ объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [Metadata](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.metadata.htm)
		 Свойство Metadata определяет
		 метаданные объекта.


		 ![](../../../Property_Image.gif)
		 [Name](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.name.htm)
		 Свойство Name определяет
		 имя объекта.


		 ![](../../../Property_Image.gif)
		 [ParentKey](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.ParentKey.htm)


		 Свойство ParentKey
		 определяет ключ родительского объекта.


		 ![](../../../Property_Image.gif)
		 [TimeStamp](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.TimeStamp.htm)
		 Свойство TimeStamp
		 определяет дату и время последнего изменения объекта репозитория.


		 ![](../../../Property_Image.gif)
		 [Visible](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.Visible.htm)
		 Свойство Visible возвращает
		 признак видимости объекта репозитория.


## Методы, унаследованные от класса [Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


		 Имя метода
		 Краткое описание


		 ![](../../../Sub_Image.gif)
		 [getState](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.getstate.htm)
		 Метод getState возвращает
		 метаданные дескриптора объекта - значения всех свойств класса
		 Descriptor.


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


[PP.Mb](../../PP.Mb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
