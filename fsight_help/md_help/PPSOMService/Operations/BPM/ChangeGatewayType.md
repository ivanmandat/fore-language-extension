# ChangeGatewayType: Операция

ChangeGatewayType: Операция
-


**


# ChangeGatewayType


## Синтаксис


ChangeGatewayTypeResult ChangeGatewayType(BpmProcessId
 tBpmProcess, ChangeGatewayTypeArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция ChangeGatewayType изменяет
 тип шлюза.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, в поле tArg.guid
 GUID этапа, а в поле tArg.gtwType
 новый тип шлюза. Моникёр может быть получен при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом операции будет признак успешного изменения типа шлюза.


## Пример


Ниже приведён пример изменения типа шлюза. В запросе передаётся моникёр
 открытого процесса, GUID и новый тип шлюза. В ответе возвращается признак
 успешного изменения.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ChangeGatewayType xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>NDCHEPHAPKKEGOAEGJJAFOGDFMPNFELEJKODDHAOOLEGCFFC!M!S!BPNLJFBCIAPKKEGOAEOLJBAFNHCPBHEAIELJHDCCHNLAJLFNMF</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <guid>{EA546F75-C5A8-477F-BBC4-56E362049682}</guid>  <gtwType>Gateway_parallel</gtwType>  </tArg>
  </ChangeGatewayType>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ChangeGatewayTypeResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <res xmlns="****">1</res>  </ChangeGatewayTypeResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ChangeGatewayType" :
  {
   "tBpmProcess" :
    {
     "id" : "NDCHEPHAPKKEGOAEGJJAFOGDFMPNFELEJKODDHAOOLEGCFFC!M!S!BPNLJFBCIAPKKEGOAEOLJBAFNHCPBHEAIELJHDCCHNLAJLFNMF"
    },
   "tArg" :
    {
     "guid" : "{EA546F75-C5A8-477F-BBC4-56E362049682}",
     "gtwType" : "Gateway_parallel"
    }
  }
}

### JSON-ответ:


{
 "ChangeGatewayTypeResult" :
  {
   "res" : "1"
  }
}


public static ChangeGatewayTypeResult ChangeGatewayType(string moniker, string gatewayGuid)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new ChangeGatewayType()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new ChangeGatewayTypeArg()
        {
            guid = gatewayGuid,
            gtwType = BProcessGatewayType.Gateway_parallel
        }
    };
    // Изменение типа шлюза
    var result = somClient.ChangeGatewayType(tSet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
