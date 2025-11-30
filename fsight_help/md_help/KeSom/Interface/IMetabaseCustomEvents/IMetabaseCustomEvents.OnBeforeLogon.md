# IMetabaseCustomEvents.OnBeforeLogon

IMetabaseCustomEvents.OnBeforeLogon
-


# IMetabaseCustomEvents.OnBeforeLogon


## Синтаксис


OnBeforeLogon(Args: [IMetabaseOnBeforeLogonArgs](../IMetabaseOnBeforeLogonArgs/IMetabaseOnBeforeLogonArgs.htm));


## Описание


Метод OnBeforeLogon реализует
 событие, которое наступает перед подключением к репозиторию с помощью
 веб-сервиса.


## Комментарии


Метод должен быть переопределён в пользовательском классе. Использование
 данного метода позволяет переопределить параметры подключения к репозиторию
 или выполнить какие-либо дополнительные действия при подключении.


Для подключения к репозиторию используется операция [OpenMetabase](PPSOMService.chm::/Operations/Repository/OpenMetabase.htm).


Если внутри обработчика генерируется исключительная ситуация, то её
 текст будет доступен в результате операции [OpenMetabase](PPSOMService.chm::/Operations/Repository/OpenMetabase.htm).


## Пример


Указанный пример в общем виде демонстрирует класс, который может использоваться
 для обработки события подключения к репозиторию из веб-сервиса. В событии
 обрабатывается два условия подключения, если ни одно из условий не соблюдено,
 то подключение отменяется и в веб-сервис пробрасывается исключительная
 ситуация.


	Public Class CustomEvents: ForeMetabaseCustomEvents

	    Public Sub OnBeforeLogon(Args: IMetabaseOnBeforeLogonArgs);

	    Var

	        Def: IMetabaseDefinition;

	        SecPackage: ISecurityPackage;

	        Creds: IPasswordCredentials;

	    Begin

	        If <Условие подключения 1> Then

	            Args.Handled := False;

	            Args.AllowLogon := True;

	            Args.ResultMetabase := Args.Metabase;

	        Elseif <Условие подключения 2> Then

	            Args.Handled := True;

	            Args.AllowLogon := True;

	            Def := Args.Metabase.Definition;

	            //...

	            //Изменение параметров подключения

	            ///...

	            SecPackage := New StandardSecurityPackage.Create;

	            Creds := SecPackage.CreateCredentials(AuthenticationMode.Password) As IPasswordCredentials;

	            Creds.UserName := (Args.Credentials As IPasswordCredentials).UserName;

	            Creds.Password := "new password";

	            //...

	            //Настройка учётных данных

	            //...

	            Args.ResultMetabase := Def.Open(Creds);

	        Else

	            Args.Handled := True;

	            Args.AllowLogon := False;

	            Raise New Exception.Create("Условия подключения не соблюдены. Обратитесь к администратору.");

	        End If;

	    End Sub OnBeforeLogon;

	End Class CustomEvents;


См. также:


[IMetabaseCustomEvents](IMetabaseCustomEvents.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
