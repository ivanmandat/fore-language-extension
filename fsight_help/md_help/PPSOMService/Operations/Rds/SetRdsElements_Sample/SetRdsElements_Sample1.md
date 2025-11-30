# Перемещение элементов: Операция SetRdsElements

Перемещение элементов: Операция SetRdsElements
-


**


# Перемещение элементов


Ниже приведен пример использования операции [SetRdsElements](../SetRdsElements.htm)
 для перемещения элементов в справочнике НСИ. В запросе передается ключ
 перемещаемого элемента и ключ элемента, относительно которого осуществляется
 перемещение, и позиция, в которую необходимо переместить элемент. В ответе
 приходит ключ перемещенного элемента.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetRdsElements xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tRds xmlns="****">
  <id>S1!M!S!N5</id>  </tRds>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <op>Update</op>[![](../../../minus.gif)](../../../#)<key>
  <key>4</key>  </key>
[![](../../../minus.gif)](../../../#)<moveTo>
[![](../../../minus.gif)](../../../#)<element>
  <key>3</key>  </element>
  <relation>FirstChild</relation>  </moveTo>
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
  <key>4</key>  </key>
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
       "key" : "4"
      },
     "moveTo" :
      {
       "element" :
        {
         "key" : "3"
        },
       "relation" : "FirstChild"
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
     "key" : "4"
    }
  }
}


public static SetRdsElementsResult MoveRdsElement(RdsId moniker, El[] elements)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операции
    //Параметры выполнения операции
    var tSet = new SetRdsElements()
    {
        tArg = new SetRdsElementsArg()
        {
            op = RdsElementOperation.Update,
            //Ключ перемещаемого элемента
            key = new ElKey()
            {
                key = elements[1].k
            },
            moveTo = new ElMoveInfo()
            {
                //Ключ элемента, относительно которого осуществляется перемещение
                element = new ElKey() { key = elements[0].k },
                relation = TreeRelation.FirstChild
            }
        },
        tRds = moniker
    };
    //Перемещение элемента
    var tResult = somClient.SetRdsElements(tSet);
    return tResult;
}


См. также:


[SetRdsElements](../SetRdsElements.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
