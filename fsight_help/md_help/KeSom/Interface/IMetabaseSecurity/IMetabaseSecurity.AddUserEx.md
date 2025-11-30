# IMetabaseSecurity.AddUserEx

IMetabaseSecurity.AddUserEx
-


# IMetabaseSecurity.AddUserEx


## Синтаксис


AddUserEx(UserName: String; Options: [MetabaseSecurityAddUserOptions](../../Enums/MetabaseSecurityAddUserOptions.htm)):
 [IMetabaseUser](../IMetabaseUser/IMetabaseUser.htm);


## Параметры


UserName. Наименование создаваемого
 пользователя.


Options. Дополнительные опции
 создания пользователя.


## Описание


Метод AddUserEx создаёт нового
 пользователя.


## Комментарии


При создании внутреннего пользователя (Options = [MetabaseSecurityAddUserOptions.Internal](../../Enums/MetabaseSecurityAddUserOptions.htm))
 имя, передаваемое в параметре UserName,
 принудительно приводится в верхний регистр.
 Подключение будет возможно только при указании имени в верхнем
 регистре. При работе с СУБД PostgreSQL признак [учёта
 регистра](../IPrimaryPostgresSPLD/IPrimaryPostgresSPLD.CaseSensitive.htm) учитываться не будет, пользователь также будет создан с именем
 в верхнем регистре.


При добавлении пользователя, подключаемого с сервера (Options = [MetabaseSecurityAddUserOptions.External](../../Enums/MetabaseSecurityAddUserOptions.htm)),
 пользователь добавляются с тем именем, с каким он создан на уровне СУБД.


## Пример


Использование метода приведено в примере для [IMetabaseSecurity.AddGroup](IMetabaseSecurity.AddGroup.htm).


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
