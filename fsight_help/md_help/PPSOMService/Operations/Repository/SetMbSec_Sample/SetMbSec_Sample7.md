# Создание атрибута доступа для объектов репозитория: Операция SetMbSec

Создание атрибута доступа для объектов репозитория: Операция SetMbSec
-


**


# Создание атрибута доступа для объектов репозитория


Ниже приведён пример использования операции [SetMbSec](../SetMbSec.htm)
 для создания атрибута доступа, который будет задаваться для объектов репозитория.
 В запросе передаётся моникёр соединения с репозиторием, метаданные создаваемого
 атрибута и шаблон, указывающий выполняемое действие. В ответе возвращается
 обновлённый список атрибутов, созданных для объектов репозитория.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMbSec xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbSec xmlns="****">
  <id>OPDDHJLMNAHEGOAECCMGGNONOJPPADBECIAFGNMNAKEEBIFB!M</id>  </tMbSec>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
[![](../../../minus.gif)](../../../#)<abacAttr>
  <op>Add</op>  <type>Global</type>  </abacAttr>
  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<abacObjAttrs>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Маска на возможность извлечения данных</n>  <id>ABAC_READDATA</id>  <k>2147483647</k>  <dataType>Integer</dataType>  <defaultValue>1</defaultValue>  </Item>
  </its>
  </abacObjAttrs>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
[![](../../../minus.gif)](../../../#)<pattern>
[![](../../../minus.gif)](../../../#)<abacAttr>
  <op>Get</op>  <type>Global</type>  </abacAttr>
  </pattern>
  </metaGet>
  </tArg>
  </SetMbSec>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMbSecResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>OPDDHJLMNAHEGOAECCMGGNONOJPPADBECIAFGNMNAKEEBIFB!M</id>  </id>
[![](../../../minus.gif)](../../../#)<metaGet xmlns="****">
[![](../../../minus.gif)](../../../#)<id>
  <id>OPDDHJLMNAHEGOAECCMGGNONOJPPADBECIAFGNMNAKEEBIFB!M</id>  </id>
[![](../../../minus.gif)](../../../#)<meta>
  <bisearchEnable>Disable</bisearchEnable>[![](../../../minus.gif)](../../../#)<abacObjAttrs>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Маска прав доступа</n>  <id>RIGHTS</id>  <description />
  <k>1</k>  <dataType>String</dataType>  <defaultValue />
  <UI />
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Маска блоков (РЭН, ТПР, ОНИМ)</n>  <id>UNIT</id>  <description />
  <k>2</k>  <dataType>String</dataType>  <defaultValue />
  <UI />
  </Item>
[![](../../../minus.gif)](../../../#)<Item>
  <n>Маска на возможность извлечения данных</n>  <id>ABAC_READDATA</id>  <description />
  <k>3</k>  <dataType>Integer</dataType>  <defaultValue>1</defaultValue>  <UI />
  </Item>
  </its>
  </abacObjAttrs>
  </meta>
  </metaGet>
  </SetMbSecResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMbSec" :
  {
   "tMbSec" :
    {
     "id" : "OPDDHJLMNAHEGOAECCMGGNONOJPPADBECIAFGNMNAKEEBIFB!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "abacAttr" :
        {
         "op" : "Add",
         "type" : "Global"
        }
      },
     "meta" :
      {
       "abacObjAttrs" :
        {
         "its" :
          {
           "Item" :
            {
             "n" : "Маска на возможность извлечения данных",
             "id" : "ABAC_READDATA",
             "k" : "2147483647",
             "dataType" : "Integer",
             "defaultValue" : "1"
            }
          }
        }
      },
     "metaGet" :
      {
       "pattern" :
        {
         "abacAttr" :
          {
           "op" : "Get",
           "type" : "Global"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetMbSecResult" :
  {
   "id" :
    {
     "id" : "OPDDHJLMNAHEGOAECCMGGNONOJPPADBECIAFGNMNAKEEBIFB!M"
    },
   "metaGet" :
    {
     "id" :
      {
       "id" : "OPDDHJLMNAHEGOAECCMGGNONOJPPADBECIAFGNMNAKEEBIFB!M"
      },
     "meta" :
      {
       "bisearchEnable" : "Disable",
       "abacObjAttrs" :
        {
         "its" :
          {
           "Item" :
            [
              {
               "n" : "Маска прав доступа",
               "id" : "RIGHTS",
               "description" : "",
               "k" : "1",
               "dataType" : "String",
               "defaultValue" : "",
               "UI" : ""
              },
              {
               "n" : "Маска блоков (РЭН, ТПР, ОНИМ)",
               "id" : "UNIT",
               "description" : "",
               "k" : "2",
               "dataType" : "String",
               "defaultValue" : "",
               "UI" : ""
              },
              {
               "n" : "Маска на возможность извлечения данных",
               "id" : "ABAC_READDATA",
               "description" : "",
               "k" : "3",
               "dataType" : "Integer",
               "defaultValue" : "1",
               "UI" : ""
              }
            ]
          }
        }
      }
    }
  }
}


public static SetMbSecResult AddABACObjectAttrs(string mb)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetMbSec()
    {
        tArg = new SetMbSecArg()
        {
            meta = new MbSecMd()
            {
                abacObjAttrs = new MbSecAbacAttributes()
                {
                    its = new MbSecAbacAttribute[]
                    {
                        new MbSecAbacAttribute()
                        {
                            dataType = MbSecAbacDataType.Integer,
                            id = "ABAC_READDATA",
                            n = "Маска на возможность извлечения данных",
                            defaultValue = "1",
                            k = int.MaxValue
                        }
                    }
                }
            },
            pattern = new MbSecMdPattern()
            {
                abacAttr = new MbSecAbacPatternFilter()
                {
                    op = ListOperation.Add,
                    type = MbSecAbacAttrType.Global
                }
            },
            metaGet = new GetMbSecArg()
            {
                pattern = new MbSecMdPattern()
                {
                    abacAttr = new MbSecAbacPatternFilter()
                    {
                        op = ListOperation.Get,
                        type = MbSecAbacAttrType.Global
                    }
                }
            }
        },
        tMbSec = new MbId() { id = mb }
    };
    // Создание атрибута доступа у объектов репозитория
    var result = somClient.SetMbSec(tSet);
    return result;
}


См. также:


[SetMbSec:
 Операция](../SetMbSec.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
