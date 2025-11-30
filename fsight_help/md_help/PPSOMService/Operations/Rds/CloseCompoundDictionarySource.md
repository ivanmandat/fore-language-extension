# CloseCompoundDictionarySource: Операция

CloseCompoundDictionarySource: Операция
-


**


# CloseCompoundDictionarySource


## Синтаксис


bool CloseCompoundDictionarySource(RdsId id)


## Параметры


id. Моникёр
 источника составного справочника НСИ.


## Описание


Операция CloseCompoundDictionarySource
 закрывает источник составного справочника НСИ.


## Комментарии


Для выполнения операции укажите в поле id
 моникёр источника составного справочника НСИ. Моникёр может быть получен
 при выполнении операции [CreateCompoundDictionarySource](CreateCompoundDictionarySource.htm),
 [OpenCompoundDictionarySource](OpenCompoundDictionarySource.htm).


Результатом выполнения операции будет логическое значение true,
 если закрытие источника завершилось успешно.


## Пример


Ниже приведён пример закрытия источника составного справочника НСИ.
 В запросе передаётся моникёр источника. В ответе возвращается признак
 успешного закрытия.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CloseCompoundDictionarySource xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2</id>  </id>
  </CloseCompoundDictionarySource>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <CloseCompoundDictionarySourceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</CloseCompoundDictionarySourceResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CloseCompoundDictionarySource" :
  {
   "id" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2"
    }
  }
}

### JSON-ответ:


{
 "CloseCompoundDictionarySourceResult" : "1"
}


public static bool CloseCompoundDictionarySource(string sourceMoniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tClose = new CloseCompoundDictionarySource()
    {
        id = new RdsId() { id = sourceMoniker }
    };
    // Закрытие источника составного справочника НСИ
    var tResult = somClient.CloseCompoundDictionarySource(tClose);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
