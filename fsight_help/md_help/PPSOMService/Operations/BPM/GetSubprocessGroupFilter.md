# GetSubprocessGroupFilter: Операция

GetSubprocessGroupFilter: Операция
-


**


# GetSubprocessGroupFilter


## Синтаксис


GetSubprocessGroupFilterResult GetSubprocessGroupFilter(BpmProcessId
 tBpmProcess, GetSubprocessGroupFilterArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetSubprocessGroupFilter
 получает настройки фильтрации группового вызова подпроцессов.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg
 параметры извлечения настроек. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). В поле tArg.stpGuid укажите уникальный
 идентификатор подпроцесса. Уникальный идентификатор можно получить в результатах
 выполнения операции [GetBpmWorkspace](GetBpmWorkspace.htm).


Результатом операции будет полученная коллекция условий фильтрации группового
 вызова подпроцессов.


## Пример


Ниже приведён пример получения настроек фильтрации группового вызова
 подпроцессов. В запросе передаётся моникёр открытого процесса и GUID подпроцесса.
 В ответе возвращаются полученные настройки фильтрации.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetSubprocessGroupFilter xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>CEMMBBKFAJIBGOAEOGKCAHICOFFKCBEEHJBOLHCLMPGDHOEL!M!S!BPBHCLFDKFAJIBGOAENOBOEPJFLMKFGIGEFKDDHPNEPKGKBDIO</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <stpGuid>{E0EC9336-71A5-4B91-81C5-BEC66BB5936A}</stpGuid>  </tArg>
  </GetSubprocessGroupFilter>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetSubprocessGroupFilterResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<cond xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <type>RelationSetNumber</type>  <exprRel>Or</exprRel>[![](../../minus.gif)](../../#)<expr>
[![](../../minus.gif)](../../#)<paramInfo>
  <paramId>OBJ338159_0</paramId>  <paramKey>338159</paramKey>  </paramInfo>
  <exprType>RelationSetNumber</exprType>  <operation>Equal</operation>[![](../../minus.gif)](../../#)<rDimS>
  <mnk>CEMMBBKFAJIBGOAEOGKCAHICOFFKCBEEHJBOLHCLMPGDHOEL!M!S!SIKFDNMLFAJIBGOAELFNBPPBFAAAGOGOEDLMCNCFCIAKLHMKC</mnk>  </rDimS>
  </expr>
  </it>
  </cond>
  </GetSubprocessGroupFilterResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetSubprocessGroupFilter" :
  {
   "tBpmProcess" :
    {
     "id" : "CEMMBBKFAJIBGOAEOGKCAHICOFFKCBEEHJBOLHCLMPGDHOEL!M!S!BPBHCLFDKFAJIBGOAENOBOEPJFLMKFGIGEFKDDHPNEPKGKBDIO"
    },
   "tArg" :
    {
     "stpGuid" : "{E0EC9336-71A5-4B91-81C5-BEC66BB5936A}"
    }
  }
}

### JSON-ответ:


{
 "GetSubprocessGroupFilterResult" :
  {
   "cond" :
    {
     "it" :
      {
       "type" : "RelationSetNumber",
       "exprRel" : "Or",
       "expr" :
        {
         "paramInfo" :
          {
           "paramId" : "OBJ338159_0",
           "paramKey" : "338159"
          },
         "exprType" : "RelationSetNumber",
         "operation" : "Equal",
         "rDimS" :
          {
           "mnk" : "CEMMBBKFAJIBGOAEOGKCAHICOFFKCBEEHJBOLHCLMPGDHOEL!M!S!SIKFDNMLFAJIBGOAELFNBPPBFAAAGOGOEDLMCNCFCIAKLHMKC"
          }
        }
      }
    }
  }
}


public static GetSubprocessGroupFilterResult GetSubprocessGroupFilter(string moniker, string stepGUID)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetSubprocessGroupFilter()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new GetSubprocessGroupFilterArg()
        {
            stpGuid = stepGUID
        }
    };
    // Получение настроек фильтрации группового вызова подпроцессов
    var result = somClient.GetSubprocessGroupFilter(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
