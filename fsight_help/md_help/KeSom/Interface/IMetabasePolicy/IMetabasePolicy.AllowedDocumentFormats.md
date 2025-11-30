# IMetabasePolicy.AllowedDocumentFormats

IMetabasePolicy.AllowedDocumentFormats
-


# IMetabasePolicy.AllowedDocumentFormats


## Синтаксис


AllowedDocumentFormats:
 [IStringList](modcollections.chm::/interface/istringlist/istringlist.htm);


## Описание


Свойство AllowedDocumentFormats
 определяет форматы [документов](UiNavObj.chm::/UiNavObj_document.htm),
 которые доступны для загрузки и открытия в репозитории.


## Комментарии


Для ограничения загрузки и открытия [документов](UiNavObj.chm::/UiNavObj_document.htm)
 допустимого формата используйте раздел «[Разрешённые
 форматы документов в репозитории](Admin.chm::/04_SecurityPolicy/Editor_of_Politicy/Security_EditorPoliticy_General.htm#limitation)» в [менеджере
 безопасности](Admin.chm::/01_RunSecManager/Admin_Organizational_Starting.htm). По умолчанию доступна загрузка и открытие
 документов любого формата.


## Пример


Для выполнения примера добавьте ссылки на системные сборки: Metabase,
 Collections.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    // Добавим разрешенный формат документов

    MS.Policy.AllowedDocumentFormats.Add("XML");

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера загрузка и открытие документов будет доступна
 файлам формата XML.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
