# IMetabaseUpdateMandatoryAccess.IsValid

IMetabaseUpdateMandatoryAccess.IsValid
-


# IMetabaseUpdateMandatoryAccess.IsValid


## Синтаксис


IsValid: Boolean;


## Описание


Свойство IsValid возвращает
 признак доступности параметров мандатного доступа.


## Комментарии


Свойство заполняется при вызове у обновления метода [Prepare](../IMetabaseUpdate/IMetabaseUpdate.Prepare.htm).
 При включенном мандатном доступе происходит сопоставление с уровнями и
 категориями из репозитория-приёмника, при выключенном мандатном доступе
 свойство устанавливается в True.


## Пример


Пример использования приведен в описании свойства [IMetabaseUpdate.MandatoryAccess](../IMetabaseUpdate/IMetabaseUpdate.MandatoryAccess.htm).


См. также:


[IMetabaseUpdateMandatoryAccess](IMetabaseUpdateMandatoryAccess.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
