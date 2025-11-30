# IMetabaseUpdateSecurityCategory.IsValid

IMetabaseUpdateSecurityCategory.IsValid
-


# IMetabaseUpdateSecurityCategory.IsValid


## Синтаксис


IsValid: Boolean;


## Описание


Свойство IsValid возвращает признак доступности категории безопасности.


## Комментарии


Свойство заполняются при вызове у обновления метода [Prepare](../IMetabaseUpdate/IMetabaseUpdate.Prepare.htm). При включенном мандатном доступе происходит сопоставление с уровнями и категориями из репозитория-приёмника, при выключенном мандатном доступе свойство устанавливается в true.


## Пример


Использование свойства приведено в примере для свойства [IMetabaseUpdateMandatoryAccess.Category](../IMetabaseUpdateMandatoryAccess/IMetabaseUpdateMandatoryAccess.Category.htm).


См. также:


[IMetabaseUpdateSecurityCategory](IMetabaseUpdateSecurityCategory.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
