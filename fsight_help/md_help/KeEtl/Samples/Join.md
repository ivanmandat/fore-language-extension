# Соединение: Пример создания

Соединение: Пример создания
-


# Соединение


В данной статье рассмотрен пример создания и выполнения задачи ETL с
 соединением данных из двух источников.


Предполагается наличие в репозитории трех таблиц: T_SourceOne,
 T_SourceTwo и
 T_Destination. Структура источников должна быть идентичная и должна
 содержать поля «ID» и «VALUE».
 Структура приёмника предполагает наличие полей «ID»,
 «VALUE1» и «VALUE2».
 Также в репозитории должна быть создана задача ETL с идентификатором «ETLTASKS». При выполнении указанного
 ниже примера в задаче ETL создается четыре объекта: два источника репозитория,
 преобразователь «Соединение» и
 приёмник репозитория. Для всех объектов устанавливаются необходимые свойства,
 настраиваются связи:


![](Join.gif)


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

            EtlProviderOne, EtlProviderTwo: IEtlPlainDataProvider;

            MetabaseProviderOne, MetabaseProviderTwo: IDtMetabaseProvider;

            EtlConsumer: IEtlPlainDataConsumer;

            MetabaseConsumer: IDtMetabaseConsumer;

            Join: IEtlPlainDataJoin;

            JoinInputs: IEtlPlainInputs;

            InputOne, InputTwo: IEtlPlainInput;

            Link, Link1, Link2: IEtlPlainLink;

            Shapes: IWxShapes;


            ProvOneFields, ProvTwoFields, JoinInOneFields, JoinInTwoFields, JoinOutFields, ConsFields: IEtlPlainFields;

            Index: IEtlPlainIndex;

            Mapper: IEtlPlainFieldsMapper;

        Begin


            //Открываем задачу ETL

            MB := MetabaseClass.Active;

            ETLTask := MB.ItemById("ETLTASKS").Edit As IEtlTask;


            //Создаем первый источник

            EtlProviderOne := ETLTask.Create(EtlObjectType.PlainDataMetabaseProvider) As IEtlPlainDataProvider;

            EtlProviderOne := EtlProviderOne.Edit;

            EtlProviderOne.Id := "Metabase_Provider1";

            EtlProviderOne.Name := "Импорт из таблицы 1";


            MetabaseProviderOne := EtlProviderOne.Provider As IDtMetabaseProvider;

            MetabaseProviderOne.Dataset := MB.ItemById("T_SourceOne").Bind As IDatasetModel;

            EtlProviderOne.FillDefault;


            //Создаем визуальный объект источника

            CreateWX(ETLTask, EtlProviderOne, -60, 0);


            //Создаем второй источник

            EtlProviderTwo := ETLTask.Create(EtlObjectType.PlainDataMetabaseProvider) As IEtlPlainDataProvider;

            EtlProviderTwo := EtlProviderTwo.Edit;

            EtlProviderTwo.Id := "Metabase_Provider2";

            EtlProviderTwo.Name := "Импорт из таблицы 2";

            MetabaseProviderTwo := EtlProviderTwo.Provider As IDtMetabaseProvider;

            MetabaseProviderTwo.Dataset := MB.ItemById("T_SourceTwo").Bind As IDatasetModel;

            EtlProviderTwo.FillDefault;


            //Создаём визуальный объект источника

            CreateWX(ETLTask, EtlProviderTwo, -60, 20);


            //Создаём приёмник

            EtlConsumer := ETLTask.Create(EtlObjectType.PlainDataMetabaseConsumer) As IEtlPlainDataConsumer;

            EtlConsumer := EtlConsumer.Edit;

            EtlConsumer.Id := "Metabase_Consumer";

            EtlConsumer.Name := "Экспорт в таблицу";

            MetabaseConsumer := EtlConsumer.Consumer As IDtMetabaseConsumer;

            MetabaseConsumer.Dataset := MB.ItemById("T_Destination").Bind As IDatasetModel;

            EtlConsumer.FillDefault;


            //Создаём визуальный объект приёмника

            CreateWX(ETLTask, EtlConsumer, 60, 0);


            //Создаём преобразователь «Соединение»

            Join := ETLTask.Create(EtlObjectType.PlainDataJoin) As IEtlPlainDataJoin;

            Join := Join.Edit;

            Join.Id := "Join_Transform";

            Join.Name := "Соединение";


            //Создаем два выхода

            JoinInputs := Join.PlainInputs;

            JoinInputs.Add;

            JoinInputs.Add;

            InputOne := JoinInputs.Item(0);

            InputTwo := JoinInputs.Item(1);


            //Создаем визуальный объект преобразователя

            CreateWX(ETLTask, Join, 0, 0);


            //Заполнение списков полей всех объектов на основании списка полей источника


            //Получение списка полей

            ProvOneFields := EtlProviderOne.PlainOutput.Fields;
            //Выход первого источника

            ProvTwoFields := EtlProviderTwo.PlainOutput.Fields;
            //Выход второго источника

            JoinInOneFields := InputOne.Fields;
            //Первый вход преобразователя

            JoinInTwoFields := InputTwo.Fields;
            //Второй вход преобразователя


            JoinOutFields := Join.PlainOutput.Fields;
            //Выход преобразователя

            ConsFields := EtlConsumer.PlainInput.Fields;
            //Вход приёмника


            //Заполнение списков полей

            FillFields(JoinInOneFields, ProvOneFields);

            FillFields(JoinInTwoFields, ProvTwoFields);

            FillFields(JoinOutFields, ConsFields);


            //Настройка условий и привязка полей

            Join.Type := EtlJoinType.Outer;

            Join.PrimaryInput := InputOne;

            Index := Join.Index.Edit;

            Index.AddField;

            Index.PlainInputField(0, 0) := InputOne.Fields.FindById("ID");

            Index.PlainInputField(0, 1) := InputTwo.Fields.FindById("ID");

            Index.Save;

            Mapper := Join.Mapper;

            Mapper.Map(JoinOutFields.FindById("ID")).AsString := InputOne.Id + ".ID";

            Mapper.Map(JoinOutFields.FindById("VALUE1")).AsString := InputOne.Id + ".VALUE";

            Mapper.Map(JoinOutFields.FindById("VALUE2")).AsString := InputTwo.Id + ".VALUE";


            //Сохранение всех объектов

            EtlProviderOne.Save;

            EtlProviderTwo.Save;

            Join.Save;

            EtlConsumer.Save;


            //Связь преобразователя со всеми объектами


            //Создаем связи

            Link := CreateLink(ETLTask, EtlProviderOne.PlainOutput, InputOne);

            Link1 := CreateLink(ETLTask, EtlProviderTwo.PlainOutput, InputTwo);

            Link2 := CreateLink(ETLTask, Join.PlainOutput, EtlConsumer.PlainInput);


            //Создание визуальных связей

            Shapes := ETLTask.Workspace.Shapes;

            CreateWXLink(ETLTask, Shapes.FindById(EtlProviderOne.Id), Shapes.FindById(Join.Id), Link);


            CreateWXLink(ETLTask, Shapes.FindById(EtlProviderTwo.Id), Shapes.FindById(Join.Id), Link1);

            CreateWXLink(ETLTask, Shapes.FindById(Join.Id), Shapes.FindById(EtlConsumer.Id), Link2);


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
 | [IEtlPlainDataJoin](../Interface/IEtlPlainDataJoin/IEtlPlainDataJoin.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
