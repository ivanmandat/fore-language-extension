# GetBpmSegmentInfo: Операция

GetBpmSegmentInfo: Операция
-


**


# GetBpmSegmentInfo


## Синтаксис


BpmCubeSegmentInfo GetBpmSegmentInfo(BpmProcessId
 tBpmProcess, GetBpmCubeSegmentInfoArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetBpmSegmentInfo получает
 настройки сегмента данных у шага процесса.


## Комментарии


Операция актуальна для шагов «Ввода
 данных» или «Согласование».


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg
 информацию о шаге и сегменте данных, для которого выполняется операция.
 Моникёр может быть получен при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).
 Информацию о шаге можно получить, используя операцию [GetBpmWorkspace](GetBpmWorkspace.htm).
 Информацию о сегментах, доступных для использования, возвращает операция
 [GetBpmSegmentsForSteps](GetBpmSegmentsForSteps.htm).


Результатом операции будут полученные настройки сегмента данных.


## Пример


Ниже приведён пример получения настроек сегмента данных, используемого
 в шаге. В запросе передаётся моникёр открытого процесса, GUID шага ввода
 данных, ключи куба и сегмента. В ответе возвращаются настройки, заданные
 для сегмента в шаге процесса.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmSegmentInfo xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>MMCCFMODHHDDGOAEJNHEBIDDFKDDHAGEOJJCCJMGOADNDDCJ!M!S!BPFLPMKNODHHDDGOAEAPBGMNOKNLEGJMHEHJPIBDFCLCKGHBEP</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <stpGuid>{42F4DDBC-DC40-46E3-83F6-202E13E4EF37}</stpGuid>  <cubeKey>343811</cubeKey>  <key>343832</key>  </tArg>
  </GetBpmSegmentInfo>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmSegmentInfoResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <isDynamic xmlns="****">1</isDynamic>  <linked xmlns="****">1</linked>[![](../../minus.gif)](../../#)<segDims xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <dimKey>343812</dimKey>  <isEnabled>0</isEnabled>  <bindType>Unknown</bindType>  <name>Факты</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <dimKey>343809</dimKey>  <isEnabled>0</isEnabled>  <bindType>Unknown</bindType>  <name>Календарь</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <dimKey>343805</dimKey>  <isEnabled>0</isEnabled>  <bindType>Unknown</bindType>  <name>Справочник секторов</name>  </it>
[![](../../minus.gif)](../../#)<it>
  <dimKey>343807</dimKey>  <isEnabled>1</isEnabled>  <bindType>Unknown</bindType>  <name>Справочник фирм</name>  <mnk>MMCCFMODHHDDGOAEJNHEBIDDFKDDHAGEOJJCCJMGOADNDDCJ!M!S!SCDNJCBPDHHDDGOAEIPGBOBIEMGOMOPBECKCBBGOLNDJDGBNF</mnk>  </it>
  </segDims>
  </GetBpmSegmentInfoResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmSegmentInfo" :
  {
   "tBpmProcess" :
    {
     "id" : "MMCCFMODHHDDGOAEJNHEBIDDFKDDHAGEOJJCCJMGOADNDDCJ!M!S!BPFLPMKNODHHDDGOAEAPBGMNOKNLEGJMHEHJPIBDFCLCKGHBEP"
    },
   "tArg" :
    {
     "stpGuid" : "{42F4DDBC-DC40-46E3-83F6-202E13E4EF37}",
     "cubeKey" : "343811",
     "key" : "343832"
    }
  }
}

### JSON-ответ:


{
 "GetBpmSegmentInfoResult" :
  {
   "isDynamic" : "1",
   "linked" : "1",
   "segDims" :
    {
     "it" :
      [
        {
         "dimKey" : "343812",
         "isEnabled" : "0",
         "bindType" : "Unknown",
         "name" : "Факты"
        },
        {
         "dimKey" : "343809",
         "isEnabled" : "0",
         "bindType" : "Unknown",
         "name" : "Календарь"
        },
        {
         "dimKey" : "343805",
         "isEnabled" : "0",
         "bindType" : "Unknown",
         "name" : "Справочник секторов"
        },
        {
         "dimKey" : "343807",
         "isEnabled" : "1",
         "bindType" : "Unknown",
         "name" : "Справочник фирм",
         "mnk" : "MMCCFMODHHDDGOAEJNHEBIDDFKDDHAGEOJJCCJMGOADNDDCJ!M!S!SCDNJCBPDHHDDGOAEIPGBOBIEMGOMOPBECKCBBGOLNDJDGBNF"
        }
      ]
    }
  }
}


public static BpmCubeSegmentInfo GetBpmSegmentInfo(string moniker, string stepGUID, uint cube, uint segment)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmSegmentInfo()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new GetBpmCubeSegmentInfoArg()
        {
            stpGuid = stepGUID,
            cubeKey = cube,
            key = segment
        }
    };
    // Получение настроек сегмента данных
    var result = somClient.GetBpmSegmentInfo(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
