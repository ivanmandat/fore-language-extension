# Преобразование: Пример создания

Преобразование: Пример создания
-


# Преобразование


В данной статье рассмотрен пример создания и выполнения задачи ETL с
 преобразованием данных.


Для выполнения примера предполагается наличие в репозитории двух таблиц:
 T_Source и T_Destination.
 Структура таблиц должна быть идентичная. Также в репозитории должна быть
 создана задача ETL с идентификатором «ETLTASKS».
 В результате выполнения примера в задаче ETL создается три объекта: источник
 репозитория, преобразователь «Преобразование»
 и приёмник репозитория. Для всех объектов устанавливаются необходимые
 свойства, настраиваются связи:


![](Mapper.gif)


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

            Mapper: IEtlPlainDataMapper;

            Link, Link1: IEtlPlainLink;

            Shapes: IWxShapes;


            ProvFields, MapperInFields, MapperOutFields, ConsFields: IEtlPlainFields;

            OutField: IEtlPlainField;

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


            //Создаём преобразователь «Преобразование»

            Mapper := ETLTask.Create(EtlObjectType.PlainDataMapper) As IEtlPlainDataMapper;

            Mapper := Mapper.Edit;


            Mapper.Id := "Mapper_Transform";

            Mapper.Name := "Преобразование";


            //Создаем визуальный объект преобразователя

            CreateWX(ETLTask, Mapper, 0, 0);


            //Заполнение списков полей всех объектов на основании списка полей источника


            //Получение списка полей

            ProvFields := EtlProvider.PlainOutput.Fields;
            //Выход источника

            MapperInFields := Mapper.PlainInput.Fields;
            //Вход преобразователя

            MapperOutFields := Mapper.PlainOutput.Fields;
            //Выход преобразователя

            ConsFields := EtlConsumer.PlainInput.Fields;
            //Вход приёмника


            //Заполнение списков полей

            FillFields(MapperInFields, ProvFields);

            FillFields(MapperOutFields, MapperInFields);


            FillFields(ConsFields, MapperOutFields);


            //Связь полей с заданием формулы преобразования

            For Each OutField In MapperOutFields Do

                Mapper.Mapper.Map(OutField).AsString := Mapper.PlainInput.Id + "." + MapperInFields.FindById(OutField.Id).Id + "*100";
            // I1.<FieldId>*100

            End For;


            //Сохранение всех объектов

            EtlProvider.Save;

            Mapper.Save;

            EtlConsumer.Save;


            //Связь преобразователя со всеми объектами


            //Создаем связи

            Link := CreateLink(ETLTask, EtlProvider.PlainOutput, Mapper.PlainInput);

            Link1 := CreateLink(ETLTask, Mapper.PlainOutput, EtlConsumer.PlainInput);


            //Создание визуальных связей

            Shapes := ETLTask.Workspace.Shapes;

            CreateWXLink(ETLTask, Shapes.FindById(EtlProvider.Id), Shapes.FindById(Mapper.Id), Link);

            CreateWXLink(ETLTask, Shapes.FindById(Mapper.Id), Shapes.FindById(EtlConsumer.Id), Link1);


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
 | [IEtlPlainDataMapper](../Interface/IEtlPlainDataMapper/IEtlPlainDataMapper.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
