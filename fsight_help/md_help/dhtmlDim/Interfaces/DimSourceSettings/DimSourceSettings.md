# DimSourceSettings

DimSourceSettings
-


# DimSourceSettings


Пространство имен: PP.Mb;


## Иерархия наследования


PP.ObjectSettings


    PP.Mb.DescriptorSettings


        PP.Mb.MbObjectSettings


            PP.Mb.DimSourceSettings


## Описание


Интерфейс DimSourceSettings используется
 для работы с классом [DimSource](../../Classes/Metabase/DimSource/DimSource.htm).


## Комментарии


Значения свойств задаются в конструкторе [DimSource](../../Classes/Metabase/DimSource/Constructor_DimSource.htm)
 или с помощью метода set<имя свойства>,
 а возвращаются с помощью метода get<имя свойства>.


Доступные методы указаны в описании конкретного свойства.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [AllowAltHierarchyCreation](AllowAltHierarchyCreation.htm)


		 Свойство AllowAltHierarchyCreation
		 определяет возможность создания [альтернативной
		 иерархии](UiSelection.chm::/Selection/Hierarchies.htm).


		 ![](../../Property_Image.gif)
		 [AllowCalculation](AllowCalculation.htm)
		 Свойство AllowCalculation
		 определяет возможность загрузки признака [вычисляемого
		 элемента](UiAnalyticalArea.chm::/Work_with_dimensions/Edited_elements.htm) измерения.


		 ![](../../Property_Image.gif)
		 [AllowChangeElementGroup](AllowChangeElementGroup.htm)
		 Свойство AllowChangeElementGroup
		 определяет возможность изменения отображаемой [группы
		 элементов](UiNavObj.chm::/reference_book/look-and-feel_Reference_book/UiMd_reference_book_look-and-feel_Group.htm).


		 ![](../../Property_Image.gif)
		 [AllowElementsGroupCreation](AllowElementsGroupCreation.htm)
		 Свойство AllowElementsGroupCreation
		 определяет возможность создания [группы
		 элементов](UiSelection.chm::/Selection/Selection_of_the_dimension_elements.htm#create_group) по текущей отметке измерения.


		 ![](../../Property_Image.gif)
		 [AllowHasData](AllowHasData.htm)
		 Свойство AllowHasData
		 определяет возможность загрузки признака наличия данных элементов
		 измерения.


		 ![](../../Property_Image.gif)
		 [AllowSchemaApply](AllowSchemaApply.htm)


		 Свойство AllowSchemaApply
		 определяет возможность применения установленной [схемы
		 отметки](UiNavObj.chm::/reference_book/look-and-feel_Reference_book/UiMd_reference_book_look-and-feel_Scheme.htm) на уровне измерения.


		 ![](../../Property_Image.gif)
		 [AllowSchemaCreation](AllowSchemaCreation.htm)
		 Свойство AllowSchemaCreation
		 определяет возможность создания [схемы
		 отметки](UiNavObj.chm::/reference_book/look-and-feel_Reference_book/UiMd_reference_book_look-and-feel_Scheme.htm) по текущей отметке измерения.


		 ![](../../Property_Image.gif)
		 [AllowSelection](AllowSelection.htm)
		 Свойство AllowSelection
		 определяет возможность установки отметки элементам.


		 ![](../../Property_Image.gif)
		 [ChildrenReqCount](ChildrenReqCount.htm)


		 Свойство ChildrenReqCount
		 определяет количество дочерних вершин, которые по умолчанию будут
		 запрашиваться сервисом.


		 ![](../../Property_Image.gif)
		 [LoadAttributeValuesPartial](LoadAttributeValuesPartial.htm)
		 Свойство LoadAttributeValuesPartial
		 определяет возможность частичной загрузки значений атрибутов.


		 ![](../../Property_Image.gif)
		 [UseExtendedAttributeValues](UseExtendedAttributeValues.htm)
		 Свойство UseExtendedAttributeValues
		 определяет возможность использования расширенного варианта получения
		 значений [атрибутов](UiNavObj.chm::/reference_book/Master_RDS_reference_book/Attributes.htm)
		 справочника НСИ.


## Свойства, унаследованные от интерфейса PP.ObjectSettings


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Id](dhtmlCommon.chm::/classes\object\object.id.htm)


		 Свойство Id определяет
		 идентификатор объекта репозитория.


## Свойства, унаследованные от интерфейса PP.Mb.DescriptorSettings


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Class](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.Class.htm)
		 Свойство Class определяет
		 класс объекта репозитория.


		 ![](../../Property_Image.gif)
		 [HasChildren](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.HasChildren.htm)
		 Свойство HasChildren
		 определяет признак наличия дочерних объектов.


		 ![](../../Property_Image.gif)
		 [IsLink](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.IsLink.htm)
		 Свойство IsLink возвращает
		 признак того, что данный объект находится в другом репозитории.


		 ![](../../Property_Image.gif)
		 [IsShortcut](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.IsShortcut.htm)
		 Свойство IsShortcut
		 возвращает признак того, что данный объект является ярлыком на
		 другой объект репозитория.


		 ![](../../Property_Image.gif)
		 [Key](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.key.htm)
		 Свойство Key определяет
		 ключ объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Metadata](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.metadata.htm)
		 Свойство Metadata определяет
		 метаданные объекта.


		 ![](../../Property_Image.gif)
		 [Name](dhtmlMetabase.chm::/classes/metabase/descriptor/descriptor.name.htm)
		 Свойство Name определяет
		 имя объекта.


		 ![](../../Property_Image.gif)
		 [ParentKey](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.ParentKey.htm)


		 Свойство ParentKey
		 определяет ключ родительского объекта.


		 ![](../../Property_Image.gif)
		 [TimeStamp](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.TimeStamp.htm)
		 Свойство TimeStamp
		 определяет дату и время последнего изменения объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Visible](dhtmlMetabase.chm::/Classes/Metabase/Descriptor/Descriptor.Visible.htm)
		 Свойство Visible возвращает
		 признак видимости объекта репозитория.


## Свойства, унаследованные от интерфейса PP.Mb.MbObjectSettings


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Metabase](dhtmlMetabase.chm::/classes/metabase/object/object.metabase.htm)
		 Свойство Metabase определяет
		 репозиторий, в котором хранится объект.


		 ![](../../Property_Image.gif)
		 [Names](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.Names.htm)
		 Свойство Names определяет
		 коллекцию наименований объекта для разных языков.


		 ![](../../Property_Image.gif)
		 [OdId](dhtmlMetabase.chm::/classes/metabase/object/object.odid.htm)
		 Свойство OdId определяет
		 строку моникёра объекта репозитория.


		 ![](../../Property_Image.gif)
		 [Params](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.Params.htm)


		 Свойство Params определяет
		 коллекцию параметров объекта репозитория.


		 ![](../../Property_Image.gif)
		 [PPService](dhtmlMetabase.chm::/classes/metabase/object/object.ppservice.htm)
		 Свойство PPService
		 определяет сервис для работы с объектом репозитория.


		 ![](../../Property_Image.gif)
		 [ReadOnly](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.ReadOnly.htm)
		 Свойство ReadOnly определяет
		 возможность редактирования объекта репозитория.


		 ![](../../Property_Image.gif)
		 [ShareUrl](dhtmlMetabase.chm::/Classes/Metabase/Object/Object.ShareUrl.htm)
		 Свойство ShareUrl определяет
		 URL-адрес объекта репозитория.


См. также:


[Работа
 с измерением](../../Classes/DimClasses.htm) | [DimSource](../../Classes/Metabase/DimSource/DimSource.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
