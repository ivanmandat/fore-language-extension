# MoveObject: Операция

MoveObject: Операция
-


**


# MoveObject


## Синтаксис


MoveObjectResult MoveObject(OdId tParent, MoveObjectArg
 tArg)


## Параметры


tParent. Моникёр перемещаемого
 объекта.


tArg. Параметры выполнения
 операции.


## Описание


Операция MoveObject перемещает
 объект репозитория.


## Комментарии


Для выполнения операции в параметре tParent
 необходимо указать моникёр перемещаемого объекта. В параметре tArg
 указывается информация о том, куда будет перемещен объект. Также в нем
 могут быть указаны параметры обновления списка объектов репозитория, которые
 будут применены после выполнения операции.


Результатом работы операции является описание перемещенного объекта,
 а также обновленный список объектов репозитория, если указаны соответствующие
 параметры выполнения операции.


## Пример


Пример перемещения объекта. Перемещение осуществляется в папку репозитория
 с идентификатором «Temp».


В примере C# используется функция FindObjectById,
 код которой приведен в примере «[Получение
 описания объекта по его идентификатору](GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<MoveObject xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tParent xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305000</id>  </tParent>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<info>
[![](../../minus.gif)](../../#)<parent isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>TEMP</i>  <n>Temp</n>  <k>65</k>  <c>0</c>  <p>70</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </parent>
  </info>
[![](../../minus.gif)](../../#)<getObjects>
[![](../../minus.gif)](../../#)<parent>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!65</id>  </parent>
[![](../../minus.gif)](../../#)<filter>
  <hideEmptyFolders>true</hideEmptyFolders>[![](../../minus.gif)](../../#)<classes>
[![](../../minus.gif)](../../#)<it>
  <k>1538</k>  </it>
  </classes>
  </filter>
[![](../../minus.gif)](../../#)<arg>
[![](../../minus.gif)](../../#)<pattern>
  <n>false</n>  <i>true</i>  <ts>false</ts>  <ds>false</ds>  <isShortcut>false</isShortcut>  </pattern>
  </arg>
  </getObjects>
  </tArg>
  </MoveObject>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<MoveObjectResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<object xmlns="****" ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>NEWFORM1</i>  <n>NewForm1</n>  <k>305000</k>  <c>1538</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </object>
[![](../../minus.gif)](../../#)<objects xmlns="****">
[![](../../minus.gif)](../../#)<id>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305000</id>  </id>
[![](../../minus.gif)](../../#)<objects>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>OBJ90</i>  <n />
  <k>90</k>  <c>1538</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
[![](../../minus.gif)](../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>NEWFORM1</i>  <n />
  <k>305000</k>  <c>1538</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
  </its>
  </objects>
  </objects>
  </MoveObjectResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "MoveObject" :
  {
   "tParent" :
    {
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305000"
    },
   "tArg" :
    {
     "info" :
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
     "getObjects" :
      {
       "parent" :
        {
         "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!65"
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
 "MoveObjectResult" :
  {
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
     "p" : "65",
     "h" : "0",
     "hasPrv" : "0",
     "ic" : "0",
     "trackElementDependents" : "0"
    },
   "objects" :
    {
     "id" :
      {
       "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305000"
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
            }
          ]
        }
      }
    }
  }
}


public static MoveObjectResult MoveObject(MbId mb, string moveableObj, string newParentId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    var tObject = FindObjectById(mb, moveableObj);
    var tParent = FindObjectById(mb, newParentId);
    //Параметры выполнения операции
    var tMove = new MoveObject()
    {
        tArg = new MoveObjectArg()
        {
            //Параметры обновления списка объектов после перемещения
            getObjects = new GetObjectsOpArg()
            {
                arg = new GetObjectsArg()
                {
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
                        //Обновить список объектов с тем же классом, какой имеет перемещаемый объект
                        new OdClass(){k = tObject.c},
                    },
                    hideEmptyFolders = true
                },
                parent = new OdId() { id = mb.id + "!" + tParent.k }
            },
            info = new ObjectMoveInfo()
            {
                parent = tParent
            }
        },
        tParent = new OdId()
        {
            id = mb.id + "!" + tObject.k
        }
    };
    //Перемещение объекта
    var result = somClient.MoveObject(tMove);
    return result;
}


См. также:


[Общие
 операции](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
