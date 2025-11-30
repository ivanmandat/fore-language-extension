# IRdsReplicator.LoadFromFile

IRdsReplicator.LoadFromFile
-


# IRdsReplicator.LoadFromFile


## Синтаксис


LoadFromFile(FileName: String);


## Параметры


FileName. Путь и наименование файла, из которого будут загружены данные синхронизируемых справочников.


## Описание


Метод LoadFromFile осуществляет загрузку данных синхронизируемых справочников.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором «NSI_1». В файле «C:\Sinc.rpl» содержатся данные синхронизируемых справочников. Добавьте ссылки на системные сборки «Metabase», «Rds», «Db».


			Public Class MyCallback: Object, IRdsMergeCallback

    Public Sub OnProgress(Progress: Integer; Total: Integer);

    Begin

        Debug.WriteLine("Сделано: " + Progress.ToString + " из " + Total.ToString);

    End Sub OnProgress;


    Public Sub OnConflict(LoadElement: IRdsDictionaryElement; CurrentElement: IRdsDictionaryElement);

    Begin

        Debug.Write("Элемент имеет различны значения: ");

        Debug.Write(LoadElement.Name);

        Debug.Write(" | ");

        Debug.WriteLine(CurrentElement.Name);

    End Sub OnConflict;


    Public Sub OnBeforeProcess(Var bCancel: Boolean);

    Begin

        bCancel := False;

    End Sub OnBeforeProcess;


    Public Sub OnConflictResolve(LoadElement: Integer; CurrentElement: Integer; Var Ignor: Boolean);

    Begin

        Ignor := True;

    End Sub OnConflictResolve;

End Class MyCallback;


Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    NSI: IRdsDatabase;

    NSIInst: IRdsDatabaseInstance;

    Trans: IConnectionTransaction;

    CallBack: MyCallback;

    Replic: IRdsReplicator;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("NSI_1").Bind;

    NSI := MObj As IRdsDatabase;

    NSIInst := NSI.Open(Null);

    Trans := NSIInst.DatabaseInstance.Connection.StartTransaction(False);

    CallBack := New MyCallback.Create;

    Replic := NSIInst.CreateReplicator;

    Replic.LoadFromFile("C:\Sinc.rpl");

    Replic.Merge(CallBack);

    Trans.Commit;

End Sub UserProc;


После выполнения процедуры UserProc будет осуществлена синхронизация справочников в репозитории НСИ «NSI_1». Для контроля процесса синхронизации используется пользовательский класс MyCallback. Во время выполнения в консоль будут выводиться общий статус процесса и наименования элементов, имеющих различные значения в справочнике и загруженном файле. Для всех элементов, имеющих различия, будут восстановлены значения из файла.


См. также:


[IRdsReplicator](IRdsReplicator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
