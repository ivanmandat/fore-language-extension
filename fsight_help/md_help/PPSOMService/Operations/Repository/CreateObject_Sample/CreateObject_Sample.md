# Создание объекта: Операция CreateObject

Создание объекта: Операция CreateObject
-


**


# Создание объекта


Ниже приведен пример использования операции [CreateObject](../CreateObject.htm)
 для создания объекта репозитория. В запросе передается основная информация,
 необходимая для создания объекта: идентификатор, наименование и идентификатор
 класса объекта. Также устанавливается признак создания постоянного объекта,
 позволяющий сохранить объект сразу после создания. В параметрах объекта
 родительский объект не указывается. Создание будет происходить в корневой
 папке репозитория, моникёр которой передается в параметре tParent
 операции. Ответ будет содержать описание и моникёр созданного объекта.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<CreateObject xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tParent xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!0</id>  </tParent>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<info>
  <name>NewForm</name>  <id>NewForm</id>  <permanent>true</permanent>  <classId>1538</classId>  </info>
  </tArg>
  </CreateObject>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<CreateObjectResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!304999</id>  </id>
[![](../../../minus.gif)](../../../#)<object xmlns="****" ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>NEWFORM</i>  <n>NewForm</n>  <k>304999</k>  <c>1538</c>  <p>0</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>[![](../../../minus.gif)](../../../#)<obId>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!304999</id>  </obId>
  </object>
  </CreateObjectResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CreateObject" :
  {
   "tParent" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!0"
    },
   "tArg" :
    {
     "info" :
      {
       "name" : "NewForm",
       "id" : "NewForm",
       "permanent" : "true",
       "classId" : "1538"
      }
    }
  }
}

### JSON-ответ:


{
 "CreateObjectResult" :
  {
   "id" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!304999"
    },
   "object" :
    {
     "@ds" : "",
     "@isShortcut" : "0",
     "@isLink" : "0",
     "@ver" : "1",
     "@hf" : "0",
     "i" : "NEWFORM",
     "n" : "NewForm",
     "k" : "304999",
     "c" : "1538",
     "p" : "0",
     "h" : "0",
     "hasPrv" : "0",
     "ic" : "0",
     "trackElementDependents" : "0",
     "obId" :
      {
       "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!304999"
      }
    }
  }
}


public static CreateObjectResult CreateObject(MbId mb, string id, uint classId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tCreateObj = new CreateObject()
    {
        tArg = new CreateObjectArg()
        {
            info = new ObjectCreateInfo()
            {
                classId = classId,
                id = id,
                name = id,
                permanent = true
            }
        },
        tParent = new OdId()
        {
            id = mb.id + "!0" //Родитель - корневая папка репозитория
        }
    };
    //Создание объекта
    var result = somClient.CreateObject(tCreateObj);
    return result;
}


См. также:


[CreateObject:
 Операция](../CreateObject.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
