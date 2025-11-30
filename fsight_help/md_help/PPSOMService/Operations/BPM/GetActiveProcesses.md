# GetActiveProcesses: Операция

GetActiveProcesses: Операция
-


**


# GetActiveProcesses


## Синтаксис


GetActiveProcessesResult GetActiveProcesses(string
 mon)


## Параметры


mon. Моникёр
 соединения с репозиторием.


## Описание


Операция GetActiveProcesses
 получает информацию о процессах, которые выполняются в текущий момент
 в репозитории.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр соединения с репозиторием. Моникёр может быть получен при выполнении
 операции [OpenMetabase](../Repository/OpenMetabase.htm).


Результатом выполнения операции будет коллекция элементов, содержащая
 общую информацию о процессах, которые были запущены и выполняются в текущий
 момент.


## Пример


Ниже приведён пример получения информации о выполняющихся процессах.
 В запросе передаётся моникёр соединения с репозиторием. В ответе возвращается
 список выполняющихся процессов.


	 SOAP
	  JSON  C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<GetActiveProcesses
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					  <mon xmlns="** **">CDIKMKCKEHJCGOAELMMPKEGKAJIPBMFELKNPPPKHHFAHIIHI!M</mon>


				  </GetActiveProcesses>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				[![](../../minus.gif)](../../#)<GetActiveProcessesResult
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**"
				 xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">


					[![](../../minus.gif)](../../#)<list xmlns="** **">


						[![](../../minus.gif)](../../#)<it>


							  <key>118114</key>


							  <name>L2. Формирование Бюджета расходов
							 на страхование</name>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <key>118088</key>


							  <name>Тестовая копия</name>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <key>117931</key>


							  <name>Master</name>


						  </it>


						[![](../../minus.gif)](../../#)<it>


							  <key>117851</key>


							  <name>Процесс с подпроцессом</name>


						  </it>


					  </list>


				  </GetActiveProcessesResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


### JSON-запрос:


{
 "GetActiveProcesses" :
  {
   "mon" : "CDIKMKCKEHJCGOAELMMPKEGKAJIPBMFELKNPPPKHHFAHIIHI!M"
  }
}

### JSON-ответ:


{
 "GetActiveProcessesResult" :
  {
   "list" :
    {
     "it" :
      [
        {
         "key" : "118114",
         "name" : "L2. Формирование Бюджета расходов на страхование"
        },
        {
         "key" : "118088",
         "name" : "Тестовая копия"
        },
        {
         "key" : "117931",
         "name" : "Master"
        },
        {
         "key" : "117851",
         "name" : "Процесс с подпроцессом"
        }
      ]
    }
  }
}


public static GetActiveProcessesResult GetActiveProcesses(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetActiveProcesses()
    {
        mon = moniker
    };
    // Получение списка выполняющихся процессов
    var result = somClient.GetActiveProcesses(tGet);
    return result;
}


См. также:


[Работа с
 процессами](BPM_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
