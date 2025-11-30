# Открытие контейнера моделирования с извлечением данных о сценариях

Открытие контейнера моделирования с извлечением данных о сценариях
-


**


# Открытие контейнера моделирования с извлечением данных о сценариях


Приведено использование операции [OpenMs](../OpenMs.htm)
 для открытия контейнера моделирования. В запросе передаются: моникёр контейнера
 и шаблон получения данных. В ответе приходят: моникёр открытого экземпляра
 контейнера моделирования и данные о сценариях контейнера.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<OpenMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tOb xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!306480</id>  </tOb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <args />
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>false</obInst>  <all>false</all>  <scenarios>Get</scenarios>  <period>false</period>  </metaGet>
  </tArg>
  </OpenMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<OpenMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CKHMBBEMHGPMOFOAEFJLGEGOGHKBCBLNEIJJACPIMKMHIKJIC</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<scenarios>
[![](../../../minus.gif)](../../../#)<nodes>
[![](../../../minus.gif)](../../../#)<it isFolder="**0**">
  <k>306497</k>  <id>OBJ306497</id>  <n>Базовый</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<scenDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>OBJ306497</i>  <n>Базовый</n>  <k>306497</k>  <c>5124</c>  <p>306485</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </scenDesc>
  <internalKey>306497</internalKey>  </it>
  </nodes>
  </scenarios>
  </meta>
  <readOnly xmlns="****">0</readOnly>  </OpenMsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenMs" :
  {
   "tOb" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!306480"
    },
   "tArg" :
    {
     "args" : "",
     "metaGet" :
      {
       "obInst" : "false",
       "all" : "false",
       "scenarios" : "Get",
       "period" : "false"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenMsResult" :
  {
   "id" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CKHMBBEMHGPMOFOAEFJLGEGOGHKBCBLNEIJJACPIMKMHIKJIC"
    },
   "meta" :
    {
     "scenarios" :
      {
       "nodes" :
        {
         "it" :
          {
           "@isFolder" : "0",
           "k" : "306497",
           "id" : "OBJ306497",
           "n" : "Базовый",
           "vis" : "1",
           "scenDesc" :
            {
             "@ds" : "",
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@ver" : "2",
             "@hf" : "0",
             "i" : "OBJ306497",
             "n" : "Базовый",
             "k" : "306497",
             "c" : "5124",
             "p" : "306485",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0",
             "trackElementDependents" : "0"
            },
           "internalKey" : "306497"
          }
        }
      }
    },
   "readOnly" : "0"
  }
}


public static MsScenarioTree OpenMsMeta(MbId mb, string msId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    // Задаём параметры выполнения операции
    var tMsOp = new OpenMs()
    {
        tArg = new OpenMsArg()
        {
            // Задаём параметры октрытия контейнера
            args = new MsOpenArgs(),
            // Задаём шаблон получения данных
            metaGet = new MsMdPattern()
            {
                all = false,
                obInst = false,
                period = false,
                scenarios = ListOperation.Get
            }
        },
        // Формируем моникер контейнера моделирования
        tOb = new OdId() { id = mb.id + "!" + FindObjectById(mb, msId).k }
    };
    // Открываем контейнер моделирования с запросом метаданных
    var result = somClient.OpenMs(tMsOp);
    return result.meta.scenarios;
}


См. также:


[OpenMs:
 Операция](../OpenMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
