# GetStatus: Операция

GetStatus: Операция
-


**


# GetStatus


## Синтаксис


GetStatusResult GetStatus(GetStatusArg tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция GetStatus проверяет
 статус соединения с репозиторием.


## Комментарии


Для выполнения операции укажите в поле tArg.metabase
 моникёр соединения, статус которого необходимо проверить.


Операция возвращает значение true,
 если соединение существует и false,
 если соединение по каким-либо причинам разорвано.


## Пример


Ниже приведён пример проверки статуса соединения с репозиторием. В запросе
 передаётся моникёр соединения. В ответе возвращается признак наличия указанного
 соединения.


	SOAP
	 JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetStatus xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<metabase>
  <id>LFOIPCCFOCCCGOAEOPOCGIPCMLLLDJFELKPAEPFJLNBLBMNK!M</id>  </metabase>
  </tArg>
  </GetStatus>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <GetStatusResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</GetStatusResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetStatus" :
  {
   "tArg" :
    {
     "metabase" :
      {
       "id" : "LFOIPCCFOCCCGOAEOPOCGIPCMLLLDJFELKPAEPFJLNBLBMNK!M"
      }
    }
  }
}

### JSON-ответ:


{
 "GetStatusResult" : "1"
}


public static bool CheckStatus(string mb)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetStatus()
    {
        tArg = new GetStatusArg()
        {
            metabase = new MbId() { id = mb }
        }
    };
    // Проверка статуса соединения с репозиторием
    var result = somClient.GetStatus(tGet);
    return result;
}


См. также:


[Общие
 операции](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
