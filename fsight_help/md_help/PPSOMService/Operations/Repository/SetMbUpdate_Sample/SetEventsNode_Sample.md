# Установка модуля обновления: Операция SetMbUpdate

Установка модуля обновления: Операция SetMbUpdate
-


**


# Установка модуля обновления


Ниже приведён пример использования операции [SetMbUpdate](../SetMbUpdate.htm)
 для задания модуля обновления в обновлении. Модуль должен быть [предварительно
 добавлен](AddObjectInUpdate_Sample.htm) в дерево элементов обновления. В запросе передаётся моникёр
 обновления и указывается ключ элемента в дереве, который соответствует
 модулю обновления. В ответе никакой дополнительной информации не возвращается.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetMbUpdate xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMbUpdate xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </tMbUpdate>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <pattern />
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<eventsNode>
  <k>2</k>  </eventsNode>
  </meta>
  </tArg>
  </SetMbUpdate>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetMbUpdateResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!MbUpd1</id>  </id>
  </SetMbUpdateResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMbUpdate" :
  {
   "tMbUpdate" :
    {
     "id" : "S1!M!S!MbUpd1"
    },
   "tArg" :
    {
     "pattern" : "",
     "meta" :
      {
       "eventsNode" :
        {
         "k" : "2"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetMbUpdateResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!MbUpd1"
    }
  }
}


public static SetMbUpdateResult SetEventsNode(string moniker, uint nodeKey)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetMbUpdate()
    {
        tArg = new SetMbUpdateArg()
        {
            pattern = new MbUpdateMdPattern() {},
            meta = new MbUpdateMd()
            {
                eventsNode = new MbUpdateNode() { k = nodeKey }
            },
        },
        tMbUpdate = new MbUpdateId() { id = moniker }
    };
    //Установка модуля обновления
    var result = somClient.SetMbUpdate(tSet);
    return result;
}


См. также:


[SetMbUpdate](../SetMbUpdate.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
