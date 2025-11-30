# ISharedPluginsContainer

ISharedPluginsContainer
-


# ISharedPluginsContainer


Сборка: Fore;


## Описание


Интерфейс ISharedPluginsContainer
 предназначен для работы с контейнером плагинов.


## Иерархия наследования


           ISharedPluginsContainer


## Комментарии


Для получения контейнера плагинов используйте свойство [IMetabase.SpecialObject](KeSom.chm::/Interface/IMetabase/IMetabase.SpecialObject.htm).
 В качестве параметра свойства передайте значение [MetabaseSpecialObject.SharedParams](KeSom.chm::/Enums/MetabaseSpecialObject.htm).
 Полученный объект откройте для [чтения](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Bind.htm)
 или [редактирования](KeSom.chm::/Interface/IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.Edit.htm)
 и приведите к интерфейсу ISharedPluginsContainer.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Plugins](ISharedPluginsContainer.Plugins.htm)
		 Свойство Plugins
		 возвращает объект для работы с плагинами.


См. также:


[Интерфейсы
 сборки Fore](../KeFore_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
