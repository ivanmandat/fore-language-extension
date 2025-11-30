# IMetabasePolicy.RootObject

IMetabasePolicy.RootObject
-


# IMetabasePolicy.RootObject


## Синтаксис


RootObject: [IMetabaseObjectDescriptor](../IMetabaseObjectDescriptor/IMetabaseObjectDescriptor.htm);


## Описание


Свойство RootObject определяет
 папку, которая будет являться корневой при входе в репозиторий.


## Комментарии


В качестве значения свойства необходимо указать описание одной из папок
 репозитория.


Указанная папка будет использована в качестве корневой папки репозитория
 если вход осуществляется под пользователем, который не является администратором
 или администратором информационной безопасности (АИБ).


По умолчанию свойство принимает значение Null,
 при этом пользователям доступен весь репозиторий.


Примечание.
 Для доступа к объектам пользователь должен обладать соответствующими правами.


## Пример


Для выполнения примера предполагается наличие в репозитории папки с
 идентификатором «ROOT_PROJECT_FOLDER».


Добавьте ссылку на системную сборку Metabase.


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

    // Зададим корневую
 папку

    Policy.RootObject := Mb.ItemById("ROOT_PROJECT_FOLDER");

    // Сохраним изменения

    MS.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера для репозитория будет задана корневая папка.


См. также:


[IMetabasePolicy](IMetabasePolicy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
