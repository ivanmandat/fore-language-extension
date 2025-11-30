# IMetabaseObjectCreateInfo.DefaultId

IMetabaseObjectCreateInfo.DefaultId
-


# IMetabaseObjectCreateInfo.DefaultId


## Синтаксис


DefaultId: String;


## Описание


Свойство DefaultId возвращает
 идентификатор объекта репозитория по умолчанию.


## Комментарии


Идентификатор, возвращаемый данным свойством, будет использоваться для
 формирования нового идентификатора, если не задано свойство [IMetabaseObjectCreateInfo.Id](IMetabaseObjectCreateInfo.Id.htm).
 Новый идентификатор формируется с учетом формата идентификатора,
 заданного в менеджере безопасности, по следующему принципу: Prefix+«Obj»+«{0:G}»+Postfix,
 где:


{0:G} - позиция, в которую будет вставлен ключ формируемого объекта.


Например, если в менеджере безопасности задан формат test1_*_test2,
 свойство вернет test1_obj{0:G}_test2.


См. также:


[IMetabaseObjectCreateInfo](IMetabaseObjectCreateInfo.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
