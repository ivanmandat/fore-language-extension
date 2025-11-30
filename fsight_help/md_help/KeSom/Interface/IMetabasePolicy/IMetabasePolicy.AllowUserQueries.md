# IMetabasePolicy.AllowUserQueries

IMetabasePolicy.AllowUserQueries
-


# IMetabasePolicy.AllowUserQueries


## Синтаксис


AllowUserQueries: Boolean;


## Описание


Свойство AllowUserQueries определяет,
 будут ли доступны средства среды разработки, при помощи которых пользователи
 могут производить экспорт данных из хранилища платформы.


## Комментарии


По умолчанию данному свойству установлено значение True.
 Если свойству установить значение False,
 будет заблокировано использование системной сборки [Dal](Dal.chm::/Interface/Dal_Interface.htm),
 класса File в системной сборке [IO](ModIo.chm::/Interface/ModIo_Interface.htm),
 компонента [UiQuery](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiQuery.htm).


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    MU: IMetabasePolicy;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    MU := MS.Policy;

    // Запретим расширенные возможности работы с БД и внешними файлами

    MU.AllowUserQueries := False;

    // Запретим работу с буфером обмена

    MU.CopyToClipboardAllowed := False;

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера при работе с репозиторием будут запрещены работа
 с буфером обмена и расширенные возможности работы с БД и внешними файлами.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm) | [Общая
 политика](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_General.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
