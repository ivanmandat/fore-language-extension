# GetAuditLogMd: Операция

GetAuditLogMd: Операция
-


**


# GetAuditLogMd


## Синтаксис


GetAuditLogMdResult GetAuditLogMd(AuditLogId tLog,
 GetAuditLogMdArg tArg)


## Параметры


tLog. Моникёр протокола доступа.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetAuditLogMd
 получает параметры работы протокола доступа.


## Комментарии


Данная операция позволяет получить параметры фильтрации, которые заданы
 в протоколе доступа. Для выполнения операции укажите в поле tLog
 моникёр открытого экземпляра протокола доступа, а в поле tArg
 параметры получения информации о фильтрации. Моникёр может быть получен
 при выполнении операции [OpenAuditLog](OpenAuditLog.htm).


Параметры фильтрации могут быть заданы с помощью операции [SetAuditLogMd](SetAuditLogMd.htm).


## Пример


Пример задания фильтра записей в протоколе доступа. В запросе передается
 моникёр протокола доступа и необходимые параметры фильтра. В ответе приходит
 полный список настроек фильтрации.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<GetAuditLogMd
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../minus.gif)](../../#)<tLog xmlns="** **">


						  <id>S1!M!S!A4</id>


					  </tLog>


					[![](../../minus.gif)](../../#)<tArg xmlns="** **">


						[![](../../minus.gif)](../../#)<pattern>


							[![](../../minus.gif)](../../#)<filter>


								  <conditions>Get</conditions>


								[![](../../minus.gif)](../../#)<condition>


									  <userNames>Get</userNames>


									  <stations>Get</stations>


									  <osUsers>Get</osUsers>


									  <userIPs>Get</userIPs>


									  <operations>Get</operations>


									  <classes>Get</classes>


									  <objectKeys>Get</objectKeys>


								  </condition>


							  </filter>


						  </pattern>


					  </tArg>


				  </GetAuditLogMd>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				[![](../../minus.gif)](../../#)<GetAuditLogMdResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../minus.gif)](../../#)<meta xmlns="** **">


						[![](../../minus.gif)](../../#)<filter>


							[![](../../minus.gif)](../../#)<conditions>


								[![](../../minus.gif)](../../#)<Item>


									  <isAnd>1</isAnd>


									  <isNot>0</isNot>


									  <minDate>2018-10-01T00:00:00.000</minDate>


									  <maxDate>2018-12-01T00:00:00.000</maxDate>


									  <includeFailedLogons>0</includeFailedLogons>


									  <includeSucceededLogons>0</includeSucceededLogons>


								  <userNames />


								  <stations />


								  <osUsers />


								  <userIPs />


									  <includeFailedOperations>1</includeFailedOperations>


									  <includeSucceededOperations>1</includeSucceededOperations>


								  <operations />


								  <classes />


									[![](../../minus.gif)](../../#)<nameFilter>


										  <isOn>1</isOn>


										  <value>отчет</value>


										  <caseSensitive>0</caseSensitive>


										  <wholeWordsOnly>0</wholeWordsOnly>


									  </nameFilter>


									[![](../../minus.gif)](../../#)<idFilter>


										  <isOn>1</isOn>


										  <value>отчет</value>


										  <caseSensitive>0</caseSensitive>


										  <wholeWordsOnly>0</wholeWordsOnly>


									  </idFilter>


								  <objectKeys />


								  </Item>


							  </conditions>


							  <dateOrderAscending>1</dateOrderAscending>


							  <top>0</top>


						  </filter>


					  </meta>


				  </GetAuditLogMdResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


### JSON-запрос:


{
 "GetAuditLogMd" :
  {
   "tLog" :
    {
     "id" : "S1!M!S!A4"
    },
   "tArg" :
    {
     "pattern" :
      {
       "filter" :
        {
         "conditions" : "Get",
         "condition" :
          {
           "userNames" : "Get",
           "stations" : "Get",
           "osUsers" : "Get",
           "userIPs" : "Get",
           "operations" : "Get",
           "classes" : "Get",
           "objectKeys" : "Get"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetAuditLogMdResult" :
  {
   "meta" :
    {
     "filter" :
      {
       "conditions" :
        {
         "Item" :
          {
           "isAnd" : "1",
           "isNot" : "0",
           "minDate" : "2018-10-01T00:00:00.000",
           "maxDate" : "2018-12-01T00:00:00.000",
           "includeFailedLogons" : "0",
           "includeSucceededLogons" : "0",
           "userNames" : "",
           "stations" : "",
           "osUsers" : "",
           "userIPs" : "",
           "includeFailedOperations" : "1",
           "includeSucceededOperations" : "1",
           "operations" : "",
           "classes" : "",
           "nameFilter" :
            {
             "isOn" : "1",
             "value" : "отчет",
             "caseSensitive" : "0",
             "wholeWordsOnly" : "0"
            },
           "idFilter" :
            {
             "isOn" : "1",
             "value" : "отчет",
             "caseSensitive" : "0",
             "wholeWordsOnly" : "0"
            },
           "objectKeys" : ""
          }
        },
       "dateOrderAscending" : "1",
       "top" : "0"
      }
    }
  }
}


public static GetAuditLogMdResult GetAuditLogFilter(string logId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var getAuditLogMd = new GetAuditLogMd()
    {
        tArg = new GetAuditLogMdArg()
        {
            pattern = new AuditLogMdPattern()
            {
                filter = new AuditLogFilterPattern()
                {
                    conditions = ListOperation.Get,
                    condition = new AuditLogFilterConditionPattern()
                    {
                        classes = ListOperation.Get,
                        objectKeys = ListOperation.Get,
                        operations = ListOperation.Get,
                        osUsers = ListOperation.Get,
                        stations = ListOperation.Get,
                        userIPs = ListOperation.Get,
                        userNames = ListOperation.Get
                    }
                }
            }
        },
        tLog = new AuditLogId() { id = logId }
    };
    //Получение параметров фильтрации в протоколе доступа
    var result = somClient.GetAuditLogMd(getAuditLogMd);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
