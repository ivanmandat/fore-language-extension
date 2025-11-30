# GetSessions: Операция

GetSessions: Операция
-


**


# GetSessions


## Синтаксис


GetSessionsResult GetSessions(MbId tMbSec, GetSessionsArg
 tArg)


## Параметры


tMbSec. Моникёр
 соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetSessions получает
 список активных сессий с репозиторием.


## Комментарии


Для выполнения операции укажите в поле tMbSec
 моникёр соединения с репозиторием. Моникёр может быть получен при выполнении
 операции [OpenMetabase](OpenMetabase.htm).


При первом выполнении операции GetSessions,
 используя поля tArg.credsCachePattern
 и tArg.credsCacheMeta, необходимо
 закешировать учётные данные пользователя, обладающего правами администрирования
 пользователей. Учётные данные будут использоваться в рамках текущей сессии.
 При последующих вызовах операции GetSessions
 указывать учётные данные не требуется.


В поле tArg.filters можно задать
 различные поля, по которым будут фильтроваться сессии. Если фильтровать
 сессии не требуется, то задайте пустое поле tArg.


Результатом выполнения операции будет полученный список активных сессий
 с репозиторием.


## Пример


Ниже приведён пример получения списка всех активных сессий с репозиторием.
 В запросе передаётся моникёр соединения с репозиторием и необходимые учётные
 данные. В ответе возвращается информация о сессиях.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetSessions xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbSec xmlns="****">
  <id>DMBIHLCAPCGEGOAECEFNBPIJOCIPPDIELLELNHENINPKCHIO!M</id>  </tMbSec>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <credsCachePattern>Add</credsCachePattern>[![](../../minus.gif)](../../#)<credsCacheMeta>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <realm>$SYSTEM</realm>  <admin>true</admin>[![](../../minus.gif)](../../#)<creds>
[![](../../minus.gif)](../../#)<user>
  <id>User</id>  </user>
  <pass>Password</pass>  </creds>
  </it>
  </its>
  </credsCacheMeta>
  </tArg>
  </GetSessions>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetSessionsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>DMBIHLCAPCGEGOAECEFNBPIJOCIPPDIELLELNHENINPKCHIO!M</id>  </id>
[![](../../minus.gif)](../../#)<sessions xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <id>53</id>  <userName>ADMIN</userName>  <userOsName>www-data</userOsName>  <hostName>fap-bi-deployment-85c66d866f-bg766</hostName>  <netAddress>  -  -  -  -  -  </netAddress>  </it>
[![](../../minus.gif)](../../#)<it>
  <id>59</id>  <userName>ADMIN</userName>  <userOsName>ivan.ivanov</userOsName>  <hostName>IVANOV</hostName>  <netAddress>94-de-80-69-59-dd</netAddress>  </it>
  </its>
  </sessions>
  </GetSessionsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSessions" :
  {
   "tMbSec" :
    {
     "id" : "DMBIHLCAPCGEGOAECEFNBPIJOCIPPDIELLELNHENINPKCHIO!M"
    },
   "tArg" :
    {
     "credsCachePattern" : "Add",
     "credsCacheMeta" :
      {
       "its" :
        {
         "it" :
          [
            {
             "realm" : "$SYSTEM",
             "admin" : "true",
             "creds" :
              {
               "user" :
                {
                 "id" : "User"
                },
               "pass" : "Password"
              }
            }
          ]
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetSessionsResult" :
  {
   "id" :
    {
     "id" : "DMBIHLCAPCGEGOAECEFNBPIJOCIPPDIELLELNHENINPKCHIO!M"
    },
   "sessions" :
    {
     "its" :
      {
       "it" :
        [
          {
           "id" : "53",
           "userName" : "ADMIN",
           "userOsName" : "www-data",
           "hostName" : "fap-bi-deployment-85c66d866f-bg766",
           "netAddress" : "  -  -  -  -  -  "
          },
          {
           "id" : "59",
           "userName" : "ADMIN",
           "userOsName" : "ivan.ivanov",
           "hostName" : "IVANOV",
           "netAddress" : "94-de-80-69-59-dd"
          }
        ]
      }
    }
  }
}


public static GetSessionsResult GetSessions(string moniker, string userName, string password)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSessions()
    {
        tArg = new GetSessionsArg()
        {
            credsCachePattern = ListOperation.Add,
            credsCacheMeta = new UserCredsCache
            {
                its = new RealmUserCreds[]
                {
                    new RealmUserCreds()
                    {
                        admin = true,
                        realm = "$SYSTEM",
                        creds = new UserCreds()
                        {
                            user = new UserId() { id = userName },
                            pass = password
                        }
                    }
                }
            }
        },
        tMbSec = new MbId() { id = moniker }
    };
    // Получение списка активных сессий
    var result = somClient.GetSessions(tGet);
    return result;
}


См. также:


[Работа
 с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
