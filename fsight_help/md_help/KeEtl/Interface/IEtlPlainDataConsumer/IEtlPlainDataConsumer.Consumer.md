# IEtlPlainDataConsumer.Consumer

IEtlPlainDataConsumer.Consumer
-


# IEtlPlainDataConsumer.Consumer


## Синтаксис


Consumer: [IDtConsumer](KeDt.chm::/Interface/IDtConsumer/IDtConsumer.htm);


## Описание


Свойство Consumer возвращает объект импорта/экспорта.


## Пример


Для выполнения примера в репозитории необходимо наличие задачи ETL с идентификатором «ETL» и таблицы с идентификатором «Тable».


        Sub UserProc;

        Var

            Metabase: IMetabase;

            MObj: IMetabaseObject;

            EtlTask: IEtlTask;

            EtlConsumer: IEtlPlainDataConsumer;

            MBConsumer: IDtMetabaseConsumer;

            i, j: integer;

            Tab: IDatasetModel;

            Fields_ETL: IEtlPlainFields;

            Field: IEtlPlainField;

            FieldType: String;


        Begin

        //Поиск задачи ETL. Объект репозитория с идентификатором "ETL"
    Metabase := MetabaseClass.Active;

            MObj := Metabase.ItemById("ETL").Edit;

            EtlTask := MObj As IEtlTask;

            If EtlTask.Workspace.Shapes.Count > 0 Then

                j := EtlTask.Workspace.Shapes.Count - 1;

                // Удаляем объекты задачи ETL
        For i := j To 0 Step - 1 Do

                EtlTask.Workspace.Shapes.Item(i).Delete;

                    End For;

                EtlTask.FindById("MB_Consumer").Remove;

            End If;


            Tab := Metabase.ItemById("Тable").Bind As IDatasetModel;

            //Создание объекта "Приёмник репозитория"
    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataMetabaseConsumer) As IEtlPlainDataConsumer;

            EtlConsumer := EtlConsumer.Edit;

            EtlConsumer.Id := "MB_Consumer";

            EtlConsumer.Name := "Приёмник данных репозитория";

        //Настройка Приёмника данных
    MBConsumer := EtlConsumer.Consumer As IDtMetabaseConsumer;

            MBConsumer.Dataset := Tab;

            EtlConsumer.FillDefault;

            Fields_ETL := EtlConsumer.PlainInput.Fields;

            For i := 0 To Fields_ETL.Count - 1 Do

                Field := Fields_ETL.Item(i);


                FieldDataType(Field.DataType, FieldType);

                Debug.WriteLine("--------------------------------------------");

                Debug.WriteLine("Поле : " + Field.Name);

                Debug.WriteLine(" Тип : " + FieldType);

                Debug.WriteLine(" Размер : " + Field.Size.ToString);

                Debug.WriteLine(" Точность : " + Field.Precision.ToString);

                Debug.WriteLine("--------------------------------------------");

            End For;

            EtlConsumer.Save;

        //Cоздание визуального объекта
    CreateWX(EtlConsumer, EtlTask);

            MObj.Save

        End Sub UserProc;


        Sub CreateWX(CopyObj: IEtlPlainDataConsumer; Etltask: IEtltask);

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


        Sub FieldDataType(FieldDataType: DbDataType; Var FieldType: string); { Получение названия типа поля }

        Begin

            Select Case FieldDataType

                Case DbDataType.NoData: FieldType := "NoData";


                Case DbDataType.String: FieldType := "String";

                Case DbDataType.Integer: FieldType := "Integer";

                Case DbDataType.Float: FieldType := "Float";

                Case DbDataType.DateTime: FieldType := "DateTime";

                Case DbDataType.Blob: FieldType := "Blob";

                Case DbDataType.Boolean: FieldType := "Boolean";

                Case DbDataType.Date: FieldType := "Date";

            End Select;

        End Sub FieldDataType;


После выполнения процедуры «UserProc» для задачи ETL будет создан приёмник данных репозитория, поля входа будут идентичны полям указанного приёмника (таблица с идентификатором «Table»). В процессе выполнения примера в окно консоли будет выведена информация о полях входа приёмника.


См. также:


[IEtlPlainDataConsumer](IEtlPlainDataConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
