# IMetabaseClassesSecurityDescriptors

IMetabaseClassesSecurityDescriptors
-


# IMetabaseClassesSecurityDescriptors


## Описание


Интерфейс IMetabaseClassesSecurityDescriptors
 содержит свойства и методы для работы с коллекцией дескрипторов безопасности
 [типов
 объектов](Admin.chm::/04_SecurityPolicy/Admin_Object_Classes.htm).


## Комментарии


Дескриптор безопасности типа объектов содержит [дискреционные
 права доступа](Admin.chm::/03_Admin/Admin_AdminObjects_Discretionary.htm) пользователей и групп пользователей для
 работы с объектами определенного типа.


Коллекция дескрипторов безопасности определяется набором дескрипторов,
 которые заданы для [типов
 объектов](Admin.chm::/04_SecurityPolicy/Admin_Object_Classes.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](IMetabaseClassesSecurityDescriptors.Count.htm)
		 Свойство Count возвращает
		 количество дескрипторов безопасности в коллекции.


		 ![](../../Property_Image.gif)
		 [Item](IMetabaseClassesSecurityDescriptors.Item.htm)
		 Свойство Item возвращает
		 параметры дескриптора безопасности по индексу.


		 ![](../../Property_Image.gif)
		 [ItemByClassId](IMetabaseClassesSecurityDescriptors.ItemByClassId.htm)
		 Свойство ItemByClassId
		 возвращает параметры дескриптора безопасности по типу объектов.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Add](IMetabaseClassesSecurityDescriptors.Add.htm)
		 Метод Add добавляет
		 дескриптор безопасности в коллекцию для дальнейшей настройки прав
		 доступа пользователей и групп пользователей к объектам определенного
		 типа.


		 ![](../../Sub_Image.gif)
		 [AddDescriptor](IMetabaseClassesSecurityDescriptors.AddDescriptor.htm)
		 Метод AddDescriptor
		 добавляет созданный дескриптор безопасности с заданными правами
		 доступа в коллекцию.


		 ![](../../Sub_Image.gif)
		 [Clear](IMetabaseClassesSecurityDescriptors.Clear.htm)
		 Метод Clear удаляет
		 все дескрипторы безопасности из коллекции.


		 ![](../../Sub_Image.gif)
		 [CreateDescriptor](IMetabaseClassesSecurityDescriptors.CreateDescriptor.htm)
		 Метод CreateDescriptor
		 создает дескриптор безопасности для типа объектов без добавления
		 в коллекцию.


		 ![](../../Sub_Image.gif)
		 [Remove](IMetabaseClassesSecurityDescriptors.Remove.htm)
		 Метод Remove удаляет
		 дескриптор безопасности из коллекции по индексу.


		 ![](../../Sub_Image.gif)
		 [RemoveByClassId](IMetabaseClassesSecurityDescriptors.RemoveByClassId.htm)
		 Метод RemoveByClassId
		 удаляет дескриптор безопасности из коллекции по типу объектов.


См. также:


[Интерфейсы
 сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
