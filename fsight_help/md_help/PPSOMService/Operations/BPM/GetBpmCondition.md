# GetBpmCondition: Операция

GetBpmCondition: Операция
-


**


# GetBpmCondition


## Синтаксис


GetBpmConditionResult GetBpmCondition(BpmProcessId
 tBpmProcess, GetBpmConditionArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetBpmCondition получает
 условия выполнения группы шагов.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg.guid
 уникальный идентификатор группы шагов. Моникёр может быть получен при
 выполнении операции [OpenBpmProcess](OpenBpmProcess.htm). Уникальный
 идентификатор можно получить в результатах выполнения операции [GetBpmWorkspace](GetBpmWorkspace.htm).


Результатом выполнения операции будут полученные условия, заданные для
 группы шагов.


## Пример


Ниже приведён пример получения условий выполнения группы шагов. В запросе
 передаётся моникёр открытого процесса и уникальный идентификатор группы
 шагов. В ответе возвращаются полученные условия.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmCondition xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>LHJPLDHKBDMCGOAECKIHKFBJAFLIFNBENKKPBNHANLGEFOAI!M!S!BPNKIIPFHKBDMCGOAEBOICMMCALKJJNNMEEJMFJPFGIOLFHGGH</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <guid>{CE8E3E58-1315-4EBB-9634-1AA54BEAAC9D}</guid>  </tArg>
  </GetBpmCondition>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmConditionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<cond xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <type>RelationSetNumber</type>  <exprRel>Or</exprRel>[![](../../minus.gif)](../../#)<expr>
[![](../../minus.gif)](../../#)<paramInfo>
  <paramId>OBJ117622_0</paramId>  <paramKey>117622</paramKey>  </paramInfo>
  <exprType>RelationSetNumber</exprType>  <operation>NotEqual</operation>[![](../../minus.gif)](../../#)<rDimS>
  <mnk>LHJPLDHKBDMCGOAECKIHKFBJAFLIFNBENKKPBNHANLGEFOAI!M!S!SJFMPLGHKBDMCGOAEMHHILAIEPFGMEDDEMIBDHFMHFAJLFMLG</mnk>  </rDimS>
  </expr>
  </it>
  </cond>
  <isDefault xmlns="****">0</isDefault>  </GetBpmConditionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmCondition" :
  {
   "tBpmProcess" :
    {
     "id" : "LHJPLDHKBDMCGOAECKIHKFBJAFLIFNBENKKPBNHANLGEFOAI!M!S!BPNKIIPFHKBDMCGOAEBOICMMCALKJJNNMEEJMFJPFGIOLFHGGH"
    },
   "tArg" :
    {
     "guid" : "{CE8E3E58-1315-4EBB-9634-1AA54BEAAC9D}"
    }
  }
}

### JSON-ответ:


{
 "GetBpmConditionResult" :
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
           "paramId" : "OBJ117622_0",
           "paramKey" : "117622"
          },
         "exprType" : "RelationSetNumber",
         "operation" : "NotEqual",
         "rDimS" :
          {
           "mnk" : "LHJPLDHKBDMCGOAECKIHKFBJAFLIFNBENKKPBNHANLGEFOAI!M!S!SJFMPLGHKBDMCGOAEMHHILAIEPFGMEDDEMIBDHFMHFAJLFMLG"
          }
        }
      }
    },
   "isDefault" : "0"
  }
}


public static GetBpmConditionResult GetBpmCondition(string moniker, string stepGUID)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmCondition()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new GetBpmConditionArg()
        {
            guid = stepGUID
        }
    };
    // Получение условия выполнения группы шагов
    var result = somClient.GetBpmCondition(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
