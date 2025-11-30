# Получение информации об объектах задачи ETL: Операция GetEtl

Получение информации об объектах задачи ETL: Операция GetEtl
-


**


# Получение информации об объектах задачи ETL


Ниже приведен пример использования операции [GetEtl](../GetEtl.htm)
 для получения информации об объектах, из которых построены цепочки экспорта/импорта
 данных в задаче ETL. В запросе передается моникёр открытого экземпляра
 задачи ETL и шаблон, указывающий необходимость получить информацию об
 указанных объектах. В ответе приходит полученная информация.


[![](../../../Opened.gif)![](../../../Closed.gif)SOAP](javascript:TextPopup(this))


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<GetEtl xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tEtl xmlns="****">
  <id>S1!M!S!L1</id>  </tEtl>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <objects>Get</objects>[![](../../../minus.gif)](../../../#)<object>
  <settings>true</settings>  </object>
  </pattern>
  </tArg>
  </GetEtl>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<GetEtlResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!L1</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**3**" hf="**0**">
  <i>ETL_INDICATOR</i>  <n>Задача ETL для загрузки показателей</n>  <k>7012</k>  <c>4097</c>  <p>7011</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>0</dirty>[![](../../../minus.gif)](../../../#)<objects>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <id>PLAINDATAEXCELPROVIDEREX1</id>  <n>Импорт из Excel</n>  <vis>1</vis>  <type>PlainDataExcelProviderEx</type>[![](../../../minus.gif)](../../../#)<settings>
[![](../../../minus.gif)](../../../#)<plainProvider>
[![](../../../minus.gif)](../../../#)<provider>
[![](../../../minus.gif)](../../../#)<props>
  <type>ExcelEx</type>[![](../../../minus.gif)](../../../#)<excelEx>
[![](../../../minus.gif)](../../../#)<stringDataFormat>
  <useSystem>1</useSystem>  <dateFormat>ДД.ММ.ГГГГ</dateFormat>  <decimalSeparator>,</decimalSeparator>  <usePredefinedDateFormats>1</usePredefinedDateFormats>  </stringDataFormat>
  <typeGuessRows>100</typeGuessRows>  <autoFillMode>DataRow</autoFillMode>  <filterIf />
  <sheet>Лист1</sheet>  <hasHeader>1</hasHeader>  <headerRow>0</headerRow>  <format>xlsx</format>  <dataRow>0</dataRow>  </excelEx>
  <srcFileName>D:\Work\Indicator.xls</srcFileName>  </props>
  </provider>
  <fetchBlockSize>-1</fetchBlockSize>  <ignoreIncorrectVals>0</ignoreIncorrectVals>  <unpivotMode>0</unpivotMode>  <queryForFile>0</queryForFile>  </plainProvider>
  </settings>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>PLAINDATAMETABASECONSUMER1</id>  <n>Приёмник репозитория</n>  <vis>1</vis>  <type>PlainDataMetabaseConsumer</type>[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>T_INDICATOR</i>  <n>Таблица</n>  <k>7013</k>  <c>769</c>  <p>7011</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <read>1</read>  <write>1</write>[![](../../../minus.gif)](../../../#)<settings>
[![](../../../minus.gif)](../../../#)<plainConsumer>
[![](../../../minus.gif)](../../../#)<consumer>
[![](../../../minus.gif)](../../../#)<props>
  <type>Mb</type>[![](../../../minus.gif)](../../../#)<mb>
[![](../../../minus.gif)](../../../#)<dataset ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>T_INDICATOR</i>  <n>Таблица</n>  <k>7013</k>  <c>769</c>  <p>7011</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </dataset>
  </mb>
  </props>
  </consumer>
  <keyFieldNames />
  <clearConsumer>1</clearConsumer>[![](../../../minus.gif)](../../../#)<bulk>
  <commitCount>1024</commitCount>  <actionOnProblem>DiscardRecordsInTransaction</actionOnProblem>  <saveInvalidRecs>0</saveInvalidRecs>  <invalidRecsFileName />
  <useStopLimit>0</useStopLimit>  <stopLimit>1024</stopLimit>  <eventId />
  </bulk>
  </plainConsumer>
  </settings>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>PLAINDATACOPY1</id>  <n>Копирование данных</n>  <vis>1</vis>  <type>PlainDataCopy</type>[![](../../../minus.gif)](../../../#)<settings>
[![](../../../minus.gif)](../../../#)<plainDataCopy>
  <provider />
[![](../../../minus.gif)](../../../#)<consumer>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**0**" hf="**0**">
  <i>T_INDICATOR</i>  <n>Таблица</n>  <k>7013</k>  <c>769</c>  <p>7011</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  </obDesc>
  <keyFieldNames />
  </consumer>
  <clearConsumer>1</clearConsumer>  <commitCount>1024</commitCount>  <actionOnProblem>DiscardRecordsInTransaction</actionOnProblem>  </plainDataCopy>
  </settings>
  </it>
  </its>
  </objects>
  <shapes />
  </meta>
  </GetEtlResult>
  </soapenv:Body>
  </soapenv:Envelope>


[![](../../../Opened.gif)![](../../../Closed.gif)JSON](javascript:TextPopup(this))


### JSON-запрос:


{
 "GetEtl" :
  {
   "tEtl" :
    {
     "id" : "S1!M!S!L1"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "objects" : "Get",
       "object" :
        {
         "settings" : "true"
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetEtlResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!L1"
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
         "@ver" : "3",
         "@hf" : "0",
         "i" : "ETL_INDICATOR",
         "n" : "Задача ETL для загрузки показателей",
         "k" : "7012",
         "c" : "4097",
         "p" : "7011",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "0",
     "objects" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "0",
             "id" : "PLAINDATAEXCELPROVIDEREX1",
             "n" : "Импорт из Excel",
             "vis" : "1",
             "type" : "PlainDataExcelProviderEx",
             "settings" :
              {
               "plainProvider" :
                {
                 "provider" :
                  {
                   "props" :
                    {
                     "type" : "ExcelEx",
                     "excelEx" :
                      {
                       "stringDataFormat" :
                        {
                         "useSystem" : "1",
                         "dateFormat" : "ДД.ММ.ГГГГ",
                         "decimalSeparator" : ",",
                         "usePredefinedDateFormats" : "1"
                        },
                       "typeGuessRows" : "100",
                       "autoFillMode" : "DataRow",
                       "filterIf" : "",
                       "sheet" : "Лист1",
                       "hasHeader" : "1",
                       "headerRow" : "0",
                       "format" : "xlsx",
                       "dataRow" : "0"
                      },
                     "srcFileName" : "D:\Work\Indicator.xls"
                    }
                  },
                 "fetchBlockSize" : "-1",
                 "ignoreIncorrectVals" : "0",
                 "unpivotMode" : "0",
                 "queryForFile" : "0"
                }
              }
            },
            {
             "k" : "1",
             "id" : "PLAINDATAMETABASECONSUMER1",
             "n" : "Приёмник репозитория",
             "vis" : "1",
             "type" : "PlainDataMetabaseConsumer",
             "obDesc" :
              {
               "@ds" : "",
               "@isShortcut" : "0",
               "@isLink" : "0",
               "@ver" : "0",
               "@hf" : "0",
               "i" : "T_INDICATOR",
               "n" : "Таблица",
               "k" : "7013",
               "c" : "769",
               "p" : "7011",
               "h" : "0",
               "hasPrv" : "0",
               "ic" : "0"
              },
             "read" : "1",
             "write" : "1",
             "settings" :
              {
               "plainConsumer" :
                {
                 "consumer" :
                  {
                   "props" :
                    {
                     "type" : "Mb",
                     "mb" :
                      {
                       "dataset" :
                        {
                         "@ds" : "",
                         "@isShortcut" : "0",
                         "@isLink" : "0",
                         "@ver" : "0",
                         "@hf" : "0",
                         "i" : "T_INDICATOR",
                         "n" : "Таблица",
                         "k" : "7013",
                         "c" : "769",
                         "p" : "7011",
                         "h" : "0",
                         "hasPrv" : "0",
                         "ic" : "0"
                        }
                      }
                    }
                  },
                 "keyFieldNames" : "",
                 "clearConsumer" : "1",
                 "bulk" :
                  {
                   "commitCount" : "1024",
                   "actionOnProblem" : "DiscardRecordsInTransaction",
                   "saveInvalidRecs" : "0",
                   "invalidRecsFileName" : "",
                   "useStopLimit" : "0",
                   "stopLimit" : "1024",
                   "eventId" : ""
                  }
                }
              }
            },
            {
             "k" : "2",
             "id" : "PLAINDATACOPY1",
             "n" : "Копирование данных",
             "vis" : "1",
             "type" : "PlainDataCopy",
             "settings" :
              {
               "plainDataCopy" :
                {
                 "provider" : "",
                 "consumer" :
                  {
                   "obDesc" :
                    {
                     "@ds" : "",
                     "@isShortcut" : "0",
                     "@isLink" : "0",
                     "@ver" : "0",
                     "@hf" : "0",
                     "i" : "T_INDICATOR",
                     "n" : "Таблица",
                     "k" : "7013",
                     "c" : "769",
                     "p" : "7011",
                     "h" : "0",
                     "hasPrv" : "0",
                     "ic" : "0"
                    },
                   "keyFieldNames" : ""
                  },
                 "clearConsumer" : "1",
                 "commitCount" : "1024",
                 "actionOnProblem" : "DiscardRecordsInTransaction"
                }
              }
            }
          ]
        }
      },
     "shapes" : ""
    }
  }
}


[![](../../../Opened.gif)![](../../../Closed.gif)C#](javascript:TextPopup(this))


public static GetEtlResult GetETLInfo(EtlId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetEtl()
    {
        tArg = new GetEtlArg()
        {
            pattern = new EtlMdPattern()
            {
                objects = ListOperation.Get,
                @object = new EtlObjectPattern()
                {
                    settings = true
                }
            }
        },
        tEtl = moniker
    };
    //Получение информации об объектах задачи ETL
    var result = somClient.GetEtl(tGet);
    return result;
}


См. также:


[GetEtl:
 Операция](../GetEtl.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
