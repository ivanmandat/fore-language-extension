# SetAuditLogMd: Операция

SetAuditLogMd: Операция
-


**


# SetAuditLogMd


## Синтаксис


SetAuditLogMdResult SetAuditLogMd(AuditLogId tLog,
 SetAuditLogMdArg tArg)


## Параметры


tLog. Моникёр протокола доступа.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetAuditLogMd задаёт
 параметры работы протокола доступа.


## Комментарии


Данная операция позволяет задать различные параметры фильтрации записей
 в протоколе доступа. Для выполнения операции укажите в поле tLog
 моникёр открытого экземпляра протокола доступа, а в поле tArg
 необходимые параметры работы.


Моникёр может быть получен при выполнении операции [OpenAuditLog](OpenAuditLog.htm).


В поле tArg.meta.filter задайте
 параметры фильтрации, а в поле tArg.pattern
 шаблон, в соответствии с которым заданные параметры будут применяться.
 Если фильтр был установлен, то операция [GetAuditLog](GetAuditLog.htm)
 будет осуществлять отбор записей из отфильтрованного списка записей. Если
 было определено поле tArg.metaGet,
 то результатом операции SetAuditLogMd
 будет список установленных параметров фильтрации. Также установленные
 параметры могут быть получены с помощью операции [GetAuditLogMd](GetAuditLogMd.htm).


## Пример


