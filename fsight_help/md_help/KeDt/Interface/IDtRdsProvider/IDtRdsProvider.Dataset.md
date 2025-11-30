# IDtRdsProvider.Dataset

IDtRdsProvider.Dataset
-


# IDtRdsProvider.Dataset


## Синтаксис


Dataset: [IDatasetModel](KeDb.chm::/Interface/IDatasetModel/IDatasetModel.htm);


## Описание


Свойство Dataset определяет
 справочник НСИ, который выступает в качестве источника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL_Task и справочника НСИ с идентификатором RDS_DICT.


Добавьте
 ссылки на системные сборки: Andy, Db, Drawing, Dt, Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ETLTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    DtRds: IDtRdsProvider;

	Begin

	    MB := MetabaseClass.Active;

	    ETLTask := MB.ItemById("ETL_Task").Edit As IEtlTask;

	    //Создание нового источника - справочника НСИ

	    EtlProvider := ETLTask.Create(EtlObjectType.PlainDataRdsProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "RDS_Provider";

	    EtlProvider.Name := "Источник - Справочник НСИ";

	    //Создаем визуальный объект источника

	    CreateWX(ETLTask, EtlProvider, 0, 0);

	    //Настраиваем источник

	    DtRds := EtlProvider.Provider As IDtRdsProvider;

	    DtRds.Dataset := Mb.ItemById("RDS_DICT").Bind As IDatasetModel;

	    //Сохранение источника

	    EtlProvider.Save;

	    //Сохранение задачи

	    (ETLTask As IMetabaseObject).Save;

	End Sub UserProc;


	//Создание визуального объекта

	Sub CreateWX(ETLTask: IEtlTask; ETLObject: IEtlObject; XPosition: Integer; YPosition: Integer);

	Var

	    WxRect: IWxRectangle;

	    WxETLObj: IWxEtlObject;

	Begin

	    WxRect := ETLTask.Workspace.CreateRectangle;

	    WxRect.Id := ETLObject.Id;

	    WxETLObj := New WxEtlObject.Create;

	    WxETLObj.EtlObject := ETLObject;

	    WxRect.Style.TextPosition := WxTextPosition.Bottom;

	    WxRect.Style.PictureMarginTop := -10;

	    WxRect.PinPosition := New GxPointF.Create(XPosition, YPosition);

	    WxRect.Extension := WxETLObj As IWxShapeExtension;

	End Sub CreateWX;


При выполнении примера в задаче ETL будет создан новый источник данных,
 связанный с указанным справочником НСИ.


См. также:


[IDtRdsProvider](IDtRdsProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
