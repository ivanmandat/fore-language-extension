# IPrimaryServiceSPLD.Endpoint

IPrimaryServiceSPLD.Endpoint
-


# IPrimaryServiceSPLD.Endpoint


## Синтаксис


Endpoint: String;


## Описание


Свойство Endpoint определяет
 адрес веб-сервиса платформы, который будет использоваться для подключения
 и работы с репозиторием.


## Комментарии


В качестве значения свойства необходимо указать адрес, по которому доступен
 веб-сервис платформы. Более подробно о формировании адреса читайте в подразделе
 «[Подключение
 к веб-сервису](PPSOMService.chm::/Intro/PP7Service_Using.htm)».


## Пример


			Sub CreateDefinition;

Var

    Man: IMetabaseManager;

    Defs: IMetabaseDefinitions;

    Definition: IMetabaseDefinition;

    LogonData: IPrimaryServiceSPLD;

Begin

    Man := MetabaseManagerFactory.Active;

    Defs := Man.Definitions;

    Definition := Defs.Add;

    Definition.Id := "WebServie";

    Definition.Name := "WebServie";

    Definition.Authentication := AuthenticationMode.Password;

    Definition.DriverId := "WSF";

    Definition.SecurityPackage := "STANDARDSECURITYPACKAGE";

    LogonData := Definition.LogonData As IPrimaryServiceSPLD;

    LogonData.Endpoint := "http://test-srv:80/axis2/services/PP.SOM.Som";

    LogonData.Metabase := "Warehouse";

    Definition.Scope := MetabaseDefinitionScope.LocalMachine;

    Definition.Save;

End Sub CreateDefinition;


При выполнении примера будет создано описание репозитория. При использовании
 данного описания будет осуществляться подключение к репозиторию через
 веб-сервис, расположенный по указанному адресу. Фактическое подключение
 будет осуществляться к репозиторию, описание которого зарегистрировано
 на веб-сервере и имеет идентификатор WAREHOUSE.


См. также:


[IPrimaryServiceSPLD](IPrimaryServiceSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
