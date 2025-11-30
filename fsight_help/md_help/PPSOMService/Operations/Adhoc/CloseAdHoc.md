# CloseAdHoc: Операция

CloseAdHoc: Операция
-


**


# CloseAdHoc


## Синтаксис


bool CloseAdHoc(AdHocId tAdHocId)


## Параметры


tAdHocId. Моникёр открытого
 экземпляра аналитической панели.


## Описание


Операция CloseAdHoc закрывает
 экземпляр открытой аналитической панели.


## Комментарии


Для выполнения операции необходимо в поле tAdHocId
 указать моникёр экземпляра аналитической панели, который необходимо закрыть.
 Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Пример закрытия экземпляра аналитической панели. В теле запроса передается
 моникёр аналитической панели. В качестве ответа приходит признак удачного
 закрытия.


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


		[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


				[![](../../minus.gif)](../../#)<CloseAdHoc
				 xmlns="**http://www.fsight.ru/PP.SOM.Som**">


					[![](../../minus.gif)](../../#)<tAdHocId xmlns="** **">


						  <id>S1!M!S!AdHoc1</id>


					  </tAdHocId>


				  </CloseAdHoc>


			  </s:Body>


		  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


			[![](../../minus.gif)](../../#)<soapenv:Body>


				  <CloseAdHocResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseAdHocResult>


			  </soapenv:Body>


		  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "CloseAdHoc" :
  {
   "tAdHocId" :
    {
     "id" : "S1!M!S!AdHoc1"
    }
  }
}

### JSON-ответ:


{
 "CloseAdHocResult" : "1"
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


	Указанная ниже функция CloseAdhoc
	 закрывает экземпляр аналитической панели и возвращает признак удачного
	 закрытия. Моникёр аналитической панели передается в качестве входного
	 параметра функции.


public static bool CloseAdhoc(AdHocId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseAdHoc()
    {
        tAdHocId = moniker
    };
    //Закрытие аналитической панели
    var result = somClient.CloseAdHoc(tClose);
    return result;
}


См. также:


[Работа
 с аналитической панелью](Adhoc_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
