# IMetabaseUpdateContext

IMetabaseUpdateContext
-


# IMetabaseUpdateContext


Сборка: Metabase;


## Описание


Интерфейс IMetabaseUpdateContext
 содержит методы для дополнительных настроек обновления.


## Иерархия наследования


           IMetabaseUpdateContext


## Комментарии


Для получения дополнительных настроек обновления используйте метод [IMetabaseUpdate.CreateUpdateContext](../IMetabaseUpdate/IMetabaseUpdate.CreateUpdateContext.htm).


В зависимости от того, какой объект обновляется, дополнительные настройки
 заключаются или в изменении привязки атрибутов, или в переопределении
 объектов репозитория, на которые ссылаются объекты в обновлении.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [KeyMap](IMetabaseUpdateContext.KeyMap.htm)
		 Свойство KeyMap возвращает
		 карту ключей, используемых для повторного сопоставления объектов
		 обновления.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [RegisterAttributeIdChange](IMetabaseUpdateContext.RegisterAttributeIdChange.htm)
		 Метод RegisterAttributeIdChange
		 переопределяет идентификаторы атрибутов объекта обновления.


		 ![](../../Sub_Image.gif)
		 [RegisterHierarchyChange](IMetabaseUpdateContext.RegisterHierarchyChange.htm)
		 Метод RegisterHierarchyChange
		 переопределяет альтернативную иерархию, на которую ссылается обновляемый
		 объект.


		 ![](../../Sub_Image.gif)
		 [RegisterHierarchyChangeO](IMetabaseUpdateContext.RegisterHierarchyChangeO.htm)
		 Метод RegisterHierarchyChange
		 переопределяет альтернативную иерархию, на которую ссылается обновляемый
		 объект, в учетом владельца объекта.


		 ![](../../Sub_Image.gif)
		 [RegisterIdChange](IMetabaseUpdateContext.RegisterIdChange.htm)
		 Метод RegisterIdChange
		 переопределяет идентификатор объекта репозитория, на который ссылается
		 объект обновления.


		 ![](../../Sub_Image.gif)
		 [RegisterKeyChange](IMetabaseUpdateContext.RegisterKeyChange.htm)
		 Метод RegisterKeyChange
		 переопределяет ключ объекта репозитория, на который ссылается
		 объект обновления.


		 ![](../../Sub_Image.gif)
		 [RegisterKeyChangeO](IMetabaseUpdateContext.RegisterKeyChangeO.htm)
		 Метод RegisterKeyChangeO
		 переопределяет ключ объекта репозитория, на который ссылается
		 объект обновления, с учетом владельца.


		 ![](../../Sub_Image.gif)
		 [RegisterNullRemapping](IMetabaseUpdateContext.RegisterNullRemapping.htm)
		 Метод RegisterNullRemapping
		 определяет объекты создаваемые с использованием нулевого повторного
		 сопоставления.


		 ![](../../Sub_Image.gif)
		 [RegisterNullRemappingO](IMetabaseUpdateContext.RegisterNullRemappingO.htm)
		 Метод RegisterNullRemappingO
		 выполняет нулевое повторное сопоставление для объекта с учетом
		 родительского элемента.


		 ![](../../Sub_Image.gif)
		 [RegisterStrChange](IMetabaseUpdateContext.RegisterStrChange.htm)
		 Метод RegisterStrChange
		 переопределяет идентификаторы атрибутов объекта обновления.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
