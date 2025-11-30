# Запуск импорта в куб на выполнение: Операция SetCubeImport

Запуск импорта в куб на выполнение: Операция SetCubeImport
-


**


# Запуск импорта в куб на выполнение


Ниже приведен пример использования операции [SetCubeImport](../SetCubeImport.htm)
 для запуска процесса импорта данных в куб. В запросе передается моникёр
 загрузчика данных и параметры запуска: выполнение происходит в асинхронном
 режиме. В результате возвращается моникёр, позволяющий отлеживать состояние
 импорта. Пример проверки статуса выполнения приведен в подразделе «[Получение
 информации о статусе выполнения импорта в куб](../GetCubeImport_Sample/GetCubeImport_Sample1.htm)» для операции [GetCubeImport](../GetCubeImport.htm).


	 SOAP  JSON
	  C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetCubeImport xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tCubeImport xmlns="****">
  <id>APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ</id>  </tCubeImport>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <execute>true</execute>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<execute>
  <command>RunAsync</command>  <extendedResult>true</extendedResult>  </execute>
  </meta>
  </tArg>
  </SetCubeImport>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetCubeImportResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ</id>  </id>
  </SetCubeImportResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetCubeImport" :
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
       "execute" : "true"
      },
     "meta" :
      {
       "execute" :
        {
         "command" : "RunAsync",
         "extendedResult" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetCubeImportResult" :
  {
   "id" :
    {
     "id" : "APJPBGEDEHLPFOAEJOPLMILHOOECMEPEOJKDMJHCGFMKDNKM!M!S!IDGLAIGEDEHLPFOAEPEOHNINBKMJBOEEEAINBLLIJNBNHEPDJ"
    }
  }
}


public static SetCubeImportResult SetExecuteCubeImport(CubeImportId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetCubeImport()
    {
        tArg = new SetCubeImportArg()
        {
            meta = new CubeImportMd()
            {
                //Асинхронный режим импорта данных в куб
                execute = new CubeImportExecute()
                {
                    command = CubeImportExecuteCommand.RunAsync
                }
            },
            pattern = new CubeImportMdPattern()
            {
                execute = true
            }
        },
        tCubeImport = moniker
    };
    //Запуск импорта в куб
    var result = somClient.SetCubeImport(tSet);
    return result;
}


См. также:


[SetCubeImport:
 Операция](../SetCubeImport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
