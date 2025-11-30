# Получение информации о статусе выполнения задачи ETL: Операция GetEtl

Получение информации о статусе выполнения задачи ETL: Операция GetEtl
-


**


# Получение информации о статусе выполнения задачи ETL


Ниже приведен пример использования операции [GetEtl](../GetEtl.htm)
 для проверки статуса выполнения задачи ETL, которая была запущена с помощью
 операции [SetEtl](../SetEtl.htm). В запросе передается моникёр
 задачи ETL. В ответе приходит информация о статусе выполнения задачи и
 информация о возможных ошибках выполнения.


[![](../../../Opened.gif)![](../../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetEtl xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tEtl xmlns="****">
  <id>S1!M!S!L1</id>  </tEtl>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <execute>true</execute>  </pattern>
  </tArg>
  </GetEtl>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetEtlResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!L1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>ETL_INDICATOR</i>  <n>Задача ETL для загрузки показателей</n>  <k>7012</k>  <c>4097</c>  <p>7011</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../../minus.gif)](../../../#)<execute>
  <state>Finished</state>  <progress>0</progress>  <totalRec>584</totalRec>  <errorRec>0</errorRec>  <executionTime>140</executionTime>  </execute>
  </meta>
  </GetEtlResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../../Opened.gif)![](../../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetEtl" :
  {
   "tEtl" :
    {
     "id" : "S1!M!S!L1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "execute" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetEtlResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!L1"
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
         "@ver" : "3",
         "@hf" : "0",
         "i" : "ETL_INDICATOR",
         "n" : "Задача ETL для загрузки показателей",
         "k" : "7012",
         "c" : "4097",
         "p" : "7011",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "execute" :
      {
       "state" : "Finished",
       "progress" : "0",
       "totalRec" : "584",
       "errorRec" : "0",
       "executionTime" : "140"
      }
    }
  }
}


[![](../../../Opened.gif)![](../../../Closed.gif)C#](javascript:TextPopup(this))


public static GetEtlResult GetETLExecutingInfo(EtlId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetEtl()
    {
        tArg = new GetEtlArg()
        {
            pattern = new EtlMdPattern()
            {
                execute = true
            }
        },
        tEtl = moniker
    };
    //Получение информации о статусе выполнения задачи ETL
    var result = somClient.GetEtl(tGet);
    return result;
}


См. также:


[GetEtl:
 Операция](../GetEtl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
