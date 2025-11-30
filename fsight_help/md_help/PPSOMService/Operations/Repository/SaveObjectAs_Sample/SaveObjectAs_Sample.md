# Создание копии объекта: Операция SaveObjectAs

Создание копии объекта: Операция SaveObjectAs
-


**


# Создание копии объекта


Пример использования операции [SaveObjectAs](../SaveObjectAs.htm) для создания копии объекта репозитория. В запросе передается моникёр копируемого объекта, описание родительского объекта, в котором будет создана копия, а также параметры создания копии. В ответе приходит обновленный список объектов той папки, в который была создана копия.


[![](../../../Opened.gif)![](../../../Closed.gif)SOAP](javascript:textpopup(this))


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SaveObjectAs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tObject xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!176019</id>  </tObject>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<destination>
  <operation>CreateNew</operation>[![](../../../minus.gif)](../../../#)<create>
  <name>Регламентный отчет(Копия)</name>  <id>REPORT_Copy</id>[![](../../../minus.gif)](../../../#)<parent isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>WORK</i>  <n>Work</n>  <k>62</k>  <c>0</c>  <p>70</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </parent>
  </create>
  <withData>true</withData>  <autoGenerateName>true</autoGenerateName>  </destination>
[![](../../../minus.gif)](../../../#)<getObjects>
[![](../../../minus.gif)](../../../#)<parent>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!62</id>  </parent>
  </getObjects>
  </tArg>
  </SaveObjectAs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SaveObjectAsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<object xmlns="****" ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>REPORT_COPY</i>  <n>Регламентный отчет(Копия)</n>  <k>305002</k>  <c>2562</c>  <p>62</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>[![](../../../minus.gif)](../../../#)<obId>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305002</id>  </obId>
  </object>
[![](../../../minus.gif)](../../../#)<objects xmlns="****">
[![](../../../minus.gif)](../../../#)<id>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!176019</id>  </id>
[![](../../../minus.gif)](../../../#)<objects>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>REPORT_COPY</i>  <n>Регламентный отчет(Копия)</n>  <k>305002</k>  <c>2562</c>  <p>62</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
  </its>
  </objects>
  </objects>
  </SaveObjectAsResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../../Opened.gif)![](../../../Closed.gif)JSON](javascript:textpopup(this))


В JSON-запросе передается моникёр объекта, для которого необходимо создать копию, а также параметры создания копии. В JSON-ответе приходит обновленный список объектов той папки, в который была создана копия.


### JSON-запрос:


{
 "SaveObjectAs" :
  {
   "tObject" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!176019"
    },
   "tArg" :
    {
     "destination" :
      {
       "operation" : "CreateNew",
       "create" :
        {
         "name" : "Регламентный отчет(Копия)",
         "id" : "REPORT_Copy",
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
          }
        },
       "withData" : "true",
       "autoGenerateName" : "true"
      },
     "getObjects" :
      {
       "parent" :
        {
         "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!62"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SaveObjectAsResult" :
  {
   "object" :
    {
     "@ds" : "",
     "@isShortcut" : "0",
     "@isLink" : "0",
     "@ver" : "2",
     "@hf" : "0",
     "i" : "REPORT_COPY",
     "n" : "Регламентный отчет(Копия)",
     "k" : "305002",
     "c" : "2562",
     "p" : "62",
     "h" : "0",
     "hasPrv" : "0",
     "ic" : "0",
     "trackElementDependents" : "0",
     "obId" :
      {
       "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305002"
      }
    },
   "objects" :
    {
     "id" :
      {
       "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!176019"
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
           "i" : "REPORT_COPY",
           "n" : "Регламентный отчет(Копия)",
           "k" : "305002",
           "c" : "2562",
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


[![](../../../Opened.gif)![](../../../Closed.gif)C#](javascript:textpopup(this))


Указанная ниже функция CreateCopyObj создает копию объекта. Идентификатор копируемого объекта, а также родительского объекта, в котором будет создана копия, передаются посредством входных параметров objId и parentId. В примере используется функция FindObjectById, код которой приведен в примере «[Получение описания объекта по его идентификатору](../GetObjects_Sample/GetObjects_Sample.htm)». Результат выполнения операции является результатом выполнения функции.


public static SaveObjectAsResult CreateCopyObj(MbId mb, string objId, string parentId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    var tObj = FindObjectById(mb, objId);
    var tParent = FindObjectById(mb, parentId);
    //Параметры выполнения операции
    var tSave = new SaveObjectAs()
    {
        tArg = new SaveObjectAsArg()
        {
            destination = new ObjectCopyInfo()
            {
                //Действие - создание копии
                operation = ObjectCopyOperation.CreateNew,
                create = new ObjectCreateBaseInfo()
                {
                    id = tObj.i + "_Copy",
                    name = tObj.n + "(Копия)",
                    parent = tParent
                },
                withData = true
            },
            getObjects = new GetObjectsOpArg()
            {
                parent = new OdId() { id = mb.id + "!" + tParent.k }
            }
        },
        tObject = new OdId()
        {
            id = mb.id + "!" + tObj.k
        }
    };
    //Создание копии
    var result = somClient.SaveObjectAs(tSave);
    return result;
}


См. также:


[SaveObjectAs: Операция](../SaveObjectAs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
