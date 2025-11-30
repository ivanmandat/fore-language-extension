# GetCompoundDictionarySource: Операция

GetCompoundDictionarySource: Операция
-


**


# GetCompoundDictionarySource


## Синтаксис


CompoundDictionarySourceResult GetCompoundDictionarySource(RdsId
 id, RdsCompoundDictSourcePattern tArg)


## Параметры


mon. Моникёр
 источника составного справочника НСИ.


tArg. Шаблон получения метаданных
 источника составного справочника НСИ.


## Описание


Операция GetCompoundDictionarySource
 получает настройки источника составного справочника НСИ.


## Комментарии


Для выполнения операции укажите в поле tRds
 моникёр источника составного справочника НСИ, в поле tArg
 шаблон, в соответствии с которым будут получены настройки источника. Моникёр
 может быть получен при выполнении операции [CreateCompoundDictionarySource](CreateCompoundDictionarySource.htm),
 [OpenCompoundDictionarySource](OpenCompoundDictionarySource.htm).


Результатом выполнения операции будут полученные настройки источника.


## Пример


Ниже приведён пример получения настроек источника составного справочника
 НСИ. В запросе передаётся моникёр источника. В ответе возвращаются полученные
 настройки.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetCompoundDictionarySource xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!1</id>  </id>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <all>true</all>  </tArg>
  </GetCompoundDictionarySource>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetCompoundDictionarySourceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <k>1</k>  <id>COMPOUNDDICTIONARYSOURCE</id>  <n>Источник</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<source ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>OBJ305385</i>  <n>Предприятия</n>  <k>305385</k>  <c>3076</c>  <p>5610</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </source>
  <mappings />
  </meta>
  </GetCompoundDictionarySourceResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetCompoundDictionarySource" :
  {
   "id" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!1"
    },
   "tArg" :
    {
     "all" : "true"
    }
  }
}

### JSON-ответ:


{
 "GetCompoundDictionarySourceResult" :
  {
   "id" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!1"
    },
   "meta" :
    {
     "k" : "1",
     "id" : "COMPOUNDDICTIONARYSOURCE",
     "n" : "Источник",
     "vis" : "1",
     "source" :
      {
       "@ds" : "",
       "@isShortcut" : "0",
       "@isLink" : "0",
       "@ver" : "5",
       "@hf" : "0",
       "i" : "OBJ305385",
       "n" : "Предприятия",
       "k" : "305385",
       "c" : "3076",
       "p" : "5610",
       "h" : "0",
       "hasPrv" : "0",
       "ic" : "0",
       "trackElementDependents" : "0"
      },
     "mappings" : ""
    }
  }
}


public static CompoundDictionarySourceResult GetCompoundDictionarySource(string sourceMoniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tGet = new GetCompoundDictionarySource()
    {
        tArg = new RdsCompoundDictSourcePattern()
        {
            all = true
        },
        id = new RdsId() { id = sourceMoniker }
    };
    // Получение настроек источника составного справочника НСИ
    var tResult = somClient.GetCompoundDictionarySource(tGet);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
