# Перезапись существующего объекта: Операция SaveObjectAs

Перезапись существующего объекта: Операция SaveObjectAs
-


**


# Перезапись существующего объекта


Пример использования операции [SaveObjectAs](../SaveObjectAs.htm) для перезаписи одного объекта репозитория другим. В запросе передается моникёр объекта-источника и описание того объекта, содержимое которого необходимо перезаписать. В ответе приходит описание объекта, содержимое которого было перезаписано.


[![](../../../Opened.gif)![](../../../Closed.gif)SOAP](javascript:textpopup(this))


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SaveObjectAs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tObject xmlns="****">
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!176019</id>  </tObject>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<destination>
  <operation>OverwriteExisting</operation>[![](../../../minus.gif)](../../../#)<overwrite>
[![](../../../minus.gif)](../../../#)<object isShortcut="**false**" isLink="**false**" hf="**false**">
  <i>REPORT_COPY</i>  <n>Регламентный отчет(Копия)</n>  <k>305002</k>  <c>2562</c>  <p>65</p>  <h>false</h>  <hasPrv>false</hasPrv>  <ic>false</ic>  </object>
  </overwrite>
  <autoGenerateName>true</autoGenerateName>  </destination>
  </tArg>
  </SaveObjectAs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SaveObjectAsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<object xmlns="****" ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>REPORT_COPY</i>  <n>Регламентный отчет(Копия)</n>  <k>305002</k>  <c>2562</c>  <p>65</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>[![](../../../minus.gif)](../../../#)<obId>
  <id>FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305002</id>  </obId>
  </object>
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
     "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!176019"
    },
   "tArg" :
    {
     "destination" :
      {
       "operation" : "OverwriteExisting",
       "overwrite" :
        {
         "object" :
          {
           "@isShortcut" : "false",
           "@isLink" : "false",
           "@hf" : "false",
           "i" : "REPORT_COPY",
           "n" : "Регламентный отчет(Копия)",
           "k" : "305002",
           "c" : "2562",
           "p" : "65",
           "h" : "false",
           "hasPrv" : "false",
           "ic" : "false"
          }
        },
       "autoGenerateName" : "true"
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
     "p" : "65",
     "h" : "0",
     "hasPrv" : "0",
     "ic" : "0",
     "trackElementDependents" : "0",
     "obId" :
      {
       "id" : "FNDKOLJACBNNFOAEDCEENEKPOGMMOOGEBLEIHFKEJOFOFMNJ!M!305002"
      }
    }
  }
}


[![](../../../Opened.gif)![](../../../Closed.gif)C#](javascript:textpopup(this))


Указанная ниже функция OverwriteObj перезаписывает содержимого одного объекта содержимым другого объекта репозитория. Идентификаторы объекта-источника и объекта-назначения передаются посредством входных параметров sourcedObj и destinationObj. В примере используется функция FindObjectById, код которой приведен в примере «[Получение описания объекта по его идентификатору](../GetObjects_Sample/GetObjects_Sample.htm)». Результат выполнения операции является результатом выполнения функции.


public static SaveObjectAsResult OverwriteObj(MbId mb, string sourcedObj, string destinationObj)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSave = new SaveObjectAs()
    {
        tArg = new SaveObjectAsArg()
        {
            destination = new ObjectCopyInfo()
            {
                //Действие - перезапись существующего объекта
                operation = ObjectCopyOperation.OverwriteExisting,
                overwrite = new ObjectOverwriteInfo()
                {
                    //Перезаписываемый объект
                    @object = FindObjectById(mb, destinationObj)
                }
            }
        },
        tObject = new OdId()
        {
            id = mb.id + "!" + FindObjectById(mb, sourcedObj).k
        }
    };
    //Перезапись объекта
    var result = somClient.SaveObjectAs(tSave);
    return result;
}


См. также:


[SaveObjectAs: Операция](../SaveObjectAs.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
