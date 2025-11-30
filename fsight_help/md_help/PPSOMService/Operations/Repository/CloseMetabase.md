# CloseMetabase: Операция

CloseMetabase: Операция
-


**


# CloseMetabase


## Синтаксис


bool CloseMetabase(MbId tMb)


## Параметры


tMb. Моникёр соединения с репозиторием.


## Описание


Операция CloseMetabase осуществляет
 отключение от репозитория.


## Комментарии


Для выполнения операции необходимо указать моникёр соединения, которое
 необходимо закрыть. Результатом операции будет логическое значение true, если отключение от репозитория
 завершилось успешно. Моникёр соединения с репозиторием должен быть получен
 при предварительном вызове операции [OpenMetabase](OpenMetabase.htm).


## Пример


Пример отключения от репозитория. В теле запроса передается моникёр
 открытого соединения. В качестве ответа приходит признак удачного отключения
 от репозитория.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseMetabase xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xmlns="****">
  <id>S6!M</id>  </tMb>
  </CloseMetabase>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseMetabaseResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseMetabaseResult>  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "CloseMetabase" :
  {
   "tMb" :
    {
     "id" : "S6!M"
    }
  }
}

### JSON-ответ:


{
 "CloseMetabaseResult" : "1"
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


	Моникёр соединения с репозиторием передается в качестве входного
	 параметра функции. Результатом работы функции является результат выполнения
	 операции.


public static bool MetabaseDisconnect(string mb)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операций
    var tClose = new CloseMetabase()
    {
        tMb = new MbId() { id = mb }
    };
    //Закрытие подключения к репозиторию
    var b = somClient.CloseMetabase(tClose);
    return b;
}


См. также:


[Общие операции](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
