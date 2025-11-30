# IMetabaseObjectDescriptor.IsPermanent

IMetabaseObjectDescriptor.IsPermanent
-


# IMetabaseObjectDescriptor.IsPermanent


## Синтаксис


		IsPermanent: Boolean;


## Описание


Свойство IsPermanent возвращает
 признак постоянного объекта репозитория.


## Комментарии


Значение данного свойства зависит от значения свойства [IMetabaseObjectCreateInfo.Permanent](../IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Permanent.htm),
 выставленного на стадии создания объекта.


Если свойство IsPermanent возвращает
 значение True, значит объект сохранен
 в репозитории и является постоянным.


Если свойство IsPermanent возвращает
 значение False, значит объект
 еще отсутствует в репозитории и является временным. Если объект не сохранить,
 то после завершения выполнения кода временный объект будет удален.


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
