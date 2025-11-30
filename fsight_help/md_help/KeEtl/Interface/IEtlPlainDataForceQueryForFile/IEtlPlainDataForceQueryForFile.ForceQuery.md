# IEtlPlainDataForceQueryForFile.ForceQuery

IEtlPlainDataForceQueryForFile.ForceQuery
-


# IEtlPlainDataForceQueryForFile.ForceQuery


## Синтаксис


ForceQuery: Boolean;


## Описание


Свойство ForceQuery определяет,
 будет ли запрашиваться файл для источника данных при выполнении задачи
 ETL.


## Комментарии


Допустимые значения:


	- True. Файл для источника
	 данных будет запрашиваться при выполнении задачи ETL;


	- False. Значение по умолчанию.
	 Файл для источника данных запрашиваться при выполнении задачи ETL
	 не будет, задаётся один раз при первой настройке источника.


Примечание.
 При создании задачи ETL через импорт данных свойству ForceQuery
 источников данных будет установлено значение True.


## Пример


Для выполнения примера предполагается наличие:


	- наличие в репозитории задачи ETL с идентификатором ETL;


	- XLSX-файла с наименованием «PROV», содержащегося в корне диска
	 C. Данный файл содержит лист с наименованием «Sheet1»;


	- XLS-файла с наименованием «CONS», содержащегося в корне диска
	 C. Данный файл содержит лист с наименованием «Sheet1».


Добавьте ссылки на системные сборки: Andy, Drawing, Dt, Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    i, j, k: Integer;

	    EtlProvider: IEtlPlainDataProvider;

	    ETLConsumer: IEtlPlainDataConsumer;

	    QueryForFile: IEtlPlainDataForceQueryForFile;

	    dtProv: IDtExcelProviderEx;

	    dtCons: IDtExcelConsumer;

	    WxProvider, WxConsumer: IWxRectangle;

	    WxETLProvider, WxETLConsumer: IWxETLObject;

	    ProvPlainOutput: IEtlPlainOutput;

	    ConsPlainInput: IEtlPlainInput;

	    PlainLink: IEtlPlainLink;

	    WLink: IWxLink;

	    WxETLLink: IWxETLObject;

	    FieldMapping: IEtlPlainLinkFieldMapping;

	    ETLSrcF, ETLDestF: IEtlPlainField;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим задачу ETL

	    ETLTask := MB.ItemById("ETL").Edit As IEtlTask;

	    // Удалим объекты задачи ETL

	    If EtlTask.Workspace.Shapes.Count > 0 Then

	        j := EtlTask.Workspace.Shapes.Count - 1;

	        For i := j To 0 Step - 1 Do

	            EtlTask.Workspace.Shapes.Item(i).Delete;

	        End For;

	    End If;

	    If EtlTask.Count > 0 Then

	        k := EtlTask.Count - 1;

	        For i := k To 0 Step - 1 Do

	            EtlTask.Item(i).Remove;

	        End For;

	    End If;

	    // Создадим источник EXCEL

	    ETLProvider := ETLTask.Create(EtlObjectType.PlainDataExcelProviderEx) As IEtlPlainDataProvider;

	    ETLProvider := ETLProvider.Edit;

	    ETLProvider.Id := "Excel_Provider";

	    ETLProvider.Name := "Excel_Provider";

	    dtProv := ETLProvider.Provider As IDtExcelProviderEx;

	    dtProv.File := "C:\Prov.xlsx";

	    dtProv.Format := "xlsx";

	    dtProv.Sheet := "Sheet1";

	    dtProv.FieldsFromFile;

	    // Включим запрос файла при выполнении задачи ETL

	    QueryForFile := ETLProvider As IEtlPlainDataForceQueryForFile;

	    QueryForFile.ForceQuery := True;

	    // Заполним поля из источника

	    ETLProvider.FillFromSource;

	    // Сохраним источник

	    ETLProvider.Save;

	    // Создадим приёмник EXCEL

	    ETLConsumer := ETLTask.Create(EtlObjectType.PlainDataExcelConsumer) As IEtlPlainDataConsumer;

	    ETLConsumer := ETLConsumer.Edit;

	    ETLConsumer.Id := "Excel_Consumer";

	    ETLConsumer.Name := "Excel_Consumer";

	    dtCons := ETLConsumer.Consumer As IDtExcelConsumer;

	    dtCons.File := "C:\Cons.xls";

	    dtCons.Table := "Sheet1";

	    // Создадим визуальное представление источника

	    WxProvider := EtlTask.Workspace.CreateRectangle;

	    WxETLProvider := New WxETLObject.Create;

	    WxETLProvider.ETLObject := EtlProvider;

	    WxProvider.Style.TextPosition := WxTextPosition.Bottom;

	    WxProvider.Style.PictureMarginTop := -10;

	    WxProvider.PinPosition := New GxPointF.Create(0, 0);

	    WxProvider.Extension := WxETLProvider As IWxShapeExtension;

	    // Создадим визуальное представление приёмника

	    WxConsumer := EtlTask.Workspace.CreateRectangle;

	    WxETLConsumer := New WxETLObject.Create;

	    WxETLConsumer.ETLObject := EtlConsumer;

	    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

	    WxConsumer.Style.PictureMarginTop := -10;

	    WxConsumer.PinPosition := New GxPointF.Create(50, 0);

	    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

	    // Создадим связь и ее визуальное представление

	    ProvPlainOutput := EtlProvider.PlainOutput;

	    ConsPlainInput := EtlConsumer.PlainInput;

	    PlainLink := EtlTask.CreatePlainLink;

	    PlainLink.DestinationObjectInput := ConsPlainInput;

	    PlainLink.SourceObjectOutput := ProvPlainOutput;

	    ConsPlainInput.Fields.Fill(ProvPlainOutput.Fields);

	    // Свяжем поля источника и приёмника

	        For i := 0 To EtlProvider.PlainOutput.Fields.Count - 1 Do

	            ETLSrcF := EtlConsumer.PlainInput.Fields.Item(i);

	            ETLDestF := EtlProvider.PlainOutput.Fields.Item(i);

	            FieldMapping := PlainLink.Link(EtlConsumer.PlainInput.Fields.Item(i));

	            FieldMapping.Type := EtlPlainLinkFieldMappingType.Field;

	            FieldMapping.Field := EtlProvider.PlainOutput.Fields.Item(i);

	        End For;

	    WLink := EtlTask.Workspace.AutoLinkShapes(WxProvider, WxConsumer);

	    WLink.Style.LinePenBeginWxCap := WxLineCap.Flat;

	    WLink.Style.LinePenEndWxCap := WxLineCap.Arrow30DegreeFilled;

	    WxETLLink := New WxEtlObject.Create;

	    WxETLLink.EtlObject := PlainLink;

	    WLink.Extension := WxETLLink As IWxShapeExtension;

	    // Сохраним приёмник

	    ETLConsumer.Save;

	    // Сохраним задачу ETL

	    (ETLTask As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера в задаче ETL будут созданы объекты «Источник
 EXCEL», «Приёмник EXCEL» и связь между ними. Для источника и приёмника
 будут заданы файлы, также для источника будет указана необходимость выбора
 файла при выполнении задачи ETL.


См. также:


[IEtlPlainDataForceQueryForFile](IEtlPlainDataForceQueryForFile.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
