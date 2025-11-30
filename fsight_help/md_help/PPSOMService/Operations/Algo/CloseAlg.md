# CloseAlg: Операция

CloseAlg: Операция
-


**


# CloseAlg


## Синтаксис


bool CloseAlg(AlgId tAlg)


## Параметры


tAlg. Моникёр
 открытого экземпляра алгоритма расчёта показателей.


## Описание


Операция CloseAlg закрывает
 экземпляр алгоритма расчёта показателей.


## Комментарии


Для выполнения операции необходимо в поле tAlg
 указать моникёр экземпляра алгоритма расчёта, который необходимо закрыть.
 Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра алгоритма расчёта. В запросе
 передается моникёр открытого экземпляра алгоритма расчёта. В ответе приходит
 признак удачного закрытия.


	 SOAP JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseAlg xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tAlg xmlns="****">
  <id>S1!M!S!C1</id>  </tAlg>
  </CloseAlg>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseAlgResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseAlgResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseAlg" :
  {
   "tAlg" :
    {
     "id" : "S1!M!S!C1"
    }
  }
}

### JSON-ответ:


{
 "CloseAlgResult" : "1"
}


public static bool CloseAlg(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseAlg()
    {
        tAlg = new AlgId() { id = moniker }
    };
    //Закрытие экземпляра алгоритма расчёта показателей
    var result = somClient.CloseAlg(tClose);
    return result;
}


См. также:


[Работа с
 алгоритмами расчёта показателей](Algo_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
