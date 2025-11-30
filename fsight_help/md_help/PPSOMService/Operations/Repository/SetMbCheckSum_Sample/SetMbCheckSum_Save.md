# Расчёт контрольных сумм для объектов репозитория

Расчёт контрольных сумм для объектов репозитория
-


**


# Расчёт контрольных сумм для объектов репозитория


Ниже приведён пример использования операции [SetMbCheckSum](../SetMbCheckSum.htm)
 для расчёта контрольных сумм объектов репозитория и сохранения их в файл.
 В запросе передаются ключи объектов репозитория и пустое поле save,
 указывающее необходимость сохранить контрольные суммы. В ответе приходит
 информация о добавленных объектах и моникёр полученного файла с контрольными
 суммами.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMbCheckSum xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbCheckSum xmlns="****">
  <id>S1!M!S!MbCheckSum1</id>  </tMbCheckSum>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <itemsOperation>Add</itemsOperation>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<items>
[![](../../../minus.gif)](../../../#)<it>
  <k>8788</k>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>8784</k>  </it>
  </items>
  <save />
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
  <id>S1!M!S!MbCheckSum1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<items>
[![](../../../minus.gif)](../../../#)<it>
  <k>8788</k>  <id>OBJ8788</id>  <n>Форма</n>  <vis>1</vis>  <status>Undefined</status>  <hash>BrLrPuFqHlGtJzNsAoAnByNoDkMpBsGx</hash>[![](../../../minus.gif)](../../../#)<object ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>OBJ8788</i>  <n>Форма</n>  <k>8788</k>  <c>1538</c>  <p>8777</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </object>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>8784</k>  <id>OBJ8784</id>  <n>Аналитическая панель</n>  <vis>1</vis>  <status>Undefined</status>  <hash>EpByCwIkDxBpKwLwOpAoEpGvEmCtOmDx</hash>[![](../../../minus.gif)](../../../#)<object ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>OBJ8784</i>  <n>Аналитическая панель</n>  <k>8784</k>  <c>8448</c>  <p>8777</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </object>
  </it>
  </items>
[![](../../../minus.gif)](../../../#)<save>
[![](../../../minus.gif)](../../../#)<binaryId>
  <id>S1!M!Bin!0</id>  </binaryId>
  </save>
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
     "id" : "S1!M!S!MbCheckSum1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "itemsOperation" : "Add"
      },
     "meta" :
      {
       "items" :
        {
         "it" :
          [
            {
             "k" : "8788"
            },
            {
             "k" : "8784"
            }
          ]
        },
       "save" : ""
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
     "id" : "S1!M!S!MbCheckSum1"
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
           "status" : "Undefined",
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
           "status" : "Undefined",
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
      },
     "save" :
      {
       "binaryId" :
        {
         "id" : "S1!M!Bin!0"
        }
      }
    }
  }
}


public static SetMbCheckSumResult SaveCheckSum(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetMbCheckSum()
    {
        tArg = new SetMbCheckSumArg()
        {
            pattern = new MbCheckSumMdPattern()
            {
                itemsOperation = ListOperation.Add
            },
            meta = new MbCheckSumMd()
            {
                items = new MbCheckSumMdItem[]
                {
                    new MbCheckSumMdItem() { k = 8788 },
                    new MbCheckSumMdItem() { k = 8784 }
                },
                save = new MbCheckSumSave()
            },
            metaGet = new MbCheckSumMdPattern()
            {
                itemsOperation = ListOperation.Get
            }
        },
        tMbCheckSum = new MbCheckSumId() { id = moniker }
    };
    // Сохраняем контрольные суммы
    var result = somClient.SetMbCheckSum(tSet);
    return result;
}


См. также:


[SetMbCheckSum](../SetMbCheckSum.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
