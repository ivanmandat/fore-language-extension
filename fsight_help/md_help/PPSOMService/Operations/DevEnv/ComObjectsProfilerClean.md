# ComObjectsProfilerClean: Операция

ComObjectsProfilerClean: Операция
-


**


# ComObjectsProfilerClean


## Синтаксис


bool ComObjectsProfilerClean()


## Описание


Операция ComObjectsProfilerClean
 очищает журнал утечек памяти от записей с корректной работой объектов.


## Комментарии


Операция не имеет параметров, вызывается перед операцией [ComObjectsProfilerFinish](ComObjectsProfilerFinish.htm). После выполнения
 операции ComObjectsProfilerClean
 в журнале остаются только те записи, которые соответствуют утечкам памяти.


## Пример


Ниже приведён пример очистки журнала утечек памяти.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
  <ComObjectsProfilerClean xmlns="**http://www.fsight.ru/PP.SOM.Som**" />
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ComObjectsProfilerCleanResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</ComObjectsProfilerCleanResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ComObjectsProfilerClean" : ""
}

### JSON-ответ:


{
 "ComObjectsProfilerCleanResult" : "1"
}


public static bool ComObjectsProfilerClean()
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    var tArg = new ComObjectsProfilerClean();
    // Очистить журнал утечек памяти от лишней информации
    var result = somClient.ComObjectsProfilerClean(tArg);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
