# Получение описания безопасности объектов: Операция GetMbSec

Получение описания безопасности объектов: Операция GetMbSec
-


**


# Получение описания безопасности объектов


Ниже приведен пример использования операции [GetMbSec](../GetMbSec.htm)
 для получения описания безопасности объектов репозитория. В запросе передается
 моникёр соединения с репозиторием и коллекция ключей объектов, для которых
 будет получено описание безопасности. В ответе приходит информация о субъектах
 безопасности, для которых настроены какие-либо права доступа к указанным
 объектам репозитория.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMbSec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbSec xmlns="****">
  <id>S1!M</id>  </tMbSec>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <objects>true</objects>[![](../../../minus.gif)](../../../#)<objectsFilter>
[![](../../../minus.gif)](../../../#)<keys>
  <i>1</i>  <i>73</i>  </keys>
  </objectsFilter>
  </pattern>
  </tArg>
  </GetMbSec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMbSecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<objects>
[![](../../../minus.gif)](../../../#)<ods>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>OBJ1</i>  <n>Модель1</n>  <k>1</k>  <c>5125</c>  <p>66980</p>  <h>0</h>  <sdKey>66198</sdKey>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>OBJ2</i>  <n>obj2</n>  <k>73</k>  <c>1537</c>  <p>71</p>  <h>0</h>  <sdKey>197691</sdKey>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
  </its>
  </ods>
[![](../../../minus.gif)](../../../#)<sds>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>66198</k>  <isInherited>1</isInherited>  <isSealed>0</isSealed>[![](../../../minus.gif)](../../../#)<discrete>
[![](../../../minus.gif)](../../../#)<aces>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<subject>
  <k>2147483649</k>  <id>АДМИНИСТРАТОРЫ</id>  <n>АДМИНИСТРАТОРЫ</n>  <vis>1</vis>  <type>Group</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-2-1</sid>  <type>Group</type>  </sid>
  </subject>
  <allow>1</allow>  </it>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<subject>
  <k>2147483649</k>  <id>ADMIN</id>  <n>Пользователь</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-1</sid>  <type>User</type>  </sid>
  </subject>
  <allow>1</allow>  </it>
  </aces>
  </discrete>
[![](../../../minus.gif)](../../../#)<mandatory>
[![](../../../minus.gif)](../../../#)<accessToken>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<category>
  <k>1</k>  <id>КАТЕГОРИЯ</id>  <n>КАТЕГОРИЯ</n>  <vis>1</vis>  </category>
[![](../../../minus.gif)](../../../#)<level>
  <k>0</k>  <id>Нет доступа</id>  <n>Нет доступа</n>  <vis>1</vis>  </level>
  </it>
  </its>
  </accessToken>
  </mandatory>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>197691</k>  <isInherited>0</isInherited>  <isSealed>0</isSealed>[![](../../../minus.gif)](../../../#)<discrete>
[![](../../../minus.gif)](../../../#)<aces>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<subject>
  <k>2147483649</k>  <id>ADMIN</id>  <n>Пользователь</n>  <vis>1</vis>  <type>User</type>[![](../../../minus.gif)](../../../#)<sid>
  <sid>PS-1-1</sid>  <type>User</type>  </sid>
  </subject>
  <allow>1</allow>  </it>
  </aces>
  </discrete>
[![](../../../minus.gif)](../../../#)<mandatory>
[![](../../../minus.gif)](../../../#)<accessToken>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
[![](../../../minus.gif)](../../../#)<category>
  <k>1</k>  <id>КАТЕГОРИЯ</id>  <n>КАТЕГОРИЯ</n>  <vis>1</vis>  </category>
[![](../../../minus.gif)](../../../#)<level>
  <k>0</k>  <id>Нет доступа</id>  <n>Нет доступа</n>  <vis>1</vis>  </level>
  </it>
  </its>
  </accessToken>
  </mandatory>
  </it>
  </its>
  </sds>
  </objects>
  <bisearchEnable>Full</bisearchEnable>[![](../../../minus.gif)](../../../#)<apply>
[![](../../../minus.gif)](../../../#)<onCredentialsRequired>
[![](../../../minus.gif)](../../../#)<logonParams>
  <descr>Введите имя и пароль пользователя, обладающего правами создания таблиц в базе данных 'База данных'</descr>  <realm>OBJ21909</realm>  <toAdmin>1</toAdmin>[![](../../../minus.gif)](../../../#)<logonData>
  <driver>MSSQL2012</driver>  <server>test-server</server>  <database>Warehouse</database>  </logonData>
  </logonParams>
  </onCredentialsRequired>
  </apply>
  </meta>
  </GetMbSecResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMbSec" :
  {
   "tMbSec" :
    {
     "id" : "S1!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "objects" : "true",
       "objectsFilter" :
        {
         "keys" :
          {
           "i" :
            [
              "1",
              "73"
            ]
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetMbSecResult" :
  {
   "id" :
    {
     "id" : "S1!M"
    },
   "meta" :
    {
     "objects" :
      {
       "ods" :
        {
         "its" :
          {
           "d" :
            [
              {
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@hf" : "0",
               "i" : "OBJ1",
               "n" : "Модель1",
               "k" : "1",
               "c" : "5125",
               "p" : "66980",
               "h" : "0",
               "sdKey" : "66198",
               "hasPrv" : "0",
               "ic" : "0"
              },
              {
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@hf" : "0",
               "i" : "OBJ2",
               "n" : "obj2",
               "k" : "73",
               "c" : "1537",
               "p" : "71",
               "h" : "0",
               "sdKey" : "197691",
               "hasPrv" : "0",
               "ic" : "0"
              }
            ]
          }
        },
       "sds" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "66198",
               "isInherited" : "1",
               "isSealed" : "0",
               "discrete" :
                {
                 "aces" :
                  {
                   "it" :
                    [
                      {
                       "subject" :
                        {
                         "k" : "2147483649",
                         "id" : "АДМИНИСТРАТОРЫ",
                         "n" : "АДМИНИСТРАТОРЫ",
                         "vis" : "1",
                         "type" : "Group",
                         "sid" :
                          {
                           "sid" : "PS-2-1",
                           "type" : "Group"
                          }
                        },
                       "allow" : "1"
                      },
                      {
                       "subject" :
                        {
                         "k" : "2147483649",
                         "id" : "ADMIN",
                         "n" : "Пользователь",
                         "vis" : "1",
                         "type" : "User",
                         "sid" :
                          {
                           "sid" : "PS-1-1",
                           "type" : "User"
                          }
                        },
                       "allow" : "1"
                      }
                    ]
                  }
                },
               "mandatory" :
                {
                 "accessToken" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "category" :
                          {
                           "k" : "1",
                           "id" : "КАТЕГОРИЯ",
                           "n" : "КАТЕГОРИЯ",
                           "vis" : "1"
                          },
                         "level" :
                          {
                           "k" : "0",
                           "id" : "Нет доступа",
                           "n" : "Нет доступа",
                           "vis" : "1"
                          }
                        }
                      ]
                    }
                  }
                }
              },
              {
               "k" : "197691",
               "isInherited" : "0",
               "isSealed" : "0",
               "discrete" :
                {
                 "aces" :
                  {
                   "it" :
                    {
                     "subject" :
                      {
                       "k" : "2147483649",
                       "id" : "ADMIN",
                       "n" : "Пользователь",
                       "vis" : "1",
                       "type" : "User",
                       "sid" :
                        {
                         "sid" : "PS-1-1",
                         "type" : "User"
                        }
                      },
                     "allow" : "1"
                    }
                  }
                },
               "mandatory" :
                {
                 "accessToken" :
                  {
                   "its" :
                    {
                     "it" :
                      [
                        {
                         "category" :
                          {
                           "k" : "1",
                           "id" : "КАТЕГОРИЯ",
                           "n" : "КАТЕГОРИЯ",
                           "vis" : "1"
                          },
                         "level" :
                          {
                           "k" : "0",
                           "id" : "Нет доступа",
                           "n" : "Нет доступа",
                           "vis" : "1"
                          }
                        }
                      ]
                    }
                  }
                }
              }
            ]
          }
        }
      },
     "bisearchEnable" : "Full",
     "apply" :
      {
       "onCredentialsRequired" :
        {
         "logonParams" :
          {
           "descr" : "Введите имя и пароль пользователя, обладающего правами создания таблиц в базе данных 'База данных'",
           "realm" : "OBJ21909",
           "toAdmin" : "1",
           "logonData" :
            {
             "driver" : "MSSQL2012",
             "server" : "test-server",
             "database" : "Warehouse"
            }
          }
        }
      }
    }
  }
}


public static GetMbSecResult GetObjectSecurityDescriptor(string mb, int[] objKeys)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var getMbSec = new GetMbSec()
    {
        tArg = new GetMbSecArg()
        {
            pattern = new MbSecMdPattern()
            {
                objects = true,
                objectsFilter = new MbSecOdFilter()
                {
                    keys = objKeys
                }
            }
        },
        tMbSec = new MbId() { id = mb }
    };
    //Получение описания безопасности объектов
    var result = somClient.GetMbSec(getMbSec);
    return result;
}


См. также:


[GetMbSec:
 Операция](../GetMbSec.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
