# IRdsMergeCallback.OnBeforeProcess

IRdsMergeCallback.OnBeforeProcess
-


# IRdsMergeCallback.OnBeforeProcess


## Синтаксис


OnBeforeProcess(Var bCancel: Boolean);


## Параметры


bCancel. Параметр, определяющий
 будет ли производиться дальнейшая синхронизация элементов.


## Описание


Метод OnBeforeProcess реализует
 событие, возникающее после этапа сравнения элементов и непосредственно
 перед самой синхронизацией элементов, имеющих различные значения атрибутов.


## Комментарии


Допустимые значения параметра bCancel:


	- True. Синхронизация
	 отменяется. Значения всех элементов остаются без изменения;


	- False. Осуществляется
	 дальнейшая синхрозация. Для всех элементов, имеющих разные значения,
	 генерируется событие [OnConflictResolve](IRdsMergeCallback.OnConflictResolve.htm).


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 NSI_1. В файле Sinc.rpl содержатся данные синхронизируемых справочников.


Добавьте ссылки на системные сборки: Db, Metabase, Rds.


			Public Class MyCallback: Object, IRdsMergeCallback


    Public Sub OnProgress(Progress: Integer; Total: Integer);

    Begin

        Debug.WriteLine("Сделано: " + Progress.ToString + " из " + Total.ToString);

    End Sub OnProgress;


    Public Sub OnConflict(LoadElement: IRdsDictionaryElement; CurrentElement: IRdsDictionaryElement);

    Begin

        Debug.Write("Элемент имеет различные значения: ");

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


Sub Main;

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

    Replic.LoadFromFile("c:\Sinc.rpl");

    Replic.Merge(CallBack);

    Trans.Commit;

End Sub Main;


После выполнения примера будет осуществлена синхронизация справочников
 в репозитории НСИ NSI_1. Для контроля процесса синхронизации используется
 пользовательский класс MyCallback. Во время выполнения, в консоль будет
 выводиться общий статус процесса, а так же наименования элементов, имеющих
 различные значения в справочнике и загруженном файле.


См. также:


[IRdsMergeCallback](IRdsMergeCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
