# Удаление нескольких объектов: Операция DeleteObjects

Удаление нескольких объектов: Операция DeleteObjects
-


**


# Удаление нескольких объектов


Ниже приведен пример использования операции [DeleteObjects](../DeleteObjects.htm)
 для удаления нескольких объектов репозитория. В запросе передается моникёр
 соединения с репозиторием и описания удаляемых объектов.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<DeleteObjects xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tMb xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M</id>  </tMb>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<objects>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<d isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>NEWFORM1</i>  <n>NewForm1</n>  <k>305000</k>  <c>1538</c>  <p>65</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </d>
[![](../../../minus.gif)](../../../#)<d isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>NEWFORM2</i>  <n>NewForm2</n>  <k>305001</k>  <c>1538</c>  <p>65</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </d>
  </its>
  </objects>
  </tArg>
  </DeleteObjects>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
  <DeleteObjectsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" />
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "DeleteObjects" :
  {
   "tMb" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M"
    },
   "tArg" :
    {
     "objects" :
      {
       "its" :
        {
         "d" :
          [
            {
             "@isShortcut" : "false",
             "@isLink" : "false",
             "@hf" : "false",
             "i" : "NEWFORM1",
             "n" : "NewForm1",
             "k" : "305000",
             "c" : "1538",
             "p" : "65",
             "h" : "false",
             "hasPrv" : "false",
             "ic" : "false"
            },
            {
             "@isShortcut" : "false",
             "@isLink" : "false",
             "@hf" : "false",
             "i" : "NEWFORM2",
             "n" : "NewForm2",
             "k" : "305001",
             "c" : "1538",
             "p" : "65",
             "h" : "false",
             "hasPrv" : "false",
             "ic" : "false"
            }
          ]
        }
      }
    }
  }
}

### JSON-ответ:


{
 "DeleteObjectsResult" : ""
}


public static DeleteObjectsResult DelObjects(MbId mb, Od[] objects)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tDel = new DeleteObjects()
    {
        tArg = new DeleteObjectsArg()
        {
            objects = new Ods
            {
                its = objects
            }
        },
        tMb = new MbId() { id = mb.id }
    };
    //Удаление объектов
    var result = somClient.DeleteObjects(tDel);
    return result;
}


См. также:


[DeleteObjects:
 Операция](../DeleteObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
