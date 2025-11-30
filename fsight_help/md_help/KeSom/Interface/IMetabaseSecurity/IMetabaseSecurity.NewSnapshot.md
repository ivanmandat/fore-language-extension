# IMetabaseSecurity.NewSnapshot

IMetabaseSecurity.NewSnapshot
-


# IMetabaseSecurity.NewSnapshot


## Синтаксис


NewSnapshot: [ISecuritySnapshot](../ISecuritySnapshot/ISecuritySnapshot.htm);


## Описание


Метод NewSnapshot создает объект
 для резервного копирования политики безопасности.


## Комментарии


Для сохранения политики безопасности в файл *.pppolicy используйте свойство
 [ISecuritySnapshot.SaveToFile](../ISecuritySnapshot/ISecuritySnapshot.SaveToFile.htm).


## Пример


Для выполнения примера убедитесь, что в корневом каталоге диска «C»
 содержится файл «test.pppolicy».


Добавьте ссылку на системную сборку Metabase.


			Sub UserProc;

Var

    MB: IMetabase;

    SE: IMetabaseSecurity;

    SS: ISecuritySnapshot;

    Log: ISecuritySnapshotLog;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    SE := MB.Security;

    // Создадим объект для резервного копирования

    SS := SE.NewSnapshot;

    // Применим политику безопасности из файла

    SS.ApplyFromFile("C:\test.pppolicy");

    Log := SS.Log;

    Debug.WriteLine("ApplyState SubjectName SubjectType Message");

    While Not Log.Eof Do

        Select Case (Log.ApplyState As Integer)

            Case 0 : Debug.Write("None ");

            Case 1 : Debug.Write("Create ");

            Case 2 : Debug.Write("Change ");

            Case 3 : Debug.Write("Error ");

            Case 4 : Debug.Write("Deleted ");

        End Select;

        Debug.Write(Log.SubjectName + " ");

        Select Case (Log.SubjectType As Integer)

            Case 1 : Debug.Write("User ");

            Case 2 : Debug.Write("Group ");

        End Select;

        Debug.Write(Log.Message);

        Log.Next;

        Debug.WriteLine("");

    End While;

    // Сохраним изменения

    SE.Apply;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоли будет выведена подробная информация
 о произведенных операциях во время применения политики безопасности.


См. также:


[IMetabaseSecurity](IMetabaseSecurity.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
