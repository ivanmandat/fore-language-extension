# Создание объекта в рамках указанного родительского объекта: Операция CreateObject

Создание объекта в рамках указанного родительского объекта: Операция CreateObject
-


**


# Создание объекта в рамках указанного родительского объекта


Ниже приведен пример использования операции [CreateObject](../CreateObject.htm)
 для создания объекта репозитория. В запросе передается основная информация,
 необходимая для создания объекта: идентификатор, наименование и идентификатор
 класса объекта, описание родительского объекта. Также устанавливается
 признак создания постоянного объекта, позволяющий сохранить объект сразу
 после создания. Указывается информация, в соответствии с которой будет
 обновлен список объектов, имеющихся в рамках родительского объекта после
 создания нового объекта. Ответ будет содержать описание и моникёр созданного
 объекта, а также обновленный список объектов, имеющихся в рамках родительского
 объекта.


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](../GetObjects_Sample/GetObjects_Sample.htm)».


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
  <name>NewForm1</name>  <id>NewForm1</id>[![](../../../minus.gif)](../../../#)<parent isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>WORK</i>  <n>Work</n>  <k>62</k>  <c>0</c>  <p>70</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </parent>
  <permanent>true</permanent>  <classId>1538</classId>  </info>
[![](../../../minus.gif)](../../../#)<getObjects>
[![](../../../minus.gif)](../../../#)<parent>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!62</id>  </parent>
[![](../../../minus.gif)](../../../#)<filter>
  <hideEmptyFolders>true</hideEmptyFolders>[![](../../../minus.gif)](../../../#)<classes>
[![](../../../minus.gif)](../../../#)<it>
  <k>1538</k>  </it>
  </classes>
  </filter>
[![](../../../minus.gif)](../../../#)<arg>
[![](../../../minus.gif)](../../../#)<pattern>
  <n>false</n>  <i>true</i>  <ts>false</ts>  <ds>false</ds>  <isShortcut>false</isShortcut>  </pattern>
  </arg>
  </getObjects>
  </tArg>
  </CreateObject>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<CreateObjectResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305000</id>  </id>
[![](../../../minus.gif)](../../../#)<object xmlns="****" ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>NEWFORM1</i>  <n>NewForm1</n>  <k>305000</k>  <c>1538</c>  <p>62</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>[![](../../../minus.gif)](../../../#)<obId>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305000</id>  </obId>
  </object>
[![](../../../minus.gif)](../../../#)<objects xmlns="****">
[![](../../../minus.gif)](../../../#)<id>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!0</id>  </id>
[![](../../../minus.gif)](../../../#)<objects>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>NEWFORM1</i>  <n />
  <k>305000</k>  <c>1538</c>  <p>62</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
  </its>
  </objects>
  </objects>
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
       "name" : "NewForm1",
       "id" : "NewForm1",
       "parent" :
        {
         "@isShortcut" : "false",
         "@isLink" : "false",
         "@hf" : "false",
         "i" : "WORK",
         "n" : "Work",
         "k" : "62",
         "c" : "0",
         "p" : "70",
         "h" : "false",
         "hasPrv" : "false",
         "ic" : "false"
        },
       "permanent" : "true",
       "classId" : "1538"
      },
     "getObjects" :
      {
       "parent" :
        {
         "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!62"
        },
       "filter" :
        {
         "hideEmptyFolders" : "true",
         "classes" :
          {
           "it" :
            {
             "k" : "1538"
            }
          }
        },
       "arg" :
        {
         "pattern" :
          {
           "n" : "false",
           "i" : "true",
           "ts" : "false",
           "ds" : "false",
           "isShortcut" : "false"
          }
        }
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
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305000"
    },
   "object" :
    {
     "@ds" : "",
     "@isShortcut" : "0",
     "@isLink" : "0",
     "@ver" : "1",
     "@hf" : "0",
     "i" : "NEWFORM1",
     "n" : "NewForm1",
     "k" : "305000",
     "c" : "1538",
     "p" : "62",
     "h" : "0",
     "hasPrv" : "0",
     "ic" : "0",
     "trackElementDependents" : "0",
     "obId" :
      {
       "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305000"
      }
    },
   "objects" :
    {
     "id" :
      {
       "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!0"
      },
     "objects" :
      {
       "its" :
        {
         "d" :
          {
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@hf" : "0",
           "i" : "NEWFORM1",
           "n" : "",
           "k" : "305000",
           "c" : "1538",
           "p" : "62",
           "h" : "0",
           "hasPrv" : "0",
           "ic" : "0"
          }
        }
      }
    }
  }
}


public static CreateObjectResult CreateObject(MbId mb, string parent, string id, uint classId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tParent = FindObjectById(mb, parent);
    var tCreateObj = new CreateObject()
    {
        tArg = new CreateObjectArg()
        {
            //Информация о создаваемом объекте
            info = new ObjectCreateInfo()
            {
                classId = classId,
                id = id,
                name = id,
                parent = tParent,
                permanent = true
            },
            //Параметры обновления репозитория после создания объекта
            getObjects = new GetObjectsOpArg()
            {
                arg = new GetObjectsArg()
                {
                    //Шаблон извлекаемой информации
                    pattern = new OdsPattern()
                    {
                        ds = false,
                        i = true,
                        isShortcut = false,
                        n = false,
                        ts = false
                    }
                },
                filter = new OdsFilt()
                {
                    classes = new OdClass[1]
                    {
                        //Обновить список объектов с тем же классом, с каким был создан новый объект
                        new OdClass(){k = classId},
                    },
                    hideEmptyFolders = true
                },
                //Указание родительского объекта, содержимое которого будет обновлено
                parent = new OdId() { id = mb.id + "!" + tParent.k }
            }
        },
        tParent = new OdId()
        {
            id = mb.id + "!0"
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
