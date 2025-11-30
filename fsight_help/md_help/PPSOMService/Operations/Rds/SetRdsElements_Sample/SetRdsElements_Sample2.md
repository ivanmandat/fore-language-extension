# Обновление информации об элементе: Операция SetRdsElements

Обновление информации об элементе: Операция SetRdsElements
-


**


# Обновление информации об элементе


Ниже приведен пример использования операции [SetRdsElements](../SetRdsElements.htm)
 для обновления информации об элементе справочника НСИ. В запросе передается
 ключ элемента и новая информация о нем. В ответе приходит ключ элемента,
 для которого выполнялась операция.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetRdsElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tRds xmlns="****">
  <id>S1!M!S!N5</id>  </tRds>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <op>Update</op>[![](../../../minus.gif)](../../../#)<key>
  <key>3</key>  </key>
[![](../../../minus.gif)](../../../#)<data>
  <n>Новое наименование</n>  <k>3</k>  <h>false</h>  <o>0</o>  </data>
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
  <key>3</key>  </key>
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
     "op" : "Update",
     "key" :
      {
       "key" : "3"
      },
     "data" :
      {
       "n" : "Новое наименование",
       "k" : "3",
       "h" : "false",
       "o" : "0"
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
     "key" : "3"
    }
  }
}


public static SetRdsElementsResult UpdateRdsElementInfo(RdsId moniker, string elementKey, string newElementName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tSet = new SetRdsElements()
    {
        tArg = new SetRdsElementsArg()
        {
            op = RdsElementOperation.Update,
            //Ключ обновляемого элемента
            key = new ElKey()
            {
                key = elementKey
            },
            data = new ElData()
            {
                k = elementKey,
                n = newElementName
            }
        },
        tRds = moniker
    };
    //Обновление информации по элементу
    var tResult = somClient.SetRdsElements(tSet);
    return tResult;
}


См. также:


[SetRdsElements](../SetRdsElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
