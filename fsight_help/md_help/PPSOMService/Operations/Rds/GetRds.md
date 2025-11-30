# GetRds: Операция

GetRds: Операция
-


**


# GetRds


## Синтаксис


GetRdsResult GetRds(RdsId tRds, GetRds tGet)


## Параметры


tRds. Моникёр экземпляра справочника
 НСИ.


tGet. Параметры извлечения
 метаданных.


## Описание


Операция GetRds извлекает метаданные
 справочника НСИ.


## Комментарии


Данная операция позволяет получить следующую информацию о структуре
 справочника НСИ:


	- Информация об атрибутах;


	- Информация о параметрах;


	- Информация о связях с другими справочниками;


	- Информация об уровнях;


	- Информацию об уникальных и неуникальных ключах;


	- Информацию о схемах импорта и экспорта;


	- Параметры перевода справочника на другие языки.


Для выполнения операции необходимо в параметре tRds
 указать моникёр открытого экземпляра справочника и в параметре tArg
 указать параметры, в соответствии с которыми будет извлекаться информация.
 Моникёр может быть получен при выполнении операции [OpenRds](OpenRds.htm).
 В поле tArg.pattern указывается
 шаблон для получения информации о структуре справочника. Результатом работы
 операции будут запрошенные данные.


## Пример


