# IDtRdsConsumer.Dataset

IDtRdsConsumer.Dataset
-


# IDtRdsConsumer.Dataset


## Синтаксис


Dataset: [IDatasetModel](KeDb.chm::/Interface/IDatasetModel/IDatasetModel.htm);


## Описание


Свойство Dataset определяет
 справочник НСИ, который выступает в качестве приёмника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором ETL_Task и справочника НСИ с идентификатором RDS_DICT.


Добавьте
 ссылки на системные сборки: Andy, Db, Drawing, Dt, Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ETLTask: IEtlTask;

	    EtlConsumer: IEtlPlainDataConsumer;

	    DtRds: IDtRdsConsumer;

	Begin

	    MB := MetabaseClass.Active;

	    ETLTask := MB.ItemById("ETL_Task").Edit As IEtlTask;

	    //Создание нового приёмника - справочника НСИ

	    EtlConsumer := ETLTask.Create(EtlObjectType.PlainDataRdsConsumer) As IEtlPlainDataConsumer;

	    EtlConsumer := EtlConsumer.Edit;

	    EtlConsumer.ClearConsumer := False;

	    EtlConsumer.Id := "RDS_Consumer";

	    EtlConsumer.Name := "Приёмник - Справочник НСИ";

	    //Создаем визуальный объект приёмника

	    CreateWX(ETLTask, EtlConsumer, 0, 0);

	    //Настраиваем приёмник

	    DtRds := EtlConsumer.Consumer As IDtRdsConsumer;

	    DtRds.Dataset := Mb.ItemById("RDS_DICT").Bind As IDatasetModel;

	    DtRds.UpdateMode := UpdateLoadMode.InsertUpdate;

	    //Сохранение приёмника

	    EtlConsumer.Save;

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


При выполнении примера в задаче ETL будет создан новый приёмник данных,
 связанный с указанным справочником НСИ.


См. также:


[IDtRdsConsumer](IDtRdsConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
