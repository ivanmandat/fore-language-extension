# Получение атрибутов доступа у пользователя: Операция GetMbSec

Получение атрибутов доступа у пользователя: Операция GetMbSec
-


**


# Получение атрибутов доступа у пользователя


Ниже приведён пример использования операции [GetMbSec](../GetMbSec.htm)
 для получения информации о значениях атрибутов доступа, которые заданы
 для администратора репозитория. В запросе передаётся моникёр соединения
 с репозиторием и идентификатор субъекта безопасности. В ответе возвращается
 полученная информация о значениях атрибутов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMbSec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbSec xmlns="****">
  <id>ONEANHNAHPGEGOAEPHDPDIAOJHKJAKIEMIKIKJONNFBGAFHD!M</id>  </tMbSec>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <abacUsVals>true</abacUsVals>[![](../../../minus.gif)](../../../#)<abacUsValsFilter>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <sid>PS-1-1</sid>  </Item>
  </its>
  </abacUsValsFilter>
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
  <id>ONEANHNAHPGEGOAEPHDPDIAOJHKJAKIEMIKIKJONNFBGAFHD!M</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
  <bisearchEnable>Disable</bisearchEnable>[![](../../../minus.gif)](../../../#)<abacUsVals>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
[![](../../../minus.gif)](../../../#)<subjFilter>
  <n>ADMIN</n>  <sid>PS-1-1</sid>  </subjFilter>
[![](../../../minus.gif)](../../../#)<attrs>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Организация</n>  <id>ORGANIZATION</id>  <description />
  <k>1</k>  <dataType>Integer</dataType>  <val>1</val>  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <n>РНУ</n>  <id>RNU</id>  <description />
  <k>2</k>  <dataType>Integer</dataType>  <val>-1</val>  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <n>ЛПДС</n>  <id>LPDS</id>  <description />
  <k>3</k>  <dataType>Integer</dataType>  <val>-1</val>  </Item>
  </its>
  </attrs>
  </Item>
  </its>
  </abacUsVals>
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
     "id" : "ONEANHNAHPGEGOAEPHDPDIAOJHKJAKIEMIKIKJONNFBGAFHD!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "abacUsVals" : "true",
       "abacUsValsFilter" :
        {
         "its" :
          {
           "Item" :
            {
             "sid" : "PS-1-1"
            }
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
     "id" : "ONEANHNAHPGEGOAEPHDPDIAOJHKJAKIEMIKIKJONNFBGAFHD!M"
    },
   "meta" :
    {
     "bisearchEnable" : "Disable",
     "abacUsVals" :
      {
       "its" :
        {
         "Item" :
          {
           "subjFilter" :
            {
             "n" : "ADMIN",
             "sid" : "PS-1-1"
            },
           "attrs" :
            {
             "its" :
              {
               "Item" :
                [
                  {
                   "n" : "Организация",
                   "id" : "ORGANIZATION",
                   "description" : "",
                   "k" : "1",
                   "dataType" : "Integer",
                   "val" : "1"
                  },
                  {
                   "n" : "РНУ",
                   "id" : "RNU",
                   "description" : "",
                   "k" : "2",
                   "dataType" : "Integer",
                   "val" : "-1"
                  },
                  {
                   "n" : "ЛПДС",
                   "id" : "LPDS",
                   "description" : "",
                   "k" : "3",
                   "dataType" : "Integer",
                   "val" : "-1"
                  }
                ]
              }
            }
          }
        }
      }
    }
  }
}


public static GetMbSecResult GetABACUserAttrs(string mb, string userSid)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetMbSec()
    {
        tArg = new GetMbSecArg()
        {
            pattern = new MbSecMdPattern()
            {
                abacUsVals = true,
                abacUsValsFilter = new MbSecSubjFilter()
                {
                    its = new AbacPatternFilter[]
                    {
                        new AbacPatternFilter()
                        {
                            sid = userSid
                        }
                    }
                }
            }
        },
        tMbSec = new MbId() { id = mb }
    };
    // Получение атрибутов доступа у пользователя
    var result = somClient.GetMbSec(tGet);
    return result;
}


См. также:


[GetMbSec:
 Операция](../GetMbSec.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
