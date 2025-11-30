# GetMbCheckSum: Операция

GetMbCheckSum: Операция
-


**


# GetMbCheckSum


## Синтаксис


Result GetMbCheckSum(MbCheckSumId tMbCheckSum, GetMbCheckSumArg
 tArg)


## Параметры


tMbCheckSum. Моникёр
 для работы с контрольными суммами.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetMbCheckSum получает
 информацию об объектах, для которых считаются контрольные суммы.


## Комментарии


Для выполнения операции укажите в поле tMbCheckSum
 моникёр для работы контрольными суммами, а в поле tArg
 параметры получения информации об объектах. Моникёр может быть получен
 при выполнении операции [OpenMbCheckSum](OpenMbCheckSum.htm).
 Результатом операции будет информация об объектах.


## Пример


Ниже приведён пример получения информации об объектах, для которых рассчитывались
 контрольные суммы. В запросе передаётся моникёр для работы с контрольными
 суммами. В ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetMbCheckSum xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMbCheckSum xmlns="****">
  <id>S1!M!S!MbCheckSum2</id>  </tMbCheckSum>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <itemsOperation>Get</itemsOperation>  </pattern>
  </tArg>
  </GetMbCheckSum>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetMbCheckSumResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!MbCheckSum2</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<items>
[![](../../minus.gif)](../../#)<it>
  <k>8788</k>  <id>OBJ8788</id>  <n>Форма</n>  <vis>1</vis>  <status>Identical</status>  <hash>BrLrPuFqHlGtJzNsAoAnByNoDkMpBsGx</hash>[![](../../minus.gif)](../../#)<object ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>OBJ8788</i>  <n>Форма</n>  <k>8788</k>  <c>1538</c>  <p>8777</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </object>
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>8784</k>  <id>OBJ8784</id>  <n>Аналитическая панель</n>  <vis>1</vis>  <status>Identical</status>  <hash>EpByCwIkDxBpKwLwOpAoEpGvEmCtOmDx</hash>[![](../../minus.gif)](../../#)<object ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>OBJ8784</i>  <n>Аналитическая панель</n>  <k>8784</k>  <c>8448</c>  <p>8777</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </object>
  </it>
  </items>
  </meta>
  </GetMbCheckSumResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMbCheckSum" :
  {
   "tMbCheckSum" :
    {
     "id" : "S1!M!S!MbCheckSum2"
    },
   "tArg" :
    {
     "pattern" :
      {
       "itemsOperation" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "GetMbCheckSumResult" :
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


public static GetMbCheckSumResult GetCheckSum(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetMbCheckSum()
    {
        tArg = new GetMbCheckSumArg()
        {
            pattern = new MbCheckSumMdPattern()
            {
                itemsOperation = ListOperation.Get
            },
        },
        tMbCheckSum = new MbCheckSumId() { id = moniker }
    };
    // Просмотр информации о контрольных суммах
    var result = somClient.GetMbCheckSum(tGet);
    return result;
}


См. также:


[Операции
 для работы с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
