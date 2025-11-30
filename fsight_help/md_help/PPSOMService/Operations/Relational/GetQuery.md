# GetQuery: Операция

GetQuery: Операция
-


**


# GetQuery


## Синтаксис


QueryResult GetQuery(OdId tOb, GetQueryArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося запросом.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetQuery извлекает
 метаданные объекта репозитория «Запрос».


## Комментарии


Операция позволяет получить информацию о параметрах и тексте SQL-запроса,
 а также о наборе данных, который будет получен при выполнении запроса.
 Для выполнения операции укажите в поле tOb
 моникёр открытого экземпляра запроса, а в поле tArg
 параметры извлечения метаданных. Моникёр может быть получен при выполнении
 операции [OpenQuery](OpenQuery.htm).
 Результатом операции будут запрошенные метаданные.


## Пример


Пример получения информации об SQL-запросе, который сохранён в объекте
 «Запрос», а также о наборе данных, который будет получен при выполнении
 этого SQL-запроса. В запросе передается моникёр открытого экземпляра объекта
 «Запрос» и шаблон, указывающий необходимость получить данную информацию.
 В ответе приходит запрошенная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetQuery xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!QUERY6</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <fields>true</fields>  <rows>Get</rows>  <sqlText>true</sqlText>  </pattern>
  </tArg>
  </GetQuery>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetQueryResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!QUERY6</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**8**" hf="**0**">
  <i>T_QUERY</i>  <n>Запрос</n>  <k>9051</k>  <c>770</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<sqlText>
  <value>SELECT * FROM T_COUNTRY</value>  </sqlText>
[![](../../minus.gif)](../../#)<fields>
[![](../../minus.gif)](../../#)<its>
  <it>ISO_CODE</it>  <it>NAME</it>  <it>POPULATION</it>  <it>AREA</it>  <it>CURRENCY</it>  </its>
  </fields>
[![](../../minus.gif)](../../#)<rows>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<r>
  <it>RU</it>  <it>Russia</it>  <it>143666931</it>  <it>17125187</it>  <it>Russian ruble (RUB)</it>  </r>
[![](../../minus.gif)](../../#)<r>
  <it>US</it>  <it>United States of America</it>  <it>320194478</it>  <it>9519431</it>  <it>United States dollar ($) (USD)</it>  </r>
  </its>
  </rows>
  </meta>
  </GetQueryResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetQuery" :
  {
   "tOb" :
    {
     "id" : "S1!M!S!QUERY6"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "fields" : "true",
       "rows" : "Get",
       "sqlText" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "GetQueryResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!QUERY6"
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
         "@ver" : "8",
         "@hf" : "0",
         "i" : "T_QUERY",
         "n" : "Запрос",
         "k" : "9051",
         "c" : "770",
         "p" : "9050",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        },
       "openArgs" : ""
      },
     "sqlText" :
      {
       "value" : "SELECT * FROM T_COUNTRY"
      },
     "fields" :
      {
       "its" :
        {
         "it" :
          [
            "ISO_CODE",
            "NAME",
            "POPULATION",
            "AREA",
            "CURRENCY"
          ]
        }
      },
     "rows" :
      {
       "its" :
        {
         "r" :
          [
            {
             "it" :
              [
                "RU",
                "Russia",
                "143666931",
                "17125187",
                "Russian ruble (RUB)"
              ]
            },
            {
             "it" :
              [
                "US",
                "United States of America",
                "320194478",
                "9519431",
                "United States dollar ($) (USD)"
              ]
            }
          ]
        }
      }
    }
  }
}


public static QueryResult GetQueryMetadata(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetQuery()
    {
        tArg = new GetQueryArg()
        {
            pattern = new QueryMdPattern
            {
                sqlText = true,
                fields = true,
                rows = ListOperation.Get
            }
        },
        tOb = new OdId() { id = moniker }
    };
    //Получение метаданных
    var tResult = somClient.GetQuery(tGet);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
