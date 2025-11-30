# IMetabaseUpdateAccessSubject.Name

IMetabaseUpdateAccessSubject.Name
-


# IMetabaseUpdateAccessSubject.Name


## Синтаксис


Name:
 String;


## Описание


Свойство Name возвращает имя
 субъекта безопасности.


## Пример


Для выполнения примера убедитесь, что на диске «D:\» содержится файл
 обновления Update.pefx.


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    Mb: IMetabase;

    Upd: IMetabaseUpdate;

    RootFolder: IMetabaseUpdateFolderNode;

    Subj: IMetabaseUpdateAccessSubject;

    Subjs: IMetabaseUpdateAccessSubjects;

    Se: IMetabaseSecurity;

    Lic: Object;

Begin

    Mb := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := Mb.RequestLicense(UiLicenseFeatureType.Adm);

    Upd := Mb.CreateUpdate;

    Upd.LoadFromFileNF("D:\Update.pefx");

    Upd.AllowReplaceSD := True;

    RootFolder := Upd.RootFolder;

    Subjs := Upd.Subjects;

    Debug.WriteLine("Количество субъектов безопасности участвующих в обновлении прав доступа: ");

    Se := Mb.Security;

    For Each Subj In Subjs Do

        Debug.WriteLine(Subj.Name);

        Debug.WriteLine(Subj.Description);

        Debug.WriteLine(Subj.Sid.AsString);

    End For;

    // Сохраним изменения

    Se.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоли появится информация о всех субъектах
 безопасности, которым будут обновлены права доступа к объектам.


См. также:


[IMetabaseUpdateAccessSubject](IMetabaseUpdateAccessSubject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
