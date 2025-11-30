# IMetaRdsLoader.CreateObject

IMetaRdsLoader.CreateObject
-


# IMetaRdsLoader.CreateObject


## Синтаксис


CreateObject(CreateInfo: [IMetabaseObjectCreateInfo](KeSom.chm::/Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.htm)):
 [IRdsDictionary](../IRdsDictionary/IRdsDictionary.htm);


## Параметры


CreateInfo. Информация о создаваемом
 табличном справочнике НСИ.


## Описание


Метод CreateObject создает новый
 справочник на основании указанной информации и [привязок
 атрибутов](IMetaRdsLoader.Bindings.htm).


## Комментарии


В информации о создаваемом справочнике, передаваемой в параметра CreateInfo, как минимум должен быть
 указан [родительский
 объект](KeSom.chm::/Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Parent.htm) и [идентификатор](KeSom.chm::/Interface/IMetabaseObjectCreateInfo/IMetabaseObjectCreateInfo.Id.htm).
 В качестве родительского объекта может быть указана папка репозитория.


При выполнении метода CreateObject
 будет создан новый справочник, который нужно сохранить. Структура справочника
 (коллекция атрибутов) будет сформирована на основании привязок, заданных
 в коллекции [IMetaRdsLoader.Bindings](IMetaRdsLoader.Bindings.htm).
 После выполнения метода структура справочника будет доступна в свойстве
 [IMetaRdsLoader.Dictionary](IMetaRdsLoader.Dictionary.htm).


## Пример


Использование метода приведено в примере для [IMetaRdsLoader.Load](IMetaRdsLoader.Load.htm).


См. также:


[IMetaRdsLoader](IMetaRdsLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
