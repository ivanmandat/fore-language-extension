# IEtlTask.CreatePlainLink

IEtlTask.CreatePlainLink
-


# IEtlTask.CreatePlainLink


## Синтаксис


CreatePlainLink: [IEtlPlainLink](../IEtlPlainLink/IEtlPlainLink.htm);


## Описание


Метод CreatePlainLink создает
 связь объектов задачи ETL, оперирующих плоскими данными.


## Комментарии


Для выполнения задачи ETL используйте метод [IEtlTask.Execute](IEtlTask.Execute.htm).


## Пример


Для выполнения примера предполагается наличие задачи ETL с идентификатором
 ETL с созданными объектами.


Добавьте ссылки на системные сборки: Andy, Etl, Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MbObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    Link: IEtlPlainLink;

	    Provider: IEtlPlainDataProvider;

	    Consumer: IEtlPlainDataConsumer;

	    WLink: IWxLink;

	    Style: IWxStyle;

	    WxETLLink: IWxEtlObject;

	    WxProvider, WxConsumer: IWxShape;

	Begin

	    MB := MetabaseClass.Active;

	    MbObj := MB.ItemById("ETL").Edit;

	    EtlTask := (MbObj) As IEtlTask;

	    //Создание нового объекта-связки

	    Link := EtlTask.CreatePlainLink;

	    //Установка источника и приёмника данных

	    Provider := EtlTask.Item(0) As IEtlPlainDataProvider;

	    Consumer := EtlTask.Item(1) As IEtlPlainDataConsumer;

	    Link.SourceObjectOutput := Provider.PlainOutput;

	    Link.DestinationObjectInput := Consumer.PlainInput;

	    Link.FillDefault;

	    //Создание визуальной связи

	    //Прямоугольник источника

	    WxProvider := EtlTask.Workspace.Shapes.Item(0);

	    //Прямоугольник приёмника

	    WxConsumer := EtlTask.Workspace.Shapes.Item(1);

	    WLink := EtlTask.Workspace.AutoLinkShapes(WxProvider, WxConsumer);

	    WxETLLink := New WxEtlObject.Create;

	    WxETLLink.EtlObject := Link;

	    WLink.Extension := WxETLLink As IWxShapeExtension;

	    //Конец визуального cоздания связи (источник-приёмник)

	    MbObj.Save;

	End Sub UserProc;


После выполнения примера будет установлена связь между двумя первыми
 объектами задачи ETL.


См. также:


[IEtlTask](IEtlTask.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
