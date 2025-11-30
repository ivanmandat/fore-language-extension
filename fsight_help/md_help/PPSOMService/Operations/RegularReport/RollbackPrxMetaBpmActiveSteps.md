# RollbackPrxMetaBpmActiveSteps: Операция

RollbackPrxMetaBpmActiveSteps: Операция
-


**


# RollbackPrxMetaBpmActiveSteps


## Синтаксис


string RollbackPrxMetaBpmActiveSteps(string mon)


## Параметры


mon. Моникёр
 экземпляра регламентного отчёта, используемого в процессе в шаге ввода
 данных/согласования.


## Описание


Операция RollbackPrxMetaBpmActiveSteps
 отклоняет шаги процесса, в которых используется регламентный отчёт.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта. Моникёр может быть
 получен при выполнении операции [OpenPrx](OpenPrx.htm). Регламентный
 отчёт должен быть открыт на просмотр.


Результатом выполнения операции будет список отклонённых шагов процесса.
 Список будет представлен в JSON-формате.


## Пример


Ниже приведён пример отклонения активных шагов процесса, в которых используется
 регламентный отчёт. В запросе передаётся моникёр открытого на просмотр
 регламентного отчёта. В ответе возвращается список отклонённых шагов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<RollbackPrxMetaBpmActiveSteps xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">GKHKPDEDFPCGGOAEGLOBBJCGACCJEMHEOKJBPBIFGEJFBHJF!M!S!PAHKBKHEDFPCGGOAEHKFHOIMIFPMOLGIEILHJCJJGCEKDAKLB</mon>  <comment xmlns="****">Отмена изменений.</comment>  </RollbackPrxMetaBpmActiveSteps>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <RollbackPrxMetaBpmActiveStepsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">{"treeWithActiveStepsDATAINPUTAndAUTHORITYWithRight":[{"Text":"Процесс","Data":{"objectKey":"110611","canStop":true,"Curator":"ADMIN"},"Value":"0","ImageUrl":"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAB9SURBVDhPY/j//z8GXnfwsgA2cWwYQwCo+QIUE2UIhgBQ438o/gDEBujy6BhDAMkAGE5AV4OMMQSwGADCE9DVwTCGABbNMHwAiDHCBYUDwmia0DEocFHCBUUzCKNpwIYfADHcJXQ3gCIvUBSIFEUj2QmJ7KRMWWYiDf9nAABW8QeF5onVoQAAAABJRU5ErkJggg==","Nodes":[{"Text":"Запущен 09.07.2025 15:52:45 ","StartDate":"09.07.2025  15:52:45","Data":{"objectKey":"2097","parentKey":"110611","Status":"0","canRollbackToStart":true,"canStop":true,"Curator":"ADMIN"},"Value":"1","ImageUrl":"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAB9SURBVDhPY/j//z8GXnfwsgA2cWwYQwCo+QIUE2UIhgBQ438o/gDEBujy6BhDAMkAGE5AV4OMMQSwGADCE9DVwTCGABbNMHwAiDHCBYUDwmia0DEocFHCBUUzCKNpwIYfADHcJXQ3gCIvUBSIFEUj2QmJ7KRMWWYiDf9nAABW8QeF5onVoQAAAABJRU5ErkJggg==","Nodes":[{"Text":"Ввод данных","Data":{"objectKey":"110611*0@0^1","Status":"2","canLinkObjectRead":true,"canFinish":true,"canRollback":true,"stepType":"2","executionType":"1","StartTime":"09.07.2025  10:52:45"},"Value":"3","ImageUrl":"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVDhPvZLRCYAwEEM7Sr/8dqRu1BEcxQEcwhEcQRPIiRy2Hn40EKRnXmqlaZimus3wIc8axwVoh085XsIgXPUkeJco0paDFrfuF7iw2Up4nPYRFPKwuSr2LgR6MOe/d+7DFAMK/oIL7P90DKYQWgU8S8Jwhm3HZ8k3TCHIm2Ywv6ToVUwAeDFYkjUapZQuTazWy3XdBtUAAAAASUVORK5CYII="}]}]}]}</RollbackPrxMetaBpmActiveStepsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "RollbackPrxMetaBpmActiveSteps" :
  {
   "mon" : "GKHKPDEDFPCGGOAEGLOBBJCGACCJEMHEOKJBPBIFGEJFBHJF!M!S!PAHKBKHEDFPCGGOAEHKFHOIMIFPMOLGIEILHJCJJGCEKDAKLB",
   "comment" : "Отмена изменений."
  }
}

### JSON-ответ:


{
 "RollbackPrxMetaBpmActiveStepsResult" : "{"treeWithActiveStepsDATAINPUTAndAUTHORITYWithRight":[{"Text":"Процесс","Data":{"objectKey":"110611","canStop":true,"Curator":"ADMIN"},"Value":"0","ImageUrl":"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAB9SURBVDhPY/j//z8GXnfwsgA2cWwYQwCo+QIUE2UIhgBQ438o/gDEBujy6BhDAMkAGE5AV4OMMQSwGADCE9DVwTCGABbNMHwAiDHCBYUDwmia0DEocFHCBUUzCKNpwIYfADHcJXQ3gCIvUBSIFEUj2QmJ7KRMWWYiDf9nAABW8QeF5onVoQAAAABJRU5ErkJggg==","Nodes":[{"Text":"Запущен 09.07.2025 15:52:45 ","StartDate":"09.07.2025  15:52:45","Data":{"objectKey":"2097","parentKey":"110611","Status":"0","canRollbackToStart":true,"canStop":true,"Curator":"ADMIN"},"Value":"1","ImageUrl":"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAAB9SURBVDhPY/j//z8GXnfwsgA2cWwYQwCo+QIUE2UIhgBQ438o/gDEBujy6BhDAMkAGE5AV4OMMQSwGADCE9DVwTCGABbNMHwAiDHCBYUDwmia0DEocFHCBUUzCKNpwIYfADHcJXQ3gCIvUBSIFEUj2QmJ7KRMWWYiDf9nAABW8QeF5onVoQAAAABJRU5ErkJggg==","Nodes":[{"Text":"Ввод данных","Data":{"objectKey":"110611*0@0^1","Status":"2","canLinkObjectRead":true,"canFinish":true,"canRollback":true,"stepType":"2","executionType":"1","StartTime":"09.07.2025  10:52:45"},"Value":"3","ImageUrl":"data:image/jpeg;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACQSURBVDhPvZLRCYAwEEM7Sr/8dqRu1BEcxQEcwhEcQRPIiRy2Hn40EKRnXmqlaZimus3wIc8axwVoh085XsIgXPUkeJco0paDFrfuF7iw2Up4nPYRFPKwuSr2LgR6MOe/d+7DFAMK/oIL7P90DKYQWgU8S8Jwhm3HZ8k3TCHIm2Ywv6ToVUwAeDFYkjUapZQuTazWy3XdBtUAAAAASUVORK5CYII="}]}]}]}"
}


public static string RollbackPrxMetaBpmActiveSteps(string moniker, string rollbackComment)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tRoll = new RollbackPrxMetaBpmActiveSteps()
    {
        mon = moniker,
        comment = rollbackComment
    };
    // Отклонение активных шагов
    var result = somClient.RollbackPrxMetaBpmActiveSteps(tRoll);
    return result;
}


См. также:


[Работа
 с регламентными отчётами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
