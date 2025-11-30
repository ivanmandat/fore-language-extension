# GetLinkActiveProcess: Операция

GetLinkActiveProcess: Операция
-


**


# GetLinkActiveProcess


## Синтаксис


Result GetLinkActiveProcess(OdId reportId)


## Параметры


reportId. Моникёр
 объекта, являющегося регламентным отчётом.


## Описание


Операция GetLinkActiveProcess
 проверяет наличие связи регламентного отчёта и шагов запущенных экземпляров
 процессов.


## Комментарии


Операция проверяет, используется ли регламентный отчёт в шаге «Согласование»
 или «Ввод данных» в запущенных экземплярах процессов. Для выполнения операции
 укажите в поле reportId моникёр
 объекта репозитория, являющегося регламентным отчётом. Моникёр может быть
 получен при выполнении операции [GetObjects](../Repository/GetObjects.htm).


Результатом операции будет логическое значение true,
 если регламентный отчёт используется в шагах запущенных экземплярах процессов
 и false, если не используется.


## Пример


Ниже приведён пример проверки наличия связи регламентного отчёта и шагов
 запущенных экземпляров процесса. В запросе передаётся моникёр объекта,
 являющегося регламентным отчётом. В ответе возвращается признак запущенных
 экземпляров процесса, которые используют регламентный отчёт.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetLinkActiveProcess xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<reportId xmlns="****">
  <id>MGCJLAODBFHGGOAEAHDCLNHLBGOFKNPEEJLMPPGHNCPGLIJB!M!110610</id>  </reportId>
  </GetLinkActiveProcess>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <GetLinkActiveProcessResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</GetLinkActiveProcessResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetLinkActiveProcess" :
  {
   "reportId" :
    {
     "id" : "MGCJLAODBFHGGOAEAHDCLNHLBGOFKNPEEJLMPPGHNCPGLIJB!M!110610"
    }
  }
}

### JSON-ответ:


{
 "GetLinkActiveProcessResult" : "1"
}


public static bool GetLinkActiveProcess(string moniker, string reportKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetLinkActiveProcess()
    {
        reportId = new OdId() { id = moniker + '!' + reportKey }
    };
    // Проверка наличия связи регламентного отчёта и шагов запущенных экземпляров процессов
    var result = somClient.GetLinkActiveProcess(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
