# IDtUserProvider.ForeClass

IDtUserProvider.ForeClass
-


# IDtUserProvider.ForeClass


## Синтаксис


		ForeClass: String;


## Описание


Свойство ForeClass определяет
 наименование класса, реализующего источник пользователя.


## Пример


Для выполнения примера в репозитории необходимо наличие:


	- задачи ETL с идентификатором «ETL»;


	- модуля с идентификатором «MYPROVIDER». Модуль содержит класс,
	 реализующий интерфейсы [IDtRecordsetProvider](../IDtRecordsetProvider/IDtRecordsetProvider.htm),
	 [IDtRecordsetUserData](../IDtRecordsetUserData/IDtRecordsetUserData.htm).
	 Пример класса представлен в описании [IDtRecordsetUserData.UserData](../IDtRecordsetUserData/IDtRecordsetUserData.UserData.htm).


Добавьте ссылки на системные сборки: Andy, Dal, Drawing, Dt, Etl, Metabase,
 Xml.


					Sub UserProc;

		Var

		    MB: IMetabase;

		    EtlTask: IEtlTask;

		    EtlProvider: IEtlPlainDataProvider;

		    UserProvider: IDtUserProvider;

		    WxProvider: IWxRectangle;

		    WxETLProvider: IWxETLObject;

		    Fields: IDtFieldDefinitions;

		    Field: IDtFieldDefinition;

		Begin

		    // Получим репозиторий

		    MB := MetabaseClass.Active;

		    // Получим задачу ETL

		    EtlTask := MB.ItemById("ETL").Edit As IEtlTask;

		    // Создадим объект «Источник пользователя» в задаче ETL

		    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataUserProvider) As IEtlPlainDataProvider;

		    EtlProvider := EtlProvider.Edit;

		    EtlProvider.Id := "User_Provider";

		    EtlProvider.Name := "Источник пользователя";

		    EtlProvider.Description := "Источник пользователя";

		    // Настроим источник данных

		    UserProvider := EtlProvider.Provider As IDtUserProvider;

		    UserProvider.ForeModule := MB.ItemById("MYPROVIDER").Bind;

		    UserProvider.ForeClass := "MyProvider";

		    Debug.WriteLine("Пользовательские данные в формате XML:
		 " + UserProvider.UserData.xml);

		    Fields := UserProvider.Fields;

		    Field := Fields.Add;

		    Field.DataType := DbDataType.String;

		    Field.Name := "Наименование";

		    Field := Fields.Add;

		    Field.DataType := DbDataType.Float;

		    Field.Name := "Значение";

		    EtlProvider.FillDefault;

		    // Сохраним настройки источника данных

		    EtlProvider.Save;

		    // Создадим визуальное представление объекта в задаче ETL

		    WxProvider := EtlTask.Workspace.CreateRectangle;

		    WxETLProvider := New WxETLObject.Create;

		    WxETLProvider.ETLObject := EtlProvider;

		    WxProvider.Style.TextPosition := WxTextPosition.Bottom;

		    WxProvider.Style.PictureMarginTop := -10;

		    WxProvider.PinPosition := New GxPointF.Create(50, 50);

		    WxProvider.Extension := WxETLProvider As IWxShapeExtension;

		    // Сохранение изменений

		    (EtlTask As IMEtabaseObject).Save;

		End Sub UserProc;


После выполнения примера в указанной задаче ETL будет создан пользовательский
 источник данных на основе указанного класса. В окно консоли будут выведены
 пользовательские данные в формате XML.


См. также:


[IDtUserProvider](IDtUserProvider.htm) | [IDtRecordsetProvider.Fetch](../IDtRecordsetProvider/IDtRecordsetProvider.Fetch.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
