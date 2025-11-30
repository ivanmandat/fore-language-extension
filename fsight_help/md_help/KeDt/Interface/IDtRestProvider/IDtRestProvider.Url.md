# IDtRestProvider.Url

IDtRestProvider.Url
-


# IDtRestProvider.Url


## Синтаксис


Url: String;


## Описание


Свойство Url определяет адрес
 REST-сервиса, к которому будут отправляться запросы на получение данных.


## Комментарии


Список доступных для указания REST-сервисов может быть ограничен. Более
 подробно смотрите описание свойства [IMetabasePolicy.HostWhiteList](KeSom.chm::/Interface/IMetabasePolicy/IMetabasePolicy.HostWhiteList.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории задачи ETL
 с идентификатором «ETL».


Добавьте
 ссылки на системные сборки: Andy, Collections, Drawing, Dt, Etl, Metabase,
 Net.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    EtlTask: IEtlTask;

	    EtlProvider: IEtlPlainDataProvider;

	    RESTProvider: IDtRestProvider;

	    JSONProvider: IDtJsonProvider;

	    Creds: INetHttpCommandCredential;

	    Headers: IStringList;

	    WxProvider: IWxRectangle;

	    WxETLProvider: IWxETLObject;

	Begin

	    MB := MetabaseClass.Active;

	    //Поиск задачи ETL. Объект репозитория с идентификатором "ETL"

	    MObj := MB.ItemById("ETL").Edit;

	    EtlTask := MObj As IEtlTask;

	    //Начало создания источника

	    //Создание объекта "Импорт из REST"

	    EtlProvider := EtlTask.Create(EtlObjectType.PlainDataRestProvider) As IEtlPlainDataProvider;

	    EtlProvider := EtlProvider.Edit;

	    EtlProvider.Id := "REST_Provider";

	    EtlProvider.Name := "Импорт из REST";

	    EtlProvider.Description := "Импорт из REST";

	    //Настройка источника данных

	    RESTProvider := EtlProvider.Provider As IDtRestProvider;

	    RESTProvider.Url := "http://datasource.com/year2016.json";

	    RESTProvider.Timeout := 60;

	    Creds := RESTProvider.Credentials As INetHttpCommandCredential;

	    Creds.Method := NetHttpCommandAuthentication.Basic;

	    Creds.User := "User";

	    Creds.Password := "Password";

	    RESTProvider.ResultType := DtRestProviderResultType.Json;

	    JSONProvider := RESTProvider.ResultProvider As IDtJsonProvider;

	    JSONProvider.Query := "$..data";

	    Headers := RESTProvider.Headers;

	    Headers.Add("Accept-Charset: utf-8");

	    Headers.Add("Accept-Language: ru;q=1,en;q=0.9");

	    EtlProvider.FillDefault;

	    //Сохраняем источник

	    EtlProvider.Save;

	    //Конец создания источника

	    //Начало создания визуального объекта

	    WxProvider := EtlTask.Workspace.CreateRectangle;

	    WxETLProvider := New WxETLObject.Create;

	    WxETLProvider.ETLObject := EtlProvider;

	    WxProvider.Style.TextPosition := WxTextPosition.Bottom;

	    WxProvider.Style.PictureMarginTop := -10;

	    WxProvider.PinPosition := New GxPointF.Create(50, 50);

	    WxProvider.Extension := WxETLProvider As IWxShapeExtension;

	    //Конец создания визуального объекта

	    //Сохранение задачи ETL

	    MObj.Save;

	End Sub UserProc;


При выполнении примера в задаче ETL будет создан новый источник данных
 - Импорт из REST. Источник будет настроен на работу с указанным REST-сервисом.


См. также:


[IDtRestProvider](IDtRestProvider.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
