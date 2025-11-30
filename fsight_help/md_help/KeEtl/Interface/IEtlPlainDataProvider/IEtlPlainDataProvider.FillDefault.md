# IEtlPlainDataProvider.FillDefault

IEtlPlainDataProvider.FillDefault
-


# IEtlPlainDataProvider.FillDefault


## Синтаксис


FillDefault;


## Описание


Метод FillDefault заполняет
 поля выхода на основании данных о полях [источника](IEtlPlainDataProvider.Provider.htm).
 При возможности [размер](../IEtlPlainField/IEtlPlainField.Size.htm)/[точность](../IEtlPlainField/IEtlPlainField.Precision.htm)
 полей будет автоматически установлена.


## Пример


Для выполнения примера в репозитории необходимо наличие задачи ETL с
 идентификатором ETL и таблицы с идентификатором TABLE, которая будет источником
 данных.


	Sub UserProc;

	Var

	    Metabase : IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    MBProvider: IDtMetabaseProvider;

	    i, j : integer;

	    Tab: IDatasetModel;

	Begin

	    // Поиск задачи ETL. Объект репозитория с идентификатором ETL

	    Metabase := MetabaseClass.Active;

	    MObj := Metabase.ItemById("ETL").Edit;

	    EtlTask := MObj As IEtlTask;

	    Tab := Metabase.ItemById("Table").Bind As IDatasetModel;

	    // Создание объекта «Источник репозитория»

	    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataMetabaseProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "MB_Provider";

	    EtlProvider.Name := "Источник данных репозитория";

	    // Настройка источника данных

	    MBProvider := EtlProvider.Provider As IDtMetabaseProvider;

	    MBProvider.FieldsFromFile;

	    MBProvider.Dataset := Tab;

	    EtlProvider.FillDefault;

	    EtlProvider.Save;

	    // Cоздание визуального объекта

	    CreateWX(EtlProvider, EtlTask);

	    MObj.Save;

	End Sub UserProc;


	Sub CreateWX(CopyObj: IEtlPlainDataProvider ; Etltask: IEtltask);

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

	End Sub CreateWX;


После выполнения примера (UserProc) для задачи ETL будет создан источник
 данных репозитория, поля входа будут идентичны полям указанного источника
 (Таблица).


См. также:


[IEtlPlainDataProvider](IEtlPlainDataProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
