# Сортировка: Пример создания

Сортировка: Пример создания
-


# Сортировка


В данной статье рассмотрен пример создания и выполнения задачи ETL с
 сортировкой данных из источника.


Предполагается наличие в репозитории двух таблиц «T_Source»,
 «T_Destination», структура таблиц
 должна быть идентичной и должна содержать поле «Value».
 По значениям этого поля будет осуществляться сортировка. Также в репозитории
 должна быть создана задача ETL с идентификатором «ETLTASKS».
 При выполнении указанного ниже примера в задаче ETL создается три объекта:
 источник репозитория, преобразователь «Сортировка»
 и приёмник репозитория. Для всех объектов устанавливаются необходимые
 свойства, настраиваются связи:


![](sort.gif)


После создания и сохранения объектов происходит выполнение задачи ETL.
 Однотипный код, применяемый к различным объектам, вынесен в отдельные
 процедуры/функции.


[![](../opened.gif)![](../closed.gif)Пример](javascript:TextPopup(this))


	Добавьте ссылки на системные сборки: Andy, Db, Drawing, Dt, Etl,
	 Metabase.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    ETLTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    MetabaseProvider: IDtMetabaseProvider;

	    EtlConsumer: IEtlPlainDataConsumer;

	    MetabaseConsumer: IDtMetabaseConsumer;

	    Sort: IEtlPlainDataSort;

	    Link, Link1: IEtlPlainLink;

	    Shapes: IWxShapes;

	    ProvFields, SortInFields, SortOutFields, ConsFields: IEtlPlainFields;

	    Index: IEtlPlainIndex;

	Begin


	 //Открываем задачу ETL

	    MB := MetabaseClass.Active;

	    ETLTask := MB.ItemById("ETLTASKS").Edit As IEtlTask;

	 //Создаем источник

	    EtlProvider := ETLTask.Create(EtlObjectType.PlainDataMetabaseProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "Metabase_Provider";

	    EtlProvider.Name := "Импорт из таблицы";

	    MetabaseProvider := EtlProvider.Provider As IDtMetabaseProvider;

	    MetabaseProvider.Dataset := MB.ItemById("T_Source").Bind As IDatasetModel;

	    EtlProvider.FillDefault;

	     //Создаём визуальный объект источника

	    CreateWX(ETLTask, EtlProvider, -60, 0);

	 //Создаём приёмник

	    EtlConsumer := ETLTask.Create(EtlObjectType.PlainDataMetabaseConsumer) As IEtlPlainDataConsumer;

	    EtlConsumer := EtlConsumer.Edit;


	    EtlConsumer.Id := "Metabase_Consumer";

	    EtlConsumer.Name := "Экспорт в таблицу";

	    MetabaseConsumer := EtlConsumer.Consumer As IDtMetabaseConsumer;

	    MetabaseConsumer.Dataset := MB.ItemById("T_Destination").Bind As IDatasetModel;

	     //Создаём визуальный объект приёмника

	    CreateWX(ETLTask, EtlConsumer, 60, 0);

	 //Создаём преобразователь «Сортировка»

	    Sort := ETLTask.Create(EtlObjectType.PlainDataSort) As IEtlPlainDataSort;

	    Sort := Sort.Edit;

	    Sort.Id := "Sort_Transform";

	    Sort.Name := "Сортировка";

	     //Создаем визуальный объект преобразователя

	    CreateWX(ETLTask, Sort, 0, 0);

	 //Заполнение списков полей всех объектов на основании списка полей источника

	     //Получение списка полей

	    ProvFields := EtlProvider.PlainOutput.Fields;  //Выход источника

	    SortInFields := Sort.PlainInput.Fields;  //Вход преобразователя

	    SortOutFields := Sort.PlainOutput.Fields;  //Выход преобразователя

	    ConsFields := EtlConsumer.PlainInput.Fields;  //Вход приёмника

	     //Заполнение списков полей

	    FillFields(SortInFields, ProvFields);


	    FillFields(SortOutFields, SortInFields);

	    FillFields(ConsFields, SortOutFields);

	     //Настройка индекса сортировки
	 (указание полей, по которым будет идти сортировка)

	    Index := Sort.Index.Edit;

	    Index.AddField;

	    Index.PlainInputField(0, 0) := SortInFields.FindById("VALUE");

	    Index.Save;

	    Sort.IsFieldAscending(0) := False;

	 //Сохранение всех объектов

	    EtlProvider.Save;

	    Sort.Save;

	    EtlConsumer.Save;

	 //Связь преобразователя со всеми объектами

	     //Создаем связи

	    Link := CreateLink(ETLTask, EtlProvider.PlainOutput, Sort.PlainInput);


	    Link1 := CreateLink(ETLTask, Sort.PlainOutput, EtlConsumer.PlainInput);

	     //Создание визуальных связей

	    Shapes := ETLTask.Workspace.Shapes;

	    CreateWXLink(ETLTask, Shapes.FindById(EtlProvider.Id), Shapes.FindById(Sort.Id), Link);

	    CreateWXLink(ETLTask, Shapes.FindById(Sort.Id), Shapes.FindById(EtlConsumer.Id), Link1);

	 //Сохраняем задачу

	    (ETLTask As IMetabaseObject).Save;

	 //Выполняем задачу

	    ETLTask.Execute(Null);

	End Sub UserProc;

	 //Создание визуальных объектов

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

	 //Заполнение списков полей входов/выходов

	Sub FillFields(Fields, FieldsSource: IEtlPlainFields);

	Begin

	    Fields := Fields.Edit;

	    Fields.Fill(FieldsSource);

	    Fields.Save;


	End Sub FillFields;

	 //Создание связи между объектами

	Function CreateLink(ETLTask: IEtlTask; Output: IEtlPlainOutput; Input: IEtlPlainInput): IEtlPlainLink;

	Var

	    Link: IEtlPlainLink;

	Begin

	    Link := ETLTask.CreatePlainLink;

	    Link.SourceObjectOutput := Output;

	    Link.DestinationObjectInput := Input;

	    Link.FillDefault;

	    Return Link;

	End Function CreateLink;

	 //Создание визуальных связей

	Sub CreateWXLink(ETLTask: IEtlTask; Shape1: IWxShape; Shape2: IWxShape; Link: IEtlPlainLink);


	Var

	    WLink: IWxLink;

	    WxETLLink: IWxEtlObject;

	Begin

	     //Создаем визуальные объекты связи

	    WLink := ETLTask.Workspace.AutoLinkShapes(Shape1, Shape2);

	    WLink.Style.LinePenBeginWxCap := WxLineCap.Flat;

	    WLink.Style.LinePenEndWxCap := WxLineCap.Arrow30DegreeFilled;

	    WxETLLink := New WxEtlObject.Create;

	    WxETLLink.EtlObject := Link;

	    WLink.Extension := WxETLLink As IWxShapeExtension;

	End Sub CreateWXLink;


См. также:


[Примеры](KeEtl_Sample.htm)
 | [IEtlPlainDataSort](../Interface/IEtlPlainDataSort/IEtlPlainDataSort.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
