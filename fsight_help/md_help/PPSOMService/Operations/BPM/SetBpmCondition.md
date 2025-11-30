# SetBpmCondition: Операция

SetBpmCondition: Операция
-


**


# SetBpmCondition


## Синтаксис


SetBpmConditionResult SetBpmCondition(BpmProcessId
 tBpmProcess, SetBpmConditionArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetBpmCondition изменяет
 условия выполнения группы шагов.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tArg
 уникальный идентификатор группы шагов и условия их выполнения. Моникёр
 может быть получен при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).
 Уникальный идентификатор можно получить в результатах выполнения операции
 [GetBpmWorkspace](GetBpmWorkspace.htm).


Результатом выполнения операции будет признак успешного изменения условий.


## Пример


Ниже приведён пример изменения условий выполнения группы шагов. В запросе
 передаётся моникёр открытого процесса, уникальный идентификатор группы
 шагов и новые условия выполнения. В ответе возвращаются признак успешного
 изменения настроек условий выполнения.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetBpmCondition xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>LHJPLDHKBDMCGOAECKIHKFBJAFLIFNBENKKPBNHANLGEFOAI!M!S!BPNKIIPFHKBDMCGOAEBOICMMCALKJJNNMEEJMFJPFGIOLFHGGH</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<cond>
[![](../../minus.gif)](../../#)<it>
  <type>RelationSetNumber</type>  <exprRel>Or</exprRel>[![](../../minus.gif)](../../#)<expr>
[![](../../minus.gif)](../../#)<paramInfo>
  <paramId>OBJ117622_0</paramId>  <paramKey>117622</paramKey>  </paramInfo>
  <exprType>RelationSetNumber</exprType>  <operation>NotEqual</operation>[![](../../minus.gif)](../../#)<rDimS>
  <mnk>LHJPLDHKBDMCGOAECKIHKFBJAFLIFNBENKKPBNHANLGEFOAI!M!S!SJFMPLGHKBDMCGOAEMHHILAIEPFGMEDDEMIBDHFMHFAJLFMLG</mnk>  </rDimS>
  </expr>
  </it>
  </cond>
  <isDefault>false</isDefault>  <guid>{CE8E3E58-1315-4EBB-9634-1AA54BEAAC9D}</guid>  </tArg>
  </SetBpmCondition>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetBpmConditionResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <res xmlns="****">1</res>  </SetBpmConditionResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetBpmCondition" :
  {
   "tBpmProcess" :
    {
     "id" : "LHJPLDHKBDMCGOAECKIHKFBJAFLIFNBENKKPBNHANLGEFOAI!M!S!BPNKIIPFHKBDMCGOAEBOICMMCALKJJNNMEEJMFJPFGIOLFHGGH"
    },
   "tArg" :
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
     "isDefault" : "false",
     "guid" : "{CE8E3E58-1315-4EBB-9634-1AA54BEAAC9D}"
    }
  }
}

### JSON-ответ:


{
 "SetBpmConditionResult" :
  {
   "res" : "1"
  }
}


public static SetBpmConditionResult SetBpmCondition(string moniker, string stepGUID, BpmCondition[] newConds)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetBpmCondition()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new SetBpmConditionArg()
        {
            guid = stepGUID,
            isDefault = false,
            cond = newConds
        }
    };
    // Изменение условия выполнения группы шагов
    var result = somClient.SetBpmCondition(tSet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
