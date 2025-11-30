# IMetabaseManager.RevertToObject

IMetabaseManager.RevertToObject
-


# IMetabaseManager.RevertToObject


## Синтаксис


RevertToObject(Model: Object): [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm);


## Параметры


Model - объект, либо экземпляр открытого объекта репозитория.


## Описание


Метод RevertToObject осуществляет преобразование и возвращает параметры объекта, реализуемые интерфейсом [IMetabaseObject](../IMetabaseObject/IMetabaseObject.htm), либо экземпляр объекта, реализуемые интерфейсом [IMetabaseObjectInstance](../IMetabaseObjectInstance/IMetabaseObjectInstance.htm).


Примечание. Данный метод предназначен для применения в языках программирования, в которых отсутствует возможность явного преобразования типов. Результатом работы метода будет необходимый тип объекта.


Примечание. Использование данного метода в языке Fore не актуально. Подробнее о преобразовании типов смотрите в описании оператора [As](Fore.chm::/07_Operations/Operations_of_the_creation_object.htm#as).


См. также:


[IMetabaseManager](IMetabaseManager.htm)


[IMetabaseObject.GetExtensionDispatch](../IMetabaseObject/IMetabaseObject.GetExtensionDispatch.htm)


[IMetabaseObjectInstance.GetExtensionDispatch](../IMetabaseObjectInstance/IMetabaseObjectInstance.GetExtensionDispatch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
