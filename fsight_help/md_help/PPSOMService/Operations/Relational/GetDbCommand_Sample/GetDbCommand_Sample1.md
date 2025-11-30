# Получение результата выполнения запроса: Операция GetDbCommand

Получение результата выполнения запроса: Операция GetDbCommand
-


**


# Получение результата выполнения запроса


Ниже приведен пример использования операции [GetDbCommand](../GetDbCommand.htm)
 для получения набора данных, который будет получен при выполнении объекта
 репозитория - Запрос. В запросе передается моникёр открытого экземпляра
 объекта и шаблон, указывающий необходимость получить результирующий набор
 данных. В ответе приходит запрошенная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetDbCommand xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tDbCommand xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO</id>  </tDbCommand>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <rows>true</rows>  </pattern>
  </tArg>
  </GetDbCommand>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetDbCommandResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**14**" hf="**0**">
  <i>T_QUERY</i>  <n>Query</n>  <k>9051</k>  <c>770</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>  <type>Query</type>[![](../../../minus.gif)](../../../#)<rows>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<r>
  <it>RU</it>  <it>Russia</it>  <it>143666931</it>  <it>17125187</it>  <it>Russian ruble (RUB)</it>  </r>
[![](../../../minus.gif)](../../../#)<r>
  <it>US</it>  <it>United States of America</it>  <it>320194478</it>  <it>9519431</it>  <it>United States dollar ($) (USD)</it>  </r>
  </its>
  </rows>
  </meta>
  </GetDbCommandResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDbCommand" :
  {
   "tDbCommand" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "rows" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetDbCommandResult" :
  {
   "id" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MKMLJCMFKABODGOAELEAAIAKKFADKILKEJLMIMPHCMKJAKDKO"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "14",
         "@hf" : "0",
         "i" : "T_QUERY",
         "n" : "Query",
         "k" : "9051",
         "c" : "770",
         "p" : "9050",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "type" : "Query",
     "rows" :
      {
       "its" :
        {
         "r" :
          [
            {
             "it" :
              [
                "RU",
                "Russia",
                "143666931",
                "17125187",
                "Russian ruble (RUB)"
              ]
            },
            {
             "it" :
              [
                "US",
                "United States of America",
                "320194478",
                "9519431",
                "United States dollar ($) (USD)"
              ]
            }
          ]
        }
      }
    }
  }
}


public static GetDbCommandResult GetQueryResult(DbCommandId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDbCommand()
    {
        tArg = new GetDbCommandArg()
        {
            pattern = new DbCommandMdPattern()
            {
                rows = true
            }
        },
        tDbCommand = moniker
    };
    //Получение данных
    var tResult = somClient.GetDbCommand(tGet);
    return tResult;
}


См. также:


[GetDbCommand](../GetDbCommand.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
