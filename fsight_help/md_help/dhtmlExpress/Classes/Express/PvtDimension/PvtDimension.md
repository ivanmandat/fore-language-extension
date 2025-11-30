# PvtDimension

PvtDimension
-


# PvtDimension


Пространство имен: PP.Exp;


## Иерархия наследования


[PP.Object](dhtmlCommon.chm::/Classes/object/object.htm)


[PP.Mb.Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


[PP.Mb.Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


PP.Mb.DimSource


PP.Exp.PvtDimension


## Описание


Класс PvtDimension реализует
 модель измерения экспресс-отчёта.


## Синтаксис


PP.initClass(PP.Exp.PvtDimension, PP.Mb.DimSource,
 "PP.Exp.PvtDimension");


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../../Property_Image.gif)
		 [CalendarViewMode](PvtDimension.CalendarViewMode.htm)
		 Свойство CalendarViewMode
		 определяет режим работы с календарным измерением.


		 ![](../../../Property_Image.gif)
		 [CustomNamingExpression](PvtDimension.CustomNamingExpression.htm)
		 Свойство CustomNamingExpression
		 определяет выражение пользовательского наименования.


		 ![](../../../Property_Image.gif)
		 [IsCanFix](PvtDimension.IsCanFix.htm)
		 Свойство IsCanFix определяет,
		 может ли измерение быть частным.


		 ![](../../../Property_Image.gif)
		 [IsFixed](PvtDimension.IsFixed.htm)
		 Свойство IsFixed определяет,
		 является ли измерение частным.


		 ![](../../../Property_Image.gif)
		 [MultipleAttributesEnabled](PvtDimension.MultipleAttributesEnabled.htm)
		 Свойство MultipleAttributesEnabled
		 определяет использование нескольких атрибутов в наименовании.


		 ![](../../../Property_Image.gif)
		 [MultipleAttributesSeparator](PvtDimension.MultipleAttributesSeparator.htm)
		 Свойство MultipleAttributesSeparator
		 определяет разделитель нескольких атрибутов в наименовании.


		 ![](../../../Property_Image.gif)
		 [MultipleAttributesSpaced](PvtDimension.MultipleAttributesSpaced.htm)
		 Свойство MultipleAttributesSpaced
		 определяет, необходимо ли добавлять пробел к разделителю нескольких
		 атрибутов в наименовании.


		 ![](../../../Property_Image.gif)
		 [MultiSelect](PvtDimension.MultiSelect.htm)
		 Свойство MultiSelect
		 определяет использование режима множественной отметки.


		 ![](../../../Property_Image.gif)
		 [NamingAttributes](PvtDimension.NamingAttributes.htm)
		 Свойство NamingAttributes
		 содержит массив идентификаторов атрибутов, используемых в наименовании
		 элементов измерения.


		 ![](../../../Property_Image.gif)
		 [Position](PvtDimension.Position.htm)
		 Свойство Position определяет
		 расположение измерения.


		 ![](../../../Property_Image.gif)
		 [PvtMetadata](PvtDimension.PvtMetadata.htm)
		 Свойство PvtMetadata
		 определяет метаданные измерения.


		 ![](../../../Property_Image.gif)
		 [UseCustomNaming](PvtDimension.UseCustomNaming.htm)
		 Свойство UseCustomNaming
		 определяет выражение пользовательского наименования.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../../sub_image.gif)
		 [isMultiSourceCompound](PvtDimension.isMultiSourceCompound.htm)
		 Метод isMultiSourceCompound
		 определяет включение в составную отметку более чем одного источника
		 отчета.


## Свойства, унаследованные от класса [PP.Mb.Object](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.htm)


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


## Свойства, унаследованные от класса [Descriptor](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.htm)


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


		 ![](../../../sub_image.gif)
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


См. также:


[PP.Exp](../../PP.Exp.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
