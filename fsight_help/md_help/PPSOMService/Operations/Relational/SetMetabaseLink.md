# SetMetabaseLink: Операция

SetMetabaseLink: Операция
-


**


# SetMetabaseLink


## Синтаксис


MetabaseLinkResult SetMetabaseLink(OdId tOb, SetMetabaseLinkArg
 tArg)


## Параметры


tOb. Моникёр
 связи с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetMetabaseLink изменяет
 метаданные связи с репозиторием.


## Комментарии


Операция позволяет изменить настройки подключения к репозиторию, на
 работу с которым настроена связь. Связь с репозиторием должна быть открыта
 на редактирование. Для выполнения операции укажите в поле tOb
 моникёр объекта репозитория, являющегося связью с репозиторием, а в поле
 tArg.meta обновлённые метаданные,
 содержащие настройки подключения к репозиторию. Моникёр может быть получен
 при выполнении операции [OpenMetabaseLink](OpenMetabaseLink.htm).
 Сохранение изменений осуществляется автоматически при выполнении операции.


## Пример


Пример изменения параметров подключения к репозиторию. В запросе передается
 моникёр открытого экземпляра связи с репозиторием и значения параметров,
 которые необходимо установить (автоматическое подключение и использование
 учётных данных, указанных при подключении к репозиторию). В ответе приходят
 обновлённые метаданные.


	 SOAP
	  JSON  C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetMetabaseLink xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<metabaseLinkParams>
  <loginPrompt>false</loginPrompt>  <useMetabaseCredentials>true</useMetabaseCredentials>  </metabaseLinkParams>
  </meta>
  </tArg>
  </SetMetabaseLink>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetMetabaseLinkResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**18**" hf="**0**">
  <i>MB_LINK</i>  <n>Связь с репозитоирем</n>  <k>174241</k>  <c>8193</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<metabaseLinkParams>
  <user>sa</user>  <pass>1</pass>[![](../../minus.gif)](../../#)<logonDataExt>
  <driver>MSSQL2012</driver>  <server>%METABASE_SERVER%</server>  <database>PPrepository_data</database>  <schema>dbo</schema>  <unicode>0</unicode>  <authentication>Password</authentication>  <caseSensitive>0</caseSensitive>  <ODBCParams />
  </logonDataExt>
  <useUnicode>0</useUnicode>  <loginPrompt>0</loginPrompt>  <useMetabaseCredentials>1</useMetabaseCredentials>  <useDeferredLoading>0</useDeferredLoading>  </metabaseLinkParams>
  </meta>
  </SetMetabaseLinkResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetMetabaseLink" :
  {
   "tOb" :
    {
     "id" : "KBCFEJFKABODGOAEODNPLELCGJNJEMEEKKAKMINPLIABGDLF!M!S!MLFLLDOCGKABODGOAECHIEOKAAEFLBLGHEELEHAOIMLEOKOGAI"
    },
   "tArg" :
    {
     "meta" :
      {
       "metabaseLinkParams" :
        {
         "loginPrompt" : "false",
         "useMetabaseCredentials" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "SetMetabaseLinkResult" :
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
         "@ver" : "18",
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
       "user" : "sa",
       "pass" : "1",
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
       "loginPrompt" : "0",
       "useMetabaseCredentials" : "1",
       "useDeferredLoading" : "0"
      }
    }
  }
}


public static MetabaseLinkResult ChangeMBLink(string moniker, bool loginPromptValue, bool useMetabaseCredentialsValue)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операций
    // Параметры выполнения операции
    var tSet = new SetMetabaseLink()
    {
        tArg = new SetMetabaseLinkArg()
        {
            meta = new MetabaseLinkMd()
            {
                metabaseLinkParams = new MetabaseLinkParams()
                {
                    loginPrompt = loginPromptValue,
                    useMetabaseCredentials = useMetabaseCredentialsValue
                }
            }
        },
        tOb = new OdId() { id = moniker }
    };
    // Изменение параметров
    var tResult = somClient.SetMetabaseLink(tSet);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
