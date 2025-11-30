# IMetaRdsLoader.Database

IMetaRdsLoader.Database
-


# IMetaRdsLoader.Database


## Синтаксис


Database: [IDatabase](KeDb.chm::/Interface/IDatabase/IDatabase.htm);


## Описание


Свойство Database определяет
 базу данных, в которой будет храниться таблица справочника.


## Комментарии


Данное свойство актуально, если создается новый справочник НСИ. Если
 в информации о создаваемом объекте, передаваемой в методе [IMetaRdsLoader.CreateObject](IMetaRdsLoader.CreateObject.htm), в качестве
 родительского объекта указан репозиторий НСИ, либо папка, созданная внутри
 репозитория НСИ, то в качестве значения свойства Database
 будет установлена база данных, на которую настроен указанный репозиторий
 НСИ. Если родительский объект не указан, либо указана папка репозитория,
 то перед выполнением метода [IMetaRdsLoader.CreateObject](IMetaRdsLoader.CreateObject.htm)
 необходимо в свойстве Database
 указать какую-либо базу данных.


## Пример


Использование свойства приведено в примере для [IRdsBaseBinding.InUniqueKey](../IRdsBaseBinding/IRdsBaseBinding.InUniqueKey.htm).


См. также:


[IMetaRdsLoader](IMetaRdsLoader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
