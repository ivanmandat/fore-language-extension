# CreateCompoundDictionarySource: Операция

CreateCompoundDictionarySource: Операция
-


**


# CreateCompoundDictionarySource


## Синтаксис


CompoundDictionarySourceResult CreateCompoundDictionarySource(RdsId
 tRds, CreateCompoundDictionarySourceArg tArg)


## Параметры


tRds. Моникёр
 открытого экземпляра составного справочника НСИ.


tArg. Параметры выполнения
 операции.


## Описание


Операция CreateCompoundDictionarySource
 создаёт новый источник в составном справочнике НСИ.


## Комментарии


Для выполнения операции укажите в поле tRds
 моникёр открытого экземпляра составного справочника НСИ, а в поле tArg шаблон, в соответствии с которым
 будут получены метаданные созданного источника. Моникёр может быть получен
 при выполнении операции [OpenRds](OpenRds.htm).


Результатом операции будут метаданные созданного источника.


Дальнейшая работа с источником осуществляется с помощью операций [GetCompoundDictionarySource](GetCompoundDictionarySource.htm),
 [SetCompoundDictionarySource](SetCompoundDictionarySource.htm),
 [SaveCompoundDictionarySource](SaveCompoundDictionarySource.htm).
 Для закрытия источника используйте операцию [CloseCopmpoundDictionarySource](CloseCompoundDictionarySource.htm).


## Пример


Ниже приведён пример создания источника в составном справочнике НСИ.
 В запросе передаётся моникёр экземпляра составного справочника. В ответе
 возвращаются общие метаданные созданного источника.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<CreateCompoundDictionarySource xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRds xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO</id>  </tRds>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<metaGet>
  <all>true</all>  </metaGet>
  </tArg>
  </CreateCompoundDictionarySource>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<CreateCompoundDictionarySourceResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
  <k>2</k>  <id>COMPOUNDDICTIONARYSOURCE1</id>  <n>Источник1</n>  <vis>1</vis>  <mappings />
  </meta>
  </CreateCompoundDictionarySourceResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "CreateCompoundDictionarySource" :
  {
   "tRds" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO"
    },
   "tArg" :
    {
     "metaGet" :
      {
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "CreateCompoundDictionarySourceResult" :
  {
   "id" :
    {
     "id" : "LFDCEOAJELGFGOAEOHNCJJKKEAEKGGDECKEPMBLACNIPJPNG!M!S!NONBODBBJELGFGOAELOJMHDMDOIMJJHKEJIFCPPBNLHMBJEEO!Sources!2"
    },
   "meta" :
    {
     "k" : "2",
     "id" : "COMPOUNDDICTIONARYSOURCE1",
     "n" : "Источник1",
     "vis" : "1",
     "mappings" : ""
    }
  }
}


public static CompoundDictionarySourceResult CreateCompoundDictionarySource(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tCreate = new CreateCompoundDictionarySource()
    {
        tArg = new CreateCompoundDictionarySourceArg()
        {
            metaGet = new RdsCompoundDictSourcePattern()
            {
                all = true
            }
        },
        tRds = new RdsId() { id = moniker }
    };
    // Создание источника в составном справочнике НСИ
    var tResult = somClient.CreateCompoundDictionarySource(tCreate);
    return tResult;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
