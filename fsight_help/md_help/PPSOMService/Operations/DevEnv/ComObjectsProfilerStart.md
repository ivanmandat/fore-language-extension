# ComObjectsProfilerStart: Операция

ComObjectsProfilerStart: Операция
-


**


# ComObjectsProfilerStart


## Синтаксис


bool ComObjectsProfilerStart(ComObjectsProfilerStartArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция ComObjectsProfilerStart
 включает выявление утечек памяти.


## Комментарии


После выполнения операции на BI-сервере будут отслеживаться и фиксироваться
 запуски объектов, их взаимодействие между собой. При этом будут выявляться
 случаи, когда по каким-либо причинам объекты после их использования не
 могут быть выгружены и остаются в памяти. Будет вестись журнал утечек
 памяти. Если выявление утечек памяти было запущено ранее, то указание
 в поле tArg.ResetObjects значения
 true позволяет сбросить сформированный
 журнал утечек памяти.


Последующий вызов операции [ComObjectsProfilerClean](ComObjectsProfilerClean.htm)
 позволяет очистить журнал от записей с корректной работой объектов и оставить
 в журнале только те записи, которые соответствуют неосвобождённым объектам.


Вызов операции [ComObjectsProfilerFinish](ComObjectsProfilerFinish.htm)
 позволит остановить выявление утечек памяти и сохранить сформированный
 журнал в файл.


Результатом выполнения операции ComObjectsProfilerStart
 будет логическое значение true,
 если выявление утечек памяти запущено успешно.


## Пример


Ниже приведён пример запуска выявления утечек памяти.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ComObjectsProfilerStart xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <ResetObjects>true</ResetObjects>  </tArg>
  </ComObjectsProfilerStart>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ComObjectsProfilerStartResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">0</ComObjectsProfilerStartResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ComObjectsProfilerStart" :
  {
   "tArg" :
    {
     "ResetObjects" : "true"
    }
  }
}

### JSON-ответ:


{
 "ComObjectsProfilerStartResult" : "0"
}


public static bool ComObjectsProfilerStart()
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tStart = new ComObjectsProfilerStart()
    {
        tArg = new ComObjectsProfilerStartArg()
        {
            ResetObjects = true
        }
    };
    // Запустить выявление утечек памяти
    var result = somClient.ComObjectsProfilerStart(tStart);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
