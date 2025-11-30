# SetBpmStage: Операция

SetBpmStage: Операция
-


**


# SetBpmStage


## Синтаксис


bool SetBpmStage(BpmProcessId tBpmProcess, BpmStageArg
 tBpmStageArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tBpmStageArg. Параметры выполнения
 операции.


## Описание


Операция SetBpmStage изменяет
 настройки этапа процесса.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, в поле tBpmStageArg
 настройки этапа. Моникёр может быть получен при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будет логическое значение true,
 если изменение настроек этапа завершилось успешно.


## Пример


Ниже приведён пример изменения настроек этапа процесса. В запросе передаётся
 моникёр открытого процесса, GUID и новое наименование, которое будет задано
 для этапа. В ответе возвращается признак успешного изменения настроек
 этапа.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetBpmStage xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>COAOPGKGCJKEGOAEIHPPEJNABOOGNDGENKOKNINMLFLJFBMK!M!S!BPHLNJFALGCJKEGOAEJPJLLKGPHKELIFIECLCHAGEBCDNFMELP</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tBpmStepArg xmlns="****">
  <guid>{94C3E46B-1BBC-4FFF-9600-49C6B5D344D7}</guid>  <name>Дополнительный этап</name>  </tBpmStepArg>
  </SetBpmStage>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SetBpmStageResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SetBpmStageResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetBpmStage" :
  {
   "tBpmProcess" :
    {
     "id" : "COAOPGKGCJKEGOAEIHPPEJNABOOGNDGENKOKNINMLFLJFBMK!M!S!BPHLNJFALGCJKEGOAEJPJLLKGPHKELIFIECLCHAGEBCDNFMELP"
    },
   "tBpmStepArg" :
    {
     "guid" : "{94C3E46B-1BBC-4FFF-9600-49C6B5D344D7}",
     "name" : "Дополнительный этап"
    }
  }
}

### JSON-ответ:


{
 "SetBpmStageResult" : "1"
}


public static bool SetBpmStage(string moniker, string stageGuid, string newName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetBpmStage()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tBpmStageArg = new BpmStageArg()
        {
            guid = stageGuid,
            name = newName
        }
    };
    // Изменение настроек этапа
    var result = somClient.SetBpmStage(tSet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
