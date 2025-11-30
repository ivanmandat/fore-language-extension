# GetMetabaseLink: Операция

GetMetabaseLink: Операция
-


**


# GetMetabaseLink


## Синтаксис


MetabaseLinkResult GetMetabaseLink(OdId tOb, GetMetabaseLinkArg
 tArg)


## Параметры


tOb. Моникёр
 связи с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetMetabaseLink извлекает
 метаданные связи с репозиторием.


## Комментарии


Операция позволяет получить информацию о настройках, используемых для
 подключения к репозиторию. Для выполнения операции укажите в поле tOb моникёр объекта репозитория,
 являющегося связью с репозиторием, а в поле tArg
 параметры открытия. Моникёр может быть получен при выполнении операции
 [OpenMetabaseLink](OpenMetabaseLink.htm).
 Результатом операции будут настройки подключения к репозиторию, которые
 использует связь.


## Пример


Пример получения информации о параметрах подключения, которые заданы
 для связи с репозиторием. В запросе передается моникёр открытого экземпляра
 связи с репозиторием и шаблон, указывающий необходимость получить данную
 информацию. В ответе приходит запрошенная информация.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetMetabaseLink xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <parsOwnDefVals>true</parsOwnDefVals>  <all>true</all>  </metaGet>
  </tArg>
  </GetMetabaseLink>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetMetabaseLinkResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**17**" hf="**0**">
  <i>MB_LINK</i>  <n>Связь с репозитоирем</n>  <k>174241</k>  <c>8193</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<metabaseLinkParams>
  <user />
  <pass />
[![](../../minus.gif)](../../#)<logonDataExt>
  <driver>MSSQL2012</driver>  <server>%METABASE_SERVER%</server>  <database>PPrepository_data</database>  <schema>dbo</schema>  <unicode>0</unicode>  <authentication>Password</authentication>  <caseSensitive>0</caseSensitive>  <ODBCParams />
  </logonDataExt>
  <useUnicode>0</useUnicode>  <loginPrompt>1</loginPrompt>  <useMetabaseCredentials>0</useMetabaseCredentials>  <useDeferredLoading>0</useDeferredLoading>  </metabaseLinkParams>
  </meta>
  </GetMetabaseLinkResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetMetabaseLink" :
  {
   "tOb" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI"
    },
   "tArg" :
    {
     "metaGet" :
      {
       "obInst" : "true",
       "parsOwnDefVals" : "true",
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetMetabaseLinkResult" :
  {
   "id" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI"
    },
   "meta" :
    {
     "obInst" :
      {
       "obDesc" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "17",
         "@hf" : "0",
         "i" : "MB_LINK",
         "n" : "Связь с репозитоирем",
         "k" : "174241",
         "c" : "8193",
         "p" : "9050",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "metabaseLinkParams" :
      {
       "user" : "",
       "pass" : "",
       "logonDataExt" :
        {
         "driver" : "MSSQL2012",
         "server" : "%METABASE_SERVER%",
         "database" : "PPrepository_data",
         "schema" : "dbo",
         "unicode" : "0",
         "authentication" : "Password",
         "caseSensitive" : "0",
         "ODBCParams" : ""
        },
       "useUnicode" : "0",
       "loginPrompt" : "1",
       "useMetabaseCredentials" : "0",
       "useDeferredLoading" : "0"
      }
    }
  }
}


public static MetabaseLinkResult GetMetabaseLinkMetadata(string moniker)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tGet = new GetMetabaseLink()
    {
        tArg = new GetMetabaseLinkArg()
        {
            metaGet = new MetabaseLinkMdPattern()
            {
                all = true
            }
        },
        tOb = new OdId() { id = moniker }
    };
    // Получение метаданных
    var tResult = somClient.GetMetabaseLink(tGet);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
