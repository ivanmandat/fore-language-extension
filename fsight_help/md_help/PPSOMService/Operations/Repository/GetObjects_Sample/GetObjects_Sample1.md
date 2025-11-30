# Получение списка объектов по классу: Операция GetObjects

Получение списка объектов по классу: Операция GetObjects
-


**


# Получение списка объектов по классу


Пример использования операции [GetObjects](../GetObjects.htm)
 для получения списка объектов заданных классов в заданной папке репозитория.
 Перед получением списка будет произведено обновление дерева репозитория,
 а также очистка кеша. Для объектов будут извлечены: ключи, идентификаторы,
 идентификаторы класса и даты создания. Список объектов будет упорядочен
 по возрастанию даты создания объекта.


В примере используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetObjects xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tParent xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!65</id>  </tParent>
[![](../../../minus.gif)](../../../#)<tFilter xmlns="****">
  <levels>-1</levels>  <hideEmptyFolders>true</hideEmptyFolders>  <hideAllFolders>false</hideAllFolders>  <limit>-1</limit>[![](../../../minus.gif)](../../../#)<classes>
[![](../../../minus.gif)](../../../#)<it>
  <k>1537</k>  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>1538</k>  </it>
  </classes>
  </tFilter>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <n>false</n>  <i>true</i>  <ts>false</ts>  <ds>false</ds>  <isShortcut>false</isShortcut>  </pattern>
[![](../../../minus.gif)](../../../#)<refresh>
  <all>true</all>  </refresh>
[![](../../../minus.gif)](../../../#)<orderBy>
  <asc>true</asc>  <attribute>Timestamp</attribute>  </orderBy>
  </tArg>
  </GetObjects>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetObjectsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!65</id>  </id>
[![](../../../minus.gif)](../../../#)<objects xmlns="****">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<d ts="**2012-01-19T11:18:43.000Z**" isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>OBJ66</i>  <n />
  <k>66</k>  <c>1537</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
[![](../../../minus.gif)](../../../#)<d ts="**2014-08-14T11:36:26.000Z**" isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>OBJ90</i>  <n />
  <k>90</k>  <c>1538</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
[![](../../../minus.gif)](../../../#)<d ts="**2022-08-03T08:31:50.071Z**" isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>NEWFORM1</i>  <n />
  <k>305000</k>  <c>1538</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
[![](../../../minus.gif)](../../../#)<d ts="**2022-08-03T08:31:52.259Z**" isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>NEWFORM2</i>  <n />
  <k>305001</k>  <c>1538</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
  </its>
  </objects>
  </GetObjectsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetObjects" :
  {
   "tParent" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!65"
    },
   "tFilter" :
    {
     "levels" : "-1",
     "hideEmptyFolders" : "true",
     "hideAllFolders" : "false",
     "limit" : "-1",
     "classes" :
      {
       "it" :
        [
          {
           "k" : "1537"
          },
          {
           "k" : "1538"
          }
        ]
      }
    },
   "tArg" :
    {
     "pattern" :
      {
       "n" : "false",
       "i" : "true",
       "ts" : "false",
       "ds" : "false",
       "isShortcut" : "false"
      },
     "refresh" :
      {
       "all" : "true"
      },
     "orderBy" :
      {
       "asc" : "true",
       "attribute" : "Timestamp"
      }
    }
  }
}

### JSON-ответ:


{
 "GetObjectsResult" :
  {
   "id" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!65"
    },
   "objects" :
    {
     "its" :
      {
       "d" :
        [
          {
           "@ts" : "2012-01-19T11:18:43.000Z",
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@hf" : "0",
           "i" : "OBJ66",
           "n" : "",
           "k" : "66",
           "c" : "1537",
           "p" : "65",
           "h" : "0",
           "hasPrv" : "0",
           "ic" : "0"
          },
          {
           "@ts" : "2014-08-14T11:36:26.000Z",
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@hf" : "0",
           "i" : "OBJ90",
           "n" : "",
           "k" : "90",
           "c" : "1538",
           "p" : "65",
           "h" : "0",
           "hasPrv" : "0",
           "ic" : "0"
          },
          {
           "@ts" : "2022-08-03T08:31:50.071Z",
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@hf" : "0",
           "i" : "NEWFORM1",
           "n" : "",
           "k" : "305000",
           "c" : "1538",
           "p" : "65",
           "h" : "0",
           "hasPrv" : "0",
           "ic" : "0"
          },
          {
           "@ts" : "2022-08-03T08:31:52.259Z",
           "@isShortcut" : "0",
           "@isLink" : "0",
           "@hf" : "0",
           "i" : "NEWFORM2",
           "n" : "",
           "k" : "305001",
           "c" : "1538",
           "p" : "65",
           "h" : "0",
           "hasPrv" : "0",
           "ic" : "0"
          }
        ]
      }
    }
  }
}


public static Ods GetObjectsByClass(MbId mb, string parent, OdClass[] classes)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tObject = new GetObjects()
    {
        //Указание извлекаемой информации
        tArg = new GetObjectsArg()
        {
            //Извлекать: ключи, идентификаторы и идентификаторы класса
            //Сортировать по возрастанию даты создания
            orderBy = new OdsOrderBy()
            {
                asc = true,
                attribute = OdAttribute.Timestamp
            },
            pattern = new OdsPattern()
            {
                ds = false,
                i = true,
                isShortcut = false,
                n = false,
                ts = false
            },
            refresh = new MbRefresh()
            {
                all = true,
            },
        },
        tFilter = new OdsFilt()
        {
            classes = classes,
            limit = -1,
            levels = -1,
            hideAllFolders = false,
            hideEmptyFolders = true
        },
        //Указание идентификатора объекта, среди дочерних объектов которого будет производиться поиск
        tParent = new OdId()
        {
            id = mb.id + "!" + FindObjectById(mb, parent).k
        }
    };
    //Получение списка объектов в соответствии с указанными параметрами отбора
    var result = somClient.GetObjects(tObject);
    return result.objects;
}


См. также:


[GetObjects:
 Операция](../GetObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
