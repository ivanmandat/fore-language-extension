# Создание элемента управления: Операция SetPrxMd

Создание элемента управления: Операция SetPrxMd
-


**


# Создание элемента управления


Ниже приведен пример использования операции [SetPrxMd](../SetPrxMd.htm)
 для создания элемента управления в регламентном отчете. В запросе передается
 моникёр открытого экземпляра отчета, шаблон, указывающий необходимость
 создать элемент управления, и метаданные, содержащие параметры нового
 элемента управления. Результатом работы операции будет обновленная информация
 обо всех элементах управления регламентного отчета.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../../minus.gif)](../../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../../minus.gif)](../../../#)<SetPrxMd xmlns="**http://www.fsight.ru/PP.SOM.Som**">
[![](../../../minus.gif)](../../../#)<tPrx xmlns="****">
  <id>S1!M!S!P2</id>  </tPrx>
[![](../../../minus.gif)](../../../#)<tArg xmlns="****">
[![](../../../minus.gif)](../../../#)<pattern>
  <obInst>true</obInst>  <controls>Add</controls>  </pattern>
[![](../../../minus.gif)](../../../#)<meta>
[![](../../../minus.gif)](../../../#)<controls>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>0</k>  <autoRecalc>true</autoRecalc>[![](../../../minus.gif)](../../../#)<binding>
[![](../../../minus.gif)](../../../#)<value xsi:type="**q1:UiControlBindingComboBox**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**">
  <UI>ComboBox</UI>  <value>Понедельник</value>  <listMode>true</listMode>  <items>Понедельник|Вторник|Среда|Четверг|Пятница|Суббота|Воскресенье</items>  <separators>|</separators>  </value>
  </binding>
  </it>
  </its>
  </controls>
  </meta>
[![](../../../minus.gif)](../../../#)<metaGet>
  <obInst>true</obInst>  <controls>Get</controls>  </metaGet>
  </tArg>
  </SetPrxMd>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../../minus.gif)](../../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../../minus.gif)](../../../#)<soapenv:Body>
[![](../../../minus.gif)](../../../#)<SetPrxMdResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
[![](../../../minus.gif)](../../../#)<id xmlns="****">
  <id>S1!M!S!P2</id>  </id>
[![](../../../minus.gif)](../../../#)<meta xmlns="****">
[![](../../../minus.gif)](../../../#)<obInst>
[![](../../../minus.gif)](../../../#)<obDesc ds="****" isShortcut="**0**" isLink="**0**" ver="**1**" hf="**0**">
  <i>REPORT_1</i>  <n>Регламентный отчет</n>  <k>6334</k>  <c>2562</c>  <p>6333</p>  <h>0</h>  <hasPrv>0</hasPrv>  <ic>0</ic>  <isPermanent>1</isPermanent>  <isTemp>0</isTemp>  </obDesc>
  </obInst>
  <dirty>1</dirty>[![](../../../minus.gif)](../../../#)<controls>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <k>1</k>  <id>ITEM</id>  <n>ITEM</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<value>
  <value />
  <dt>0</dt>[![](../../../minus.gif)](../../../#)<dimId>
  <id>S1!M!S!P2!Controls!1</id>  </dimId>
  </value>
  <autoRecalc>1</autoRecalc>  <recalcOnChange>0</recalcOnChange>[![](../../../minus.gif)](../../../#)<size>
  <width>-1</width>  <height>-1</height>  <units>DLU96</units>  </size>
[![](../../../minus.gif)](../../../#)<dimension>
[![](../../../minus.gif)](../../../#)<dataSource>
  <k>1</k>  <id>STD_CUBE</id>  <n>Куб</n>  <vis>1</vis>  </dataSource>
[![](../../../minus.gif)](../../../#)<slice>
  <k>1</k>  <id>Срез1</id>  <n>Срез1</n>  <vis>1</vis>  </slice>
[![](../../../minus.gif)](../../../#)<dimension>
  <k>112</k>  <id>CALENDAR</id>  <n>Календарь</n>  <vis>1</vis>  </dimension>
  </dimension>
[![](../../../minus.gif)](../../../#)<appearance>
  <report>1</report>  <specificRecalc>1</specificRecalc>  <recalcAllSheets>1</recalcAllSheets>  </appearance>
  <multiSelect>1</multiSelect>[![](../../../minus.gif)](../../../#)<binding>
[![](../../../minus.gif)](../../../#)<value xsi:type="**q1:UiControlBindingDimCombo**">
  <UI>DimCombo</UI>  <object>CALENDAR</object>  <valueAttribute>ORDER</valueAttribute>  <levelAttribute>0{}</levelAttribute>  <paramValues />
  </value>
  </binding>
[![](../../../minus.gif)](../../../#)<changeCounters>
  <Content>0</Content>  <Structure>0</Structure>  </changeCounters>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <k>2</k>  <id>ITEM1</id>  <n>ITEM1</n>  <vis>1</vis>[![](../../../minus.gif)](../../../#)<value>
  <value>Понедельник</value>  <dt>1</dt>  </value>
  <autoRecalc>1</autoRecalc>  <recalcOnChange>0</recalcOnChange>[![](../../../minus.gif)](../../../#)<size>
  <width>-1</width>  <height>-1</height>  <units>DLU96</units>  </size>
[![](../../../minus.gif)](../../../#)<appearance>
  <report>1</report>  <specificRecalc>0</specificRecalc>  </appearance>
  <multiSelect>2</multiSelect>[![](../../../minus.gif)](../../../#)<binding>
[![](../../../minus.gif)](../../../#)<value xsi:type="**q1:UiControlBindingComboBox**">
  <UI>ComboBox</UI>  <value>Понедельник</value>  <listMode>1</listMode>  <items>Понедельник|Вторник|Среда|Четверг|Пятница|Суббота|Воскресенье</items>  <separators>|</separators>  </value>
  </binding>
[![](../../../minus.gif)](../../../#)<changeCounters>
  <Content>0</Content>  <Structure>0</Structure>  </changeCounters>
  </it>
  </its>
[![](../../../minus.gif)](../../../#)<sheetControlsOrders>
[![](../../../minus.gif)](../../../#)<its>
[![](../../../minus.gif)](../../../#)<it>
  <SheetKey>1</SheetKey>[![](../../../minus.gif)](../../../#)<order>
  <it>1</it>  <it>2</it>  </order>
  </it>
[![](../../../minus.gif)](../../../#)<it>
  <SheetKey>2</SheetKey>[![](../../../minus.gif)](../../../#)<order>
  <it>1</it>  <it>2</it>  </order>
  </it>
  </its>
  </sheetControlsOrders>
  </controls>
[![](../../../minus.gif)](../../../#)<dataChange>
  <isDataChanged>0</isDataChanged>  </dataChange>
  </meta>
  </SetPrxMdResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "SetPrxMd" :
  {
   "tPrx" :
    {
     "id" : "S1!M!S!P2"
    },
   "tArg" :
    {
     "pattern" :
      {
       "obInst" : "true",
       "controls" : "Add"
      },
     "meta" :
      {
       "controls" :
        {
         "its" :
          {
           "it" :
            [
              {
               "k" : "0",
               "autoRecalc" : "true",
               "binding" :
                {
                 "value" :
                  {
                   "@type" : "q1:UiControlBindingComboBox",
                   "UI" : "ComboBox",
                   "value" : "Понедельник",
                   "listMode" : "true",
                   "items" : "Понедельник|Вторник|Среда|Четверг|Пятница|Суббота|Воскресенье",
                   "separators" : "|"
                  }
                }
              }
            ]
          }
        }
      },
     "metaGet" :
      {
       "obInst" : "true",
       "controls" : "Get"
      }
    }
  }
}

### JSON-ответ:


{
 "SetPrxMdResult" :
  {
   "id" :
    {
     "id" : "S1!M!S!P2"
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
         "@ver" : "1",
         "@hf" : "0",
         "i" : "REPORT_1",
         "n" : "Регламентный отчет",
         "k" : "6334",
         "c" : "2562",
         "p" : "6333",
         "h" : "0",
         "hasPrv" : "0",
         "ic" : "0",
         "isPermanent" : "1",
         "isTemp" : "0"
        }
      },
     "dirty" : "1",
     "controls" :
      {
       "its" :
        {
         "it" :
          [
            {
             "k" : "1",
             "id" : "ITEM",
             "n" : "ITEM",
             "vis" : "1",
             "value" :
              {
               "value" : "",
               "dt" : "0",
               "dimId" :
                {
                 "id" : "S1!M!S!P2!Controls!1"
                }
              },
             "autoRecalc" : "1",
             "recalcOnChange" : "0",
             "size" :
              {
               "width" : "-1",
               "height" : "-1",
               "units" : "DLU96"
              },
             "dimension" :
              {
               "dataSource" :
                {
                 "k" : "1",
                 "id" : "STD_CUBE",
                 "n" : "Куб",
                 "vis" : "1"
                },
               "slice" :
                {
                 "k" : "1",
                 "id" : "Срез1",
                 "n" : "Срез1",
                 "vis" : "1"
                },
               "dimension" :
                {
                 "k" : "112",
                 "id" : "CALENDAR",
                 "n" : "Календарь",
                 "vis" : "1"
                }
              },
             "appearance" :
              {
               "report" : "1",
               "specificRecalc" : "1",
               "recalcAllSheets" : "1"
              },
             "multiSelect" : "1",
             "binding" :
              {
               "value" :
                {
                 "@type" : "q1:UiControlBindingDimCombo",
                 "UI" : "DimCombo",
                 "object" : "CALENDAR",
                 "valueAttribute" : "ORDER",
                 "levelAttribute" : "0{}",
                 "paramValues" : ""
                }
              },
             "changeCounters" :
              {
               "Content" : "0",
               "Structure" : "0"
              }
            },
            {
             "k" : "2",
             "id" : "ITEM1",
             "n" : "ITEM1",
             "vis" : "1",
             "value" :
              {
               "value" : "Понедельник",
               "dt" : "1"
              },
             "autoRecalc" : "1",
             "recalcOnChange" : "0",
             "size" :
              {
               "width" : "-1",
               "height" : "-1",
               "units" : "DLU96"
              },
             "appearance" :
              {
               "report" : "1",
               "specificRecalc" : "0"
              },
             "multiSelect" : "2",
             "binding" :
              {
               "value" :
                {
                 "@type" : "q1:UiControlBindingComboBox",
                 "UI" : "ComboBox",
                 "value" : "Понедельник",
                 "listMode" : "1",
                 "items" : "Понедельник|Вторник|Среда|Четверг|Пятница|Суббота|Воскресенье",
                 "separators" : "|"
                }
              },
             "changeCounters" :
              {
               "Content" : "0",
               "Structure" : "0"
              }
            }
          ]
        },
       "sheetControlsOrders" :
        {
         "its" :
          {
           "it" :
            [
              {
               "SheetKey" : "1",
               "order" :
                {
                 "it" :
                  [
                    "1",
                    "2"
                  ]
                }
              },
              {
               "SheetKey" : "2",
               "order" :
                {
                 "it" :
                  [
                    "1",
                    "2"
                  ]
                }
              }
            ]
          }
        }
      },
     "dataChange" :
      {
       "isDataChanged" : "0"
      }
    }
  }
}


public static SetPrxMdResult CreatePrxControl(PrxId moniker)
{
    var somClient = new SomPortTypeClient(); //Прокси-объект для выполнения операций
    //Параметры выполнения операции
    var tArg = new SetPrxMd()
    {
        tArg = new SetPrxMdArg()
        {
            meta = new PrxMd()
            {
                controls = new PrxControls()
                {
                    its = new PrxControl[1]
                    {
                        //Параметры создаваемого элемента управления
                        new PrxControl()
                        {
                            autoRecalc = true,
                            //Параметры редактора элемента управления
                            binding = new UiControlBinding()
                            {
                                value = new UiControlBindingComboBox()
                                {
                                    UI = "ComboBox",
                                    items = "Понедельник|Вторник|Среда|Четверг|Пятница|Суббота|Воскресенье",
                                    separators = "|",
                                    value = "Понедельник",
                                    listMode = true
                                }
                            }
                        }
                    }
                }
            },
            pattern = new PrxMdPattern()
            {
                controls = ListOperation.Add
            },
            metaGet = new PrxMdPattern()
            {
                controls = ListOperation.Get
            }
        },
        tPrx = moniker
    };
    //Получение метаданных
    var result = somClient.SetPrxMd(tArg);
    return result;
}


См. также:


[SetPrxMd](../SetPrxMd.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
