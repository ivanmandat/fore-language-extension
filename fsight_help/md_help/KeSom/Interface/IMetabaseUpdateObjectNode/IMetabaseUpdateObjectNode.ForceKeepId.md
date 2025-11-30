# IMetabaseUpdateObjectNode.ForceKeepId

IMetabaseUpdateObjectNode.ForceKeepId
-


# IMetabaseUpdateObjectNode.ForceKeepId


## Синтаксис


ForceKeepId: Boolean;


## Описание


Свойство ForceKeepId определяет признак отмены изменения идентификатора при обновлении существующих объектов.


## Комментарии


По умолчанию свойству установлено значение False, при этом во время обновления для объекта будет установлен тот идентификатор, который установлен для соответствующего объекта в обновлении.


Если свойству установить значение True, то при обновлении идентификатор объекта в репозитории не будет изменен вне зависимости от того, какой имеет идентификатор соответствующий объект репозитория.


Данное свойство перекрывает действие свойства [ForceUniqueId](IMetabaseUpdateObjectNode.ForceUniqueId.htm).


См. также:


[IMetabaseUpdateObjectNode](IMetabaseUpdateObjectNode.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
