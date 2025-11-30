# CloseEax: Операция

CloseEax: Операция
-


**


# CloseEax


## Синтаксис


bool CloseEax(EaxId tEax)


## Параметры


tEax. Моникёр открытого экземпляра
 экспресс-отчета.


## Описание


Операция CloseEax закрывает
 экземпляр экспресс-отчета.


## Комментарии


Для выполнения операции необходимо в параметре tEax
 указать моникёр экземпляра экспресс-отчета, который необходимо закрыть.
 Результатом операции будет логическое значение True,
 если закрытие экспресс-отчета завершилось успешно.


## Пример


Пример закрытия экземпляра экспресс-отчета. В запросе передается моникёр
 экспресс-отчета. В ответе приходит признак удачного закрытия.


	 SOAP
	  JSON C#


### SOAP-запрос:


		[![](../../minus.gif)](../../#) <s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">


						[![](../../minus.gif)](../../#) <CloseEax xmlns="**http://www.fsight.ru/PP.SOM.Som**">


								[![](../../minus.gif)](../../#) <tEax
								 xmlns="** **">


										  <id>S1!M!S!E11</id>


									  </tEax>


							  </CloseEax>


					  </s:Body>


			  </s:Envelope>


### SOAP-ответ:


		[![](../../minus.gif)](../../#) <soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">


				[![](../../minus.gif)](../../#) <soapenv:Body>


						  <CloseEaxResult
						 xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseEaxResult>


					  </soapenv:Body>


			  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseEax" :
  {
   "tEax" :
    {
     "id" : "S1!M!S!E1"
    }
  }
}

### JSON-ответ:


{
 "CloseEaxResult" : "1"
}


    public static bool CloseEax(EaxId moniker)
    {
        var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
        //Параметры выполнения операции
        var tClose = new CloseEax()
        {
            tEax = moniker
        };
        //Закрытие экспресс-отчета
        var result = somClient.CloseEax(tClose);
        return result;
    }


См. также:


[Работа
 с экспресс-отчётами](ExpressReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
