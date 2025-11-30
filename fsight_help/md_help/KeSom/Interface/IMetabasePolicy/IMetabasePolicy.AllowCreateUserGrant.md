# IMetabasePolicy.AllowCreateUserGrant

IMetabasePolicy.AllowCreateUserGrant
-


# IMetabasePolicy.AllowCreateUserGrant


## Синтаксис


AllowCreateUserGrant: Boolean;


## Описание


Свойство AllowCreateUserGrant
 позволяет при сохранении политики безопасности создавать две роли:


	- первая роль включает в себя системные привилегии «Create
	 user» и «Drop user»;


	- вторая роль включает в себя системную привилегию «Alter user».


## Комментарии


Свойство по умолчанию не установлено и становится доступным, когда активирован
 режим разделения ролей между прикладным администратором и АИБ’ом.


В создаваемые роли будет включен администратор информационной безопасности.
 На присвоение свойство будет доступно только для него. При установке AllowCreateUserGrant
 значения False роли будут удаляться.


При обновлении пользователя в зависимости от привилегий, пользователь
 будет либо добавляться в роль, либо исключаться из роли.


Свойство доступно только для репозиториев, созданных на базе СУБД Oracle.


## Пример


Для выполнения примера убедитесь, что репозиторий создан на базе СУБД
 Oracle.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Isa: IMetabaseUser;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Isa := MS.ResolveName(MB.Id + "_ISA") As IMetabaseUser;

    Policy := MS.Policy;

    // Включим распределение ролей между АИБ'ом и прикладным администратором

    Policy.PromoteToIsaMode(Isa, IsaModePromoteOptions.RestrictAdminAccess Or IsaModePromoteOptions.RestrictIsaAccess);

    // Создадим две роли

    Policy.AllowCreateUserGrant := True;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет активирован режим разделения ролей между
 АИБ'ом и прикладным администратором. Для АИБ'а будут созданы две роли,
 которые будут использоваться при администрировании пользователей.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
