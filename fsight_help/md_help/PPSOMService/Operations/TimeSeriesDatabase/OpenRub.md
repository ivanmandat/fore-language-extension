# OpenRub: Операция

OpenRub: Операция
-


**


# OpenRub


## Синтаксис


OpenRubResult OpenRub(OdId tObject, OpenRubArg tArg)


## Параметры


tObject. Моникёр объекта репозитория,
 являющегося базой данных временных рядов.


tArg. Параметры выполнения
 операции.


## Описание


Операция OpenRub открывает базу
 данных временных рядов и возвращает контекст для работы с её структурой.


## Комментарии


Для выполнения операции необходимо в поле tObject
 указать моникёр объекта, являющегося базой данных временных рядов, а в
 поле tArg указать параметры открытия.
 Моникёр объекта может быть получен при выполнении операции [GetObjects](../Repository/GetObjects.htm). В поле tArg
 могут быть указаны значения параметров, которые будут переданы параметрическим
 объектам, и шаблон для извлечения метаданных. В шаблоне указывается та
 информация, которая должна быть получена при открытии.


Результатом работы операции будет моникёр открытого экземпляра базы
 данных временных рядов, а также метаданные, если при выполнении операции
 был задан шаблон tArg.metaGet.
 Дальнейшая работа со структурой базы данных временных рядов осуществляется
 с помощью операции [GetRubMd](GetRubMd.htm).
 Также полученный моникёр используется в операции [OpenHie](OpenHie.htm) для получения доступа к иерархии
 показателей, хранящихся в базе данных. Для закрытия открытого экземпляра
 базы данных временных рядов используйте операцию [CloseRub](CloseRub.htm).


## Пример


Ниже приведён пример открытия базы данных временных рядов. В запросе
 передаётся моникёр объекта репозитория, являющегося базой данных временных
 рядов, и шаблон для получения информации по атрибутам и периоду базы данных
 временных рядов. В ответе приходит моникёр открытого экземпляра базы данных
 временных рядов и запрошенная информация. В примере C# используется функция
 FindObjectById, код которой приведен
 в примере «[Получение
 описания объекта по его идентификатору](../Repository/GetObjects_Sample/GetObjects_Sample.htm)».


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<OpenRub xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tObject xmlns="****">
  <id>S1!M!5472</id>  </tObject>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<args>
  <openForEdit>true</openForEdit>  </args>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <atts>true</atts>  <period>true</period>  </metaGet>
  </tArg>
  </OpenRub>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<OpenRubResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!R1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>TS_DB</i>  <n>БД временных рядов</n>  <k>5472</k>  <c>2822</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<atts>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it hasMultipleValues="**0**">
  <k>1</k>  <id>KEY</id>  <n>Ключ</n>  <vis>0</vis>  <dt>2</dt>  <predefined>1</predefined>  <nullable>0</nullable>  <primary>0</primary>  <defaultValue />
  <dataDomain>0</dataDomain>  <isInHierarchyByDefault>0</isInHierarchyByDefault>  <orderInHierarchyByDefault>0</orderInHierarchyByDefault>  </it>
