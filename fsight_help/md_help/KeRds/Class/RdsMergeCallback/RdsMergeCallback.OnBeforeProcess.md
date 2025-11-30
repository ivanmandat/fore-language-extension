# RdsMergeCallback.OnBeforeProcess

RdsMergeCallback.OnBeforeProcess
-


# RdsMergeCallback.OnBeforeProcess


## Синтаксис


OnBeforeProcess(Var Cancel: Boolean);


## Параметры


Cancel.
 Параметр, определяющий будет ли производиться дальнейшая синхронизация
 элементов. Если в качестве значения параметра передается True - синхронизация отменяется. Значения всех
 элементов остаются без изменения. Если передать значение False - осуществляется дальнейшая синхрозация,
 для всех элементов имеющих разные значения генерируется событие [OnConflictResolve](RdsMergeCallback.OnConflictResolve.htm).


## Описание


Метод OnBeforeProcess реализует
 событие, возникающее после этапа сравнения элементов и непосредственно
 перед самой синхронизацией элементов, имеющих различные значения атрибутов.


## Пример


Для выполнения примера предполагается наличие репозитория НСИ с идентификатором
 "NSI_1". В файле "Sinc.rpl" содержатся данные синхронизируемых
 справочников.


	Public Class MyCallback: RdsMergeCallback

	    Public Sub OnProgress(Current: Integer; Total: Integer);

	    Begin

	        Debug.WriteLine("Сделано: " + Progress.ToString + " из " + Total.ToString);

	    End Sub OnProgress;

	    Public Sub OnConflict(LoadElement: IRdsDictionaryElement; CurrentElement: IRdsDictionaryElement);

	    Begin

	        Debug.Write("Conflict: ");

	        Debug.Write(LoadElement.Name);

	        Debug.Write(" | ");

	        Debug.WriteLine(CurrentElement.Name);

	    End Sub OnConflict;

	    Public Sub OnBeforeProcess(Var Cancel: Boolean);

	    Begin

	        Cancel := False;

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

	    CallBack: RdsMergeCallback;

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
 в репозитории НСИ "NSI_1". Для контроля процесса синхронизации
 используется пользовательский класс "MyCallback". Во время выполнения,
 в консоль будет выводиться общий статус процесса, а так же наименования
 элементов, имеющих различные значения в справочнике и загруженном файле.


См. также:


[RdsMergeCallback](RdsMergeCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
