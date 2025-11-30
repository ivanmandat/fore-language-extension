# SaveBpmProcess: Операция

SaveBpmProcess: Операция
-


**


# SaveBpmProcess


## Синтаксис


SaveBpmProcessResult SaveBpmProcess(BpmProcessId
 tBpmProcess)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция SaveBpmProcess сохраняет
 изменения в процессе.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса. Процесс должен быть открыт на редактирование.
 Моникёр может быть получен при выполнении операции [OpenBpmProcess](OpenBpmProcess.htm).


Результатом выполнения операции будет обновлённая версия процесса.


## Пример


Ниже приведён пример сохранения изменений в процессе. В запросе передаётся
 моникёр открытого процесса. В ответе возвращается новая версия процесса.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SaveBpmProcess xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>NCPHMFOLCJKEGOAEDCHDGJJIFKGJAHNEMLOMCOEGJCNMDAIG!M!S!BPABMKPGOLCJKEGOAECHPFJNIBANBFMMJELIKODFECPOHPNHDO</id>  </tBpmProcess>
  </SaveBpmProcess>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SaveBpmProcessResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <parid xmlns="****">61</parid>  </SaveBpmProcessResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SaveBpmProcess" :
  {
   "tBpmProcess" :
    {
     "id" : "NCPHMFOLCJKEGOAEDCHDGJJIFKGJAHNEMLOMCOEGJCNMDAIG!M!S!BPABMKPGOLCJKEGOAECHPFJNIBANBFMMJELIKODFECPOHPNHDO"
    }
  }
}

### JSON-ответ:


{
 "SaveBpmProcessResult" :
  {
   "parid" : "61"
  }
}


public static SaveBpmProcessResult SaveBpmProcess(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new SaveBpmProcess()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker }
    };
    // Сохранение изменений
    var result = somClient.SaveBpmProcess(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
