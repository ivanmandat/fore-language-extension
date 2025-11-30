# StartBpmProcess: Операция

StartBpmProcess: Операция
-


**


# StartBpmProcess


## Синтаксис


bool StartBpmProcess(BpmProcessId tBpmProcess, BpmStartInfo
 tBpmStartInfo)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tBpmStartInfo. Параметры запуска
 процесса на выполнение.


## Описание


Операция StartBpmProcess запускает
 процесс на выполнение.


## Комментарии


Для выполнения операции укажите в поле tBpmProcess
 моникёр открытого процесса, а в поле tBpmStartInfo
 параметры запуска.


Результатом выполнения операции будет логическое значение true,
 если запуск процесса на выполнения завершился успешно.


## Пример


Ниже приведён пример запуска процесса на выполнение. В запросе передаётся
 моникёр открытого процесса. В ответе возвращается признак успешного запуска.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<StartBpmProcess xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>FPHHJMKJHHMPFOAEABAKHOKEEHHCOEJEGJGLLMGGDGDHJIII!M!S!BPALDENFLJHHMPFOAEILNCNMMGOPPHDKGEKLEBPIJPCPPEJFPH</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tBpmStartInfo xmlns="****">
  <checkDeadline>false</checkDeadline>  <checkAllLevels>false</checkAllLevels>  </tBpmStartInfo>
  </StartBpmProcess>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <StartBpmProcessResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</StartBpmProcessResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "StartBpmProcess" :
  {
   "tBpmProcess" :
    {
     "id" : "FPHHJMKJHHMPFOAEABAKHOKEEHHCOEJEGJGLLMGGDGDHJIII!M!S!BPALDENFLJHHMPFOAEILNCNMMGOPPHDKGEKLEBPIJPCPPEJFPH"
    },
   "tBpmStartInfo" :
    {
     "checkDeadline" : "false",
     "checkAllLevels" : "false"
    }
  }
}

### JSON-ответ:


{
 "StartBpmProcessResult" : "1"
}


public static bool StartBpmProcess(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tStart = new StartBpmProcess()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        // Параметры запуска
        tBpmStartInfo = new BpmStartInfo()
        {
            checkDeadline = false,
            checkAllLevels = false
        }
    };
    // Запуск процесса на выполнение
    var result = somClient.StartBpmProcess(tStart);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
