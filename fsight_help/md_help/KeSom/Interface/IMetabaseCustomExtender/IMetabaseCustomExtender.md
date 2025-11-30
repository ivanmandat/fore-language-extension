# IMetabaseCustomExtender

IMetabaseCustomExtender
-


# IMetabaseCustomExtender


Сборка: Metabase;


## Описание


Интерфейс IMetabaseCustomExtender
 содержит свойства, предназначенные для работы с контейнером пользовательских
 классов репозитория.


## Иерархия наследования


           IMetabaseCustomExtender


## Комментарии


Контейнер пользовательских классов является специальным объектом, который
 входит в состав [пользовательских
 метаданных](UiDevEnv.chm::/04_NavigatorSetting/Classes_Object/UiNav_Classes_Object.htm).


Для получения контейнера пользовательских классов используйте свойство
 [IMetabase.SpecialObject](../IMetabase/IMetabase.SpecialObject.htm).
 В качестве значения параметра Index
 укажите значение перечисления [MetabaseSpecialObject.CustomExtender](../../Enums/MetabaseSpecialObject.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Classes](IMetabaseCustomExtender.Classes.htm)
		 Свойство Classes возвращает
		 коллекцию классов входящих в контейнер.


		 ![](../../Property_Image.gif)
		 [Events](IMetabaseCustomExtender.Events.htm)
		 Свойство Events возвращает
		 коллекцию пользовательских событий.


		 ![](../../Property_Image.gif)
		 [IsShared](IMetabaseCustomExtender.IsShared.htm)
		 Свойство IsShared определяет,
		 доступны ли классы контейнера для использования.


		 ![](../../Property_Image.gif)
		 [LargeImages](IMetabaseCustomExtender.LargeImages.htm)
		 Свойство LargeImages
		 определяет источник крупных пиктограмм для объектов классов, входящих
		 в контейнер.


		 ![](../../Property_Image.gif)
		 [NameResource](IMetabaseCustomExtender.NameResource.htm)
		 Свойство NameResource
		 определяет идентификатор строкового ресурса для контейнера.


		 ![](../../Property_Image.gif)
		 [Resource](IMetabaseCustomExtender.Resource.htm)
		 Свойство Resource определяет
		 ресурсы для контейнера.


		 ![](../../Property_Image.gif)
		 [SmallImages](IMetabaseCustomExtender.SmallImages.htm)
		 Свойство SmallImages
		 определяет источник маленьких пиктограмм для объектов классов,
		 входящих в контейнер.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [GetObjectLargeImages](IMetabaseCustomExtender.GetObjectLargeImages.htm)
		 Метод GetObjectLargeImages
		 возвращает классы, для которых была изменена системная пиктограмма
		 размером 32*32 пикселя.


		 ![](../../Sub_Image.gif)
		 [GetObjectSmallImages](IMetabaseCustomExtender.GetObjectSmallImages.htm)
		 Метод GetObjectSmallImages
		 возвращает классы, для которых была изменена системная пиктограмма
		 размером 16*16 пикселей.


		 ![](../../Sub_Image.gif)
		 [ResetObjectImages](IMetabaseCustomExtender.ResetObjectImages.htm)
		 Метод ResetObjectImages
		 сбрасывает все настройки для всех изображений.


		 ![](../../Sub_Image.gif)
		 [SetObjectLargeImages](IMetabaseCustomExtender.SetObjectLargeImages.htm)
		 Метод SetObjectLargeImages
		 определяет копию коллекции с изображениями 32x32 пикселей для
		 массива с классами.


		 ![](../../Sub_Image.gif)
		 [SetObjectSmallImages](IMetabaseCustomExtender.SetObjectSmallImages.htm)
		 Метод SetObjectSmallImages
		 определяет копию коллекции с изображениями 16x16 пикселей для
		 массива с классами.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
