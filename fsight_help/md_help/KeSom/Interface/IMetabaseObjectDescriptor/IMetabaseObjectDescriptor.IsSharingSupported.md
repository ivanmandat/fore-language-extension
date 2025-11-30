# IMetabaseObjectDescriptor.IsSharingSupported

IMetabaseObjectDescriptor.IsSharingSupported
-


# IMetabaseObjectDescriptor.IsSharingSupported


## Синтаксис


IsSharingSupported: Boolean;


## Описание


Свойство IsSharingSupported
 возвращает признак возможности добавления объекта в систему управления
 версиями.


## Комментарии


Если объект может быть помещен в систему управления версиями, то свойство
 возвращает значение True, иначе
 - False.


В систему управления версиями могут быть помещены следующие объекты
 репозитория:


	- папки;


	- формы/модули/сборки;


	- объект «Ресурсы».


Для помещения объекта в систему управления версиями используйте метод
 [IMetabaseObjectDescriptor.Share](IMetabaseObjectDescriptor.Share.htm).


## Пример


Пример использования приведен в описании метода [IMetabaseObjectDescriptor.Share](IMetabaseObjectDescriptor.Share.htm).


См. также:


[IMetabaseObjectDescriptor](IMetabaseObjectDescriptor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
