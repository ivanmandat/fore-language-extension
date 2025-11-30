# SetRubMd: Операция

SetRubMd: Операция
-


**


# SetRubMd


## Синтаксис


SetRubMdResult SetRubMd(RubId tRub, SetRubMdArg
 tArg)


## Параметры


tRub. Моникёр
 открытого экземпляра базы данных временных рядов.


tArg. Параметры изменения метаданных.


## Описание


Операция SetRubMd изменяет метаданные
 базы данных временных рядов.


## Комментарии


Для выполнения операции укажите в поле tRub
 моникёр открытого экземпляра базы данных временных рядов, а в поле tArg параметры изменения. Моникёр
 может быть получен при выполнении операции [OpenRub](OpenRub.htm). В поле tArg.pattern
 указывается шаблон, в соответствии с которым будут производиться изменения,
 а в поле tArg.meta обновлённые
 метаданные базы данных временных рядов. Для сохранения изменений после
 операции SetRubMd выполните операцию
 [SaveObject](../Repository/SaveObject.htm)
 или [SaveObjectAs](../Repository/SaveObjectAs.htm).


Результатом работы операции SetRubMd
 будет моникёр базы данных временных рядов и обновлённые метаданные, которые
 могут быть запрошены в шаблоне tArg.metaGet.


## Пример


Ниже приведён пример изменения свойств базы данных временных рядов.
 В запросе передаётся моникёр базы данных временных рядов и новые значения
 свойств. В ответе приходит обновлённая информация о всех свойствах, заданных
 для базы данных временных рядов.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<SetRubMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../minus.gif)](../../#)<tRub xmlns="****">
  <id>S1!M!S!R1</id>  </tRub>
[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<pattern>
  <obInst>true</obInst>  <period>true</period>  <properties>true</properties>  </pattern>
[![](../../minus.gif)](../../#)<meta>
[![](../../minus.gif)](../../#)<properties useDeduplication="**true**">
[![](../../minus.gif)](../../#)<calendarLevels>
  <it>Month</it>  <it>Quarter</it>  <it>Year</it>  </calendarLevels>
  </properties>
  </meta>
[![](../../minus.gif)](../../#)<metaGet>
  <obInst>true</obInst>  <period>true</period>  <properties>true</properties>  </metaGet>
  </tArg>
  </SetRubMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<SetRubMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<id xmlns="****">
  <id>S1!M!S!R1</id>  </id>
[![](../../minus.gif)](../../#)<meta xmlns="****">
[![](../../minus.gif)](../../#)<obInst>
[![](../../minus.gif)](../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**5**" hf="**0**">
  <i>TS_DB</i>  <n>БД временных рядов</n>  <k>5472</k>  <c>2822</c>  <p>5471</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  <openArgs />
  </obInst>
[![](../../minus.gif)](../../#)<period>
  <startYear>1980</startYear>  <endYear>2020</endYear>  </period>
[![](../../minus.gif)](../../#)<properties keepHistory="**1**" hasMnemonics="**1**" unitIsRequired="**0**" hasEmptyAttribute="**0**" autoUpdateStat="**1**" lightWeight="**0**" useDistinctSequence="**0**" factsOnQuery="**0**" valuesOnQuery="**0**" revisionsOnQuery="**0**" compoundFactorKey="**0**" separateTableForActualData="**0**" useDeduplication="**1**" treatEmptyStringAsNull="**0**">
[![](../../minus.gif)](../../#)<objRdsRepo ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>RDS</i>  <n>Репозиторий НСИ</n>  <k>159</k>  <c>4353</c>  <p>51</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </objRdsRepo>
[![](../../minus.gif)](../../#)<objUnitsDictionary ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>UNITS_D</i>  <n>Единицы Измерения</n>  <k>174</k>  <c>3076</c>  <p>159</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </objUnitsDictionary>
[![](../../minus.gif)](../../#)<objMeasuresDictionary ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>MEASURES</i>  <n>Меры</n>  <k>172</k>  <c>3076</c>  <p>159</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <trackElementDependents>0</trackElementDependents>  </objMeasuresDictionary>
[![](../../minus.gif)](../../#)<calendarLevels>
  <it>Year</it>  <it>Quarter</it>  <it>Month</it>  </calendarLevels>
  <firstDayOfWeek>Monday</firstDayOfWeek>  </properties>
  </meta>
  </SetRubMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetRubMd" :
  {
   "tRub" :
    {
     "id" : "S1!M!S!R1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "period" : "true",
       "properties" : "true"
      },
     "meta" :
      {
       "properties" :
        {
         "@useDeduplication" : "true",
         "calendarLevels" :
          {
           "it" :
            [
              "Month",
              "Quarter",
              "Year"
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "period" : "true",
       "properties" : "true"
      }
    }
  }
}

### JSON-ответ:


{
 "SetRubMdResult" :
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
     "period" :
      {
       "startYear" : "1980",
       "endYear" : "2020"
      },
     "properties" :
      {
       "@lightWeight" : "0",
       "@useDeduplication" : "1",
       "@valuesOnQuery" : "0",
       "@factsOnQuery" : "0",
       "@hasMnemonics" : "1",
       "@revisionsOnQuery" : "0",
       "@treatEmptyStringAsNull" : "0",
       "@keepHistory" : "1",
       "@autoUpdateStat" : "1",
       "@useDistinctSequence" : "0",
       "@separateTableForActualData" : "0",
       "@unitIsRequired" : "0",
       "@compoundFactorKey" : "0",
       "@hasEmptyAttribute" : "0",
       "objRdsRepo" :
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
       "objUnitsDictionary" :
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
       "objMeasuresDictionary" :
        {
         "@ds" : "",
         "@isShortcut" : "0",
         "@isLink" : "0",
         "@ver" : "0",
         "@hf" : "0",
         "i" : "MEASURES",
         "n" : "Меры",
         "k" : "172",
         "c" : "3076",
         "p" : "159",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "trackElementDependents" : "0"
        },
       "calendarLevels" :
        {
         "it" :
          [
            "Year",
            "Quarter",
            "Month"
          ]
        },
       "firstDayOfWeek" : "Monday"
      }
    }
  }
}


public static SetRubMdResult SetRubMetadata(RubId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tSet = new SetRubMd()
    {
        tArg = new SetRubMdArg()
        {
            pattern = new RubMdPattern()
            {
                properties = true
            },
            meta = new RubMd()
            {
               properties = new RubProperties()
               {
                   calendarLevels = new DimCalendarLvl[]
                   {
                        DimCalendarLvl.Month,
                        DimCalendarLvl.Quarter,
                        DimCalendarLvl.Year
                   },
                   useDeduplication = true,
                   useDeduplicationSpecified = true
               }
            },
            metaGet = new RubMdPattern()
            {
                properties = true
            }
        },
        tRub = moniker
    };
    //Изменение метаданных базы данных временных рядов
    var result = somClient.SetRubMd(tSet);
    return result;
}


См. также:


[Работа
 с базой данных временных рядов](TimeSeriesDatabase_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
