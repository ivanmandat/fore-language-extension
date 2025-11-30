# IEtlPlainDataTransformer.ErrorOutput

IEtlPlainDataTransformer.ErrorOutput
-


# IEtlPlainDataTransformer.ErrorOutput


## Синтаксис


ErrorOutput(Index: Integer): [IEtlPlainOutput](../IEtlPlainOutput/IEtlPlainOutput.htm);


## Параметры


Index. Индекс выхода с ошибочными
 записями.


## Описание


Свойство ErrorOutput возвращает
 параметры указанного выхода с ошибочными записями.


## Комментарии


В текущей реализации для каждого преобразователя доступен только один
 выход с ошибочными записями, поэтому в качестве параметра Index
 необходимо передавать значение «0».


## Пример


Для выполнения примера предполагается наличие задачи ETL с идентификатором
 «ETL_Task». В задаче имеется преобразователь с идентификатором «PLAINDATATRANSFORMER»
 и приёмник данных с идентификатором «ERRORCONSUMER».


        Sub UserProc;

        Var

            MB: IMetabase;

            ETLTask: IEtlTask;

            Transform: IEtlPlainDataTransformer;

            ErrorConsumer: IEtlPlainDataConsumer;

            Link: IEtlPlainLink;

            Shapes: IWxShapes;

        Begin

            MB := MetabaseClass.Active;

            ETLTask := MB.ItemById("ETL_Task").Edit As IEtlTask;


            //Преобразователь

            Transform := ETLTask.FindById("PLAINDATATRANSFORMER") As IEtlPlainDataTransformer;


            //Приёмник ошибочных записей


            ErrorConsumer := ETLTask.FindById("ERRORCONSUMER") As IEtlPlainDataConsumer;


            //Связь и настройка выхода с ошибочными значениями

            Transform.ErrorOverlimitPolicy := EtlErrorOverlimitPolicy.StopOutput;

            Transform.ErrorStopLimit := 100;


            //Связь полей выхода преобразователя и входа приёмника ошибочных записей

            FillFields(ErrorConsumer.PlainInput.Fields, Transform.ErrorOutput(0).Fields);


            //Создание связи

            Link := CreateLink(ETLTask, Transform.ErrorOutput(0), ErrorConsumer.PlainInput);


            //Создание визуальной связи

            Shapes := ETLTask.Workspace.Shapes;


            CreateWXLink(ETLTask, Shapes.FindById(Transform.Id), Shapes.FindById(ErrorConsumer.Id), Link);

            (ETLTask As IMetabaseObject).Save;

        End Sub UserProc;


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


При выполнении примера будет осуществлена настройка выхода с ошибочными
 записями для преобразователя «PLAINDATATRANSFORMER»:


	- Будет указан приёмник, в который будут экспортироваться ошибочные
	 записи;


	- Будет задано ограничение в 100 записей, при превышении которого
	 экспорт ошибочных записей производиться не будет;


	- Будет создана и настроена связь между преобразователем и приёмником
	 и соответствующий визуальный объект.


См. также:


[IEtlPlainDataTransformer](IEtlPlainDataTransformer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
