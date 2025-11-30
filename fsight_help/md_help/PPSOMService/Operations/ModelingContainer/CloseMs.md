# CloseMs: Операция

CloseMs: Операция
-


**


# CloseMs


## Синтаксис


bool CloseMs(MsId tMs)


## Параметры


tMs. Моникёр открытого экземпляра
 контейнера моделирования.


## Описание


Операция CloseMs закрывает экземпляр
 контейнера моделирования.


## Комментарии


После выполнения операция возвращает признак того, что закрытие успешно
 выполнено. Допустимые значения:


	- True. Контейнер моделирования
	 закрыт;


	- False. Закрытие контейнера
	 моделирования не выполнено.


## Пример


Пример закрытия экземпляра контейнера моделирования. В запросе передается
 моникёр контейнера. В ответе приходит признак удачного закрытия.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseMs xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMs xmlns="****">
  <id>KJBJEFBHPOMOFOAEJIFPCMEAGCGHCBHEHIMMNOMFBAKHHEMP!M!S!CDIGHEHBHPOMOFOAEBJKDHOKMGGBEOFCELIIHKANJDKGFAHKL</id>  </tMs>
  </CloseMs>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseMsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseMsResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseMs" :
  {
   "tMs" :
    {
     "id" : "KJBJEFBHPOMOFOAEJIFPCMEAGCGHCBHEHIMMNOMFBAKHHEMP!M!S!CDIGHEHBHPOMOFOAEBJKDHOKMGGBEOFCELIIHKANJDKGFAHKL"
    }
  }
}

### JSON-ответ:


{
 "CloseMsResult" : "1"
}


public static bool CloseMs(string moniker)
{
    // Создаем прокси-объект для выполнения операции
    var somClient = new SomPortTypeClient();
    // Задаём параметры выполнения операции
    var tClose = new CloseMs()
    {
        tMs = new MsId() { id = moniker }
    };
    // Закрываем контейнер моделирования
    var result = somClient.CloseMs(tClose);
    return result;
}


См. также:


[Работа
 с контейнером моделирования](ModelingContainer_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
