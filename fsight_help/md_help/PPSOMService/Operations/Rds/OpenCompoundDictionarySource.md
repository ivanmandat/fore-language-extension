# OpenCompoundDictionarySource: Операция

OpenCompoundDictionarySource: Операция
-


**


# OpenCompoundDictionarySource


## Синтаксис


CompoundDictionarySourceResult OpenCompoundDictionarySource(RdsId
 tRds, OpenCompoundDictionarySourceArg tArg)


## Параметры


mon. Моникёр
 открытого экземпляра составного справочника НСИ.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenCompoundDictionarySource
 открывает источник составного справочника НСИ.


## Комментарии


Для выполнения операции укажите в поле tRds
 моникёр открытого экземпляра составного справочника НСИ, в поле tArg.k ключ источника, а в поле
 tArg.metaGet шаблон, в соответствии
 с которым будут получены метаданные источника при открытии. Моникёр может
 быть получен при выполнении операции [OpenRds](OpenRds.htm).
 Ключ источника может быть получен в коллекции sources,
 которая может быть извлечена при выполнении операции [OpenRds](OpenRds.htm)
 или [GetRds](GetRds.htm).


Результатом выполнения операции будут моникёр и метаданные источника
 составного справочника НСИ.


Дальнейшая работа с источником осуществляется с помощью операций [GetCompoundDictionarySource](GetCompoundDictionarySource.htm),
 [SetCompoundDictionarySource](SetCompoundDictionarySource.htm),
 [SaveCompoundDictionarySource](SaveCompoundDictionarySource.htm).
 Для закрытия источника используйте операцию [CloseCopmpoundDictionarySource](CloseCompoundDictionarySource.htm).


## Пример


Ниже приведён пример открытия источника составного справочника НСИ.
 В запросе передаётся моникёр открытого экземпляра составного справочника
 НСИ, ключ источника и шаблон для получения метаданных. В ответе возвращаются
 моникёр открытого источника и полученные метаданные.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenCompoundDictionarySource xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRds xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO</id>  </tRds>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
  <k>1</k>  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <all>true</all>  </metaGet>
  </tArg>
  </OpenCompoundDictionarySource>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenCompoundDictionarySourceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <k>1</k>  <id>COMPOUNDDICTIONARYSOURCE</id>  <n>Источник</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<source ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>OBJ305385</i>  <n>Предприятия</n>  <k>305385</k>  <c>3076</c>  <p>5610</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </source>
  <mappings />
  </meta>
  </OpenCompoundDictionarySourceResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenCompoundDictionarySource" :
  {
   "tRds" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO"
    },
   "tArg" :
    {
     "meta" :
      {
       "k" : "1"
      },
     "metaGet" :
      {
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenCompoundDictionarySourceResult" :
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


public static CompoundDictionarySourceResult OpenCompoundDictionarySource(string compDictMoniker, uint sourceKey)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tClose = new OpenCompoundDictionarySource()
    {
        tArg = new OpenCompoundDictionarySourceArg()
        {
            meta = new RdsCompoundDictSource()
            {
                k = sourceKey
            },
            metaGet = new RdsCompoundDictSourcePattern()
            {
                all = true
            }
        },
        tRds = new RdsId() { id = compDictMoniker }
    };
    // Открытие источника составного справочника НСИ
    var tResult = somClient.OpenCompoundDictionarySource(tClose);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
