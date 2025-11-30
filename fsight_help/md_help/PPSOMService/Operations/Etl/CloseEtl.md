# CloseEtl: Операция

CloseEtl: Операция
-


**


# CloseEtl


## Синтаксис


bool CloseEtl(EtlId tEtl)


## Параметры


tEtl.
 Моникёр открытого экземпляра задачи ETL.


## Описание


Операция CloseEtl закрывает
 задачу ETL.


## Комментарии


Для выполнения операции необходимо в параметре tEtl
 указать моникёр экземпляра задачи ETL, который необходимо закрыть. Результатом
 операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


[![](../../Opened.gif)![](../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseEtl xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tEtl xmlns="****">
  <id>S1!M!S!L1</id>  </tEtl>
  </CloseEtl>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseEtlResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseEtlResult>  </soapenv:Body>
  </soapenv:Envelope>


[![](../../Opened.gif)![](../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "CloseEtl" :
  {
   "tEtl" :
    {
     "id" : "S1!M!S!L1"
    }
  }
}

### JSON-ответ:


{
 "CloseEtlResult" : "1"
}


[![](../../Opened.gif)![](../../Closed.gif)C#](javascript:TextPopup(this))


	Указанная ниже функция CloseETL
	 закрывает экземпляр задачи ETL и возвращает признак удачного закрытия.
	 Моникёр задачи передается в качестве входного параметра функции.


public static bool CloseETL(EtlId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseEtl()
    {
        tEtl = moniker
    };
    //Закрытие экземпляра задачи ETL
    var b = somClient.CloseEtl(tClose);
    return b;
}


См. также:


[Работа с
 задачей ETL](Etl_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
