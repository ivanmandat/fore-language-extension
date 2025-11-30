# ComObjectsProfilerFinish: Операция

ComObjectsProfilerFinish: Операция
-


**


# ComObjectsProfilerFinish


## Синтаксис


int ComObjectsProfilerFinish(ComObjectsProfilerFinishArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция ComObjectsProfilerFinish
 останавливает выявление утечек памяти и сохраняет журнал утечек в файл.


## Комментарии


Для выполнения операции укажите в поле tArg.LogFile
 путь и наименование файла, в который будет сохранён журнал. Перед выполнением
 операции рекомендуется выполнить операцию [ComObjectsProfilerClean](ComObjectsProfilerClean.htm).


Если после сохранения журнала утечек в файл также необходимо очистить
 журнал в памяти, то задайте полю tArg.ResetObjects
 значение true.


Результатом выполнения операции будет количество зафиксированных утечек
 памяти.


## Пример


Ниже приведён пример остановки выявления утечек памяти и сохранения
 полученного журнала в файл.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ComObjectsProfilerFinish xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <LogFile>D:\Work\ComLog.log</LogFile>  <ResetObjects>true</ResetObjects>  </tArg>
  </ComObjectsProfilerFinish>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <ComObjectsProfilerFinishResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">156</ComObjectsProfilerFinishResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ComObjectsProfilerFinish" :
  {
   "tArg" :
    {
     "LogFile" : "D:\Work\ComLog.log",
     "ResetObjects" : "true"
    }
  }
}

### JSON-ответ:


{
 "ComObjectsProfilerFinishResult" : "156"
}


public static int ComObjectsProfilerFinish()
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tStart = new ComObjectsProfilerFinish()
    {
        tArg = new ComObjectsProfilerFinishArg()
        {
            LogFile = "D:\\Work\\ComLog.log",
            ResetObjects = true
        }
    };
    // Остановить выявление утечек памяти
    var result = somClient.ComObjectsProfilerFinish(tStart);
    return result;
}


См. также:


[Работа
 со средой разработки](DevEnv_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
