# CloseMetabaseLink: Операция

CloseMetabaseLink: Операция
-


**


# CloseMetabaseLink


## Синтаксис


bool CloseMetabaseLink(OdId tOb)


## Параметры


tOb. Моникёр
 открытого экземпляра связи с репозиторием.


## Описание


Операция CloseMetabaseLink закрывает
 открытый экземпляр связи с репозиторием.


## Комментарии


Для выполнения операции необходимо в поле tOb
 указать моникёр экземпляра связи с репозиторием, который необходимо закрыть.
 Результатом операции будет логическое значение true,
 если закрытие завершилось успешно.


## Пример


Пример закрытия экземпляра связи с репозиторием. В теле запроса передаётся
 моникёр открытого экземпляра связи с репозиторием. В ответе приходит признак
 удачного закрытия.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseMetabaseLink xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI</id>  </tOb>
  </CloseMetabaseLink>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseMetabaseLinkResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseMetabaseLinkResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseMetabaseLink" :
  {
   "tOb" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI"
    }
  }
}

### JSON-ответ:


{
 "CloseMetabaseLinkResult" : "1"
}


public static bool CloseMetabaseLink(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tClose = new CloseMetabaseLink()
    {
        tOb = new OdId() { id = moniker }
    };
    //Закрытие экземпляра связи с репозиторием
    var b = somClient.CloseMetabaseLink(tClose);
    return b;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
