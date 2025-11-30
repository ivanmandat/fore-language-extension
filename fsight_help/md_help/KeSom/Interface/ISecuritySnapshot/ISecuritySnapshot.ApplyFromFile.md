# ISecuritySnapshot.ApplyFromFile

ISecuritySnapshot.ApplyFromFile
-


# ISecuritySnapshot.ApplyFromFile


## Синтаксис


ApplyFromFile(FileName: String, [CallBack: [ISecuritySnapshotCallback](../ISecuritySnapshotCallback/ISecuritySnapshotCallback.htm)
 = Null]);


## Параметры


FileName. Путь к файлу политики
 безопасности *.pppolicy;


CallBack. Обратный вызов, например,
 для подтверждения необходимости создания пользователя.


## Описание


Метод ApplyFromFile применяет
 политику безопасности из файла.


## Пример


Для выполнения примера предполагается наличие файла политики безопасности
 «C:\test.pppolicy».


Добавьте ссылки на системные сборки: Metabase, Dal.


			Class CSnapBack: SecuritySnapshotCallback


Public Constructor Create;

Begin

End Constructor Create;


Public Sub OnSubjectApply(ApplyState: ApplyStateType; Subject: ISecuritySubject; Var State: Integer);

Begin

    Debug.WriteLine("OnSubjectApply " + Subject.Name + " " + CultureInfo.Current.FormatTime(DateTime.Now) + " - " + ApplyState.ToString);

End Sub OnSubjectApply;


Public Sub OnOperation(ApplyOperation: SnapshotApplyOperationType; Var State: Integer);

Begin

    Debug.WriteLine("OnOperation: " + CultureInfo.Current.FormatTime(DateTime.Now) + " - " + ApplyOperation.ToString);

End Sub OnOperation;


End Class CSnapBack;


Sub UserProc;

Var

    MB: IMetabase;

    SE: IMetabaseSecurity;

    SS: ISecuritySnapshot;

    SSL: ISecuritySnapshotLog;

    i: Integer;

    CallBack : CSnapBack;

    sFile: String;

    Lic: Object;

Begin

    MB := MetabaseClass.Active;

    // Получим лицензию для возможности работы с менеджером безопасности

    Lic := MB.RequestLicense(UiLicenseFeatureType.Adm);

    SE := MB.Security;

    SS := SE.NewSnapshot;

    CallBack := New CSnapBack.Create;

    SS.ApplyFromFile("C:\test.pppolicy", CallBack);

    SSL := SS.Log;

    For i := 0 To SSL.Fields.Count - 1 Do

        Debug.Write((SSL.Fields.Item(i).Name As String) + " ");

    End For;

    Debug.WriteLine("");

    While Not SSL.Eof Do

        For i := 0 To SSL.Fields.Count-1 Do

            If SSL.Fields.Item(i).Name = "APST"

                Then

                    Select Case (SSL.Fields.Item(i).Value As Integer)

                    Case 0 : Debug.Write("None ");

                    Case 1 : Debug.Write("Create ");

                    Case 2 : Debug.Write("Change ");

                    Case 3 : Debug.Write("Error ");

                    Case 4 : Debug.Write("Deleted ");

                    End Select;

                Else

                    Debug.Write((SSL.Fields.Item(i).Value As String) + " ");

            End If;

        End For;

        SSL.Next;

        Debug.WriteLine("");

    End While;

    // Освободим лицензию

    Lic := Null;

End Sub UserProc;


После выполнения примера в консоль будет выведена информация о произведенных
 операциях во время применения политики безопасности, а также подробный
 список групп/пользователей и действий, произведенных над ними.


См. также:


[ISecuritySnapshot](ISecuritySnapshot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
