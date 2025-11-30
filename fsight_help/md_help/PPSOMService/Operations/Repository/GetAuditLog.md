# GetAuditLog: Операция

GetAuditLog: Операция
-


**


# GetAuditLog


## Синтаксис


GetAuditLogResult GetAuditLog(AuditLogId tLog, GetAuditLogArg
 tArg)


## Параметры


tLog. Моникёр протокола доступа.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetAuditLog извлекает
 записи протокола доступа в соответствии с указанными настройками.


## Комментарии


В зависимости от того, с какими параметрами была выполнена операция
 [OpenAuditLog](OpenAuditLog.htm), данная операция позволяет
 получить один из следующих списков записей протокола доступа:


	- Записи о подключениях к репозиторию;


	- Записи об операциях над объектами, произведенными в рамках одного
	 подключения к репозиторию.


Для выполнения операции GetAuditLog
 необходимо в поле tLog указать
 моникёр открытого экземпляра протокола доступа и в поле tArg
 параметры извлечения информации о записях протокола. Моникёр может быть
 получен при выполнении операции [OpenAuditLog](OpenAuditLog.htm).


С помощью операции [SetAuditLogMd](SetAuditLogMd.htm) в протоколе
 доступа может быть задан фильтр. При этом операция GetAuditLog
 будет работать с отфильтрованным списком записей.


## Пример


Пример получения записей из открытого экземпляра протокола доступа.
 В запросе передается моникёр протокола доступа и количество записей, информацию
 о которых необходимо получить.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetAuditLog xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tLog xsi:type="**q1:OpenAuditLogResult**" xmlns="****" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <id>S1!M!S!A2</id>  </tLog>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <count>3</count>  </tArg>
  </GetAuditLog>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetAuditLogResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<logRecords xmlns="****">
[![](../../minus.gif)](../../#)<rs>
[![](../../minus.gif)](../../#)<r>
  <session>76206</session>  <stamp>2018-10-22T05:53:39.399Z</stamp>  <succeeded>1</succeeded>  <isLogon>0</isLogon>[![](../../minus.gif)](../../#)<oper>
  <operation>15</operation>  <position>0</position>  <level>0</level>  <name>Чтение</name>  <mask>2</mask>  <objectKey>4294967295</objectKey>  <objectId>AUDITLOG</objectId>  <objectName>Протокол доступа</objectName>  <objectClass>7938</objectClass>  <comment />
  <objectLabel>0</objectLabel>  </oper>
  </r>
[![](../../minus.gif)](../../#)<r>
  <session>76206</session>  <stamp>2018-10-22T05:53:37.040Z</stamp>  <succeeded>1</succeeded>  <isLogon>0</isLogon>[![](../../minus.gif)](../../#)<oper>
  <operation>13</operation>  <position>0</position>  <level>0</level>  <name>Чтение политики</name>  <mask>1048576</mask>  <objectKey>4294967295</objectKey>  <objectId>METABASESECURITY</objectId>  <objectName>Политика безопасности</objectName>  <objectClass>7937</objectClass>  <comment />
  <objectLabel>0</objectLabel>  </oper>
  </r>
  </rs>
  <notEof>0</notEof>  <dateOrderAscending>0</dateOrderAscending>  <supportObjectsLabel>1</supportObjectsLabel>  </logRecords>
  <dataKey xmlns="****">-1</dataKey>  </GetAuditLogResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetAuditLog" :
  {
   "tLog" :
    {
     "id" : "S1!M!S!A2"
    },
   "tArg" :
    {
     "count" : "3"
    }
  }
}

### JSON-ответ:


{
 "GetAuditLogResult" :
  {
   "logRecords" :
    {
     "rs" :
      {
       "r" :
        [
          {
           "session" : "76206",
           "stamp" : "2018-10-22T05:53:39.399Z",
           "succeeded" : "1",
           "isLogon" : "0",
           "oper" :
            {
             "operation" : "15",
             "position" : "0",
             "level" : "0",
             "name" : "Чтение",
             "mask" : "2",
             "objectKey" : "4294967295",
             "objectId" : "AUDITLOG",
             "objectName" : "Протокол доступа",
             "objectClass" : "7938",
             "comment" : "",
             "objectLabel" : "0"
            }
          },
          {
           "session" : "76206",
           "stamp" : "2018-10-22T05:53:37.040Z",
           "succeeded" : "1",
           "isLogon" : "0",
           "oper" :
            {
             "operation" : "13",
             "position" : "0",
             "level" : "0",
             "name" : "Чтение политики",
             "mask" : "1048576",
             "objectKey" : "4294967295",
             "objectId" : "METABASESECURITY",
             "objectName" : "Политика безопасности",
             "objectClass" : "7937",
             "comment" : "",
             "objectLabel" : "0"
            }
          }
        ]
      },
     "notEof" : "0",
     "dateOrderAscending" : "0",
     "supportObjectsLabel" : "1"
    },
   "dataKey" : "-1"
  }
}


public static GetAuditLogResult GetOperations(string logId, uint operationCount)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var getAuditLog = new GetAuditLog()
    {
        tArg = new GetAuditLogArg()
        {
            count = operationCount,
        },
        tLog = new AuditLogId() { id = logId }
    };
    //Получение списка операций
    var result = somClient.GetAuditLog(getAuditLog);
    return result;
}


См. также:


[Общие
 операции](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
