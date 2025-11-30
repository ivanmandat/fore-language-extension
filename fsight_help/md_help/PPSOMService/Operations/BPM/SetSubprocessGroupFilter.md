# SetSubprocessGroupFilter: Операция

SetSubprocessGroupFilter: Операция
-


**


# SetSubprocessGroupFilter


## Синтаксис


SetSubprocessGroupFilterResult SetSubprocessGroupFilter(BpmProcessId
 tBpmProcess, SetSubprocessGroupFilterArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetSubprocessGroupFilter
 изменяет настройки фильтрации группового вызова подпроцессов.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg
 параметры изменения настроек. Моникёр может быть получен при выполнении
 операции [OpenBpmProcess](OpenBpmProcess.htm). В поле tArg.stpGuid укажите уникальный
 идентификатор подпроцесса. Уникальный идентификатор можно получить в результатах
 выполнения операции [GetBpmWorkspace](GetBpmWorkspace.htm).


Операция не возвращает какой-либо результат.


## Пример


Ниже приведён пример изменения настроек фильтрации группового вызова
 подпроцессов. В запросе передаётся моникёр открытого процесса, GUID подпроцесса
 и устанавливаемое условие фильтра со всеми необходимыми настройками.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetSubprocessGroupFilter xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>CEMMBBKFAJIBGOAEOGKCAHICOFFKCBEEHJBOLHCLMPGDHOEL!M!S!BPBHCLFDKFAJIBGOAENOBOEPJFLMKFGIGEFKDDHPNEPKGKBDIO</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <stpGuid>{E0EC9336-71A5-4B91-81C5-BEC66BB5936A}</stpGuid>[![](../../minus.gif)](../../#)<cond>
[![](../../minus.gif)](../../#)<it>
  <type>RelationSetNumber</type>  <exprRel>Or</exprRel>[![](../../minus.gif)](../../#)<expr>
[![](../../minus.gif)](../../#)<paramInfo>
  <paramId>OBJ338159_0</paramId>  <paramKey>338159</paramKey>  </paramInfo>
  <exprType>RelationSetNumber</exprType>  <operation>Equal</operation>[![](../../minus.gif)](../../#)<rDimS>
  <mnk>CEMMBBKFAJIBGOAEOGKCAHICOFFKCBEEHJBOLHCLMPGDHOEL!M!S!SOHDJEEKFAJIBGOAELIELLHAOPAOELANENKGDOKFHCGLNLBOL</mnk>  </rDimS>
  </expr>
  </it>
  </cond>
  </tArg>
  </SetSubprocessGroupFilter>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetSubprocessGroupFilterResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <tmp xmlns="****" />
  </SetSubprocessGroupFilterResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetSubprocessGroupFilter" :
  {
   "tBpmProcess" :
    {
     "id" : "CEMMBBKFAJIBGOAEOGKCAHICOFFKCBEEHJBOLHCLMPGDHOEL!M!S!BPBHCLFDKFAJIBGOAENOBOEPJFLMKFGIGEFKDDHPNEPKGKBDIO"
    },
   "tArg" :
    {
     "stpGuid" : "{E0EC9336-71A5-4B91-81C5-BEC66BB5936A}",
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
             "mnk" : "CEMMBBKFAJIBGOAEOGKCAHICOFFKCBEEHJBOLHCLMPGDHOEL!M!S!SOHDJEEKFAJIBGOAELIELLHAOPAOELANENKGDOKFHCGLNLBOL"
            }
          }
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetSubprocessGroupFilterResult" :
  {
   "tmp" : ""
  }
}


public static SetSubprocessGroupFilterResult SetSubprocessGroupFilter(string moniker, string stepGUID, string procParamId, int procParamKey, string dimSel)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetSubprocessGroupFilter()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new SetSubprocessGroupFilterArg()
        {
            stpGuid = stepGUID,
            cond = new BpmCondition[1]
            {
                new BpmCondition()
                {
                    type = EExpressionLogicalTypeCe.RelationSetNumber,
                    exprRel = BpmConditionsRelation.Or,
                    expr = new BpmGatewayLogicalExpression()
                    {
                        paramInfo = new BpmGatewayParamInfo()
                        {
                            paramId = procParamId,
                            paramKey = procParamKey
                        },
                        exprType = EExpressionLogicalTypeCe.RelationSetNumber,
                        operation = EOperationComparCe.Equal,
                        rDimS = new BpmDimSelection()
                        {
                            mnk = dimSel
                        }
                    }
                }
            }
        }
    };
    // Изменение настроек фильтрации группового вызова подпроцессов
    var result = somClient.SetSubprocessGroupFilter(tSet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
