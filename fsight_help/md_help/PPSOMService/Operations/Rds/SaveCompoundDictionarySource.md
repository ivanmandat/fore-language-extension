# SaveCompoundDictionarySource: Операция

SaveCompoundDictionarySource: Операция
-


**


# SaveCompoundDictionarySource


## Синтаксис


bool SaveCompoundDictionarySource(RdsId id)


## Параметры


id. Моникёр
 источника составного справочника НСИ.


## Описание


Операция SaveCompoundDictionarySource
 сохраняет настройки источника составного справочника НСИ.


## Комментарии


Для выполнения операции укажите в поле id
 моникёр источника составного справочника НСИ. Моникёр может быть получен
 при выполнении операции [CreateCompoundDictionarySource](CreateCompoundDictionarySource.htm),
 [OpenCompoundDictionarySource](OpenCompoundDictionarySource.htm).


Результатом выполнения операции будет логическое значение true,
 если сохранение изменений завершилось успешно.


## Пример


Ниже приведён пример сохранения источника составного справочника НСИ.
 В запросе передаётся моникёр источника. В ответе возвращается признак
 успешного сохранения.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SaveCompoundDictionarySource xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2</id>  </id>
  </SaveCompoundDictionarySource>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
  <SaveCompoundDictionarySourceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">1</SaveCompoundDictionarySourceResult>  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SaveCompoundDictionarySource" :
  {
   "id" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2"
    }
  }
}

### JSON-ответ:


{
 "SaveCompoundDictionarySourceResult" : "1"
}


public static bool SaveCompoundDictionarySource(string sourceMoniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tSave = new SaveCompoundDictionarySource()
    {
        id = new RdsId() { id = sourceMoniker }
    };
    // Сохранение изменений источника составного справочника НСИ
    var tResult = somClient.SaveCompoundDictionarySource(tSave);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
