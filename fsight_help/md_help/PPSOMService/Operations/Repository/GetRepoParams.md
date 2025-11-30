# GetRepoParams: Операция

GetRepoParams: Операция
-


**


# GetRepoParams


## Синтаксис


RepoParamsResult GetRepoParams(MbId tMb, GetRepoParamsArg
 tArg)


## Параметры


tMb. Моникёр
 соединения с репозиторием.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetRepoParams получает
 параметры репозитория.


## Комментарии


Операция позволяет получить такие параметры, как:


	- глобальные переменные;


	- пользовательские классы, события и методы;


	- объекты, используемые по умолчанию;


	- обработчики ошибок и событий;


	- настройки кеширования метаданных.


Для выполнения операции укажите в поле tMb
 моникёр соединения с репозиторием, а в поле tArg.pattern
 шаблон, в соответствии с которым будут получены различные параметры. Моникёр
 может быть получен при выполнении операции [OpenMetabase](OpenMetabase.htm). Результатом операции
 будут запрошенные параметры.


## Пример


Пример получения параметров репозитория. В запросе передаётся моникёр
 соединения с репозиторием и шаблон, указывающий необходимость получить
 параметры репозитория. В ответе приходят значения различных параметров,
 кроме информации о пользовательских классах/событиях/методах.


	SOAP JSON
	 C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetRepoParams xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tMb xmlns="****">
  <id>NCNODCBKFLJMFOAEBOCGFBINJBKLJKMEHIPDDDDKLEKKNJDH!M</id>  </tMb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <all>true</all>  </pattern>
  </tArg>
  </GetRepoParams>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetRepoParamsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>NCNODCBKFLJMFOAEBOCGFBINJBKLJKMEHIPDDDDKLEKKNJDH!M</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<innerParams>
