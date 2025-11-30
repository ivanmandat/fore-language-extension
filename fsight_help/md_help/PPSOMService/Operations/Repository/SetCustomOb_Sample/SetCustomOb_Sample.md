# Проверка прав доступа на выполнение операции пользовательского класса: Операция SetCustomOb

Проверка прав доступа на выполнение операции пользовательского класса: Операция SetCustomOb
-


**


# Проверка прав доступа на выполнение операции пользовательского класса


Ниже приведён пример использования операции [SetCustomOb](../SetCustomOb.htm)
 для проверки прав доступа текущего пользователя на выполнение операции
 над объектом пользовательского класса. В запросе передаётся моникёр объекта
 пользовательского класса и операция, возможность выполнения которой необходимо
 проверить. Если выполнение операции разрешено, то в ответе будет возвращён
 моникёр объекта; если запрещено - будет возвращена ошибка с причиной отказа
 в доступе на выполнение операции. Соответствующая запись будет занесена
 в протокол доступа.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetCustomOb xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCustomOb xmlns="****">
  <id>LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO</id>  </tCustomOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>[![](../../../minus.gif)](../../../#)<auditOp>
  <operationKey>1</operationKey>  <comment>Проверка прав доступа на выполнение операции: Импорт</comment>  </auditOp>
  </pattern>
  <meta />
  </tArg>
  </SetCustomOb>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<soapenv:Fault>
  <faultcode>soapenv:Sender</faultcode>  <faultstring>Недостаточно прав для выполнения операции 'Неизвестная операция' с объектом 'Обработчик данных' (CUST_OBJ) у пользователя 'ADMIN'</faultstring>[![](../../../minus.gif)](../../../#)<detail>
[![](../../../minus.gif)](../../../#)<ExceptionDetail xmlns="**http://schemas.datacontract.org/2004/07/System.ServiceModel**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <HelpLink xsi:nil="**1**" />
  <InnerException xsi:nil="**1**" />
  <Message>Недостаточно прав для выполнения операции 'Неизвестная операция' с объектом 'Обработчик данных' (CUST_OBJ) у пользователя 'ADMIN'</Message>  <StackTrace xsi:nil="**1**" />
  <Type>System.Exception</Type>  </ExceptionDetail>
[![](../../../minus.gif)](../../../#)<Error>
  <Message>Недостаточно прав для выполнения операции 'Неизвестная операция' с объектом 'Обработчик данных' (CUST_OBJ) у пользователя 'ADMIN'</Message>  <Code>6374</Code>  <PiClass>CPiObjException</PiClass>  <PiState>AAAAAAEAAAAAAAAA5hgAAAsAAACBAAAAHQQ1BDQEPgRBBEIEMARCBD4ERwQ9BD4EIAA/BEAEMAQyBCAANAQ7BE8EIAAyBEsEPwQ+BDsEPQQ1BD0EOARPBCAAPgQ/BDUEQAQwBEYEOAQ4BCAAJwAdBDUEOAQ3BDIENQRBBEIEPQQwBE8EIAA+BD8ENQRABDAERgQ4BE8EJwAgAEEEIAA+BDEESgQ1BDoEQgQ+BDwEIAAnAB4EMQRABDAEMQQ+BEIERwQ4BDoEIAA0BDAEPQQ9BEsERQQnACAAKABDAFUAUwBUAF8ATwBCAEoAKQAgAEMEIAA/BD4EOwRMBDcEPgQyBDAEQgQ1BDsETwQgACcAQQBEAE0ASQBOACcACwAAACAAAAAuAC4AXABNAG8AZABcAEsAZQBTAG8AbQBcAFMAbwBtAFwAUwBvAG0ATQBlAHQAYQBiAGEAcwBlAC4AYwBwAHAAAAAAAFl0AAALAAAAAAAAAAsAAABeAAAAdgBvAGkAZAAgAF8AXwBjAGQAZQBjAGwAIABDAFMAbwBtAE0AZQB0AGEAYgBhAHMAZQA6ADoAQwBDAGgAZQBjAGsAQQBuAGQAQQB1AGQAaQB0ADoAOgBFAHIAcgBvAHIAKABjAG8AbgBzAHQAIABzAHQAcgB1AGMAdAAgAEMAUwBvAG0ATQBlAHQAYQBiAGEAcwBlADoAOgBDAEMAaABlAGMAawBSAGUAcwAgACYAKQAgAGMAbwBuAHMAdAALAAAAAAAAAAAAAAAAAAAAAwAAAA==</PiState>  </Error>
  <Exception>Недостаточно прав для выполнения операции 'Неизвестная операция' с объектом 'Обработчик данных' (CUST_OBJ) у пользователя 'ADMIN'</Exception>  </detail>
  </soapenv:Fault>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetCustomOb" :
  {
   "tCustomOb" :
    {
     "id" : "LDPFDGAHAHHCGOAEBAFLLHKHMOALEEDEMKDKCJAAKNELDHAE!M!S!TGHNHGJAHAHHCGOAENBPOBGJCGMEKKAFEILDEOPPCHPKFAHNO"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "auditOp" :
        {
         "operationKey" : "1",
         "comment" : "Проверка прав доступа на выполнение операции: Импорт"
        }
      },
     "meta" : ""
    }
  }
}

### JSON-ответ:


{
 "Fault" :
  {
   "faultcode" : "soapenv:Sender",
   "faultstring" : "Недостаточно прав для выполнения операции 'Неизвестная операция' с объектом 'Обработчик данных' (CUST_OBJ) у пользователя 'ADMIN'",
   "detail" :
    {
     "ExceptionDetail" :
      {
       "HelpLink" :
        {
         "@nil" : "1"
        },
       "InnerException" :
        {
         "@nil" : "1"
        },
       "Message" : "Недостаточно прав для выполнения операции 'Неизвестная операция' с объектом 'Обработчик данных' (CUST_OBJ) у пользователя 'ADMIN'",
       "StackTrace" :
        {
         "@nil" : "1"
        },
       "Type" : "System.Exception"
      },
     "Error" :
      {
       "Message" : "Недостаточно прав для выполнения операции 'Неизвестная операция' с объектом 'Обработчик данных' (CUST_OBJ) у пользователя 'ADMIN'",
       "Code" : "6374",
       "PiClass" : "CPiObjException",
       "PiState" : "AAAAAAEAAAAAAAAA5hgAAAsAAACBAAAAHQQ1BDQEPgRBBEIEMARCBD4ERwQ9BD4EIAA\/BEAEMAQyBCAANAQ7BE8EIAAyBEsEPwQ+BDsEPQQ1BD0EOARPBCAAPgQ\/BDUEQAQwBEYEOAQ4BCAAJwAdBDUEOAQ3BDIENQRBBEIEPQQwBE8EIAA+BD8ENQRABDAERgQ4BE8EJwAgAEEEIAA+BDEESgQ1BDoEQgQ+BDwEIAAnAB4EMQRABDAEMQQ+BEIERwQ4BDoEIAA0BDAEPQQ9BEsERQQnACAAKABDAFUAUwBUAF8ATwBCAEoAKQAgAEMEIAA\/BD4EOwRMBDcEPgQyBDAEQgQ1BDsETwQgACcAQQBEAE0ASQBOACcACwAAACAAAAAuAC4AXABNAG8AZABcAEsAZQBTAG8AbQBcAFMAbwBtAFwAUwBvAG0ATQBlAHQAYQBiAGEAcwBlAC4AYwBwAHAAAAAAAFl0AAALAAAAAAAAAAsAAABeAAAAdgBvAGkAZAAgAF8AXwBjAGQAZQBjAGwAIABDAFMAbwBtAE0AZQB0AGEAYgBhAHMAZQA6ADoAQwBDAGgAZQBjAGsAQQBuAGQAQQB1AGQAaQB0ADoAOgBFAHIAcgBvAHIAKABjAG8AbgBzAHQAIABzAHQAcgB1AGMAdAAgAEMAUwBvAG0ATQBlAHQAYQBiAGEAcwBlADoAOgBDAEMAaABlAGMAawBSAGUAcwAgACYAKQAgAGMAbwBuAHMAdAALAAAAAAAAAAAAAAAAAAAAAwAAAA=="
      },
     "Exception" : "Недостаточно прав для выполнения операции 'Неизвестная операция' с объектом 'Обработчик данных' (CUST_OBJ) у пользователя 'ADMIN'"
    }
  }
}


public static bool SetCustomObCheckAndAudit(CustomObId moniker, CustomOperation operation)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetCustomOb()
    {
        tArg = new SetCustomObArg()
        {
            pattern = new CustomObMdPattern()
            {
                auditOp = new ObAuditOp()
                {
                    operationKey = operation.k,
                    comment = "Проверка прав доступа на выполнение операции: " + operation.n
                }
            },
            meta = new CustomObMd()
        },
        tCustomOb = moniker
    };
    // Проверка прав доступа на выполнение операции
    try
    {
        var result = somClient.SetCustomOb(tSet);
        return true;
    }
    catch
    {
        return false;
    }
}


См. также:


[SetCustomOb:
 Операция](../SetCustomOb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
