# IDtUserConsumer.UserData

IDtUserConsumer.UserData
-


# IDtUserConsumer.UserData


## Синтаксис


UserData: [IXmlDomElement](ModXml.chm::/develop.htm);


## Описание


Свойство UserData определяет
 дополнительные настройки в формате XML для пользовательского приёмника
 данных.


## Комментарии


Дополнительные настройки определяются в интерфейсе [IDtRecordsetUserData](../IDtRecordsetUserData/IDtRecordsetUserData.htm)
 класса, реализующего данный интерфейс и интерфейс [IDtRecordsetConsumer](../IDtRecordsetConsumer/IDtRecordsetConsumer.htm).


Особенности работы с XML-файлами представлены на странице «[Пример работы с XML-файлами](ModXml.chm::/Samples/ModXml_Sample1.htm)».


## Пример


Для выполнения примера в репозитории предполагается наличие задачи ETL
 с идентификатором ETL и модуля с идентификатором MYCONSUMER. Модуль содержит
 класс, реализующий интерфейсы [IDtRecordsetConsumer](../IDtRecordsetConsumer/IDtRecordsetConsumer.htm),
 [IDtRecordsetUserData](../IDtRecordsetUserData/IDtRecordsetUserData.htm).
 Пример использования интерфейса [IDtRecordsetUserData](../IDtRecordsetUserData/IDtRecordsetUserData.htm)
 представлен в описании [IDtRecordsetUserData.UserData](../IDtRecordsetUserData/IDtRecordsetUserData.UserData.htm).


Добавьте ссылки на системные сборки: Andy, Dal, Drawing, Dt, Etl, Metabase,
 Xml.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EtlTask: IEtlTask;

	    EtlConsumer: IEtlPlainDataConsumer;

	    UserConsumer: IDtUserConsumer;

	    WxConsumer: IWxRectangle;

	    WxETLConsumer: IWxETLObject;

	    Fields: IDtFieldDefinitions;

	    Field: IDtFieldDefinition;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим задачу ETL

	    EtlTask := MB.ItemById("ETL").Edit As IEtlTask;

	    // Создадим объект «Приёмник пользователя» в задаче ETL

	    EtlConsumer := EtlTask.Create(EtlObjectType.PlainDataUserConsumer) As IEtlPlainDataConsumer;

	    EtlConsumer := EtlConsumer.Edit;

	    EtlConsumer.Id := "User_Consumer";

	    EtlConsumer.Name := "Приёмник пользователя";

	    EtlConsumer.Description := "Приёмник пользователя";

	    // Настроим приёмник данных

	    UserConsumer := EtlConsumer.Consumer As IDtUserConsumer;

	    UserConsumer.ForeModule := MB.ItemById("MYCONSUMER").Bind;

	    UserConsumer.ForeClass := "MyConsumer";

	    Debug.WriteLine("Пользовательские данные в формате XML" + UserConsumer.UserData.xml);

	    Fields := UserConsumer.Fields;

	    Field := Fields.Add;

	    Field.DataType := DbDataType.String;

	    Field.Name := "Наименование";

	    Field := Fields.Add;

	    Field.DataType := DbDataType.Float;

	    Field.Name := "Значение";

	    EtlConsumer.FillDefault;

	    // Сохраним настройки приёмника данных

	    EtlConsumer.Save;

	    // Создадим визуальное представление объекта в задаче ETL

	    WxConsumer := EtlTask.Workspace.CreateRectangle;

	    WxETLConsumer := New WxETLObject.Create;

	    WxETLConsumer.ETLObject := EtlConsumer;

	    WxConsumer.Style.TextPosition := WxTextPosition.Bottom;

	    WxConsumer.Style.PictureMarginTop := -10;

	    WxConsumer.PinPosition := New GxPointF.Create(50, 50);

	    WxConsumer.Extension := WxETLConsumer As IWxShapeExtension;

	    // Сохранение изменений

	    (EtlTask As IMEtabaseObject).Save;

	End Sub UserProc;


После выполнения примера в указанной задаче ETL будет создан пользовательский
 приёмник данных на основе указанного класса. В окно консоли будут выведены
 пользовательские данные в формате XML.


См. также:


[IDtUserConsumer](IDtUserConsumer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
