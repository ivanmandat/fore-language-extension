# GetTabRangeMetaData: Операция

GetTabRangeMetaData: Операция
-


**


# GetTabRangeMetaData


## Синтаксис


TabRangeMetaData GetTabRangeMetaData(string mon,
 TabRangeMetaData tArg)


## Параметры


mon. Моникёр
 для работы с диапазоном ячеек таблицы.


tArg. Параметры выполнения
 операции.


## Описание


Операция GetTabRangeMetaData
 извлекает метаданные диапазона ячеек.


## Комментарии


Операция позволяет получить информацию о наличии объединений ячеек в
 диапазоне и условных форматах, которые применяются к диапазону ячеек.
 Для выполнения операции укажите в поле mon
 моникёр экземпляра регламентного отчёта с постфиксом «!Sheets!ключ
 листа!адрес диапазона». В поле tArg
 задайте пустые значения или значения по умолчанию для тех полей, значения
 которых необходимо получить. Для коллекций укажите один элемент. Для получения
 информации о каком-либо конкретном элементе укажите его ключ в метаданных.
 При указании в качестве ключа значения «-1» будет получена информация
 обо всех элементах данного типа.


Результатом операции будут запрошенные параметры диапазона ячеек.


## Пример


Ниже приведён пример получения метаданных диапазона ячеек. В запросе
 передаётся моникёр диапазона ячеек, в ответе приходит полученная информация.


	 SOAP  JSON C#


### SOAP-запрос:


