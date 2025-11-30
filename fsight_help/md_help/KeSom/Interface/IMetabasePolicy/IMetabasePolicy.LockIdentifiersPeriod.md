# IMetabasePolicy.LockIdentifiersPeriod

IMetabasePolicy.LockIdentifiersPeriod
-


# IMetabasePolicy.LockIdentifiersPeriod


## Синтаксис


LockIdentifiersPeriod: Integer;


## Описание


Свойство LockIdentifiersPeriod
 определяет период, в течение которого запрещено повторно использовать
 идентификаторы удаленных пользователей.


## Комментарии


Период измеряется количеством дней. По умолчанию свойство принимает
 значение «0».


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Policy: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Policy := MS.Policy;

    // Установим период

    Policy.LockIdentifiersPeriod := 10;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера будет установлен период запрета повторного
 использования идентификаторов удаленных пользователей на десять дней.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