Пример задания фильтра записей в протоколе доступа. В запросе передается
 моникёр протокола доступа и необходимые параметры фильтра. В ответе приходит
 полный список настроек фильтрации.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<SetAuditLogMd
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../minus.gif)](../../#)<tLog xmlns="** **">


						  <id>S1!M!S!A4</id>


					  </tLog>


					[![](../../minus.gif)](../../#)<tArg xmlns="** **">


						[![](../../minus.gif)](../../#)<pattern>


							[![](../../minus.gif)](../../#)<filter>


								  <conditions>Set</conditions>


								[![](../../minus.gif)](../../#)<condition>


									  <userNames>Set</userNames>


									  <stations>Set</stations>


									  <osUsers>Set</osUsers>


									  <userIPs>Set</userIPs>


									  <operations>Set</operations>


									  <classes>Set</classes>


									  <objectKeys>Set</objectKeys>


								  </condition>


							  </filter>


						  </pattern>


						[![](../../minus.gif)](../../#)<meta>


							[![](../../minus.gif)](../../#)<filter>


								[![](../../minus.gif)](../../#)<conditions>


									[![](../../minus.gif)](../../#)<Item>


										  <isAnd>true</isAnd>


										  <isNot>false</isNot>


										  <minDate>2018-10-01T00:00:00</minDate>


										  <maxDate>2018-12-01T00:00:00</maxDate>


										  <includeFailedLogons>false</includeFailedLogons>


										  <includeSucceededLogons>false</includeSucceededLogons>


										  <includeFailedOperations>true</includeFailedOperations>


										  <includeSucceededOperations>true</includeSucceededOperations>


										[![](../../minus.gif)](../../#)<nameFilter>


											  <isOn>true</isOn>


											  <value>отчет</value>


											  <caseSensitive>false</caseSensitive>


											  <wholeWordsOnly>false</wholeWordsOnly>


										  </nameFilter>


										[![](../../minus.gif)](../../#)<idFilter>


											  <isOn>true</isOn>


											  <value>отчет</value>


											  <caseSensitive>false</caseSensitive>


											  <wholeWordsOnly>false</wholeWordsOnly>


										  </idFilter>


									  </Item>


								  </conditions>


								  <dateOrderAscending>true</dateOrderAscending>


							  </filter>


						  </meta>


						[![](../../minus.gif)](../../#)<metaGet>


							[![](../../minus.gif)](../../#)<filter>


								  <conditions>Get</conditions>


							  </filter>


						  </metaGet>


					  </tArg>


				  </SetAuditLogMd>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				[![](../../minus.gif)](../../#)<SetAuditLogMdResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../minus.gif)](../../#)<metaGet xmlns="** **">


						[![](../../minus.gif)](../../#)<filter>


							[![](../../minus.gif)](../../#)<conditions>


								[![](../../minus.gif)](../../#)<Item>


									  <isAnd>1</isAnd>


									  <isNot>0</isNot>


									  <minDate>2018-10-01T00:00:00.000</minDate>


									  <maxDate>2018-12-01T00:00:00.000</maxDate>


									  <includeFailedLogons>0</includeFailedLogons>


									  <includeSucceededLogons>0</includeSucceededLogons>


									  <includeFailedOperations>1</includeFailedOperations>


									  <includeSucceededOperations>1</includeSucceededOperations>


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


								  </Item>


							  </conditions>


							  <dateOrderAscending>1</dateOrderAscending>


							  <top>0</top>


						  </filter>


					  </metaGet>


				  </SetAuditLogMdResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


### JSON-запрос:


{
 "SetAuditLogMd" :
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
         "conditions" : "Set",
         "condition" :
          {
           "userNames" : "Set",
           "stations" : "Set",
           "osUsers" : "Set",
           "userIPs" : "Set",
           "operations" : "Set",
           "classes" : "Set",
           "objectKeys" : "Set"
          }
        }
      },
     "meta" :
      {
       "filter" :
        {
         "conditions" :
          {
           "Item" :
            {
             "isAnd" : "true",
             "isNot" : "false",
             "minDate" : "2018-10-01T00:00:00",
             "maxDate" : "2018-12-01T00:00:00",
             "includeFailedLogons" : "false",
             "includeSucceededLogons" : "false",
             "includeFailedOperations" : "true",
             "includeSucceededOperations" : "true",
             "nameFilter" :
              {
               "isOn" : "true",
               "value" : "отчет",
               "caseSensitive" : "false",
               "wholeWordsOnly" : "false"
              },
             "idFilter" :
              {
               "isOn" : "true",
               "value" : "отчет",
               "caseSensitive" : "false",
               "wholeWordsOnly" : "false"
              }
            }
          },
         "dateOrderAscending" : "true"
        }
      },
     "metaGet" :
      {
       "filter" :
        {
         "conditions" : "Get"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetAuditLogMdResult" :
  {
   "metaGet" :
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
           "includeFailedOperations" : "1",
           "includeSucceededOperations" : "1",
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
            }
          }
        },
       "dateOrderAscending" : "1",
       "top" : "0"
      }
    }
  }
}


public static SetAuditLogMdResult SetAuditLogFilter(string logId, string findText)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var setAuditLog = new SetAuditLogMd()
    {
        tArg = new SetAuditLogMdArg()
        {
            meta = new AuditLogMd()
            {
                filter = new AuditLogFilter()
                {
                    conditions = new AuditLogFilterCondition[1]
                    {
                        new AuditLogFilterCondition()
                        {
                            isAnd = true,
                            isNot = false,
                            minDate = DateTime.Parse("01.10.2018"),
                            maxDate = DateTime.Parse("01.12.2018"),
                            includeFailedLogons = false,
                            includeSucceededLogons = false,
                            includeFailedOperations = true,
                            includeSucceededOperations = true,
                            nameFilter = new StringFilterCondition()
                            {
                                caseSensitive = false,
                                isOn = true,
                                value = findText,
                                wholeWordsOnly = false
                            },
                            idFilter = new StringFilterCondition()
                            {
                                caseSensitive = false,
                                isOn = true,
                                value = findText,
                                wholeWordsOnly = false
                            }
                        }
                    },
                    dateOrderAscending = true
                }
            },
            pattern = new AuditLogMdPattern()
            {
                filter = new AuditLogFilterPattern()
                {
                    conditions = ListOperation.Set,
                    condition = new AuditLogFilterConditionPattern()
                    {
                        userNames = ListOperation.Set,
                        stations = ListOperation.Set,
                        osUsers = ListOperation.Set,
                        userIPs = ListOperation.Set,
                        operations = ListOperation.Set,
                        classes= ListOperation.Set,
                        objectKeys= ListOperation.Set
                    }
                },
            },
            metaGet = new AuditLogMdPattern()
            {
                filter = new AuditLogFilterPattern()
                {
                    conditions = ListOperation.Get
                }
            }
        },
        tLog = new AuditLogId() { id = logId }
    };
    //Получение отфильтрованных записей из протокола доступа
    var result = somClient.SetAuditLogMd(setAuditLog);
    return result;
}


См. также:


[Общие
 операции](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
