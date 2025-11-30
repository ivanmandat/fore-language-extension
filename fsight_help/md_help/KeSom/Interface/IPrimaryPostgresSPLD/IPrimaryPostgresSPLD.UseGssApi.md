# IPrimaryPostgresSPLD.UseGssApi

IPrimaryPostgresSPLD.UseGssApi
-


# IPrimaryPostgresSPLD.UseGssApi


## Синтаксис


UseGssApi: Boolean;


## Описание


Свойство UseGssApi определяет
 использование аутентификации к серверу PostgreSQL по механизму GSS API.


## Комментарии


Для работы GSS API под Windows требуется библиотека libpq.dll, собранная
 с поддержкой GSS API, которая является частью продукта PostgreSQL и наличие
 установленного MIT Kerberos for Windows. Данные программные продукты не
 входят в состав «Форсайт. Аналитическая платформа».


## Пример


Для выполнения примера подключите системную сборку Metabase.


			Sub UserProc;

Var

    MbMan: IMetabaseManager;

    MbDefs: IMetabaseDefinitions;

    MbDef: IMetabaseDefinition;

    PostgreSPLD: IPrimaryPostgresSPLD;

Begin

    MbMan := MetabaseManagerFactory.Active;

    MbDefs := MbMan.Definitions;

    MbDef := MbDefs.Add;

    MbDef.DriverId := "POSTGRES";

    MbDef.Id := "Test_PostgreSQL";

    MbDef.Name := "Test_PostgreSQL";

    MbDef.Authentication := AuthenticationMode.Password;

    MbDef.SecurityPackage := "STANDARDSECURITYPACKAGE";

    PostgreSPLD := MbDef.LogonData As IPrimaryPostgresSPLD;

    PostgreSPLD.Server := "Server";

    PostgreSPLD.Database := "PPTest";

    PostgreSPLD.UseGssApi := True;

    PostgreSPLD.KrbSrvName := "POSTGRES";

    MbDef.Save;

End Sub UserProc;


После выполнения примера, используя тип аутентификации GSS API, будет
 создано новое описание репозитория. Схема, к которой будет осуществляться
 подключение, расположена на сервере «Server», на котором используется
 СУБД PostgreSQL.


См. также:


[IPrimaryPostgresSPLD](IPrimaryPostgresSPLD.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
