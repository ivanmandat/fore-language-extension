# CloseRds: Операция

CloseRds: Операция
-


**


# CloseRds


## Синтаксис


bool CloseRds(RdsId tRds)


## Параметры


tRds. Моникёр открытого экземпляра
 справочника НСИ


## Описание


Операция CloseRds закрывает
 открытый экземпляр справочника НСИ.


## Комментарии


Для выполнения операции необходимо в параметре tRds
 указать моникёр экземпляра справочника НСИ, который необходимо закрыть.
 Результатом операции будет логическое значение true, если закрытие завершилось успешно.


## Пример


Пример закрытия экземпляра справочника НСИ. В запросе передается моникёр
 открытого экземпляра справочника. В ответе приходит признак удачного закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseRds xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRds xmlns="****">
  <id>S1!M!S!N2</id>  </tRds>
  </CloseRds>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseRdsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseRdsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseRds" :
  {
   "tRds" :
    {
     "id" : "S1!M!S!N2"
    }
  }
}

### JSON-ответ:


{
 "CloseRdsResult" : "1"
}


public static bool CloseRDSDimension(RdsId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseRds()
    {
        tRds = moniker
    };
    //Закрытие экземпляра справочника
    var b = somClient.CloseRds(tClose);
    return b;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
