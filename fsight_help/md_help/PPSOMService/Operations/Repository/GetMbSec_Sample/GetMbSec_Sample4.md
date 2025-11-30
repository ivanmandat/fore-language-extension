# Получение информации о структуре атрибутного доступа: Операция GetMbSec

Получение информации о структуре атрибутного доступа: Операция GetMbSec
-


**


# Получение информации о структуре атрибутного доступа


Ниже приведён пример использования операции [GetMbSec](../GetMbSec.htm)
 для получения информации о структуре атрибутного доступа. В запросе передаётся
 моникёр соединения с репозиторием. В ответе возвращается полученная информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMbSec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbSec xmlns="****">
  <id>PCGKENPODPGEGOAEBLFFGBMAHOGHMEGEBKOBBHAIGEIMEDDN!M</id>  </tMbSec>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
[![](../../../minus.gif)](../../../#)<policy>
[![](../../../minus.gif)](../../../#)<abacRules>
  <op>Get</op>  </abacRules>
  </policy>
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
  <id>PCGKENPODPGEGOAEBLFFGBMAHOGHMEGEBKOBBHAIGEIMEDDN!M</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<policy>
[![](../../../minus.gif)](../../../#)<abacRules>
  <alg>DenyOverride</alg>[![](../../../minus.gif)](../../../#)<policySets>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Набор</n>  <id>PLCST1</id>  <description />
  <k>1</k>[![](../../../minus.gif)](../../../#)<target>
  <n>OBJECT.CLASS</n>  <op>Equal</op>  <val>1295</val>  </target>
  <active>1</active>  <alg>DenyOverride</alg>[![](../../../minus.gif)](../../../#)<policies>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Чтение</n>  <id>PLC1</id>  <description />
  <k>2</k>[![](../../../minus.gif)](../../../#)<target>
  <n>OPERATION</n>  <op>Equal</op>  <val>1048576</val>  </target>
  <active>1</active>  <alg>PermitOverride</alg>[![](../../../minus.gif)](../../../#)<rules>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Правило</n>  <id>RULE1</id>  <description />
  <k>3</k>[![](../../../minus.gif)](../../../#)<target>
  <n />
  <op>Empty</op>  <val />
  </target>
  <active>1</active>  <condition>ABAC.INTERSECC("NAME",SUBJECT.GROUPS,OBJECT.R_GROUPS) And ABAC.INTERSECC("NAME",SUBJECT.GROUPS,OBJECT.ORG_GROUPS)</condition>  <effect>Permit</effect>  </Item>
  </its>
  </rules>
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Запись</n>  <id>PLC10</id>  <description />
  <k>10</k>[![](../../../minus.gif)](../../../#)<target>
  <n>OPERATION</n>  <op>Equal</op>  <val>2097152</val>  </target>
  <active>1</active>  <alg>PermitOverride</alg>[![](../../../minus.gif)](../../../#)<rules>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Правило</n>  <id>RULE11</id>  <description />
  <k>11</k>[![](../../../minus.gif)](../../../#)<target>
  <n />
  <op>Empty</op>  <val />
  </target>
  <active>1</active>  <condition>ABAC.INTERSECC("NAME",SUBJECT.GROUPS,OBJECT.W_GROUPS) And ABAC.INTERSECC("NAME",SUBJECT.GROUPS,OBJECT.ORG_GROUPS)</condition>  <effect>Permit</effect>  </Item>
  </its>
  </rules>
  </Item>
  </its>
  </policies>
[![](../../../minus.gif)](../../../#)<policySets>
  <its />
  </policySets>
  </Item>
  </its>
  </policySets>
  </abacRules>
  </policy>
  <bisearchEnable>Disable</bisearchEnable>  </meta>
  </GetMbSecResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMbSec" :
  {
   "tMbSec" :
    {
     "id" : "PCGKENPODPGEGOAEBLFFGBMAHOGHMEGEBKOBBHAIGEIMEDDN!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "policy" :
        {
         "abacRules" :
          {
           "op" : "Get"
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
     "id" : "PCGKENPODPGEGOAEBLFFGBMAHOGHMEGEBKOBBHAIGEIMEDDN!M"
    },
   "meta" :
    {
     "policy" :
      {
       "abacRules" :
        {
         "alg" : "DenyOverride",
         "policySets" :
          {
           "its" :
            {
             "Item" :
              {
               "n" : "Набор",
               "id" : "PLCST1",
               "description" : "",
               "k" : "1",
               "target" :
                {
                 "n" : "OBJECT.CLASS",
                 "op" : "Equal",
                 "val" : "1295"
                },
               "active" : "1",
               "alg" : "DenyOverride",
               "policies" :
                {
                 "its" :
                  {
                   "Item" :
                    [
                      {
                       "n" : "Чтение",
                       "id" : "PLC1",
                       "description" : "",
                       "k" : "2",
                       "target" :
                        {
                         "n" : "OPERATION",
                         "op" : "Equal",
                         "val" : "1048576"
                        },
                       "active" : "1",
                       "alg" : "PermitOverride",
                       "rules" :
                        {
                         "its" :
                          {
                           "Item" :
                            {
                             "n" : "Правило",
                             "id" : "RULE1",
                             "description" : "",
                             "k" : "3",
                             "target" :
                              {
                               "n" : "",
                               "op" : "Empty",
                               "val" : ""
                              },
                             "active" : "1",
                             "condition" : "ABAC.INTERSECC("NAME",SUBJECT.GROUPS,OBJECT.R_GROUPS) And ABAC.INTERSECC("NAME",SUBJECT.GROUPS,OBJECT.ORG_GROUPS)",
                             "effect" : "Permit"
                            }
                          }
                        }
                      },
                      {
                       "n" : "Запись",
                       "id" : "PLC10",
                       "description" : "",
                       "k" : "10",
                       "target" :
                        {
                         "n" : "OPERATION",
                         "op" : "Equal",
                         "val" : "2097152"
                        },
                       "active" : "1",
                       "alg" : "PermitOverride",
                       "rules" :
                        {
                         "its" :
                          {
                           "Item" :
                            {
                             "n" : "Правило",
                             "id" : "RULE11",
                             "description" : "",
                             "k" : "11",
                             "target" :
                              {
                               "n" : "",
                               "op" : "Empty",
                               "val" : ""
                              },
                             "active" : "1",
                             "condition" : "ABAC.INTERSECC("NAME",SUBJECT.GROUPS,OBJECT.W_GROUPS) And ABAC.INTERSECC("NAME",SUBJECT.GROUPS,OBJECT.ORG_GROUPS)",
                             "effect" : "Permit"
                            }
                          }
                        }
                      }
                    ]
                  }
                },
               "policySets" :
                {
                 "its" : ""
                }
              }
            }
          }
        }
      },
     "bisearchEnable" : "Disable"
    }
  }
}


public static GetMbSecResult GetABACRules(string mb)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetMbSec()
    {
        tArg = new GetMbSecArg()
        {
            pattern = new MbSecMdPattern()
            {
                policy = new MbSecPolicyPattern()
                {
                    abacRules = new MbSecAbacRulesPattern()
                    {
                        op = ListOperation.Get
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
