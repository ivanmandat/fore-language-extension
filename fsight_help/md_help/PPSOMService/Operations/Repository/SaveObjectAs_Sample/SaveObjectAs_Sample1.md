# Перемещение объекта: Операция SaveObjectAs

Перемещение объекта: Операция SaveObjectAs
-


**


# Перемещение объекта


Пример использования операции [SaveObjectAs](../SaveObjectAs.htm) для перемещения объекта репозитория. В запросе передается моникёр перемещаемого объекта и описание родительского объекта, в который осуществляется перемещение. В ответе приходит обновленный список объектов родительского объекта, в который производилось перемещение.


[![](../../../Opened.gif)![](../../../Closed.gif)SOAP](javascript:textpopup(this))


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SaveObjectAs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tObject xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305002</id>  </tObject>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<destination>
  <operation>MoveToParent</operation>[![](../../../minus.gif)](../../../#)<move>
[![](../../../minus.gif)](../../../#)<parent isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>TEMP</i>  <n>Temp</n>  <k>65</k>  <c>0</c>  <p>70</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </parent>
  </move>
  <autoGenerateName>true</autoGenerateName>  </destination>
[![](../../../minus.gif)](../../../#)<getObjects>
[![](../../../minus.gif)](../../../#)<parent>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!65</id>  </parent>
  </getObjects>
  </tArg>
  </SaveObjectAs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SaveObjectAsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<object xmlns="****" ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>REPORT_COPY</i>  <n>Регламентный отчет(Копия)</n>  <k>305002</k>  <c>2562</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>[![](../../../minus.gif)](../../../#)<obId>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305002</id>  </obId>
  </object>
[![](../../../minus.gif)](../../../#)<objects xmlns="****">
[![](../../../minus.gif)](../../../#)<id>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305002</id>  </id>
[![](../../../minus.gif)](../../../#)<objects>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>OBJ66</i>  <n>проверка макросов</n>  <k>66</k>  <c>1537</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>OBJ90</i>  <n>Форма90</n>  <k>90</k>  <c>1538</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>NEWFORM1</i>  <n>NewForm1</n>  <k>305000</k>  <c>1538</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>NEWFORM2</i>  <n>NewForm2</n>  <k>305001</k>  <c>1538</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>REPORT_COPY</i>  <n>Регламентный отчет(Копия)</n>  <k>305002</k>  <c>2562</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
  </its>
  </objects>
  </objects>
  </SaveObjectAsResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../../Opened.gif)![](../../../Closed.gif)JSON](javascript:textpopup(this))


### JSON-запрос:


{
 "SaveObjectAs" :
  {
   "tObject" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305002"
    },
   "tArg" :
    {
     "destination" :
      {
       "operation" : "MoveToParent",
       "move" :
        {
         "parent" :
          {
           "@isShortcut" : "false",
           "@isLink" : "false",
           "@hf" : "false",
           "i" : "TEMP",
           "n" : "Temp",
           "k" : "65",
           "c" : "0",
           "p" : "70",
           "h" : "false",
           "hasPrv" : "false",
           "ic" : "false"
          }
        },
       "autoGenerateName" : "true"
      },
     "getObjects" :
      {
       "parent" :
        {
         "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!65"
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
     "@ver" : "1",
     "@hf" : "0",
     "i" : "REPORT_COPY",
     "n" : "Регламентный отчет(Копия)",
     "k" : "305002",
     "c" : "2562",
     "p" : "65",
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
       "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305002"
      },
     "objects" :
      {
       "its" :
        {
         "d" :
          [
            {
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@hf" : "0",
             "i" : "OBJ66",
             "n" : "проверка макросов",
             "k" : "66",
             "c" : "1537",
             "p" : "65",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0"
            },
            {
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@hf" : "0",
             "i" : "OBJ90",
             "n" : "Форма90",
             "k" : "90",
             "c" : "1538",
             "p" : "65",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0"
            },
            {
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@hf" : "0",
             "i" : "NEWFORM1",
             "n" : "NewForm1",
             "k" : "305000",
             "c" : "1538",
             "p" : "65",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0"
            },
            {
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@hf" : "0",
             "i" : "NEWFORM2",
             "n" : "NewForm2",
             "k" : "305001",
             "c" : "1538",
             "p" : "65",
             "h" : "0",
             "hasPrv" : "0",
             "ic" : "0"
            },
            {
             "@isShortcut" : "0",
             "@isLink" : "0",
             "@hf" : "0",
             "i" : "REPORT_COPY",
             "n" : "Регламентный отчет(Копия)",
             "k" : "305002",
             "c" : "2562",
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
}


[![](../../../Opened.gif)![](../../../Closed.gif)C#](javascript:textpopup(this))


Указанная ниже функция MoveObj перемещает объект репозитория. Идентификатор объекта и папки, в которую осуществляется перемещение, передаются посредством входных параметров objId и parentId. В примере используется функция FindObjectById, код которой приведен в примере «[Получение описания объекта по его идентификатору](../GetObjects_Sample/GetObjects_Sample.htm)». Результат выполнения операции является результатом выполнения функции.


public static SaveObjectAsResult MoveObj(MbId mb, string objId, string parentId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tParent = FindObjectById(mb, parentId);
    var tSave = new SaveObjectAs()
    {
        tArg = new SaveObjectAsArg()
        {
            destination = new ObjectCopyInfo()
            {
                //Действие - перемещение объекта
                operation = ObjectCopyOperation.MoveToParent,
                move = new ObjectMoveInfo()
                {
                    parent = tParent
                }
            },
            getObjects = new GetObjectsOpArg()
            {
                parent = new OdId() { id = mb.id + "!" + tParent.k }
            }
        },
        tObject = new OdId()
        {
            id = mb.id + "!" + FindObjectById(mb, objId).k
        }
    };
    //Перемещение объекта
    var result = somClient.SaveObjectAs(tSave);
    return result;
}


См. также:


[SaveObjectAs: Операция](../SaveObjectAs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
