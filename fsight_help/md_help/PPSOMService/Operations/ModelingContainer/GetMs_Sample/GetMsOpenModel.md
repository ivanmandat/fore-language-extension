# Открытие модели

Открытие модели
-


**


# Открытие модели


Ниже приведен пример использования операции [GetMs](../GetMs.htm)
 для открытия модели. В запросе передается экземпляр открытого контейнера
 моделирования и шаблон для открытия модели. В ответе приходит открытая
 модель.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMs xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE</id>  </tMs>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <scenarios>Get</scenarios>  <period>true</period>[![](../../../minus.gif)](../../../#)<item>
  <key>306669</key>[![](../../../minus.gif)](../../../#)<model>
[![](../../../minus.gif)](../../../#)<transform>
  <inputs>Get</inputs>  <outputs>Get</outputs>  <kind>true</kind>  </transform>
  </model>
  </item>
  </pattern>
  </tArg>
  </GetMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="**ключ 306480**" isShortcut="**0**" isLink="**0**" ver="**6**" hf="**0**">
  <i>MODELSPACE</i>  <n>Контейнер моделирования</n>  <k>306480</k>  <c>5121</c>  <p>1580</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<period>
  <start>1968-12-08</start>  <end>2022-12-31</end>  </period>
[![](../../../minus.gif)](../../../#)<scenarios>
[![](../../../minus.gif)](../../../#)<nodes>
[![](../../../minus.gif)](../../../#)<it isFolder="**0**">
  <k>306497</k>  <id>OBJ306497</id>  <n>Базовый</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<scenDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>OBJ306497</i>  <n>Базовый</n>  <k>306497</k>  <c>5124</c>  <p>306485</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </scenDesc>
  <internalKey>306497</internalKey>  </it>
  </nodes>
  </scenarios>
[![](../../../minus.gif)](../../../#)<item>
  <k>306669</k>  <id>OBJ306669</id>  <n>Модель</n>  <vis>1</vis>  <type>Problem</type>  </item>
  </meta>
  </GetMsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMs" :
  {
   "tMs" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "scenarios" : "Get",
       "period" : "true",
       "item" :
        {
         "key" : "306669",
         "model" :
          {
           "transform" :
            {
             "inputs" : "Get",
             "outputs" : "Get",
             "kind" : "true"
            }
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetMsResult" :
  {
   "id" :
    {
     "id" : "GEGBFKLHGPMOFOAEIMFEBNKILLAKNJBEIKKFGPFLECLAJIMA!M!S!CEDFMNBMHGPMOFOAEEOKCHDKLPKPFFKNEILBKMMPKNGGGFEEE"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "ключ 306480",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "6",
         "@hf" : "0",
         "i" : "MODELSPACE",
         "n" : "Контейнер моделирования",
         "k" : "306480",
         "c" : "5121",
         "p" : "1580",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "period" :
      {
       "start" : "1968-12-08",
       "end" : "2022-12-31"
      },
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
      },
     "item" :
      {
       "k" : "306669",
       "id" : "OBJ306669",
       "n" : "Модель",
       "vis" : "1",
       "type" : "Problem"
      }
    }
  }
}


public static MsItem GetMsOpenModel(MsId ms, uint modelKey)
{
    // Задаём параметры выполнения операции
    var getMsOp = new GetMs()
    {
        tArg = new GetMsArg()
        {  // Задаём общий шаблон извлечения данных
            pattern = new MsMdPattern()
            {
                scenarios = ListOperation.Get,
                period = true,
                item = new MsItemPattern()
                {
                    // Ключ открываемой модели
                    key = modelKey,
                    model = new MsModelPattern()
                    {
                        transform = new MsFormulaTransformPattern()
                        {
                            kind = true,
                            inputs = ListOperation.Get,
                            outputs = ListOperation.Get
                        }
                    }
                }
            }
        },
        tMs = ms
    };
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Открываем модель
    var result = somClient.GetMs(getMsOp);
    return result.meta.item;
}


См. также:


[GetMs: Операция](../GetMs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
