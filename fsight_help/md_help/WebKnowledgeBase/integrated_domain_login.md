# Интегрированная доменная аутентификация при использовании Service Reference

Интегрированная доменная аутентификация при использовании Service Reference
-


# Интегрированная доменная аутентификация при использовании Service Reference


## Проблема


В статье рассмотрен случай, когда необходимо настроить интегрированную
 доменную аутентификацию для веб-приложения, которое подключает сервисы
 платформы используя Service reference.


## Решение


Для решения проблемы необходимо:


	- Повторить все шаги для настройки [интегрированной
	 доменной аутентификации](Setup.chm::/UiWebSetup/Authentication/UiWebSetup_FAQ_1_DomainAuthorization.htm), кроме настройки файла
	 PP.xml в первой части пункта 5.


	- Настроить экземпляр класса для работы с сервисами:


SomPortTypeClient client = new SomPortTypeClient();

client.ClientCredentials.Windows.ClientCredential = System.Net.CredentialCache.DefaultNetworkCredentials;

client.ClientCredentials.Windows.AllowedImpersonationLevel = System.Security.Principal.TokenImpersonationLevel.Delegation;


	- В файле web.config дописать настройки в тег <security>:


<security mode="TransportCredentialOnly">

<transport clientCredentialType="Windows"/>

</security>


[![](Opened.gif)![](Closed.gif)Пример полностью
 настроенного файла web.config](javascript:TextPopup(this))


	<system.serviceModel>

	 <bindings>

	    <basicHttpBinding>

	        <binding name="SomSoapBinding">

	            <security mode="TransportCredentialOnly">

	                <transport clientCredentialType="Windows"/>

	            </security>

	        </binding>

	    </basicHttpBinding>

	  </bindings>

	  <client>

	    <endpoint address="http://localhost/axis2/services/PP.SOM.Som" binding="basicHttpBinding" bindingConfiguration="SomSoapBinding" contract="SRVPP.SomPortType" name="SomSoapPort">

	    </endpoint>

	  </client>

	</system.serviceModel>


Примечание.
 При работе с сервером Oracle стоит учитывать [дополнительные
 настройки Oracle](Setup.chm::/03_DB_Server_Config/Setup_DB_Server_Config_Oracle_Tuning.htm) при работе с доменной аутентификацией.


См. также:


[База
 знаний разработчиков веб-приложений](Web_Developers_KnowledgeBase.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
