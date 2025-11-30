# GetBpmProcessInstanceJournal: Операция

GetBpmProcessInstanceJournal: Операция
-


**


# GetBpmProcessInstanceJournal


## Синтаксис


BpmProcessInstanceJournalResult GetBpmProcessInstanceJournal(BpmProcessId
 tBpmProcess, BpmProcessInstanceJournalArg tArg)


## Параметры


tBpmProcess. Моникёр
 открытого процесса.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetBpmProcessInstanceJournal
 получает журнал исполнения экземпляра процесса.


## Комментарии


Операция позволяет получить подробную информацию о выполнении отдельных
 шагов в рамках исполнения экземпляра процесса. Для выполнения операции
 укажите в поле tArg.instId ключ
 запущенного экземпляра процесса. Ключ может быть получен при выполнении
 операции [GetProcessInstances](GetProcessInstances.htm).


Результатом операции будет коллекция элементов с информацией о состоянии
 шагов исполняемого процесса.


## Пример


Ниже приведён пример получения журнала исполнения экземпляра процесса.
 В запросе передаётся моникёр открытого процесса и ключ экземпляра исполняющегося
 процесса. В ответе возвращается коллекция элементов с информацией о состоянии
 шагов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetBpmProcessInstanceJournal xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tBpmProcess xmlns="****">
  <id>NOHBFMIMOCJDGOAECBLCHDDGCNNBKKJEGLNLEFGONIKKGFFI!M!S!BPBDGDNPIMOCJDGOAEIMBANHJGKJGKPCFEJIHKPEIHBMHADJDF</id>  </tBpmProcess>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <instId>103307</instId>  </tArg>
  </GetBpmProcessInstanceJournal>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetBpmProcessInstanceJournalResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<stages xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <name>Этап 1</name>[![](../../minus.gif)](../../#)<steps>
[![](../../minus.gif)](../../#)<it>
  <name>Ручное действие 1</name>  <status>2</status>  <stDate>2024-08-09T11:05:21.000</stDate>  </it>
  </steps>
  </it>
  </stages>
  </GetBpmProcessInstanceJournalResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetBpmProcessInstanceJournal" :
  {
   "tBpmProcess" :
    {
     "id" : "NOHBFMIMOCJDGOAECBLCHDDGCNNBKKJEGLNLEFGONIKKGFFI!M!S!BPBDGDNPIMOCJDGOAEIMBANHJGKJGKPCFEJIHKPEIHBMHADJDF"
    },
   "tArg" :
    {
     "instId" : "103307"
    }
  }
}

### JSON-ответ:


{
 "GetBpmProcessInstanceJournalResult" :
  {
   "stages" :
    {
     "it" :
      {
       "name" : "Этап 1",
       "steps" :
        {
         "it" :
          {
           "name" : "Ручное действие 1",
           "status" : "2",
           "stDate" : "2024-08-09T11:05:21.000"
          }
        }
      }
    }
  }
}


public static BpmProcessInstanceJournalResult GetBpmProcessInstanceJournal(string moniker, uint processInstanceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetBpmProcessInstanceJournal()
    {
        // Формирование моникёра объекта
        tBpmProcess = new BpmProcessId() { id = moniker },
        tArg = new BpmProcessInstanceJournalArg()
        {
            instId = processInstanceKey
        }
    };
    // Получение журнала исполнения экземпляра процесса
    var result = somClient.GetBpmProcessInstanceJournal(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
