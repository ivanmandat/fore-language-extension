# Удаление элементов: Операция SetRdsElements

Удаление элементов: Операция SetRdsElements
-


**


# Удаление элементов


Ниже приведен пример использования операции [SetRdsElements](../SetRdsElements.htm)
 для удаления элементов в справочнике НСИ. В запросе передаются ключи удаляемых
 элементов. В ответе приходит количество удаленных элементов.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetRdsElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tRds xmlns="****">
  <id>S1!M!S!N5</id>  </tRds>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <op>Unknown</op>[![](../../../minus.gif)](../../../#)<key>
  <key />
  </key>
[![](../../../minus.gif)](../../../#)<del>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <key>4</key>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <key>3</key>  </it>
  </its>
  </del>
  </tArg>
  </SetRdsElements>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetRdsElementsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!N5</id>  </id>
[![](../../../minus.gif)](../../../#)<key xmlns="****">
  <key />
  </key>
[![](../../../minus.gif)](../../../#)<del xmlns="****">
  <count>2</count>  </del>
  </SetRdsElementsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetRdsElements" :
  {
   "tRds" :
    {
     "id" : "S1!M!S!N5"
    },
   "tArg" :
    {
     "op" : "Unknown",
     "key" :
      {
       "key" : ""
      },
     "del" :
      {
       "its" :
        {
         "it" :
          [
            {
             "key" : "4"
            },
            {
             "key" : "3"
            }
          ]
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetRdsElementsResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!N5"
    },
   "key" :
    {
     "key" : ""
    },
   "del" :
    {
     "count" : "2"
    }
  }
}


public static SetRdsElementsResult DeleteRDSElements(RdsId moniker, ElKey[] elements)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tSet = new SetRdsElements()
    {
        tArg = new SetRdsElementsArg()
        {
            key = new ElKey()
            {
                key = string.Empty
            },
            del = new RdsDeleteElementsArg()
            {
                its = elements
            }
        },
        tRds = moniker
    };
    //Удаление элементов
    var tResult = somClient.SetRdsElements(tSet);
    return tResult;
}


См. также:


[SetRdsElements](../SetRdsElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