[![](../../minus.gif)](../../#)<it hasMultipleValues="**0**">
  <k>2</k>  <id>FACTOR</id>  <n>Факт</n>  <vis>0</vis>  <dt>2</dt>  <predefined>1</predefined>  <nullable>0</nullable>  <primary>0</primary>  <defaultValue />
  <dataDomain>0</dataDomain>  <isInHierarchyByDefault>0</isInHierarchyByDefault>  <orderInHierarchyByDefault>0</orderInHierarchyByDefault>  </it>
[![](../../minus.gif)](../../#)<it hasMultipleValues="**0**">
  <k>3</k>  <id>REV</id>  <n>Ревизия</n>  <vis>0</vis>  <dt>2</dt>  <predefined>1</predefined>  <nullable>0</nullable>  <primary>0</primary>  <defaultValue />
  <dataDomain>0</dataDomain>  <isInHierarchyByDefault>0</isInHierarchyByDefault>  <orderInHierarchyByDefault>0</orderInHierarchyByDefault>  </it>
[![](../../minus.gif)](../../#)<it hasMultipleValues="**0**">
  <k>4</k>  <id>DL</id>  <n>Период</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<valuesObj ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>CALENDAR_LEVELS</i>  <n>Динамики</n>  <k>5482</k>  <c>1038</c>  <p>5472</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </valuesObj>
  <dt>2</dt>  <predefined>1</predefined>  <nullable>0</nullable>  <primary>1</primary>  <dimension>1</dimension>  <defaultValue>1</defaultValue>  <dataDomain>0</dataDomain>  <isInHierarchyByDefault>0</isInHierarchyByDefault>  <orderInHierarchyByDefault>0</orderInHierarchyByDefault>[![](../../minus.gif)](../../#)<filterInHierarchyByDefault>
  <k>5482</k>  <id>CALENDAR_LEVELS</id>  <n>Динамики</n>  <vis>1</vis>  </filterInHierarchyByDefault>
  </it>
[![](../../minus.gif)](../../#)<it hasMultipleValues="**0**">
  <k>5</k>  <id>UNIT</id>  <n>Единица измерения</n>  <vis>0</vis>[![](../../minus.gif)](../../#)<valuesObj ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>UNITS_D</i>  <n>Единицы Измерения</n>  <k>174</k>  <c>3076</c>  <p>159</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </valuesObj>
  <dt>2</dt>  <predefined>1</predefined>  <nullable>1</nullable>  <primary>0</primary>[![](../../minus.gif)](../../#)<unitsObj ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>UNITS</i>  <n>Единицы измерения</n>  <k>5483</k>  <c>1033</c>  <p>5472</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </unitsObj>
  <defaultValue />
  <dataDomain>0</dataDomain>  <isInHierarchyByDefault>0</isInHierarchyByDefault>  <orderInHierarchyByDefault>0</orderInHierarchyByDefault>[![](../../minus.gif)](../../#)<filterInHierarchyByDefault>
  <k>174</k>  <id>UNITS_D</id>  <n>Единицы Измерения</n>  <vis>1</vis>  </filterInHierarchyByDefault>
  </it>
[![](../../minus.gif)](../../#)<it hasMultipleValues="**0**">
  <k>6</k>  <id>OBT</id>  <n>Объект</n>  <vis>0</vis>  <dt>2</dt>  <predefined>1</predefined>  <nullable>1</nullable>  <primary>0</primary>  <defaultValue />
  <dataDomain>0</dataDomain>  <isInHierarchyByDefault>0</isInHierarchyByDefault>  <orderInHierarchyByDefault>0</orderInHierarchyByDefault>  </it>
[![](../../minus.gif)](../../#)<it hasMultipleValues="**0**">
  <k>7</k>  <id>MNEMO</id>  <n>Мнемоника</n>  <vis>0</vis>  <dt>1</dt>  <predefined>1</predefined>  <nullable>0</nullable>  <primary>0</primary>  <defaultValue />
  <dataDomain>0</dataDomain>  <isInHierarchyByDefault>0</isInHierarchyByDefault>  <orderInHierarchyByDefault>0</orderInHierarchyByDefault>  </it>
[![](../../minus.gif)](../../#)<it hasMultipleValues="**0**">
  <k>8</k>  <id>DLT</id>  <n>Удален</n>  <vis>0</vis>  <dt>6</dt>  <predefined>1</predefined>  <nullable>0</nullable>  <primary>0</primary>  <defaultValue>0</defaultValue>  <dataDomain>0</dataDomain>  <isInHierarchyByDefault>0</isInHierarchyByDefault>  <orderInHierarchyByDefault>0</orderInHierarchyByDefault>  </it>
[![](../../minus.gif)](../../#)<it hasMultipleValues="**0**">
  <k>9</k>  <id>COUNTRY</id>  <n>Страна</n>  <vis>1</vis>[![](../../minus.gif)](../../#)<valuesObj ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>COUNTRIES</i>  <n>Страны</n>  <k>208</k>  <c>3076</c>  <p>159</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </valuesObj>
  <dt>2</dt>  <predefined>0</predefined>  <nullable>0</nullable>  <primary>1</primary>  <dimension>1</dimension>  <defaultValue />
  <dataDomain>0</dataDomain>  <isInHierarchyByDefault>0</isInHierarchyByDefault>  <orderInHierarchyByDefault>0</orderInHierarchyByDefault>[![](../../minus.gif)](../../#)<filterInHierarchyByDefault>
  <k>208</k>  <id>COUNTRIES</id>  <n>Страны</n>  <vis>1</vis>  </filterInHierarchyByDefault>
  </it>
  </its>
  </atts>
[![](../../minus.gif)](../../#)<period>
  <startYear>1980</startYear>  <endYear>2020</endYear>  </period>
  </meta>
  </OpenRubResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "OpenRub" :
  {
   "tObject" :
    {
     "id" : "S1!M!5472"
    },
   "tArg" :
    {
     "args" :
      {
       "openForEdit" : "true"
      },
     "metaGet" :
      {
       "obInst" : "true",
       "atts" : "true",
       "period" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "OpenRubResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!R1"
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
         "@ver" : "5",
         "@hf" : "0",
         "i" : "TS_DB",
         "n" : "БД временных рядов",
         "k" : "5472",
         "c" : "2822",
         "p" : "5471",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        },
       "openArgs" : ""
      },
     "atts" :
      {
       "its" :
        {
         "it" :
          [
            {
             "@hasMultipleValues" : "0",
             "k" : "1",
             "id" : "KEY",
             "n" : "Ключ",
             "vis" : "0",
             "dt" : "2",
             "predefined" : "1",
             "nullable" : "0",
             "primary" : "0",
             "defaultValue" : "",
             "dataDomain" : "0",
             "isInHierarchyByDefault" : "0",
             "orderInHierarchyByDefault" : "0"
            },
            {
             "@hasMultipleValues" : "0",
             "k" : "2",
             "id" : "FACTOR",
             "n" : "Факт",
             "vis" : "0",
             "dt" : "2",
             "predefined" : "1",
             "nullable" : "0",
             "primary" : "0",
             "defaultValue" : "",
             "dataDomain" : "0",
             "isInHierarchyByDefault" : "0",
             "orderInHierarchyByDefault" : "0"
            },
            {
             "@hasMultipleValues" : "0",
             "k" : "3",
             "id" : "REV",
             "n" : "Ревизия",
             "vis" : "0",
             "dt" : "2",
             "predefined" : "1",
             "nullable" : "0",
             "primary" : "0",
             "defaultValue" : "",
             "dataDomain" : "0",
             "isInHierarchyByDefault" : "0",
             "orderInHierarchyByDefault" : "0"
            },
            {
             "@hasMultipleValues" : "0",
             "k" : "4",
             "id" : "DL",
             "n" : "Период",
             "vis" : "1",
             "valuesObj" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "CALENDAR_LEVELS",
               "n" : "Динамики",
               "k" : "5482",
               "c" : "1038",
               "p" : "5472",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              },
             "dt" : "2",
             "predefined" : "1",
             "nullable" : "0",
             "primary" : "1",
             "dimension" : "1",
             "defaultValue" : "1",
             "dataDomain" : "0",
             "isInHierarchyByDefault" : "0",
             "orderInHierarchyByDefault" : "0",
             "filterInHierarchyByDefault" :
              {
               "k" : "5482",
               "id" : "CALENDAR_LEVELS",
               "n" : "Динамики",
               "vis" : "1"
              }
            },
            {
             "@hasMultipleValues" : "0",
             "k" : "5",
             "id" : "UNIT",
             "n" : "Единица измерения",
             "vis" : "0",
             "valuesObj" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "UNITS_D",
               "n" : "Единицы Измерения",
               "k" : "174",
               "c" : "3076",
               "p" : "159",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              },
             "dt" : "2",
             "predefined" : "1",
             "nullable" : "1",
             "primary" : "0",
             "unitsObj" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "UNITS",
               "n" : "Единицы измерения",
               "k" : "5483",
               "c" : "1033",
               "p" : "5472",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              },
             "defaultValue" : "",
             "dataDomain" : "0",
             "isInHierarchyByDefault" : "0",
             "orderInHierarchyByDefault" : "0",
             "filterInHierarchyByDefault" :
              {
               "k" : "174",
               "id" : "UNITS_D",
               "n" : "Единицы Измерения",
               "vis" : "1"
              }
            },
            {
             "@hasMultipleValues" : "0",
             "k" : "6",
             "id" : "OBT",
             "n" : "Объект",
             "vis" : "0",
             "dt" : "2",
             "predefined" : "1",
             "nullable" : "1",
             "primary" : "0",
             "defaultValue" : "",
             "dataDomain" : "0",
             "isInHierarchyByDefault" : "0",
             "orderInHierarchyByDefault" : "0"
            },
            {
             "@hasMultipleValues" : "0",
             "k" : "7",
             "id" : "MNEMO",
             "n" : "Мнемоника",
             "vis" : "0",
             "dt" : "1",
             "predefined" : "1",
             "nullable" : "0",
             "primary" : "0",
             "defaultValue" : "",
             "dataDomain" : "0",
             "isInHierarchyByDefault" : "0",
             "orderInHierarchyByDefault" : "0"
            },
            {
             "@hasMultipleValues" : "0",
             "k" : "8",
             "id" : "DLT",
             "n" : "Удален",
             "vis" : "0",
             "dt" : "6",
             "predefined" : "1",
             "nullable" : "0",
             "primary" : "0",
             "defaultValue" : "0",
             "dataDomain" : "0",
             "isInHierarchyByDefault" : "0",
             "orderInHierarchyByDefault" : "0"
            },
            {
             "@hasMultipleValues" : "0",
             "k" : "9",
             "id" : "COUNTRY",
             "n" : "Страна",
             "vis" : "1",
             "valuesObj" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "5",
               "@hf" : "0",
               "i" : "COUNTRIES",
               "n" : "Страны",
               "k" : "208",
               "c" : "3076",
               "p" : "159",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0",
               "trackElementDependents" : "0"
              },
             "dt" : "2",
             "predefined" : "0",
             "nullable" : "0",
             "primary" : "1",
             "dimension" : "1",
             "defaultValue" : "",
             "dataDomain" : "0",
             "isInHierarchyByDefault" : "0",
             "orderInHierarchyByDefault" : "0",
             "filterInHierarchyByDefault" :
              {
               "k" : "208",
               "id" : "COUNTRIES",
               "n" : "Страны",
               "vis" : "1"
              }
            }
          ]
        }
      },
     "period" :
      {
       "startYear" : "1980",
       "endYear" : "2020"
      }
    }
  }
}


public static OpenRubResult OpenRub(MbId mb, string rubId)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tOpen = new OpenRub()
    {
        tArg = new OpenRubArg()
        {
            args = new RubOpenArgs()
            {
                openForEdit = true
            },
            //Шаблон, в соответствии с которым будут извлекаться метаданные
            metaGet = new RubMdPattern()
            {
                atts = true
            }
        },
        tObject = new OdId() { id = mb.id + "!" + FindObjectById(mb, rubId).k }
    };
    //Открытие базы данных временных рядов
    var result = somClient.OpenRub(tOpen);
    return result;
}


См. также:


[Работа
 с базой данных временных рядов](TimeSeriesDatabase_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
