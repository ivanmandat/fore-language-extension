# IMetabasePolicy.PromoteToIsaMode

IMetabasePolicy.PromoteToIsaMode
-


# IMetabasePolicy.PromoteToIsaMode


## Синтаксис


PromoteToIsaMode(Isa: [IMetabaseUser](../IMetabaseUser/IMetabaseUser.htm);
 [Options: [IsaModePromoteOptions](../../Enums/IsaModePromoteOptions.htm)
 = 0]);


## Параметры


Isa. Пользователь, который
 будет выполнять роль администратора информационной безопасности (АИБ);


Options. Определяет параметры
 активации разделения ролей между АИБ и прикладным администратором (ПА).


## Описание


Метод PromoteToIsaMode осуществляет
 включение режима распределения ролей между администратором информационной
 безопасности и прикладным администратором.


## Комментарий


В качестве значения параметра Isa
 необходимо передавать пользователя с учетной записью *_ISA ( где * - имя
 схемы).


По умолчанию АИБ после активации не будет иметь прав на обновление пользователей.


## Пример


Для выполнения примера убедитесь, что в менеджере безопасности содержится
 пользователь с учетной записью *_ISA ( где * - имя схемы). Режим разделения
 ролей между администраторами не используется.


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

    // Активируем режим разделения ролей

    Isa := MS.ResolveName(MB.Id + "_ISA") As IMetabaseUser;

    Policy := MS.Policy;

    Policy.PromoteToIsaMode(Isa, IsaModePromoteOptions.RestrictAdminAccess Or IsaModePromoteOptions.RestrictIsaAccess);

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет активирован режим
 разделения ролей между АИБ и ПА. Пользователи, имеющие привилегии как
 у АИБ и ПА, не смогут открывать объекты репозитория, будет выдаваться
 сообщение о том, что недостаточно прав для выполнения операции.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm) | [Разделение
 ролей администраторов](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_Adm.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
