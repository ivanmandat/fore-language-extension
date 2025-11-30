# IMetabaseObjectParamLink.ReadWriteMode

IMetabaseObjectParamLink.ReadWriteMode
-


# IMetabaseObjectParamLink.ReadWriteMode


## Синтаксис


ReadWriteMode: [MetabaseObjectParamReadWriteMode](../../Enums/MetabaseObjectParamReadWriteMode.htm);


## Описание


Свойство ReadWriteMode определяет
 режим связи параметра с глобальной переменной.


## Комментарии


Если для параметра заданы настройки связи, то при инициализации параметру
 будет установлено значение из глобальной переменной. В дальнейшем значение
 параметра можно менять.


Если для параметра установлен [режим
 с возможностью изменения значения](IMetabaseObjectParamLink.ReadWriteMode.htm), то после изменения параметра новое
 значение будет передано в глобальную переменную. Изменённое значение глобальной
 переменной хранится в кеше в рамках текущей сессии и будет сброшено после
 завершения работы в репозитории.


## Пример


Использование свойства приведено в примере для [IMetabaseObjectParam.SharedParamLink](../IMetabaseObjectParam/IMetabaseObjectParam.SharedParamLink.htm).


См. также:


[IMetabaseObjectParamLink](IMetabaseObjectParamLink.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
