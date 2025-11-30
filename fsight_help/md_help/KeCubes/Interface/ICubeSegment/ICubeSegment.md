# ICubeSegment

ICubeSegment
-


# ICubeSegment


Сборка: Cubes;


## Описание


Интерфейс ICubeSegment предназначен
 для работы с сегментом куба.


## Иерархия наследования


ICubeSegment


## Комментарии


Сегмент можно получить, используя свойства и методы интерфейса [ICubeSegments](../ICubeSegments/ICubeSegments.htm).
 Новый сегмент создаётся с помощью метода [ICubeSegmentContainer.CreateSegment](../ICubeSegmentContainer/ICubeSegmentContainer.CreateSegment.htm)
 или [ICubeSegments.CreateSegment](../ICubeSegments/ICubeSegments.CreateSegment.htm).


Каждый сегмент имеет свой собственный [набор
 измерений](ICubeSegment.Dimensions.htm), состоящий из множества [измерений
 контейнера](../ICubeSegmentContainer/ICubeSegmentContainer.htm).


Сегмент является объектом класса [MetabaseObjectClass.KE_CLASS_CUBE_SEGMENT](KeSom.chm::/Enums/MetabaseObjectClass.htm).
 После того как сегмент создан по заданной отметке куба, необходимо раздать
 права субъектам безопасности, которые смогут читать или читать и изменять
 данные. Для этого приведите сегмент к интерфейсу [IMetabaseObjectDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm),
 получите в свойстве [IMetabaseObjectDescriptor.SecurityDescriptor](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.SecurityDescriptor.htm)
 параметры управления доступом, переведите их в режим редактирования с
 помощью метода [ISecurityDescriptor.Edit](KeSom.chm::/Interface/ISecurityDescriptor/ISecurityDescriptor.Edit.htm).
 Используя свойство [ISecurityDescriptor.Acl](KeSom.chm::/Interface/ISecurityDescriptor/ISecurityDescriptor.Acl.htm),
 получите дополнительные параметры безопасности и добавьте в них разрешение
 на чтение или чтение/запись для требуемого субъекта безопасности. После
 этого примените изменения с помощью метода [ISecurityDescriptor.Apply](KeSom.chm::/Interface/ISecurityDescriptor/ISecurityDescriptor.Apply.htm).


Для изменения отметки существующих сегментов используйте методы [ICubeSegmentContainer.ReadSelectionSet](../ICubeSegmentContainer/ICubeSegmentContainer.ReadSelectionSet.htm)/[ICubeSegmentContainer.WriteSelectionSet](../ICubeSegmentContainer/ICubeSegmentContainer.WriteSelectionSet.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Container](ICubeSegment.Container.htm)
		 Свойство Container
		 возвращает контейнер, в котором сохранён сегмент.


		 ![](../../Property_Image.gif)
		 [Dimensions](ICubeSegment.Dimensions.htm)
		 Свойство Dimensions
		 возвращает коллекцию измерений сегмента куба.


		 ![](../../Property_Image.gif)
		 [Key](ICubeSegment.Key.htm)
		 Свойство Key возвращает
		 ключ сегмента куба.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