[![](../../minus.gif)](../../#)<s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<s:Body xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**" xmlns:xsd="**http://www.w3.org/2001/XMLSchema**">
[![](../../minus.gif)](../../#)<GetTabRangeMetaData xmlns="**http://www.fsight.ru/PP.SOM.Som**">
  <mon xmlns="****">S1!M!S!P1!Sheets!1!A0:B3</mon>[![](../../minus.gif)](../../#)<tArg xmlns="****">
  <merged>0</merged>[![](../../minus.gif)](../../#)<conditions>
[![](../../minus.gif)](../../#)<Condition>
  <k>-1</k>  <id />
  <n />
  <Key>0</Key>  <Type>Values</Type>  <Details />
  </Condition>
  </conditions>
  </tArg>
  </GetTabRangeMetaData>
  </s:Body>
  </s:Envelope>


### SOAP-ответ:


[![](../../minus.gif)](../../#)<soapenv:Envelope xmlns:soapenv="**http://schemas.xmlsoap.org/soap/envelope/**">
[![](../../minus.gif)](../../#)<soapenv:Body>
[![](../../minus.gif)](../../#)<GetTabRangeMetaDataResult xmlns="**http://www.fsight.ru/PP.SOM.Som**" xmlns:q1="**http://www.fsight.ru/PP.SOM.Som**" xmlns:xsi="**http://www.w3.org/2001/XMLSchema-instance**">
  <merged xmlns="****">0</merged>[![](../../minus.gif)](../../#)<conditions xmlns="****">
[![](../../minus.gif)](../../#)<Condition>
  <k>-1</k>  <id />
  <n />
  <Key>0</Key>  <Type>Values</Type>  <Details />
  </Condition>
[![](../../minus.gif)](../../#)<Condition>
  <k>0</k>  <Key>1</Key>  <Type>CellContent</Type>[![](../../minus.gif)](../../#)<Range>
  <left>0</left>  <top>0</top>  <width>2</width>  <height>4</height>  </Range>
  <Enabled>1</Enabled>[![](../../minus.gif)](../../#)<Details>
[![](../../minus.gif)](../../#)<CellContent>
  <ContentType>0</ContentType>  <CellValue>1000</CellValue>  <SpecificText />
[![](../../minus.gif)](../../#)<Style UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Font S="**10**" C="**#FF0000**" B="**true**" H="**15**" />
  <Borders />
  <Hyperlink />
  </Style>
  <ValueCondition>4</ValueCondition>  <TextCondition>0</TextCondition>  <DateCondition>0</DateCondition>  <MinValue />
  <MaxValue />
  </CellContent>
  </Details>
  </Condition>
[![](../../minus.gif)](../../#)<Condition>
  <k>1</k>  <Key>0</Key>  <Type>CellContent</Type>[![](../../minus.gif)](../../#)<Range>
  <left>0</left>  <top>0</top>  <width>2</width>  <height>4</height>  </Range>
  <Enabled>1</Enabled>[![](../../minus.gif)](../../#)<Details>
[![](../../minus.gif)](../../#)<CellContent>
  <ContentType>0</ContentType>  <CellValue>100</CellValue>  <SpecificText />
[![](../../minus.gif)](../../#)<Style UNS="**2**">
  <Text HA="**-1**" VA="**-1**" WW="**-1**" M="**-1 -1 -1 -1**" Mmm="**-1.00 -1.00 -1.00 -1.00**" />
  <Font S="**10**" B="**true**" H="**15**" />
  <Borders />
  <Hyperlink />
  </Style>
  <ValueCondition>4</ValueCondition>  <TextCondition>0</TextCondition>  <DateCondition>0</DateCondition>  <MinValue />
  <MaxValue />
  </CellContent>
  </Details>
  </Condition>
  </conditions>
  </GetTabRangeMetaDataResult>
  </soapenv:Body>
  </soapenv:Envelope>


### JSON-запрос:


{
 "GetTabRangeMetaData" :
  {
   "mon" : "S1!M!S!P1!Sheets!1!A0:B3",
   "tArg" :
    {
     "merged" : "0",
     "conditions" :
      {
       "Condition" :
        {
         "k" : "-1",
         "id" : "",
         "n" : "",
         "Key" : "0",
         "Type" : "Values",
         "Details" : ""
        }
      }
    }
  }
}

### JSON-ответ:


{
 "GetTabRangeMetaDataResult" :
  {
   "merged" : "0",
   "conditions" :
    {
     "Condition" :
      [
        {
         "k" : "4294967295",
         "id" : "",
         "n" : "",
         "Key" : "0",
         "Type" : "Values",
         "Details" : ""
        },
        {
         "k" : "0",
         "Key" : "1",
         "Type" : "CellContent",
         "Range" :
          {
           "left" : "0",
           "top" : "0",
           "width" : "2",
           "height" : "4"
          },
         "Enabled" : "1",
         "Details" :
          {
           "CellContent" :
            {
             "ContentType" : "0",
             "CellValue" : "1000",
             "SpecificText" : "",
             "Style" :
              {
               "@UNS" : "2",
               "Text" :
                {
                 "@VA" : "-1",
                 "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
                 "@HA" : "-1",
                 "@M" : "-1 -1 -1 -1",
                 "@WW" : "-1"
                },
               "Font" :
                {
                 "@B" : "true",
                 "@S" : "10",
                 "@C" : "#FF0000",
                 "@H" : "15"
                },
               "Borders" : "",
               "Hyperlink" : ""
              },
             "ValueCondition" : "4",
             "TextCondition" : "0",
             "DateCondition" : "0",
             "MinValue" : "",
             "MaxValue" : ""
            }
          }
        },
        {
         "k" : "1",
         "Key" : "0",
         "Type" : "CellContent",
         "Range" :
          {
           "left" : "0",
           "top" : "0",
           "width" : "2",
           "height" : "4"
          },
         "Enabled" : "1",
         "Details" :
          {
           "CellContent" :
            {
             "ContentType" : "0",
             "CellValue" : "100",
             "SpecificText" : "",
             "Style" :
              {
               "@UNS" : "2",
               "Text" :
                {
                 "@VA" : "-1",
                 "@Mmm" : "-1.00 -1.00 -1.00 -1.00",
                 "@HA" : "-1",
                 "@M" : "-1 -1 -1 -1",
                 "@WW" : "-1"
                },
               "Font" :
                {
                 "@B" : "true",
                 "@S" : "10",
                 "@H" : "15"
                },
               "Borders" : "",
               "Hyperlink" : ""
              },
             "ValueCondition" : "4",
             "TextCondition" : "0",
             "DateCondition" : "0",
             "MinValue" : "",
             "MaxValue" : ""
            }
          }
        }
      ]
    }
  }
}


public static TabRangeMetaData GetTabRangeMetaData(string moniker, string sheetKey, string address)
{
    var somClient = new SomPortTypeClient(); // Прокси-объект для выполнения операции
    // Параметры выполнения операции
    var tTab = new GetTabRangeMetaData()
    {
        mon = moniker + "!Sheets!" + sheetKey + '!' + address,
        tArg = new TabRangeMetaData()
        {
            merged = new int(),
            conditions = new TabFormatCondition[1]
            {
                new TabFormatCondition ()
                {
                    k = uint.MaxValue,
                    id = "",
                    n = "",
                    Type = new TabConditionType(),
                    Details = new TabFormatConditionDetails()
                }
            }
        }
    };
    // Получение метаданных диапазона ячеек
    var result = somClient.GetTabRangeMetaData(tTab);
    return result;
}


См. также:


[Таблица](Table/tabsheet_list.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
