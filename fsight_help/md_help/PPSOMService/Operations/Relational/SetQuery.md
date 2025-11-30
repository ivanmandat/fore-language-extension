# SetQuery: Операция

SetQuery: Операция
-


**


# SetQuery


## Синтаксис


QueryResult SetQuery(OdId tOb, SetQueryArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося запросом.


tArg. Параметры выполнения
 операции.


## Описание


Операция SetQuery изменяет объект
 репозитория «Запрос».


## Комментарии


Операция позволяет изменить текст SQL-запроса и его параметры. Запрос
 должен быть открыт на редактирование. Для выполнения операции укажите
 в поле tOb моникёр открытого экземпляра
 запроса, а в поле tArg.meta обновлённые
 метаданных, которые необходимо применить. Моникёр может быть получен при
 выполнении операции [OpenQuery](OpenQuery.htm).
 В поле tArg.pattern укажите шаблон,
 в соответствии с которым будут изменяться метаданные. Если определено
 поле tArg.metaGet, то результатом
 операции будут обновлённые метаданные, которые будут повторно получены
 после их изменения в объекте. Сохранение изменений осуществляется автоматически
 при выполнении операции.


## Пример


Пример изменения SQL-запроса в объекте «Запрос». В запросе передаётя
 моникёр открытого экземпляра объекта и новый SQL-запрос. В ответе приходит
 список полей и набор данных, которые получены при выполнении нового SQL-запроса.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetQuery xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!QUERY6</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <sqlText>true</sqlText>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<sqlText>
  <value>SELECT * FROM T_SOURCE</value>  </sqlText>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <fields>true</fields>  <rows>Get</rows>  </metaGet>
  </tArg>
  </SetQuery>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetQueryResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!QUERY6</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**9**" hf="**0**">
  <i>T_QUERY</i>  <n>Запрос</n>  <k>9051</k>  <c>770</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<fields>
[![](../../minus.gif)](../../#)<its>
  <it>ISO_CODE</it>  <it>NAME</it>  <it>POPULATION</it>  <it>AREA</it>  <it>CURRENCY</it>  </its>
  </fields>
[![](../../minus.gif)](../../#)<rows>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<r>
  <it />
  <it>Данные госкомстата</it>  <it />
  <it />
  <it />
  <it>1</it>  <it>2</it>  </r>
[![](../../minus.gif)](../../#)<r>
  <it />
  <it>Данные департамента МЭРТ РФ</it>  <it />
  <it />
  <it />
  <it>2</it>  <it>3</it>  </r>
[![](../../minus.gif)](../../#)<r>
  <it />
  <it>Прогноз департаментов (2-ой вариант)</it>  <it />
  <it />
  <it />
  <it>3</it>  <it>5</it>  </r>
[![](../../minus.gif)](../../#)<r>
  <it />
  <it>Данные регионов</it>  <it />
  <it />
  <it />
  <it>4</it>  <it>4</it>  </r>
  </its>
  </rows>
  </meta>
  </SetQueryResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetQuery" :
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
       "sqlText" : "true"
      },
     "meta" :
      {
       "sqlText" :
        {
         "value" : "SELECT * FROM T_SOURCE"
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "fields" : "true",
       "rows" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "SetQueryResult" :
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
         "@ver" : "9",
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
                "",
                "Данные госкомстата",
                "",
                "",
                "",
                "1",
                "2"
              ]
            },
            {
             "it" :
              [
                "",
                "Данные департамента МЭРТ РФ",
                "",
                "",
                "",
                "2",
                "3"
              ]
            },
            {
             "it" :
              [
                "",
                "Прогноз департаментов (2-ой вариант)",
                "",
                "",
                "",
                "3",
                "5"
              ]
            },
            {
             "it" :
              [
                "",
                "Данные регионов",
                "",
                "",
                "",
                "4",
                "4"
              ]
            }
          ]
        }
      }
    }
  }
}


public static QueryResult ChangeQuery(string moniker, string newSQLText)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetQuery()
    {
        tArg = new SetQueryArg()
        {
            meta = new QueryMd()
            {
                sqlText = new QuerySqlText() { value = newSQLText }
            },
            pattern = new QueryMdPattern
            {
                sqlText = true,
            },
            metaGet = new QueryMdPattern
            {
                fields = true,
                rows = ListOperation.Get
            }
        },
        tOb = new OdId() { id = moniker }
    };
    //Изменение метаданных
    var tResult = somClient.SetQuery(tSet);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
