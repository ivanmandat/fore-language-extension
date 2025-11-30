# CloseRdsDatabase: Операция

CloseRdsDatabase: Операция
-


**


# CloseRdsDatabase


## Синтаксис


bool CloseRdsDatabase(RdsDbId tRdsDb)


## Параметры


tRdsDb. Моникёр
 открытого экземпляра репозитория НСИ.


## Описание


Операция CloseRdsDatabase закрывает
 экземпляр репозитория НСИ.


## Комментарии


Для выполнения операции укажите в поле tRdsDb
 моникёр экземпляра репозитория НСИ, который необходимо закрыть. Моникёр
 может быть получен при выполнении операции [OpenRdsDatabase](OpenRdsDatabase.htm). Результатом
 операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра репозитория НСИ. В запросе
 передаётся моникёр открытого репозитория НСИ, в ответе приходит признак
 успешного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseRdsDatabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRdsDb xmlns="****">
  <id>S1!M!S!RD1</id>  </tRdsDb>
  </CloseRdsDatabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseRdsDatabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseRdsDatabaseResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseRdsDatabase" :
  {
   "tRdsDb" :
    {
     "id" : "S1!M!S!RD1"
    }
  }
}

### JSON-ответ:


{
 "CloseRdsDatabaseResult" : "1"
}


public static bool CloseRDSDatabase(RdsDbId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseRdsDatabase()
    {
        tRdsDb = moniker
    };
    //Закрытие экземпляра репозитория НСИ
    var b = somClient.CloseRdsDatabase(tClose);
    return b;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
