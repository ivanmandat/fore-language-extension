# ForeExecAtomic: Операция

ForeExecAtomic: Операция
-


**


# ForeExecAtomic


## Синтаксис


ForeExecResult ForeExecAtomic(ForeExecAtomicArg
 tArg)


## Параметры


tArg. Параметры выполнения
 операции.


## Описание


Операция ForeExecAtomic выполняет
 Fore-методы при работе в интеграционных сервисах.


## Комментарии


Интеграционные сервисы - это сторонние сервисы, которые обращаются за
 данными к репозиториям платформы. Операция ForeExecAtomic
 позволяет подключиться к репозиторию под специальным интеграционным пользователем,
 выполнить Fore-метод, вернуть его результат и закрыть соединение с репозиторием.


Для использования операции ForeExecAtomic
 репозиторий предварительно необходимо подготовить следующим образом:


	- В описании подключения к репозиторию для настройки [EnableForeExecAtomic](Setup.chm::/06_AK_Client_Config/Configuring_repository_list_in_the_system_registry.htm)
	 установите значение true.


	- С помощью утилиты [PP.Util](Setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm#save_creds)
	 с параметром save_creds и
	 указанием ключевого слова MBCACHE сохраните учётные данные владельца
	 схемы или любого пользователя с правами на чтение системных таблиц
	 репозитория. С использованием сохраненных учётных данных будет производиться
	 подключение к БД и чтение системной таблицы с интеграционными пользователями,
	 которая будет кешироваться в память BI-сервера при первом выполнении
	 операции ForeExecAtomic.


	- С помощью утилиты [PP.Util](Setup.chm::/05_RepoMngr/Service_Applications/PP_Util.htm#save_integration_user)
	 с параметром save_integration_user
	 сгенерируйте токен для интеграционного пользователя и сохраните учётные
	 данные технологической учётной записи для подключения к репозиторию
	 с использованием операции ForeExecAtomic.


После выполнения указанных действий появится возможность использовать
 операцию ForeExecAtomic. Для выполнения
 операции укажите в поле tArg.token
 токен интеграционного пользователя, полученный при выполнении опции save_integration_user, в поле tArg.metabaseId идентификатор репозитория,
 а в полях tArg.objKey и tArg.foreArg ключ модуля/сборки
 и параметры выполняемого Fore-метода.


Результатом выполнения операции будет результат, возвращаемый Fore-методом.


## Пример


Ниже приведён пример выполнения Fore-метода интеграционным пользователем,
 который должен быть сохранён для репозитория. В запросе передаётся токен
 интеграционного пользователя, идентификатор репозитория, ключ модуля и
 параметры выполняемого метода. В ответе приходит результат выполнения
 метода.


[![](../../Opened.gif)![](../../Closed.gif)Выполняемый
 метод](javascript:TextPopup(this))


	Function TestAtomic(A, B: Integer): String;

	Begin

	    Return "A > B: " + (a > b).ToString + ". Дата и время выполнения: " + DateTime.Now.ToString;

	End Function TestAtomic;


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<ForeExecAtomic xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <token>{BD8D4E02-FA2A-405B-9938-8DB97087C7D8}</token>  <metabaseId>TestRepository</metabaseId>  <objKey>20109</objKey>[![](../../minus.gif)](../../#)<foreArg>
  <methodName>TestAtomic</methodName>[![](../../minus.gif)](../../#)<args>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <value>100</value>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <value>10</value>  </it>
  </args>
  </foreArg>
  </tArg>
  </ForeExecAtomic>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<ForeExecAtomicResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <result xmlns="****">A > B: True. Дата и время выполнения: 08.08.2025 11:18:45</result>  </ForeExecAtomicResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "ForeExecAtomic" :
  {
   "tArg" :
    {
     "token" : "{BD8D4E02-FA2A-405B-9938-8DB97087C7D8}",
     "metabaseId" : "TestRepository",
     "objKey" : "20109",
     "foreArg" :
      {
       "methodName" : "TestAtomic",
       "args" :
        {
         "it" :
          [
            {
             "k" : "1",
             "value" : "100"
            },
            {
             "k" : "2",
             "value" : "10"
            }
          ]
        }
      }
    }
  }
}

### JSON-ответ:


{
 "ForeExecAtomicResult" :
  {
   "result" : "A > B: True. Дата и время выполнения: 08.08.2025 11:18:45"
  }
}


public static ForeExecResult ForeExecAtomic(string userToken, string repoId, uint assmKey, string methodName)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tExec = new ForeExecAtomic()
    {
        tArg = new ForeExecAtomicArg()
        {
            token = userToken,
            metabaseId = repoId,
            objKey = assmKey,
            foreArg = new ForeExecArg()
            {
                methodName = methodName,
                args = new OdArg[2]
                {
                    new OdArg(){ k = 1, value = "100" },
                    new OdArg(){ k = 2, value = "10" }
                }
            }
        }
    };
    // Выполнение метода
    var result = somClient.ForeExecAtomic(tExec);
    return result;
}


См. также:


[Специфические
 операции](Specific_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
