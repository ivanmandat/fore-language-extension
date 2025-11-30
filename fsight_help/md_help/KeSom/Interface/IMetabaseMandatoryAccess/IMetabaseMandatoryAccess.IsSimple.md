# IMetabaseMandatoryAccess.IsSimple

IMetabaseMandatoryAccess.IsSimple
-


# IMetabaseMandatoryAccess.IsSimple


## Синтаксис


IsSimple: Boolean;


## Описание


Свойство IsSimple определяет
 признак использования метода разграничения доступа по уровням.


## Комментарии


Если свойству установить значение True,
 то в политике безопасности репозитория будет включен режим разграничение
 доступа по уровням. Механизм работы описан в подразделе «[Метод разграничения
 доступа по уровням](Admin.chm::/04_SecurityPolicy/Security_levels.htm)». При распределении
 доступа по уровням не используются категории безопасности, но необходимые
 уровни безопасности создаются в единственной категории, которую вернет
 свойство [IMetabaseMandatoryAccess.Category](IMetabaseMandatoryAccess.Category.htm).


## Пример


Пример использования приведен в описании свойства [IMetabasePolicy.ESKMode](../IMetabasePolicy/IMetabasePolicy.ESKMode.htm).


См. также:


[IMetabaseMandatoryAccess](IMetabaseMandatoryAccess.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
