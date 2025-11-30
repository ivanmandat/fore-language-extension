# ICustomObjectResolver

ICustomObjectResolver
-


# ICustomObjectResolver


Сборка: Metabase;


## Описание


Интерфейс ICustomObjectResolver
 предназначен для работы с объектом пользовательского класса во время обновления.


## Иерархия наследования


ICustomObjectResolver


## Комментарии


Для получения объекта данного класса используйте методы [IMetabaseUpdateProgress.OnAfterApplyCustomObject](../IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnAfterApplyCustomObject.htm)
 и [IMetabaseUpdateProgress.OnBeforeCustomObjectSaveToPef](../IMetabaseUpdateProgress/IMetabaseUpdateProgress.OnBeforeCustomObjectSaveToPef.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [ClassId](ICustomObjectResolver.ClassId.htm)


		 Свойство ClassId
		 возвращает индекс класса, которому принадлежит пользовательский
		 объект.


		 ![](../../Property_Image.gif)
		 [Description](ICustomObjectResolver.Description.htm)
		 Свойство Description
		 возвращает описание пользовательского объекта.


		 ![](../../Property_Image.gif)
		 [Id](ICustomObjectResolver.Id.htm)
		 Свойство Id возвращает
		 идентификатор пользовательского объекта.


		 ![](../../Property_Image.gif)
		 [Key](ICustomObjectResolver.Key.htm)
		 Свойство Key
		 возвращает ключ объекта пользовательского класса.


		 ![](../../Property_Image.gif)
		 [Name](ICustomObjectResolver.Name.htm)


		 Свойство Name
		 возвращает наименование объекта пользовательского класса.


		 ![](../../Property_Image.gif)
		 [References](ICustomObjectResolver.References.htm)


		 Свойство References
		 возвращает коллекцию зависимостей пользовательского объекта.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [ReadToFile](ICustomObjectResolver.ReadToFile.htm)
		 Метод ReadToFile
		 читает данные пользовательского объекта в указанный файл.


		 ![](../../Sub_Image.gif)
		 [ReadToStream](ICustomObjectResolver.ReadToStream.htm)
		 Метод ReadToStream
		 читает данные пользовательского объекта в поток.


		 ![](../../Sub_Image.gif)
		 [ReadToXML](ICustomObjectResolver.ReadToXML.htm)
		 Метод ReadToXML
		 читает данные пользовательского объекта в формат XML.


		 ![](../../Sub_Image.gif)
		 [WriteFromFile](ICustomObjectResolver.WriteFromFile.htm)
		 Метод WriteFromFile
		 записывает данные в пользовательский объект из указанного файла.


		 ![](../../Sub_Image.gif)
		 [WriteFromStream](ICustomObjectResolver.WriteFromStream.htm)
		 Метод WriteFromStream
		 записывает данные в пользовательский объект из потока.


		 ![](../../Sub_Image.gif)
		 [WriteFromXML](ICustomObjectResolver.WriteFromXML.htm)


		 Метод WriteFromXML
		 записывает данные в пользовательский объект из формата
		 XML.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
