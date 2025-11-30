# Получение информации о статусе выполнения импорта в куб: Операция GetCubeImport

Получение информации о статусе выполнения импорта в куб: Операция GetCubeImport
-


**


# Получение информации о статусе выполнения импорта в куб


Ниже приведен пример использования операции [GetCubeImport](../GetCubeImport.htm)
 для проверки статуса выполнения импорта данных, который был запущен с
 помощью операции [SetCubeImport](../SetCubeImport.htm). В запросе
 передается моникёр загрузчика данных. В ответе приходит информация о статусе
 выполнения импорта и информация о возможных ошибках выполнения.


	 SOAP  JSON
	  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetCubeImport xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCubeImport xmlns="****">
  <id>APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ</id>  </tCubeImport>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <execute>true</execute>  <resultType>true</resultType>[![](../../../minus.gif)](../../../#)<executeResult>
[![](../../../minus.gif)](../../../#)<duplicates>
  <start>0</start>  </duplicates>
[![](../../../minus.gif)](../../../#)<nulls>
  <start>0</start>  </nulls>
  </executeResult>
  </pattern>
  </tArg>
  </GetCubeImport>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetCubeImportResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>FORNEWCUBE</i>  <n>Для новых кубов</n>  <k>5881</k>  <c>0</c>  <p>5845</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
[![](../../../minus.gif)](../../../#)<execute>
  <state>None</state>  <extendedResult>1</extendedResult>  <useWaitings>0</useWaitings>  </execute>
  <resultType>Cube</resultType>  <loadDuplicates>0</loadDuplicates>  </meta>
  </GetCubeImportResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetCubeImport" :
  {
   "tCubeImport" :
    {
     "id" : "APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "execute" : "true",
       "resultType" : "true",
       "executeResult" :
        {
         "duplicates" :
          {
           "start" : "0"
          },
         "nulls" :
          {
           "start" : "0"
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetCubeImportResult" :
  {
   "id" :
    {
     "id" : "APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "0",
         "@hf" : "0",
         "i" : "FORNEWCUBE",
         "n" : "Для новых кубов",
         "k" : "5881",
         "c" : "0",
         "p" : "5845",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "execute" :
      {
       "state" : "None",
       "extendedResult" : "1",
       "useWaitings" : "0"
      },
     "resultType" : "Cube",
     "loadDuplicates" : "0"
    }
  }
}


public static GetCubeImportResult GetCubeImportExecuteInfo(CubeImportId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetCubeImport()
    {
        tArg = new GetCubeImportArg()
        {
            pattern = new CubeImportMdPattern()
            {
                execute = true,
                executeResult = new CubeImportExecuteResultPattern()
                {
                    duplicates = new ListRange() { start = 0 },
                    nulls = new ListRange() { start = 0 }
                },
                resultType = true
            }
        },
        tCubeImport = moniker
    };
    //Получение информации о состоянии импортёра
    var result = somClient.GetCubeImport(tGet);
    return result;
}


См. также:


[GetCubeImport:
 Операция](../GetCubeImport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
