# ISecuritySnapshot.SaveToFile

ISecuritySnapshot.SaveToFile
-


# ISecuritySnapshot.SaveToFile


## Синтаксис


SaveToFile(FileName: String);


## Параметры


FileName. Путь к файлу политики
 безопасности, в который будет сохранена политика безопасности (*.pppolicy).


## Описание


Метод SaveToFile сохраняет политику
 безопасности в файл.


## Пример


Для выполнения примера добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    MS: IMetabaseSecurity;

    Sna: ISecuritySnapshot;

    Log: ISecuritySnapshotLog;

    sFile: String;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    MS := MB.Security;

    Sna := MS.NewSnapshot;

    // Сохраним политику безопасности в файл

    sFile := "c:\" + Sna.Metabase.Name + ".pppolicy";

    Sna.SaveToFile(sFile);

    Log := Sna.Log;

    While Not Log.Eof Do

        Debug.WriteLine(Log.Message);

        Log.Next;

    End While;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера политика безопасности будет сохранена в заданный
 файл, название которого соответствует названию репозитория.


См. также:


[ISecuritySnapshot](ISecuritySnapshot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