Ниже приведён пример получения метаданных справочника НСИ. В запросе
 передаётся моникёр открытого экземпляра справочника и шаблон, указывающий
 необходимость получить все метаданные справочника. В ответе приходит полученная
 информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetRds xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRds xmlns="****">
  <id>S1!M!S!N2</id>  </tRds>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <all>true</all>  </pattern>
  </tArg>
  </GetRds>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetRdsResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!N2</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**4**" hf="**0**">
  <i>FACT_ELEMENTS</i>  <n>Справочник с показателями</n>  <k>219797</k>  <c>3076</c>  <p>5611</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../minus.gif)](../../#)<attrs>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>KEY</id>  <n>Ключ</n>  <vis>0</vis>  <predefined>Key</predefined>  <dt>2</dt>  <kind>Predefined</kind>  <nullable>0</nullable>  <hasMultipleValues>0</hasMultipleValues>  <readAccess />
  <writeAccess />
  <timeDependent>0</timeDependent>  <tag />
  <visibleForEdit>0</visibleForEdit>  <isTranslation>0</isTranslation>  <dataDomain>0</dataDomain>  <defExpr />
  <isObjectLinked>0</isObjectLinked>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>NAME</id>  <n>Наименование</n>  <vis>1</vis>  <predefined>Name</predefined>  <dt>1</dt>  <kind>Predefined</kind>  <nullable>0</nullable>  <hasMultipleValues>0</hasMultipleValues>  <readAccess />
  <writeAccess />
  <timeDependent>0</timeDependent>  <tag />
  <visibleForEdit>1</visibleForEdit>  <isTranslation>0</isTranslation>  <dataDomain>0</dataDomain>  <defExpr />
  <isObjectLinked>0</isObjectLinked>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>3</k>  <id>PARENT_KEY</id>  <n>Владелец</n>  <vis>0</vis>  <predefined>ParentKey</predefined>  <dt>2</dt>  <kind>Predefined</kind>  <nullable>1</nullable>  <hasMultipleValues>0</hasMultipleValues>  <readAccess />
  <writeAccess />
  <timeDependent>0</timeDependent>  <tag />
  <visibleForEdit>0</visibleForEdit>  <isTranslation>0</isTranslation>  <dataDomain>0</dataDomain>  <defExpr />
  <isObjectLinked>0</isObjectLinked>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>4</k>  <id>ORD</id>  <n>Порядок</n>  <vis>0</vis>  <predefined>Order</predefined>  <dt>2</dt>  <kind>Predefined</kind>  <nullable>0</nullable>  <hasMultipleValues>0</hasMultipleValues>  <readAccess />
  <writeAccess />
  <timeDependent>0</timeDependent>  <tag />
  <visibleForEdit>0</visibleForEdit>  <isTranslation>0</isTranslation>  <dataDomain>0</dataDomain>  <defExpr />
  <isObjectLinked>0</isObjectLinked>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>5</k>  <id>VERSION</id>  <n>Версия</n>  <vis>0</vis>  <predefined>Version</predefined>  <dt>2</dt>  <kind>Predefined</kind>  <nullable>0</nullable>  <hasMultipleValues>0</hasMultipleValues>  <readAccess />
  <writeAccess />
  <timeDependent>0</timeDependent>  <tag />
  <visibleForEdit>0</visibleForEdit>  <isTranslation>0</isTranslation>  <dataDomain>0</dataDomain>  <defExpr />
  <isObjectLinked>0</isObjectLinked>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>6</k>  <id>INDATE</id>  <n>Дата начала</n>  <vis>0</vis>  <predefined>InDate</predefined>  <dt>4</dt>  <kind>Predefined</kind>  <nullable>0</nullable>  <hasMultipleValues>0</hasMultipleValues>  <readAccess />
  <writeAccess />
  <timeDependent>0</timeDependent>  <tag />
  <visibleForEdit>0</visibleForEdit>  <isTranslation>0</isTranslation>  <dataDomain>0</dataDomain>  <defExpr />
  <isObjectLinked>0</isObjectLinked>  <hasHierarchy>0</hasHierarchy>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>7</k>  <id>OUTDATE</id>  <n>Дата окончания</n>  <vis>0</vis>  <predefined>OutDate</predefined>  <dt>4</dt>  <kind>Predefined</kind>  <nullable>0</nullable>  <hasMultipleValues>0</hasMultipleValues>  <readAccess />
  <writeAccess />
  <timeDependent>0</timeDependent>  <tag />
  <visibleForEdit>0</visibleForEdit>  <isTranslation>0</isTranslation>  <dataDomain>0</dataDomain>  <defExpr />
  <isObjectLinked>0</isObjectLinked>  <hasHierarchy>0</hasHierarchy>  </it>
  </its>
  </attrs>
[![](../../minus.gif)](../../#)<db ds="****" isShortcut="**0**" isLink="**0**" ver="**2**" hf="**0**">
  <i>DB</i>  <n>БД</n>  <k>56</k>  <c>513</c>  <p>12363</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </db>
[![](../../minus.gif)](../../#)<links>
  <its />
  </links>
[![](../../minus.gif)](../../#)<params>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>CURDATE</id>  <n>Дата актуальности</n>  <vis>1</vis>  <predefined>CurDate</predefined>  <skipOnNull>0</skipOnNull>  </it>
  </its>
  </params>
[![](../../minus.gif)](../../#)<translations>
  <its />
  <isON>0</isON>  </translations>
[![](../../minus.gif)](../../#)<levels>
  <its />
  </levels>
[![](../../minus.gif)](../../#)<importSchemas>
  <its />
  </importSchemas>
[![](../../minus.gif)](../../#)<exportSchemas>
  <its />
  </exportSchemas>
[![](../../minus.gif)](../../#)<uniqueKeys>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>0</k>  <id>PREDEFINED</id>  <n>PREDEFINED</n>  <vis>1</vis>  <hidden>1</hidden>  <useInSelection>0</useInSelection>  <caseSensitive>1</caseSensitive>  </it>
  </its>
  </uniqueKeys>
[![](../../minus.gif)](../../#)<nonUniqueKeys>
  <its />
  </nonUniqueKeys>
  <timeDependency>TimeReadOnly</timeDependency>  <eeCallback />
  <isHierarchical>1</isHierarchical>  <isSecured>0</isSecured>  <manageVisibility>0</manageVisibility>  <isCompound>0</isCompound>  <isBigDictionary>0</isBigDictionary>  <hasMandatoryAccess>0</hasMandatoryAccess>  <hasDimMultipleValues>1</hasDimMultipleValues>  <defaultElementKey>-1</defaultElementKey>  <isAbacSecured>0</isAbacSecured>  </meta>
  </GetRdsResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetRds" :
  {
   "tRds" :
    {
     "id" : "S1!M!S!N2"
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
 "GetRdsResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!N2"
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
         "@ver" : "4",
         "@hf" : "0",
         "i" : "FACT_ELEMENTS",
         "n" : "Справочник с показателями",
         "k" : "219797",
         "c" : "3076",
         "p" : "5611",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "attrs" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "KEY",
             "n" : "Ключ",
             "vis" : "0",
             "predefined" : "Key",
             "dt" : "2",
             "kind" : "Predefined",
             "nullable" : "0",
             "hasMultipleValues" : "0",
             "readAccess" : "",
             "writeAccess" : "",
             "timeDependent" : "0",
             "tag" : "",
             "visibleForEdit" : "0",
             "isTranslation" : "0",
             "dataDomain" : "0",
             "defExpr" : "",
             "isObjectLinked" : "0",
             "hasHierarchy" : "0"
            },
            {
             "k" : "2",
             "id" : "NAME",
             "n" : "Наименование",
             "vis" : "1",
             "predefined" : "Name",
             "dt" : "1",
             "kind" : "Predefined",
             "nullable" : "0",
             "hasMultipleValues" : "0",
             "readAccess" : "",
             "writeAccess" : "",
             "timeDependent" : "0",
             "tag" : "",
             "visibleForEdit" : "1",
             "isTranslation" : "0",
             "dataDomain" : "0",
             "defExpr" : "",
             "isObjectLinked" : "0",
             "hasHierarchy" : "0"
            },
            {
             "k" : "3",
             "id" : "PARENT_KEY",
             "n" : "Владелец",
             "vis" : "0",
             "predefined" : "ParentKey",
             "dt" : "2",
             "kind" : "Predefined",
             "nullable" : "1",
             "hasMultipleValues" : "0",
             "readAccess" : "",
             "writeAccess" : "",
             "timeDependent" : "0",
             "tag" : "",
             "visibleForEdit" : "0",
             "isTranslation" : "0",
             "dataDomain" : "0",
             "defExpr" : "",
             "isObjectLinked" : "0",
             "hasHierarchy" : "0"
            },
            {
             "k" : "4",
             "id" : "ORD",
             "n" : "Порядок",
             "vis" : "0",
             "predefined" : "Order",
             "dt" : "2",
             "kind" : "Predefined",
             "nullable" : "0",
             "hasMultipleValues" : "0",
             "readAccess" : "",
             "writeAccess" : "",
             "timeDependent" : "0",
             "tag" : "",
             "visibleForEdit" : "0",
             "isTranslation" : "0",
             "dataDomain" : "0",
             "defExpr" : "",
             "isObjectLinked" : "0",
             "hasHierarchy" : "0"
            },
            {
             "k" : "5",
             "id" : "VERSION",
             "n" : "Версия",
             "vis" : "0",
             "predefined" : "Version",
             "dt" : "2",
             "kind" : "Predefined",
             "nullable" : "0",
             "hasMultipleValues" : "0",
             "readAccess" : "",
             "writeAccess" : "",
             "timeDependent" : "0",
             "tag" : "",
             "visibleForEdit" : "0",
             "isTranslation" : "0",
             "dataDomain" : "0",
             "defExpr" : "",
             "isObjectLinked" : "0",
             "hasHierarchy" : "0"
            },
            {
             "k" : "6",
             "id" : "INDATE",
             "n" : "Дата начала",
             "vis" : "0",
             "predefined" : "InDate",
             "dt" : "4",
             "kind" : "Predefined",
             "nullable" : "0",
             "hasMultipleValues" : "0",
             "readAccess" : "",
             "writeAccess" : "",
             "timeDependent" : "0",
             "tag" : "",
             "visibleForEdit" : "0",
             "isTranslation" : "0",
             "dataDomain" : "0",
             "defExpr" : "",
             "isObjectLinked" : "0",
             "hasHierarchy" : "0"
            },
            {
             "k" : "7",
             "id" : "OUTDATE",
             "n" : "Дата окончания",
             "vis" : "0",
             "predefined" : "OutDate",
             "dt" : "4",
             "kind" : "Predefined",
             "nullable" : "0",
             "hasMultipleValues" : "0",
             "readAccess" : "",
             "writeAccess" : "",
             "timeDependent" : "0",
             "tag" : "",
             "visibleForEdit" : "0",
             "isTranslation" : "0",
             "dataDomain" : "0",
             "defExpr" : "",
             "isObjectLinked" : "0",
             "hasHierarchy" : "0"
            }
          ]
        }
      },
     "db" :
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
     "links" :
      {
       "its" : ""
      },
     "params" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "CURDATE",
             "n" : "Дата актуальности",
             "vis" : "1",
             "predefined" : "CurDate",
             "skipOnNull" : "0"
            }
          ]
        }
      },
     "translations" :
      {
       "its" : "",
       "isON" : "0"
      },
     "levels" :
      {
       "its" : ""
      },
     "importSchemas" :
      {
       "its" : ""
      },
     "exportSchemas" :
      {
       "its" : ""
      },
     "uniqueKeys" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "0",
             "id" : "PREDEFINED",
             "n" : "PREDEFINED",
             "vis" : "1",
             "hidden" : "1",
             "useInSelection" : "0",
             "caseSensitive" : "1"
            }
          ]
        }
      },
     "nonUniqueKeys" :
      {
       "its" : ""
      },
     "timeDependency" : "TimeReadOnly",
     "eeCallback" : "",
     "isHierarchical" : "1",
     "isSecured" : "0",
     "manageVisibility" : "0",
     "isCompound" : "0",
     "isBigDictionary" : "0",
     "hasMandatoryAccess" : "0",
     "hasDimMultipleValues" : "1",
     "defaultElementKey" : "4294967295",
     "isAbacSecured" : "0"
    }
  }
}


public static GetRdsResult GetRDSInfo(RdsId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetRds()
    {
        tArg = new GetRdsArg()
        {
            pattern = new RdsMdPattern()
            {
                all = true
            }
        },
        tRds = moniker
    };
    //Получение информации о справочнике
    var result = somClient.GetRds(tGet);
    return result;
}


См. также:


[Работа со
 справочниками НСИ](Rds_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
