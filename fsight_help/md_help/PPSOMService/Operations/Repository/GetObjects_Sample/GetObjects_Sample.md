# Получение описания объекта по его идентификатору: Операция GetObjects

Получение описания объекта по его идентификатору: Операция GetObjects
-


**


# Получение описания объекта по его идентификатору


Пример использования операции [GetObjects](../GetObjects.htm)
 для получения описания объекта репозитория по его идентификатору. В запросе
 передается идентификатор искомого объекта, а также дополнительные параметры
 поиска и фильтрации объектов. Поиск производится среди всех папок репозитория
 (включая скрытые папки), а также в различных объектах-контейнерах. В ответе
 приходит описание найденного объекта.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetObjects xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tParent xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!0</id>  </tParent>
[![](../../../minus.gif)](../../../#)<tFilter xmlns="****">
  <levels>-1</levels>  <includeRoot>false</includeRoot>  <hideEmptyFolders>true</hideEmptyFolders>  <hideAllFolders>true</hideAllFolders>  <limit>1</limit>[![](../../../minus.gif)](../../../#)<findInfo>
  <active>true</active>  <text>NEWFORM</text>  <attribute>Ident</attribute>  <caseSensitive>false</caseSensitive>  <wholeWordsOnly>true</wholeWordsOnly>  <scanNestedNamespaces>true</scanNestedNamespaces>  <scanHiddenFolders>true</scanHiddenFolders>  </findInfo>
  </tFilter>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
  <pattern />
  </tArg>
  </GetObjects>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetObjectsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!0</id>  </id>
[![](../../../minus.gif)](../../../#)<objects xmlns="****">
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<d isShortcut="**0**" isLink="**0**" hf="**0**">
  <i>NEWFORM</i>  <n>NewForm</n>  <k>304999</k>  <c>1538</c>  <p>0</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </d>
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
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!0"
    },
   "tFilter" :
    {
     "levels" : "-1",
     "includeRoot" : "false",
     "hideEmptyFolders" : "true",
     "hideAllFolders" : "true",
     "limit" : "1",
     "findInfo" :
      {
       "active" : "true",
       "text" : "NEWFORM",
       "attribute" : "Ident",
       "caseSensitive" : "false",
       "wholeWordsOnly" : "true",
       "scanNestedNamespaces" : "true",
       "scanHiddenFolders" : "true"
      }
    },
   "tArg" :
    {
     "pattern" : ""
    }
  }
}

### JSON-ответ:


{
 "GetObjectsResult" :
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
         "i" : "NEWFORM",
         "n" : "NewForm",
         "k" : "304999",
         "c" : "1538",
         "p" : "0",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0"
        }
      }
    }
  }
}


public static Od FindObjectById(MbId mb, string id)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tObject = new GetObjects()
    {
        //Параметры фильтрации объектов
        tArg = new GetObjectsArg()
        {
            pattern = new OdsPattern()
        },
        tFilter = new OdsFilt()
        {
            limit = 1,
            levels = -1,
            includeRoot = false,
            hideAllFolders = true,
            hideEmptyFolders = true,
            findInfo = new OdFindInfo()
            {
                active = true,
                attribute = OdFindAttribute.Ident,
                caseSensitive = false,
                scanHiddenFolders = true,
                scanNestedNamespaces = true,
                text = id,
                wholeWordsOnly = true
            }
        },
        //Указание идентификатора объекта, среди дочерних объектов которого будет производиться поиск
        tParent = new OdId()
        {
            id = mb.id + "!0" //0 - ключ корневой папки репозитория
        }
    };
    //Получение списка объектов в соответствии с указанными параметрами отбора
    var result = somClient.GetObjects(tObject);
    //Проверяем список описаний и возвращаем первое найденное описание
    //Если список пуст, то возвращаем Null
    var ods = result.objects;
    if (ods.its.Length > 0)
        return ods.its[0];
    else
        return null;
}


См. также:


[GetObjects:
 Операция](../GetObjects.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
