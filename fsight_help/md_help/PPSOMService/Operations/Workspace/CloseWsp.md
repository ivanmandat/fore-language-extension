# CloseWsp: Операция

CloseWsp: Операция
-


**


# CloseWsp


## Синтаксис


bool CloseWsp(WspId tWsp)


## Параметры


tWsp. Моникёр
 закрываемого экземпляра рабочего пространства.


## Описание


Операция CloseWsp закрывает
 экземпляр рабочего пространства.


## Комментарии


Для выполнения операции укажите в поле tWsp
 моникёр экземпляра рабочего пространства, который необходимо закрыть.
 Моникёр может быть получен при выполнении операции [OpenWsp](OpenWsp.htm).


Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Ниже приведён пример закрытия экземпляра рабочего пространства. В запросе
 передается моникёр открытого экземпляра рабочего пространства. В ответе
 приходит признак успешного закрытия.


	 SOAP
	  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseWsp xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tWsp xmlns="****">
  <id>CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG</id>  </tWsp>
  </CloseWsp>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseWspResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseWspResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseWsp" :
  {
   "tWsp" :
    {
     "id" : "CIMJHKLEBJECGOAEDDAIHBNBMCJPBEIEDLDBMALGIAOFGHDO!M!S!WSPMCLOGNLEBJECGOAEIIMMCOLKFIOGIGNEPLNLFCEAJGEIEIBG"
    }
  }
}

### JSON-ответ:


{
 "CloseWspResult" : "1"
}


public static bool CloseWorkspace(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tClose = new CloseWsp()
    {
        tWsp = new WspId() { id = moniker }
    };
    // Закрытие экземпляра рабочего пространства
    var b = somClient.CloseWsp(tClose);
    return b;
}


См. также:


[Работа с
 рабочим пространством](Wsp_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
