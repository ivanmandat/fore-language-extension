# CloseWbk: Операция

CloseWbk: Операция
-


**


# CloseWbk


## Синтаксис


bool CloseWbk(WbkId tWbk)


## Параметры


tWbk. Моникёр экземпляра открытой
 рабочей книги.


## Описание


Операция CloseWbk закрывает
 экземпляр открытой рабочей книги.


## Комментарии


Для выполнения операции необходимо в поле tWbk
 указать моникёр экземпляра рабочей книги, которую необходимо закрыть.
 Моникёр может быть получен при выполнении операции [OpenWbk](OpenWbk.htm). Результатом операции будет
 логическое значение true, если
 закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра рабочей книги. В запросе передается
 моникёр закрываемой рабочей книги. В ответе приходит признак удачного
 закрытия.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseWbk xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tWbk xmlns="****">
  <id>S1!M!S!W4</id>  </tWbk>
  </CloseWbk>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseWbkResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseWbkResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseWbk" :
  {
   "tWbk" :
    {
     "id" : "S1!M!S!W4"
    }
  }
}

### JSON-ответ:


{
 "CloseWbkResult" : "1"
}


public static bool CloseWbk(WbkId id)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tClose = new CloseWbk()
    {
        tWbk = id
    };
    // Закрытие рабочей книги
    var result = somClient.CloseWbk(tClose);
    return result;
}


См. также:


[Работа
 с базой данных временных рядов](TimeSeriesDatabase_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
