# GetDataAreaSources: Операция

GetDataAreaSources: Операция
-


**


# GetDataAreaSources


## Синтаксис


DataAreaSources GetDataAreaSources(string mon, DataAreaSources
 tArg)


## Параметры


mon. Моникёр
 для работы с источниками данных аналитической области данных регламентного
 отчёта.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetDataAreaSources
 извлекает информацию об источниках аналитической области данных.


## Комментарии


Для выполнения операции укажите в поле mon
 моникёр открытого экземпляра регламентного отчёта с постфиксом «!DataArea!DataSources» для работы
 с источниками данных, а в поле tArg
 параметры извлечения метаданных.


Моникёр может быть получен при выполнении операции [OpenPrxMeta](OpenPrxMeta.htm).


Для получения информации обо всех источниках данных укажите в поле tArg.its один элемент коллекции
 и задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить. В качестве значения ключа укажите «-1».


Для получения информации о каком-либо конкретном источнике данных укажите
 его ключ в элементе коллекции tArg.its.


Результатом операции будет запрошенная информация об источниках данных.


## Пример


Ниже приведён пример получениё информации об источниках аналитической
 области данных регламентного отчёта. В запросе передаётся моникёр для
 работы с источниками данных и список полей, значения которых необходимо
 получить. В ответе приходит запрошенная информация об источниках данных.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetDataAreaSources xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!DataArea!DataSources</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
[![](../../minus.gif)](../../#)<slices>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
  <type>Pivot</type>[![](../../minus.gif)](../../#)<pivotSlice>
[![](../../minus.gif)](../../#)<pivot>
[![](../../minus.gif)](../../#)<dims>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>-1</k>  <id />
  <n />
  <position>Unknown</position>  </it>
  </its>
  </dims>
  </pivot>
  </pivotSlice>
  </it>
  </its>
  </slices>
  </it>
  </its>
  </tArg>
  </GetDataAreaSources>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetDataAreaSourcesResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../minus.gif)](../../#)<its xmlns="****">
[![](../../minus.gif)](../../#)<it>
  <k>1</k>[![](../../minus.gif)](../../#)<slices>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>1</k>  <id>ITEM</id>  <n>ITEM</n>  <type>Pivot</type>[![](../../minus.gif)](../../#)<pivotSlice>
[![](../../minus.gif)](../../#)<pivot>
[![](../../minus.gif)](../../#)<dims>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>5858</k>  <id>FACTS</id>  <n>Факты</n>  <position>Fixed</position>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <n>Календарь</n>  <position>Top</position>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>116</k>  <id>DIM_1</id>  <n>Dim_1</n>  <position>Left</position>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>991</k>  <id>DIM_2</id>  <n>Dim_2</n>  <position>Fixed</position>  </it>
  </its>
  </dims>
  </pivot>
  </pivotSlice>
  </it>
  </its>
  </slices>
  </it>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>[![](../../minus.gif)](../../#)<slices>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>2</k>  <id>ITEM1</id>  <n>ITEM1</n>  <type>Pivot</type>[![](../../minus.gif)](../../#)<pivotSlice>
[![](../../minus.gif)](../../#)<pivot>
[![](../../minus.gif)](../../#)<dims>
[![](../../minus.gif)](../../#)<its>
[![](../../minus.gif)](../../#)<it>
  <k>116</k>  <id>DIM_1</id>  <n>Dim_1</n>  <position>Left</position>  </it>
[![](../../minus.gif)](../../#)<it>
  <k>112</k>  <id>CALENDAR</id>  <n>Календарь</n>  <position>Top</position>  </it>
  </its>
  </dims>
  </pivot>
  </pivotSlice>
  </it>
  </its>
  </slices>
  </it>
  </its>
  </GetDataAreaSourcesResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetDataAreaSources" :
  {
   "mon" : "S1!M!S!P1!DataArea!DataSources",
   "tArg" :
    {
     "its" :
      {
       "it" :
        [
          {
           "k" : "-1",
           "id" : "",
           "n" : "",
           "slices" :
            {
             "its" :
              {
               "it" :
                [
                  {
                   "k" : "-1",
                   "id" : "",
                   "n" : "",
                   "type" : "Pivot",
                   "pivotSlice" :
                    {
                     "pivot" :
                      {
                       "dims" :
                        {
                         "its" :
                          {
                           "it" :
                            [
                              {
                               "k" : "-1",
                               "id" : "",
                               "n" : "",
                               "position" : "Unknown"
                              }
                            ]
                          }
                        }
                      }
                    }
                  }
                ]
              }
            }
          }
        ]
      }
    }
  }
}

### JSON-ответ:


{
 "GetDataAreaSourcesResult" :
  {
   "its" :
    {
     "it" :
      [
        {
         "k" : "1",
         "slices" :
          {
           "its" :
            {
             "it" :
              [
                {
                 "k" : "1",
                 "id" : "ITEM",
                 "n" : "ITEM",
                 "type" : "Pivot",
                 "pivotSlice" :
                  {
                   "pivot" :
                    {
                     "dims" :
                      {
                       "its" :
                        {
                         "it" :
                          [
                            {
                             "k" : "5858",
                             "id" : "FACTS",
                             "n" : "Факты",
                             "position" : "Fixed"
                            },
                            {
                             "k" : "112",
                             "id" : "CALENDAR",
                             "n" : "Календарь",
                             "position" : "Top"
                            },
                            {
                             "k" : "116",
                             "id" : "DIM_1",
                             "n" : "Dim_1",
                             "position" : "Left"
                            },
                            {
                             "k" : "991",
                             "id" : "DIM_2",
                             "n" : "Dim_2",
                             "position" : "Fixed"
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        },
        {
         "k" : "2",
         "slices" :
          {
           "its" :
            {
             "it" :
              [
                {
                 "k" : "2",
                 "id" : "ITEM1",
                 "n" : "ITEM1",
                 "type" : "Pivot",
                 "pivotSlice" :
                  {
                   "pivot" :
                    {
                     "dims" :
                      {
                       "its" :
                        {
                         "it" :
                          [
                            {
                             "k" : "116",
                             "id" : "DIM_1",
                             "n" : "Dim_1",
                             "position" : "Left"
                            },
                            {
                             "k" : "112",
                             "id" : "CALENDAR",
                             "n" : "Календарь",
                             "position" : "Top"
                            }
                          ]
                        }
                      }
                    }
                  }
                }
              ]
            }
          }
        }
      ]
    }
  }
}


public static DataAreaSources GetPrxDataSources(string moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tGet = new GetDataAreaSources()
    {
        tArg = new DataAreaSources()
        {
            its = new DataAreaSource[1]
            {
                new DataAreaSource()
                {
                    k = uint.MaxValue,
                    n = "",
                    id = "",
                    slices = new DataAreaSlices()
                    {
                        its = new DataAreaSlice[1]
                        {
                            new DataAreaSlice()
                            {
                                k = uint.MaxValue,
                                n = "",
                                id = "",
                                type = EaxDataAreaSliceType.Pivot,
                                pivotSlice = new DataAreaPivotSlice()
                                {
                                    pivot = new PivotMetaData()
                                    {
                                        dims = new PivotDimensions()
                                        {
                                            its = new PivotDimension[1]
                                            {
                                                new PivotDimension(){ k = uint.MaxValue, n = "", id = "", position = PvtDimPos.Unknown }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        },
        mon = moniker + "!DataArea!DataSources"
    };
    //Получение информации об источниках данных
    var result = somClient.GetDataAreaSources(tGet);
    return result;
}


См. также:


[Работа
 с регламентными отчетами](RegularReport_List.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
