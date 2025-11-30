# IEtlPlainDataProvider.FetchBlockSize

IEtlPlainDataProvider.FetchBlockSize
-


# IEtlPlainDataProvider.FetchBlockSize


## Синтаксис


FetchBlockSize: Integer;


## Описание


Свойство FetchBlockSize определяет
 количество обрабатываемых записей при использовании пакетной обработки
 данных в источнике.


## Комментарии


Данное свойство актуально, если свойство [IEtlTask.PartialFetch](../IEtlTask/IEtlTask.PartialFetch.htm)
 принимает значение True.


Если свойство IEtlPlainDataProvider.FetchBlockSize принимает какое-нибудь
 значение, то оно перекрывает значение свойства [IEtlTask.DefaultBlockSize](../IEtlTask/IEtlTask.DefaultBlockSize.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие задачи ETL
 с идентификатором T_ETL, таблицы-источника данных с идентификатором IMPORT_TABLE,
 содержащей несколько десятков тысяч записей, таблицы-приёмника данных
 с идентификатором EXPORT_TABLE. Таблицы содержат по 3 идентичных поля.


Добавьте ссылки на системные сборки: Andy, Db, Drawing, Dt, Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    EtlConsumer: IEtlPlainDataConsumer;

	    MBProvider: IDtMetabaseProvider;

	    MBConsumer: IDtMetabaseConsumer;

	    TabProv, TabCons: IDatasetModel;

	    DataSetInstance: IDataSetInstance;

	    Fields: IDatasetInstanceFields;

	    DBU: IDatasetBatchUpdate;

	    Vals: Array[0..2] Of Variant;

	    i, j: integer;

	    PlainLink: IEtlPlainLink;

	    ProvPlainOutput: IEtlPlainOutput;

	    ConsPlainInput: IEtlPlainInput;

	    WLink: IWxLink;

	    WxETLLink: IWxEtlObject;

	    WxProvider, WxConsumer: IWxShape;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("T_ETL").Edit;

	    EtlTask := MObj As IEtlTask;

	    EtlTask.PartialFetch := True;

	    If EtlTask.Workspace.Shapes.Count > 0 Then

	        j := EtlTask.Workspace.Shapes.Count - 1;

	        // Удаляем объекты задачи ETL

	        For i := j To 0 Step - 1 Do

	        EtlTask.Workspace.Shapes.Item(i).Delete;

	            End For;

	        EtlTask.FindById("MB_Provider").Remove;

	    End If;

	    // Получим таблицу-источник данных

	    TabProv := MB.ItemById("IMPORT_TABLE").Bind As IDatasetModel;

	    DataSetInstance := MB.ItemById("IMPORT_TABLE").Open(Null) As IDataSetInstance;

	    // Получим коллекцию значений полей текущей записи источника данных

	    Fields := DataSetInstance.Fields;

	    // Создадим объект для обновления данных источника

	    DBU := DataSetInstance.CreateBatchUpdate;

	    // Установим способ обновления данных в таблице - быстрая вставка

	    DBU.BatchCommand := DataSetBatchCommand.Insert;

	    DBU.FastInsert := True;

	    // Обновим записи, значения первого поля которых больше 1

	    Dbu.KeyFieldNames := Fields.Item(0).Id;

	    Dbu.FailPolicy := DatasetFailPolicy.CommitByRow;

	    Dbu.BeginUpdate;

	    While Not DataSetInstance.Eof Do

	        i := Fields.Item(0).Value As Integer;

	        If i > 1 Then

	            Vals[0] := i;

	            Vals[1] := Fields.Item(1).Value;

	            Vals[2] := (i - (Fields.Item(1).Value As Integer)) * 10;

	            Dbu.AddRecord(Vals);

	        End If;

	        DataSetInstance.Next;

	    End While;

	    // Применим обновление

	    Dbu.Commit;

	    //Создание объекта "Источник репозитория"

	    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataMetabaseProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "MB_Provider";

	    EtlProvider.Name := "Источник данных репозитория";

	    EtlProvider.FetchBlockSize := 200;

	    //Настройка "Источника репозитория"

	    MBProvider := EtlProvider.Provider As IDtMetabaseProvider;

	    MBProvider.Dataset := TabProv;

	    MBProvider.FieldsFromFile;

	    EtlProvider.FillDefault;

	    ProvPlainOutput := EtlProvider.PlainOutput;

	    EtlProvider.Save;

	    If EtlTask.Workspace.Shapes.Count > 0 Then

	        j := EtlTask.Workspace.Shapes.Count - 1;

	        // Удаляем объекты задачи ETL

	        For i := j To 0 Step - 1 Do

	        EtlTask.Workspace.Shapes.Item(i).Delete;

	            End For;

	        EtlTask.FindById("MB_Consumer").Remove;

	    End If;

	    TabCons := MB.ItemById("EXPORT_TABLE").Bind As IDatasetModel;

	    //Создание объекта "Приёмник репозитория"

	    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataMetabaseConsumer) As IEtlPlainDataConsumer;

	    EtlConsumer := EtlConsumer.Edit;

	    EtlConsumer.Id := "MB_Consumer";

	    EtlConsumer.Name := "Приёмник данных репозитория";

	    //Настройка "Приёмника репозитория"

	    MBConsumer := EtlConsumer.Consumer As IDtMetabaseConsumer;

	    MBConsumer.Dataset := TabCons;

	    EtlConsumer.FillDefault;

	    ConsPlainInput := EtlConsumer.PlainInput;

	    EtlConsumer.Save;

	    // Создание визуальных объектов

	    CreateWXP(EtlProvider, EtlTask);

	    CreateWXC(EtlConsumer, EtlTask);

	    // Создадим связь и ее визуальное представление

	    PlainLink := EtlTask.CreatePlainLink;

	    PlainLink.DestinationObjectInput := ConsPlainInput;

	    PlainLink.SourceObjectOutput := ProvPlainOutput;

	    PlainLink.FillDefault;

	    //Прямоугольник источника

	    WxProvider := EtlTask.Workspace.Shapes.Item(0);

	    //Прямоугольник приёмника

	    WxConsumer := EtlTask.Workspace.Shapes.Item(1);

	    WLink := EtlTask.Workspace.AutoLinkShapes(WxProvider, WxConsumer);

	    WxETLLink := New WxEtlObject.Create;

	    WxETLLink.EtlObject := PlainLink;

	    WLink.Extension := WxETLLink As IWxShapeExtension;

	    // Сохраним изменения

	    Mobj.Save;

	    DataSetInstance.Close;

	End Sub UserProc;


	// Создание визуального объекта источника данных

	Sub CreateWXP(CopyObj: IEtlPlainDataProvider; Etltask: IEtltask);

	Var

	    WxDataTrans: IWxRectangle;

	    WxETLDataTrans: IWxEtlObject;

	Begin

	    WxDataTrans := EtlTask.Workspace.CreateRectangle;

	    WxDataTrans.Id := CopyObj.Id;

	    WxETLDataTrans := New WxEtlObject.Create;

	    WxETLDataTrans.EtlObject := CopyObj;

	    WxDataTrans.Style.TextPosition := WxTextPosition.Bottom;

	    WxDataTrans.Style.PictureMarginTop := -10;

	    WxDataTrans.PinPosition := New GxPointF.Create(20, 20);

	    WxDataTrans.Extension := WxETLDataTrans As IWxShapeExtension;

	End Sub CreateWXP;


	// Создание визуального объекта приёмника данных

	Sub CreateWXC(CopyObj: IEtlPlainDataConsumer; Etltask: IEtltask);

	Var

	    WxDataTrans: IWxRectangle;

	    WxETLDataTrans: IWxEtlObject;

	Begin

	    WxDataTrans := EtlTask.Workspace.CreateRectangle;

	    WxDataTrans.Id := CopyObj.Id;

	    WxETLDataTrans := New WxEtlObject.Create;

	    WxETLDataTrans.EtlObject := CopyObj;

	    WxDataTrans.Style.TextPosition := WxTextPosition.Bottom;

	    WxDataTrans.Style.PictureMarginTop := -10;

	    WxDataTrans.PinPosition := New GxPointF.Create(40, 40);

	    WxDataTrans.Extension := WxETLDataTrans As IWxShapeExtension;

	End Sub CreateWXC;


После выполнения примера в задаче ETL будут созданы:


	- источник данных репозитория с заданными параметрами. Для таблицы,
	 указанной в качестве источника данных, применится способ обновления данных в таблице - быстрая вставка;


	- приёмник данных репозитория с заданными параметрами;


	- связь между объектами.


После выполнения примера при запуске указанной задачи ETL выполнение
 займет меньше времени.


См. также:


[IEtlTask](../IEtlTask/IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
