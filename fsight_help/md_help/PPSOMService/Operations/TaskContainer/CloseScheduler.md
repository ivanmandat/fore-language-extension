# CloseScheduler: Операция

CloseScheduler: Операция
-


**


# CloseScheduler


## Синтаксис


bool CloseScheduler(SchedulerId tScheduler)


## Параметры


tScheduler. Моникёр экземпляра
 контейнера запланированных задач, который необходимо закрыть.


## Описание


Операция CloseScheduler закрывает
 контейнер запланированных задач.


## Комментарии


Для выполнения операции необходимо в поле tScheduler
 указать моникёр экземпляра контейнера запланированных задач, который необходимо
 закрыть. Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра контейнера запланированных
 задач. В запросе передается моникёр контейнера. В ответе приходит признак
 удачного закрытия.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseScheduler xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tScheduler xmlns="****">
  <id>S1!M!6445</id>  </tScheduler>
  </CloseScheduler>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseSchedulerResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseSchedulerResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseScheduler" :
  {
   "tScheduler" :
    {
     "id" : "S1!M!6445"
    }
  }
}

### JSON-ответ:


{
 "CloseSchedulerResult" : "1"
}


public static bool CloseTasksContainern(SchedulerId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseScheduler()
    {
        tScheduler = moniker
    };
    //Закрытие экземпляра контейнера запланированных задач
    var b = somClient.CloseScheduler(tClose);
    return b;
}


См. также:


[Работа
 с контейнером моделирования](TaskContainer_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
