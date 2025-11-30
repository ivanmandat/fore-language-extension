# IEtlPlainDataCopy.EventId

IEtlPlainDataCopy.EventId
-


# IEtlPlainDataCopy.EventId


## Синтаксис


EventId: String;


## Описание


Свойство EventId определяет
 идентификатор события, которое будет вызвано при возникновении ошибки
 выполнения задачи ETL.


## Комментарии


Для определения способа обработки ошибок, которые могут возникнуть при
 загрузке данных, используйте свойство [IEtlPlainDataCopy.ActionOnProblem](IEtlPlainDataCopy.ActionOnProblem.htm).


Список пользовательских событий формируется в коллекции [IMetabaseCustomExtender.Events](KeSom.chm::/Interface/IMetabaseCustomExtender/IMetabaseCustomExtender.Events.htm).


## Пример


Для выполнения примера предполагается наличие:


	- в репозитории задачи ETL с идентификатором ETL и таблицы с идентификатором
	 TBL. Поля таблицы, рассматриваемой в примере:


		- KEY. Поле
		 целого типа.


		- COUNTRY_NAME.
		 Поле строкового типа.


		- OWNER.
		 Поле строкового типа;


	- в файловой системе текстового файла C:\ETL_imp.txt. Первые 4
	 строки текстового файла, рассматриваемого в примере:


"Key","Country
 Name","Owner"


512,"Afghanistan",3


914,"Albania",1


612,"Algeria",2


Также в репозитории добавлено пользовательское событие с идентификатором
 CUSTOM_EVENT.


Добавьте ссылки на системные сборки: Metabase, Etl, Dt, Db, Andy, Drawing.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Task: IEtlTask;

	    CopyObj: IEtlPlainDataCopy;

	    FProvider: IDtTextProvider;

	    Tab: IDatasetModel;

	    FConsumer: IDtMetabaseConsumer;

	    ProvFields, ConsFields: IDtFieldDefinitions;

	    i: Integer;

	    WxConsumer: IWxRectangle;

	    WxETLConsumer: IWxEtlObject;

	Begin

	    MB := MetabaseClass.Active;

	    Task := MB.ItemById("ETL").Edit As IEtlTask;

	    // Создание объекта, копирующего данные

	    CopyObj := Task.Create(EtlObjectType.PlainDataCopy) As IEtlPlainDataCopy;

	    CopyObj := CopyObj.Edit;

	    // Настройка параметров источника данных

	    FProvider := New DtTextProvider.Create As IDtTextProvider;

	    FProvider.File := "C:\ETL_imp.txt";

	    FProvider.DelimitedColumnDelimiter := ",";

	    FProvider.HeaderRow := 1;

	    FProvider.FormatType := DtTextFormatType.Delimited;

	    FProvider.RangeHasHeader := True;

	    FProvider.RangeFirstRow := 1;

	    COpyObj.Provider := FProvider;

	    // Настройка параметров приёмника данных

	    FConsumer := New DtMetabaseConsumer.Create;

	    Tab := MB.ItemById("TBL").Edit As IDatasetModel;

	    FConsumer.Dataset := Tab;

	    CopyObj.Consumer := FConsumer;

	    // Привязка данных источника и приёмника

	    ProvFields := FProvider.Fields;

	    ConsFields := FConsumer.Fields;

	    CopyObj.AutoLink;

	    For i := 0 To ProvFields.Count - 1 Do

	        If Not CopyObj.IsLinked(ProvFields.Item(i).Name, ConsFields.Item(i).Name) Then

	            CopyObj.AddLink(ProvFields.Item(i).Name, ConsFields.Item(i).Name);

	        End If;

	    End For;

	    // Очистка приёмника данных

	    CopyObj.ClearConsumer := True;

	    // Обработка ошибок

	    CopyObj.ActionOnProblem := EtlActionOnProblem.DiscardRecordsInTransaction;

	    CopyObj.SaveInvalidRecs := True;

	    CopyObj.InvalidRecsFileName := "Errors";

	    CopyObj.UseStopLimit := True;

	    CopyObj.StopLimit := 2;

	    CopyObj.CommitCount := 10;

	    CopyObj.EventId := "CUSTOM_EVENT";

	    // Сохранение объекта, копирующего данные

	    CopyObj.Save;

	    // Создание визуального объекта

	    WxConsumer := Task.Workspace.CreateRectangle;

	    WxETLConsumer := New WxEtlObject.Create;

	    WxETLConsumer.EtlObject := CopyObj;

	    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

	    WxConsumer.Style.PictureMarginTop := -10;

	    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

	    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

	    // Сохранение объекта задачи ETL

	    (Task As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера в задаче ETL будет создан новый объект,
 осуществляющий копирование данных. Копирование будет осуществляться из
 текстового файла в таблицу репозитория. Для объекта «Копирование данных»
 будут заданы настройки:


	- поля источника и приёмника будут связаны автоматически;


	- если какую-либо связь между полями приёмника и источника данных
	 не удастся установить автоматически, то она будет добавлена вручную;


	- если при выполнении загрузки возникнут ошибки, то будут пропущены
	 записи в рамках одной транзакции;


	- при возникновении ошибок при выполнении задачи все пропущенные
	 записи будут сохранены в файл «Errors»;


	- при возникновении более 2х ошибок в процессе выполнения будет
	 прекращено выполнение задачи;


	- за одну транзакцию будут обрабатываться 10 записей;


	- если при выполнении задачи возникнут ошибки, то будет вызвано
	 событие «Начало загрузки».


См. также:


[IEtlPlainDataCopy](IEtlPlainDataCopy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
