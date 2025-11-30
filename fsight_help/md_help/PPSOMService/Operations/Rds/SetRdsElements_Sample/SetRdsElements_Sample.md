# Вставка нового элемента: Операция SetRdsElements

Вставка нового элемента: Операция SetRdsElements
-


**


# Вставка нового элемента


Ниже приведен пример использования операции [SetRdsElements](../SetRdsElements.htm)
 для вставки нового элемента в справочник НСИ. Элемент добавляется в корень
 дерева элементов. Для вставки элемента указываются поля tArg.op
 и tArg.data. tArg.data
 содержит информацию об элементе. В ответе приходит ключ вставленного элемента.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetRdsElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tRds xmlns="****">
  <id>S1!M!S!N5</id>  </tRds>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <op>Insert</op>[![](../../../minus.gif)](../../../#)<key>
  <key />
  </key>
[![](../../../minus.gif)](../../../#)<data>
  <n>Элемент 1</n>  <k />
  <h>false</h>  <o>0</o>  </data>
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
     "op" : "Insert",
     "key" :
      {
       "key" : ""
      },
     "data" :
      {
       "n" : "Элемент 1",
       "k" : "",
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


public static SetRdsElementsResult InsertRdsElement(RdsId moniker, string elementName)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tSet = new SetRdsElements()
    {
        tArg = new SetRdsElementsArg()
        {
            op = RdsElementOperation.Insert,
            key = new ElKey()
            {
                key = string.Empty
            },
            //Информация о добавляемом элементе. Ключ не указывается, он будет сгенерирован при вставке
            data = new ElData()
            {
                k = string.Empty,
                n = elementName
            }
        },
        tRds = moniker
    };
    //Добавление элемента
    var tResult = somClient.SetRdsElements(tSet);
    return tResult;
}


См. также:


[SetRdsElements](../SetRdsElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
