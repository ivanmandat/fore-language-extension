# IEtlPlainDataBulkConsumer.EventId

IEtlPlainDataBulkConsumer.EventId
-


# IEtlPlainDataBulkConsumer.EventId


## Синтаксис


EventId: String;


## Описание


Свойство EventId определяет
 идентификатор события, которое будет вызвано при возникновении ошибки
 выполнения задачи ETL.


## Комментарии


Для определения способа обработки ошибок, которые могут возникнуть при
 загрузке данных, используйте свойство [IEtlPlainDataBulkConsumer.ActionOnProblem](IEtlPlainDataBulkConsumer.ActionOnProblem.htm).


Список пользовательских событий формируется в коллекции [IMetabaseCustomExtender.Events](KeSom.chm::/Interface/IMetabaseCustomExtender/IMetabaseCustomExtender.Events.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL. Также в репозитории добавлено пользовательское
 событие с идентификатором CUSTOM_EVENT.


Добавьте ссылки на системные сборки: Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Etl: IEtlTask;

	    Obj: IEtlObject;

	    Data: IEtlPlainDataBulkConsumer;

	    i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Etl := MB.ItemById("ETL").Edit As IEtlTask;

	    For i := 0 To Etl.Count - 1 Do

	        Obj := Etl.Item(i);

	        Data := Obj As IEtlPlainDataBulkConsumer;

	        If (Obj Is IEtlPlainDataBulkConsumer) Then

	            Data.ActionOnProblem := EtlActionOnProblem.DiscardInvalidRecords;

	            Data.SaveInvalidRecs := True;

	            Data.InvalidRecsFileName := "Errors";

	            Data.CommitCount := 2000;

	            Data.UseStopLimit := True;

	            Data.StopLimit := 2;

	            Data.EventId := "CUSTOM_EVENT";

	        End If;

	    End For;

	    (Etl As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера для всех приёмников, поддерживающих
 обработку ошибок выполнения отдельных транзакций, будут установлены одинаковые
 параметры:


	- при выполнении транзакций будут пропускаться только некорректные
	 записи;


	- при возникновении ошибок все пропущенные записи будут сохранены
	 в файл с названием «Errors»;


	- при возникновении более 2х ошибок в процессе выполнения будет
	 прекращено выполнение задачи;


	- количество записей, обрабатываемых в одной транзакции - 2000;


	- если при выполнении задачи возникнут ошибки, то будет вызвано
	 событие «Начало загрузки».


См. также:


[IEtlPlainDataBulkConsumer](IEtlPlainDataBulkConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
