# IEtlPlainDataCopy.RemoveLink

IEtlPlainDataCopy.RemoveLink
-


# IEtlPlainDataCopy.RemoveLink


## Синтаксис


RemoveLink(ProviderField: String; ConsumerField:
 String);


## Параметры


ProviderField. Идентификатор
 поля источника данных;


ConsumerField. Идентификатор
 поля приёмника данных.


Примечание.
 Значения параметров чувствительны к регистру. Идентификаторы полей должны
 указываться в верхнем регистре символов.


## Описание


Метод RemoveLink удаляет связь
 между указанными полями источника и приёмника данных.


## Пример


В примере рассмотрено копирование данных из текстового файла в таблицу
 репозитория. Для выполнения примера предполагается наличие в репозитории
 задачи ETL с идентификатором «OBJ_ETL» и таблицы с идентификатором «OBJ_TBL».
 Также в файловой системе должен присутствовать текстовый файл «C:\ETL_imp.txt».


Первые 4 строки текстового файла, рассматриваемого в примере:


"Key","Country Name","Owner"


512,"Afghanistan",3


914,"Albania",1


612,"Algeria",


Поля таблицы, рассматриваемой в примере:


	- KEY. Поле
	 целого типа.


	- COUNTRY_NAME.
	 Поле строкового типа.


	- OWNER. Поле
	 строкового типа.


	Sub UserProc;

	Var

	    Mb: IMetabase;

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

	    Mb := MetabaseClass.Active;

	    Task := MB.ItemById("OBJ_ETL").Edit As IEtlTask;

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

	    Tab := MB.ItemById("OBJ_TBL").Edit As IDatasetModel;

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

	    //Удаление связи по полю "OWNER"

	    CopyObj.RemoveLink("OWNER", "OWNER");

	    // Очистка приёмника данных

	    CopyObj.ClearConsumer := True;

	    //Обработка ошибок

	    CopyObj.ActionOnProblem := EtlActionOnProblem.DiscardRecordsInTransaction;

	    CopyObj.CommitCount := 10;

	    // Сохранение объекта, копирующего данные

	    CopyObj.Save;

	    //Начало создания визуального объекта

	    WxConsumer := Task.Workspace.CreateRectangle;

	    WxETLConsumer := New WxEtlObject.Create;

	    WxETLConsumer.EtlObject := CopyObj;

	    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

	    WxConsumer.Style.PictureMarginTop := -10;

	    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

	    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

	    //Конец создания визуального объекта

	    //Выполнение задачи

	    Task.Execute(Null);

	    //Сохранение объекта задачи ETL

	    (Task As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в задаче ETL будет создан новый объект, осуществляющий
 копирование данных. Копирование будет осуществляться из текстового файла
 в таблицу репозитория. Поля источника и приёмника будут связаны автоматически.
 Если какую-либо связь между полями приёмника и источника данных не удастся
 установить автоматически, то она будет добавлена вручную. Связь по полю
 «OWNER» будет удалена. Таким образом копирование будет осуществляться
 только по полям «KEY» и «COUNTRY_NAME». Если при выполнении загрузки возникнут
 ошибки, то будут пропущены записи в рамках одной транзакции. За одну транзакцию
 будут обрабатываться 10 записей. После сохранения объекта копирования
 задача ETL будет запущена на выполнение.


См. также:


[IEtlPlainDataCopy](IEtlPlainDataCopy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
