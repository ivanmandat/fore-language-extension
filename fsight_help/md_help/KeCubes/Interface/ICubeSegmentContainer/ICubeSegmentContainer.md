# ICubeSegmentContainer

ICubeSegmentContainer
-


# ICubeSegmentContainer


Сборка: Cubes;


## Описание


Интерфейс ICubeSegmentContainer
 предназначен для работы с контейнером сегментов кубов.


## Иерархия наследования


ICubeSegmentContainer


## Комментарии


Контейнер сегментов - это объект репозитория предназначенный для хранения
 сегментов и таблиц, в которых будет формироваться соответствие отметки
 измерений и сегментов. Один контейнер может использоваться несколькими
 кубами. Каждый сегмент определяет отметку элементов измерений, в соответствии
 с которой будет разрешён доступ к данным куба.


Контейнер сегментов является объектом класса [MetabaseObjectClass.KE_CLASS_CUBE_SEGMENT_CONTAINER](KeSom.chm::/Enums/MetabaseObjectClass.htm).
 Контейнер сегментов может быть создан в любой папке репозитория, также
 для хранения контейнеров может использоваться скрытая системная папка
 с идентификатором FOLDER_FOR_SEGMENTS_CONTAINERS. Доступ к папке можно
 получить, используя свойства и методы интерфейса [IMetabase](KeSom.chm::/Interface/IMetabase/IMetabase.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Database](ICubeSegmentContainer.Database.htm)
		 Свойство Database определяет
		 базу данных, в которой будут храниться таблицы сегментов.


		 ![](../../Property_Image.gif)
		 [Dimensions](ICubeSegmentContainer.Dimensions.htm)
		 Свойство Dimensions
		 возвращает коллекцию измерений, которые будут использоваться для
		 формирования отметок.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateSegment](ICubeSegmentContainer.CreateSegment.htm)
		 Метод CreateSegment
		 создаёт сегмент куба.


		 ![](../../Sub_Image.gif)
		 [GetAllSegments](ICubeSegmentContainer.GetAllSegments.htm)
		 Метод GetAllSegments
		 возвращает коллекцию сегментов, хранящихся в контейнере.


		 ![](../../Sub_Image.gif)


		 [ReadIsActive](ICubeSegmentContainer.ReadIsActive.htm)


		 Метод ReadIsActive
		 получает для указанного сегмента признак активности.


		 ![](../../Sub_Image.gif)
		 [ReadSelectionSet](ICubeSegmentContainer.ReadSelectionSet.htm)
		 Метод ReadSelectionSet
		 считывает отметку из сегмента в указанную отметку.


		 ![](../../Sub_Image.gif)


		 [WriteIsActive](ICubeSegmentContainer.WriteIsActive.htm)


		 Метод WriteIsActive
		 изменяет для указанного сегмента признак активности.


		 ![](../../Sub_Image.gif)
		 [WriteSelectionSet](ICubeSegmentContainer.WriteSelectionSet.htm)
		 Метод WriteSelectionSet
		 задаёт указанную отметку для указанного сегмента куба.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
