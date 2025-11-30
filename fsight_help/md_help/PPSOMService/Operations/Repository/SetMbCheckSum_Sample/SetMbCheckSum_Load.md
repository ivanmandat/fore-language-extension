# Загрузка контрольных сумм из файла и проверка объектов в репозитории

Загрузка контрольных сумм из файла и проверка объектов в репозитории
-


**


# Загрузка контрольных сумм из файла и проверка объектов в репозитории


Ниже приведён пример использования операции [SetMbCheckSum](../SetMbCheckSum.htm)
 для загрузки контрольных сумм и проверки объектов репозитория. В запросе
 передаётся моникёр файла с контрольными суммами. В ответе приходит информация
 об объектах репозитория, для каждого объекта будет получен результат проверки
 контрольных сумм.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMbCheckSum xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbCheckSum xmlns="****">
  <id>S1!M!S!MbCheckSum2</id>  </tMbCheckSum>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <pattern />
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<load>
[![](../../../minus.gif)](../../../#)<binaryId>
  <id>S1!M!Bin!0</id>  </binaryId>
  </load>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <itemsOperation>Get</itemsOperation>  </metaGet>
  </tArg>
  </SetMbCheckSum>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMbCheckSumResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!MbCheckSum2</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<items>
[![](../../../minus.gif)](../../../#)<it>
  <k>8788</k>  <id>OBJ8788</id>  <n>Форма</n>  <vis>1</vis>  <status>Identical</status>  <hash>BrLrPuFqHlGtJzNsAoAnByNoDkMpBsGx</hash>[![](../../../minus.gif)](../../../#)<object ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>OBJ8788</i>  <n>Форма</n>  <k>8788</k>  <c>1538</c>  <p>8777</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </object>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>8784</k>  <id>OBJ8784</id>  <n>Аналитическая панель</n>  <vis>1</vis>  <status>Identical</status>  <hash>EpByCwIkDxBpKwLwOpAoEpGvEmCtOmDx</hash>[![](../../../minus.gif)](../../../#)<object ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>OBJ8784</i>  <n>Аналитическая панель</n>  <k>8784</k>  <c>8448</c>  <p>8777</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </object>
  </it>
  </items>
  </meta>
  </SetMbCheckSumResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMbCheckSum" :
  {
   "tMbCheckSum" :
    {
     "id" : "S1!M!S!MbCheckSum2"
    },
   "tArg" :
    {
     "pattern" : "",
     "meta" :
      {
       "load" :
        {
         "binaryId" :
          {
           "id" : "S1!M!Bin!0"
          }
        }
      },
     "metaGet" :
      {
       "itemsOperation" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "SetMbCheckSumResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!MbCheckSum2"
    },
   "meta" :
    {
     "items" :
      {
       "it" :
        [
          {
           "k" : "8788",
           "id" : "OBJ8788",
           "n" : "Форма",
           "vis" : "1",
           "status" : "Identical",
           "hash" : "BrLrPuFqHlGtJzNsAoAnByNoDkMpBsGx",
           "object" :
            {
             "@ds" : "",
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@ver" : "0",
             "@hf" : "0",
             "i" : "OBJ8788",
             "n" : "Форма",
             "k" : "8788",
             "c" : "1538",
             "p" : "8777",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0"
            }
          },
          {
           "k" : "8784",
           "id" : "OBJ8784",
           "n" : "Аналитическая панель",
           "vis" : "1",
           "status" : "Identical",
           "hash" : "EpByCwIkDxBpKwLwOpAoEpGvEmCtOmDx",
           "object" :
            {
             "@ds" : "",
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@ver" : "1",
             "@hf" : "0",
             "i" : "OBJ8784",
             "n" : "Аналитическая панель",
             "k" : "8784",
             "c" : "8448",
             "p" : "8777",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0"
            }
          }
        ]
      }
    }
  }
}


public static SetMbCheckSumResult LoadCheckSum(string moniker, string checkSumBinaryId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetMbCheckSum()
    {
        tArg = new SetMbCheckSumArg()
        {
            pattern = new MbCheckSumMdPattern() {},
            meta = new MbCheckSumMd()
            {
                load = new MbCheckSumLoad() {  binaryId = new BinaryId() { id = checkSumBinaryId } }
            },
            metaGet = new MbCheckSumMdPattern()
            {
                itemsOperation = ListOperation.Get
            }
        },
        tMbCheckSum = new MbCheckSumId() { id = moniker }
    };
    // Загружаем контрольные суммы
    var result = somClient.SetMbCheckSum(tSet);
    return result;
}


См. также:


[SetMbCheckSum](../SetMbCheckSum.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
