# GetTable: Операция

GetTable: Операция
-


**


# GetTable


## Синтаксис


TableResult GetTable(OdId tOb, GetTableArg tArg)


## Параметры


tOb. Моникёр
 объекта репозитория, являющегося таблицей, присоединённой таблицой или
 представлением.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetTable извлекает
 метаданные таблицы/присоединённой таблицы/представления.


## Комментарии


Операция позволяет получить информацию о структуре таблицы/присоединённой
 таблицы/представления, а также о наборе данных, хранящихся в этих объектах.
 Для выполнения операции укажите в поле tOb
 моникёр открытого экземпляра объекта, а в поле tArg
 параметры извлечения метаданных. Моникёр может быть получен при выполнении
 операции [OpenTable](OpenTable.htm).
 Результатом операции будут запрошенные метаданные.


## Пример


Пример получения информации о физическом имени, полях, которые созданы
 в таблице, а также о наборе данных, который в ней хранится. В запросе
 передается моникёр открытого экземпляра таблицы и шаблон, указывающий
 необходимость получить данную информацию. В ответе приходит запрошенная
 информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetTable xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tOb xmlns="****">
  <id>S1!M!S!TABLE5</id>  </tOb>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <nativName>true</nativName>  <fields>Get</fields>  <rows>Get</rows>  </pattern>
  </tArg>
  </GetTable>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetTableResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!TABLE5</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**20**" hf="**0**">
  <i>T_COUNTRY_INFO</i>  <n>Данные по странам</n>  <k>9053</k>  <c>769</c>  <p>9050</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
  <nativName>T_COUNTRY</nativName>[![](../../minus.gif)](../../#)<fields>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>ISO_CODE</id>  <n>ISO код страны</n>  <vis>1</vis>  <dt>1</dt>  <mandatory>1</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>0</isCalculated>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <dt>1</dt>  <mandatory>1</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>0</isCalculated>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>POPULATION</id>  <n>Население</n>  <vis>1</vis>  <dt>3</dt>  <mandatory>0</mandatory>  <defaultValue />
  <size>20</size>  <precision>2</precision>  <isCalculated>0</isCalculated>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>AREA</id>  <n>Площадь</n>  <vis>1</vis>  <dt>3</dt>  <mandatory>0</mandatory>  <defaultValue />
  <size>20</size>  <precision>2</precision>  <isCalculated>0</isCalculated>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>5</k>  <id>CURRENCY</id>  <n>Валюта</n>  <vis>1</vis>  <dt>1</dt>  <mandatory>0</mandatory>  <defaultValue />
  <size>255</size>  <precision>0</precision>  <isCalculated>0</isCalculated>  </it>
  </its>
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
  </GetTableResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTable" :
  {
   "tOb" :
    {
     "id" : "S1!M!S!TABLE5"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "nativName" : "true",
       "fields" : "Get",
       "rows" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "GetTableResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!TABLE5"
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
         "@ver" : "20",
         "@hf" : "0",
         "i" : "T_COUNTRY_INFO",
         "n" : "Данные по странам",
         "k" : "9053",
         "c" : "769",
         "p" : "9050",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        },
       "openArgs" : ""
      },
     "nativName" : "T_COUNTRY",
     "fields" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "ISO_CODE",
             "n" : "ISO код страны",
             "vis" : "1",
             "dt" : "1",
             "mandatory" : "1",
             "defaultValue" : "",
             "size" : "255",
             "precision" : "0",
             "isCalculated" : "0"
            },
            {
             "k" : "2",
             "id" : "NAME",
             "n" : "Наименование",
             "vis" : "1",
             "dt" : "1",
             "mandatory" : "1",
             "defaultValue" : "",
             "size" : "255",
             "precision" : "0",
             "isCalculated" : "0"
            },
            {
             "k" : "3",
             "id" : "POPULATION",
             "n" : "Население",
             "vis" : "1",
             "dt" : "3",
             "mandatory" : "0",
             "defaultValue" : "",
             "size" : "20",
             "precision" : "2",
             "isCalculated" : "0"
            },
            {
             "k" : "4",
             "id" : "AREA",
             "n" : "Площадь",
             "vis" : "1",
             "dt" : "3",
             "mandatory" : "0",
             "defaultValue" : "",
             "size" : "20",
             "precision" : "2",
             "isCalculated" : "0"
            },
            {
             "k" : "5",
             "id" : "CURRENCY",
             "n" : "Валюта",
             "vis" : "1",
             "dt" : "1",
             "mandatory" : "0",
             "defaultValue" : "",
             "size" : "255",
             "precision" : "0",
             "isCalculated" : "0"
            }
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


public static TableResult GetTableMetadata(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetTable()
    {
        tArg = new GetTableArg()
        {
            pattern = new TableMdPattern
            {
                fields = ListOperation.Get,
                nativName = true,
                rows = ListOperation.Get
            }
        },
        tOb = new OdId() { id = moniker }
    };
    //Получение метаданных
    var tResult = somClient.GetTable(tGet);
    return tResult;
}


См. также:


[Работа
 с реляционными объектами репозитория](RelationalDB_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