[![](../../minus.gif)](../../#)<params>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>METABASE_SERVER</id>  <n>METABASE_SERVER</n>  <vis>1</vis>  <value>test-server</value>  <dt>1</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>METABASE_DATABASE</id>  <n>METABASE_DATABASE</n>  <vis>1</vis>  <value>Warehouse</value>  <dt>1</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>METABASE_FILEGROUP</id>  <n>METABASE_FILEGROUP</n>  <vis>1</vis>  <value>PRIMARY</value>  <dt>1</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>METABASE_CASESENSITIVE</id>  <n>METABASE_CASESENSITIVE</n>  <vis>1</vis>  <value>false</value>  <dt>1</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>METABASE_DATABASE_ONLY</id>  <n>METABASE_DATABASE_ONLY</n>  <vis>1</vis>  <value>Warehouse</value>  <dt>1</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>METABASE_SCHEMA_ONLY</id>  <n>METABASE_SCHEMA_ONLY</n>  <vis>1</vis>  <value>dbo</value>  <dt>1</dt>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id>METABASE_ODBCPARAMS</id>  <n>METABASE_ODBCPARAMS</n>  <vis>1</vis>  <dt>1</dt>  </it>
  </params>
  </innerParams>
[![](../../minus.gif)](../../#)<sharedParams>
  <IsShared>1</IsShared>  <Url>http://v-shp-development.dev.fs.fsight.world</Url>[![](../../minus.gif)](../../#)<params>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>GLOBAL_INT</id>  <n>Ограничение</n>  <vis>1</vis>  <value>600</value>  <dt>2</dt>  <binding>UI="IntegerEdit"</binding>  </it>
  </params>
  </sharedParams>
[![](../../minus.gif)](../../#)<defParams>
[![](../../minus.gif)](../../#)<database ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>DB</i>  <n>БД</n>  <k>56</k>  <c>513</c>  <p>12363</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </database>
[![](../../minus.gif)](../../#)<rdsDatabase ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>RDS</i>  <n>Репозиторий НСИ</n>  <k>159</k>  <c>4353</c>  <p>51</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </rdsDatabase>
[![](../../minus.gif)](../../#)<modelSpace ds="****" isShortcut="**0**" isLink="**0**" ver="**6**" hf="**0**">
  <i>MS_DEFAULT</i>  <n>Контейнер моделирования (по умолчанию)</n>  <k>20639</k>  <c>5121</c>  <p>14212</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </modelSpace>
[![](../../minus.gif)](../../#)<topobase ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>OBJ36625</i>  <n>Russian Federation_FO_en.svg.tbs</n>  <k>36625</k>  <c>3330</c>  <p>36624</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </topobase>
[![](../../minus.gif)](../../#)<dimensionImageList ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>OBJ1532</i>  <n>Пиктограммы элементов</n>  <k>1532</k>  <c>3329</c>  <p>51</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </dimensionImageList>
  <emptySelectionAsFull>0</emptySelectionAsFull>  <rdsElementCard>PropertyList</rdsElementCard>  <selColor>#3258C9</selColor>  <selBorderColor>#6B8E23</selBorderColor>  <selTransparent>252</selTransparent>  <defLocale>1049</defLocale>  </defParams>
[![](../../minus.gif)](../../#)<errorParams>
  <mailAddress>suppport@fsight.ru</mailAddress>  <handler />
  </errorParams>
  <usersMetaData />
[![](../../minus.gif)](../../#)<eventHandling>
  <eventHandlers>1</eventHandlers>[![](../../minus.gif)](../../#)<expressReports>
  <enabled>1</enabled>  <eventClass>EventsClass</eventClass>  <eventObject>EXP_EVENT</eventObject>  </expressReports>
  <updateHandler />
  </eventHandling>
[![](../../minus.gif)](../../#)<cacheParams>
  <autoClear>1</autoClear>  <threshold>70</threshold>  </cacheParams>
  </meta>
  </GetRepoParamsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetRepoParams" :
  {
   "tMb" :
    {
     "id" : "NCNODCBKFLJMFOAEBOCGFBINJBKLJKMEHIPDDDDKLEKKNJDH!M"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "all" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetRepoParamsResult" :
  {
   "id" :
    {
     "id" : "NCNODCBKFLJMFOAEBOCGFBINJBKLJKMEHIPDDDDKLEKKNJDH!M"
    },
   "meta" :
    {
     "innerParams" :
      {
       "params" :
        {
         "it" :
          [
            {
             "k" : "4294967295",
             "id" : "METABASE_SERVER",
             "n" : "METABASE_SERVER",
             "vis" : "1",
             "value" : "test-server",
             "dt" : "1"
            },
            {
             "k" : "4294967295",
             "id" : "METABASE_DATABASE",
             "n" : "METABASE_DATABASE",
             "vis" : "1",
             "value" : "Warehouse",
             "dt" : "1"
            },
            {
             "k" : "4294967295",
             "id" : "METABASE_FILEGROUP",
             "n" : "METABASE_FILEGROUP",
             "vis" : "1",
             "value" : "PRIMARY",
             "dt" : "1"
            },
            {
             "k" : "4294967295",
             "id" : "METABASE_CASESENSITIVE",
             "n" : "METABASE_CASESENSITIVE",
             "vis" : "1",
             "value" : "false",
             "dt" : "1"
            },
            {
             "k" : "4294967295",
             "id" : "METABASE_DATABASE_ONLY",
             "n" : "METABASE_DATABASE_ONLY",
             "vis" : "1",
             "value" : "Warehouse",
             "dt" : "1"
            },
            {
             "k" : "4294967295",
             "id" : "METABASE_SCHEMA_ONLY",
             "n" : "METABASE_SCHEMA_ONLY",
             "vis" : "1",
             "value" : "dbo",
             "dt" : "1"
            },
            {
             "k" : "4294967295",
             "id" : "METABASE_ODBCPARAMS",
             "n" : "METABASE_ODBCPARAMS",
             "vis" : "1",
             "dt" : "1"
            }
          ]
        }
      },
     "sharedParams" :
      {
       "IsShared" : "1",
       "Url" : "http:\/\/v-shp-development.dev.fs.fsight.world",
       "params" :
        {
         "it" :
          {
           "k" : "1",
           "id" : "GLOBAL_INT",
           "n" : "Ограничение",
           "vis" : "1",
           "value" : "600",
           "dt" : "2",
           "binding" : "UI="IntegerEdit""
          }
        }
      },
     "defParams" :
      {
       "database" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "2",
         "@hf" : "0",
         "i" : "DB",
         "n" : "БД",
         "k" : "56",
         "c" : "513",
         "p" : "12363",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0"
        },
       "rdsDatabase" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "0",
         "@hf" : "0",
         "i" : "RDS",
         "n" : "Репозиторий НСИ",
         "k" : "159",
         "c" : "4353",
         "p" : "51",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0"
        },
       "modelSpace" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "6",
         "@hf" : "0",
         "i" : "MS_DEFAULT",
         "n" : "Контейнер моделирования (по умолчанию)",
         "k" : "20639",
         "c" : "5121",
         "p" : "14212",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0"
        },
       "topobase" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "0",
         "@hf" : "0",
         "i" : "OBJ36625",
         "n" : "Russian Federation_FO_en.svg.tbs",
         "k" : "36625",
         "c" : "3330",
         "p" : "36624",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0"
        },
       "dimensionImageList" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "0",
         "@hf" : "0",
         "i" : "OBJ1532",
         "n" : "Пиктограммы элементов",
         "k" : "1532",
         "c" : "3329",
         "p" : "51",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0"
        },
       "emptySelectionAsFull" : "0",
       "rdsElementCard" : "PropertyList",
       "selColor" : "#3258C9",
       "selBorderColor" : "#6B8E23",
       "selTransparent" : "252",
       "defLocale" : "1049"
      },
     "errorParams" :
      {
       "mailAddress" : "suppport@fsight.ru",
       "handler" : ""
      },
     "usersMetaData" : "",
     "eventHandling" :
      {
       "eventHandlers" : "1",
       "expressReports" :
        {
         "enabled" : "1",
         "eventClass" : "EventsClass",
         "eventObject" : "EXP_EVENT"
        },
       "updateHandler" : ""
      },
     "cacheParams" :
      {
       "autoClear" : "1",
       "threshold" : "70"
      }
    }
  }
}


public static RepoParamsResult GetMBParameters(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetRepoParams()
    {
        tArg = new GetRepoParamsArg()
        {
            pattern = new RepoParamsMdPattern()
            {
                all = true
            }
        },
        tMb = new MbId() { id = moniker }
    };
    //Получение параметров репозитория
    var result = somClient.GetRepoParams(tGet);
    return result;
}


См. также:


[Операции
 для работы с репозиторием](Repository_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
