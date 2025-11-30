# ISpecialObjects.Operation

ISpecialObjects.Operation
-


# ISpecialObjects.Operation


## Синтаксис


Operation(


Oper: [MetabaseObjectOperation](../../Enums/MetabaseObjectOperation.htm);


Index: [MetabaseSpecialObject](../../Enums/MetabaseSpecialObject.htm)): [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Параметры


Oper - операция, которую необходимо произвести со специальным объектом.


Index - специальный объект, над которым необходимо произвести операцию.


## Описание


Метод Operation осуществляет выполнение указанной операции со специальным объектом репозитория.


## Комментарии


Данный метод предназначен для работы со следующими специальным объектами:


-
Глобальные переменные.


-
Контейнер пользовательских классов.


Метод Operation автоматически вызывается при работе с глобальными переменными и контейнером пользовательских классов в навигаторе объектов. При работе в новых репозиториях для создания нового контейнера пользовательских классов или области глобальных переменных не рекомендуется использование метода [IMetabase.CreateObject](../IMetabase/IMetabase.CreateObject.htm) для создания соответствующих объектов классов MetabaseObjectClass.KE_CLASS_CUSTOM_EXTENDER и MetabaseObjectClass.KE_CLASS_SHAREDPARAMS. Используйте для этого данный метод с параметром [MetabaseObjectOperation.Create](../../Enums/MetabaseObjectOperation.htm), либо [MetabaseObjectOperation.CreateAndEdit](../../Enums/MetabaseObjectOperation.htm).


В репозитории, где существует контейнер пользовательских классов и область глобальных переменных, вызов метода с параметрами [MetabaseObjectOperation.Create](../../Enums/MetabaseObjectOperation.htm), либо [MetabaseObjectOperation.CreateAndEdit](../../Enums/MetabaseObjectOperation.htm) приведет к получению соответствующего существующего объекта.


См. также:


[ISpecialObjects](ISpecialObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
